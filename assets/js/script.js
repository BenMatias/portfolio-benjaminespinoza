const translations = {
  en: {
    // --- Navigation ---
    navAbout: "About",
    navResume: "CV / Resume",
    navProjects: "Projects",

    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst focused on transforming data into decisions",
    heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects",
    btnResume: "View Resume",
    aboutTitle: "About Me",
    aboutContent: `<p>I'm Benjamin Espinoza, Business & Data Analyst with a degree in Industrial Engineering and a strong background in analytics, reporting, and stakeholder collaboration. I enjoy solving complex problems with simple and scalable solutions.</p><p>My experience spans services, sales, and banking industries, where I've built dashboards, defined KPIs from scratch, and empowered teams through better data use. I translate business needs into analytical insights.</p><p>I'm a father, a lifelong learner, passionate about music and continuous improvement. I’m currently expanding my skills in English, French, and product strategy.</p>`,
    impactTitle: "How I’ve Made an Impact",
    impacts: [{
      icon: "fa-chart-bar",
      title: "Dashboards that Drive Decisions",
      text: "Designed impactful dashboards for banking, industrial, and executive audiences using Power BI and Looker Studio."
    }, {
      icon: "fa-bullseye",
      title: "Built KPI Systems from the Ground Up",
      text: "Established performance measurement frameworks in teams with no prior tracking, bringing structure, alignment, and continuous improvement."
    }, {
      icon: "fa-cogs",
      title: "Efficiency Through Automation",
      text: "Automated recurring reporting tasks to eliminate manual processes and optimize time."
    }, {
      icon: "fa-users-gear",
      title: "Insights Across the Organization",
      text: "Empowered diverse business areas with data-driven insights to support decision-making across operations, sales, risk, product, and beyond."
    }],
    projectsTitle: "Featured Projects",
    viewAllBtn: "View All Projects",
    featured_projects: [{
      title: "US Unemployment Analysis",
      description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.",
      imageUrl: "assets/img/us-unemployment-cover.png",
      link: "projects/US-Unemployment.html",
      buttonText: "View Project"
    }],

    // --- CV Page Content ---
    cv_hero_title: "My Professional Journey",
    cv_hero_summary: "A journey through the projects and roles that have defined my career in the world of data.",
    cv_download: "Download PDF",
    cv_work_title: "Work Experience",
    cv_education_title: "Education",
    cv_skills_title: "My Skills Lineup",
    cv_languages_title: "Languages",
    cv_interests_title: "Interests",
    cv_certifications_title: "Certifications",
    cv_badges_title: "Highlighted Badges",
    cv_credly_link: "View more on my profile on Credly",
    cv_timeline_items: [{
      type: 'work',
      date: "May 2023 – Present",
      title: "Business Analyst",
      company: "Banco Internacional",
      url: "https://www.internacional.cl",
      logo: "assets/img/logos/banco-internacional.png",
      description: `<ul><li>Built a company-wide reporting and KPI system from scratch for the Innovation area, where performance tracking and outcome evaluation were previously nonexistent.</li><li>Created over 20 dashboards for departments such as Innovation, Fraud, Sales, Product Owners, and Strategic Planning.</li><li>Led and scaled a metrics team, automated processes using ETL pipelines and team-managed databases, ensuring data integrity and scalability.</li><li>Transitioned to cross-functional squad as Business Analyst: user stories, testing, flows and dashboards.</li></ul>`
    }, {
      type: 'work',
      date: "Sep 2021 – Apr 2023",
      title: "Data & Business Control Analyst",
      company: "Lucas Diesel",
      url: "https://lucasdiesel.cl",
      logo: "assets/img/logos/lucas-diesel.png",
      description: `<ul><li>Created a new data analytics function in a company lacking visibility due to shared finance with sister company.</li><li>Delivered 30+ Power BI reports across operations, sales, inventory, procurement, automotive services and executive dashboards.</li><li>Automated daily report delivery, saving up to 1 hour daily.</li><li>Improved annual budgeting from 6 to 2 months over two years.</li></ul>`
    }, {
      type: 'work',
      date: "Nov 2019 – Aug 2021",
      title: "Financial Performance Analyst",
      company: "Heavenward Ascensores",
      url: "https://www.heavenward.cl",
      logo: "assets/img/logos/heavenward.png",
      description: `<ul><li>Tracked KPIs and costs for modernization projects.</li><li>Created dashboards in Excel and Power BI to support strategic decisions.</li><li>Worked with technical and executive teams to improve customer data insights.</li></ul>`
    }, {
      type: 'education',
      date: "2024",
      title: "International Diploma in Digital Transformation",
      company: "Digital Bank LATAM",
      url: "https://www.digitalbankla.com",
      logo: "assets/img/logos/digital-bank-latam.png"
    }, {
      type: 'education',
      date: "2022",
      title: "Diploma in Web Design & Programming",
      company: "Fundación Telefónica & AIEP",
      url: "https://www.fundaciontelefonica.cl",
      logo: "assets/img/logos/telefonica-aiep.png"
    }, {
      type: 'education',
      date: "2022",
      title: "University Preparation Program",
      company: "BYU PathwayConnect",
      url: "https://www.byupathway.edu",
      logo: "assets/img/logos/byu.png"
    }, {
      type: 'education',
      date: "2013–2020",
      title: "Industrial Civil Engineering",
      company: "Universidad de Valparaíso",
      url: "https://uv.cl",
      logo: "assets/img/logos/uv.png"
    }],
    cv_skills_items: {
      tier1: [{
        name: "Power BI",
        logo: "assets/img/logos/power-bi.png"
      }, {
        name: "Looker Studio",
        logo: "assets/img/logos/looker-studio.png"
      }, {
        name: "Tableau",
        logo: "assets/img/logos/tableau.png"
      }],
      tier2: ["Data Modeling", "Business Intelligence", "Dashboard Design", "Storytelling", "Stakeholder Engagement"],
      tier3: ["Power Query", "DAX", "LookML", "Process Mapping", "BPMN", "Agile/Scrum", "KPI Development", "SQL"],
      tier4: ["Jira / Confluence", "Advanced Excel", "Google Sheets", "Lucidchart / Draw.io", "Data Visualization Principles", "Documentation & Reporting", "Miro"]
    },
    cv_languages_items: [{
      lang: "Spanish",
      level: "Native",
      flag: "es"
    }, {
      lang: "English",
      level: "B2 Upper-Intermediate",
      flag: "gb"
    }, {
      lang: "French",
      level: "A1 Basic",
      flag: "fr"
    }],
    cv_interests_items: [{
      name: "Running",
      icon: "fa-solid fa-person-running"
    }, {
      name: "Football",
      icon: "fa-solid fa-futbol"
    }, {
      name: "Gaming",
      icon: "fa-solid fa-gamepad"
    }, {
      name: "Tennis",
      icon: "fa-solid fa-baseball"
    }, {
      name: "Guitar",
      icon: "fa-solid fa-guitar"
    }, {
      name: "Drawing",
      icon: "fa-solid fa-pencil-alt"
    }, {
      name: "Music Festivals",
      icon: "fa-solid fa-music"
    }],
    cv_certifications_items: [{
      name: "Qlik Sense Designer",
      url: "assets/certificates/Certificacion Qlik.pdf"
    }, {
      name: "Google Tag Manager (Basics)",
      url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf"
    }, {
      name: "Linguaskill English B2",
      url: "assets/certificates/Linguaskill Cambridge.pdf"
    }, {
      name: "SQL Certification",
      url: "assets/certificates/SQL.pdf"
    }, {
      name: "SSIS Certificate",
      url: "assets/certificates/SSIS.pdf"
    }, {
      name: "Tableau & Tableau Prep",
      url: "assets/certificates/Tableau.pdf"
    }, {
      name: "User Stories Certification",
      url: "assets/certificates/User Stories Certiprof.pdf"
    }],

    // --- Projects Page Content ---
    projects_page_title: "Projects",
    projects_list: [{
      id: "project-unemployment",
      title: "Unemployment in America",
      description: "Analyze short- and long-term labor dynamics across U.S. states and cities using public data and interactive visuals.",
      link: "projects/US-Unemployment.html",
      imageUrl: "assets/img/us-unemployment-cover.png",
      buttonText: "View Project"
    }]
  },
  es: {
    // --- Navigation ---
    navAbout: "Sobre mí",
    navResume: "CV",
    navProjects: "Proyectos",

    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst enfocado en transformar datos en decisiones",
    heroSubtitle: "Ayudo a las empresas a tomar mejores decisiones a través del análisis y la inteligencia de negocios.",
    btnProjects: "Ver Proyectos",
    btnResume: "Ver CV",
    aboutTitle: "Sobre mí",
    aboutContent: `<p>Soy Benjamin Espinoza, Business & Data Analyst con formación en Ingeniería Civil Industrial y experiencia en análisis de datos, reportería y colaboración con áreas de negocio. Me apasiona resolver problemas complejos con soluciones simples y escalables.</p><p>He trabajado en empresas de servicios, ventas y banca, creando dashboards, definiendo KPIs desde cero y promoviendo el uso estratégico de los datos. Traduzco necesidades de negocio en insights accionables.</p><p>Padre, aprendiz permanente y amante de la música y la mejora continua. Actualmente perfecciono mi inglés, francés y conocimientos en estrategia de producto.</p>`,
    impactTitle: "Cómo He Generado Impacto",
    impacts: [{
      icon: "fa-chart-bar",
      title: "Dashboards que Impulsan Decisiones",
      text: "Diseñé dashboards de alto impacto para audiencias ejecutivas, industriales y del sector bancario usando Power BI y Looker Studio."
    }, {
      icon: "fa-bullseye",
      title: "Implementación de Sistemas de KPIs desde Cero",
      text: "Establecí marcos de medición de desempeño donde antes no existían, aportando estructura, alineación y mejora continua."
    }, {
      icon: "fa-cogs",
      title: "Eficiencia a Través de la Automatización",
      text: "Automatización de tareas recurrentes de reportería para eliminar procesos manuales y optimizar el tiempo."
    }, {
      icon: "fa-users-gear",
      title: "Insights para Toda la Organización",
      text: "Apoyé diversas áreas de negocio con insights accionables que respaldan la toma de decisiones en operaciones, ventas, riesgo, producto y más."
    }],
    projectsTitle: "Proyectos Destacados",
    viewAllBtn: "Ver Todos los Proyectos",
    featured_projects: [{
      title: "Análisis de Desempleo en EE.UU.",
      description: "Explora tendencias de desempleo en EE.UU. a nivel estatal y metropolitano mediante dashboards interactivos.",
      imageUrl: "assets/img/us-unemployment-cover.png",
      link: "projects/US-Unemployment.html",
      buttonText: "Ver Proyecto"
    }],

    // --- CV Page Content ---
    cv_hero_title: "Mi Trayectoria Profesional",
    cv_hero_summary: "Un viaje a través de los proyectos y roles que han definido mi carrera en el mundo de los datos.",
    cv_download: "Descargar PDF",
    cv_work_title: "Experiencia Laboral",
    cv_education_title: "Educación",
    cv_skills_title: "Mi Lineup de Habilidades",
    cv_languages_title: "Idiomas",
    cv_interests_title: "Intereses",
    cv_certifications_title: "Certificaciones",
    cv_badges_title: "Insignias Destacadas",
    cv_credly_link: "Ver más en mi perfil de Credly",
    cv_timeline_items: [{
      type: 'work',
      date: "Mayo 2023 – Actualidad",
      title: "Business Analyst",
      company: "Banco Internacional",
      url: "https://www.internacional.cl",
      logo: "assets/img/logos/banco-internacional.png",
      description: `<ul><li>Desarrollé un sistema de reportes y KPIs desde cero para el área de innovación, donde no existía medición previa.</li><li>Creé más de 20 dashboards para innovación, fraude, ventas, dueños de productos y planificación.</li><li>Lideré equipo de métricas que automatizó procesos mediante ETL y base de datos propia.</li><li>Transición exitosa al rol de Business Analyst en célula ágil con foco en historias de usuario, flujos y pruebas.</li></ul>`
    }, {
      type: 'work',
      date: "Sep 2021 – Abr 2023",
      title: "Analista de Datos y Control de Gestión",
      company: "Lucas Diesel",
      url: "https://lucasdiesel.cl",
      logo: "assets/img/logos/lucas-diesel.png",
      description: `<ul><li>Ingresé a una posición nueva para resolver brechas de visibilidad y reportes en una estructura financiera compartida.</li><li>Generé y automatizé más de 30 dashboards para ventas, inventario, abastecimiento, servicios automotrices, operaciones y gerencia.</li><li>Automatización diaria ahorró hasta 1 hora por día.</li><li>Reduje el proceso de presupuesto anual de 6 a 2 meses en dos años consecutivos.</li></ul>`
    }, {
      type: 'work',
      date: "Nov 2019 – Ago 2021",
      title: "Analista de Control de Gestión",
      company: "Heavenward Ascensores",
      url: "https://www.heavenward.cl",
      logo: "assets/img/logos/heavenward.png",
      description: `<ul><li>Supervisión de KPIs y control de costos para proyectos de mantenimiento y modernización.</li><li>Reportes y dashboards en Excel y Power BI para análisis financiero y mejora de tiempos de respuesta.</li></ul>`
    }, {
      type: 'education',
      date: "2024",
      title: "Diplomado Internacional en Transformación Digital",
      company: "Digital Bank LATAM",
      url: "https://www.digitalbankla.com",
      logo: "assets/img/logos/digital-bank-latam.png"
    }, {
      type: 'education',
      date: "2022",
      title: "Diplomado en Diseño y Programación Web",
      company: "Fundación Telefónica & AIEP",
      url: "https://www.fundaciontelefonica.cl",
      logo: "assets/img/logos/telefonica-aiep.png"
    }, {
      type: 'education',
      date: "2022",
      title: "Programa universitario introductorio",
      company: "BYU PathwayConnect",
      url: "https://www.byupathway.edu",
      logo: "assets/img/logos/byu.png"
    }, {
      type: 'education',
      date: "2013–2020",
      title: "Ingeniería Civil Industrial",
      company: "Universidad de Valparaíso",
      url: "https://uv.cl",
      logo: "assets/img/logos/uv.png"
    }],
    cv_skills_items: {
      tier1: [{
        name: "Power BI",
        logo: "assets/img/logos/power-bi.png"
      }, {
        name: "Looker Studio",
        logo: "assets/img/logos/looker-studio.png"
      }, {
        name: "Tableau",
        logo: "assets/img/logos/tableau.png"
      }],
      tier2: ["Modelado de Datos", "Inteligencia de Negocios", "Diseño de Dashboards", "Storytelling", "Gestión de Interesados"],
      tier3: ["Power Query", "DAX", "LookML", "Mapeo de Procesos", "BPMN", "Agile/Scrum", "Desarrollo de KPIs", "SQL"],
      tier4: ["Jira / Confluence", "Excel Avanzado", "Google Sheets", "Lucidchart / Draw.io", "Principios de Visualización de Datos", "Documentación y Reportería", "Miro"]
    },
    cv_languages_items: [{
      lang: "Español",
      level: "Nativo",
      flag: "es"
    }, {
      lang: "Inglés",
      level: "B2 Intermedio-Alto",
      flag: "gb"
    }, {
      lang: "Francés",
      level: "A1 Básico",
      flag: "fr"
    }],
    cv_interests_items: [{
      name: "Correr",
      icon: "fa-solid fa-person-running"
    }, {
      name: "Fútbol",
      icon: "fa-solid fa-futbol"
    }, {
      name: "Videojuegos",
      icon: "fa-solid fa-gamepad"
    }, {
      name: "Tenis",
      icon: "fa-solid fa-baseball"
    }, {
      name: "Guitarra",
      icon: "fa-solid fa-guitar"
    }, {
      name: "Dibujo",
      icon: "fa-solid fa-pencil-alt"
    }, {
      name: "Festivales",
      icon: "fa-solid fa-music"
    }],
    cv_certifications_items: [{
      name: "Qlik Sense Diseñador",
      url: "assets/certificates/Certificacion Qlik.pdf"
    }, {
      name: "Google Tag Manager (Básico)",
      url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf"
    }, {
      name: "Inglés B2 – Linguaskill",
      url: "assets/certificates/Linguaskill Cambridge.pdf"
    }, {
      name: "Certificación SQL",
      url: "assets/certificates/SQL.pdf"
    }, {
      name: "Certificación SSIS",
      url: "assets/certificates/SSIS.pdf"
    }, {
      name: "Tableau & Tableau Prep",
      url: "assets/certificates/Tableau.pdf"
    }, {
      name: "User Stories Certificate",
      url: "assets/certificates/User Stories Certiprof.pdf"
    }],

    // --- Projects Page Content ---
    projects_page_title: "Proyectos",
    projects_list: [{
      id: "project-unemployment",
      title: "Desempleo en América",
      description: "Analiza dinámicas laborales de corto y largo plazo en EE.UU. a nivel estatal y metropolitano mediante datos públicos y visualizaciones interactivas.",
      link: "projects/US-Unemployment.html",
      imageUrl: "assets/img/us-unemployment-cover.png",
      buttonText: "Ver Proyecto"
    }]
  }
};

