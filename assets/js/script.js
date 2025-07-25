const translations = {
  en: {
    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst focused on transforming data into decisions",
    heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects", btnResume: "View Resume", navAbout: "About", navResume: "CV / Resume", navProjects: "Projects",
    aboutTitle: "About Me",
    aboutContent: `<p>I'm Benjamin Espinoza, Business & Data Analyst with a degree in Industrial Engineering and a strong background in analytics, reporting, and stakeholder collaboration. I enjoy solving complex problems with simple and scalable solutions.</p><p>My experience spans services, sales, and banking industries, where I've built dashboards, defined KPIs from scratch, and empowered teams through better data use. I translate business needs into analytical insights.</p><p>I'm a father, a lifelong learner, passionate about music and continuous improvement. I’m currently expanding my skills in English, French, and product strategy.</p>`,
    impactTitle: "How I’ve Made an Impact", impacts: [ { icon: "fa-chart-bar", title: "Dashboards that Drive Decisions", text: "Designed impactful dashboards for banking, industrial, and executive audiences using Power BI and Looker Studio." }, { icon: "fa-bullseye", title: "Built KPI Systems from the Ground Up", text: "Established performance measurement frameworks in teams with no prior tracking, bringing structure, alignment, and continuous improvement." }, { icon: "fa-clock", title: "Efficiency Through Automation", text: "Automated recurring reporting tasks to eliminate manual processes and optimize time." }, { icon: "fa-users", title: "Insights Across the Organization", text: "Empowered diverse business areas with data-driven insights to support decision-making across operations, sales, risk, product, and beyond." } ],
    projectsTitle: "Featured Projects", project1Title: "US Unemployment Analysis", project1Description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.",
    project1Button: "View Project", viewAllBtn: "View All Projects",
    
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
      { date: "May 2023 – Present", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Built a company-wide reporting and KPI system from scratch for the Innovation area, where performance tracking and outcome evaluation were previously nonexistent.</li><li>Created over 20 dashboards for departments such as Innovation, Fraud, Sales, Product Owners, and Strategic Planning.</li><li>Led and scaled a metrics team, automated processes using ETL pipelines and team-managed databases, ensuring data integrity and scalability.</li><li>Transitioned to cross-functional squad as Business Analyst: user stories, testing, flows and dashboards.</li></ul>` },
      { date: "Sep 2021 – Apr 2023", title: "Data & Business Control Analyst", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Created a new data analytics function in a company lacking visibility due to shared finance with sister company.</li><li>Delivered 30+ Power BI reports across operations, sales, inventory, procurement, automotive services and executive dashboards.</li><li>Automated daily report delivery, saving up to 1 hour daily.</li><li>Improved annual budgeting from 6 to 2 months over two years.</li></ul>` },
      { date: "Nov 2019 – Aug 2021", title: "Financial Performance Analyst", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Tracked KPIs and costs for modernization projects.</li><li>Created dashboards in Excel and Power BI to support strategic decisions.</li><li>Worked with technical and executive teams to improve customer data insights.</li></ul>` }
    ],
    cv_education_items: [
        { date: "2024", title: "International Diploma in Digital Transformation", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com" },
        { date: "2022", title: "Diploma in Web Design & Programming", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl" },
        { date: "2022", title: "University Preparation Program", company: "BYU PathwayConnect", url: "https://www.byupathway.edu" },
        { date: "2013–2020", title: "Industrial Civil Engineering", company: "Universidad de Valparaíso", url: "https://uv.cl" }
    ],
    cv_skills_items: [
        { name: "Power BI", logo: "assets/img/logos/power-bi.svg" },
        { name: "Looker Studio", logo: "assets/img/logos/looker-studio.svg" },
        { name: "Tableau", logo: "assets/img/logos/tableau.svg" },
        { name: "SQL", logo: null },
        { name: "Excel", logo: null },
        { name: "LookML", logo: null }
    ],
    cv_languages_items: [ { lang: "Spanish", level: "Native" }, { lang: "English", level: "B2 Upper-Intermediate" }, { lang: "French", level: "A1" } ],
    cv_interests_items: [
        { name: "Running", icon: "fa-solid fa-person-running" }, { name: "Football", icon: "fa-solid fa-futbol" },
        { name: "Gaming", icon: "fa-solid fa-gamepad" }, { name: "Guitar", icon: "fa-solid fa-guitar" },
        { name: "Drawing", icon: "fa-solid fa-pencil-alt" }, { name: "Tennis", icon: "fa-solid fa-table-tennis-paddle-ball" }
    ],
    cv_certifications_items: [
        { name: "Qlik Sense Designer", url: "assets/certificates/Certificacion Qlik.pdf" }, { name: "Google Tag Manager (Basics)", url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf" },
        { name: "Linguaskill English B2", url: "assets/certificates/Linguaskill Cambridge.pdf" }, { name: "SQL Certification", url: "assets/certificates/SQL.pdf" },
        { name: "SSIS Certificate", url: "assets/certificates/SSIS.pdf" }, { name: "Tableau & Tableau Prep", url: "assets/certificates/Tableau.pdf" },
        { name: "User Stories Certification", url: "assets/certificates/User Stories Certiprof.pdf" }
    ],
    cv_badges_items: [ { id: "80084bf2-8bfb-485a-9815-81fdc3f8d88b" }, { id: "19420706-efb7-4da0-a955-2b58c25834dd" }, { id: "4a17b3b2-fe50-4165-8cc2-dab375fa8cb7" } ]
  },
  es: {
    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst enfocado en transformar datos en decisiones", heroSubtitle: "Ayudo a las empresas a tomar mejores decisiones a través del análisis y la inteligencia de negocios.",
    btnProjects: "Ver Proyectos", btnResume: "Ver CV", navAbout: "Sobre mí", navResume: "CV", navProjects: "Proyectos",
    aboutTitle: "Sobre mí", aboutContent: `<p>Soy Benjamin Espinoza, Business & Data Analyst... (content)</p>`,
    impactTitle: "Cómo He Generado Impacto", impacts: [ /*...*/ ], projectsTitle: "Proyectos Destacados", /*...*/

    // --- CV Page Content ---
    cv_hero_title: "Mi Trayectoria Profesional", cv_hero_summary: "Un resumen de mi experiencia transformando datos en decisiones estratégicas a través del análisis y la inteligencia de negocios.",
    cv_download: "Descargar PDF", cv_work_title: "Experiencia Laboral", cv_education_title: "Educación", cv_skills_title: "Habilidades y Herramientas",
    cv_languages_title: "Idiomas", cv_interests_title: "Intereses", cv_certifications_title: "Certificaciones", cv_badges_title: "Insignias Destacadas",
    cv_credly_link: "Ver perfil en Credly",
    cv_work_items: [
        { date: "May 2023 – Actualidad", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Desarrollé un sistema de reportes y KPIs desde cero...</li></ul>` },
        { date: "Sep 2021 – Abr 2023", title: "Analista de Datos y Control de Gestión", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Ingresé a una posición nueva para resolver brechas...</li></ul>` },
        { date: "Nov 2019 – Ago 2021", title: "Analista de Control de Gestión", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Supervisión de KPIs y control de costos...</li></ul>` }
    ],
    cv_education_items: [ /*...*/ ],
    cv_skills_items: [
        { name: "Power BI", logo: "assets/img/logos/power-bi.svg" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.svg" },
        { name: "Tableau", logo: "assets/img/logos/tableau.svg" }, { name: "SQL", logo: null },
        { name: "Excel", logo: null }, { name: "LookML", logo: null }
    ],
    cv_languages_items: [ { lang: "Español", level: "Nativo" }, { lang: "Inglés", level: "B2 Intermedio-Alto" }, { lang: "Francés", level: "A1" } ],
    cv_interests_items: [
        { name: "Correr", icon: "fa-solid fa-person-running" }, { name: "Fútbol", icon: "fa-solid fa-futbol" },
        { name: "Videojuegos", icon: "fa-solid fa-gamepad" }, { name: "Guitarra", icon: "fa-solid fa-guitar" },
        { name: "Dibujo", icon: "fa-solid fa-pencil-alt" }, { name: "Tenis", icon: "fa-solid fa-table-tennis-paddle-ball" }
    ],
    cv_certifications_items: [ /*...*/ ], cv_badges_items: [ /*...*/ ]
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
    
    // --- CORRECCIÓN CLAVE ---
    // Se corrigió el error de tipeo "class." a "class="
    const workContainer = getEl('work-experience-content');
    if(workContainer) workContainer.innerHTML = data.cv_work_items.map(item => `<div class="timeline-item"><div class="timeline-date">${item.date}</div><div class="timeline-content"><img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo"><h3><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></h3><p class="timeline-company">${item.company}</p>${item.description}</div></div>`).join('');
    
    const eduContainer = getEl('education-content');
    if(eduContainer) eduContainer.innerHTML = data.cv_education_items.map(item => `<div class="timeline-item"><div class="timeline-date">${item.date}</div><div class="timeline-content"><h3><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></h3><p class="timeline-company">${item.company}</p></div></div>`).join('');

    const skillsContainer = getEl('skills-content');
    if(skillsContainer) skillsContainer.innerHTML = data.cv_skills_items.map(item => {
        if (item.logo) {
            return `<div class="skill-item"><img src="${item.logo}" alt="${item.name} Logo"><p>${item.name}</p></div>`;
        } else {
            return `<div class="skill-item skill-item-text"><p>${item.name}</p></div>`;
        }
    }).join('');

    const langContainer = getEl('languages-content');
    if(langContainer) langContainer.innerHTML = data.cv_languages_items.map(item => `<div class="language-item"><p><strong>${item.lang}</strong></p><p class="lang-level">${item.level}</p></div>`).join('');

    const interestsContainer = getEl('interests-content');
    if(interestsContainer) interestsContainer.innerHTML = data.cv_interests_items.map(item => `<div class="interest-item"><i class="${item.icon}"></i><p>${item.name}</p></div>`).join('');

    const certsContainer = getEl('certifications-content');
    if(certsContainer) certsContainer.innerHTML = data.cv_certifications_items.map(item => `<li><a href="${item.url}" download>${item.name}</a></li>`).join('');
    
    const badgesContainer = getEl('badges-content');
    if(badgesContainer) {
        badgesContainer.innerHTML = data.cv_badges_items.map(item => `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${item.id}" data-share-badge-host="https://www.credly.com"></div>`).join('');
        renderBadges();
    }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang];

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
  
  const cvHeroTitle = document.getElementById('cv-hero-title');
  if (cvHeroTitle) {
      populateCvPage(lang);
  }

  document.querySelectorAll('.desktop-nav a[href="index.html#about"], .mobile-nav a[href="index.html#about"]').forEach(el => { if(el) el.textContent = data.navAbout });
  document.querySelectorAll('.desktop-nav a[href="cv.html"], .mobile-nav a[href="cv.html"]').forEach(el => { if(el) el.textContent = data.navResume });
  document.querySelectorAll('.desktop-nav a[href="projects.html"], .mobile-nav a[href="projects.html"]').forEach(el => { if(el) el.textContent = data.navProjects });

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
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    // ... Lógica del carrusel aquí ...
  }
});
