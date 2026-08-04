const translations = {
  en: {
    // --- Navigation ---
    navAbout: "About",
    navResume: "CV / Resume",
    navProjects: "Projects",
    navPublications: "Publications",

    // --- Publications Page Content ---
    publications_page_title: "Publications",
    publications_list: [
      {
        title: "From Seoul to Santiago: What Chile Can Learn from South Korea's Demographic Crisis (Spanish)",
        description: "An analysis of South Korea's demographic challenges and the potential lessons for Chile's public policy.",
        outlet: "CIPER Chile",
        date: "September 29, 2025",
        outletLogoUrl: "assets/img/logos/ciper-logo.webp",
        externalUrl: "https://www.ciperchile.cl/2025/09/29/de-seul-a-santiago-lo-que-chile-puede-aprender-de-la-crisis-demografica-de-corea-del-sur"
      }
    ],

    // --- Hero KPI & Filters ---
    kpiDashboards: "Live Dashboards",
    kpiReports: "Executive Reports",
    kpiAutomation: "Process & QA Efficiency",
    filterAll: "All Projects",
    filterPowerBI: "Power BI",
    filterLooker: "Looker Studio",

    // --- Section Tag Pills & Buttons ---
    tagIntroduce: "LET ME INTRODUCE MYSELF",
    tagImpact: "WHAT I DO FOR YOU",
    tagWork: "SELECTED WORK",
    btnContact: "Contact Me",
    btnDownloadCV: "Download CV",

    // --- Index Page Content ---
    heroTitle: "Business Analyst & Product Owner focused on bridging strategy, data, and technology",
    heroSubtitle: "Transforming business needs into scalable products through Agile triads, process modeling (BPMN 2.0), SQL analytics, and Generative AI.",
    btnProjects: "View Projects",
    btnResume: "View Resume",
    aboutTitle: "About Me",
    aboutContent: `<p>I'm <strong>Benjamín Espinoza</strong>, an Industrial Civil Engineer serving in a dual role as <strong>Business Analyst (BA) and Product Owner (PO)</strong> at Banco Internacional. I specialize in bridging business vision with technology development, structuring product initiatives within Agile triads (Jira/Confluence), modeling processes using <strong>BPMN 2.0</strong> standards, and driving productivity through Generative AI.</p><p>My experience spans financial services, retail, and industrial sectors. At Banco Internacional, I lead the public website redesign team using <strong>Puck CMS</strong> and web analytics (GA4, GTM, Clarity), craft user stories, manage MVP Canvases and User Story Maps, conduct functional QA testing, and build data analytics querying <strong>PostgreSQL</strong> in SQL alongside <strong>Looker Studio</strong> and Power BI dashboards.</p><p>Early adopter of AI tools like <strong>Gemini, NotebookLM, and Rovo AI</strong> to streamline business analysis and documentation. A father, lifelong learner, passionate about music and continuous improvement.</p>`,
    impactTitle: "How I’ve Made an Impact",
    impacts: [{
      icon: "fa-users-gear",
      title: "Agile Triad Execution & UX Delivery",
      text: "Facilitated business-tech alignment in Agile triads (PO, Tech Lead, BA), crafting MVP Canvases, User Story Maps, and functional QA certifications."
    }, {
      icon: "fa-globe",
      title: "Public Website Redesign & Web Analytics",
      text: "Led the public website redesign team at Banco Internacional with hands-on Puck CMS administration and full GA4, GTM, and Clarity analytics monitoring."
    }, {
      icon: "fa-project-diagram",
      title: "Process Optimization (BPMN 2.0 & AI)",
      text: "Mapped business processes using BPMN 2.0 and accelerated flow diagramming and documentation with Rovo AI, Gemini, and NotebookLM."
    }, {
      icon: "fa-chart-pie",
      title: "Data Analytics & SQL Dashboards",
      text: "Extracted insights from PostgreSQL databases with SQL and created Looker Studio / Power BI dashboards for executive decision-making."
    }],
    projectsTitle: "Featured Projects",
    projects: [
        { title: "Exchange Rate Evolution", description: "A Power BI dashboard that tracks major currencies against the CLP, updated automatically via the Central Bank API.", imageUrl: "assets/img/exchange-rate-cover.webp", link: "projects/exchange-rate-evolution.html", buttonText: "View Project", tool: "powerbi" },
        { title: "Interactive Pokédex", description: "A National Pokédex of 1,025 Pokémon built by connecting to the PokéAPI with Apps Script.", imageUrl: "assets/img/pokedex-cover.webp", link: "projects/pokedex-dashboard.html", buttonText: "View Project", tool: "looker" },
        { title: "US Unemployment Analysis", description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.", imageUrl: "assets/img/us-unemployment-cover.webp", link: "projects/US-Unemployment.html", buttonText: "View Project", tool: "looker" },
        { title: "Global Financial Inclusion", description: "Visualize global trends in account ownership and borrowing behavior by region, income group, and demographics.", imageUrl: "assets/img/global-financial-inclusion-cover.webp", link: "projects/global-financial-inclusion.html", buttonText: "View Project", tool: "looker" },
        { title: "NEO Tracker", description: "An automated dashboard connecting to the NASA API to track Near-Earth Objects from the last 7 days.", imageUrl: "assets/img/neo-tracker-cover.webp", link: "projects/neo-tracker.html", buttonText: "View Project", tool: "powerbi" }
    ],
    viewAllBtn: "View All Projects",

    // --- CV Page Content ---
    cv_hero_title: "My Professional Journey",
    cv_hero_summary: "A journey through the projects and roles that have defined my career in product, business analysis, and data.",
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
      title: "Business Analyst & Product Owner",
      company: "Banco Internacional",
      url: "https://www.internacional.cl",
      logo: "assets/img/logos/banco-internacional.webp",
      description: `<ul>
  <li><strong>Business Analyst in Agile Triads</strong>: Defined MVP Canvases, User Story Mapping, wrote user stories in Jira, and structured technical/functional documentation in Confluence within Agile triads (Product Owner, Tech Lead, BA + Developers).</li>
  <li><strong>Functional QA & Production Rollouts</strong>: Conducted functional testing in QA staging environments to certify software builds, collaborated with UX designers for Figma wireframing, and performed smoke testing for production deployments.</li>
  <li><strong>Dual Role (BA & PO) for Public Website Redesign</strong>: Led the cross-functional team in charge of redesigning the bank’s public website. Directly managed page creation and production publishing using Puck CMS, AI-assisted UX mockups (Firebase), and web analytics setup (GA4, GTM, Microsoft Clarity).</li>
  <li><strong>Process Modeling (BPMN 2.0)</strong>: Surveyed and mapped business workflows and operating models adhering strictly to BPMN 2.0 standards.</li>
  <li><strong>Data Analytics & SQL (PostgreSQL & Looker Studio)</strong>: Measured product adoption and performance by writing complex SQL queries in PostgreSQL and crafting executive dashboards in Looker Studio.</li>
  <li><strong>GenAI Productivity Integration</strong>: Leveraged Gemini and NotebookLM daily for rapid user story creation and task automation, alongside Rovo AI (Jira/Confluence) for AI-assisted flow diagramming.</li>
  <li><strong>Analytics & Metrics Legacy (2+ Years)</strong>: Established the initial reporting framework and key performance indicators from scratch across Innovation, Fraud, Sales, and Product teams before transitioning to the digital product triad.</li>
</ul>`
    }, {
      type: 'work',
      date: "Sep 2021 – Apr 2023",
      title: "Data & Business Control Analyst",
      company: "Lucas Diesel",
      url: "https://lucasdiesel.cl",
      logo: "assets/img/logos/lucas-diesel.webp",
      description: `<ul>
  <li><strong>Data Analytics Department Creation</strong>: Partnered directly with the Operations Manager to build the analytics function from scratch in a shared corporate structure, establishing baseline KPI frameworks for Sales, Procurement, Logistics, Warehouse, Foreign Trade, Technical Service, and General Management.</li>
  <li><strong>30-40+ Power BI Dashboards</strong>: Designed, modeled, and deployed 30 to 40+ daily-updating Power BI dashboards across all business departments and executive levels.</li>
  <li><strong>Daily Sales Report Automation</strong>: Automated the daily first-thing-in-the-morning sales and target compliance report by branch, slashing manual prep time from 1 hour down to 10-15 minutes (with direct Power BI access).</li>
  <li><strong>Annual Budgeting Leadership (3 Years)</strong>: Streamlined the company-wide annual budgeting cycle from 6 months down to 3 months, and ultimately to 2 months in subsequent years, collaborating directly with unit heads (Sales, Service, Filtration, DT Parts).</li>
  <li><strong>Stakeholder Engagement & Iterative Delivery</strong>: Conducted daily requirement gathering with stakeholders across all organizational tiers (from warehouse leads and workshop managers to the CEO and Board), iteratively crafting custom Power BI and SQL analytical solutions.</li>
</ul>`
    }, {
      type: 'work',
      date: "Nov 2019 – Aug 2021",
      title: "Financial Performance Analyst",
      company: "Heavenward Ascensores",
      url: "https://www.heavenward.cl",
      logo: "assets/img/logos/heavenward.webp",
      description: `<ul>
  <li><strong>Performance Control & KPI Tracking</strong>: Managed operating cost controls and key performance metrics (KPIs) for elevator maintenance and modernization contracts.</li>
  <li><strong>Financial Modeling & BI Reporting</strong>: Built financial cost models and dashboards in Excel and Power BI to support executive and managerial decision-making.</li>
  <li><strong>Service Delivery Optimization</strong>: Analyzed customer service data alongside technical and commercial teams to improve response times and customer satisfaction.</li>
</ul>`
    }, {
      type: 'education',
      date: "2025",
      title: "International Diploma in Digital Transformation",
      company: "Digital Bank LATAM",
      url: "https://www.digitalbankla.com",
      logo: "assets/img/logos/digital-bank-latam.webp"
    }, {
      type: 'education',
      date: "2022",
      title: "Diploma in Web Design & Programming",
      company: "Fundación Telefónica & AIEP",
      url: "https://www.fundaciontelefonica.cl",
      logo: "assets/img/logos/telefonica-aiep.webp"
    }, {
      type: 'education',
      date: "2022",
      title: "University Preparation Program",
      company: "BYU PathwayConnect",
      url: "https://www.byupathway.edu",
      logo: "assets/img/logos/byu.webp"
    }, {
      type: 'education',
      date: "2013–2020",
      title: "Industrial Civil Engineering",
      company: "Universidad de Valparaíso",
      url: "https://uv.cl",
      logo: "assets/img/logos/uv.webp"
    }],
    cv_skills_items: {
      tier1: [{
        name: "Power BI",
        logo: "assets/img/logos/power-bi.webp"
      }, {
        name: "Looker Studio",
        logo: "assets/img/logos/looker-studio.webp"
      }, {
        name: "Tableau",
        logo: "assets/img/logos/tableau.webp"
      }],
      tier2: [
        "User Story Mapping & MVP Canvas",
        "Process Modeling (BPMN 2.0)",
        "Product Owner & BA Dual Role",
        "Functional QA Testing",
        "Business Intelligence & KPIs"
      ],
      tier3: [
        "PostgreSQL & SQL Queries",
        "Jira & Confluence (Rovo AI)",
        "Gemini & NotebookLM (GenAI)",
        "Puck CMS & Web Publishing",
        "Web Analytics (GA4 / GTM / Clarity)",
        "Figma & UX Collaboration",
        "Power Query & DAX"
      ],
      tier4: [
        "Agile Triads & Scrum",
        "Advanced Excel & Google Sheets",
        "Lucidchart & Draw.io",
        "Dashboard Design",
        "Stakeholder Engagement",
        "Functional Documentation"
      ]
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
        { id: "project-exchange-rate", title: "Exchange Rate Evolution", description: "Real-time tracking of USD, EUR, and GBP against the Chilean Peso.", link: "projects/exchange-rate-evolution.html", imageUrl: "assets/img/exchange-rate-cover.webp", buttonText: "View Project", tool: "powerbi" },
        { id: "project-pokedex", title: "Interactive Pokédex", description: "An interactive dashboard with data from over 1,000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.webp", buttonText: "View Project", tool: "looker" },
        { id: "project-unemployment", title: "Unemployment in America", description: "Analysis of unemployment trends across U.S. states and metro areas.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.webp", buttonText: "View Project", tool: "looker" },
        { id: "project-financial-inclusion", title: "Global Financial Inclusion", description: "Visualizing global trends in account ownership and borrowing behaviors.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.webp", buttonText: "View Project", tool: "looker" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "Tracking Near-Earth Objects with NASA's API.", link: "projects/neo-tracker.webp", imageUrl: "assets/img/neo-tracker-cover.webp", buttonText: "View Project", tool: "powerbi" }
    ],

    // --- CASE STUDY DATA ---
    project_exchange_rate: {
      pageTitle: "Exchange Rate Evolution – Live Power BI Dashboard",
      iframeEmbed: `<iframe title="Exchange rate evolution" width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiNmQ0NjMzOTItMTFmZi00YzAyLWE5MTctMDMzYTFiZjQ2MDdiIiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" frameborder="0" allowFullScreen="true" loading="lazy"></iframe>`,
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      lookerButton: "View on Power BI",
      executiveSummary: [
        {
          icon: "fas fa-cogs",
          title: "API Automation",
          text: "Connects directly to the Central Bank of Chile's API to ensure data is always current, eliminating manual updates."
        },
        {
          icon: "fas fa-sync-alt",
          title: "Real-Time Indicators",
          text: "Provides up-to-the-minute exchange rates for USD, EUR, and GBP, including daily fluctuation and recent trends."
        },
        {
          icon: "fas fa-chart-line",
          title: "30-Day Trend Analysis",
          text: "Visualizes the performance of each currency against the Chilean Peso over the last 30 days for easy strategic comparison."
        }
      ],
      problemTitle: "The Challenge of Volatility",
      problemText: "Tracking foreign exchange rates in a volatile market requires constant monitoring. Businesses and individuals need a reliable, up-to-date, and easy-to-understand tool to make informed financial decisions without relying on static reports or manual data gathering.",
      objectiveTitle: "Dashboard Objective",
      objectiveText: "To create a self-updating, centralized dashboard that offers a clear and immediate overview of the value and recent evolution of the most relevant currencies (USD, EUR, GBP) against the Chilean Peso, using Power BI and a direct API connection.",
      datasetTitle: "Technology & Data",
      datasetSource: "Data Source:",
      datasetSourceText: "Central Bank of Chile API",
      datasetSourceLink: "https://si3.bcentral.cl/siete",
      datasetScope: "Tools:",
      datasetScopeValue: "Power BI, Power Query (M), DAX.",
      roleTitle: "My Role",
      roleText: "As the sole developer, I designed the entire solution: from establishing the API connection and transforming the data with Power Query to modeling it and creating the final interactive visualizations in Power BI.",
      dashboardTitle: "Live Exchange Rate Dashboard",
      dashboardSubtitle: `This report is automatically updated. Explore the 30-day trends and current values for each currency. You can view it in full screen <a href="https://app.powerbi.com/view?r=eyJrIjoiNmQ0NjMzOTItMTFmZi00YzAyLWE5MTctMDMzYTFiZjQ2MDdiIiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" target="_blank" rel="noopener" class="subtitle-link">here</a>.`
    },
    project_pokedex: {
      pageTitle: "Interactive Pokédex Dashboard – Powered by Looker Studio",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF",
      iframeEmbed: `<iframe width="100%" height="920" src="https://lookerstudio.google.com/embed/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" frameborder="0" style="border:0; width:100%; height:920px;" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
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
    },
    project_neo_tracker: {
      pageTitle: "NEO Tracker – Weekly Data Overview",
      lookerButton: "View on Power BI",
      iframeEmbed: `<iframe title="NEO Tracker – Weekly Data Overview" width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiN2FjMjk0N2YtMjFlYi00Nzc3LWIzZGMtZDM1ZmIzZDgxOGE3IiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" frameborder="0" allowFullScreen="true" loading="lazy"></iframe>`,
      backButton: "Back to Projects",
      linkedinButton: "Share on LinkedIn",
      xButton: "Share on X",
      executiveSummary: [
        { icon: "fas fa-satellite-dish", title: "Weekly Object Tracking", text: "Quantifies and displays all Near-Earth Objects detected by NASA in the last 7 days, providing a current snapshot of space activity." },
        { icon: "fas fa-exclamation-triangle", title: "Real-Time Risk Classification", text: "Automatically categorizes each object based on its potential hazard level, allowing for quick identification of noteworthy threats." },
        { icon: "fas fa-meteor", title: "Key Metric Identification", text: "Highlights critical data points such as the size, velocity, and miss distance of the largest and fastest approaching objects." }
      ],
      problemTitle: "Making Space Data Accessible",
      problemText: "The vastness of space contains countless objects, some of which pass near Earth. This project aimed to create a dynamic, self-updating dashboard to provide a clear, weekly overview of Near-Earth Object (NEO) activity, making complex astronomical data accessible and easy to understand for a general audience.",
      objectiveTitle: "Dashboard Objective",
      objectiveText: "To build a Power BI report that automatically connects to the NASA API, processes the last 7 days of NEO data, and visualizes key metrics such as object count, size, speed, proximity, and potential risk.",
      roleTitle: "My Role",
      roleText: "I was responsible for the entire project lifecycle. This included connecting to the NASA NeoWs API, transforming the JSON data using Power Query, developing calculations with DAX, and designing the final interactive dashboard in Power BI.",
      datasetTitle: "Technology & Data",
      datasetSource: "Data Source:",
      datasetSourceText: "NASA NeoWs API",
      datasetSourceLink: "https://api.nasa.gov",
      datasetScope: "Tools:",
      datasetScopeValue: "Power BI, Power Query (M), DAX.",
      dashboardTitle: "Interactive NEO Dashboard",
      dashboardSubtitle: `This report updates automatically. Explore the data from the last 7 days. You can see it in full screen <a href="https://app.powerbi.com/view?r=eyJrIjoiN2FjMjk0N2YtMjFlYi00Nzc3LWIzZGMtZDM1ZmIzZDgxOGE3IiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" target="_blank" rel="noopener" class="subtitle-link">here</a>.`
    }
  },
  es: {
    // --- Navigation ---
    navAbout: "Sobre mí",
    navResume: "CV",
    navProjects: "Proyectos",
    navPublications: "Publicaciones",

    // --- Publications Page Content ---
    publications_page_title: "Publicaciones",
    publications_list: [
      {
        title: "De Seúl a Santiago: lo que Chile puede aprender de la crisis demográfica de Corea del Sur",
        description: "Un análisis sobre los desafíos demográficos de Corea del Sur y las posibles lecciones para las políticas públicas de Chile.",
        outlet: "CIPER Chile",
        date: "29 de septiembre de 2025",
        outletLogoUrl: "assets/img/logos/ciper-logo.webp",
        externalUrl: "https://www.ciperchile.cl/2025/09/29/de-seul-a-santiago-lo-que-chile-puede-aprender-de-la-crisis-demografica-de-corea-del-sur"
      }
    ],

    // --- Hero KPI & Filters ---
    kpiDashboards: "Dashboards en Vivo",
    kpiReports: "Reportes Ejecutivos",
    kpiAutomation: "Eficiencia en Procesos y QA",
    filterAll: "Todos los Proyectos",
    filterPowerBI: "Power BI",
    filterLooker: "Looker Studio",

    // --- Section Tag Pills & Buttons ---
    tagIntroduce: "PERMÍTEME PRESENTARME",
    tagImpact: "GENERACIÓN DE VALOR E IMPACTO",
    tagWork: "PROYECTOS DESTACADOS",
    btnContact: "Contáctame",
    btnDownloadCV: "Descargar CV",

    // --- Index Page Content ---
    heroTitle: "Business Analyst & Product Owner enfocado en conectar estrategia, datos y tecnología",
    heroSubtitle: "Transformo necesidades de negocio en productos escalables mediante triadas ágiles, modelamiento BPMN 2.0, analítica SQL y IA Generativa.",
    btnProjects: "Ver Proyectos",
    btnResume: "Ver CV",
    aboutTitle: "Sobre mí",
    aboutContent: `<p>Soy <strong>Benjamín Espinoza</strong>, Ingeniero Civil Industrial desempeñándome en el rol dual de <strong>Business Analyst (BA) y Product Owner (PO)</strong> en Banco Internacional. Me especializo en conectar la visión estratégica de negocio con el desarrollo tecnológico, estructurar iniciativas en triadas ágiles (Jira/Confluence), modelar procesos bajo estándar <strong>BPMN 2.0</strong> y potenciar la productividad con Inteligencia Artificial Generativa.</p><p>Mi trayectoria abarca el sector financiero, retail e industrial. En Banco Internacional lidero el equipo del rediseño del sitio web público con administración en <strong>Puck CMS</strong> y analítica digital (GA4, GTM, Clarity), redacto historias de usuario, gestiono el MVP Canvas y User Story Maps, ejecuto pruebas funcionales (QA) y desarrollo analítica de datos ejecutando consultas SQL en <strong>PostgreSQL</strong> y dashboards en <strong>Looker Studio</strong> y Power BI.</p><p>Pionero en la adopción diaria de herramientas de IA como <strong>Gemini, NotebookLM y Rovo AI</strong> para automatizar flujos y optimizar la gestión de requerimientos. Padre, aprendiz constante, apasionado de la música y la mejora continua.</p>`,
    impactTitle: "Cómo He Generado Impacto",
    impacts: [{
      icon: "fa-users-gear",
      title: "Triadas Ágiles & Entregables de Producto",
      text: "Facilité la alineación negocio-tecnología en triadas ágiles (PO, Tech Lead, BA), creando MVP Canvas, User Story Maps y certificaciones de QA funcional."
    }, {
      icon: "fa-globe",
      title: "Rediseño de Sitio Público & Analítica Web",
      text: "Lideré el equipo del rediseño del sitio web público de Banco Internacional con administración en Puck CMS y monitoreo de GA4, GTM y Microsoft Clarity."
    }, {
      icon: "fa-project-diagram",
      title: "Optimización de Procesos (BPMN 2.0 & IA)",
      text: "Modelé flujos operacionales con BPMN 2.0 e impulsé la diagramación y documentación asistida por IA usando Rovo AI, Gemini y NotebookLM."
    }, {
      icon: "fa-chart-pie",
      title: "Analítica de Datos & Consultas SQL",
      text: "Extraje insights ejecutando consultas SQL complejas en PostgreSQL y construyendo tableros en Looker Studio y Power BI para la toma de decisiones."
    }],
    projectsTitle: "Proyectos Destacados",
    projects: [
        { title: "Evolución del Tipo de Cambio", description: "Un dashboard en Power BI que monitorea las principales divisas frente al CLP, actualizado automáticamente vía API del Banco Central.", imageUrl: "assets/img/exchange-rate-cover.webp", link: "projects/exchange-rate-evolution.html", buttonText: "Ver Proyecto", tool: "powerbi" },
        { title: "Pokédex Interactiva", description: "Una Pokédex Nacional de 1,025 Pokémon construida conectándose a la PokéAPI con Apps Script.", imageUrl: "assets/img/pokedex-cover.webp", link: "projects/pokedex-dashboard.html", buttonText: "Ver Proyecto", tool: "looker" },
        { title: "Análisis de Desempleo en EE.UU.", description: "Explora tendencias de desempleo en EE.UU. a nivel estatal y metropolitano mediante dashboards interactivos.", imageUrl: "assets/img/us-unemployment-cover.webp", link: "projects/US-Unemployment.html", buttonText: "Ver Proyecto", tool: "looker" },
        { title: "Inclusión Financiera Global", description: "Visualiza tendencias globales de titularidad de cuentas y comportamiento de crédito por región, ingreso y demografía.", imageUrl: "assets/img/global-financial-inclusion-cover.webp", link: "projects/global-financial-inclusion.html", buttonText: "Ver Proyecto", tool: "looker" },
        { title: "NEO Tracker", description: "Un dashboard automatizado que se conecta a la API de la NASA para rastrear Objetos Cercanos a la Tierra de los últimos 7 días.", imageUrl: "assets/img/neo-tracker-cover.webp", link: "projects/neo-tracker.html", buttonText: "Ver Proyecto", tool: "powerbi" }
    ],
    viewAllBtn: "Ver Todos los Proyectos",
    
    // --- CV Page Content (Spanish) ---
    cv_hero_title: "Mi Trayectoria Profesional",
    cv_hero_summary: "Un viaje a través de los proyectos y roles que han definido mi carrera en producto, análisis de negocio y datos.",
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
        { type: 'work', date: "Mayo 2023 – Actualidad", title: "Business Analyst & Product Owner", company: "Banco Internacional", url: "https://www.internacional.cl", logo: "assets/img/logos/banco-internacional.webp", description: `<ul>
  <li><strong>Business Analyst en Triadas Ágiles</strong>: Definición de MVP Canvas, User Story Mapping, redacción de historias de usuario en Jira y documentación técnica/funcional en Confluence para triadas compuestas por Product Owner, Technical Lead y desarrolladores.</li>
  <li><strong>Pruebas Funcionales y Calidad (QA)</strong>: Certificación de desarrollos en ambientes previos (QA), interacción constante con equipos UX para maquetación en Figma y ejecución de pruebas de aceptación en ambientes productivos.</li>
  <li><strong>Doble Rol (BA & PO) en Rediseño Web Público</strong>: Liderazgo del equipo responsable del rediseño del sitio web público del banco, administrando directamente la herramienta Puck CMS para la creación y publicación de páginas en producción, maquetación apoyada en IA (Firebase) y monitoreo de analítica digital (GA4, GTM y Microsoft Clarity).</li>
  <li><strong>Diagramación de Procesos (BPMN 2.0)</strong>: Levantamiento y modelamiento formal de flujos de negocio optimizados bajo estándar BPMN 2.0.</li>
  <li><strong>Métricas y Consultas SQL (PostgreSQL & Looker Studio)</strong>: Medición de uso e impacto de productos digitales ejecutando consultas SQL sobre PostgreSQL y construyendo tableros de control en Looker Studio.</li>
  <li><strong>Productividad impulsada por IA Generativa</strong>: Adopción diaria de Gemini y NotebookLM para agilizar la generación de historias de usuario y tareas repetitivas, y uso de Rovo AI en Jira/Confluence para la diagramación asistida de procesos.</li>
  <li><strong>Trayectoria en Métricas (2+ años)</strong>: Inicio como pilar único en la estructuración e implementación de tableros de gestión y KPIs para la gerencia de innovación y diversas áreas estratégicas, escalando la práctica analítica antes de integrarse al equipo de producto.</li>
</ul>` },
        { type: 'work', date: "Sep 2021 – Abr 2023", title: "Analista de Datos y Control de Gestión", company: "Lucas Diesel", url: "https://lucasdiesel.cl", logo: "assets/img/logos/lucas-diesel.webp", description: `<ul>
  <li><strong>Creación del Área de Analítica de Datos</strong>: Trabajé directamente con la Gerencia de Operaciones para estructurar la analítica en una empresa con administración compartida, definiendo la base de KPIs desde cero para Ventas, Abastecimiento, Logística, Bodega, Comercio Exterior, Servicio Técnico y Gerencia General.</li>
  <li><strong>Desarrollo de 30-40+ Dashboards en Power BI</strong>: Diseñé, modelé y publiqué más de 30 a 40 tableros de control en Power BI con actualización diaria para todas las áreas operativas y gerenciales.</li>
  <li><strong>Automatización del Informe Diario de Ventas</strong>: Automaticé la consolidación del informe matutino de ventas diarias y cumplimiento de metas por sucursal, reduciendo el proceso manual de 1 hora diaria a solo 10-15 minutos (y consulta directa en Power BI).</li>
  <li><strong>Liderazgo del Presupuesto Anual (3 años)</strong>: Reduje el ciclo de formulación presupuestaria de 6 meses a 3 meses y posteriormente a 2 meses en años consecutivos, trabajando directamente con gerentes de área (Ventas, Servicio, Filtración, DT Parts).</li>
  <li><strong>Levantamiento de Requerimientos & Iteración</strong>: Responsable del levantamiento continuo de requerimientos con stakeholders de todos los niveles (jefes de bodega y taller mecánico hasta Gerente General y Directorio), iterando soluciones personalizadas en Power BI y consultas SQL.</li>
</ul>` },
        { type: 'work', date: "Nov 2019 – Ago 2021", title: "Analista de Control de Gestión", company: "Heavenward Ascensores", url: "https://www.heavenward.cl", logo: "assets/img/logos/heavenward.webp", description: `<ul>
  <li><strong>Control de Gestión & Seguimiento de KPIs</strong>: Control de costos operativos e indicadores de rendimiento (KPIs) para proyectos de mantenimiento y modernización de ascensores.</li>
  <li><strong>Modelos Financieros & Reportería BI</strong>: Construcción de modelos financieros y dashboards en Excel y Power BI para soportar la toma de decisiones directivas y gerenciales.</li>
  <li><strong>Optimización de Tiempos de Respuesta</strong>: Análisis de datos de servicio y clientes junto a equipos técnicos y comerciales para mejorar los tiempos de atención y respuesta a clientes.</li>
</ul>` },
        { type: 'education', date: "2025", title: "Diplomado Internacional en Transformación Digital", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com", logo: "assets/img/logos/digital-bank-latam.webp" },
        { type: 'education', date: "2022", title: "Diplomado en Diseño y Programación Web", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl", logo: "assets/img/logos/telefonica-aiep.webp" },
        { type: 'education', date: "2022", title: "Programa universitario introductorio", company: "BYU PathwayConnect", url: "https://www.byupathway.edu", logo: "assets/img/logos/byu.webp" },
        { type: 'education', date: "2013–2020", title: "Ingeniería Civil Industrial", company: "Universidad de Valparaíso", url: "https://uv.cl", logo: "assets/img/logos/uv.webp" }
    ],
    cv_skills_items: {
        tier1: [ { name: "Power BI", logo: "assets/img/logos/power-bi.webp" }, { name: "Looker Studio", logo: "assets/img/logos/looker-studio.webp" }, { name: "Tableau", logo: "assets/img/logos/tableau.webp" } ], 
        tier2: [
          "User Story Mapping & MVP Canvas",
          "Modelado de Procesos (BPMN 2.0)",
          "Rol Dual Product Owner & BA",
          "Pruebas Funcionales (QA)",
          "Inteligencia de Negocios & KPIs"
        ],
        tier3: [
          "PostgreSQL & Consultas SQL",
          "Jira & Confluence (Rovo AI)",
          "Gemini & NotebookLM (GenAI)",
          "Puck CMS & Publicación Web",
          "Analítica Web (GA4 / GTM / Clarity)",
          "Figma & Colaboración UX",
          "Power Query & DAX"
        ],
        tier4: [
          "Triadas Ágiles & Scrum",
          "Excel Avanzado & Google Sheets",
          "Lucidchart & Draw.io",
          "Diseño de Dashboards",
          "Gestión de Stakeholders",
          "Documentación Funcional"
        ]
    },
    cv_languages_items: [ { lang: "Español", level: "Nativo", flag: "es" }, { lang: "Inglés", level: "B2 Intermedio-Alto", flag: "gb" }, { lang: "Francés", level: "A1 Básico", flag: "fr" } ],
    cv_interests_items: [ { name: "Correr", icon: "fa-solid fa-person-running" }, { name: "Fútbol", icon: "fa-solid fa-futbol" }, { name: "Videojuegos", icon: "fa-solid fa-gamepad" }, { name: "Tenis", icon: "fa-solid fa-baseball" }, { name: "Guitarra", icon: "fa-solid fa-guitar" }, { name: "Dibujo", icon: "fa-solid fa-pencil-alt" }, { name: "Festivales", icon: "fa-solid fa-music" } ],
    cv_certifications_items: [ { name: "Qlik Sense Diseñador", url: "assets/certificates/Certificacion Qlik.pdf" }, { name: "Google Tag Manager (Básico)", url: "assets/certificates/Conceptos básicos de Google Tag Manager.pdf" }, { name: "Inglés B2 – Linguaskill", url: "assets/certificates/Linguaskill Cambridge.pdf" }, { name: "Certificación SQL", url: "assets/certificates/SQL.pdf" }, { name: "Certificación SSIS", url: "assets/certificates/SSIS.pdf" }, { name: "Tableau & Tableau Prep", url: "assets/certificates/Tableau.pdf" }, { name: "User Stories Certificate", url: "assets/certificates/User Stories Certiprof.pdf" } ],

    // --- Projects Page Content (Spanish) ---
    projects_page_title: "Proyectos",
    projects_list: [
        { id: "project-exchange-rate", title: "Evolución del Tipo de Cambio", description: "Seguimiento en tiempo real del USD, EUR y GBP frente al peso chileno.", link: "projects/exchange-rate-evolution.html", imageUrl: "assets/img/exchange-rate-cover.webp", buttonText: "Ver Proyecto", tool: "powerbi" },
        { id: "project-pokedex", title: "Pokédex Interactiva", description: "Un dashboard interactivo con datos de más de 1.000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.webp", buttonText: "Ver Proyecto", tool: "looker" },
        { id: "project-unemployment", title: "Desempleo en América", description: "Análisis de tendencias de desempleo en estados y áreas metropolitanas de EE.UU.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.webp", buttonText: "Ver Proyecto", tool: "looker" },
        { id: "project-financial-inclusion", title: "Inclusión Financiera Global", description: "Visualización de tendencias globales en posesión de cuentas y comportamientos de crédito.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.webp", buttonText: "Ver Proyecto", tool: "looker" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "Seguimiento de Objetos Cercanos a la Tierra con la API de la NASA.", link: "projects/neo-tracker.html", imageUrl: "assets/img/neo-tracker-cover.webp", buttonText: "Ver Proyecto", tool: "powerbi" }
    ],

    // --- CASE STUDY DATA ---
    project_exchange_rate: {
      pageTitle: "Evolución del Tipo de Cambio – Dashboard en Power BI",
      iframeEmbed: `<iframe title="Exchange rate evolution" width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiNmQ0NjMzOTItMTFmZi00YzAyLWE5MTctMDMzYTFiZjQ2MDdiIiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" frameborder="0" allowFullScreen="true" loading="lazy"></iframe>`,
      backButton: "Volver a Proyectos",
      linkedinButton: "Compartir en LinkedIn",
      xButton: "Compartir en X",
      lookerButton: "Ver en Power BI",
      executiveSummary: [
        {
          icon: "fas fa-cogs",
          title: "Automatización con API",
          text: "Se conecta directamente a la API del Banco Central de Chile para asegurar que los datos estén siempre actualizados, eliminando la carga manual."
        },
        {
          icon: "fas fa-sync-alt",
          title: "Indicadores en Tiempo Real",
          text: "Proporciona el valor del dólar, euro y libra al día, incluyendo la fluctuación diaria y tendencias recientes para un análisis rápido."
        },
        {
          icon: "fas fa-chart-line",
          title: "Análisis de Tendencia (30 Días)",
          text: "Visualiza el comportamiento de cada divisa frente al peso chileno durante los últimos 30 días para una fácil comparación estratégica."
        }
      ],
      problemTitle: "El Desafío de la Volatilidad",
      problemText: "Monitorear el tipo de cambio en un mercado volátil exige una vigilancia constante. Empresas y personas necesitan una herramienta confiable, actualizada y simple para tomar decisiones financieras informadas sin depender de reportes estáticos.",
      objectiveTitle: "Objetivo del Dashboard",
      objectiveText: "Crear un dashboard auto-actualizable y centralizado que ofrezca una visión clara e inmediata del valor y la evolución reciente de las divisas más relevantes (USD, EUR, GBP) frente al peso chileno, utilizando Power BI y una conexión directa vía API.",
      datasetTitle: "Tecnología y Datos",
      datasetSource: "Fuente de Datos:",
      datasetSourceText: "API del Banco Central de Chile",
      datasetSourceLink: "https://si3.bcentral.cl/siete",
      datasetScope: "Herramientas:",
      datasetScopeValue: "Power BI, Power Query (M), DAX.",
      roleTitle: "Mi Rol",
      roleText: "Como único desarrollador, diseñé la solución completa: desde establecer la conexión a la API y transformar los datos con Power Query, hasta modelarlos y crear las visualizaciones interactivas finales en Power BI.",
      dashboardTitle: "Dashboard de Tipo de Cambio en Vivo",
      dashboardSubtitle: `Este reporte se actualiza automáticamente. Explora las tendencias de los últimos 30 días y los valores actuales de cada divisa. Puedes verlo en pantalla completa <a href="https://app.powerbi.com/view?r=eyJrIjoiNmQ0NjMzOTItMTFmZi00YzAyLWE5MTctMDMzYTFiZjQ2MDdiIiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" target="_blank" rel="noopener" class="subtitle-link">aquí</a>.`
    },
    project_pokedex: {
      pageTitle: "Dashboard Interactivo de Pokédex – Con Looker Studio",
      lookerStudioUrl: "https://lookerstudio.google.com/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF",
      iframeEmbed: `<iframe width="100%" height="920" src="https://lookerstudio.google.com/embed/reporting/9a497039-444e-4275-a723-d09a926b05fa/page/Yk8RF" frameborder="0" style="border:0; width:100%; height:920px;" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
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
    },
    project_neo_tracker: {
      pageTitle: "NEO Tracker – Resumen Semanal de Datos",
      lookerButton: "Ver en Power BI",
      iframeEmbed: `<iframe title="NEO Tracker – Weekly Data Overview" width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiN2FjMjk0N2YtMjFlYi00Nzc3LWIzZGMtZDM1ZmIzZDgxOGE3IiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" frameborder="0" allowFullScreen="true" loading="lazy"></iframe>`,
      backButton: "Volver a Proyectos",
      linkedinButton: "Compartir en LinkedIn",
      xButton: "Compartir en X",
      executiveSummary: [
        { icon: "fas fa-satellite-dish", title: "Seguimiento Semanal de Objetos", text: "Cuantifica y muestra todos los Objetos Cercanos a la Tierra detectados por la NASA en los últimos 7 días, ofreciendo una vista actual de la actividad espacial." },
        { icon: "fas fa-exclamation-triangle", title: "Clasificación de Riesgo en Tiempo Real", text: "Categoriza automáticamente cada objeto según su nivel de peligrosidad potencial, permitiendo una rápida identificación de amenazas relevantes." },
        { icon: "fas fa-meteor", title: "Identificación de Métricas Clave", text: "Destaca datos críticos como el tamaño, la velocidad y la distancia de aproximación de los objetos más grandes y rápidos." }
      ],
      problemTitle: "Haciendo Accesibles los Datos Espaciales",
      problemText: "La inmensidad del espacio contiene innumerables objetos. El objetivo fue crear un dashboard dinámico y auto-actualizable para ofrecer un resumen semanal de la actividad de Objetos Cercanos a la Tierra (NEO), haciendo que los datos astronómicos complejos sean accesibles y fáciles de entender.",
      objectiveTitle: "Objetivo del Dashboard",
      objectiveText: "Construir un reporte en Power BI que se conecte automáticamente a la API de la NASA, procese los datos de los últimos 7 días y visualice métricas clave como cantidad de objetos, tamaño, velocidad, proximidad y riesgo potencial.",
      roleTitle: "Mi Rol",
      roleText: "Fui responsable del ciclo de vida completo del proyecto: desde la conexión a la API de la NASA y la transformación de datos con Power Query, hasta el desarrollo de cálculos con DAX y el diseño del dashboard interactivo final en Power BI.",
      datasetTitle: "Tecnología y Datos",
      datasetSource: "Fuente de Datos:",
      datasetSourceText: "API NeoWs de la NASA",
      datasetSourceLink: "https://api.nasa.gov",
      datasetScope: "Herramientas:",
      datasetScopeValue: "Power BI, Power Query (M), DAX.",
      dashboardTitle: "Dashboard Interactivo de NEOs",
      dashboardSubtitle: `Este reporte se actualiza automáticamente. Explora los datos de los últimos 7 días. Puedes verlo en pantalla completa <a href="https://app.powerbi.com/view?r=eyJrIjoiN2FjMjk0N2YtMjFlYi00Nzc3LWIzZGMtZDM1ZmIzZDgxOGE3IiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" target="_blank" rel="noopener" class="subtitle-link">aquí</a>.`
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
  const header = document.querySelector('header');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  if (menuToggle && mobileNav) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'mobile-nav');

    const toggleNav = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const isExpanded = mobileNav.classList.toggle('show');
      menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      if (isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    menuToggle.addEventListener('click', toggleNav);

    // Auto-close menu when clicking any link inside mobileNav
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileNav.classList.contains('show') && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileNav.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
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

// --- NUEVA FUNCIÓN PARA BARAJAR EL CARRUSEL ---
// Algoritmo Fisher-Yates (Knuth) Shuffle
function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;

  // Mientras queden elementos por barajar.
  while (currentIndex > 0) {
    // Elige un elemento restante.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Y cámbialo por el elemento actual.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function populateHomePage(lang, basePath) {
  const data = translations[lang] || translations.en;
  
  // Barajamos los proyectos antes de mostrarlos
  if (data.projects) {
    shuffleArray(data.projects);
  }

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
    
    // Barajamos la lista de proyectos de la galería
    if (data.projects_list) {
      shuffleArray(data.projects_list);
    }

    const titleEl = getEl('projects-title');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-lightbulb"></i> ${data.projects_page_title}`;
    }

    const gridContainer = getEl('project-gallery-grid');
    if (gridContainer) {
        gridContainer.innerHTML = '';
        (data.projects_list || []).forEach(project => {
            let toolIcon = '';
            if (project.tool === 'powerbi') {
                toolIcon = `<img src="${basePath}assets/img/logos/power-bi.webp" alt="Power BI Logo" class="card-tool-icon">`;
            } else if (project.tool === 'looker') {
                toolIcon = `<img src="${basePath}assets/img/logos/looker-studio.webp" alt="Looker Studio Logo" class="card-tool-icon">`;
            }

            const cardItem = document.createElement('li');
            cardItem.innerHTML = `
                <a href="${project.link}" class="project-gallery-card">
                    <div class="card-image" style="background-image: url('${basePath}${project.imageUrl}')"></div>
                    <div class="card-content">
                        <div class="card-header">
                            <h3>${project.title}</h3>
                            ${toolIcon}
                        </div>
                        <p>${project.description}</p>
                    </div>
                </a>
            `;
            gridContainer.appendChild(cardItem);
        });
    }
}

function populatePublicationsPage(lang, basePath) {
    const data = translations[lang] || translations.en;
    
    const titleEl = getEl('publications-title');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-feather-alt"></i> ${data.publications_page_title}`;
    }

    const listContainer = getEl('publications-list');
    if (listContainer) {
        listContainer.innerHTML = '';
        (data.publications_list || []).forEach(publication => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="${publication.externalUrl}" class="publication-item" target="_blank" rel="noopener">
                    <div class="publication-logo">
                        <img src="${basePath}${publication.outletLogoUrl}" alt="${publication.outlet} Logo">
                    </div>
                    <div class="publication-text-content">
                        <span class="publication-meta">${publication.outlet} | ${publication.date}</span>
                        <h3>${publication.title}</h3>
                        <p>${publication.description}</p>
                    </div>
                </a>
            `;
            listContainer.appendChild(listItem);
        });
    }
}

function populateExchangeRatePage(lang, basePath) {
    const data = translations[lang].project_exchange_rate || translations.en.project_exchange_rate;
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
        <a href="https://app.powerbi.com/view?r=eyJrIjoiNmQ0NjMzOTItMTFmZi00YzAyLWE5MTctMDMzYTFiZjQ2MDdiIiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
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
                <h3><i class="fas fa-user-tie"></i> ${data.roleTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.roleText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-database"></i> ${data.datasetTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
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
        const titleEl = dashboardContent.querySelector('#dashboard-title');
        const subtitleEl = dashboardContent.querySelector('#dashboard-subtitle');
        const embedEl = dashboardContent.querySelector('#dashboard-embed-container');
        if (titleEl) titleEl.textContent = data.dashboardTitle;
        if (subtitleEl) subtitleEl.innerHTML = data.dashboardSubtitle;
        if (embedEl) embedEl.innerHTML = data.iframeEmbed;
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

function populateNeoTrackerPage(lang, basePath) {
    const data = translations[lang].project_neo_tracker || translations.en.project_neo_tracker;
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
        <a href="https://app.powerbi.com/view?r=eyJrIjoiN2FjMjk0N2YtMjFlYi00Nzc3LWIzZGMtZDM1ZmIzZDgxOGE3IiwidCI6ImJiMDZmMmM2LTIxNjItNDczMS05NmYwLTljZTE0MGZmMWFmNiIsImMiOjR9" class="button btn-looker" target="_blank" rel="noopener"><i class="fas fa-chart-bar"></i> ${data.lookerButton}</a>
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
                <h3><i class="fas fa-user-tie"></i> ${data.roleTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
                <div class="content"><p>${data.roleText}</p></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fas fa-database"></i> ${data.datasetTitle} <i class="fas fa-chevron-down more-icon"></i></h3>
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
        const titleEl = dashboardContent.querySelector('#dashboard-title');
        const subtitleEl = dashboardContent.querySelector('#dashboard-subtitle');
        const embedEl = dashboardContent.querySelector('#dashboard-embed-container');
        if (titleEl) titleEl.textContent = data.dashboardTitle;
        if (subtitleEl) subtitleEl.innerHTML = data.dashboardSubtitle;
        if (embedEl) embedEl.innerHTML = data.iframeEmbed;
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
  } else if (document.body.classList.contains('page-publications')) {
    populatePublicationsPage(lang, basePath);
  } else if (document.body.classList.contains('page-project-case-study')) {
    const bodyId = document.body.id;
    
    if (bodyId === 'page-pokedex') {
        populatePokedexPage(lang, basePath);
    } else if (bodyId === 'page-unemployment') {
        populateUnemploymentPage(lang, basePath);
    } else if (bodyId === 'page-financial-inclusion') {
        populateFinancialInclusionPage(lang, basePath);
    } else if (bodyId === 'page-exchange-rate') {
        populateExchangeRatePage(lang, basePath);
    } else if (bodyId === 'page-neo-tracker') {
        populateNeoTrackerPage(lang, basePath);
    }
  }

  document.querySelectorAll(".lang-toggle").forEach(el => {
    const flag = lang === "en" ? 'cl' : 'us';
    const alt = lang === "en" ? 'Bandera de Chile' : 'USA Flag';
    const text = lang === "en" ? 'ES' : 'EN';
    const flagUrl = `https://flagcdn.com/w20/${flag}.png`;
    el.innerHTML = `<img src="${flagUrl}" alt="${alt}" style="width: 20px; vertical-align: middle;"> ${text}`;
  });

  if (window.GeminiChatWidget && typeof window.GeminiChatWidget.updateLanguage === 'function') {
    window.GeminiChatWidget.updateLanguage(lang);
  }
}

function toggleLang() {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang, basePath);
  localStorage.setItem('preferredLanguage', newLang);
}

