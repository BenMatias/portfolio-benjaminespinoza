const translations = {
  en: {
    heroTitle: "Business & Data Analyst focused on transforming data into decisions",
    heroSubtitle: "Helping businesses make better decisions through analytics and business intelligence.",
    btnProjects: "View Projects",
    btnResume: "View Resume",
    navAbout: "About",
    navResume: "CV / Resume",
    navProjects: "Projects",
    aboutTitle: "About Me",
    aboutContent: `
      <p>I'm Benjamin Espinoza, Business & Data Analyst with a degree in Industrial Engineering and a strong background in analytics, reporting, and stakeholder collaboration. I enjoy solving complex problems with simple and scalable solutions.</p>
      <p>My experience spans services, sales, and banking industries, where I've built dashboards, defined KPIs from scratch, and empowered teams through better data use. I translate business needs into analytical insights.</p>
      <p>I'm a father, a lifelong learner, passionate about music and continuous improvement. I’m currently expanding my skills in English, French, and product strategy.</p>
    `,
    impactTitle: "How I’ve Made an Impact",
    impacts: [
      { icon: "fa-chart-bar", title: "Dashboards that Drive Decisions", text: "Designed impactful dashboards for banking, industrial, and executive audiences using Power BI and Looker Studio." },
      { icon: "fa-bullseye", title: "Built KPI Systems from the Ground Up", text: "Established performance measurement frameworks in teams with no prior tracking, bringing structure, alignment, and continuous improvement." },
      { icon: "fa-clock", title: "Efficiency Through Automation", text: "Automated recurring reporting tasks to eliminate manual processes and optimize time." },
      { icon: "fa-users", title: "Insights Across the Organization", text: "Empowered diverse business areas with data-driven insights to support decision-making across operations, sales, risk, product, and beyond." }
    ],
    projectsTitle: "Featured Projects",
    project1Title: "US Unemployment Analysis",
    project1Description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.",
    project1Button: "View Project",
    viewAllBtn: "View All Projects"
  },
  es: {
    heroTitle: "Business & Data Analyst enfocado en transformar datos en decisiones",
    heroSubtitle: "Ayudo a las empresas a tomar mejores decisiones a través del análisis y la inteligencia de negocios.",
    btnProjects: "Ver Proyectos",
    btnResume: "Ver CV",
    navAbout: "Sobre mí",
    navResume: "CV",
    navProjects: "Proyectos",
    aboutTitle: "Sobre mí",
    aboutContent: `
      <p>Soy Benjamin Espinoza, Business & Data Analyst con formación en Ingeniería Civil Industrial y experiencia en análisis de datos, reportería y colaboración con áreas de negocio. Me apasiona resolver problemas complejos con soluciones simples y escalables.</p>
      <p>He trabajado en empresas de servicios, ventas y banca, creando dashboards, definiendo KPIs desde cero y promoviendo el uso estratégico de los datos. Traduzco necesidades de negocio en insights accionables.</p>
      <p>Padre, aprendiz permanente y amante de la música y la mejora continua. Actualmente perfecciono mi inglés, francés y conocimientos en estrategia de producto.</p>
    `,
    impactTitle: "Cómo He Generado Impacto",
    impacts: [
      { icon: "fa-chart-bar", title: "Dashboards que Impulsan Decisiones", text: "Diseñé dashboards de alto impacto para audiencias ejecutivas, industriales y del sector bancario usando Power BI y Looker Studio." },
      { icon: "fa-bullseye", title: "Implementación de Sistemas de KPIs desde Cero", text: "Establecí marcos de medición de desempeño donde antes no existían, aportando estructura, alineación y mejora continua." },
      { icon: "fa-clock", title: "Eficiencia a Través de la Automatización", text: "Automatización de tareas recurrentes de reportería para eliminar procesos manuales y optimizar el tiempo." },
      { icon: "fa-users", title: "Insights para Toda la Organización", text: "Apoyé diversas áreas de negocio con insights accionables que respaldan la toma de decisiones en operaciones, ventas, riesgo, producto y más." }
    ],
    projectsTitle: "Proyectos Destacados",
    project1Title: "Análisis de Desempleo en EE.UU.",
    project1Description: "Explora tendencias de desempleo en EE.UU. a nivel estatal y metropolitano mediante dashboards interactivos.",
    project1Button: "Ver Proyecto",
    viewAllBtn: "Ver Todos los Proyectos"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update hero
  document.getElementById("hero-title").textContent = translations[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent = translations[lang].heroSubtitle;
  document.getElementById("btn-projects").textContent = translations[lang].btnProjects;
  document.getElementById("btn-resume").textContent = translations[lang].btnResume;
  
  // Update navs
  document.querySelectorAll('a[href="#about"]').forEach(el => el.textContent = translations[lang].navAbout);
  document.querySelectorAll('a[href="assets/Benjamin_Espinoza_CV.pdf"]').forEach(el => el.textContent = translations[lang].navResume);
  document.querySelectorAll('a[href="projects.html"]:not(.btn)').forEach(el => el.textContent = translations[lang].navProjects);

  // Update About me
  document.getElementById("about-title").textContent = translations[lang].aboutTitle;
  document.getElementById("about-text-content").innerHTML = translations[lang].aboutContent;
  
  // Update Impact
  document.getElementById("impact-title").textContent = translations[lang].impactTitle;
  const impactGrid = document.querySelector('.impact-grid');
  impactGrid.innerHTML = ''; // Clear existing cards
  translations[lang].impacts.forEach(item => {
      const card = document.createElement('div');
      card.className = 'impact-card';
      card.innerHTML = `
          <i class="fas ${item.icon}"></i>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
      `;
      impactGrid.appendChild(card);
  });
  
  // Update Projects
  document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
  document.getElementById("project-1-title").textContent = translations[lang].project1Title;
  document.getElementById("project-1-description").textContent = translations[lang].project1Description;
  document.getElementById("project-1-button").textContent = translations[lang].project1Button;
  document.getElementById("view-all-btn").textContent = translations[lang].viewAllBtn;

  // Update language toggles
  document.querySelectorAll(".lang-toggle").forEach(el => {
    el.innerHTML = lang === "en"
      ? '<img src="https://flagcdn.com/cl.svg" alt="Bandera de Chile" style="width: 20px; vertical-align: middle;"> ES'
      : '<img src="https://flagcdn.com/us.svg" alt="USA Flag" style="width: 20px; vertical-align: middle;"> EN';
  });
}

function toggleLang() {
  const nextLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(nextLang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Set initial language
  setLanguage('en');
  
  // Add event listener for language toggles
  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  // Hamburger menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('show');
  });

  // Carousel logic
  const carousel = document.getElementById('project-carousel');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let autoScrollInterval;

  if (carousel) {
    const scrollStep = 316;

    function startAutoScroll() {
      stopAutoScroll();
      autoScrollInterval = setInterval(() => {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft - 10) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }, 4000);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    
    startAutoScroll();
  }
});