let currentLang = 'en';

function setupScrollAnimations() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });
  items.forEach(item => {
    observer.observe(item);
  });
}

function populateCvPage(lang) {
  const data = translations[lang] || translations.en;
  const getEl = (id) => document.getElementById(id);

  if (getEl('cv-hero-title')) getEl('cv-hero-title').textContent = data.cv_hero_title;
  if (getEl('cv-hero-summary')) getEl('cv-hero-summary').textContent = data.cv_hero_summary;
  if (getEl('download-btn-text')) getEl('download-btn-text').textContent = data.cv_download;
  if (getEl('work-experience-title')) getEl('work-experience-title').innerHTML = `<i class="fas fa-briefcase"></i> ${data.cv_work_title}`;
  if (getEl('education-title')) getEl('education-title').innerHTML = `<i class="fas fa-graduation-cap"></i> ${data.cv_education_title}`;
  if (getEl('skills-title')) getEl('skills-title').innerHTML = `<i class="fas fa-star"></i> ${data.cv_skills_title}`;
  if (getEl('languages-title')) getEl('languages-title').innerHTML = `<i class="fas fa-language"></i> ${data.cv_languages_title}`;
  if (getEl('interests-title')) getEl('interests-title').innerHTML = `<i class="fas fa-heart"></i> ${data.cv_interests_title}`;
  if (getEl('certifications-title')) getEl('certifications-title').innerHTML = `<i class="fas fa-certificate"></i> ${data.cv_certifications_title}`;
  if (getEl('badges-title')) getEl('badges-title').innerHTML = `<i class="fas fa-medal"></i> ${data.cv_badges_title}`;
  if (getEl('credly-link')) getEl('credly-link').querySelector('span').textContent = data.cv_credly_link;

  const timelineWork = getEl('timeline-work-content');
  const timelineEducation = getEl('timeline-education-content');

  const workItems = data.cv_timeline_items.filter(item => item.type === 'work');
  const educationItems = data.cv_timeline_items.filter(item => item.type === 'education');

  if (timelineWork) {
    timelineWork.innerHTML = workItems.map((item, index) => {
      return `<div class="timeline-item">
                        <div class="timeline-logo-wrapper">
                            <img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo">
                        </div>
                        <div class="timeline-content-block">
                            <div class="timeline-date">${item.date}</div>
                            <h3 class="timeline-title">${item.title}</h3>
                            <p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>
                            ${item.description || ''}
                        </div>
                    </div>`;
    }).join('');
  }

  if (timelineEducation) {
    timelineEducation.innerHTML = educationItems.map((item, index) => {
      return `<div class="timeline-item">
                        <div class="timeline-logo-wrapper">
                             <img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo">
                        </div>
                        <div class="timeline-content-block">
                            <div class="timeline-date">${item.date}</div>
                            <h3 class="timeline-title">${item.title}</h3>
                            <p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>
                            ${item.description || ''}
                        </div>
                    </div>`;
    }).join('');
  }

  const skillsContainer = getEl('skills-content');
  if (skillsContainer) {
    const {
      tier1,
      tier2,
      tier3,
      tier4
    } = data.cv_skills_items;
    let lineupHtml = '<div class="skills-lineup">';

    if (tier1 && tier1.length > 0) {
      lineupHtml += '<div class="lineup-tier lineup-tier-1">';
      tier1.forEach(skill => {
        lineupHtml += `<div class="skill"><img src="${skill.logo}" class="skill-logo" alt="${skill.name} logo"><span>${skill.name}</span></div>`;
      });
      lineupHtml += '</div>';
    }

    if (tier2 && tier2.length > 0) {
      lineupHtml += '<div class="lineup-tier lineup-tier-2">';
      tier2.forEach(skill => {
        lineupHtml += `<div class="skill">${skill}</div>`;
      });
      lineupHtml += '</div>';
    }

    if (tier3 && tier3.length > 0) {
      lineupHtml += '<div class="lineup-tier lineup-tier-3">';
      tier3.forEach(skill => {
        lineupHtml += `<div class="skill">${skill}</div>`;
      });
      lineupHtml += '</div>';
    }

    if (tier4 && tier4.length > 0) {
      lineupHtml += '<div class="lineup-tier lineup-tier-4">';
      tier4.forEach(skill => {
        lineupHtml += `<div class="skill">${skill}</div>`;
      });
      lineupHtml += '</div>';
    }

    lineupHtml += '</div>';
    skillsContainer.innerHTML = lineupHtml;
  }

  const langContainer = getEl('languages-content');
  if (langContainer) langContainer.innerHTML = data.cv_languages_items.map(item => `<div class="language-item"><img src="https://flagcdn.com/w40/${item.flag}.png" alt="${item.lang} flag"><div><p><strong>${item.lang}</strong></p><p class="lang-level">${item.level}</p></div></div>`).join('');
  const interestsContainer = getEl('interests-content');
  if (interestsContainer) interestsContainer.innerHTML = data.cv_interests_items.map(item => `<div class="interest-item"><i class="${item.icon}"></i><p>${item.name}</p></div>`).join('');
  const certsContainer = getEl('certifications-content');
  if (certsContainer) certsContainer.innerHTML = data.cv_certifications_items.map(item => `<li><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></li>`).join('');

  setTimeout(setupScrollAnimations, 100);
}