// --- FILTRADO DE PROYECTOS POR TECNOLOGÍA ---
function setupProjectFilterTabs() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (!filterTabs.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');
      const cards = document.querySelectorAll('#project-gallery-grid li');

      cards.forEach(card => {
        const isPowerBI = card.querySelector('img[alt*="Power BI"]');
        const isLooker = card.querySelector('img[alt*="Looker"]');

        if (filterVal === 'all') {
          card.style.display = 'block';
        } else if (filterVal === 'powerbi') {
          card.style.display = isPowerBI ? 'block' : 'none';
        } else if (filterVal === 'looker') {
          card.style.display = isLooker ? 'block' : 'none';
        }
      });
    });
  });
}

// --- WIDGET DE CHAT GEMINI (CON SOPORTE I18N EN/ES) ---
const KNOWLEDGE_BASE = {
  general: {
    name: { en: "Profile & General Overview", es: "Perfil & Resumen General" },
    context: "Benjamín Espinoza (Ben Matias) is a Business & Data Analyst with a degree in Industrial Engineering (Universidad de Valparaíso) and an International Diploma in Digital Transformation. He has solid experience at Banco Internacional, Lucas Diesel, and Heavenward Elevators. Expert in Power BI, Looker Studio, Tableau, SQL, DAX, Power Query, Google Apps Script, Python, ETL automation, and Scrum methodology.",
    prompts: {
      en: ["What are Benjamín's key skills?", "Which industries has he worked in?", "How can I contact Benjamín?"],
      es: ["¿Cuáles son las habilidades clave de Benjamín?", "¿En qué industrias ha trabajado?", "¿Cómo contactar a Benjamín?"]
    }
  },
  publications: {
    name: { en: "Publications & CIPER Chile", es: "Publicaciones & CIPER Chile" },
    context: "Author of the opinion column 'De Seúl a Santiago: lo que Chile puede aprender de la crisis demográfica de Corea del Sur' published in CIPER Chile (Sept 2025). Analyzes South Korea's demographic decline, fertility rates, and lessons for public policy in Chile.",
    prompts: {
      en: ["What is the CIPER Chile column about?", "Where can I read the article?", "What demographic topics are analyzed?"],
      es: ["¿De qué trata la columna en CIPER Chile?", "¿Dónde puedo leer el artículo?", "¿Qué temas demográficos analiza?"]
    }
  },
  pokedex: {
    name: { en: "Interactive Pokédex", es: "Pokédex Interactiva" },
    context: "Interactive dashboard in Looker Studio cataloging 1,025 Pokémon. Connects to PokéAPI using Google Apps Script and Google Sheets. Features conditional formatting by type, base stat cards (HP, Attack, Defense, Speed), abilities, and evolutions.",
    prompts: {
      en: ["How does it connect to the PokéAPI?", "What Pokémon metrics are shown?", "What tools were used?"],
      es: ["¿Cómo se conecta a la PokéAPI?", "¿Qué métricas muestra sobre los Pokémon?", "¿Qué herramientas se utilizaron?"]
    }
  },
  exchange: {
    name: { en: "Exchange Rate Evolution", es: "Evolución Tipo de Cambio" },
    context: "Automated Power BI dashboard consuming the Central Bank of Chile REST API. Tracks USD, EUR, and GBP against CLP, daily fluctuations, 30-day volatility trends, DAX calculated measures, and Power Query M pipelines.",
    prompts: {
      en: ["How does Central Bank API automation work?", "Which currencies are analyzed?", "What DAX metrics were built?"],
      es: ["¿Cómo funciona la API del Banco Central?", "¿Qué divisas se analizan?", "¿Qué métricas DAX se crearon?"]
    }
  },
  unemployment: {
    name: { en: "US Unemployment Analysis", es: "Desempleo en EE.UU." },
    context: "Analytical dashboard in Looker Studio with U.S. Bureau of Labor Statistics (BLS) data (2020-2025). Compares national, state, and metro area unemployment rates, regional volatility, and post-pandemic recovery patterns.",
    prompts: {
      en: ["What data sources are used?", "What are the main findings?", "How do metro areas compare to states?"],
      es: ["¿Qué fuente de datos utiliza?", "¿Cuáles son los principales hallazgos?", "¿Cómo se comparan ciudades con estados?"]
    }
  },
  inclusion: {
    name: { en: "Global Financial Inclusion", es: "Inclusión Financiera Global" },
    context: "Looker Studio dashboard based on World Bank Global Findex dataset (2011-2024), covering 5.77 billion adults. Highlights 74.35% formal account ownership, mobile money adoption in developing economies, and borrowing gaps.",
    prompts: {
      en: ["What does the 74.35% rate reveal?", "How does Mobile Money impact inclusion?", "Where is the dataset from?"],
      es: ["¿Qué revela la tasa del 74.35%?", "¿Cómo impacta el Mobile Money?", "¿De dónde provienen los datos?"]
    }
  },
  neo: {
    name: { en: "NEO Tracker (NASA)", es: "NEO Tracker (NASA)" },
    context: "Auto-updating Power BI dashboard connected to NASA NeoWs API. Tracks Near-Earth Objects (asteroids) detected in the last 7 days, collision risk, approach velocity (km/h), miss distance, and size in meters.",
    prompts: {
      en: ["How does it connect to NASA API?", "How are hazardous asteroids classified?", "What space metrics are shown?"],
      es: ["¿Cómo se conecta a la API de la NASA?", "¿Cómo clasifica los asteroides peligrosos?", "¿Qué métricas astronómicas muestra?"]
    }
  }
};

