const translations = {
  en: {
    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst focused on transforming data into decisions", heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects", btnResume: "View Resume", navAbout: "About", navResume: "CV / Resume", navProjects: "Projects",
    aboutTitle: "About Me", aboutContent: `<p>I'm Benjamin Espinoza... (full content)</p>`,
    impactTitle: "How I’ve Made an Impact", impacts: [ /*...*/ ], projectsTitle: "Featured Projects", /*...*/
    
    // --- CV Page Content ---
    cv_hero_title: "My Professional Journey",
    cv_hero_summary: "A journey through the projects and roles that have defined my career in the world of data.",
    cv_download: "Download PDF",
    cv_skills_title: "My Toolkit",
    cv_languages_title: "Languages", cv_interests_title: "Interests", cv_certifications_title: "Certifications",
    cv_badges_title: "Highlighted Badges", cv_credly_link: "View profile on Credly",
    
    cv_timeline_items: [
      { type: 'work', date: "May 2023 – Present", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Built a company-wide reporting and KPI system from scratch...</li></ul>` },
      { type: 'work', date: "Sep 2021 – Apr 2023", title: "Data & Business Control Analyst", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Created a new data analytics function...</li></ul>` },
      { type: 'work', date: "Nov 2019 – Aug 2021", title: "Financial Performance Analyst", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Tracked KPIs and costs for modernization projects...</li></ul>` },
      { type: 'education', date: "2024", title: "International Diploma in Digital Transformation", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com" },
      { type: 'education', date: "2022", title: "Diploma in Web Design & Programming", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl" },
      { type: 'education', date: "2022", title: "University Preparation Program", company: "BYU PathwayConnect", url: "https://www.byupathway.edu" },
      { type: 'education', date: "2013–2020", title: "Industrial Civil Engineering", company: "Universidad de Valparaíso", url: "https://uv.cl" }
    ],
    cv_skills_items: [
        { category: "Visualization", skills: [ { name: "Power BI", logo: "assets/img/logos/power-bi.png" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.png" }, { name: "Tableau", logo: "assets/img/logos/tableau.png" } ]},
        { category: "Data", skills: [ { name: "SQL", logo: null }, { name: "Excel", logo: null }, { name: "LookML", logo: null } ]},
        { category: "Methods", skills: [ { name: "KPIs", logo: null }, { name: "Agile", logo: null }, { name: "Storytelling", logo: null } ]}
    ],
    cv_languages_items: [ { lang: "Spanish", level: "Native", flag: "es" }, { lang: "English", level: "B2 Upper-Intermediate", flag: "gb" }, { lang: "French", level: "A1 Basic", flag: "fr" } ],
    cv_interests_items: [ { name: "Running", icon: "fa-solid fa-person-running" }, { name: "Football", icon: "fa-solid fa-futbol" }, { name: "Gaming", icon: "fa-solid fa-gamepad" }, { name: "Guitar", icon: "fa-solid fa-guitar" }, { name: "Drawing", icon: "fa-solid fa-pencil-alt" }, { name: "Tennis", icon: "fa-solid fa-trophy" } ],
    cv_certifications_items: [ /*...*/ ]
  },
  es: {
    // --- (Contenido completo en Español aquí, incluyendo la nueva estructura de timeline_items) ---
    cv_hero_title: "Mi Trayectoria Profesional",
    cv_hero_summary: "Un viaje a través de los proyectos y roles que han definido mi carrera en el mundo de los datos.",
    cv_download: "Descargar PDF",
    cv_skills_title: "Mi Caja de Herramientas",
    // ... (resto de traducciones)
  }
};

let currentLang = 'en';

function setupScrollAnimations() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
}

function populateCvPage(lang) {
    const data = translations[lang];
    const getEl = (id) => document.getElementById(id);

    // Poblar textos
    if (getEl('cv-hero-title')) getEl('cv-hero-title').textContent = data.cv_hero_title;
    if (getEl('cv-hero-summary')) getEl('cv-hero-summary').textContent = data.cv_hero_summary;
    if (getEl('download-btn-text')) getEl('download-btn-text').textContent = data.cv_download;
    if (getEl('skills-title')) getEl('skills-title').textContent = data.cv_skills_title;
    // ... (poblar todos los demás títulos)

    // Generar la Línea de Tiempo completa
    const timelineContainer = getEl('timeline-content-wrapper');
    if (timelineContainer) {
        timelineContainer.innerHTML = ''; // Limpiar
        data.cv_timeline_items.forEach((item, index) => {
            const side = (index % 2 === 0) ? 'left' : 'right';
            const contentHtml = `
                <div class="timeline-item timeline-item-${side}">
                    <div class="timeline-content-block">
                        ${item.logo ? `<img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo">` : ''}
                        <h3>${item.title}</h3>
                        <p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>
                        ${item.description || ''}
                    </div>
                </div>
            `;
            timelineContainer.innerHTML += contentHtml;
        });
    }
    
    // ... (Generar el resto de las secciones como Skills, Languages, etc.)

    // Activar las animaciones después de crear los elementos
    setupScrollAnimations();
}


function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang];

  // Logic for index.html
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
      // ... (Toda la lógica para poblar index.html aquí)
  }
  
  // Logic for cv.html
  const cvHeroTitle = document.getElementById('cv-hero-title');
  if (cvHeroTitle) {
      populateCvPage(lang);
  }

  // ... (Lógica común para navegación y cambio de idioma)
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage('en');
  
  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  // ... (Lógica del menú hamburguesa y carrusel)
});
