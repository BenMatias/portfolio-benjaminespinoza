/**
 * Netlify Serverless Function: gemini-proxy
 * ==========================================
 * Secure proxy for Gemini API requests.
 * The API key is stored as a Netlify environment variable (GEMINI_API_KEY)
 * and is NEVER exposed to the browser.
 *
 * Security features:
 * - Strict Origin & Referer validation
 * - Prompt length enforcement (max 500 chars)
 * - Safe CORS response headers
 */

const ALLOWED_ORIGINS = [
  'https://benmatias.com',
  'https://www.benmatias.com',
];

function isOriginAllowed(origin) {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Allow localhost or 127.0.0.1 for local development
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) return true;
  return false;
}

function getCorsHeaders(origin) {
  const allowed = isOriginAllowed(origin) ? origin : 'https://benmatias.com';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const referer = event.headers.referer || event.headers.Referer || '';
  const corsHeaders = getCorsHeaders(origin);

  // Handle preflight OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  // Validate Origin / Referer to prevent unauthorized third-party requests
  const originValid = origin ? isOriginAllowed(origin) : (
    referer && (
      referer.startsWith('https://benmatias.com') ||
      referer.startsWith('https://www.benmatias.com') ||
      referer.startsWith('http://localhost') ||
      referer.startsWith('http://127.0.0.1')
    )
  );

  if (!originValid) {
    return {
      statusCode: 403,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Access forbidden: Request origin not authorized.' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Read the API key from environment variables (never exposed to the client)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Gemini API key not configured on the server.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  const { prompt, context, lang } = body;

  if (!prompt || typeof prompt !== 'string') {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Missing or invalid "prompt" field.' }),
    };
  }

  const trimmedPrompt = prompt.trim();
  if (trimmedPrompt.length === 0) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Prompt cannot be empty.' }),
    };
  }

  if (trimmedPrompt.length > 500) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Prompt exceeds maximum limit of 500 characters.' }),
    };
  }

  const sanitizedContext = typeof context === 'string' ? context.slice(0, 4000) : '';

  const langInstruction =
    lang === 'es'
      ? 'Responde SIEMPRE en español de manera profesional, clara, amigable y concisa.'
      : 'Always answer in English in a professional, helpful, and concise tone.';

  const systemInstruction = `You are a professional AI assistant named Gemini Assistant on Benjamín Espinoza's Business & Data Analyst portfolio.
Your goal is to answer questions from recruiters or users about Benjamín's dashboards, publications, and experience.
${langInstruction}

Current context:
${sanitizedContext}`;

  const geminiBody = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemInstruction}\n\nUser query: ${trimmedPrompt}` }],
      },
    ],
  };

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API Error:', geminiRes.status, errText);
      return {
        statusCode: geminiRes.status,
        headers: corsHeaders,
        body: JSON.stringify({ error: `Gemini API returned ${geminiRes.status}` }),
      };
    }

    const geminiData = await geminiRes.json();
    const responseText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
      body: JSON.stringify({ response: responseText }),
    };
  } catch (err) {
    console.error('Proxy fetch error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Internal server error while calling Gemini API.' }),
    };
  }
};
