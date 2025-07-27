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
    projects: [ { title: "US Unemployment Analysis", description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.", imageUrl: "assets/img/us-unemployment-cover.png", link: "projects/US-Unemployment.html", buttonText: "View Project" } ],
    viewAllBtn: "View All Projects",

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
      link: "projects/US-Unemployment.html",
      imageUrl: "assets/img/us-unemployment-cover.png"
    }],

    // --- Case Study Page Content: US Unemployment ---
    project_unemployment: {
      pageTitle: "Unemployment in America – A Data-Driven Overview",
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      lookerButton: "View on Looker Studio",
      problemTitle: "Problem Statement",
      problemText: "The national unemployment rate in the United States appears stable. However, this aggregated figure hides important differences between states and metropolitan areas.",
      objectiveTitle: "Dashboard Objective",
      objectiveText: "The goal of this dashboard is to offer a detailed and interactive view of unemployment trends in the United States, with analysis by state and metro area.",
      questionsTitle: "Key Questions",
      questionsList: [
        "Which regions have experienced the highest increases or decreases in unemployment over time?",
        "Are there metro areas that consistently show high or low unemployment compared to their states?",
        "What structural patterns or correlations are observed across cities and regions?"
      ],
      datasetTitle: "Dataset Information",
      datasetSource: "Source:",
      datasetSourceLink: "U.S. Bureau of Labor Statistics",
      datasetPeriod: "Period:",
      datasetPeriodValue: "January 2020 – May 2025",
      datasetScope: "Scope:",
      datasetScopeValue: "National, State, Metro Areas (seasonally adjusted)",
      roleTitle: "My Role",
      roleText: "I sourced and filtered public datasets, defined KPIs and filtering logic, and designed the dashboard using Looker Studio.",
      dashboardTitle: "Interactive Dashboard",
      dashboardSubtitle: "Explore the interactive report below or use the tabs to dive into state and metro-level insights."
    }
  },
  es: {
    // --- Navigation ---
    navAbout: "Sobre mí",
    navResume: "CV",
    navProjects: "Proyectos",
    // ... (El resto del contenido en español se omite por brevedad, pero estaría completo aquí)
  }
};

let currentLang = 'en';
let basePath = '';

function getEl(id) {
  return document.getElementById(id);
}

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

function populateHomePage(lang, basePath) {
  const data = translations[lang] || translations.en;
  getEl('hero-title').textContent = data.heroTitle;
  getEl("hero-subtitle").textContent = data.heroSubtitle;
  getEl("btn-projects").textContent = data.btnProjects;
  getEl("btn-resume").textContent = data.btnResume;
  getEl("about-title").textContent = data.aboutTitle;
  getEl("about-text-content").innerHTML = data.aboutContent;
  getEl("impact-title").textContent = data.impactTitle;
  
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

  getEl("projects-title").textContent = data.projectsTitle;
  const projectCarousel = getEl("project-carousel");
  if (projectCarousel) {
      projectCarousel.innerHTML = '';
      (data.projects || []).forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.innerHTML = `
              <img src="${basePath}${project.imageUrl}" alt="${project.title}">
              <div class="project-card-content">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <a href="${project.link}" class="btn btn-outline-blue">${project.buttonText}</a>
              </div>`;
          projectCarousel.appendChild(card);
      });
  }
  getEl("view-all-btn").textContent = data.viewAllBtn;
}

function populateCvPage(lang, basePath) {
  const data = translations[lang] || translations.en;
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
  if (timelineWork) {
    timelineWork.innerHTML = data.cv_timeline_items.filter(item => item.type === 'work').map(item => `
      <div class="timeline-item">
        <div class="timeline-logo-wrapper"><img src="${basePath}${item.logo}" alt="${item.company} Logo" class="timeline-logo"></div>
        <div class="timeline-content-block">
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>
            ${item.description || ''}
        </div>
      </div>`).join('');
  }

  const timelineEducation = getEl('timeline-education-content');
  if (timelineEducation) {
    timelineEducation.innerHTML = data.cv_timeline_items.filter(item => item.type === 'education').map(item => `
      <div class="timeline-item">
        <div class="timeline-logo-wrapper"><img src="${basePath}${item.logo}" alt="${item.company} Logo" class="timeline-logo"></div>
        <div class="timeline-content-block">
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-company"><a href="${item.url}" target="_blank" rel="noopener">${item.company}</a></p>
            ${item.description || ''}
        </div>
      </div>`).join('');
  }

  const skillsContainer = getEl('skills-content');
  if (skillsContainer) {
    const { tier1, tier2, tier3, tier4 } = data.cv_skills_items;
    let lineupHtml = '<div class="skills-lineup">';
    if (tier1) lineupHtml += `<div class="lineup-tier lineup-tier-1">${tier1.map(s => `<div class="skill"><img src="${basePath}${s.logo}" class="skill-logo" alt="${s.name} logo"><span>${s.name}</span></div>`).join('')}</div>`;
    if (tier2) lineupHtml += `<div class="lineup-tier lineup-tier-2">${tier2.map(s => `<div class="skill">${s}</div>`).join('')}</div>`;
    if (tier3) lineupHtml += `<div class="lineup-tier lineup-tier-3">${tier3.map(s => `<div class="skill">${s}</div>`).join('')}</div>`;
    if (tier4) lineupHtml += `<div class="lineup-tier lineup-tier-4">${tier4.map(s => `<div class="skill">${s}</div>`).join('')}</div>`;
    lineupHtml += '</div>';
    skillsContainer.innerHTML = lineupHtml;
  }

  const langContainer = getEl('languages-content');
  if (langContainer) langContainer.innerHTML = data.cv_languages_items.map(item => `<div class="language-item"><img src="https://flagcdn.com/w40/${item.flag}.png" alt="${item.lang} flag"><div><p><strong>${item.lang}</strong></p><p class="lang-level">${item.level}</p></div></div>`).join('');
  const interestsContainer = getEl('interests-content');
  if (interestsContainer) interestsContainer.innerHTML = data.cv_interests_items.map(item => `<div class="interest-item"><i class="${item.icon}"></i><p>${item.name}</p></div>`).join('');
  const certsContainer = getEl('certifications-content');
  if (certsContainer) certsContainer.innerHTML = data.cv_certifications_items.map(item => `<li><a href="${basePath}${item.url}" target="_blank" rel="noopener">${item.name}</a></li>`).join('');

  setTimeout(setupScrollAnimations, 100);
}

