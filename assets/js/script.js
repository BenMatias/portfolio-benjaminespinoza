const translations = {
  en: {
    // --- Index Page Content ---
    heroTitle: "Business & Data Analyst focused on transforming data into decisions", heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects", btnResume: "View Resume", navAbout: "About", navResume: "CV / Resume", navProjects: "Projects",
    aboutTitle: "About Me", aboutContent: `<p>I'm Benjamin Espinoza, Business & Data Analyst with a degree in Industrial Engineering and a strong background in analytics, reporting, and stakeholder collaboration. I enjoy solving complex problems with simple and scalable solutions.</p><p>My experience spans services, sales, and banking industries, where I've built dashboards, defined KPIs from scratch, and empowered teams through better data use. I translate business needs into analytical insights.</p><p>I'm a father, a lifelong learner, passionate about music and continuous improvement. I’m currently expanding my skills in English, French, and product strategy.</p>`,
    impactTitle: "How I’ve Made an Impact", impacts: [ { icon: "fa-chart-bar", title: "Dashboards that Drive Decisions", text: "Designed impactful dashboards for banking, industrial, and executive audiences using Power BI and Looker Studio." }, { icon: "fa-bullseye", title: "Built KPI Systems from the Ground Up", text: "Established performance measurement frameworks in teams with no prior tracking, bringing structure, alignment, and continuous improvement." }, { icon: "fa-clock", title: "Efficiency Through Automation", text: "Automated recurring reporting tasks to eliminate manual processes and optimize time." }, { icon: "fa-users", title: "Insights Across the Organization", text: "Empowered diverse business areas with data-driven insights to support decision-making across operations, sales, risk, product, and beyond." } ],
    projectsTitle: "Featured Projects", project1Title: "US Unemployment Analysis", project1Description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.", project1Button: "View Project", viewAllBtn: "View All Projects",
    
    // --- CV Page Content ---
    cv_hero_title: "My Professional Journey", cv_hero_summary: "A journey through the projects and roles that have defined my career in the world of data.",
    cv_download: "Download PDF",
    cv_timeline_items: [
      { type: 'work', date: "May 2023 – Present", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Built a company-wide reporting and KPI system from scratch for the Innovation area, where performance tracking and outcome evaluation were previously nonexistent.</li><li>Created over 20 dashboards for departments such as Innovation, Fraud, Sales, Product Owners, and Strategic Planning.</li><li>Led and scaled a metrics team, automated processes using ETL pipelines and team-managed databases, ensuring data integrity and scalability.</li><li>Transitioned to cross-functional squad as Business Analyst: user stories, testing, flows and dashboards.</li></ul>` },
      { type: 'work', date: "Sep 2021 – Apr 2023", title: "Data & Business Control Analyst", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Created a new data analytics function in a company lacking visibility due to shared finance with sister company.</li><li>Delivered 30+ Power BI reports across operations, sales, inventory, procurement, automotive services and executive dashboards.</li><li>Automated daily report delivery, saving up to 1 hour daily.</li><li>Improved annual budgeting from 6 to 2 months over two years.</li></ul>` },
      { type: 'work', date: "Nov 2019 – Aug 2021", title: "Financial Performance Analyst", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Tracked KPIs and costs for modernization projects.</li><li>Created dashboards in Excel and Power BI to support strategic decisions.</li><li>Worked with technical and executive teams to improve customer data insights.</li></ul>` },
      { type: 'education', date: "2024", title: "International Diploma in Digital Transformation", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com" },
      { type: 'education', date: "2022", title: "Diploma in Web Design & Programming", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl" },
      { type: 'education', date: "2022", title: "University Preparation Program", company: "BYU PathwayConnect", url: "https://www.byupathway.edu" },
      { type: 'education', date: "2013–2020", title: "Industrial Civil Engineering", company: "Universidad de Valparaíso", url: "https://uv.cl" }
    ],
    cv_skills_title: "My Toolkit",
    cv_skills_items: [ { category: "Visualization", skills: [ { name: "Power BI", logo: "assets/img/logos/power-bi.png" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.png" }, { name: "Tableau", logo: "assets/img/logos/tableau.png" } ]}, { category: "Data", skills: [ { name: "SQL", logo: null }, { name: "Excel", logo: null }, { name: "LookML", logo: null } ]}, { category: "Methods", skills: [ { name: "KPIs", logo: null }, { name: "Agile", logo: null }, { name: "Storytelling", logo: null } ]} ],
    cv_languages_title: "Languages", cv_languages_items: [ { lang: "Spanish", level: "Native", flag: "es" }, { lang: "English", level: "B2 Upper-Intermediate", flag: "gb" }, { lang: "French", level: "A1 Basic", flag: "fr" } ],
    cv_interests_title: "Interests", cv_interests_items: [ { name: "Running", icon: "fa-solid fa-person-running" }, { name: "Football", icon: "fa-solid fa-futbol" }, { name: "Gaming", icon: "fa-solid fa-gamepad" }, { name: "Guitar", icon: "fa-solid fa-guitar" }, { name: "Drawing", icon: "fa-solid fa-pencil-alt" }, { name: "Tennis", icon: "fa-solid fa-trophy" } ],
    cv_certifications_title: "Certifications", cv_certifications_items: [ { name: "Qlik Sense Designer", url: "assets/certificates/Certificacion Qlik.pdf" }, { name: "Google Tag Manager (Basics)", url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf" }, { name: "Linguaskill English B2", url: "assets/certificates/Linguaskill Cambridge.pdf" }, { name: "SQL Certification", url: "assets/certificates/SQL.pdf" }, { name: "SSIS Certificate", url: "assets/certificates/SSIS.pdf" }, { name: "Tableau & Tableau Prep", url: "assets/certificates/Tableau.pdf" }, { name: "User Stories Certification", url: "assets/certificates/User Stories Certiprof.pdf" } ],
    cv_badges_title: "Highlighted Badges", cv_credly_link: "View profile on Credly",
  },
  es: {
    // ... (Contenido completo en Español aquí)
    // Asegúrate de que todas las secciones del CV también estén traducidas.
  }
};

let currentLang = 'en';

function setupScrollAnimations() {
    const items = document.querySelectorAll('.timeline-item');
    if(!items.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    items.forEach(item => { observer.observe(item); });
}

function populateCvPage(lang) {
    const data = translations[lang];
    const getEl = (id) => document.getElementById(id);

    if (getEl('cv-hero-title')) getEl('cv-hero-title').textContent = data.cv_hero_title;
    if (getEl('cv-hero-summary')) getEl('cv-hero-summary').textContent = data.cv_hero_summary;
    if (getEl('download-btn-text')) getEl('download-btn-text').textContent = data.cv_download;
    if (getEl('skills-title')) getEl('skills-title').textContent = data.cv_skills_title;
    if (getEl('languages-title')) getEl('languages-title').textContent = data.cv_languages_title;
    if (getEl('interests-title')) getEl('interests-title').textContent = data.cv_interests_title;
    if (getEl('certifications-title')) getEl('certifications-title').textContent = data.cv_certifications_title;
    if (getEl('badges-title')) getEl('badges-title').textContent = data.cv_badges_title;
    if (getEl('credly-link')) getEl('credly-link').querySelector('span').textContent = data.cv_credly_link;
    
    const timelineContainer = getEl('timeline-content-wrapper');
    if (timelineContainer) {
        timelineContainer.innerHTML = ''; // Clear
        data.cv_timeline_items.forEach((item, index) => {
            const side = (index % 2 === 0) ? 'left' : 'right';
            let contentBlock;
            if(item.type === 'work') {
                contentBlock = `<img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo"><h3>${item.title}</h3><p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>${item.description || ''}`;
            } else { // education
                contentBlock = `<h3>${item.title}</h3><p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>`;
            }
            const itemHtml = `<div class="timeline-item timeline-item-${side}"><div class="timeline-content-block">${contentBlock}</div></div>`;
            timelineContainer.innerHTML += itemHtml;
        });
    }
    
    const skillsContainer = getEl('skills-content');
    if(skillsContainer) {
        skillsContainer.innerHTML = '';
        data.cv_skills_items.forEach(category => {
            const categoryHtml = `<div class="skill-category-wrapper"><h3 class="skill-category-title">${category.category}</h3><div class="skills-logo-grid">${category.skills.map(item => { if (item.logo) { return `<div class="skill-item"><img src="${item.logo}" alt="${item.name} Logo"><p>${item.name}</p></div>`; } else { return `<div class="skill-tag"><p>${item.name}</p></div>`; } }).join('')}</div></div>`;
            skillsContainer.innerHTML += categoryHtml;
        });
    }

    const langContainer = getEl('languages-content');
    if(langContainer) langContainer.innerHTML = data.cv_languages_items.map(item => `<div class="language-item"><img src="https://flagcdn.com/w40/${item.flag}.png" alt="${item.lang} flag"><div><p><strong>${item.lang}</strong></p><p class="lang-level">${item.level}</p></div></div>`).join('');
    const interestsContainer = getEl('interests-content');
    if(interestsContainer) interestsContainer.innerHTML = data.cv_interests_items.map(item => `<div class="interest-item"><i class="${item.icon}"></i><p>${item.name}</p></div>`).join('');
    const certsContainer = getEl('certifications-content');
    if(certsContainer) certsContainer.innerHTML = data.cv_certifications_items.map(item => `<li><a href="${item.url}" download>${item.name}</a></li>`).join('');

    // Set up animations after content is populated
    setTimeout(setupScrollAnimations, 100);
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang];

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) { // Logic for index.html
      heroTitle.textContent = data.heroTitle;
      document.getElementById("hero-subtitle").textContent = data.heroSubtitle;
      document.getElementById("about-title").textContent = data.aboutTitle;
      document.getElementById("about-text-content").innerHTML = data.aboutContent;
      document.getElementById("impact-title").textContent = data.impactTitle;
      const impactGrid = document.querySelector('.impact-grid');
      if(impactGrid) {
          impactGrid.innerHTML = '';
          data.impacts.forEach(item => {
              const card = document.createElement('div');
              card.className = 'impact-card';
              card.innerHTML = `<i class="fas ${item.icon}"></i><h3>${item.title}</h3><p>${item.text}</p>`;
              impactGrid.appendChild(card);
          });
      }
      document.getElementById("projects-title").textContent = data.projectsTitle;
      const projectCarousel = document.getElementById("project-carousel");
      if (projectCarousel) {
        projectCarousel.innerHTML = `<div class="project-card"><img src="assets/img/us-unemployment-cover.png" alt="US Unemployment Dashboard"><div class="project-card-content"><h3 id="project-1-title">${data.project1Title}</h3><p id="project-1-description">${data.project1Description}</p><a href="projects/US-Unemployment.html" class="btn btn-blue" id="project-1-button">${data.project1Button}</a></div></div>`;
      }
      document.getElementById("view-all-btn").textContent = data.viewAllBtn;
      const btnProjects = document.getElementById("btn-projects");
      if(btnProjects) btnProjects.textContent = data.btnProjects;
      const btnResume = document.getElementById("btn-resume");
      if(btnResume) btnResume.textContent = data.btnResume;
  }
  
  const cvHeroTitle = document.getElementById('cv-hero-title');
  if (cvHeroTitle) { // Logic for cv.html
      populateCvPage(lang);
  }

  // Common logic for navigation
  document.querySelectorAll('.desktop-nav a[href="index.html#about"], .mobile-nav a[href="index.html#about"]').forEach(el => { if(el) el.textContent = data.navAbout });
  document.querySelectorAll('.desktop-nav a[href="cv.html"], .mobile-nav a[href="cv.html"]').forEach(el => { if(el) el.textContent = data.navResume });
  document.querySelectorAll('.desktop-nav a[href="projects.html"], .mobile-nav a[href="projects.html"]').forEach(el => { if(el) el.textContent = data.navProjects });

  // Common logic for language toggle
  document.querySelectorAll(".lang-toggle").forEach(el => {
    el.innerHTML = lang === "en" ? `<img src="https://flagcdn.com/cl.svg" alt="Bandera de Chile" style="width: 20px; vertical-align: middle;"> ES` : `<img src="https://flagcdn.com/us.svg" alt="USA Flag" style="width: 20px; vertical-align: middle;"> EN`;
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
        const mobileNav = document.querySelector('.mobile-nav');
        if(mobileNav) mobileNav.classList.toggle('show');
    });
  }

  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let autoScrollInterval;
    const scrollStep = 316;
    function startAutoScroll() {
      stopAutoScroll();
      autoScrollInterval = setInterval(() => {
        if (!carousel.offsetParent) return;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft - 10) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }, 4000);
    }
    function stopAutoScroll() { clearInterval(autoScrollInterval); }
    prevBtn.addEventListener('click', () => { stopAutoScroll(); carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' }); });
    nextBtn.addEventListener('click', () => { stopAutoScroll(); carousel.scrollBy({ left: scrollStep, behavior: 'smooth' }); });
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    startAutoScroll();
  }
});
