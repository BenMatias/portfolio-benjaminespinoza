const translations = {
  en: {
    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst focused on transforming data into decisions",
    heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects", btnResume: "View Resume", navAbout: "About", navResume: "CV / Resume", navProjects: "Projects",
    aboutTitle: "About Me", aboutContent: `<p>I'm Benjamin Espinoza, Business & Data Analyst... (content)</p>`,
    impactTitle: "How I’ve Made an Impact", impacts: [/*...*/],
    projectsTitle: "Featured Projects", /*...*/
    
    // --- CV Page Content ---
    cv_hero_title: "My Professional Journey",
    cv_hero_summary: "A summary of my experience transforming data into strategic decisions through analysis and business intelligence.",
    cv_download: "Download PDF",
    cv_work_title: "Work Experience",
    cv_education_title: "Education",
    cv_skills_title: "Skills & Tools",
    cv_languages_title: "Languages",
    cv_interests_title: "Interests",
    cv_certifications_title: "Certifications",
    cv_badges_title: "Highlighted Badges",
    cv_credly_link: "View profile on Credly",
    cv_work_items: [
      { date: "May 2023 – Present", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Built a company-wide reporting and KPI system from scratch...</li></ul>` },
      { date: "Sep 2021 – Apr 2023", title: "Data & Business Control Analyst", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Created a new data analytics function...</li></ul>` },
      { date: "Nov 2019 – Aug 2021", title: "Financial Performance Analyst", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Tracked KPIs and costs for modernization projects...</li></ul>` }
    ],
    cv_education_items: [ /*...*/ ],
    cv_skills_items: [
        { name: "Power BI", logo: "assets/img/logos/power-bi.svg" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.svg" },
        { name: "Tableau", logo: "assets/img/logos/tableau.svg" }, { name: "SQL", logo: "assets/img/logos/sql.svg" },
        { name: "Excel", logo: "assets/img/logos/excel.svg" }, { name: "LookML", logo: "assets/img/logos/lookml.svg" }
    ],
    cv_languages_items: [
        { lang: "Spanish", level: "Native" }, { lang: "English", level: "B2 Upper-Intermediate" }, { lang: "French", level: "A1" }
    ],
    cv_interests_items: [
        { name: "Running", icon: "fa-solid fa-person-running" }, { name: "Football", icon: "fa-solid fa-futbol" },
        { name: "Gaming", icon: "fa-solid fa-gamepad" }, { name: "Guitar", icon: "fa-solid fa-guitar" },
        { name: "Drawing", icon: "fa-solid fa-pencil-alt" }, { name: "Tennis", icon: "fa-solid fa-table-tennis-paddle-ball" }
    ],
    cv_certifications_items: [ /*...*/ ],
    cv_badges_items: [ /*...*/ ]
  },
  es: {
    // --- Index Page Content ---
    /*...*/
    // --- CV Page Content ---
    cv_hero_title: "Mi Trayectoria Profesional",
    cv_hero_summary: "Un resumen de mi experiencia transformando datos en decisiones estratégicas a través del análisis y la inteligencia de negocios.",
    cv_download: "Descargar PDF",
    cv_work_title: "Experiencia Laboral",
    cv_education_title: "Educación",
    cv_skills_title: "Habilidades y Herramientas",
    cv_languages_title: "Idiomas",
    cv_interests_title: "Intereses",
    /*...*/
    cv_languages_items: [
        { lang: "Español", level: "Nativo" }, { lang: "Inglés", level: "B2 Intermedio-Alto" }, { lang: "Francés", level: "A1" }
    ],
    cv_interests_items: [
        { name: "Correr", icon: "fa-solid fa-person-running" }, { name: "Fútbol", icon: "fa-solid fa-futbol" },
        { name: "Videojuegos", icon: "fa-solid fa-gamepad" }, { name: "Guitarra", icon: "fa-solid fa-guitar" },
        { name: "Dibujo", icon: "fa-solid fa-pencil-alt" }, { name: "Tenis", icon: "fa-solid fa-table-tennis-paddle-ball" }
    ],
    /*...*/
  }
};

let currentLang = 'en';

function renderBadges() {
    let attempts = 0;
    const maxAttempts = 30; // Intentar por 3 segundos
    const interval = setInterval(() => {
        if (typeof window.Credly === 'object' && window.Credly !== null) {
            window.Credly.init();
            clearInterval(interval);
        } else if (attempts >= maxAttempts) {
            clearInterval(interval);
        }
        attempts++;
    }, 100);
}

function populateCvPage(lang) {
    const data = translations[lang];
    const getEl = (id) => document.getElementById(id);

    // Poblar secciones principales
    if (getEl('cv-hero-title')) getEl('cv-hero-title').textContent = data.cv_hero_title;
    if (getEl('cv-hero-summary')) getEl('cv-hero-summary').textContent = data.cv_hero_summary;
    if (getEl('download-btn-text')) getEl('download-btn-text').textContent = data.cv_download;
    if (getEl('work-experience-title')) getEl('work-experience-title').textContent = data.cv_work_title;
    if (getEl('education-title')) getEl('education-title').textContent = data.cv_education_title;
    if (getEl('skills-title')) getEl('skills-title').textContent = data.cv_skills_title;
    if (getEl('languages-title')) getEl('languages-title').textContent = data.cv_languages_title;
    if (getEl('interests-title')) getEl('interests-title').textContent = data.cv_interests_title;
    if (getEl('certifications-title')) getEl('certifications-title').textContent = data.cv_certifications_title;
    if (getEl('badges-title')) getEl('badges-title').textContent = data.cv_badges_title;
    if (getEl('credly-link')) getEl('credly-link').querySelector('span').textContent = data.cv_credly_link;
    
    // Generar Experiencia Laboral (CORREGIDO)
    const workContainer = getEl('work-experience-content');
    if(workContainer) workContainer.innerHTML = data.cv_work_items.map(item => `<div class="timeline-item"><div class="timeline-date">${item.date}</div><div class="timeline-content"><img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo"><h3><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></h3><p class="timeline-company">${item.company}</p>${item.description}</div></div>`).join('');
    
    // Generar Habilidades con Logos
    const skillsContainer = getEl('skills-content');
    if(skillsContainer) skillsContainer.innerHTML = data.cv_skills_items.map(item => `<div class="skill-item"><img src="${item.logo}" alt="${item.name} Logo"><p>${item.name}</p></div>`).join('');

    // Generar Idiomas
    const langContainer = getEl('languages-content');
    if(langContainer) langContainer.innerHTML = data.cv_languages_items.map(item => `<div class="language-item"><p><strong>${item.lang}</strong></p><p class="lang-level">${item.level}</p></div>`).join('');

    // Generar Intereses con Iconos
    const interestsContainer = getEl('interests-content');
    if(interestsContainer) interestsContainer.innerHTML = data.cv_interests_items.map(item => `<div class="interest-item"><i class="${item.icon}"></i><p>${item.name}</p></div>`).join('');

    // ... (resto de funciones para generar educación, certificaciones, etc.)
    const eduContainer = getEl('education-content');
    if(eduContainer) eduContainer.innerHTML = data.cv_education_items.map(item => `<div class="timeline-item"><div class="timeline-date">${item.date}</div><div class="timeline-content"><h3><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></h3><p class="timeline-company">${item.company}</p></div></div>`).join('');
    const certsContainer = getEl('certifications-content');
    if(certsContainer) certsContainer.innerHTML = data.cv_certifications_items.map(item => `<li><a href="${item.url}" download>${item.name}</a></li>`).join('');
    
    // Generar Insignias de Credly
    const badgesContainer = getEl('badges-content');
    if(badgesContainer) {
        badgesContainer.innerHTML = data.cv_badges_items.map(item => `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${item.id}" data-share-badge-host="https://www.credly.com"></div>`).join('');
        renderBadges();
    }
}

// ... (El resto del script: setLanguage, toggleLang, DOMContentLoaded, etc. se mantiene igual)
// Asegúrate de que tu script completo esté aquí.
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang];

  // Lógica para la página de inicio (INDEX)
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
      heroTitle.textContent = data.heroTitle;
      document.getElementById("hero-subtitle").textContent = data.heroSubtitle;
      document.getElementById("about-title").textContent = data.aboutTitle;
      document.getElementById("about-text-content").innerHTML = data.aboutContent;
      document.getElementById("impact-title").textContent = data.impactTitle;
      const impactGrid = document.querySelector('.impact-grid');
      impactGrid.innerHTML = '';
      data.impacts.forEach(item => {
          const card = document.createElement('div');
          card.className = 'impact-card';
          card.innerHTML = `<i class="fas ${item.icon}"></i><h3>${item.title}</h3><p>${item.text}</p>`;
          impactGrid.appendChild(card);
      });
      document.getElementById("projects-title").textContent = data.projectsTitle;
      document.getElementById("project-1-title").textContent = data.project1Title;
      document.getElementById("project-1-description").textContent = data.project1Description;
      document.getElementById("project-1-button").textContent = data.project1Button;
      document.getElementById("view-all-btn").textContent = data.viewAllBtn;
      document.getElementById("btn-projects").textContent = data.btnProjects;
      document.getElementById("btn-resume").textContent = data.btnResume;
  }
  
  // Lógica para la página de CV
  const cvHeroTitle = document.getElementById('cv-hero-title');
  if (cvHeroTitle) {
      populateCvPage(lang);
  }

  // Lógica común para la navegación en ambas páginas
  document.querySelectorAll('.desktop-nav a[href="index.html#about"], .mobile-nav a[href="index.html#about"]').forEach(el => { if(el) el.textContent = data.navAbout });
  document.querySelectorAll('.desktop-nav a[href="cv.html"], .mobile-nav a[href="cv.html"]').forEach(el => { if(el) el.textContent = data.navResume });
  document.querySelectorAll('.desktop-nav a[href="projects.html"], .mobile-nav a[href="projects.html"]').forEach(el => { if(el) el.textContent = data.navProjects });

  // Lógica común para el conmutador de idioma
  document.querySelectorAll(".lang-toggle").forEach(el => {
    el.innerHTML = lang === "en" ? '<img src="https://flagcdn.com/cl.svg" alt="Bandera de Chile" style="width: 20px; vertical-align: middle;"> ES' : '<img src="https://flagcdn.com/us.svg" alt="USA Flag" style="width: 20px; vertical-align: middle;"> EN';
  });
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage('en');
  
  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.toggle('show');
    });
  }

  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    // Lógica del carrusel aquí...
  }
});