function populateProjectsPage(lang) {
  const data = translations[lang] || translations.en;
  const getEl = (id) => document.getElementById(id);

  // Populate titles for both desktop and mobile containers
  if (getEl('projects-title-desktop')) {
    getEl('projects-title-desktop').innerHTML = `<i class="fas fa-lightbulb"></i> ${data.projects_page_title}`;
  }
  if (getEl('projects-title-mobile')) {
    getEl('projects-title-mobile').innerHTML = `<i class="fas fa-lightbulb"></i> ${data.projects_page_title}`;
  }

  // --- Desktop View Logic ---
  const listUl = getEl('projects-list-ul');
  const previewCol = getEl('projects-preview-column');
  if (listUl && previewCol) {
    listUl.innerHTML = '';
    previewCol.innerHTML = '';

    data.projects_list.forEach(project => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${project.link}" data-preview-target="${project.id}">${project.title}</a>`;
      listUl.appendChild(listItem);

      const previewImage = document.createElement('div');
      previewImage.id = project.id;
      previewImage.className = 'project-preview-image';
      previewImage.style.backgroundImage = `url('${project.imageUrl}')`;
      previewCol.appendChild(previewImage);
    });

    const projectLinks = listUl.querySelectorAll('a');
    projectLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const targetId = link.getAttribute('data-preview-target');
        previewCol.querySelectorAll('.project-preview-image.is-active').forEach(activeImg => activeImg.classList.remove('is-active'));
        const targetImage = getEl(targetId);
        if (targetImage) targetImage.classList.add('is-active');
      });
    });

    listUl.addEventListener('mouseleave', () => {
      previewCol.querySelectorAll('.project-preview-image.is-active').forEach(activeImg => activeImg.classList.remove('is-active'));
    });
  }
  
  // --- Mobile View Logic ---
  const grid = getEl('projects-grid');
  if (grid) {
    grid.innerHTML = data.projects_list.map(project => `
      <a href="${project.link}" class="project-card-mobile">
        <img src="${project.imageUrl}" alt="${project.title} preview">
        <div class="project-card-mobile-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <span class="btn btn-outline-blue">${project.buttonText}</span>
        </div>
      </a>
    `).join('');
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang] || translations.en;

  // Common content (runs on all pages)
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  document.querySelectorAll(".lang-toggle").forEach(el => {
    el.innerHTML = lang === "en" ? `<img src="https://flagcdn.com/cl.svg" alt="Bandera de Chile" style="width: 20px; vertical-align: middle;"> ES` : `<img src="https://flagcdn.com/us.svg" alt="USA Flag" style="width: 20px; vertical-align: middle;"> EN`;
  });

  // Page-specific content
  const body = document.body;
  const getEl = (id) => document.getElementById(id);

  if (body.classList.contains('page-home')) {
    if (getEl('hero-title')) getEl('hero-title').textContent = data.heroTitle;
    if (getEl('hero-subtitle')) getEl('hero-subtitle').textContent = data.heroSubtitle;
    if (getEl('btn-projects')) getEl('btn-projects').textContent = data.btnProjects;
    if (getEl('btn-resume')) getEl('btn-resume').textContent = data.btnResume;
    if (getEl('about-title')) getEl('about-title').textContent = data.aboutTitle;
    if (getEl('about-text-content')) getEl('about-text-content').innerHTML = data.aboutContent;
    if (getEl('impact-title')) getEl('impact-title').textContent = data.impactTitle;
    if (getEl('projects-title')) getEl('projects-title').textContent = data.projectsTitle;
    if (getEl('view-all-btn')) getEl('view-all-btn').textContent = data.viewAllBtn;

    const impactGrid = document.querySelector('.impact-grid');
    if (impactGrid) {
      impactGrid.innerHTML = '';
      data.impacts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'impact-card';
        card.innerHTML = `<i class="fas ${item.icon}"></i><h3>${item.title}</h3><p>${item.text}</p>`;
        impactGrid.appendChild(card);
      });
    }
    
    const projectCarousel = getEl("project-carousel");
    if (projectCarousel) {
        projectCarousel.innerHTML = '';
        (data.featured_projects || []).forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn btn-outline-blue">${project.buttonText}</a>
                </div>`;
            projectCarousel.appendChild(card);
        });
    }
  } else if (body.classList.contains('page-cv')) {
    populateCvPage(lang);
  } else if (body.classList.contains('page-projects')) {
    populateProjectsPage(lang);
  }
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage('en');

  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.toggle('show');
    });
  }

  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('show');
      }
    });
  }

  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    const scrollStep = () => {
      return 300 + 24;
    };

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollStep(),
        behavior: 'smooth'
      });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollStep(),
        behavior: 'smooth'
      });
    });
  }
});