function populateProjectsPage(lang, basePath) {
  const data = translations[lang] || translations.en;
  const titleEl = getEl('projects-title');
  if (titleEl) {
    titleEl.innerHTML = `<i class="fas fa-lightbulb"></i> ${data.projects_page_title}`;
  }

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
      previewImage.style.backgroundImage = `url('${basePath}${project.imageUrl}')`;
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
}

function populateCaseStudyPage(lang, basePath) {
    const data = translations[lang].project_unemployment || translations.en.project_unemployment;

    if (getEl('project-title')) getEl('project-title').textContent = data.pageTitle;
  
    const btnGroup = getEl('project-button-group');
    if (btnGroup) {
      const pageUrl = window.location.href;
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(data.pageTitle)}`;
  
      btnGroup.innerHTML = `
        <a href="${basePath}projects.html" class="button btn-back"><i class="fas fa-arrow-left"></i> ${data.backButton}</a>
        <a href="${linkedinUrl}" class="button btn-linkedin" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> ${data.linkedinButton}</a>
        <a href="${twitterUrl}" class="button btn-x" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> ${data.xButton}</a>
        <a href="https://lookerstudio.google.com/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
      `;
    }
  
    const contextGrid = getEl('project-context');
    if (contextGrid) {
      contextGrid.innerHTML = `
        <div class="context-section">
          <h3><i class="fas fa-exclamation-circle"></i> ${data.problemTitle}</h3>
          <p>${data.problemText}</p>
        </div>
        <div class="context-section">
          <h3><i class="fas fa-bullseye"></i> ${data.objectiveTitle}</h3>
          <p>${data.objectiveText}</p>
        </div>
        <div class="context-section">
          <h3><i class="fas fa-user-tie"></i> ${data.roleTitle}</h3>
          <p>${data.roleText}</p>
        </div>
        <div class="context-section">
          <h3><i class="fas fa-database"></i> ${data.datasetTitle}</h3>
          <p>
            <strong>${data.datasetSource}</strong> <a href="https://www.bls.gov/data/" target="_blank" rel="noopener">${data.datasetSourceLink}</a><br>
            <strong>${data.datasetPeriod}</strong> ${data.datasetPeriodValue}<br>
            <strong>${data.datasetScope}</strong> ${data.datasetScopeValue}
          </p>
        </div>
      `;
    }
  
    const dashboardContent = getEl('project-dashboard-section');
    if (dashboardContent) {
      dashboardContent.innerHTML = `
        <h2><i class="fas fa-poll"></i> ${data.dashboardTitle}</h2>
        <p><em>${data.dashboardSubtitle}</em></p>
        <div class="dashboard-embed-container">
          <iframe 
            src="https://lookerstudio.google.com/embed/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45/page/SE1QF"
            loading="lazy" 
            allowfullscreen 
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
          </iframe>
        </div>
      `;
    }
}


function setLanguage(lang, basePath) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const data = translations[lang] || translations.en;

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  if (document.body.classList.contains('page-home')) {
    populateHomePage(lang, basePath);
  }
  if (document.body.classList.contains('page-cv')) {
    populateCvPage(lang, basePath);
  }
  if (document.body.classList.contains('page-projects')) {
    populateProjectsPage(lang, basePath);
  }
  if (document.body.classList.contains('page-project-case-study')) {
    populateCaseStudyPage(lang, basePath);
  }

  document.querySelectorAll(".lang-toggle").forEach(el => {
    const flag = lang === "en" ? 'cl' : 'us';
    const alt = lang === "en" ? 'Bandera de Chile' : 'USA Flag';
    const text = lang === "en" ? 'ES' : 'EN';
    const flagUrl = `https://flagcdn.com/w20/${flag}.png`;
    el.innerHTML = `<img src="${flagUrl}" alt="${alt}" style="width: 20px; vertical-align: middle;"> ${text}`;
  });
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'es' : 'en', basePath);
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  
  // Asignar clase al body y definir el basePath
  if (path.endsWith('/') || path.endsWith('index.html') || path.length <= 1) {
    document.body.classList.add('page-home');
    basePath = '';
  } else if (path.includes('cv.html')) {
    document.body.classList.add('page-cv');
    basePath = '';
  } else if (path.includes('projects.html')) {
    document.body.classList.add('page-projects');
    basePath = '';
  } else if (path.includes('/projects/')) {
    document.body.classList.add('page-project-case-study');
    basePath = '../';
  }

  // Cargar el contenido inicial
  setLanguage('en', basePath);

  // Añadir event listeners
  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  const menuToggle = getEl('menu-toggle');
  const mobileNav = getEl('mobile-nav');

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

  const carousel = getEl('project-carousel');
  if (carousel) {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const scrollStep = () => 324;
    nextBtn.addEventListener('click', () => carousel.scrollBy({ left: scrollStep(), behavior: 'smooth' }));
    prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollStep(), behavior: 'smooth' }));
  }
});
