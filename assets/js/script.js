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
    projects: [
        { title: "Interactive Pokédex", description: "A National Pokédex of 1,025 Pokémon built by connecting to the PokéAPI with Apps Script.", imageUrl: "assets/img/pokedex-cover.png", link: "projects/pokedex-dashboard.html", buttonText: "View Project" },
        { title: "US Unemployment Analysis", description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.", imageUrl: "assets/img/us-unemployment-cover.png", link: "projects/US-Unemployment.html", buttonText: "View Project" },
        { title: "Global Financial Inclusion", description: "Visualize global trends in account ownership and borrowing behavior by region, income group, and demographics.", imageUrl: "assets/img/global-financial-inclusion-cover.png", link: "projects/global-financial-inclusion.html", buttonText: "View Project" }
    ],
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
    projects_list: [
        { id: "project-pokedex", title: "Interactive Pokédex", description: "An interactive dashboard with data from over 1,000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.png", buttonText: "View Project" },
        { id: "project-unemployment", title: "Unemployment in America", description: "Analysis of unemployment trends across U.S. states and metro areas.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.png", buttonText: "View Project" },
        { id: "project-financial-inclusion", title: "Global Financial Inclusion", description: "Visualizing global trends in account ownership and borrowing behaviors.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.png", buttonText: "View Project" }
    ],

    // --- CASE STUDY DATA ---
    project_pokedex: {
      pageTitle: "Interactive Pokédex Dashboard – Powered by Looker Studio",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF",
      iframeEmbed: `<iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      lookerButton: "View on Looker Studio",
      executiveSummary: [
        {
          icon: "fas fa-database",
          title: "API Integration",
          text: "Connected to the PokéAPI via Google Apps Script to fetch and process data for over 1,000 Pokémon."
        },
        {
          icon: "fas fa-palette",
          title: "Dynamic Visual Elements",
          text: "Used conditional formatting to dynamically change colors and styles based on Pokémon type, just like a real Pokédex."
        },
        {
          icon: "fas fa-sitemap",
          title: "Data Modeling",
          text: "Transformed and structured the raw API data in Google Sheets to create a clean and efficient dataset for visualization."
        }
      ],
      problemTitle: "Beyond the Office: Finding Fun in Data",
      problemText: "Who says data is just for boardrooms and balance sheets? This project was born from a simple idea: data is everywhere, and with a bit of creativity, it can be used to build something fun. The goal was to step away from traditional business KPIs and use analytics skills to bring a piece of pop culture to life.",
      objectiveTitle: "Dashboard Features",
      objectiveText: "This dashboard connects to the PokéAPI via Google Sheets and Apps Script to dynamically build a National Pokédex. Each Pokémon profile features type, abilities, stats, and visual styling inspired by the anime Pokédex layout.",
      datasetTitle: "Technology Stack",
      datasetSource: "Data Source:",
      datasetSourceText: "PokéAPI",
      datasetSourceLink: "https://pokeapi.co/",
      datasetScope: "Tools:",
      datasetScopeValue: "Google Looker Studio, Google Sheets, Google Apps Script, API.",
      roleTitle: "My Role",
      roleText: "As the sole creator, I handled the entire end-to-end process: writing the Apps Script code to call the API, transforming the data, and designing the complete interactive experience in Looker Studio.",
      dashboardTitle: "Interactive Pokédex",
      dashboardSubtitle: `Select a Pokémon to see its complete profile, including stats, abilities, and more. You can see it in full screen <a href="https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" target="_blank" rel="noopener" class="subtitle-link">here</a>.`
    },
    project_unemployment: {
      pageTitle: "Unemployment in America – A Data-Driven Overview",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45",
      iframeEmbed: `<iframe src="https://lookerstudio.google.com/embed/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45/page/SE1QF" loading="lazy" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      lookerButton: "View on Looker Studio",
      executiveSummary: [
        {
          icon: "fas fa-chart-line",
          title: "Regional Disparities",
          text: "The national unemployment rate masks significant variations between states, with some regions showing much higher volatility."
        },
        {
          icon: "fas fa-city",
          title: "Urban vs. State Trends",
          text: "Certain metropolitan areas exhibit unemployment patterns that diverge considerably from their state's average."
        },
        {
          icon: "fas fa-search-dollar",
          title: "Structural Patterns",
          text: "The analysis reveals structural economic factors that correlate with persistently high or low unemployment rates in specific zones."
        }
      ],
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
      datasetSourceText: "U.S. Bureau of Labor Statistics",
      datasetSourceLink: "https://www.bls.gov/data/",
      datasetPeriod: "Period:",
      datasetPeriodValue: "January 2020 – May 2025",
      datasetScope: "Scope:",
      datasetScopeValue: "National, State, Metro Areas (seasonally adjusted)",
      roleTitle: "My Role",
      roleText: "I sourced and filtered public datasets, defined KPIs and filtering logic, and designed the dashboard using Looker Studio.",
      dashboardTitle: "Interactive Dashboard",
      dashboardSubtitle: `Explore the interactive report below or use the tabs to dive into state and metro-level insights. You can see it in full screen <a href="https://lookerstudio.google.com/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45" target="_blank" rel="noopener" class="subtitle-link">here</a>.`
    },
    project_financial_inclusion: {
      pageTitle: "Global Financial Inclusion Dashboard – 2024",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb",
      iframeEmbed: `<iframe width="100%" height="100%" src="https://lookerstudio.google.com/embed/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb/page/4kyRF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      lookerButton: "View on Looker Studio",
      executiveSummary: [
        {
          icon: "fas fa-users",
          title: "5.77 Billion Adults (15+)",
          text: "Total global adult population considered for financial inclusion metrics in 2024."
        },
        {
          icon: "fas fa-piggy-bank",
          title: "74.35% Formal Account Ownership",
          text: "Global rate of adults who own an account at a formal financial institution, reflecting access to regulated services."
        },
        {
          icon: "fas fa-chart-line",
          title: "Steady Growth Since 2011",
          text: "The dashboard shows a clear upward trend in both general and formal account ownership over the last decade."
        }
      ],
      problemTitle: "Problem Statement",
      problemText: "Financial inclusion is essential for reducing inequality and promoting sustainable economic development. However, access to financial services varies significantly across countries, regions, and income levels. Understanding these gaps is key to driving more inclusive financial ecosystems.",
      objectiveTitle: "Dashboard Objective",
      objectiveText: "To provide a comprehensive overview of financial inclusion worldwide, focusing on account ownership (formal and mobile money) and borrowing behavior. The dashboard allows for interactive comparisons by region, income group, and demographic characteristics.",
      questionsTitle: "Key Questions",
      questionsList: [
        "Which regions show the most significant progress in financial inclusion since 2011?",
        "How does account ownership correlate with a country's income level?",
        "What is the gap between the top 10 and bottom 10 countries in terms of financial access?",
        "Where is mobile money playing a key role in bridging the financial access gap?"
      ],
      datasetTitle: "Dataset Information",
      datasetSource: "Source:",
      datasetSourceText: "World Bank – Global Findex Database",
      datasetSourceLink: "https://www.worldbank.org/en/publication/globalfindex",
      datasetPeriod: "Coverage:",
      datasetPeriodValue: "Global data from 2011 to 2024",
      datasetScope: "Metrics:",
      datasetScopeValue: "Account ownership, borrowing, mobile money, demographics (adults 15+).",
      roleTitle: "My Role",
      roleText: "I developed this dashboard from start to finish, handling the entire process from data cleaning and transformation to KPI design and the final build of the interactive dashboard in Looker Studio.",
      dashboardTitle: "Interactive Global Findex Dashboard",
      dashboardSubtitle: `Use the dynamic filters to explore financial inclusion data by year, region, country, and income group. You can see it in full screen <a href="https://lookerstudio.google.com/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb" target="_blank" rel="noopener" class="subtitle-link">here</a>.`
    }
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
    projects: [
        { title: "Pokédex Interactiva", description: "Una Pokédex Nacional de 1.025 Pokémon construida conectándose a la PokéAPI con Apps Script.", imageUrl: "assets/img/pokedex-cover.png", link: "projects/pokedex-dashboard.html", buttonText: "Ver Proyecto" },
        { title: "Análisis de Desempleo en EE.UU.", description: "Explora tendencias de desempleo en EE.UU. a nivel estatal y metropolitano mediante dashboards interactivos.", imageUrl: "assets/img/us-unemployment-cover.png", link: "projects/US-Unemployment.html", buttonText: "Ver Proyecto" },
        { title: "Inclusión Financiera Global", description: "Visualiza tendencias globales de titularidad de cuentas y comportamiento de crédito por región, ingreso y demografía.", imageUrl: "assets/img/global-financial-inclusion-cover.png", link: "projects/global-financial-inclusion.html", buttonText: "Ver Proyecto" }
    ],
    viewAllBtn: "Ver Todos los Proyectos",
    
    // --- CV Page Content (Spanish) ---
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
    cv_timeline_items: [
        { type: 'work', date: "Mayo 2023 – Actualidad", title: "Business Analyst", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.png", description: `<ul><li>Desarrollé un sistema de reportes y KPIs desde cero para el área de innovación, donde no existía medición previa.</li><li>Creé más de 20 dashboards para innovación, fraude, ventas, dueños de productos y planificación.</li><li>Lideré equipo de métricas que automatizó procesos mediante ETL y base de datos propia.</li><li>Transición exitosa al rol de Business Analyst en célula ágil con foco en historias de usuario, flujos y pruebas.</li></ul>` },
        { type: 'work', date: "Sep 2021 – Abr 2023", title: "Analista de Datos y Control de Gestión", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.png", description: `<ul><li>Ingresé a una posición nueva para resolver brechas de visibilidad y reportes en una estructura financiera compartida.</li><li>Generé y automatizé más de 30 dashboards para ventas, inventario, abastecimiento, servicios automotrices, operaciones y gerencia.</li><li>Automatización diaria ahorró hasta 1 hora por día.</li><li>Reduje el proceso de presupuesto anual de 6 a 2 meses en dos años consecutivos.</li></ul>` },
        { type: 'work', date: "Nov 2019 – Ago 2021", title: "Analista de Control de Gestión", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.png", description: `<ul><li>Supervisión de KPIs y control de costos para proyectos de mantenimiento y modernización.</li><li>Reportes y dashboards en Excel y Power BI para análisis financiero y mejora de tiempos de respuesta.</li></ul>` },
        { type: 'education', date: "2024", title: "Diplomado Internacional en Transformación Digital", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com", logo: "assets/img/logos/digital-bank-latam.png" },
        { type: 'education', date: "2022", title: "Diplomado en Diseño y Programación Web", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl", logo: "assets/img/logos/telefonica-aiep.png" },
        { type: 'education', date: "2022", title: "Programa universitario introductorio", company: "BYU PathwayConnect", url: "https://www.byupathway.edu", logo: "assets/img/logos/byu.png" },
        { type: 'education', date: "2013–2020", title: "Ingeniería Civil Industrial", company: "Universidad de Valparaíso", url: "https://uv.cl", logo: "assets/img/logos/uv.png" }
    ],
    cv_skills_items: {
        tier1: [ { name: "Power BI", logo: "assets/img/logos/power-bi.png" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.png" }, { name: "Tableau", logo: "assets/img/logos/tableau.png" } ], 
        tier2: ["Modelado de Datos", "Inteligencia de Negocios", "Diseño de Dashboards", "Storytelling", "Gestión de Interesados"],
        tier3: ["Power Query", "DAX", "LookML", "Mapeo de Procesos", "BPMN", "Agile/Scrum", "Desarrollo de KPIs", "SQL"],
        tier4: ["Jira / Confluence", "Excel Avanzado", "Google Sheets", "Lucidchart / Draw.io", "Principios de Visualización de Datos", "Documentación y Reportería", "Miro"]
    },
    cv_languages_items: [ { lang: "Español", level: "Nativo", flag: "es" }, { lang: "Inglés", level: "B2 Intermedio-Alto", flag: "gb" }, { lang: "Francés", level: "A1 Básico", flag: "fr" } ],
    cv_interests_items: [ { name: "Correr", icon: "fa-solid fa-person-running" }, { name: "Fútbol", icon: "fa-solid fa-futbol" }, { name: "Videojuegos", icon: "fa-solid fa-gamepad" }, { name: "Tenis", icon: "fa-solid fa-baseball" }, { name: "Guitarra", icon: "fa-solid fa-guitar" }, { name: "Dibujo", icon: "fa-solid fa-pencil-alt" }, { name: "Festivales", icon: "fa-solid fa-music" } ],
    cv_certifications_items: [ { name: "Qlik Sense Diseñador", url: "assets/certificates/Certificacion Qlik.pdf" }, { name: "Google Tag Manager (Básico)", url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf" }, { name: "Inglés B2 – Linguaskill", url: "assets/certificates/Linguaskill Cambridge.pdf" }, { name: "Certificación SQL", url: "assets/certificates/SQL.pdf" }, { name: "Certificación SSIS", url: "assets/certificates/SSIS.pdf" }, { name: "Tableau & Tableau Prep", url: "assets/certificates/Tableau.pdf" }, { name: "User Stories Certificate", url: "assets/certificates/User Stories Certiprof.pdf" } ],

    // --- Projects Page Content (Spanish) ---
    projects_page_title: "Proyectos",
    projects_list: [
        { id: "project-pokedex", title: "Pokédex Interactiva", description: "Un dashboard interactivo con datos de más de 1.000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.png", buttonText: "Ver Proyecto" },
        { id: "project-unemployment", title: "Desempleo en América", description: "Análisis de tendencias de desempleo en estados y áreas metropolitanas de EE.UU.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.png", buttonText: "Ver Proyecto" },
        { id: "project-financial-inclusion", title: "Inclusión Financiera Global", description: "Visualización de tendencias globales en posesión de cuentas y comportamientos de crédito.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.png", buttonText: "Ver Proyecto" }
    ],

    // --- CASE STUDY DATA ---
    project_pokedex: {
      pageTitle: "Dashboard Interactivo de Pokédex – Con Looker Studio",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF",
      iframeEmbed: `<iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Volver a Proyectos",
      linkedinButton: "Compartir en LinkedIn",
      xButton: "Compartir en X",
      lookerButton: "Ver en Looker Studio",
      executiveSummary: [
        {
          icon: "fas fa-database",
          title: "Integración con API",
          text: "Conexión a la PokéAPI mediante Google Apps Script para obtener y procesar datos de más de 1.000 Pokémon."
        },
        {
          icon: "fas fa-palette",
          title: "Elementos Visuales Dinámicos",
          text: "Uso de formato condicional para cambiar colores y estilos según el tipo de Pokémon, como en una Pokédex real."
        },
        {
          icon: "fas fa-sitemap",
          title: "Modelado de Datos",
          text: "Transformación y estructuración de los datos crudos de la API en Google Sheets para crear un dataset limpio y eficiente."
        }
      ],
      problemTitle: "Datos más allá de la oficina: la diversión de crear",
      problemText: "¿Quién dijo que los datos son solo para el trabajo? Este proyecto nació de una idea simple: los datos están en todas partes y, con un poco de creatividad, pueden usarse para construir algo entretenido. El objetivo fue alejarse de los KPIs de negocio y usar las habilidades de análisis para dar vida a un ícono de la cultura pop.",
      objectiveTitle: "Características del Dashboard",
      objectiveText: "Este dashboard se conecta a la PokéAPI a través de Google Sheets y Apps Script para construir dinámicamente una Pokédex Nacional. Cada perfil de Pokémon muestra su tipo, habilidades, estadísticas y un estilo visual inspirado en la Pokédex del anime.",
      datasetTitle: "Stack Tecnológico",
      datasetSource: "Fuente de Datos:",
      datasetSourceText: "PokéAPI",
      datasetSourceLink: "https://pokeapi.co/",
      datasetScope: "Herramientas:",
      datasetScopeValue: "Google Looker Studio, Google Sheets, Google Apps Script, API.",
      roleTitle: "Mi Rol",
      roleText: "Como único creador, me encargué de todo el proceso: escribí el código en Apps Script para llamar a la API, transformé los datos y diseñé la experiencia interactiva completa en Looker Studio.",
      dashboardTitle: "Pokédex Interactiva",
      dashboardSubtitle: `Selecciona un Pokémon para ver su perfil completo, con estadísticas, habilidades y más. Puedes verlo en pantalla completa <a href="https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" target="_blank" rel="noopener" class="subtitle-link">aquí</a>.`
    },
    project_unemployment: {
      pageTitle: "Desempleo en Estados Unidos – Un análisis basado en datos",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45",
      iframeEmbed: `<iframe src="https://lookerstudio.google.com/embed/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45/page/SE1QF" loading="lazy" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Volver a Proyectos",
      linkedinButton: "Compartir en LinkedIn",
      xButton: "Compartir en X",
      lookerButton: "Ver en Looker Studio",
      executiveSummary: [
        {
            icon: "fas fa-chart-line",
            title: "Disparidades Regionales",
            text: "La tasa de desempleo nacional enmascara variaciones significativas entre estados, con algunas regiones mostrando una volatilidad mucho mayor."
        },
        {
            icon: "fas fa-city",
            title: "Tendencias Urbanas vs. Estatales",
            text: "Ciertas áreas metropolitanas exhiben patrones de desempleo que divergen considerablemente del promedio de sus estados respectivos."
        },
        {
            icon: "fas fa-search-dollar",
            title: "Patrones Estructurales",
            text: "El análisis revela factores económicos estructurales que se correlacionan con tasas de desempleo persistentemente altas o bajas en zonas específicas."
        }
      ],
      problemTitle: "Problema",
      problemText: "La tasa de desempleo nacional en Estados Unidos parece estable. Sin embargo, esta cifra agregada oculta diferencias importantes entre estados y áreas metropolitanas.",
      objectiveTitle: "Objetivo del Dashboard",
      objectiveText: "Este dashboard tiene como objetivo ofrecer una visión detallada e interactiva de las tendencias de desempleo en Estados Unidos, con análisis por estado y ciudad.",
      questionsTitle: "Preguntas Clave",
      questionsList: [
        "¿Qué regiones han tenido mayores aumentos o disminuciones en el desempleo a lo largo del tiempo?",
        "¿Existen ciudades con niveles de desempleo distintos a sus estados?",
        "¿Qué patrones estructurales se observan entre ciudades y regiones?"
      ],
      datasetTitle: "Información del Dataset",
      datasetSource: "Fuente:",
      datasetSourceText: "Oficina de Estadísticas Laborales de EE. UU.",
      datasetSourceLink: "https://www.bls.gov/data/",
      datasetPeriod: "Período:",
      datasetPeriodValue: "Enero 2020 – Mayo 2025",
      datasetScope: "Cobertura:",
      datasetScopeValue: "Nacional, Estatal, Áreas Metropolitanas (ajustado estacionalmente)",
      roleTitle: "Mi Rol",
      roleText: "Seleccioné y filtré datasets públicos, definí indicadores clave (KPIs) y lógica de filtros, y diseñé la estructura del dashboard en Looker Studio.",
      dashboardTitle: "Dashboard Interactivo",
      dashboardSubtitle: `Explora el reporte interactivo o usa las pestañas para navegar por estado y ciudad. Puedes verlo en pantalla completa <a href="https://lookerstudio.google.com/reporting/0c6a7b6a-a542-4cdc-8c57-dbe52b344e45" target="_blank" rel="noopener" class="subtitle-link">aquí</a>.`
    },
    project_financial_inclusion: {
      pageTitle: "Dashboard de Inclusión Financiera Global – 2024",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb",
      iframeEmbed: `<iframe width="100%" height="100%" src="https://lookerstudio.google.com/embed/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb/page/4kyRF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
      backButton: "Volver a Proyectos",
      linkedinButton: "Compartir en LinkedIn",
      xButton: "Compartir en X",
      lookerButton: "Ver en Looker Studio",
      executiveSummary: [
        {
          icon: "fas fa-users",
          title: "5.77 Mil Millones de Adultos (+15)",
          text: "Población adulta global total considerada para las métricas de inclusión financiera en 2024."
        },
        {
          icon: "fas fa-piggy-bank",
          title: "74,35% Titularidad de Cuenta Formal",
          text: "Tasa global de adultos que poseen una cuenta en una institución financiera formal, reflejando el acceso a servicios regulados."
        },
        {
          icon: "fas fa-chart-line",
          title: "Crecimiento Sostenido desde 2011",
          text: "El dashboard muestra una clara tendencia al alza tanto en la titularidad de cuentas generales como formales durante la última década."
        }
      ],
      problemTitle: "Planteamiento del Problema",
      problemText: "La inclusión financiera es esencial para reducir la desigualdad y promover el desarrollo económico sostenible. Sin embargo, el acceso a servicios financieros varía significativamente entre países, regiones y niveles de ingreso. Comprender estas brechas es clave para impulsar ecosistemas financieros más inclusivos.",
      objectiveTitle: "Objetivo del Dashboard",
      objectiveText: "Proveer una visión completa de la inclusión financiera mundial, enfocándose en la titularidad de cuentas (formales y de dinero móvil) y el comportamiento de endeudamiento. El dashboard permite comparaciones interactivas por región, grupo de ingresos y características demográficas.",
      questionsTitle: "Preguntas Clave",
      questionsList: [
        "¿Qué regiones muestran el progreso más significativo en inclusión financiera desde 2011?",
        "¿Cómo se correlaciona la titularidad de cuentas con el nivel de ingresos de un país?",
        "¿Cuál es la brecha entre los 10 países con mayor y menor acceso financiero?",
        "¿Dónde está jugando el dinero móvil un rol clave para cerrar la brecha de acceso financiero?"
      ],
      datasetTitle: "Información del Dataset",
      datasetSource: "Fuente:",
      datasetSourceText: "Banco Mundial – Base de Datos Global Findex",
      datasetSourceLink: "https://www.worldbank.org/en/publication/globalfindex",
      datasetPeriod: "Cobertura:",
      datasetPeriodValue: "Datos globales de 2011 a 2024",
      datasetScope: "Métricas:",
      datasetScopeValue: "Titularidad de cuentas, endeudamiento, dinero móvil, demografía (adultos +15).",
      roleTitle: "Mi Rol",
      roleText: "Desarrollé este dashboard de principio a fin, abarcando todo el proceso: desde la limpieza y transformación de los datos, hasta el diseño de KPIs y la construcción de la versión final interactiva en Looker Studio.",
      dashboardTitle: "Dashboard Interactivo de Inclusión Financiera",
      dashboardSubtitle: `Usa los filtros dinámicos para explorar los datos de inclusión financiera por año, región, país y grupo de ingresos. Puedes verlo en pantalla completa <a href="https://lookerstudio.google.com/reporting/d245373a-d1e9-46ab-b29a-f11a40d153bb" target="_blank" rel="noopener" class="subtitle-link">aquí</a>.`
    }
  }
};

