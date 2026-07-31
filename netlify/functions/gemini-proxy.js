/**
 * Netlify Serverless Function: gemini-proxy
 * ==========================================
 * Secure proxy for Gemini API requests.
 * The API key is stored as a Netlify environment variable (GEMINI_API_KEY)
 * and is NEVER exposed to the browser.
 *
 * Set up in Netlify Dashboard:
 *   Site Settings → Environment Variables → Add:
 *   Key:   GEMINI_API_KEY
 *   Value: AIzaSy... (your Google AI Studio key)
 */

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Read the API key from environment variables (never exposed to the client)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Gemini API key not configured on the server.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  const { prompt, context, lang } = body;

  if (!prompt || typeof prompt !== 'string') {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Missing or invalid "prompt" field.' }),
    };
  }

  const langInstruction =
    lang === 'es'
      ? 'Responde SIEMPRE en español de manera profesional, clara, amigable y concisa.'
      : 'Always answer in English in a professional, helpful, and concise tone.';

  const systemInstruction = `You are a professional AI assistant named Gemini Assistant on Benjamín Espinoza's Business & Data Analyst portfolio.
Your goal is to answer questions from recruiters or users about Benjamín's dashboards, publications, and experience.
${langInstruction}

Current context:
${context || ''}`;

  const geminiBody = {
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemInstruction}\n\nUser query: ${prompt}` }],
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
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: `Gemini API returned ${geminiRes.status}` }),
      };
    }

    const geminiData = await geminiRes.json();
    const responseText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ response: responseText }),
    };
  } catch (err) {
    console.error('Proxy fetch error:', err);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Internal server error while calling Gemini API.' }),
    };
  }
};
