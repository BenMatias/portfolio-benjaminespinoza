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
    kpiDashboards: "BI Dashboards & Reports",
    kpiReports: "Cross-Functional Impact",
    kpiAutomation: "Modeling & Analytics",
    filterAll: "All Projects",
    filterCaseStudy: "Case Studies",
    filterPowerBI: "Power BI",
    filterLooker: "Looker Studio",

    // --- Section Tag Pills & Buttons ---
    tagIntroduce: "LET ME INTRODUCE MYSELF",
    tagImpact: "WHAT I DO FOR YOU",
    tagWork: "SELECTED WORK",
    btnContact: "Contact Me",
    btnDownloadCV: "Download CV",

    // --- Index Page Content ---
    heroTitle: "Data, BI & Business Analyst | Product Specialist",
    heroSubtitle: "Bridging data analytics (SQL, Power BI, Looker Studio), business process engineering (BPMN 2.0, BDD), digital product management, and Generative AI to drive strategic decisions.",
    btnProjects: "View Projects",
    btnResume: "View Resume",
    aboutTitle: "About Me",
    aboutContent: `<p>I am <strong>Benjamín Espinoza</strong>, an Industrial Engineer specializing in <strong>Data Analytics, Business Intelligence, Business Analysis, and Digital Product Strategy</strong>. Across my professional career in banking (Banco Internacional), retail, and industrial sectors (Lucas Diesel, Heavenward Elevators), I have built a versatile profile balancing four core disciplines: <strong>Data Analyst, BI Analyst, Business Analyst (BA), and Product Specialist (PO Target)</strong>.</p>

<p>My core strength lies in transforming complex datasets into strategic decisions and scalable products: writing advanced <strong>SQL</strong> queries, extracting, modeling, and transforming data for dashboard creation, designing KPI architectures, and building executive & operational dashboards in <strong>Power BI, Looker Studio, and Tableau</strong>.</p>

<p>At the same time, I bridge business strategy with tech execution within Agile triads (PO, Tech Lead, BA): authoring BDD User Stories (<em>Given-When-Then</em>) in Jira/Confluence, modeling operational workflows by gathering processes in <strong>BPMN 2.0</strong>, auditing regulatory compliance, and measuring product funnels with <strong>GA4, GTM, and Microsoft Clarity</strong>. Additionally, I pioneer the daily adoption of <strong>Generative AI (Gemini, NotebookLM, Rovo AI)</strong> to accelerate value delivery.</p>`,
    impactTitle: "How I’ve Made an Impact",
    impacts: [{
      icon: "fa-database",
      title: "Data Analytics & SQL Pipelines",
      text: "Extracted actionable insights by executing complex SQL queries in PostgreSQL, building data models, and automating ETL workflows."
    }, {
      icon: "fa-chart-pie",
      title: "BI Dashboards & Executive Reporting",
      text: "Designed and deployed 50+ interactive dashboards in Power BI and Looker Studio using DAX and Power Query for data-driven decisions."
    }, {
      icon: "fa-project-diagram",
      title: "Process Engineering & BA Requirements",
      text: "Mapped AS-IS and TO-BE operational workflows using BPMN 2.0, authored BDD User Stories in Jira, and audited regulatory compliance."
    }, {
      icon: "fa-bullseye",
      title: "Digital Product Strategy & Agile Triads",
      text: "Facilitated business-tech alignment in Agile triads (PO, Tech Lead, BA), defining MVP Canvases, Puck CMS management, and GA4 telemetry."
    }],
    projectsTitle: "Featured Projects",
    projects: [
        { id: "project-digital-banking", title: "Digital Product Redesign & Analytics", description: "End-to-end case study of a public banking portal redesign, featuring MVP Canvas, BPMN 2.0, PostgreSQL queries, and GA4 telemetry.", imageUrl: "assets/img/digital-banking-cover.webp", link: "projects/digital-banking-redesign.html", buttonText: "View Case Study", tool: "all", type: "case-study" },
        { id: "project-exchange-rate", title: "Exchange Rate Evolution", description: "A Power BI dashboard that tracks major currencies against the CLP, updated automatically via the Central Bank API.", imageUrl: "assets/img/exchange-rate-cover.webp", link: "projects/exchange-rate-evolution.html", buttonText: "View Project", tool: "powerbi", type: "dashboard" },
        { id: "project-pokedex", title: "Interactive Pokédex", description: "A National Pokédex of 1,025 Pokémon built by connecting to the PokéAPI with Apps Script.", imageUrl: "assets/img/pokedex-cover.webp", link: "projects/pokedex-dashboard.html", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-unemployment", title: "US Unemployment Analysis", description: "Explores unemployment trends across U.S. states and metro areas using interactive dashboards.", imageUrl: "assets/img/us-unemployment-cover.webp", link: "projects/US-Unemployment.html", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-financial-inclusion", title: "Global Financial Inclusion", description: "Visualize global trends in account ownership and borrowing behavior by region, income group, and demographics.", imageUrl: "assets/img/global-financial-inclusion-cover.webp", link: "projects/global-financial-inclusion.html", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "An automated dashboard connecting to the NASA API to track Near-Earth Objects from the last 7 days.", imageUrl: "assets/img/neo-tracker-cover.webp", link: "projects/neo-tracker.html", buttonText: "View Project", tool: "powerbi", type: "dashboard" }
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
      logo: "assets/img/logos/digital-bank-latam.webp",
      description: `<p class="timeline-desc">Executive program focused on banking innovation, Fintech ecosystems, emerging tech adoption, and digital business model redesign across LATAM.</p>`
    }, {
      type: 'education',
      date: "2022",
      title: "Diploma in Web Design & Programming",
      company: "Fundación Telefónica & AIEP",
      url: "https://www.fundaciontelefonica.cl",
      logo: "assets/img/logos/telefonica-aiep.webp",
      description: `<p class="timeline-desc">Specialization in frontend web development with HTML, CSS, JavaScript, responsive design, UX/UI principles, and web performance optimization.</p>`
    }, {
      type: 'education',
      date: "2022",
      title: "Introductory University Program",
      company: "BYU PathwayConnect",
      url: "https://www.byupathway.edu",
      logo: "assets/img/logos/byu.webp",
      description: `<p class="timeline-desc">International university foundation program focusing on project management, professional academic English communication, and leadership development.</p>`
    }, {
      type: 'education',
      date: "2013–2020",
      title: "B.S. Industrial Civil Engineering",
      company: "Universidad de Valparaíso",
      url: "https://uv.cl",
      logo: "assets/img/logos/uv.webp",
      description: `<p class="timeline-desc">Professional engineering degree covering process optimization, operations management, investment project evaluation, financial engineering, and quantitative decision analysis.</p>`
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
        "Strapi 5 & Puck CMS (React)",
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

    // --- CASE STUDY DIGITAL BANKING ---
    cs_hero_title: "Digital Product Redesign & Analytics: Public Banking",
    cs_hero_subtitle: "End-to-end transformation of the public banking portal. Integrating Agile product management (MVP Canvas & User Stories), BPMN 2.0 process modeling, PostgreSQL data architecture, Headless Strapi 5 + Puck CMS administration, and advanced web analytics (GA4 / Clarity).",
    cs_sum1_title: "The Business Challenge",
    cs_sum1_desc: "The legacy public web portal suffered from high drop-off rates in digital product applications (accounts/loans), operational rigidity in launching campaigns, and a lack of user event telemetry.",
    cs_sum2_title: "The Product Solution",
    cs_sum2_desc: "Led the Agile triad to migrate to a No-Code/Low-Code visual frontend with Puck CMS connected to Strapi 5 (Headless CMS), AI-assisted UX mockups (Firebase), functional QA testing in Staging, and full GTM tagging.",
    cs_sum3_title: "Quantitative Impact",
    cs_sum3_desc: "+35% increase in digital application conversion, web publishing time slashed from weeks to minutes, and 100% certified QA quality prior to production deployment.",
    cs_tab_po: "1. PO Strategy (MVP & Stories)",
    cs_tab_bpmn: "2. BPMN 2.0 Processes",
    cs_tab_sql: "3. SQL Architecture (PostgreSQL)",
    cs_tab_dashboard: "4. Telemetry & Dashboard",
    cs_tab_genai: "5. GenAI Acceleration",
    cs_mvp_title: "Official 7-Block MVP Canvas Standard",
    cs_mvp_subtitle: "Official MVP Canvas structure to validate business hypotheses, user journeys, minimum features, and execution schedule:",
    cs_mvp_b1_title: "MVP Proposal",
    cs_mvp_b1_text: "Complete redesign of the public banking web platform deploying a Headless Strapi 5 + Puck CMS React architecture, AI-assisted wireframing (Firebase), and real-time event telemetry (GA4 / Clarity), enabling instant campaign page publishing with 100% QA-certified quality.",
    cs_mvp_b2_title: "Segmented Personas",
    cs_mvp_b2_text: "<ul><li><strong>Persona 1 (Camila / 32 yrs):</strong> Seeks 100% digital checking account opening and consumer credit evaluation from her smartphone.</li><li><strong>Persona 2 (Roberto / 45 yrs):</strong> Requires commercial financing and clear, agile corporate investment information.</li><li><strong>Persona 3 (Marketing & Commercial Team):</strong> Product owners requiring autonomy to launch promotional campaigns and landings without waiting for dev sprints.</li></ul>",
    cs_mvp_b3_title: "Journeys",
    cs_mvp_b3_text: "<ul><li><strong>1. Discovery:</strong> User arrives at landing page via digital campaign or organic search.</li><li><strong>2. Intuitive & Seamless Navigation:</strong> Smooth interaction across responsive components and financial calculators.</li><li><strong>3. Application Intent:</strong> Click on primary CTA (<code>click_apply_now</code>) captured in GTM.</li><li><strong>4. Form & QA:</strong> Optimized 3-step application form certified through QA matrices.</li><li><strong>5. Conversion:</strong> Successful application confirmation logged in GA4 and real-time dashboard.</li></ul>",
    cs_mvp_b4_title: "Features",
    cs_mvp_b4_text: "<ul><li>Drag-and-Drop No-Code visual editor (Puck CMS) connected to Strapi 5 (Headless CMS).</li><li>Fast AI-assisted wireframing and prototyping (Firebase / Gemini).</li><li>Automatic GTM and GA4 event tracking.</li><li>Session recordings and anonymized heatmaps (Microsoft Clarity).</li><li>Functional QA Testing matrix in Staging environment prior to production release.</li></ul>",
    cs_mvp_b5_title: "Expected Outcome",
    cs_mvp_b5_text: "<ul><li><strong>+35% increase</strong> in digital product application conversion rate.</li><li><strong>Time-to-Market reduction:</strong> Web publishing SLA slashed from 2 weeks down to 15 minutes.</li><li><strong>Zero blocking defects:</strong> 100% quality guarantee in production via Staging QA certification.</li><li><strong>Operational Autonomy:</strong> Full independence for marketing/commercial teams to launch campaigns.</li></ul>",
    cs_mvp_b6_title: "Metrics to Validate Hypotheses",
    cs_mvp_b6_text: "<ul><li><strong>Conversion Rate (CR):</strong> <code>% of sessions completing application (submit_application_success)</code>.</li><li><strong>Time-to-Publish (TTP):</strong> <code>Minutes required to build and publish a landing page in Strapi 5 / Puck CMS</code>.</li><li><strong>Mobile Bounce Rate:</strong> <code>Mobile bounce rate monitored in Clarity & GA4</code>.</li><li><strong>Feature Adoption:</strong> <code>% interaction with financial simulators and primary CTAs</code>.</li></ul>",
    cs_mvp_b7_title: "Cost and Schedule",
    cs_mvp_b7_text: "<ul><li><strong>Schedule:</strong> 6 2-week Agile Sprints (12 weeks total) operating in triad (PO, Tech Lead, BA + Developers).</li><li><strong>Cost Optimization:</strong> Leveraging existing Bank infrastructure licenses (Google Cloud / GCP Suite: GA4, GTM, Looker Studio, Firebase; Jira, Confluence, Strapi 5).</li></ul>",
    cs_usm_matrix_title: "User Story Map: Visual Product Board",
    cs_usm_matrix_desc: "Product journey map structured into 4 Strategic Activities (Backbone) with their user steps vertically stacked:",
    cs_usm_act1: "<i class=\"fas fa-paint-brush\"></i> 1. UX Design & Prototyping",
    cs_usm_st11: "Component wireframing in Firebase.",
    cs_usm_st12: "Functional site mockup creation.",
    cs_usm_st13: "Mobile and Responsive format design.",
    cs_usm_st14: "Accessibility tools design (WCAG).",
    cs_usm_st15: "Initial image and content gathering for release.",
    cs_usm_act2: "<i class=\"fas fa-code\"></i> 2. Puck & Strapi 5 Architecture",
    cs_usm_st21: "Hard component development in Puck CMS.",
    cs_usm_st22: "Puck implementation and Strapi 5 Headless API connection.",
    cs_usm_st23: "Preloaded page creation in Puck for agile launch.",
    cs_usm_st24: "Telemetry setup: GA4, Google Tag Manager, and Clarity.",
    cs_usm_act3: "<i class=\"fas fa-vial\"></i> 3. Testing & Production Release",
    cs_usm_st31: "QA Functional Testing matrix execution in Staging.",
    cs_usm_st32: "Form validation & blocking defect prevention.",
    cs_usm_st33: "QA certification sign-off & production release.",
    cs_usm_act4: "<i class=\"fas fa-sliders-h\"></i> 4. Continuous Puck Operation",
    cs_usm_st41: "Page creation and editing via Puck admin panel.",
    cs_usm_st42: "Strategic role and permission setup (Marketing/Commercial).",
    cs_usm_st43: "Key metrics & campaign event tagging in GTM.",
    cs_usm_title: "Prioritized Product Backlog (Jira / Confluence)",
    cs_usm_desc: "Product Backlog stories prioritized by Epics, with Story Point estimation, MoSCoW priority, and BDD Acceptance Criteria (Given-When-Then):",
    cs_usm_b101_desc: "<strong>As a UX Designer</strong>, I want to wireframe visual components in Firebase and validate the responsive functional prototype prior to development.",
    cs_usm_b101_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> Product requirements defined.<br>• <i>When:</i> Functional mockup is assembled in Firebase.<br>• <i>Then:</i> The Agile triad approves responsive layout.",
    cs_usm_b102_desc: "<strong>As a PO</strong>, I want to ensure accessibility tools (WCAG) and initial content gathering to guarantee launch readiness.",
    cs_usm_b102_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> UI components wireframed.<br>• <i>When:</i> Final contrast & imagery are applied.<br>• <i>Then:</i> WCAG AA accessibility compliance is met.",
    cs_usm_b201_desc: "<strong>As a Lead Developer</strong>, I want to build visual components in Puck CMS and connect them to Strapi 5 API to publish pages in minutes.",
    cs_usm_b201_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> Authenticated user in Puck CMS editor.<br>• <i>When:</i> Publishes visual content blocks.<br>• <i>Then:</i> Strapi 5 API updates production in < 15 min.",
    cs_usm_b202_desc: "<strong>As a Business Analyst</strong>, I want to implement telemetry (GA4, GTM, Clarity) to log conversions and heatmaps.",
    cs_usm_b202_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> Global GTM tag installed.<br>• <i>When:</i> User interacts with simulators/CTAs.<br>• <i>Then:</i> GA4 logs conversions & Clarity captures maps.",
    cs_usm_b301_desc: "<strong>As a Business Analyst</strong>, I want to execute the QA Functional Testing matrix in Staging to prevent blocking defects.",
    cs_usm_b301_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> Landing published in Staging.<br>• <i>When:</i> 100% of test case matrix runs.<br>• <i>Then:</i> Functional certification approved without high severity bugs.",
    cs_usm_b302_desc: "<strong>As a PO</strong>, I want digital sign-off on the QA sign-off document to authorize automatic production deployment.",
    cs_usm_b302_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> QA matrix approved in Staging.<br>• <i>When:</i> Production release document signed.<br>• <i>Then:</i> Pipeline triggers production release.",
    cs_usm_b401_desc: "<strong>As a Product Owner</strong>, I want to administer Puck CMS and manage user roles/permissions to grant commercial team autonomy.",
    cs_usm_b401_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> Marketing user needs to launch campaign.<br>• <i>When:</i> Assigned Commercial Editor role in Puck.<br>• <i>Then:</i> Can create/edit pages autonomously.",
    cs_usm_b402_desc: "<strong>As a Business Analyst</strong>, I want to tag key metrics and campaign events in GTM in an agile manner.",
    cs_usm_b402_ac: "<strong>Acceptance Criteria (BDD):</strong><br>• <i>Given:</i> New campaign built in Puck.<br>• <i>When:</i> Primary metric defined.<br>• <i>Then:</i> GTM trigger registered measuring conversions.",
    cs_roadmap_title: "<i class=\"fas fa-map-signs\"></i> Strategic Product Roadmap (Quarterly Timeline - 6 Sprints)",
    cs_roadmap_tag: "<i class=\"fas fa-calendar-alt\"></i> 12-Week Schedule (Agile Triad)",
    cs_roadmap_desc: "Visual timeline of sequential deliverables organized by Backlog Epics, Sprints, and Estimated Timeframes for the public banking portal redesign (5 MVP Pages):",
    cs_rm_col_epics: "<i class=\"fas fa-layer-group\"></i> Backlog Epics",
    cs_rm_col_m1: "<i class=\"fas fa-clock\"></i> Month 1: Sprints 1-2<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Weeks 1 to 4)</span>",
    cs_rm_col_m2: "<i class=\"fas fa-clock\"></i> Month 2: Sprints 3-4<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Weeks 5 to 8)</span>",
    cs_rm_col_m3: "<i class=\"fas fa-clock\"></i> Month 3: Sprints 5-6<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Weeks 9 to 12)</span>",
    cs_rm_e1_title: "<i class=\"fas fa-paint-brush\"></i> Epic 1: UX & Prototyping",
    cs_rm_e1_sub: "Firebase & Wireframing (8 SP)",
    cs_rm_e1_b1: "BIN-101: Firebase Wireframing & Functional Prototype (5 SP)",
    cs_rm_e1_b2: "BIN-102: WCAG AA Accessibility & Initial Content (3 SP)",
    cs_rm_e1_time: "<i class=\"fas fa-clock\"></i> Estimated Time: Weeks 1 to 4",
    cs_rm_e2_title: "<i class=\"fas fa-code\"></i> Epic 2: Puck & Strapi 5",
    cs_rm_e2_sub: "Core CMS & Telemetry (16 SP)",
    cs_rm_e2_b1: "BIN-201: Puck CMS Visual Components & Strapi 5 API (11 SP)",
    cs_rm_e2_b2: "BIN-202: Telemetry (GA4, GTM & Clarity) (5 SP)",
    cs_rm_e2_time1: "<i class=\"fas fa-clock\"></i> Estimated Time: Weeks 3 to 8",
    cs_rm_e3_title: "<i class=\"fas fa-vial\"></i> Epic 3: Testing & Prod Release",
    cs_rm_e3_sub: "QA Quality & Deployment (8 SP)",
    cs_rm_e3_b1: "BIN-301: Staging Functional QA Testing Matrix (5 SP)",
    cs_rm_e3_b2: "BIN-302: QA Certification Sign-Off & Go-Live (3 SP)",
    cs_rm_e3_time: "<i class=\"fas fa-clock\"></i> Estimated Time: Weeks 9 to 10",
    cs_rm_e4_title: "<i class=\"fas fa-sliders-h\"></i> Epic 4: Continuous Operation",
    cs_rm_e4_sub: "Commercial Autonomy (8 SP)",
    cs_rm_e4_b1: "BIN-401: Puck Administration & Commercial Roles (5 SP)",
    cs_rm_e4_b2: "BIN-402: GTM Campaign Metrics Tagging (3 SP)",
    cs_rm_e4_time: "<i class=\"fas fa-clock\"></i> Estimated Time: Weeks 11 to 12",
    btnBackProjects: "Back to Projects",
    accExpandAll: "Expand All Cards",
    accCollapseAll: "Collapse All Cards",
    cs_scroll_hint: "<i class=\"fas fa-arrows-left-right\"></i> Swipe horizontally to view full 12-week schedule",
    cs_flagship_badge: "Flagship Case Study",
    cs_mvp_standardized_badge: "Standardized 7-Block Matrix",

    cs_bpmn_summary_title: "<i class=\"fas fa-tachometer-alt\"></i> Process Reengineering Summary & KPI Matrix (AS-IS vs. TO-BE)",
    cs_bpmn_summary_desc: "Executive summary of the direct impact of process reengineering on the public banking portal release cycle (5 MVP Pages):",
    cs_bpmn_asis_title: "<i class=\"fas fa-exclamation-triangle\"></i> Current Process (AS-IS): IT Development Bottleneck",
    cs_bpmn_asis_desc: "BPMN 2.0 modeling of the traditional workflow. Landing page updates are 100% dependent on hardcode dev capacity and late-night maintenance windows:",
    cs_bpmn_tobe_title: "<i class=\"fas fa-rocket\"></i> Proposed Process (TO-BE): No-Code Commercial Autonomy with Puck CMS",
    cs_bpmn_tobe_desc: "BPMN 2.0 modeling of the optimized workflow. Commercial Editor composes landings visually in minutes and Product Owner approves in Staging Sandbox prior to instant sync:",
    cs_bpmn_gov_title: "<i class=\"fas fa-shield-alt\"></i> Governance Matrix, RBAC Roles & BPMN Business Rules",
    cs_bpmn_gov_desc: "Formal definition of Role-Based Access Control (RBAC) and validation policies to operate the new process model without compromising banking security:",
    cs_bpmn_asis_sla: "SLA: 14 to 21 Business Days",
    cs_bpmn_tobe_sla: "SLA: 15 Minutes",
    cs_bpmn_scroll_hint: "Swipe horizontally to navigate the full BPMN 2.0 diagram",
    cs_bpmn_gov_change_ctrl: "Change Control",
    cs_bpmn_gov_rbac_title: "1. RBAC Permissions Matrix in Puck Admin & Strapi 5",
    cs_bpmn_gov_rbac_r1: "<strong>Commercial Editor (Marketing / Product):</strong> Permission to visually create and edit text, images, and banners only on the 5 preloaded MVP pages. No access to modify hardcode or infrastructure.",
    cs_bpmn_gov_rbac_r2: "<strong>Product Owner / QA Certifier:</strong> Exclusive permission for final approval of the Staging Sandbox Gate and 1-Click production release.",
    cs_bpmn_gov_rbac_r3: "<strong>Lead Developer / IT:</strong> Administration of base React components in Puck, data schema definition in Strapi 5, and CI/CD pipeline maintenance.",
    cs_bpmn_gov_rules_title: "2. BPMN 2.0 Process Business Rules",
    cs_bpmn_gov_rule1: "<strong>Rule 1 (Mandatory Quality Gate):</strong> No campaign or modification can be pushed to production without a prior preview and explicit approval in the Sandbox Staging environment.",
    cs_bpmn_gov_rule2: "<strong>Rule 2 (Auto-Analytics Tagging):</strong> Every new landing page or button published via Puck CMS automatically applies DataLayer tags in GTM for conversion tracking in GA4 and heatmaps in Clarity without manual tagging.",

    // --- Tab 3: SQL Architecture ---
    cs_sql_title: "<i class=\"fas fa-database\"></i> Data Architecture & PostgreSQL SQL Queries",
    cs_sql_badge_pg: "PostgreSQL",
    cs_sql_badge_link: "Validates Canvas B5 & B6",
    cs_sql_intro: "The redesigned process (Tab 2) generates digital product applications stored in the bank's internal PostgreSQL database. The following queries validate whether the KPI declared in the MVP Canvas — <strong style=\"color:#00e676;\">+35% digital application conversion rate</strong> — was achieved, using three tables from the bank's product system.",
    cs_sql_schema_title: "<i class=\"fas fa-sitemap\"></i> Product System Table Schema (PostgreSQL)",
    cs_sql_schema_badge: "3 Core Tables",
    cs_sql_schema_desc: "Simplified model of the three internal banking system tables used to measure digital channel adoption and the impact of the portal redesign:",
    cs_sql_t1_desc: "Record of each product application submitted through the web portal.",
    cs_sql_t2_desc: "User session on the public portal with device and campaign context.",
    cs_sql_t3_desc: "Validation error log captured in portal forms during the application process.",
    cs_sql_col_field: "Field",
    cs_sql_col_type: "Type",
    cs_sql_col_desc: "Description",
    cs_sql_t1_f1: "Unique ID", cs_sql_t1_f2: "account / credit", cs_sql_t1_f3: "web / branch / app",
    cs_sql_t1_f4: "started / submitted / approved", cs_sql_t1_f5: "UTC date & time", cs_sql_t1_f6: "Link to web session",
    cs_sql_t2_f1: "Unique session ID", cs_sql_t2_f2: "mobile / desktop / tablet", cs_sql_t2_f3: "UTM campaign source",
    cs_sql_t2_f4: "Portal entry page", cs_sql_t2_f5: "Start timestamp",
    cs_sql_t3_f1: "Unique error ID", cs_sql_t3_f2: "Session where it occurred", cs_sql_t3_f3: "Field that caused the error",
    cs_sql_t3_f4: "validation / blocking / timeout", cs_sql_t3_f5: "Error timestamp",
    cs_sql_q1_title: "<i class=\"fas fa-percent\"></i> Query 1 — Conversion Rate of Applications by Product Type",
    cs_sql_q1_kpi: "Canvas B5: +35% conversion",
    cs_sql_q1_desc: "Measures the digital application conversion rate by banking product type (checking account vs. consumer credit), directly validating the +35% conversion KPI declared in <strong>MVP Canvas Block 5</strong> and the project executive summary. Links to Personas Camila and Roberto defined in <strong>Canvas Block 2</strong>.",
    cs_sql_simulated_result: "🟢 Simulated result (sample):",
    cs_sql_q1_r_col1: "product_type", cs_sql_q1_r_col2: "total_applications", cs_sql_q1_r_col3: "approved",
    cs_sql_q1_r_col4: "conversion_rate_pct", cs_sql_q1_r_col5: "prev_month_rate_pct",
    cs_sql_q1_insight: "Insight: +35% growth validated → checking account grew from 41.5% → 56.0% (+35%), consumer credit from 35.6% → 48.0% (+35%).",
    cs_sql_q2_title: "<i class=\"fas fa-filter\"></i> Query 2 — Funnel Analysis: Session → CTA → Form → Approved",
    cs_sql_q2_kpi: "Canvas B6: submit_application_success",
    cs_sql_q2_desc: "Traces the full conversion funnel from portal session to application approval. Validates the <code>submit_application_success</code> event defined in <strong>Canvas Block 6</strong> and steps 3, 4, and 5 of the <strong>Journey (Canvas Block 3)</strong>: Application Intent → Form → Conversion.",
    cs_sql_q2_r_col1: "Step", cs_sql_q2_r_col2: "Count", cs_sql_q2_r_col3: "% Step Conversion",
    cs_sql_q2_step1: "Portal sessions", cs_sql_q2_step2: "Started application",
    cs_sql_q2_step3: "Submitted form", cs_sql_q2_step4: "Application approved",
    cs_sql_q3_title: "<i class=\"fas fa-chart-bar\"></i> Query 3 — Digital Channel vs. Branch: Before & After the Redesign",
    cs_sql_q3_kpi: "Canvas B5: Operational Autonomy",
    cs_sql_q3_desc: "Compares the volume and share of the digital channel versus the in-person channel (branch) before and after the portal redesign. Validates the \"Operational Autonomy\" KPI from <strong>Canvas Block 5</strong> and the impact of the TO-BE flow implemented in <strong>Tab 2</strong>.",
    cs_sql_q3_r_canal: "channel_origin", cs_sql_q3_r_periodo: "period",
    cs_sql_q3_r_total: "total_applications", cs_sql_q3_r_pct: "share_pct",
    cs_sql_q3_antes: "Before Redesign", cs_sql_q3_despues: "After Redesign",
    cs_sql_q3_insight: "Insight: Web channel surpassed branches post-redesign (28.7% → 50.8%), validating Operational Autonomy from Canvas B5.",
    cs_sql_q4_title: "<i class=\"fas fa-exclamation-triangle\"></i> Query 4 — Blocking Form Errors Log by Week",
    cs_sql_q4_kpi: "Canvas B5: 0 blocking defects",
    cs_sql_q4_desc: "Monitors the weekly trend of blocking errors in portal forms, validating the \"Zero blocking defects in production\" KPI from <strong>Canvas Block 5</strong> and the effectiveness of <strong>Epic 3: Testing & Go-Live</strong> in the Roadmap (BIN-301 and BIN-302).",
    cs_sql_q4_r_week: "week", cs_sql_q4_r_field: "form_field",
    cs_sql_q4_r_errors: "total_errors", cs_sql_q4_r_pct: "pct_sessions_with_error",
    cs_sql_q4_insight: "Insight: Downward trend to zero blocking errors confirmed in week 4 post-launch. Canvas B5 \"Zero blocking defects\" KPI validated.",

    // --- Tab 4: Telemetry & Live Dashboard ---
    cs_dash_title: "<i class=\"fas fa-chart-line\"></i> Digital Telemetry & Live Analytics Dashboard",
    cs_dash_badge_ga4: "GA4 & GTM Auto-Tagging",
    cs_dash_badge_clarity: "Microsoft Clarity UX",
    cs_dash_intro: "Real-time telemetry integration for the redesigned public banking portal. The architecture combines automated DataLayer event tagging in Google Tag Manager (GTM), conversion measurement in Google Analytics 4 (GA4), and visual behavior analysis (heatmaps and recordings) in Microsoft Clarity, enabling real-time validation of MVP Canvas adoption hypotheses.",
    cs_dash_gtm_title: "<i class=\"fas fa-tags\"></i> 1. DataLayer Event Architecture in Google Tag Manager",
    cs_dash_gtm_badge: "No-Code Auto-Tagging",
    cs_dash_gtm_desc: "Event schema automatically tagged in GTM without hardcode, implemented via the Auto-Tagging Business Rule defined in the TO-BE flow (Tab 2) to power MVP Canvas metrics (Tab 1):",
    cs_dash_gtm_col_event: "GA4 Event",
    cs_dash_gtm_col_trigger: "GTM Trigger",
    cs_dash_gtm_col_datalayer: "DataLayer Parameters",
    cs_dash_gtm_col_purpose: "Funnel Purpose",
    cs_dash_clarity_title: "<i class=\"fas fa-eye\"></i> 2. User Experience Analysis & Heatmaps (Microsoft Clarity)",
    cs_dash_clarity_badge: "Heatmaps & Session Recording",
    cs_dash_clarity_desc: "Continuous user experience optimization across mobile and desktop devices through anonymized session recordings and interaction heatmaps in Microsoft Clarity:",
    cs_dash_c1_title: "Clickmaps & Hotspots",
    cs_dash_c1_text: "82% of mobile clicks are concentrated above the fold (main CTA and financial installment calculator), confirming the effectiveness of Puck CMS responsive layout.",
    cs_dash_c2_title: "Scroll Depth (Scrollmaps)",
    cs_dash_c2_text: "76% of users scroll down to the requirements and benefits block before initiating the application, validating component visual hierarchy.",
    cs_dash_c3_title: "Zero Rage Clicks in Forms",
    cs_dash_c3_text: "Rage clicks and dead clicks reduced to 0% on mobile after form simplification to 3 steps certified during QA Staging Sandbox phase.",
    cs_dash_embed_title: "<i class=\"fas fa-desktop\"></i> 3. Live Executive Product Dashboard (Native UI)",
    cs_dash_embed_badge: "Nexus Digital Bank Telemetry",
    cs_dash_embed_desc: "The dashboard visualizes real-time public banking portal adoption, consolidating application volume, conversion rate by channel, and device performance:",
    dash_bank_sub: "Product Analytics & Growth Engine",
    dash_opt_post: "Post-Launch (Last 30 Days)",
    dash_opt_compare: "Comparison (Before vs After)",
    dash_opt_all: "All Products",
    dash_opt_checking: "Checking Account",
    dash_opt_credit: "Consumer Credit",
    dash_live_status: "LIVE TELEMETRY",
    dash_kpi1_title: "Digital Applications",
    dash_kpi1_sub: "PostgreSQL (Tab 3)",
    dash_kpi2_title: "Conversion Rate (CR)",
    dash_kpi2_sub: "GA4 submit_success",
    dash_kpi3_title: "Time-to-Publish SLA",
    dash_kpi3_sub: "BPMN TO-BE (Tab 2)",
    dash_kpi4_title: "Friction & Rage Clicks",
    dash_kpi4_sub: "Microsoft Clarity UX",
    dash_panel_funnel_title: "Digital Conversion Funnel (GA4 + GTM Auto-Tagging)",
    dash_panel_channel_title: "Channel Comparison (SQL Tab 3 Data)",
    dash_ch_legacy: "Before (Legacy)",
    dash_ch_tobe: "After (Puck CMS)",
    dash_branch: "Branch",
    dash_web: "Web",
    dash_device_title: "Device (GA4): Mobile vs Desktop",
    cs_dash_expl_title: "<i class=\"fas fa-info-circle\"></i> Dashboard Interpretation & Case Study Coherence",
    cs_dash_expl1_t: "No-Code Auto-Tagging in GTM",
    cs_dash_expl1_d: "Every landing created in Puck CMS (Tab 2) automatically fires DataLayer events (page_view_public, click_apply_now, submit_application_success) to GA4 without developer intervention.",
    cs_dash_expl2_t: "UX Experience Optimization in Clarity",
    cs_dash_expl2_d: "Heatmaps confirm that 82% of interactions occur in the 1st fold. Reduction of rage clicks to 0.0% certifies the elimination of form friction on mobile.",
    cs_dash_expl3_t: "SQL Cross-Validation (PostgreSQL)",
    cs_dash_expl3_d: "GA4 conversion events are cross-referenced against SQL queries from the core banking database (Tab 3), auditing actual web vs branch adoption.",
    cs_ai_title: "<i class=\"fas fa-robot\"></i> Accelerating the Product Lifecycle with Generative AI",
    cs_ai_badge1: "Gemini 1.5 Pro & Rovo AI",
    cs_ai_badge2: "NotebookLM Compliance",
    cs_ai_intro: "Strategic integration of Generative AI tools into the daily workflow of Product Owners and Business Analysts. Adopting Gemini, Atlassian Rovo AI, NotebookLM, and Firebase AI eliminated repetitive tasks, accelerated functional specifications, and increased team delivery velocity without compromising banking regulatory rigor.",
    cs_ai_c1_t: "<i class=\"fas fa-feather-alt\"></i> BDD User Stories & Prototyping (Gemini & Firebase AI)",
    cs_ai_c1_d: "Transforming business requirements into structured BDD User Stories (Given-When-Then) in Jira, and accelerating HTML/CSS component styling for Puck CMS in Staging Sandbox.",
    cs_ai_c2_t: "<i class=\"fas fa-sitemap\"></i> Assisted BPMN 2.0 Diagramming (Rovo AI)",
    cs_ai_c2_d: "Automatic conversion of meeting minutes and requirements in Confluence to Mermaid / PlantUML code to render sequence diagrams and BPMN 2.0 flows in real time.",
    cs_ai_c3_t: "<i class=\"fas fa-brain\"></i> Legal & Compliance Audit (NotebookLM)",
    cs_ai_c3_d: "Accelerated ingestion of financial regulations from CMF/SBIF and internal bank policies. Allows auditing in minutes whether copy and legal disclaimers on landing pages comply with regulations.",
    cs_ai_table_title: "<i class=\"fas fa-tachometer-alt\"></i> Productivity & Operational Efficiency Impact Matrix",
    cs_ai_col_task: "Product / BA Activity",
    cs_ai_col_trad: "Traditional Workflow (No AI)",
    cs_ai_col_ai: "Accelerated Workflow with AI",
    cs_ai_col_gain: "Efficiency Gain",
    cs_ai_row1_task: "<i class=\"fas fa-feather-alt\" style=\"color:#a855f7;\"></i> BDD User Stories & Puck CMS Prototyping",
    cs_ai_row1_trad: "45 min / story & 3 days frontend dev",
    cs_ai_row1_ai: "10 min (Gemini BDD) & 2 hrs Sandbox (Firebase AI)",
    cs_ai_row1_gain: "<span class=\"kpi-badge-success\">-77% to -95% Time</span>",
    cs_ai_row2_task: "<i class=\"fas fa-sitemap\" style=\"color:#38bdf8;\"></i> BPMN 2.0 & Sequence Diagramming",
    cs_ai_row2_trad: "4 hours manual Visio/Lucid editing",
    cs_ai_row2_ai: "20 min (Rovo AI + Auto Mermaid code)",
    cs_ai_row2_gain: "<span class=\"kpi-badge-success\">-91% Diagramming Time</span>",
    cs_ai_row3_task: "<i class=\"fas fa-brain\" style=\"color:#34d399;\"></i> CMF Regulatory Audit / Legal Compliance",
    cs_ai_row3_trad: "2 business days manual legal review",
    cs_ai_row3_ai: "15 min (NotebookLM Ingestion & Q&A)",
    cs_ai_row3_gain: "<span class=\"kpi-badge-success\">-98% Compliance Cycle</span>",
    cs_ai_jira_title: "<i class=\"fab fa-jira\"></i> Real Example: Given-When-Then Acceptance Criteria Generation",
    cs_ai_jira_desc: "Sample structured prompt and output generated by Gemini for a banking portal User Story:",
    cs_ai_prompt_lbl: "<i class=\"fas fa-comment-alt\"></i> Input Prompt (PO / BA)",
    cs_ai_prompt_txt: "\"Act as Senior Financial BA. Generate 3 BDD criteria (Given-When-Then) for the 'Digital Checking Account Opening' story on mobile when the user fails passcode validation.\"",
    cs_ai_out_lbl: "<i class=\"fas fa-check-circle\"></i> Generated BDD Criteria (Jira Ready)",
    cs_ai_out_code: "<span class=\"sql-keyword\">SCENARIO</span>: Passcode validation error\n<span class=\"sql-func\">GIVEN</span> user is on Step 2 of the form\n<span class=\"sql-func\">WHEN</span> enters an incorrect passcode for the 3rd time\n<span class=\"sql-keyword\">THEN</span> system triggers form_validation_error event\n<span class=\"sql-keyword\">AND</span> temporarily locks attempt showing help option",
    dash_funnel_s1: "1. Page View (page_view_public)",
    dash_funnel_s2: "2. Intent CTA Click (click_apply_now)",
    dash_funnel_s3: "3. Form Fill Start (start_form_fill)",
    dash_funnel_s4: "4. Submitted Application (submit_application_success)",
    cs_ai_c1_badge: "-77% Time",
    cs_ai_c2_badge: "-91% Time",
    cs_ai_c3_badge: "-98% Time",

    // --- Projects Page Content ---
    projects_page_title: "Projects",
    projects_list: [
        { id: "project-digital-banking", title: "Digital Product Redesign & Analytics", description: "End-to-end case study of a public banking portal redesign, featuring MVP Canvas, BPMN 2.0, PostgreSQL queries, and GA4 telemetry.", link: "projects/digital-banking-redesign.html", imageUrl: "assets/img/digital-banking-cover.webp", buttonText: "View Case Study", tool: "all", type: "case-study" },
        { id: "project-exchange-rate", title: "Exchange Rate Evolution", description: "Real-time tracking of USD, EUR, and GBP against the Chilean Peso.", link: "projects/exchange-rate-evolution.html", imageUrl: "assets/img/exchange-rate-cover.webp", buttonText: "View Project", tool: "powerbi", type: "dashboard" },
        { id: "project-pokedex", title: "Interactive Pokédex", description: "An interactive dashboard with data from over 1,000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.webp", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-unemployment", title: "Unemployment in America", description: "Analysis of unemployment trends across U.S. states and metro areas.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.webp", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-financial-inclusion", title: "Global Financial Inclusion", description: "Visualizing global trends in account ownership and borrowing behaviors.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.webp", buttonText: "View Project", tool: "looker", type: "dashboard" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "Tracking Near-Earth Objects with NASA's API.", link: "projects/neo-tracker.html", imageUrl: "assets/img/neo-tracker-cover.webp", buttonText: "View Project", tool: "powerbi", type: "dashboard" }
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
    kpiDashboards: "Dashboards & Reportes BI",
    kpiReports: "Impacto Transversal",
    kpiAutomation: "Modelado & Analítica",
    filterAll: "Todos los Proyectos",
    filterCaseStudy: "Casos de Estudio",
    filterPowerBI: "Power BI",
    filterLooker: "Looker Studio",

    // --- Section Tag Pills & Buttons ---
    tagIntroduce: "PERMÍTEME PRESENTARME",
    tagImpact: "GENERACIÓN DE VALOR E IMPACTO",
    tagWork: "PROYECTOS DESTACADOS",
    btnContact: "Contáctame",
    btnDownloadCV: "Descargar CV",

    // --- Index Page Content ---
    heroTitle: "Data, BI & Business Analyst | Product Specialist",
    heroSubtitle: "Conecto la analítica de datos (SQL, Power BI, Looker Studio), el modelado de negocios (BPMN 2.0, BDD), la gestión de productos digitales e IA Generativa para tomar decisiones estratégicas.",
    btnProjects: "Ver Proyectos",
    btnResume: "Ver CV",
    aboutTitle: "Sobre mí",
    aboutContent: `<p>Soy <strong>Benjamín Espinoza</strong>, Ingeniero Civil Industrial especializado en <strong>Análisis de Datos, Inteligencia de Negocios, Análisis de Negocios y Estrategia de Productos Digitales</strong>. A lo largo de mi trayectoria profesional en el sector financiero (Banco Internacional), retail e industrial (Lucas Diesel, Heavenward Elevators), he construido un perfil versátil que equilibra cuatro disciplinas fundamentales: <strong>Data Analyst, BI Analyst, Business Analyst (BA) y Product Specialist (PO Target)</strong>.</p>

<p>Mi fortaleza radica en transformar volúmenes de datos complejos en decisiones estratégicas y productos escalables: escribo consultas avanzadas en <strong>SQL</strong>, extraigo, modelo y transformo datos para la creación de dashboards, diseño la arquitectura de KPIs y construyo tableros interactivos ejecutivos y operacionales en <strong>Power BI, Looker Studio y Tableau</strong>.</p>

<p>Al mismo tiempo, conecto la visión de negocio con la ejecución tecnológica liderando el descubrimiento y especificación funcional en triadas ágiles (PO, Tech Lead, BA): redacto historias BDD (<em>Given-When-Then</em>) en Jira/Confluence, modelo flujos operacionales levantando procesos en <strong>BPMN 2.0</strong>, audito cumplimiento normativo CMF y mido la conversión con <strong>GA4, GTM y Microsoft Clarity</strong>. Adicionalmente, soy pionero en la integración diaria de <strong>IA Generativa (Gemini, NotebookLM, Rovo AI)</strong> para acelerar la entrega de valor.</p>`,
    impactTitle: "Cómo He Generado Impacto",
    impacts: [{
      icon: "fa-database",
      title: "Analítica de Datos & Consultas SQL",
      text: "Extraje insights ejecutando consultas SQL avanzadas en PostgreSQL, estructurando modelos dimensionales y automatizando flujos ETL."
    }, {
      icon: "fa-chart-pie",
      title: "Tableros BI & Reportabilidad Ejecutiva",
      text: "Diseñé y desplegué más de 50 dashboards interactivos en Power BI y Looker Studio con métricas DAX y Power Query para la toma de decisiones."
    }, {
      icon: "fa-project-diagram",
      title: "Ingeniería de Procesos & Requerimientos BA",
      text: "Modelé flujos operacionales AS-IS y TO-BE con BPMN 2.0, redacté Historias de Usuario BDD en Jira y audité el cumplimiento normativo."
    }, {
      icon: "fa-bullseye",
      title: "Estrategia de Producto & Triadas Ágiles",
      text: "Facilité la alineación negocio-tecnología en triadas ágiles (PO, Tech Lead, BA), definiendo MVP Canvases, administración Puck CMS y GA4."
    }],
    projectsTitle: "Proyectos Destacados",
    projects: [
        { id: "project-digital-banking", title: "Rediseño Digital & Analítica de Producto", description: "Caso de estudio de extremo a extremo de rediseño de portal bancario público con MVP Canvas, BPMN 2.0, SQL en PostgreSQL y GA4.", imageUrl: "assets/img/digital-banking-cover.webp", link: "projects/digital-banking-redesign.html", buttonText: "Ver Caso de Estudio", tool: "all", type: "case-study" },
        { id: "project-exchange-rate", title: "Evolución del Tipo de Cambio", description: "Un dashboard en Power BI que monitorea las principales divisas frente al CLP, actualizado automáticamente vía API del Banco Central.", imageUrl: "assets/img/exchange-rate-cover.webp", link: "projects/exchange-rate-evolution.html", buttonText: "Ver Proyecto", tool: "powerbi", type: "dashboard" },
        { id: "project-pokedex", title: "Pokédex Interactiva", description: "Una Pokédex Nacional de 1,025 Pokémon construida conectándose a la PokéAPI con Apps Script.", imageUrl: "assets/img/pokedex-cover.webp", link: "projects/pokedex-dashboard.html", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-unemployment", title: "Análisis de Desempleo en EE.UU.", description: "Explora tendencias de desempleo en EE.UU. a nivel estatal y metropolitano mediante dashboards interactivos.", imageUrl: "assets/img/us-unemployment-cover.webp", link: "projects/US-Unemployment.html", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-financial-inclusion", title: "Inclusión Financiera Global", description: "Visualiza tendencias globales de titularidad de cuentas y comportamiento de crédito por región, ingreso y demografía.", imageUrl: "assets/img/global-financial-inclusion-cover.webp", link: "projects/global-financial-inclusion.html", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "Un dashboard automatizado que se conecta a la API de la NASA para rastrear Objetos Cercanos a la Tierra de los últimos 7 días.", imageUrl: "assets/img/neo-tracker-cover.webp", link: "projects/neo-tracker.html", buttonText: "Ver Proyecto", tool: "powerbi", type: "dashboard" }
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
        { type: 'education', date: "2025", title: "Diplomado Internacional en Transformación Digital", company: "Digital Bank LATAM", url: "https://www.digitalbankla.com", logo: "assets/img/logos/digital-bank-latam.webp", description: `<p class="timeline-desc">Formación ejecutiva orientada a la innovación bancaria, ecosistemas Fintech, adopción de tecnologías emergentes y rediseño de modelos de negocio digitales en LATAM.</p>` },
        { type: 'education', date: "2022", title: "Diplomado en Diseño y Programación Web", company: "Fundación Telefónica & AIEP", url: "https://www.fundaciontelefonica.cl", logo: "assets/img/logos/telefonica-aiep.webp", description: `<p class="timeline-desc">Especialización en desarrollo frontend con HTML, CSS, JavaScript, maquetación responsive, principios de UX/UI y diseño de interfaces web modernas.</p>` },
        { type: 'education', date: "2022", title: "Programa universitario introductorio", company: "BYU PathwayConnect", url: "https://www.byupathway.edu", logo: "assets/img/logos/byu.webp", description: `<p class="timeline-desc">Programa universitario internacional enfocado en gestión de proyectos, habilidades de comunicación académica y profesional en inglés y desarrollo de liderazgo.</p>` },
        { type: 'education', date: "2013–2020", title: "Ingeniería Civil Industrial", company: "Universidad de Valparaíso", url: "https://uv.cl", logo: "assets/img/logos/uv.webp", description: `<p class="timeline-desc">Formación profesional en optimización de procesos, gestión de operaciones, evaluación de proyectos de inversión, ingeniería financiera y análisis cuantitativo para la toma de decisiones.</p>` }
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
          "Strapi 5 & Puck CMS (React)",
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

    // --- CASE STUDY DIGITAL BANKING ---
    cs_hero_title: "Rediseño Digital & Analítica de Producto: Banca Pública",
    cs_hero_subtitle: "Transformación de extremo a extremo de la plataforma pública bancaria. Integración de gestión de producto ágil (MVP Canvas & User Stories), modelamiento de procesos BPMN 2.0, arquitectura de datos en PostgreSQL, administración con Strapi 5 + Puck CMS y analítica digital avanzada (GA4 / Clarity).",
    cs_sum1_title: "El Desafío de Negocio",
    cs_sum1_desc: "El portal web público legacy presentaba altas tasas de abandono en solicitudes de productos (cuentas/créditos), rigidez operativa para publicar campañas comerciales y falta de telemetría de eventos de usuario.",
    cs_sum2_title: "La Solución de Producto",
    cs_sum2_desc: "Liderazgo de triada ágil para migrar a un frontend visual No-Code con Puck CMS conectado a Strapi 5 (Headless CMS), maquetación apoyada en IA (Firebase), pruebas QA funcionales en Staging y etiquetado GTM completo.",
    cs_sum3_title: "Impacto Cuantitativo",
    cs_sum3_desc: "+35% en conversión de solicitudes digitales, reducción de tiempo de publicación web de semanas a minutos y 100% de calidad probada previo a despliegue productivo.",
    cs_tab_po: "1. Estrategia PO (MVP & Stories)",
    cs_tab_bpmn: "2. Procesos BPMN 2.0",
    cs_tab_sql: "3. Arquitectura SQL (PostgreSQL)",
    cs_tab_dashboard: "4. Telemetría & Dashboard",
    cs_tab_genai: "5. Aceleración con GenAI",
    cs_mvp_title: "MVP Canvas Oficial (Estándar de 7 Bloques)",
    cs_mvp_subtitle: "Estructura oficial del MVP Canvas para validar las hipótesis de negocio, definir los viajes de usuario, las funcionalidades mínimas y el cronograma de ejecución:",
    cs_mvp_b1_title: "Propuesta de MVP",
    cs_mvp_b1_text: "Rediseño de la plataforma web pública bancaria implementando arquitectura desacoplada Strapi 5 (Headless CMS) + Puck CMS React, maquetación asistida por IA (Firebase) y telemetría en tiempo real (GA4 / Clarity), permitiendo publicar landing pages comerciales en minutos con 100% de calidad aprobada en QA.",
    cs_mvp_b2_title: "Personas Segmentadas",
    cs_mvp_b2_text: "<ul><li><strong>Persona 1 (Camila / 32 yrs):</strong> Busca apertura de cuenta corriente y evaluación de crédito de consumo 100% digital desde smartphone.</li><li><strong>Persona 2 (Roberto / 45 yrs):</strong> Requiere financiamiento comercial e información de inversión corporativa clara y ágil.</li><li><strong>Persona 3 (Equipo de Marketing & Comercial):</strong> Dueños de producto y campaña que necesitan autonomía para lanzar landing pages sin depender del backlog dev.</li></ul>",
    cs_mvp_b3_title: "Viajes de Usuario",
    cs_mvp_b3_text: "<ul><li><strong>1. Descubrimiento:</strong> Usuario ingresa a landing pública desde campaña digital o búsqueda orgánica.</li><li><strong>2. Navegación Intuitiva y Fluida:</strong> Interacción sencilla en componentes responsive y simuladores financieros.</li><li><strong>3. Intención de Solicitud:</strong> Clic en CTA principal (<code>click_apply_now</code>) capturado en GTM.</li><li><strong>4. Formulario & QA:</strong> Llenado optimizado en 3 pasos con validaciones funcionales certificadas.</li><li><strong>5. Conversión:</strong> Confirmación de solicitud exitosa registrada en GA4 y dashboard en vivo.</li></ul>",
    cs_mvp_b4_title: "Funcionalidades",
    cs_mvp_b4_text: "<ul><li>Editor visual Drag-and-Drop No-Code (Puck CMS) conectado a Strapi 5 (Headless CMS).</li><li>Maquetación rápida apoyada en IA Generativa (Firebase / Gemini).</li><li>Etiquetado automático de eventos en Google Tag Manager (GTM) y GA4.</li><li>Mapas de calor y grabación de sesiones anonimizadas (Microsoft Clarity).</li><li>Matriz de Pruebas Funcionales QA en ambiente Staging previo a producción.</li></ul>",
    cs_mvp_b5_title: "Resultado Esperado",
    cs_mvp_b5_text: "<ul><li><strong>+35% de incremento</strong> en la tasa de conversión de solicitudes de productos digitales.</li><li><strong>Reducción de Time-to-Market:</strong> Tiempo de publicación web reducido de 2 semanas a solo 15 minutos.</li><li><strong>Cero defectos bloqueantes:</strong> Garantía del 100% de calidad en producción mediante certificación QA en Staging.</li><li><strong>Autonomía Operativa:</strong> Capacidad total del equipo de producto/marketing para lanzar campañas comerciales.</li></ul>",
    cs_mvp_b6_title: "Métricas para Validar Hipótesis",
    cs_mvp_b6_text: "<ul><li><strong>Conversion Rate (CR):</strong> <code>% de sesiones que completan la solicitud (submit_application_success)</code>.</li><li><strong>Time-to-Publish (TTP):</strong> <code>Minutos requeridos para crear y publicar una landing en Strapi 5 / Puck CMS</code>.</li><li><strong>Bounce Rate Mobile:</strong> <code>Tasa de rebote en móviles monitoreada con Clarity</code>.</li><li><strong>Feature Adoption:</strong> <code>% de interacción con simuladores y CTAs principales</code>.</li></ul>",
    cs_mvp_b7_title: "Costo y Cronograma",
    cs_mvp_b7_text: "<ul><li><strong>Cronograma:</strong> 6 Sprints ágiles de 2 semanas (12 semanas totales) operando en triada (PO, Tech Lead, BA + Developers).</li><li><strong>Costo Operativo:</strong> Optimizado reutilizando la suite existente del banco (GCP / Google Cloud Suite: GA4, GTM, Looker Studio, Firebase; Jira, Confluence, Strapi 5).</li></ul>",
    cs_usm_matrix_title: "User Story Map: Matriz Visual de Producto",
    cs_usm_matrix_desc: "Mapa de viaje del producto estructurado en 4 Actividades Estratégicas (Backbone) con sus tareas y pasos de flujo (Steps) ordenados verticalmente:",
    cs_usm_act1: "<i class=\"fas fa-paint-brush\"></i> 1. Diseño UX & Prototipado",
    cs_usm_st11: "Maquetación de componentes en Firebase.",
    cs_usm_st12: "Creación de la maqueta funcional del nuevo sitio.",
    cs_usm_st13: "Diseño de formato Mobile y Responsive.",
    cs_usm_st14: "Diseño de herramientas de accesibilidad (WCAG).",
    cs_usm_st15: "Levantamiento de imágenes y contenido para salida a producción.",
    cs_usm_act2: "<i class=\"fas fa-code\"></i> 2. Arquitectura Puck & Strapi 5",
    cs_usm_st21: "Desarrollo duro de componentes visuales en Puck CMS.",
    cs_usm_st22: "Implementación de Puck y conexión API con Strapi 5 (Headless CMS).",
    cs_usm_st23: "Creación de páginas precargadas en Puck para salida ágil.",
    cs_usm_st24: "Implementación de telemetría: GA4, Google Tag Manager y Clarity.",
    cs_usm_act3: "<i class=\"fas fa-vial\"></i> 3. Pruebas & Pase a Producción",
    cs_usm_st31: "Ejecución de Matriz de Pruebas Funcionales QA en Staging.",
    cs_usm_st32: "Validación de formularios y prevención de errores bloqueantes.",
    cs_usm_st33: "Firma de acta de certificación QA y despliegue a Producción.",
    cs_usm_act4: "<i class=\"fas fa-sliders-h\"></i> 4. Operación Continua Puck",
    cs_usm_st41: "Creación y modificación de páginas a través del administrador Puck.",
    cs_usm_st42: "Creación de perfiles y permisos para usuarios estratégicos (Marketing/Comercial).",
    cs_usm_st43: "Tagueo de métricas clave y eventos de campaña en GTM.",
    cs_usm_title: "Backlog Priorizado del Producto (Jira / Confluence)",
    cs_usm_desc: "Historias de Usuario del Backlog priorizadas por Épicas, con estimación en Puntos de Historia (Story Points), priorización MoSCoW y Criterios de Aceptación BDD (Given-When-Then):",
    cs_usm_b101_desc: "<strong>Como UX Designer</strong>, quiero maquetar los componentes visuales en Firebase y validar el prototipo funcional responsive antes del desarrollo.",
    cs_usm_b101_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Requerimientos de producto definidos.<br>• <i>When:</i> Se arma el prototipo funcional en Firebase.<br>• <i>Then:</i> La triada aprueba la maquetación responsive.",
    cs_usm_b102_desc: "<strong>Como PO</strong>, quiero asegurar herramientas de accesibilidad (WCAG) y el levantamiento de contenido inicial para salida a producción.",
    cs_usm_b102_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Componentes UI maquetados.<br>• <i>When:</i> Se aplican contrastes e imágenes finales.<br>• <i>Then:</i> Se cumple la norma de accesibilidad WCAG AA.",
    cs_usm_b201_desc: "<strong>Como Lead Developer</strong>, quiero desarrollar los componentes visuales en Puck CMS y conectarlos por API a Strapi 5 para publicar páginas en minutos.",
    cs_usm_b201_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Usuario autenticado en editor Puck CMS.<br>• <i>When:</i> Publica bloques de contenido visual.<br>• <i>Then:</i> API Strapi 5 actualiza producción en < 15 min.",
    cs_usm_b202_desc: "<strong>Como Business Analyst</strong>, quiero implementar la telemetría (GA4, GTM, Clarity) para registrar conversiones y mapas de calor.",
    cs_usm_b202_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Tag global GTM instalado.<br>• <i>When:</i> El usuario interactúa con simuladores/CTAs.<br>• <i>Then:</i> GA4 registra conversiones y Clarity captura mapas.",
    cs_usm_b301_desc: "<strong>Como Business Analyst</strong>, quiero ejecutar la matriz de Pruebas Funcionales QA en Staging para prevenir errores bloqueantes.",
    cs_usm_b301_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Landing publicada en Staging.<br>• <i>When:</i> Se ejecuta 100% de matriz de casos de prueba.<br>• <i>Then:</i> Certificación funcional aprobada sin incidencias.",
    cs_usm_b302_desc: "<strong>Como PO</strong>, quiero contar con la firma digital del acta QA para autorizar el pase automático a Producción.",
    cs_usm_b302_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Matriz QA aprobada en Staging.<br>• <i>When:</i> Se firma el acta de pase a producción.<br>• <i>Then:</i> Pipeline desata el despliegue productivo.",
    cs_usm_b401_desc: "<strong>Como Product Owner</strong>, quiero administrar Puck CMS y gestionar perfiles/permisos para otorgar autonomía al equipo comercial.",
    cs_usm_b401_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Usuario de marketing requiere crear campana.<br>• <i>When:</i> Se asigna rol Editor Comercial en Puck.<br>• <i>Then:</i> Puede crear/editar páginas con total autonomía.",
    cs_usm_b402_desc: "<strong>Como Business Analyst</strong>, quiero taguear métricas clave y eventos de campañas promocionales en GTM de forma ágil.",
    cs_usm_b402_ac: "<strong>Criterios de Aceptación (BDD):</strong><br>• <i>Given:</i> Nueva campaña creada en Puck.<br>• <i>When:</i> Se define la métrica principal.<br>• <i>Then:</i> Trigger GTM registrado y midiendo conversiones.",
    cs_roadmap_title: "<i class=\"fas fa-map-signs\"></i> Roadmap Estratégico del Producto (Quarterly Timeline - 6 Sprints)",
    cs_roadmap_tag: "<i class=\"fas fa-calendar-alt\"></i> Cronograma de 12 Semanas (Triada Ágil)",
    cs_roadmap_desc: "Cronograma visual de entregas secuenciales organizado por Épicas del Backlog, Sprints y Tiempos Estimados para el rediseño del portal público bancario (5 Páginas del MVP):",
    cs_rm_col_epics: "<i class=\"fas fa-layer-group\"></i> Épicas del Backlog",
    cs_rm_col_m1: "<i class=\"fas fa-clock\"></i> Mes 1: Sprints 1-2<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Semanas 1 a 4)</span>",
    cs_rm_col_m2: "<i class=\"fas fa-clock\"></i> Mes 2: Sprints 3-4<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Semanas 5 a 8)</span>",
    cs_rm_col_m3: "<i class=\"fas fa-clock\"></i> Mes 3: Sprints 5-6<br><span style=\"font-size:0.72rem; color:#94a3b8;\">(Semanas 9 a 12)</span>",
    cs_rm_e1_title: "<i class=\"fas fa-paint-brush\"></i> Épica 1: UX & Prototipado",
    cs_rm_e1_sub: "Firebase & Maquetación (8 SP)",
    cs_rm_e1_b1: "BIN-101: Maquetación Firebase & Prototipo Funcional (5 SP)",
    cs_rm_e1_b2: "BIN-102: Accesibilidad WCAG AA & Contenido Inicial (3 SP)",
    cs_rm_e1_time: "<i class=\"fas fa-clock\"></i> Tiempo Estimado: Semanas 1 a 4",
    cs_rm_e2_title: "<i class=\"fas fa-code\"></i> Épica 2: Puck & Strapi 5",
    cs_rm_e2_sub: "CMS & Telemetría Core (16 SP)",
    cs_rm_e2_b1: "BIN-201: Componentes Puck CMS & API Strapi 5 (11 SP)",
    cs_rm_e2_b2: "BIN-202: Telemetría (GA4, GTM & Clarity) (5 SP)",
    cs_rm_e2_time1: "<i class=\"fas fa-clock\"></i> Tiempo Estimado: Semanas 3 a 8",
    cs_rm_e3_title: "<i class=\"fas fa-vial\"></i> Épica 3: Pruebas & Pase Prod",
    cs_rm_e3_sub: "Calidad QA & Despliegue (8 SP)",
    cs_rm_e3_b1: "BIN-301: Matriz Pruebas Funcionales QA Staging (5 SP)",
    cs_rm_e3_b2: "BIN-302: Firma Acta Certificación QA & Go-Live (3 SP)",
    cs_rm_e3_time: "<i class=\"fas fa-clock\"></i> Tiempo Estimado: Semanas 9 a 10",
    cs_rm_e4_title: "<i class=\"fas fa-sliders-h\"></i> Épica 4: Operación Continua",
    cs_rm_e4_sub: "Autonomía Comercial (8 SP)",
    cs_rm_e4_b1: "BIN-401: Administración Puck & Roles Comercial (5 SP)",
    cs_rm_e4_b2: "BIN-402: Tagueo Métricas de Campaña GTM (3 SP)",
    cs_rm_e4_time: "<i class=\"fas fa-clock\"></i> Tiempo Estimado: Semanas 11 a 12",
    btnBackProjects: "Volver a Proyectos",
    accExpandAll: "Expandir Todas las Tarjetas",
    accCollapseAll: "Contraer Todas las Tarjetas",
    cs_scroll_hint: "<i class=\"fas fa-arrows-left-right\"></i> Desliza horizontalmente para ver el cronograma completo de 12 semanas",
    cs_flagship_badge: "Caso de Estudio Insignia",
    cs_mvp_standardized_badge: "Matriz Estandarizada de 7 Bloques",

    cs_bpmn_summary_title: "<i class=\"fas fa-tachometer-alt\"></i> Ficha de Reingeniería & Matriz Comparativa de KPIs (AS-IS vs. TO-BE)",
    cs_bpmn_summary_desc: "Resumen ejecutivo del impacto directo de la reingeniería de procesos en el ciclo de publicación del portal público bancario (5 Páginas del MVP):",
    cs_bpmn_asis_title: "<i class=\"fas fa-exclamation-triangle\"></i> Proceso Actual (AS-IS): Cuello de Botella en Desarrollo TI",
    cs_bpmn_asis_desc: "Modelamiento en estándar BPMN 2.0 del flujo tradicional. Los cambios de landing pages dependen 100% de la capacidad de desarrollo duro y ventanas nocturnas de mantenimiento:",
    cs_bpmn_tobe_title: "<i class=\"fas fa-rocket\"></i> Proceso Propuesto (TO-BE): Autonomía Comercial No-Code con Puck CMS",
    cs_bpmn_tobe_desc: "Modelamiento en estándar BPMN 2.0 del flujo optimizado. El Editor Comercial compone landings visualmente en minutos y el Product Owner aprueba en Staging Sandbox previo a la sincronización instantánea:",
    cs_bpmn_gov_title: "<i class=\"fas fa-shield-alt\"></i> Matriz de Gobernanza, Roles RBAC & Reglas de Negocio BPMN",
    cs_bpmn_gov_desc: "Definición formal de perfiles de acceso (Role-Based Access Control) y políticas de validación para operar el nuevo modelo de procesos sin comprometer la seguridad bancaria:",
    cs_bpmn_asis_sla: "SLA: 14 a 21 Días Hábiles",
    cs_bpmn_tobe_sla: "SLA: 15 Minutos",
    cs_bpmn_scroll_hint: "Desliza horizontalmente para navegar el diagrama BPMN 2.0 en tamaño completo",
    cs_bpmn_gov_change_ctrl: "Control de Cambios",
    cs_bpmn_gov_rbac_title: "1. Matriz de Permisos RBAC en Puck Admin & Strapi 5",
    cs_bpmn_gov_rbac_r1: "<strong>Editor Comercial (Marketing / Producto):</strong> Permiso de creación y modificación visual de textos, imágenes y banners únicamente sobre los componentes precargados en las 5 páginas del MVP. Sin acceso a modificar código duro ni infraestructura.",
    cs_bpmn_gov_rbac_r2: "<strong>Product Owner / QA Certifier:</strong> Permiso exclusivo de aprobación final del Gate de Staging Sandbox y ejecución del pase a producción en 1-Click.",
    cs_bpmn_gov_rbac_r3: "<strong>Lead Developer / TI:</strong> Administración de componentes React base en Puck, definición de esquemas de datos en Strapi 5 y mantenimiento del pipeline CI/CD.",
    cs_bpmn_gov_rules_title: "2. Reglas de Negocio del Proceso BPMN 2.0",
    cs_bpmn_gov_rule1: "<strong>Regla 1 (Quality Gate Obligatorio):</strong> Ninguna campaña o modificación puede pasar a producción sin previa vista previa y aprobación explícita en el ambiente Sandbox Staging.",
    cs_bpmn_gov_rule2: "<strong>Regla 2 (Auto-Tagueo de Analítica):</strong> Toda nueva landing o botón publicado vía Puck CMS aplica automáticamente las etiquetas DataLayer en GTM para seguimiento de conversiones en GA4 y mapas de calor en Clarity sin requerir tagueo manual.",

    // --- Tab 3: Arquitectura SQL ---
    cs_sql_title: "<i class=\"fas fa-database\"></i> Arquitectura de Datos & Consultas SQL en PostgreSQL",
    cs_sql_badge_pg: "PostgreSQL",
    cs_sql_badge_link: "Valida Canvas B5 & B6",
    cs_sql_intro: "El proceso redise\u00f1ado (Tab 2) genera solicitudes de productos digitales que quedan registradas en la base de datos interna del banco en PostgreSQL. Las siguientes consultas validan si el KPI declarado en el MVP Canvas \u2014<strong style=\"color:#00e676;\">+35% de conversi\u00f3n de solicitudes digitales</strong>\u2014 se cumpli\u00f3, utilizando tres tablas del sistema de productos bancario.",
    cs_sql_schema_title: "<i class=\"fas fa-sitemap\"></i> Esquema de Tablas del Sistema de Productos (PostgreSQL)",
    cs_sql_schema_badge: "3 Tablas Core",
    cs_sql_schema_desc: "Modelo simplificado de las tres tablas del sistema bancario interno utilizadas para medir la adopci\u00f3n del canal digital y el impacto del redise\u00f1o del portal:",
    cs_sql_t1_desc: "Registro de cada solicitud de producto enviada desde el portal web.",
    cs_sql_t2_desc: "Sesi\u00f3n de usuario en el portal p\u00fablico con su contexto de dispositivo y campa\u00f1a.",
    cs_sql_t3_desc: "Log de errores de validaci\u00f3n capturados en los formularios del portal durante el proceso de solicitud.",
    cs_sql_col_field: "Campo",
    cs_sql_col_type: "Tipo",
    cs_sql_col_desc: "Descripci\u00f3n",
    cs_sql_t1_f1: "ID \u00fanico", cs_sql_t1_f2: "cuenta / cr\u00e9dito", cs_sql_t1_f3: "web / sucursal / app",
    cs_sql_t1_f4: "iniciada / enviada / aprobada", cs_sql_t1_f5: "Fecha y hora UTC", cs_sql_t1_f6: "Enlace a sesi\u00f3n web",
    cs_sql_t2_f1: "ID \u00fanico de sesi\u00f3n", cs_sql_t2_f2: "mobile / desktop / tablet", cs_sql_t2_f3: "Fuente de campa\u00f1a UTM",
    cs_sql_t2_f4: "P\u00e1gina de entrada al portal", cs_sql_t2_f5: "Timestamp de inicio",
    cs_sql_t3_f1: "ID \u00fanico de error", cs_sql_t3_f2: "Sesi\u00f3n donde ocurri\u00f3", cs_sql_t3_f3: "Campo que gener\u00f3 el error",
    cs_sql_t3_f4: "validaci\u00f3n / bloqueante / timeout", cs_sql_t3_f5: "Timestamp del error",
    cs_sql_q1_title: "<i class=\"fas fa-percent\"></i> Query 1 \u2014 Tasa de Conversi\u00f3n de Solicitudes por Tipo de Producto",
    cs_sql_q1_kpi: "Canvas B5: +35% conversi\u00f3n",
    cs_sql_q1_desc: "Mide la tasa de conversi\u00f3n de solicitudes digitales por tipo de producto bancario (cuenta corriente vs. cr\u00e9dito de consumo), validando directamente el KPI de +35% de conversi\u00f3n declarado en el <strong>MVP Canvas Bloque 5</strong> y en el resumen ejecutivo del proyecto. Conecta con las Personas Camila y Roberto definidas en el <strong>Canvas Bloque 2</strong>.",
    cs_sql_simulated_result: "\uD83D\uDFE2 Resultado simulado (muestra):",
    cs_sql_q1_r_col1: "tipo_producto", cs_sql_q1_r_col2: "total_solicitudes", cs_sql_q1_r_col3: "aprobadas",
    cs_sql_q1_r_col4: "tasa_conversion_pct", cs_sql_q1_r_col5: "tasa_mes_anterior_pct",
    cs_sql_q1_insight: "Insight: +35% de incremento validado \u2192 cuenta corriente creci\u00f3 de 41.5% \u2192 56.0% (+35%), cr\u00e9dito de consumo de 35.6% \u2192 48.0% (+35%).",
    cs_sql_q2_title: "<i class=\"fas fa-filter\"></i> Query 2 \u2014 An\u00e1lisis de Embudo: Sesi\u00f3n \u2192 CTA \u2192 Formulario \u2192 Aprobada",
    cs_sql_q2_kpi: "Canvas B6: submit_application_success",
    cs_sql_q2_desc: "Traza el embudo de conversi\u00f3n de extremo a extremo, desde la sesi\u00f3n en el portal hasta la aprobaci\u00f3n de la solicitud. Valida el evento <code>submit_application_success</code> definido en el <strong>Canvas Bloque 6</strong> y los pasos 3, 4 y 5 del <strong>Journey (Canvas Bloque 3)</strong>: Intenci\u00f3n de Solicitud \u2192 Formulario \u2192 Conversi\u00f3n.",
    cs_sql_q2_r_col1: "Paso", cs_sql_q2_r_col2: "Cantidad", cs_sql_q2_r_col3: "% Conversi\u00f3n del paso",
    cs_sql_q2_step1: "Sesiones en portal", cs_sql_q2_step2: "Iniciaron solicitud",
    cs_sql_q2_step3: "Enviaron formulario", cs_sql_q2_step4: "Solicitud aprobada",
    cs_sql_q3_title: "<i class=\"fas fa-chart-bar\"></i> Query 3 \u2014 Canal Digital vs. Sucursal: Antes y Despu\u00e9s del Redise\u00f1o",
    cs_sql_q3_kpi: "Canvas B5: Autonom\u00eda Operativa",
    cs_sql_q3_desc: "Compara el volumen y participaci\u00f3n del canal digital frente al canal presencial (sucursal) antes y despu\u00e9s del redise\u00f1o del portal. Valida el KPI de \"Autonom\u00eda Operativa\" del <strong>Canvas Bloque 5</strong> y el impacto del flujo TO-BE implementado en la <strong>Tab 2</strong>.",
    cs_sql_q3_r_canal: "canal_origen", cs_sql_q3_r_periodo: "periodo",
    cs_sql_q3_r_total: "total_solicitudes", cs_sql_q3_r_pct: "participacion_pct",
    cs_sql_q3_antes: "Antes del Redise\u00f1o", cs_sql_q3_despues: "Despu\u00e9s del Redise\u00f1o",
    cs_sql_q3_insight: "Insight: El canal web super\u00f3 a sucursal post-redise\u00f1o (28.7% \u2192 50.8%), validando la Autonom\u00eda Operativa del Canvas B5.",
    cs_sql_q4_title: "<i class=\"fas fa-exclamation-triangle\"></i> Query 4 \u2014 Logs de Errores Bloqueantes en Formularios por Semana",
    cs_sql_q4_kpi: "Canvas B5: 0 defectos bloqueantes",
    cs_sql_q4_desc: "Monitorea la tendencia semanal de errores bloqueantes en los formularios del portal, validando el KPI de \"Cero defectos bloqueantes en producci\u00f3n\" del <strong>Canvas Bloque 5</strong> y la efectividad de la <strong>\u00c9pica 3: Pruebas & Pase a Producci\u00f3n</strong> del Roadmap (BIN-301 y BIN-302).",
    cs_sql_q4_r_week: "semana", cs_sql_q4_r_field: "campo_formulario",
    cs_sql_q4_r_errors: "total_errores", cs_sql_q4_r_pct: "pct_sesiones_con_error",
    cs_sql_q4_insight: "Insight: Tendencia a cero errores bloqueantes confirmada en semana 4 post-lanzamiento. KPI Canvas B5 \"Cero defectos bloqueantes\" validado.",

    // --- Tab 4: Telemetría & Dashboard ---
    cs_dash_title: "<i class=\"fas fa-chart-line\"></i> Telemetría Digital & Tablero de Analítica en Vivo",
    cs_dash_badge_ga4: "GA4 & GTM Auto-Tagging",
    cs_dash_badge_clarity: "Microsoft Clarity UX",
    cs_dash_intro: "Integración de telemetría en tiempo real sobre el portal público rediseñado. La arquitectura combina el etiquetado automático de eventos DataLayer en Google Tag Manager (GTM), la medición de conversión en Google Analytics 4 (GA4) y el análisis de comportamiento visual (mapas de calor y grabaciones) en Microsoft Clarity, permitiendo validar las hipótesis de adopción del MVP Canvas en tiempo real.",
    cs_dash_gtm_title: "<i class=\"fas fa-tags\"></i> 1. Arquitectura de Eventos DataLayer en Google Tag Manager",
    cs_dash_gtm_badge: "Auto-Tagueo No-Code",
    cs_dash_gtm_desc: "Esquema de eventos etiquetados automáticamente en GTM sin requerir código duro, implementado mediante la Regla de Negocio de Auto-Tagueo definida en el flujo TO-BE (Tab 2) para alimentar las métricas del MVP Canvas (Tab 1):",
    cs_dash_gtm_col_event: "Evento GA4",
    cs_dash_gtm_col_trigger: "Disparador GTM (Trigger)",
    cs_dash_gtm_col_datalayer: "Parámetros DataLayer",
    cs_dash_gtm_col_purpose: "Propósito en el Embudo",
    cs_dash_clarity_title: "<i class=\"fas fa-eye\"></i> 2. Análisis de Experiencia de Usuario & Mapas de Calor (Microsoft Clarity)",
    cs_dash_clarity_badge: "Heatmaps & Session Recording",
    cs_dash_clarity_desc: "Optimización de la experiencia de usuario en móviles y escritorio mediante el análisis continuo de grabaciones de sesión y mapas de interacción anonimizados en Microsoft Clarity:",
    cs_dash_c1_title: "Clickmaps & Zonas Calientes",
    cs_dash_c1_text: "El 82% de los clics en móviles se concentran en el primer fold de la landing page (CTA principal y simulador de cuotas), confirmando la efectividad de la maquetación responsive en Puck CMS.",
    cs_dash_c2_title: "Profundidad de Scroll (Scrollmaps)",
    cs_dash_c2_text: "El 76% de los usuarios navega hasta el bloque de requisitos y beneficios antes de iniciar la solicitud, validando la jerarquía visual de los componentes maquetados.",
    cs_dash_c3_title: "Cero Rage Clicks en Formularios",
    cs_dash_c3_text: "Reducción a 0% de rage clicks y clics muertos en móviles tras la simplificación del formulario a 3 pasos certificada en la fase de QA Staging Sandbox.",
    cs_dash_embed_title: "<i class=\"fas fa-desktop\"></i> 3. Tablero Ejecutivo de Producto en Vivo (Dashboard Nativo)",
    cs_dash_embed_badge: "Nexus Digital Bank Telemetry",
    cs_dash_embed_desc: "El dashboard visualiza en tiempo real la adopción del portal público bancario, consolidando volumen de solicitudes, tasa de conversión por canal y rendimiento por dispositivo:",
    dash_bank_sub: "Motor de Analítica de Producto & Crecimiento",
    dash_opt_post: "Post-Lanzamiento (Últimos 30 Días)",
    dash_opt_compare: "Comparativa (Antes vs Después)",
    dash_opt_all: "Todos los Productos",
    dash_opt_checking: "Cuenta Corriente",
    dash_opt_credit: "Crédito de Consumo",
    dash_live_status: "TELEMETRÍA EN VIVO",
    dash_kpi1_title: "Solicitudes Digitales",
    dash_kpi1_sub: "PostgreSQL (Tab 3)",
    dash_kpi2_title: "Tasa de Conversión (CR)",
    dash_kpi2_sub: "GA4 submit_success",
    dash_kpi3_title: "Time-to-Publish SLA",
    dash_kpi3_sub: "BPMN TO-BE (Tab 2)",
    dash_kpi4_title: "Fricción & Rage Clicks",
    dash_kpi4_sub: "Microsoft Clarity UX",
    dash_panel_funnel_title: "Embudo de Conversión Digital (GA4 + GTM Auto-Tagging)",
    dash_panel_channel_title: "Comparativa de Canales (SQL Tab 3 Data)",
    dash_ch_legacy: "Antes (Legacy)",
    dash_ch_tobe: "Después (Puck CMS)",
    dash_branch: "Sucursal",
    dash_web: "Web",
    dash_device_title: "Dispositivo (GA4): Mobile vs Desktop",
    cs_dash_expl_title: "<i class=\"fas fa-info-circle\"></i> Interpretación del Tablero & Coherencia del Caso de Estudio",
    cs_dash_expl1_t: "Auto-Tagueo No-Code en GTM",
    cs_dash_expl1_d: "Toda landing creada en Puck CMS (Tab 2) emite automáticamente los eventos DataLayer (page_view_public, click_apply_now, submit_application_success) a GA4 sin requerir intervención de TI.",
    cs_dash_expl2_t: "Optimización de Experiencia UX en Clarity",
    cs_dash_expl2_d: "Los mapas de calor confirman que el 82% de la interacción ocurre en el 1er fold. La reducción de rage clicks a 0.0% certifica la eliminación de bloqueos en formularios responsive.",
    cs_dash_expl3_t: "Validación Cruzada con SQL (PostgreSQL)",
    cs_dash_expl3_d: "Los eventos de conversión en GA4 se contrastan con las consultas SQL del sistema core bancario (Tab 3), auditando la adopción real del canal web frente a sucursales.",
    cs_ai_title: "<i class=\"fas fa-robot\"></i> Aceleración del Ciclo de Producto con IA Generativa",
    cs_ai_badge1: "Gemini 1.5 Pro & Rovo AI",
    cs_ai_badge2: "NotebookLM Compliance",
    cs_ai_intro: "Integración estratégica de herramientas de Inteligencia Artificial Generativa en el flujo de trabajo diario de Product Owner y Business Analyst. La adopción de Gemini, Atlassian Rovo AI, NotebookLM y Firebase AI permitió eliminar tareas repetitivas, acelerar la especificación funcional y elevar la velocidad de entrega del equipo sin comprometer el rigor normativo bancario.",
    cs_ai_c1_t: "<i class=\"fas fa-feather-alt\"></i> Redacción BDD & Prototipado No-Code (Gemini & Firebase AI)",
    cs_ai_c1_d: "Transformación de requerimientos de negocio en Historias de Usuario BDD (Given-When-Then) en Jira, y maquetación acelerada de componentes visuales para Puck CMS en Sandbox Staging.",
    cs_ai_c2_t: "<i class=\"fas fa-sitemap\"></i> Diagramación Asistida BPMN 2.0 (Rovo AI)",
    cs_ai_c2_d: "Conversión automática de minutas de reunión y requerimientos en Confluence a código Mermaid / PlantUML para renderizar diagramas de secuencia y flujos BPMN 2.0 en tiempo real.",
    cs_ai_c3_t: "<i class=\"fas fa-brain\"></i> Auditoría Legal & Compliance (NotebookLM)",
    cs_ai_c3_d: "Ingesta acelerada de compendios normativos CMF/SBIF y políticas internas del banco. Permite auditar en minutos si los descargos legales y copys en landing pages cumplen con la regulación.",
    cs_ai_table_title: "<i class=\"fas fa-tachometer-alt\"></i> Matriz de Impacto en Productividad & Eficiencia Operativa",
    cs_ai_col_task: "Actividad de Producto / BA",
    cs_ai_col_trad: "Flujo Tradicional (Sin IA)",
    cs_ai_col_ai: "Flujo Acelerado con IA",
    cs_ai_col_gain: "Ganancia de Eficiencia",
    cs_ai_row1_task: "<i class=\"fas fa-feather-alt\" style=\"color:#a855f7;\"></i> Redacción BDD & Prototipado Puck CMS",
    cs_ai_row1_trad: "45 min por historia / 3 días dev",
    cs_ai_row1_ai: "10 min (Gemini BDD) y 2 hrs Sandbox (Firebase AI)",
    cs_ai_row1_gain: "<span class=\"kpi-badge-success\">-77% a -95% Tiempo</span>",
    cs_ai_row2_task: "<i class=\"fas fa-sitemap\" style=\"color:#38bdf8;\"></i> Diagramación BPMN 2.0 y Secuencia",
    cs_ai_row2_trad: "4 horas de edición manual en Visio/Lucid",
    cs_ai_row2_ai: "20 min (Rovo AI + Código Mermaid automático)",
    cs_ai_row2_gain: "<span class=\"kpi-badge-success\">-91% Tiempo Diagramación</span>",
    cs_ai_row3_task: "<i class=\"fas fa-brain\" style=\"color:#34d399;\"></i> Auditoría Normativa CMF / Legal Compliance",
    cs_ai_row3_trad: "2 días hábiles de revisión manual",
    cs_ai_row3_ai: "15 min (NotebookLM Ingestión y Q&A)",
    cs_ai_row3_gain: "<span class=\"kpi-badge-success\">-98% Ciclo Compliance</span>",
    cs_ai_jira_title: "<i class=\"fab fa-jira\"></i> Ejemplo Real: Generación de Criterios de Aceptación Given-When-Then",
    cs_ai_jira_desc: "Muestra del prompt estructurado y el output generado por Gemini para una Historia de Usuario del portal bancario:",
    cs_ai_prompt_lbl: "<i class=\"fas fa-comment-alt\"></i> Prompt de Entrada (PO / BA)",
    cs_ai_prompt_txt: "\"Actúa como Senior BA Financiero. Genera 3 criterios BDD (Given-When-Then) para la historia 'Apertura Digital de Cuenta Corriente' en móviles cuando el usuario falla la validación de clave de acceso.\"",
    cs_ai_out_lbl: "<i class=\"fas fa-check-circle\"></i> Criterio BDD Generado (Jira Ready)",
    cs_ai_out_code: "<span class=\"sql-keyword\">SCENARIO</span>: Error en validación de clave de acceso\n<span class=\"sql-func\">GIVEN</span> el usuario se encuentra en el Paso 2 del formulario\n<span class=\"sql-func\">WHEN</span> ingresa una clave incorrecta por 3ra vez\n<span class=\"sql-keyword\">THEN</span> el sistema emite el evento form_validation_error\n<span class=\"sql-keyword\">AND</span> bloquea temporalmente el intento mostrando la ayuda",
    dash_funnel_s1: "1. Page View (page_view_public)",
    dash_funnel_s2: "2. Clic CTA Intención (click_apply_now)",
    dash_funnel_s3: "3. Inicio de Formulario (start_form_fill)",
    dash_funnel_s4: "4. Solicitud Enviada (submit_application_success)",
    cs_ai_c1_badge: "-77% Tiempo",
    cs_ai_c2_badge: "-91% Tiempo",
    cs_ai_c3_badge: "-98% Tiempo",
    cs_ai_c4_badge: "-95% Tiempo",

    // --- Projects Page Content (Spanish) ---
    projects_page_title: "Proyectos",
    projects_list: [
        { id: "project-digital-banking", title: "Rediseño Digital & Analítica de Producto", description: "Caso de estudio de extremo a extremo de rediseño de portal bancario público con MVP Canvas, BPMN 2.0, SQL en PostgreSQL y GA4.", link: "projects/digital-banking-redesign.html", imageUrl: "assets/img/digital-banking-cover.webp", buttonText: "Ver Caso de Estudio", tool: "all", type: "case-study" },
        { id: "project-exchange-rate", title: "Evolución del Tipo de Cambio", description: "Seguimiento en tiempo real del USD, EUR y GBP frente al peso chileno.", link: "projects/exchange-rate-evolution.html", imageUrl: "assets/img/exchange-rate-cover.webp", buttonText: "Ver Proyecto", tool: "powerbi", type: "dashboard" },
        { id: "project-pokedex", title: "Pokédex Interactiva", description: "Un dashboard interactivo con datos de más de 1.000 Pokémon.", link: "projects/pokedex-dashboard.html", imageUrl: "assets/img/pokedex-cover.webp", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-unemployment", title: "Desempleo en América", description: "Análisis de tendencias de desempleo en estados y áreas metropolitanas de EE.UU.", link: "projects/US-Unemployment.html", imageUrl: "assets/img/us-unemployment-cover.webp", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-financial-inclusion", title: "Inclusión Financiera Global", description: "Visualización de tendencias globales en posesión de cuentas y comportamientos de crédito.", link: "projects/global-financial-inclusion.html", imageUrl: "assets/img/global-financial-inclusion-cover.webp", buttonText: "Ver Proyecto", tool: "looker", type: "dashboard" },
        { id: "project-neo-tracker", title: "NEO Tracker", description: "Seguimiento de Objetos Cercanos a la Tierra con la API de la NASA.", link: "projects/neo-tracker.html", imageUrl: "assets/img/neo-tracker-cover.webp", buttonText: "Ver Proyecto", tool: "powerbi", type: "dashboard" }
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
      const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
      (data.projects || []).forEach(project => {
          const card = document.createElement('div');
          card.className = 'project-card';

          const isCaseStudy = project.type === 'case-study';
          const typeBadgeLabel = isCaseStudy ? (isEn ? 'Case Study' : 'Caso de Estudio') : 'Dashboard';
          const typeBadgeClass = isCaseStudy ? 'badge-case-study' : 'badge-dashboard';

          card.innerHTML = `
              <span class="project-type-badge ${typeBadgeClass}">${typeBadgeLabel}</span>
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
        const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
        (data.projects_list || []).forEach(project => {
            let toolIcon = '';
            if (project.tool === 'powerbi') {
                toolIcon = `<img src="${basePath}assets/img/logos/power-bi.webp" alt="Power BI Logo" class="card-tool-icon">`;
            } else if (project.tool === 'looker') {
                toolIcon = `<img src="${basePath}assets/img/logos/looker-studio.webp" alt="Looker Studio Logo" class="card-tool-icon">`;
            }

            const isCaseStudy = project.type === 'case-study';
            const typeBadgeLabel = isCaseStudy ? (isEn ? 'Case Study' : 'Caso de Estudio') : 'Dashboard';
            const typeBadgeClass = isCaseStudy ? 'badge-case-study' : 'badge-dashboard';

            const cardItem = document.createElement('li');
            cardItem.innerHTML = `
                <a href="${project.link}" class="project-gallery-card">
                    <div class="card-image" style="background-image: url('${basePath}${project.imageUrl}')">
                        <span class="project-type-badge ${typeBadgeClass}">${typeBadgeLabel}</span>
                    </div>
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
      el.innerHTML = data[key];
    }
  });

  setupNativeDashboardFilters();

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
        const isCaseStudy = card.querySelector('.badge-case-study');

        if (filterVal === 'all') {
          card.style.display = 'block';
        } else if (filterVal === 'casestudy') {
          card.style.display = isCaseStudy ? 'block' : 'none';
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

    // 1. Intent: Data Analyst / Analista de Datos
    if (q.includes('data analyst') || q.includes('analista de datos') || q.includes('analista datos') || q.includes('data analytics') || q.includes('analitica de datos') || q.includes('analista bi') || q.includes('business intelligence analyst')) {
      return isEn
        ? `📊 **Data Analyst Alignment**:\nBenjamín Espinoza is a natural fit for **Data Analyst** roles, blending an Industrial Engineering degree with hands-on banking (Banco Internacional), retail, and industrial experience:\n\n• **SQL & Relational Databases**: Advanced querying in **PostgreSQL** for data extraction, filtering, complex JOINs, aggregations, and cohort metrics.\n• **Data Modeling & Visualization (BI)**: Developed over 50 executive dashboards in **Power BI** and **Looker Studio** utilizing DAX and Power Query M.\n• **ETL & Data Automation**: Automated data extraction pipelines from REST APIs (Central Bank of Chile, NASA, PokéAPI) using **Apps Script** and Python.\n• **Digital Analytics & Web Telemetry**: Audit and configuration of **GA4** events, Google Tag Manager (GTM), and Microsoft Clarity heatmaps to eliminate UX friction and drive conversion.`
        : `📊 **Perfil & Encaje como Data Analyst**:\nBenjamín Espinoza encaja de manera directa e integral en posiciones de **Data Analyst**, combinando su formación como Ingeniero Civil Industrial con experiencia práctica en banca (Banco Internacional), retail e industria:\n\n• **SQL & Bases de Datos Relacionales**: Consultas SQL avanzadas en **PostgreSQL** para extracción masiva, agregación, uniones complejas (JOINs) y análisis de cohortes.\n• **Modelado & Visualización de Datos (BI)**: Creación de más de 50 tableros interactivos ejecutivos y operativos en **Power BI** y **Looker Studio** usando DAX y Power Query.\n• **Automatización de ETL**: Creación de pipelines automatizados para ingerir datos desde APIs REST (Banco Central de Chile, NASA, PokéAPI) mediante **Apps Script** y Python.\n• **Analítica Digital & Telemetría**: Tagueo de eventos en **GA4**, Google Tag Manager (GTM) y auditoría de mapas de calor en Microsoft Clarity para medir conversión y optimizar la experiencia digital.`;
    }

    // 2. Intent: Product Owner / Product Manager / Product Analyst / PO
    if (q.includes('product owner') || q.includes('po') || q.includes('product manager') || q.includes('product analyst') || q.includes('gestion de producto') || q.includes('gestión de producto') || q.includes('direccion de producto') || q.includes('dirección de producto')) {
      return isEn
        ? `🎯 **Alignment with Product Owner / Product Manager Roles**:\nBenjamín Espinoza has solid experience as a **Senior Business Analyst & Digital Product Specialist** in banking (Banco Internacional), preparing him for Product Management positions:\n\n• **Agile Triad Execution**: Collaborates directly with POs, Tech Leads, and developers to drive product discovery, refine backlogs, and plan Sprints.\n• **Product Discovery & Specifications**: Defines MVP Canvases, User Story Maps in Jira/Confluence, and writes BDD Acceptance Criteria (*Given-When-Then*).\n• **Product Analytics**: Leverages GA4, GTM, Microsoft Clarity, and PostgreSQL SQL queries to measure conversion funnels and prioritize high-value features.\n• **No-Code Web Management**: Administered public portal landings using Puck CMS, dropping Time-to-Market from weeks to 15 minutes.`
        : `🎯 **Adaptación del Perfil a Cargos de Product Owner / Product Manager**:\nBenjamín Espinoza cuenta con una sólida trayectoria como **Senior Business Analyst y Analista de Productos Digitales** en el sector bancario (Banco Internacional), proyectando su perfil hacia la dirección de productos:\n\n• **Liderazgo en Triadas Ágiles**: Trabaja codo a codo con POs, Tech Leads y equipos de desarrollo en el descubrimiento de productos y priorización de backlog en Jira.\n• **Estrategia & Especificación**: Diseña MVP Canvas, User Story Maps y Criterios de Aceptación BDD (*Given-When-Then*).\n• **Analítica de Producto**: Mide funnels de conversión en tiempo real con GA4, GTM, Microsoft Clarity y consultas SQL en PostgreSQL para orientar el roadmap.\n• **Gestión de Landings (Puck CMS)**: Lideró la administración de portales web sin código, reduciendo el ciclo de publicación de semanas a 15 minutos.`;
    }

    // 3. Intent: Business Analyst / BA / Requirements / BPMN
    if (q.includes('business analyst') || q.includes('ba') || q.includes('analista de negocio') || q.includes('bpmn') || q.includes('requerimientos') || q.includes('bdd') || q.includes('procesos')) {
      return isEn
        ? `📋 **Business Analyst (BA) & Process Engineering Expertise**:\nBenjamín bridges business requirements with technical execution:\n\n• **Process Modeling (BPMN 2.0)**: Maps AS-IS and TO-BE operational workflows to remove bottlenecks.\n• **Agile Requirements**: Authors structured BDD User Stories (*Given-When-Then*) in Jira and Confluence.\n• **Regulatory Compliance**: Audits financial landing content against CMF/SBIF regulations using Generative AI (NotebookLM).\n• **QA & Validation**: Executes functional test plans ensuring clean deployments.`
        : `📋 **Experiencia como Business Analyst (BA) & Ingeniería de Procesos**:\nBenjamín conecta las necesidades de negocio con la ejecución técnica:\n\n• **Modelado de Procesos (BPMN 2.0)**: Mapea flujos operacionales AS-IS y TO-BE eliminando cuellos de botella.\n• **Requerimientos Ágiles**: Redacta Historias de Usuario BDD (*Given-When-Then*) estructuradas en Jira y Confluence.\n• **Cumplimiento Normativo**: Audita landings financieras frente a regulaciones CMF/SBIF mediante IA Generativa (NotebookLM).\n• **Certificación de QA**: Diseña y ejecuta planes de pruebas funcionales para asegurar lanzamientos sin errores.`;
    }

    // 4. Intent: Technical Stack / Skills / Tools
    if (q.includes('skill') || q.includes('habilidad') || q.includes('tool') || q.includes('tecnolog') || q.includes('stack') || q.includes('herramienta') || q.includes('power bi') || q.includes('looker') || q.includes('python') || q.includes('sql')) {
      return isEn
        ? `💡 **Skills & Technical Stack**:\n• **Databases & Querying**: PostgreSQL, SQL Server, Dimensional Data Modeling.\n• **Business Intelligence**: Power BI, Looker Studio, Tableau, DAX, Power Query (M).\n• **Automation & Scripts**: Google Apps Script, Python, REST APIs, JSON.\n• **Web & Product Analytics**: GA4, Google Tag Manager (GTM), Microsoft Clarity, Puck CMS.\n• **Agile & Process Tools**: Jira, Confluence, BPMN 2.0, BDD (Given-When-Then), Generative AI (Gemini, Rovo AI, NotebookLM).`
        : `💡 **Habilidades Técnicas y Herramientas**:\n• **Bases de Datos & SQL**: PostgreSQL, SQL Server, Modelado Dimensional.\n• **Inteligencia de Negocios (BI)**: Power BI, Looker Studio, Tableau, DAX, Power Query (M).\n• **Automatización & Scripting**: Google Apps Script, Python, APIs REST, JSON.\n• **Analítica Digital & Producto**: GA4, Google Tag Manager (GTM), Microsoft Clarity, Puck CMS.\n• **Gestión Ágil & Procesos**: Jira, Confluence, BPMN 2.0, BDD (Given-When-Then), IA Generativa (Gemini, Rovo AI, NotebookLM).`;
    }

    // 5. Intent: Education / Academic background
    if (q.includes('estudio') || q.includes('educacion') || q.includes('educación') || q.includes('titulo') || q.includes('título') || q.includes('universidad') || q.includes('carrera') || q.includes('diplomado')) {
      return isEn
        ? `🎓 **Academic Background & Certifications**:\n• **Industrial Engineering Degree**: Universidad de Valparaíso (Graduated).\n• **International Diploma in Digital Transformation**: Executive specialization.\n• **Continuous Learning**: Advanced SQL, Power BI, Scrum & Agile Frameworks, Generative AI for Analytics.`
        : `🎓 **Formación Académica & Certificaciones**:\n• **Ingeniería Civil Industrial**: Universidad de Valparaíso (Titulado).\n• **Diplomado Internacional en Transformación Digital**: Especialización ejecutiva.\n• **Formación Continua**: SQL Avanzado, Power BI, Scrum & Metodologías Ágiles, IA Generativa aplicada a Analítica.`;
    }

    // 6. Intent: Contact / Email / LinkedIn
    if (q.includes('contact') || q.includes('contacto') || q.includes('email') || q.includes('linkedin') || q.includes('mail') || q.includes('contratar') || q.includes('trabajar')) {
      return isEn
        ? `📩 You can contact **Benjamín Espinoza** via email at \`bmatiasespinoza@gmail.com\` or connect on [LinkedIn](https://www.linkedin.com/in/benmatias).`
        : `📩 Puedes contactar a **Benjamín Espinoza** por correo a \`bmatiasespinoza@gmail.com\` o en su perfil de [LinkedIn](https://www.linkedin.com/in/benmatias).`;
    }

    // 7. General Conversational Fallback
    return isEn
      ? `🤖 **Benjamín Espinoza Professional Summary**:\nBenjamín is a **Senior Business & Data Analyst** (Industrial Engineer) at Banco Internacional. He specializes in transforming complex data into strategic business decisions and scalable digital products using **PostgreSQL SQL**, **Power BI / Looker Studio**, **Agile triads (BPMN 2.0)**, and **Generative AI**.\n\nWould you like to know more about his experience as a **Data Analyst**, **Product Owner**, or **Business Analyst**?`
      : `🤖 **Resumen del Perfil Profesional de Benjamín Espinoza**:\nBenjamín es **Senior Business & Data Analyst** (Ingeniero Civil Industrial) en Banco Internacional. Se especializa en transformar datos complejos en decisiones estratégicas y productos digitales escalables mediante **SQL (PostgreSQL)**, **Power BI / Looker Studio**, **triadas ágiles (BPMN 2.0)** e **IA Generativa**.\n\n¿Te gustaría saber más sobre su encaje como **Data Analyst**, **Product Owner**, **Business Analyst** o explorar sus **Publicaciones** y **Dashboards**?`;
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

  // --- 4. INICIALIZACIÓN DEL WIDGET DE CHAT GEMINI & DASHBOARD NATIVO ---
  GeminiChatWidget.init();
  setupNativeDashboardFilters();
  showLanguageSwitchHint();
});

function showLanguageSwitchHint() {
  const toggleBtn = document.querySelector('.lang-toggle');
  if (!toggleBtn) return;

  const existing = document.querySelector('.lang-tooltip');
  if (existing) existing.remove();

  const hintText = currentLang === 'es'
    ? 'You can change the language here! 🌐'
    : '¡Puedes cambiar el idioma aquí! 🌐';

  const tooltip = document.createElement('div');
  tooltip.className = 'lang-tooltip';
  tooltip.innerHTML = hintText;
  toggleBtn.appendChild(tooltip);

  setTimeout(() => {
    tooltip.classList.add('fade-out');
    setTimeout(() => tooltip.remove(), 450);
  }, 4000);
}

function setupNativeDashboardFilters() {
  const periodFilter = document.getElementById('dash-period-filter');
  const productFilter = document.getElementById('dash-product-filter');
  if (!periodFilter || !productFilter) return;

  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const arrow = '<i class="fas fa-arrow-right" style="font-size:0.75rem; color:#00df81; margin:0 0.15rem;"></i>';

  const data = {
    all: {
      post: {
        apps: '5,361', deltaApps: isEn ? '<i class="fas fa-arrow-up"></i> +35.0% vs Previous' : '<i class="fas fa-arrow-up"></i> +35.0% vs Anterior',
        cr: '52.4%', deltaCr: '<i class="fas fa-arrow-up"></i> +16.8% pp',
        sla: '15 min', deltaSla: isEn ? '<i class="fas fa-arrow-down"></i> -99.9% Cycle' : '<i class="fas fa-arrow-down"></i> -99.9% Ciclo',
        friction: '0.0%', deltaFriction: '<i class="fas fa-check"></i> 100% QA OK',
        c1: isEn ? '12,400 sessions' : '12,400 sesiones', b1: '100%',
        c2: isEn ? '4,712 intents' : '4,712 intenciones', b2: '38.0%',
        c3: isEn ? '3,261 forms' : '3,261 formularios', b3: '26.3%',
        c4: isEn ? '2,043 submitted' : '2,043 enviadas', b4: '16.5%'
      },
      compare: {
        apps: `7,702 <span style="font-size:0.75rem; color:#aacbc4; font-weight:600;">(${isEn ? 'Total' : 'Total'})</span>`, deltaApps: isEn ? '<i class="fas fa-chart-line"></i> +35.0% Growth' : '<i class="fas fa-chart-line"></i> +35.0% Crecimiento',
        cr: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">28.7%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">50.8%</span>`, deltaCr: isEn ? '<i class="fas fa-arrow-up"></i> +22.1% pp Web Channel' : '<i class="fas fa-arrow-up"></i> +22.1% pp Canal Web',
        sla: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">14 ${isEn ? 'Days' : 'Días'}</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">15 min</span>`, deltaSla: isEn ? '<i class="fas fa-check"></i> Commercial Autonomy' : '<i class="fas fa-check"></i> Autonomía Comercial',
        friction: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">12.0%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">0.0%</span>`, deltaFriction: isEn ? '<i class="fas fa-shield-alt"></i> Certified Staging QA' : '<i class="fas fa-shield-alt"></i> QA Staging Certificado',
        c1: isEn ? '24,800 sessions' : '24,800 sesiones', b1: '100%',
        c2: isEn ? '8,210 intents' : '8,210 intenciones', b2: '33.1%',
        c3: isEn ? '5,420 forms' : '5,420 formularios', b3: '21.8%',
        c4: isEn ? '3,540 submitted' : '3,540 enviadas', b4: '14.2%'
      }
    },
    checking: {
      post: {
        apps: '2,654', deltaApps: isEn ? '<i class="fas fa-arrow-up"></i> +38.5% vs Previous' : '<i class="fas fa-arrow-up"></i> +38.5% vs Anterior',
        cr: '56.0%', deltaCr: '<i class="fas fa-arrow-up"></i> +14.5% pp',
        sla: '15 min', deltaSla: isEn ? '<i class="fas fa-arrow-down"></i> -99.9% Cycle' : '<i class="fas fa-arrow-down"></i> -99.9% Ciclo',
        friction: '0.0%', deltaFriction: '<i class="fas fa-check"></i> 100% QA OK',
        c1: isEn ? '6,120 sessions' : '6,120 sesiones', b1: '100%',
        c2: isEn ? '2,448 intents' : '2,448 intenciones', b2: '40.0%',
        c3: isEn ? '1,836 forms' : '1,836 formularios', b3: '30.0%',
        c4: isEn ? '1,031 submitted' : '1,031 enviadas', b4: '16.8%'
      },
      compare: {
        apps: `3,842 <span style="font-size:0.75rem; color:#aacbc4; font-weight:600;">(${isEn ? 'Total' : 'Total'})</span>`, deltaApps: isEn ? '<i class="fas fa-chart-line"></i> +38.5% Growth' : '<i class="fas fa-chart-line"></i> +38.5% Crecimiento',
        cr: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">41.5%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">56.0%</span>`, deltaCr: '<i class="fas fa-arrow-up"></i> +14.5% pp',
        sla: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">14 ${isEn ? 'Days' : 'Días'}</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">15 min</span>`, deltaSla: isEn ? '<i class="fas fa-check"></i> Commercial Autonomy' : '<i class="fas fa-check"></i> Autonomía Comercial',
        friction: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">8.0%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">0.0%</span>`, deltaFriction: isEn ? '<i class="fas fa-shield-alt"></i> Certified Staging QA' : '<i class="fas fa-shield-alt"></i> QA Staging Certificado',
        c1: isEn ? '12,200 sessions' : '12,200 sesiones', b1: '100%',
        c2: isEn ? '4,510 intents' : '4,510 intenciones', b2: '36.9%',
        c3: isEn ? '3,120 forms' : '3,120 formularios', b3: '25.5%',
        c4: isEn ? '1,842 submitted' : '1,842 enviadas', b4: '15.1%'
      }
    },
    credit: {
      post: {
        apps: '2,707', deltaApps: isEn ? '<i class="fas fa-arrow-up"></i> +31.8% vs Previous' : '<i class="fas fa-arrow-up"></i> +31.8% vs Anterior',
        cr: '48.0%', deltaCr: '<i class="fas fa-arrow-up"></i> +12.4% pp',
        sla: '15 min', deltaSla: isEn ? '<i class="fas fa-arrow-down"></i> -99.9% Cycle' : '<i class="fas fa-arrow-down"></i> -99.9% Ciclo',
        friction: '0.0%', deltaFriction: '<i class="fas fa-check"></i> 100% QA OK',
        c1: isEn ? '6,280 sessions' : '6,280 sesiones', b1: '100%',
        c2: isEn ? '2,264 intents' : '2,264 intenciones', b2: '36.0%',
        c3: isEn ? '1,425 forms' : '1,425 formularios', b3: '22.7%',
        c4: isEn ? '1,012 submitted' : '1,012 enviadas', b4: '16.1%'
      },
      compare: {
        apps: `3,860 <span style="font-size:0.75rem; color:#aacbc4; font-weight:600;">(${isEn ? 'Total' : 'Total'})</span>`, deltaApps: isEn ? '<i class="fas fa-chart-line"></i> +31.8% Growth' : '<i class="fas fa-chart-line"></i> +31.8% Crecimiento',
        cr: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">35.6%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">48.0%</span>`, deltaCr: '<i class="fas fa-arrow-up"></i> +12.4% pp',
        sla: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">14 ${isEn ? 'Days' : 'Días'}</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">15 min</span>`, deltaSla: isEn ? '<i class="fas fa-check"></i> Commercial Autonomy' : '<i class="fas fa-check"></i> Autonomía Comercial',
        friction: `<span style="font-size:1.05rem; color:#94a3b8; font-weight:700;">15.0%</span>${arrow}<span style="font-size:1.35rem; color:#00df81; font-weight:800;">0.0%</span>`, deltaFriction: isEn ? '<i class="fas fa-shield-alt"></i> Certified Staging QA' : '<i class="fas fa-shield-alt"></i> QA Staging Certificado',
        c1: isEn ? '12,600 sessions' : '12,600 sesiones', b1: '100%',
        c2: isEn ? '3,700 intents' : '3,700 intenciones', b2: '29.3%',
        c3: isEn ? '2,300 forms' : '2,300 formularios', b3: '18.25%',
        c4: isEn ? '1,698 submitted' : '1,698 enviadas', b4: '13.4%'
      }
    }
  };

  function updateDash() {
    const prod = productFilter.value || 'all';
    const period = periodFilter.value || 'post';
    const current = (data[prod] && data[prod][period]) ? data[prod][period] : data.all.post;

    const elApps = document.getElementById('dash-val-apps');
    const elDeltaApps = document.getElementById('dash-delta-apps');
    const elCr = document.getElementById('dash-val-cr');
    const elDeltaCr = document.getElementById('dash-delta-cr');
    const elSla = document.getElementById('dash-val-sla');
    const elDeltaSla = document.getElementById('dash-delta-sla');
    const elFriction = document.getElementById('dash-val-friction');
    const elDeltaFriction = document.getElementById('dash-delta-friction');

    if (elApps) elApps.innerHTML = current.apps;
    if (elDeltaApps) elDeltaApps.innerHTML = current.deltaApps;
    if (elCr) elCr.innerHTML = current.cr;
    if (elDeltaCr) elDeltaCr.innerHTML = current.deltaCr;
    if (elSla) elSla.innerHTML = current.sla;
    if (elDeltaSla) elDeltaSla.innerHTML = current.deltaSla;
    if (elFriction) elFriction.innerHTML = current.friction;
    if (elDeltaFriction) elDeltaFriction.innerHTML = current.deltaFriction;

    const elC1 = document.getElementById('funnel-c1');
    const elC2 = document.getElementById('funnel-c2');
    const elC3 = document.getElementById('funnel-c3');
    const elC4 = document.getElementById('funnel-c4');

    if (elC1) elC1.textContent = current.c1;
    if (elC2) elC2.textContent = current.c2;
    if (elC3) elC3.textContent = current.c3;
    if (elC4) elC4.textContent = current.c4;

    const elB1 = document.getElementById('funnel-b1');
    const elB2 = document.getElementById('funnel-b2');
    const elB3 = document.getElementById('funnel-b3');
    const elB4 = document.getElementById('funnel-b4');

    if (elB1) elB1.style.width = current.b1;
    if (elB2) elB2.style.width = current.b2;
    if (elB3) elB3.style.width = current.b3;
    if (elB4) elB4.style.width = current.b4;
  }

  periodFilter.addEventListener('change', updateDash);
  productFilter.addEventListener('change', updateDash);
}


