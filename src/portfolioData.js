export const portfolioData = {
  hero: {
    name: "Mohamad Hafiz Bin Mohd Jais",
    headline: "Mohamad Hafiz Bin Mohd Jais",
    tagline: "International Islamic University Malaysia (IIUM Gombak)",
    tagline2: "Bachelor of Computer Science (Honours)",
    tagline3: "Open to Data Analyst & Business Analyst roles",
    summary: "I turn project and business data into clear Power BI reports. Most recently I spent six months at JLand Group preparing construction cost data from Autodesk Construction Cloud and building dashboards for cost trends, variation orders and cashflow.",
    // Three credentials shown under the hero. Each is a real fact, not a metric.
    highlights: [
      { label: "Degree", value: "BCS (Hons), Data Science & Computer Intelligence", detail: "IIUM" },
      { label: "Most recent analyst role", value: "Data Analyst Intern, JLand Group", detail: "Mar – Sep 2026" },
      { label: "Current work", value: "Freelance Web Developer, CanvasKita", detail: "My personal brand:", link: { label: "canvaskita.com", url: "https://canvaskita.com" } },
    ],
    location: "Johor Bahru, Malaysia",
    email: "hafizjais5@gmail.com",
    linkedin: "https://linkedin.com/in/hafiz-jais-306132213",
    github: "https://github.com/hafizjais",
  },
  about: {
    bio: `I recently completed my Data Analyst internship at JLand Group Sdn. Bhd., where I supported the PDP-HPM project in improving cost transparency, decision‑making and data integration across the construction project lifecycle. I prepared and analyzed project cost data from Autodesk Construction Cloud (ACC) and built Power BI dashboards for cost trends, variation order exposure and cashflow.

Working alongside Project Management Consulting (PMC), Construction Management and Finance gave me hands‑on exposure to how real project cost data is structured, governed and used for reporting and forecasting.

I'm now looking for Data Analyst or Business Analyst roles. Alongside my job search, I build business websites under my own brand, CanvasKita, and support rental operations as a part-time IT administrator.`,
    education: [
      {
        degree: "Bachelor of Computer Science (Honours), Data Science and Computer Intelligence",
        institution: "International Islamic University Malaysia (IIUM)",
        year: "2022 - 2026",
        notes: ["Dean's List (5 of 8 semesters)", "Co-Curricular Cumulative Average 4.0/4.0"],
      },
      {
        degree: "Foundation in Engineering and Computer Science",
        institution: "Centre for Foundation Studies (IIUM)",
        year: "2021 - 2022",
      },
      {
        degree: "Sijil Pelajaran Malaysia (SPM)",
        institution: "Sekolah Menengah Islam Hidayah Johor Bahru",
        year: "2016 - 2020",
      }
    ],
  },
  // type: "professional" | "freelance" | "earlier" — controls grouping in the Experience section
  experience: [
    {
      type: "professional",
      role: "Part-Time IT Administrator",
      company: "Haven Space Property",
      date: "Sep 2026 - Nov 2026",
      description: [
        "Track monthly rental collections and tenant payments.",
        "Create an admin portal to track profit and loss, tenant payments and rental agreements, along with a public website listing available properties and rooms.",
      ],
    },
    {
      type: "professional",
      role: "Data Analyst Intern",
      company: "JLand Group Sdn. Bhd.",
      date: "Mar - Sep 2026",
      description: [
        "Supported the PDP-HPM project using cost data from Autodesk Construction Cloud (ACC).",
        "Prepared and analyzed project cost data for reporting.",
        "Built Power BI dashboards showing cost trends, variation order exposure and cashflow.",
        "Automated workflows with Microsoft Power Automate and worked with Microsoft Fabric for data integration.",
      ],
      links: [
        { label: "View My Internship Summary", url: "https://drive.google.com/file/d/1QKeg1Ttr44hqyOaX9WLmKBxRBR_GL-XX/view?usp=sharing" },
        { label: "View My Internship Projects", url: "https://drive.google.com/file/d/1onVKCBw4tzW9CYH1yUdNE4rfQ3f_sFmd/view?usp=sharing" },
      ],
    },
    {
      type: "professional",
      role: "Digital & Technical Assistant",
      company: "Magna IBN Sdn. Bhd.",
      date: "Aug 2025 - Jan 2026",
      description: [
        "Managed Meta/Facebook advertising with AI-assisted optimization, with a reported increase of at least 40% in daily traffic and leads compared with normal settings.",
        "Built n8n workflows connected to the Muse AI agent from Meta to manage client responses and capture leads from WhatsApp integrated with Meta/Facebook.",
        "Supported clients with Halal consultancy and training services.",
        "Maintained WordPress websites and improved digital communication and documentation processes.",
      ],
    },
    {
      type: "professional",
      role: "Research Assistant - Under Dr. Norzariyah Binti Yahya",
      company: "International Islamic University Malaysia (IIUM)",
      date: "Aug - Dec 2025",
      description: [
        "Conducted literature searches and extracted research data from Scopus, IEEE and ScienceDirect for a structured review of AI-blockchain frameworks in Halal supply chain compliance.",
      ],
    },
    {
      type: "freelance",
      role: "Freelance Web Developer",
      company: "CanvasKita",
      companyLink: "https://canvaskita.com",
      date: "Sep 2026 - Present",
      description: [
        "Run CanvasKita.com, my personal brand for website design and development services.",
        "Developed and maintained business websites for nine clients, using headless WordPress with Next.js, as well as WordPress sites and coded applications hosted on Hostinger.",
        "For a property client, connected Airtable property records to the website through an API so submitted property details appear as live listings.",
        "Use AI-agent workflows to support parts of the website build and maintenance process.",
      ],
    },
    {
      type: "freelance",
      role: "Mortgage & Debt Consolidation Consultant",
      company: "Victory Vision (Financial Hafiz)",
      companyLink: "https://financialhafiz.vercel.app/",
      date: "Sep 2026 - Present",
      description: [
        "Work with property agents and liaise with bankers to help clients with mortgage, housing loan and debt consolidation applications.",
      ],
    },
    {
      type: "freelance",
      role: "Small Business Setup Consultant",
      date: "Nov 2026 - Present",
      description: [
        "Help small businesses understand and complete the registrations they need, including SSM, FoSIM with the Ministry of Health, LHDN online stamping, Ministry of Finance certification for businesses interested in government tenders, and local council (PBT) business licences.",
        "Guide clients through each application based on their business needs.",
      ],
    },
    {
      type: "earlier",
      role: "Cashier",
      company: "N24 Cafe (UTM) & Pasar Awam Taman Universiti",
      date: "Sep - Oct 2024",
      description: [
        "Handled daily cash transactions and monitored inventory records.",
      ],
    },
    {
      type: "earlier",
      role: "Private SPM Tutor",
      date: "Feb - May 2022",
      description: [
        "Conducted one-on-one tutoring for SPM students in Bahasa Arab, Mathematics, and Sejarah.",
      ],
    },
  ],
  leadership: [
    {
      role: "Program Coordinator",
      organization: "Innovatex: Innovative Tech Expo, IIUM",
      date: "March 2024",
      description: [
        "Coordinated the planning and execution of IIUM’s annual technology innovation exhibition involving student startups and research showcases.",
        "Managed cross-functional communication between organizing committee members, exhibitors, and university representatives.",
        "Oversaw event logistics, scheduling, and documentation to ensure smooth event operations.",
        "Strengthened leadership, problem-solving, and decision-making skills in a fast-paced event environment."
      ]
    },
    {
      role: "Program Coordinator",
      organization: "STUFF Mass Gathering 2.0 (Student Front Facilitating Club), IIUM",
      date: "October 2023",
      description: [
        "Led the coordination of the club’s annual mass gathering event for incoming and existing members.",
        "Managed program flow, event timeline, and task delegation among committee members.",
        "Facilitated communication between organizing teams to ensure alignment of objectives and smooth execution.",
        "Developed organizational and leadership skills while handling real-time event challenges."
      ]
    },
    {
      role: "Committee Member (Legal Affairs Team)",
      organization: "I-Hax 2024: Innovation Hackathon, IIUM",
      date: "November 2024",
      description: [
        "Managed legal documentation and ensured all hackathon activities complied with university policies and ethical standards.",
        "Assisted in reviewing participant agreements and event documentation processes.",
        "Supported coordination between organizing committee and participants to maintain structured operations.",
        "Contributed to ensuring transparency and governance in a competitive innovation environment."
      ]
    },
    {
      role: "Academic & Career Bureau Committee",
      organization: "ICT Student Society (ICTSS), IIUM",
      date: "June 2023 - February 2024",
      description: [
        "Assisted in organizing academic workshops, career talks, and industry-sharing sessions for KICT students.",
        "Collaborated with industry professionals and speakers to bridge the gap between academia and industry.",
        "Supported event coordination and student engagement initiatives to enhance career readiness.",
        "Contributed to strengthening the tech student community within IIUM."
      ]
    },
    {
      role: "Participant",
      organization: "Kursus Kepimpinan PERKASA Pembimbing Rakan Sebaya (PRS), IIUM",
      date: "April 2023",
      description: [
        "Completed structured leadership training focused on peer mentoring and communication skills.",
        "Developed interpersonal and team facilitation skills through practical exercises and workshops.",
        "Trained in supporting and guiding peers within academic and co-curricular settings.",
        "Strengthened emotional intelligence and collaborative leadership capabilities."
      ]
    }
  ],
  // category: "professional" | "academic" — controls grouping in the Projects section
  projects: [
    {
      category: "professional",
      title: "Cost Management Analysis",
      subtitle: "Internship Project · JLand Group Sdn. Bhd.",
      description: "Analyzed Autodesk Construction Cloud cost data for the PDP-HPM project. Prepared datasets and built Power BI dashboards covering cost trends, variation order exposure and cashflow, supporting descriptive, predictive and prescriptive views.",
      tech: ["Autodesk Construction Cloud", "Power BI", "Data Preparation"],
    },
    {
      category: "academic",
      title: "DIAGNOCHAIN: AI-Powered Disease Prediction System on a Blockchain-Based Medical Database",
      subtitle: "Final Year Project",
      description: "Combined AI-driven disease prediction with blockchain-based data management. Developed a supervised machine learning model for disease classification and integrated it with a secure blockchain-based medical database.",
      tech: ["Python", "Scikit-learn", "Firebase", "ReactJS", "Solidity", "Hardhat"],
      award: "Silver Award at IIIDeation 2026",
    },
    {
      category: "academic",
      title: "Optimizing Revenue and Customer Experience using Causal Inference & Machine Learning",
      subtitle: "Big Data and Analytics Project",
      description: "Analyzed customer datasets using Excel, SQL, Spark and Python, applying exploratory data analysis to identify customer behavior patterns. Built interactive Power BI dashboards and reports on shopping trends, customer satisfaction and KPIs.",
      tech: ["Excel", "SQL", "Spark", "Python", "Power BI"],
    },
    {
      category: "academic",
      title: "Classifying Food Ingredients Based on Halal Compliance",
      subtitle: "Data Science Project",
      description: "Prepared and analyzed ingredient data using Excel and Python, performed feature engineering, created visualizations, and developed a supervised machine learning model to classify Halal compliance.",
      tech: ["Excel", "Python", "Machine Learning", "Data Preprocessing"],
    },
  ],
  skills: {
    analysis: [
      "Data Collection",
      "Data Cleaning & Preparation",
      "Data Quality & Standardization",
      "KPI Reporting",
      "Dashboard Development",
      "Data Visualization",
    ],
    data: ["Excel", "Power BI", "Power Query", "Data Silo Remediation", "EdgeProp"],
    programming: ["DAX Measures for Power BI", "SQL", "Python", "Spark", "ReactJS"],
    ml: ["Predictive Analytics for Power BI", "Scikit-learn"],
    tools: ["Autodesk Construction Cloud", "Autodesk Forma", "Microsoft Power BI", "Microsoft Fabric", "Microsoft Power Automate", "Microsoft Dynamics 365", "Microsoft SharePoint", "Git", "VS Code"],
    automationWeb: ["n8n", "Supabase", "Airtable API", "WordPress", "Headless WordPress", "Next.js"],
    specialized: [
      "Construction & Project Cost Management Fundamentals",
      "Cost Data Structure & Governance",
      "ACC ↔ Finance (D365) Integration"
    ],
    soft: [
      "Analytical Thinking",
      "Business & Stakeholder Communication",
      "Problem Solving",
      "Clear Communication",
      "Team Collaboration",
      "Adaptability",
      "Attention to Detail",
      "Time Management",
      "Continuous Learning"
    ],
  },
  certifications: [
    {
      name: "CompTIA Data+",
      issuer: "CompTIA",
      year: "2025",
      link: "/CompTIA_Data_Plus.pdf",
      image: "/CompTIA_Data_Plus.jpg",
    },
    {
      name: "Autodesk Construction Cloud - Cost Management",
      issuer: "Autodesk",
      year: "2026",
      link: "/AutoDesk Construction Cloud.pdf",
      image: "/AutoDesk Construction Cloud.jpg",
    },
    {
      name: "Power BI Beginner to Pro Workshop",
      issuer: "Pragmatic Works",
      year: "2026",
      link: "/Power BI Beginner to Pro Workshop - MOHAMAD HAFIZ BIN MOHD JAIS.pdf",
      image: "Power BI Beginner to Pro Workshop - MOHAMAD HAFIZ BIN MOHD JAIS.jpg",
    },
    {
      name: "Microsoft Excel Workshop 2023",
      issuer: "CENSERVE IIUM",
      year: "2023",
      link: "/Excel Certificate.png",
      image: "/Excel Certificate.png",
    },
    {
      name: "Oracle Java Fundamentals",
      issuer: "Oracle Academy",
      year: "2023",
      link: "/clmsCertificate.pdf",
      image: "/clmsCertificate.jpg",
    },
    {
      name: "AI for Business (eUM10)",
      issuer: "MDEC",
      year: "2024",
      link: "/Certificate MDEC.pdf",
      image: "/Certificate MDEC.jpg",
    },
    {
      name: "Introduction to Python",
      issuer: "FreeCodeCamp",
      year: "2024",
      link: "/Python certificate.pdf",
      image: "/Python certificate.jpg",
    },
    {
      name: "Bursa Investment Quiz (National)",
      issuer: "Bursa Malaysia",
      year: "2023",
      link: "/Bursa Investment Quiz 2023.pdf",
      image: "/Bursa Investment Quiz 2023.jpg",
    },
  ],
  achievements: [
    {
      title: "Silver Award",
      award: "IIIDeation 2026 International Grand Invention, Innovation & Design Expo",
      year: "2026",
      images: ["/FYP 2 poster.png", "/FYP Judges Evaluation.jpg", "/FYP Booth.jpg"],
      link: "/IGIIDEATION Silver Award.pdf",
    },
    {
      title: "Dean’s List",
      award: "Awarded for 5 of 8 Semesters",
      year: "",
      images: ["/Dean list profile.jpg", "/Dean list award 3.jpg", "/Dean list award 2.jpg", "/Dean list award 1.jpg"],
      link: "/Dean list award 3.pdf",
    },
    {
      title: "Bronze Award",
      award: "7th University in Action Symposium",
      year: "2025",
      images: ["/Poster Symposium.png", "/UIA Booth Visit.jpg", "/Silver Award - UIA Symposium.jpg"],
      link: "/University in Action - Symposium.pdf"
    },
  ],
  contact: {
    email: "hafizjais5@gmail.com",
    linkedin: "https://linkedin.com/in/hafiz-jais-306132213",
    facebook: "https://www.facebook.com/peacejez/",
    github: "https://github.com/hafizjais",
    location: "Johor, Malaysia",
  },
};