const GeminiChatWidget = {
  activeContextKey: 'general',
  isOpen: false,

  init() {
    this.detectCurrentContext();
    this.renderWidget();
    this.attachEvents();
    this.renderSuggestedPrompts();
    this.addBotMessage(this.getWelcomeMessage());
  },

  detectCurrentContext() {
    const bodyId = document.body.id;
    if (bodyId === 'page-pokedex') this.activeContextKey = 'pokedex';
    else if (bodyId === 'page-exchange-rate') this.activeContextKey = 'exchange';
    else if (bodyId === 'page-unemployment') this.activeContextKey = 'unemployment';
    else if (bodyId === 'page-financial-inclusion') this.activeContextKey = 'inclusion';
    else if (bodyId === 'page-neo-tracker') this.activeContextKey = 'neo';
    else if (document.body.classList.contains('page-publications')) this.activeContextKey = 'publications';
    else this.activeContextKey = 'general';
  },

  renderWidget() {
    if (getEl('gemini-chat-widget')) return;

    const isEn = currentLang === 'en';
    const buttonText = isEn ? 'Ask Gemini AI' : 'Preguntar a Gemini';

    const widgetHtml = `
      <div id="gemini-chat-widget" class="gemini-chat-widget">
        <button id="gemini-chat-toggle" class="gemini-chat-toggle" aria-label="Ask Gemini AI Assistant" title="Chat with Gemini AI">
          <div class="gemini-badge-sparkle"><i class="fas fa-sparkles"></i></div>
          <i class="fas fa-robot gemini-icon-main"></i>
          <span id="gemini-toggle-text-span" class="gemini-toggle-text">${buttonText}</span>
        </button>

        <div id="gemini-chat-window" class="gemini-chat-window hidden" role="dialog" aria-label="Gemini Dashboard Assistant">
          <div class="gemini-chat-header">
            <div class="gemini-chat-title-group">
              <i class="fas fa-sparkles gemini-sparkle-icon"></i>
              <div>
                <h3>Gemini Dashboard AI</h3>
                <span class="gemini-chat-status"><span class="status-dot"></span> <span id="gemini-status-text">${isEn ? 'AI Active' : 'Asistente Activo'}</span></span>
              </div>
            </div>
            <div class="gemini-chat-actions">
              <button id="gemini-chat-close" class="gemini-icon-btn" aria-label="Close chat"><i class="fas fa-times"></i></button>
            </div>
          </div>

          <div class="gemini-context-bar">
            <label for="gemini-dashboard-select"><i class="fas fa-database"></i> ${isEn ? 'Context:' : 'Contexto:'}</label>
            <select id="gemini-dashboard-select">
              <option value="general">${isEn ? 'Benjamín Profile & Overview' : 'Perfil de Benjamín & General'}</option>
              <option value="publications">${isEn ? 'Publications & CIPER' : 'Publicaciones & CIPER'}</option>
              <option value="pokedex">Pokédex Interactiva</option>
              <option value="exchange">${isEn ? 'Exchange Rate Evolution' : 'Evolución Tipo de Cambio'}</option>
              <option value="unemployment">${isEn ? 'US Unemployment' : 'Desempleo en EE.UU.'}</option>
              <option value="inclusion">${isEn ? 'Global Financial Inclusion' : 'Inclusión Financiera Global'}</option>
              <option value="neo">NEO Tracker (NASA)</option>
            </select>
          </div>

          <div id="gemini-chat-messages" class="gemini-chat-messages"></div>

          <div id="gemini-quick-prompts" class="gemini-quick-prompts"></div>

          <form id="gemini-chat-form" class="gemini-chat-form">
            <input type="text" id="gemini-chat-input" placeholder="${isEn ? 'Ask a question...' : 'Escribe tu pregunta...'}" autocomplete="off" required />
            <button type="submit" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHtml);
    getEl('gemini-dashboard-select').value = this.activeContextKey;
  },

  updateLanguage(lang) {
    const isEn = lang === 'en';
    const toggleSpan = getEl('gemini-toggle-text-span');
    if (toggleSpan) {
      toggleSpan.textContent = isEn ? 'Ask Gemini AI' : 'Pregúntale a Gemini';
    }
    const statusEl = getEl('gemini-status-text');
    if (statusEl) {
      statusEl.textContent = isEn ? 'AI Active' : 'Asistente Activo';
    }
    const inputEl = getEl('gemini-chat-input');
    if (inputEl) {
      inputEl.placeholder = isEn ? 'Ask a question...' : 'Haz una pregunta sobre el portafolio...';
    }

    const selectEl = getEl('gemini-dashboard-select');
    if (selectEl) {
      selectEl.innerHTML = `
        <option value="general">${isEn ? 'Benjamín Profile & Overview' : 'Perfil de Benjamín & General'}</option>
        <option value="publications">${isEn ? 'Publications & CIPER' : 'Publicaciones & CIPER'}</option>
        <option value="pokedex">Pokédex Interactiva</option>
        <option value="exchange">${isEn ? 'Exchange Rate Evolution' : 'Evolución Tipo de Cambio'}</option>
        <option value="unemployment">${isEn ? 'US Unemployment' : 'Desempleo en EE.UU.'}</option>
        <option value="inclusion">${isEn ? 'Global Financial Inclusion' : 'Inclusión Financiera Global'}</option>
        <option value="neo">NEO Tracker (NASA)</option>
      `;
      selectEl.value = this.activeContextKey;
    }

    const contextLabel = document.querySelector('.gemini-context-bar label');
    if (contextLabel) {
      contextLabel.innerHTML = `<i class="fas fa-database"></i> ${isEn ? 'Context:' : 'Contexto:'}`;
    }

    this.renderSuggestedPrompts();
  },

  attachEvents() {
    const toggleBtn = getEl('gemini-chat-toggle');
    const closeBtn = getEl('gemini-chat-close');
    const selectContext = getEl('gemini-dashboard-select');
    const chatForm = getEl('gemini-chat-form');

    toggleBtn.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.toggleChat(false));

    selectContext.addEventListener('change', (e) => {
      this.activeContextKey = e.target.value;
      this.renderSuggestedPrompts();
      const ctxInfo = KNOWLEDGE_BASE[this.activeContextKey];
      const isEn = currentLang === 'en';
      const ctxName = isEn ? ctxInfo.name.en : ctxInfo.name.es;
      const msg = isEn
        ? `Context updated to **${ctxName}**. How can I help you analyze this?`
        : `Contexto cambiado a **${ctxName}**. ¿En qué puedo ayudarte sobre esto?`;
      this.addBotMessage(msg);
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = getEl('gemini-chat-input');
      const query = input.value.trim();
      if (!query) return;
      input.value = '';
      this.handleUserQuery(query);
    });
  },

  toggleChat(forceState) {
    const chatWindow = getEl('gemini-chat-window');
    this.isOpen = typeof forceState === 'boolean' ? forceState : !this.isOpen;
    if (this.isOpen) {
      chatWindow.classList.remove('hidden');
      getEl('gemini-chat-input').focus();
    } else {
      chatWindow.classList.add('hidden');
    }
  },

  getWelcomeMessage() {
    const isEn = currentLang === 'en';
    const ctxInfo = KNOWLEDGE_BASE[this.activeContextKey];
    const ctxName = isEn ? ctxInfo.name.en : ctxInfo.name.es;
    return isEn
      ? `👋 Hi! I'm **Gemini Assistant**. Ask me anything about Benjamín's dashboards, publications, or career background. Active context: **${ctxName}**.`
      : `👋 ¡Hola! Soy el **Asistente Gemini**. Pregúntame sobre los dashboards de Benjamín, sus publicaciones o su experiencia. Contexto actual: **${ctxName}**.`;
  },

  renderSuggestedPrompts() {
    const container = getEl('gemini-quick-prompts');
    if (!container) return;
    container.innerHTML = '';
    const isEn = currentLang === 'en';
    const prompts = isEn
      ? KNOWLEDGE_BASE[this.activeContextKey].prompts.en
      : KNOWLEDGE_BASE[this.activeContextKey].prompts.es;

    (prompts || []).forEach(text => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'gemini-chip';
      chip.textContent = text;
      chip.addEventListener('click', () => this.handleUserQuery(text));
      container.appendChild(chip);
    });
  },

  addUserMessage(text) {
    const messagesContainer = getEl('gemini-chat-messages');
    const msgEl = document.createElement('div');
    msgEl.className = 'gemini-msg user';
    msgEl.textContent = text;
    messagesContainer.appendChild(msgEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  addBotMessage(htmlContent) {
    const messagesContainer = getEl('gemini-chat-messages');
    const msgEl = document.createElement('div');
    msgEl.className = 'gemini-msg bot';

    let formatted = htmlContent
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');

    msgEl.innerHTML = formatted;
    messagesContainer.appendChild(msgEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  showTypingIndicator() {
    const messagesContainer = getEl('gemini-chat-messages');
    const typingEl = document.createElement('div');
    typingEl.id = 'gemini-typing-indicator';
    typingEl.className = 'gemini-msg bot gemini-typing';
    typingEl.innerHTML = '<span></span><span></span><span></span>';
    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  removeTypingIndicator() {
    const el = getEl('gemini-typing-indicator');
    if (el) el.remove();
  },

  async handleUserQuery(userQuery) {
    this.addUserMessage(userQuery);
    this.showTypingIndicator();

    const activeData = KNOWLEDGE_BASE[this.activeContextKey];

    try {
      const responseText = await this.callGeminiProxy(userQuery, activeData.context);
      this.removeTypingIndicator();
      this.addBotMessage(responseText);
    } catch (err) {
      console.warn('Gemini proxy unavailable, using local fallback:', err.message);
      this.removeTypingIndicator();
      this.addBotMessage(this.generateLocalFallback(userQuery, activeData));
    }
  },

  async callGeminiProxy(prompt, context) {
    // Calls the Netlify serverless proxy — the API key lives securely on the server.
    const res = await fetch('/api/gemini-proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        context,
        lang: currentLang
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP ${res.status}`);
    }

    const data = await res.json();
    if (!data.response) throw new Error('Empty response from proxy.');
    return data.response;
  },

  generateLocalFallback(query, activeData) {
    const q = query.toLowerCase();
    const isEn = currentLang === 'en';
    const ctxName = isEn ? activeData.name.en : activeData.name.es;

    if (q.includes('skill') || q.includes('habilidad') || q.includes('tool') || q.includes('tecnolog')) {
      return isEn
        ? `💡 **Skills & Tech in ${ctxName}**:\n${activeData.context}\n\n*(Benjamín specializes in Power BI, Looker Studio, SQL, DAX, and Apps Script)*.`
        : `💡 **Tecnologías y Enfoque en ${ctxName}**:\n${activeData.context}\n\n*(Benjamín se especializa en Power BI, Looker Studio, SQL, DAX y Apps Script)*.`;
    }

    if (q.includes('api') || q.includes('data') || q.includes('dato') || q.includes('source') || q.includes('fuente')) {
      return isEn
        ? `📊 **Data Sources & Pipeline for ${ctxName}**:\n${activeData.context}`
        : `📊 **Pipeline de Datos y Fuentes para ${ctxName}**:\n${activeData.context}`;
    }

    if (q.includes('contact') || q.includes('contacto') || q.includes('email') || q.includes('linkedin')) {
      return isEn
        ? `📩 You can contact **Benjamín Espinoza** via email at \`bmatiasespinoza@gmail.com\` or on [LinkedIn](https://www.linkedin.com/in/benmatias).`
        : `📩 Puedes contactar a **Benjamín Espinoza** por correo a \`bmatiasespinoza@gmail.com\` o en [LinkedIn](https://www.linkedin.com/in/benmatias).`;
    }

    return isEn
      ? `🤖 **${ctxName} Summary**:\n${activeData.context}\n\n*(Note: Configure a Gemini API Key using the 🔑 icon above for unrestricted open AI conversations).*`
      : `🤖 **Resumen sobre ${ctxName}**:\n${activeData.context}\n\n*(Nota: Puedes ingresar tu API Key de Gemini con el icono 🔑 para realizar cualquier pregunta abierta).*`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  basePath = '';
  const path = window.location.pathname;
  
  if (path.endsWith('/') || path.endsWith('index.html') || path.length <= 1) {
    document.body.classList.add('page-home');
  } else if (path.includes('cv.html')) {
    document.body.classList.add('page-cv');
  } else if (path.includes('projects.html')) {
    document.body.classList.add('page-projects');
  } else if (path.includes('publications.html')) {
    document.body.classList.add('page-publications');
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
  } else if (document.body.classList.contains('page-projects')) {
    setupProjectFilterTabs();
  }

  // --- 4. INICIALIZACIÓN DEL WIDGET DE CHAT GEMINI ---
  GeminiChatWidget.init();
});