let currentLang = 'en';
let basePath = '';

function getEl(id) {
  return document.getElementById(id);
}

// FUNCIÓN GLOBAL: Se ejecutará en todas las páginas
function setupGlobalInteractions() {
  const menuToggle = getEl('menu-toggle');
  const mobileNav = getEl('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }
}

// FUNCIÓN PARA EL INICIO: Se ejecutará solo en el index
function setupHomePageCarousel() {
  const carousel = getEl('project-carousel');
  if (carousel) {
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    const checkCarouselButtons = () => {
      if (!carousel || !prevButton || !nextButton) return;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      prevButton.style.display = (carousel.scrollLeft <= 1) ? 'none' : 'block';
      nextButton.style.display = (carousel.scrollLeft >= maxScrollLeft - 1) ? 'none' : 'block';
    };

    if (prevButton && nextButton) {
      nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 324, behavior: 'smooth' });
      });
      prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -324, behavior: 'smooth' });
      });
      carousel.addEventListener('scroll', checkCarouselButtons);
      setTimeout(checkCarouselButtons, 150);
    }
  }
}

// --- LÓGICA DE ACORDEÓN ---
function setupAccordion(containerSelector, headerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const headers = container.querySelectorAll(headerSelector);
  headers.forEach(header => {
    // Evitar añadir listeners múltiples veces si la función es llamada de nuevo
    if (header.dataset.accordionAttached) return;
    header.dataset.accordionAttached = 'true';

    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasActive = item.classList.contains('active');
      
      // Cerrar todos los items dentro del mismo contenedor
      container.querySelectorAll('.active').forEach(activeItem => {
        activeItem.classList.remove('active');
      });

      // Abrir el item clickeado si no estaba activo
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
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
        titleEl.textContent = data.projects_page_title;
    }

    const listUl = getEl('projects-list-ul');
    const previewCol = getEl('projects-preview-column');

    if (listUl) {
        listUl.innerHTML = '';
        if (previewCol) previewCol.innerHTML = '';
        listUl.className = 'projects-list-ul'; // Reset classes

        const isMobile = window.innerWidth <= 992;

        if (isMobile) {
            // Mobile Accordion View
            listUl.classList.add('is-accordion');
            (data.projects_list || []).forEach(project => {
                const accordionItem = document.createElement('li');
                accordionItem.className = 'accordion-item';
                accordionItem.innerHTML = `
                    <button class="accordion-header">
                        <span>${project.title}</span>
                        <i class="fas fa-chevron-down chevron-icon"></i>
                    </button>
                    <div class="accordion-content">
                        <p class="project-list-description">${project.description}</p>
                        <a href="${project.link}" class="btn btn-outline-blue">${project.buttonText}</a>
                    </div>
                `;
                listUl.appendChild(accordionItem);
            });
            setupAccordion('.projects-list-ul', '.accordion-header');

        } else {
            // Desktop Interactive List View
            if (!previewCol) return;
            (data.projects_list || []).forEach(project => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="${project.link}" data-preview-target="${project.id}">
                        <span class="project-list-title">${project.title}</span>
                        <span class="project-list-description">${project.description}</span>
                    </a>`;
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
                    if(previewCol) {
                        previewCol.querySelectorAll('.project-preview-image.is-active').forEach(activeImg => activeImg.classList.remove('is-active'));
                        const targetImage = getEl(targetId);
                        if (targetImage) targetImage.classList.add('is-active');
                    }
                });
            });

            if (listUl) {
                listUl.addEventListener('mouseleave', () => {
                    if(previewCol) {
                        previewCol.querySelectorAll('.project-preview-image.is-active').forEach(activeImg => activeImg.classList.remove('is-active'));
                    }
                });
            }
        }
    }
}


function populatePokedexPage(lang, basePath) {
    const data = translations[lang].project_pokedex || translations.en.project_pokedex;
    const pageData = translations[lang] || translations.en;
    
    if (getEl('project-title')) getEl('project-title').textContent = data.pageTitle;
    const btnGroup = getEl('project-button-group');
    if (btnGroup) {
      const pageUrl = window.location.href;
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(data.pageTitle)}`;
      
      btnGroup.innerHTML = `
        <a href="${basePath}projects.html" class="button btn-back"><i class="fas fa-arrow-left"></i> ${data.backButton || pageData.navProjects}</a>
        <a href="${linkedinUrl}" class="button btn-linkedin" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> ${data.linkedinButton}</a>
        <a href="${twitterUrl}" class="button btn-x" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> ${data.xButton}</a>
        <a href="${data.lookerStudioUrl}" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
      `;
    }

    const summarySection = getEl('project-executive-summary');
    if (summarySection && data.executiveSummary) {
        summarySection.innerHTML = data.executiveSummary.map(item => `
            <div class="summary-card">
                <i class="${item.icon}"></i>
                <div class="summary-card-text">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `).join('');
    }

    const sidebar = getEl('project-sidebar');
    if (sidebar && data.problemTitle) {
        sidebar.innerHTML = `
            <div class="sidebar-section">
                <h3><i class="fas fa-lightbulb"></i> ${data.problemTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.problemText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-tasks"></i> ${data.objectiveTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.objectiveText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-user-tie"></i> ${data.roleTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.roleText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-cogs"></i> ${data.datasetTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>
                    <strong>${data.datasetSource}</strong> <a href="${data.datasetSourceLink}" target="_blank" rel="noopener">${data.datasetSourceText}</a><br>
                    <strong>${data.datasetScope}</strong> ${data.datasetScopeValue}
                </p></div>
            </div>
        `;
        setTimeout(() => setupAccordion('#project-sidebar', '.sidebar-section h3'), 0);
    }
  
    const dashboardContent = getEl('project-dashboard-content');
    if(dashboardContent){
        const iframeHtml = data.iframeEmbed;
        const titleEl = dashboardContent.querySelector('#dashboard-title');
        const subtitleEl = dashboardContent.querySelector('#dashboard-subtitle');
        const embedEl = dashboardContent.querySelector('#dashboard-embed-container');
        if (titleEl) titleEl.textContent = data.dashboardTitle;
        if (subtitleEl) subtitleEl.innerHTML = data.dashboardSubtitle;
        if (embedEl) embedEl.innerHTML = iframeHtml;
    }
}

function populateUnemploymentPage(lang, basePath) {
    const data = translations[lang].project_unemployment || translations.en.project_unemployment;
    const pageData = translations[lang] || translations.en;
    
    if (getEl('project-title')) getEl('project-title').textContent = data.pageTitle;
    const btnGroup = getEl('project-button-group');
    if (btnGroup) {
      const pageUrl = window.location.href;
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(data.pageTitle)}`;
      
      btnGroup.innerHTML = `
        <a href="${basePath}projects.html" class="button btn-back"><i class="fas fa-arrow-left"></i> ${data.backButton || pageData.navProjects}</a>
        <a href="${linkedinUrl}" class="button btn-linkedin" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> ${data.linkedinButton}</a>
        <a href="${twitterUrl}" class="button btn-x" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> ${data.xButton}</a>
        <a href="${data.lookerStudioUrl}" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
      `;
    }

    const summarySection = getEl('project-executive-summary');
    if (summarySection && data.executiveSummary) {
        summarySection.innerHTML = data.executiveSummary.map(item => `
            <div class="summary-card">
                <i class="${item.icon}"></i>
                <div class="summary-card-text">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `).join('');
    }

    const sidebar = getEl('project-sidebar');
    if (sidebar && data.problemTitle) {
        sidebar.innerHTML = `
            <div class="sidebar-section">
                <h3><i class="fas fa-exclamation-circle"></i> ${data.problemTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.problemText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-bullseye"></i> ${data.objectiveTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.objectiveText}</p></div>
            </div>
             <div class="sidebar-section">
                 <h3><i class="fas fa-question-circle"></i> ${data.questionsTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                 <div class="content"><ul>${data.questionsList.map(q => `<li>${q}</li>`).join('')}</ul></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-user-tie"></i> ${data.roleTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.roleText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-database"></i> ${data.datasetTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>
                    <strong>${data.datasetSource}</strong> <a href="${data.datasetSourceLink}" target="_blank" rel="noopener">${data.datasetSourceText}</a><br>
                    <strong>${data.datasetPeriod}</strong> ${data.datasetPeriodValue}<br>
                    <strong>${data.datasetScope}</strong> ${data.datasetScopeValue}
                </p></div>
            </div>
        `;
        setTimeout(() => setupAccordion('#project-sidebar', '.sidebar-section h3'), 0);
    }
  
    const dashboardContent = getEl('project-dashboard-content');
    if(dashboardContent){
        const iframeHtml = data.iframeEmbed;
        const titleEl = dashboardContent.querySelector('#dashboard-title');
        const subtitleEl = dashboardContent.querySelector('#dashboard-subtitle');
        const embedEl = dashboardContent.querySelector('#dashboard-embed-container');
        if (titleEl) titleEl.textContent = data.dashboardTitle;
        if (subtitleEl) subtitleEl.innerHTML = data.dashboardSubtitle;
        if (embedEl) embedEl.innerHTML = iframeHtml;
    }
}

function populateFinancialInclusionPage(lang, basePath) {
    const data = translations[lang].project_financial_inclusion || translations.en.project_financial_inclusion;
    const pageData = translations[lang] || translations.en;
    
    if (getEl('project-title')) getEl('project-title').textContent = data.pageTitle;
    const btnGroup = getEl('project-button-group');
    if (btnGroup) {
      const pageUrl = window.location.href;
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(data.pageTitle)}`;
      
      btnGroup.innerHTML = `
        <a href="${basePath}projects.html" class="button btn-back"><i class="fas fa-arrow-left"></i> ${data.backButton || pageData.navProjects}</a>
        <a href="${linkedinUrl}" class="button btn-linkedin" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> ${data.linkedinButton}</a>
        <a href="${twitterUrl}" class="button btn-x" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> ${data.xButton}</a>
        <a href="${data.lookerStudioUrl}" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
      `;
    }

    const summarySection = getEl('project-executive-summary');
    if (summarySection && data.executiveSummary) {
        summarySection.innerHTML = data.executiveSummary.map(item => `
            <div class="summary-card">
                <i class="${item.icon}"></i>
                <div class="summary-card-text">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `).join('');
    }

    const sidebar = getEl('project-sidebar');
    if (sidebar && data.problemTitle) {
        sidebar.innerHTML = `
            <div class="sidebar-section">
                <h3><i class="fas fa-exclamation-circle"></i> ${data.problemTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.problemText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-bullseye"></i> ${data.objectiveTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.objectiveText}</p></div>
            </div>
             <div class="sidebar-section">
                 <h3><i class="fas fa-question-circle"></i> ${data.questionsTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                 <div class="content"><ul>${data.questionsList.map(q => `<li>${q}</li>`).join('')}</ul></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-user-tie"></i> ${data.roleTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.roleText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-database"></i> ${data.datasetTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>
                    <strong>${data.datasetSource}</strong> <a href="${data.datasetSourceLink}" target="_blank" rel="noopener">${data.datasetSourceText}</a><br>
                    <strong>${data.datasetPeriod}</strong> ${data.datasetPeriodValue}<br>
                    <strong>${data.datasetScope}</strong> ${data.datasetScopeValue}
                </p></div>
            </div>
        `;
        setTimeout(() => setupAccordion('#project-sidebar', '.sidebar-section h3'), 0);
    }
  
    const dashboardContent = getEl('project-dashboard-content');
    if(dashboardContent){
        const iframeHtml = data.iframeEmbed;
        const titleEl = dashboardContent.querySelector('#dashboard-title');
        const subtitleEl = dashboardContent.querySelector('#dashboard-subtitle');
        const embedEl = dashboardContent.querySelector('#dashboard-embed-container');
        if (titleEl) titleEl.textContent = data.dashboardTitle;
        if (subtitleEl) subtitleEl.innerHTML = data.dashboardSubtitle;
        if (embedEl) embedEl.innerHTML = iframeHtml;
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
  } else if (document.body.classList.contains('page-cv')) {
    populateCvPage(lang, basePath);
  } else if (document.body.classList.contains('page-projects')) {
    populateProjectsPage(lang, basePath);
  } else if (document.body.classList.contains('page-project-case-study')) {
    const bodyId = document.body.id;
    
    if (bodyId === 'page-pokedex') {
        populatePokedexPage(lang, basePath);
    } else if (bodyId === 'page-unemployment') {
        populateUnemploymentPage(lang, basePath);
    } else if (bodyId === 'page-financial-inclusion') {
        populateFinancialInclusionPage(lang, basePath);
    }
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
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang, basePath);
  localStorage.setItem('preferredLanguage', newLang);
}

document.addEventListener("DOMContentLoaded", () => {
  basePath = '';
  const path = window.location.pathname;
  
  if (path.endsWith('/') || path.endsWith('index.html') || path.length <= 1) {
    document.body.classList.add('page-home');
  } else if (path.includes('cv.html')) {
    document.body.classList.add('page-cv');
  } else if (path.includes('projects.html')) {
    document.body.classList.add('page-projects');
  } else if (path.includes('/projects/')) {
    document.body.classList.add('page-project-case-study');
    basePath = '../';
  }

  // --- 1. EJECUCIÓN DE LÓGICA GLOBAL ---
  setupGlobalInteractions();

  // --- 2. GESTIÓN DE IDIOMA ---
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(preferredLanguage, basePath);
  document.querySelectorAll('.lang-toggle').forEach(el => el.addEventListener('click', toggleLang));

  // --- 3. EJECUCIÓN DE LÓGICA ESPECÍFICA DE LA PÁGINA ---
  if (document.body.classList.contains('page-home')) {
    setupHomePageCarousel();
  }
  // No es necesario llamar a setupAccordion aquí porque ahora
  // las funciones 'populate' se encargan de su propia inicialización.
  // Esto soluciona el bug de la doble inicialización.
});
