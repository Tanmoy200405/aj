const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for React frontend
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// =====================================================
// DATA DEFINITIONS (DATABASE MOCKUP)
// =====================================================

const CAREERS_DB = {
  "software-engineering": {
    "id": "software-engineering",
    "name": "Software Engineering",
    "category": "BUILD",
    "short_desc": "Build the technology people use every day, from mobile apps to cloud systems.",
    "duration": "4 Years (B.Tech / B.E. / BCA+MCA)",
    "skills": ["Coding", "System Design", "Algorithms", "Problem Solving", "Continuous Learning"],
    "growth": "High (22% Projected Growth)",
    "work_env": "Office or remote, collaborative tech environments.",
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "tagline": "Build the technology people use every day.",
    "what_you_do": "You will design, develop, test, and maintain software applications. This involves translating complex user needs into robust, secure code, optimizing databases, building APIs, and collaborating with cross-functional product teams.",
    "day_in_life": [
      {"time": "09:00", "task": "Team Stand-up", "desc": "Sync with developers, designers, and managers on the day's goals and blockers."},
      {"time": "11:00", "task": "Build & Solve", "desc": "Dive deep into the codebase, write tests, and debug complex backend systems."},
      {"time": "14:00", "task": "Design & Collaborate", "desc": "Sketch system architectures and review code with peers in a whiteboard session."},
      {"time": "17:30", "task": "Ship Something New", "desc": "Push fully tested code to production and monitor server logs for errors."}
    ],
    "enjoy_if": [
      "You like solving logical puzzles and problems.",
      "You're curious about how technology operates under the hood.",
      "You enjoy building things from scratch and seeing immediate visual or functional feedback."
    ],
    "reality": {
      "good": [
        "Exceptional career growth and lucrative compensation packages.",
        "High flexibility with remote work options and creative autonomy.",
        "Building tools that improve millions of lives daily."
      ],
      "challenging": [
        "Sitting in front of a screen for long hours debugging obscure bugs.",
        "Continuous pressure to learn new frameworks as tech stack evolves.",
        "High cognitive demand and tight deadlines for project shipping."
      ]
    }
  },
  "architecture": {
    "id": "architecture",
    "name": "Architecture",
    "category": "BUILD",
    "short_desc": "Design physical spaces and structures that balance aesthetic beauty and structural integrity.",
    "duration": "5 Years (B.Arch)",
    "skills": ["3D Drafting (CAD/Revit)", "Spatial Design", "Mathematics", "Sustainability Planning", "Negotiation"],
    "growth": "Moderate (8% Growth)",
    "work_env": "Design studios combined with active building site visits.",
    "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "tagline": "Shaping the physical environment of tomorrow.",
    "what_you_do": "Architects plan and design buildings, public spaces, and infrastructure. They collaborate with engineers to ensure structural safety, incorporate sustainable environmental design, choose materials, draft blueprints, and oversee construction sites.",
    "day_in_life": [
      {"time": "09:00", "task": "Client Drafting Review", "desc": "Refining 3D renderings in Revit based on client feedback for a green office building."},
      {"time": "11:30", "task": "Site Inspection", "desc": "Walking through the construction site, checking structural beam alignment and concrete quality."},
      {"time": "14:30", "task": "Material Selection", "desc": "Meeting with suppliers to select sustainable timber and energy-efficient glazing panels."},
      {"time": "17:00", "task": "Zoning & Permits Coordination", "desc": "Submitting architectural blueprints to municipal authorities for building code checks."}
    ],
    "enjoy_if": [
      "You are fascinated by buildings, historical landmarks, and structural forms.",
      "You enjoy drawing, modeling, and working with 3D physical or digital spaces.",
      "You want to leave a lasting physical imprint on cities and landscapes."
    ],
    "reality": {
      "good": [
        "Deep creative satisfaction seeing your designs built in the real world.",
        "Prestigious profession combining artistic vision and scientific calculation.",
        "Highly varied workday between studio work and physical outdoor site visits."
      ],
      "challenging": [
        "Long, demanding degree program (5 years) plus mandatory internship license hours.",
        "Repetitive, detailed drafting tasks and navigating complex city zoning regulations.",
        "Client budgets, timeline disputes, and construction issues can modify your design plans."
      ]
    }
  },
  "medicine": {
    "id": "medicine",
    "name": "Medicine",
    "category": "HELP",
    "short_desc": "Diagnose diseases, perform life-saving surgeries, and improve community healthcare.",
    "duration": "5.5 - 9 Years (MBBS + MD/MS)",
    "skills": ["Diagnostics", "Medical Knowledge", "Empathy", "Resilience", "Precision"],
    "growth": "High (15% Growth)",
    "work_env": "Hospitals, clinics, and sterile surgical environments.",
    "img": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "tagline": "Save lives and heal communities through medical mastery.",
    "what_you_do": "Doctors examine patients, order diagnostic tests, perform complex surgical operations, prescribe medications, and counsel patients on chronic disease management and prevention. They work closely with nursing and diagnostic teams to coordinate critical care.",
    "day_in_life": [
      {"time": "08:00", "task": "Ward Rounds", "desc": "Checking on hospitalized patients, reviewing chart vitals, and adjusting recovery plans."},
      {"time": "10:30", "task": "Surgical Operation", "desc": "Performing a sterile laparoscopic surgery with high precision and team support."},
      {"time": "14:00", "task": "Outpatient Clinic", "desc": "Consulting patients, diagnosing symptoms, and prescribing custom therapy cycles."},
      {"time": "18:00", "task": "Emergency Briefing", "desc": "Transitioning critical patient records to the night-shift medical staff."}
    ],
    "enjoy_if": [
      "You are deeply passionate about biological sciences and human anatomy.",
      "You feel a strong calling to help and heal vulnerable, sick people.",
      "You can make calm decisions in highly stressful, fast-paced situations."
    ],
    "reality": {
      "good": [
        "Immeasurable human impact and immense professional respect.",
        "Excellent job security and highly specialized technical career paths.",
        "Intellectually challenging and continuous clinical discoveries."
      ],
      "challenging": [
        "An extremely long, competitive educational journey (MBBS, residency, fellowship).",
        "Long, erratic working shifts including overnight emergency calls.",
        "Dealing with tragic patient outcomes and potential emotional burnout."
      ]
    }
  },
  "design": {
    "id": "design",
    "name": "Design",
    "category": "CREATE",
    "short_desc": "Craft intuitive digital interfaces, graphics, and user experiences that solve user needs.",
    "duration": "4 Years (B.Des)",
    "skills": ["UI/UX Design", "Typography", "User Research", "Prototyping", "Visual Branding"],
    "growth": "High (16% Growth)",
    "work_env": "Creative agencies, corporate tech divisions, or remote workspaces.",
    "img": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    "tagline": "Make technology intuitive and visually beautiful.",
    "what_you_do": "Designers create visual assets, wireframes, and prototypes. They study user psychology and behaviors to optimize how products feel, draft design libraries, conduct usability tests, and work alongside developers to implement beautiful user interfaces.",
    "day_in_life": [
      {"time": "09:30", "task": "User Journey Mapping", "desc": "Analyzing user behavior data to identify friction points in a checkout screen flow."},
      {"time": "11:30", "task": "High-Fi Prototyping", "desc": "Building dynamic mockups in Figma with interactive transitions and modern micro-interactions."},
      {"time": "14:30", "task": "Design Review", "desc": "Presenting design prototypes to stakeholders and engineers for technical feedback."},
      {"time": "16:30", "task": "Design System QA", "desc": "Updating font variables, primary buttons, and visual tokens in the shared library."}
    ],
    "enjoy_if": [
      "You love sketching layouts, experimenting with colors, and selecting fonts.",
      "You are highly observant of how apps and objects are structured.",
      "You enjoy thinking from a user's perspective to solve visual layout problems."
    ],
    "reality": {
      "good": [
        "Highly creative day-to-day workflow with rapid feedback loops.",
        "Surge in global demand for skilled product/UX designers in technology companies.",
        "Flexible freelance or corporate careers with a portfolio-first hiring style."
      ],
      "challenging": [
        "Balancing your pure artistic style with strict business needs and client briefs.",
        "Explaining and justifying design decisions to non-design managers.",
        "Keeping up with rapidly evolving interface guidelines and software updates."
      ]
    }
  },
  "finance": {
    "id": "finance",
    "name": "Finance",
    "category": "ANALYZE",
    "short_desc": "Analyze investments, model corporate growth, and manage global wealth portfolios.",
    "duration": "3-5 Years (B.Com / BBA + MBA / CFA)",
    "skills": ["Financial Modeling", "Excel", "Valuation", "Risk Analysis", "Market Research"],
    "growth": "High (10% Growth)",
    "work_env": "Corporate banking floors, investment firms, or corporate headquarters.",
    "img": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    "tagline": "Guide capital allocation and model business growth.",
    "what_you_do": "Finance professionals evaluate company values, build spreadsheet models, analyze market trends, advise on mergers and acquisitions, and build strategies to hedge investment risks. They help companies allocate capital efficiently.",
    "day_in_life": [
      {"time": "08:30", "task": "Market Briefing", "desc": "Reviewing overnight global market news, inflation data, and stock futures indexes."},
      {"time": "10:00", "task": "Financial Modeling", "desc": "Updating DCF valuation models on Excel for an upcoming corporate acquisition."},
      {"time": "14:00", "task": "Pitch Deck Meeting", "desc": "Creating slide materials comparing financial valuations for a corporate board presentation."},
      {"time": "17:00", "task": "Risk Audit", "desc": "Running risk scenario analysis to verify liquidity ratios under stress events."}
    ],
    "enjoy_if": [
      "You love working with spreadsheets, numbers, and data charts.",
      "You are fascinated by Wall Street, stock markets, and startup funding.",
      "You like logical deduction and forecasting corporate outcomes."
    ],
    "reality": {
      "good": [
        "Lucrative career trajectories and performance bonuses.",
        "High exposure to corporate strategy, entrepreneurship, and executive teams.",
        "Analytical skills that translate well to launching your own business."
      ],
      "challenging": [
        "Can require very long hours (70-80+ hour weeks in investment banking).",
        "High-pressure environment where minor spreadsheet errors have large costs.",
        "Slightly corporate culture with rigid hierarchies."
      ]
    }
  },
  "law": {
    "id": "law",
    "name": "Law",
    "category": "ANALYZE",
    "short_desc": "Advocate for justice, write secure contracts, and navigate complex legal systems.",
    "duration": "5 Years (Integrated BA.LL.B / BBA.LL.B)",
    "skills": ["Debating", "Critical Analysis", "Legal Writing", "Research", "Negotiation"],
    "growth": "Moderate (9% Growth)",
    "work_env": "Law firms, courtrooms, corporate legal offices.",
    "img": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    "tagline": "Advocate for justice and draft legal policies.",
    "what_you_do": "Lawyers research legal regulations, draft contracts, represent clients in trials, advise corporations on compliance rules, and negotiate civil or commercial settlement deals. They spend significant time reading legal cases.",
    "day_in_life": [
      {"time": "09:00", "task": "Case Law Research", "desc": "Searching legal databases for precedents to support a contract dispute trial next week."},
      {"time": "11:30", "task": "Courtroom Hearing", "desc": "Presenting oral arguments before a judge during a preliminary motion hearing."},
      {"time": "14:30", "task": "Contract Drafting", "desc": "Redrafting indemnity clauses in a software license contract for a startup client."},
      {"time": "17:00", "task": "Client Consultation", "desc": "Explaining complex legal liabilities and litigation strategies to a corporate client."}
    ],
    "enjoy_if": [
      "You love reading, writing, analyzing texts, and finding tiny loopholes.",
      "You enjoy debates, structured reasoning, and persuasive arguments.",
      "You want to uphold civic justice or protect corporate rights."
    ],
    "reality": {
      "good": [
        "Intellectually stimulating work that resolves complex disputes.",
        "High earning potential and influential status in public and private sectors.",
        "Strong analytical training applicable to politics, business, and writing."
      ],
      "challenging": [
        "Dense, intense volumes of reading and legal literature to review weekly.",
        "Extremely long hours in large law firms, especially during active litigation.",
        "Dealing with high conflict environments and stressful courtroom pressures."
      ]
    }
  },
  "psychology": {
    "id": "psychology",
    "name": "Psychology",
    "category": "HELP",
    "short_desc": "Study human behavior, provide clinical therapy, and support mental wellbeing.",
    "duration": "5 Years (BA/B.Sc + MA/M.Sc in Clinical/Counseling Psychology)",
    "skills": ["Active Listening", "Empathy", "Observation", "Cognitive Behavioral Therapy", "Research"],
    "growth": "High (19% Growth)",
    "work_env": "Private clinics, mental health hospitals, rehabilitation centers.",
    "img": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    "tagline": "Unlock human potential and heal minds.",
    "what_you_do": "Psychologists evaluate patient mental health, conduct counseling sessions, design therapy plans (CBT, psychotherapy), run behavioral experiments, and write patient reports. They help clients overcome mental health struggles.",
    "day_in_life": [
      {"time": "09:00", "task": "Therapy Session", "desc": "Conducting a CBT session with a client struggling with generalized anxiety."},
      {"time": "11:30", "task": "Diagnostic Assessment", "desc": "Administering personality and attention span tests to a teenage patient."},
      {"time": "14:00", "task": "Case Evaluation", "desc": "Writing clinical evaluation logs and adjusting therapeutic treatment plans."},
      {"time": "16:30", "task": "Peer Supervision Meeting", "desc": "Consulting with senior psychologists to discuss progress on challenging cases."}
    ],
    "enjoy_if": [
      "You are fascinated by human behaviors, thoughts, and emotional patterns.",
      "You are a compassionate listener who friends turn to for advice.",
      "You want to make a career out of improving emotional and mental health."
    ],
    "reality": {
      "good": [
        "Profound emotional rewards from helping individuals rebuild their lives.",
        "Highly customizable career options: research, clinical, corporate, or private practice.",
        "Deep intellectual engagement with human psychology."
      ],
      "challenging": [
        "Emotional strain from absorbing other people's trauma and pain daily.",
        "Requires advanced degrees (Master's or Ph.D.) to practice as a licensed counselor.",
        "Client progress can be slow, demanding immense patience and resilience."
      ]
    }
  },
  "business": {
    "id": "business",
    "name": "Business Management",
    "category": "LEAD",
    "short_desc": "Manage corporate operations, build marketing strategies, and launch companies.",
    "duration": "3-5 Years (BBA / B.Com + MBA)",
    "skills": ["Leadership", "Public Speaking", "Strategic Planning", "Project Management", "Agile Execution"],
    "growth": "High (9% Growth)",
    "work_env": "Corporate boardrooms, agile offices, and networking environments.",
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "tagline": "Coordinate resources, make strategy decisions, and scale organizations.",
    "what_you_do": "Managers coordinate team deliverables, define project milestones, manage departmental budgets, analyze market competitors, pitch to clients, and implement operational strategies.",
    "day_in_life": [
      {"time": "09:00", "task": "Operational Review", "desc": "Reviewing team product sprints, budget burn rate, and resolving resource conflicts."},
      {"time": "11:00", "task": "Strategic Planning Session", "desc": "Collaborating with design and sales heads to align on Q4 marketing launch strategy."},
      {"time": "14:00", "task": "Investor Update Call", "desc": "Presenting growth metrics, cost optimizations, and market expansion reports to shareholders."},
      {"time": "16:30", "task": "Mentorship Sync", "desc": "One-on-one reviews with direct reports to discuss career goals and remove project blocks."}
    ],
    "enjoy_if": [
      "You love organizing events, taking charge of group projects, and public speaking.",
      "You are excited by startup stories, marketing ideas, and company structures.",
      "You enjoy delegating tasks and driving teams toward a common deadline."
    ],
    "reality": {
      "good": [
        "Direct influence on company culture, product direction, and revenue outcomes.",
        "Highly transferable skills useful in almost every industry globally.",
        "Strong networking opportunities with business executives and founders."
      ],
      "challenging": [
        "Ultimately accountable for team failures, even if you didn't do the work yourself.",
        "Managing office conflicts, budget cuts, and difficult personnel layoffs.",
        "Constant context-switching across meetings, emails, and financial sheets."
      ]
    }
  },
  "data-science": {
    "id": "data-science",
    "name": "Data Science & AI",
    "category": "ANALYZE",
    "short_desc": "Analyze massive datasets, build predictive AI algorithms, and train machine learning models.",
    "duration": "4 Years (B.Tech CS / Data Science / B.Sc Stats+M.Sc)",
    "skills": ["Python / R", "SQL Databases", "Statistics", "Machine Learning (PyTorch/Scikit)", "Data Visualization"],
    "growth": "Exponential (36% Projected Growth)",
    "work_env": "Technology divisions, tech startups, research hubs.",
    "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "tagline": "Translate big raw data into predictive machine models.",
    "what_you_do": "Data scientists clean and format raw data, run statistical models, build machine learning pipelines, construct AI tools, and visualize business analytics data to help company leaders make data-backed choices.",
    "day_in_life": [
      {"time": "09:00", "task": "Data Pipeline Check", "desc": "Verifying database pipelines and troubleshooting an ETL job failure in Apache Airflow."},
      {"time": "11:00", "task": "Model Training", "desc": "Tuning hyper-parameters on a PyTorch model and evaluating precision metrics on validation tests."},
      {"time": "14:00", "task": "Analytics Meeting", "desc": "Explaining product retention insights to managers using Jupyter Notebook graphs."},
      {"time": "16:30", "task": "AI Research", "desc": "Reading a new research paper on transformers to optimize natural language search tools."}
    ],
    "enjoy_if": [
      "You love mathematics, probability, statistics, and logical programming.",
      "You enjoy looking for patterns, trends, and hidden secrets in large datasets.",
      "You are excited about building AI, chat bots, and predictive automation."
    ],
    "reality": {
      "good": [
        "Among the fastest growing and highest paying jobs in the global market.",
        "Working on cutting-edge generative AI models and automation systems.",
        "Highly logical work where data metrics dictate project success."
      ],
      "challenging": [
        "Spending up to 80% of your time cleaning dirty, formatted-wrong database logs.",
        "Difficulty explaining statistical algorithms and ML limitations to managers.",
        "Need to constantly study math papers and adapt to new deep learning models."
      ]
    }
  },
  "media": {
    "id": "media",
    "name": "Media & Journalism",
    "category": "CREATE",
    "short_desc": "Create news reporting, edit video packages, write blogs, and report on stories.",
    "duration": "3 Years (BJMC / Bachelor of Media & Comm.)",
    "skills": ["Storytelling", "Video Editing", "Content Writing", "Public Relations", "Research"],
    "growth": "Moderate (6% Growth)",
    "work_env": "News desks, production studios, or editing suites.",
    "img": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    "tagline": "Tell stories that inform, inspire, and shape public culture.",
    "what_you_do": "Media specialists conduct interviews, draft news reports, produce video packages, design social media campaigns, edit scripts, and verify stories for publication under tight daily print/digital deadlines.",
    "day_in_life": [
      {"time": "09:00", "task": "Editorial Pitch", "desc": "Pitching investigative story ideas on local water pollution to the chief editor."},
      {"time": "11:00", "task": "Live Interview", "desc": "Interviewing a municipal officer on-camera regarding city infrastructure delays."},
      {"time": "14:00", "task": "Script & Video Edit", "desc": "Drafting the news script and editing a 2-minute video report in Adobe Premiere."},
      {"time": "16:30", "task": "Social Campaign Run", "desc": "Writing threads and publishing the final article to digital news channels."}
    ],
    "enjoy_if": [
      "You love storytelling, taking videos, writing blogs, and talking to strangers.",
      "You are highly curious about current affairs, politics, culture, and society.",
      "You thrive in high-paced environments with strict daily deadlines."
    ],
    "reality": {
      "good": [
        "Power to give voice to communities and hold institutions accountable.",
        "Extremely dynamic workday where you learn about new topics every single day.",
        "Freelancing flexibility with a strong personal brand or channels."
      ],
      "challenging": [
        "Pressure of immediate print/post deadlines and stress of live reporting.",
        "Unpredictable work schedule: news happens at all hours, including holidays.",
        "Starting roles can be highly competitive and low-paying."
      ]
    }
  }
};

const COLLEGES_DB = {
  "bhawanipur": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "bhawanipur",
    "name": "Bhawanipur Global Campus",
    "shortName": "Bhawanipur Global",
    "short_name": "Bhawanipur Global",
    "location": "Kolkata, West Bengal",
    "type": "Private College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business",
      "Arts"
    ],
    "officialSite": "https://bhawanipurglobal.edu.in/",
    "official_site": "https://bhawanipurglobal.edu.in/"
  },
  "adamas": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "adamas",
    "name": "Adamas University",
    "shortName": "Adamas",
    "short_name": "Adamas",
    "location": "Barasat, West Bengal",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Law",
      "Arts",
      "Design"
    ],
    "officialSite": "https://adamasuniversity.ac.in",
    "official_site": "https://adamasuniversity.ac.in"
  },
  "ilead": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "ilead",
    "name": "Institute of Leadership Entrepreneurship and Development",
    "shortName": "iLEAD",
    "short_name": "iLEAD",
    "location": "Kolkata, West Bengal",
    "type": "Media & Management Institute",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Design",
      "Business",
      "Arts"
    ],
    "officialSite": "https://ilead.net.in",
    "official_site": "https://ilead.net.in"
  },
  "george": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "george",
    "name": "George Group of Colleges",
    "shortName": "George",
    "short_name": "George",
    "location": "Kolkata, West Bengal",
    "type": "Private College Group",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business",
      "Arts",
      "Medicine"
    ],
    "officialSite": "https://georgecollege.org",
    "official_site": "https://georgecollege.org"
  },
  "eiilm": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "eiilm",
    "name": "Eastern Institute for Integrated Learning in Management",
    "shortName": "EIILM Kolkata",
    "short_name": "EIILM Kolkata",
    "location": "Kolkata, West Bengal",
    "type": "Private Institute",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business"
    ],
    "officialSite": "https://eiilm.co.in",
    "official_site": "https://eiilm.co.in"
  },
  "brainware": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "brainware",
    "name": "Brainware University",
    "shortName": "Brainware",
    "short_name": "Brainware",
    "location": "Barasat, West Bengal",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Arts"
    ],
    "officialSite": "https://brainwareuniversity.ac.in",
    "official_site": "https://brainwareuniversity.ac.in"
  },
  "uwsb": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "uwsb",
    "name": "Unitedworld School of Business",
    "shortName": "UWSB Kolkata",
    "short_name": "UWSB Kolkata",
    "location": "Kolkata, West Bengal",
    "type": "Private Business School",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business"
    ],
    "officialSite": "https://unitedworld.in",
    "official_site": "https://unitedworld.in"
  },
  "svist": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "svist",
    "name": "Swami Vivekananda Institute of Science and Technology",
    "shortName": "SVIST",
    "short_name": "SVIST",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering"
    ],
    "officialSite": "https://svist.org",
    "official_site": "https://svist.org"
  },
  "eminent": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "eminent",
    "name": "Eminent College of Management and Technology",
    "shortName": "Eminent",
    "short_name": "Eminent",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "https://eminent.edu.in",
    "official_site": "https://eminent.edu.in"
  },
  "bibs": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "bibs",
    "name": "Bengal Institute of Business Studies",
    "shortName": "BIBS",
    "short_name": "BIBS",
    "location": "Kolkata, West Bengal",
    "type": "Business School",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business"
    ],
    "officialSite": "https://bibs.co.in",
    "official_site": "https://bibs.co.in"
  },
  "tnu": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "tnu",
    "name": "The Neotia University",
    "shortName": "TNU",
    "short_name": "TNU",
    "location": "South 24 Parganas, West Bengal",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Medicine",
      "Science"
    ],
    "officialSite": "https://tnu.in",
    "official_site": "https://tnu.in"
  },
  "fiem": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "fiem",
    "name": "Future Institute of Engineering and Management",
    "shortName": "FIEM",
    "short_name": "FIEM",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "https://fiem.edu.in",
    "official_site": "https://fiem.edu.in"
  },
  "iem": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "iem",
    "name": "Institute of Engineering and Management",
    "shortName": "IEM",
    "short_name": "IEM",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "https://iem.edu.in",
    "official_site": "https://iem.edu.in"
  },
  "techno-main": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "techno-main",
    "name": "Techno India Institute of Technology",
    "shortName": "Techno Main",
    "short_name": "Techno Main",
    "location": "Salt Lake, Kolkata",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science"
    ],
    "officialSite": "https://technoindiauniversity.ac.in",
    "official_site": "https://technoindiauniversity.ac.in"
  },
  "tint": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "tint",
    "name": "Techno International New Town",
    "shortName": "TINT",
    "short_name": "TINT",
    "location": "New Town, Kolkata",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering"
    ],
    "officialSite": "https://tint.edu.in",
    "official_site": "https://tint.edu.in"
  },
  "snu": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "snu",
    "name": "Sister Nivedita University",
    "shortName": "SNU",
    "short_name": "SNU",
    "location": "Kolkata, West Bengal",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Arts",
      "Design",
      "Law"
    ],
    "officialSite": "https://snuniv.ac.in",
    "official_site": "https://snuniv.ac.in"
  },
  "jis": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "jis",
    "name": "JIS Group Educational Initiatives",
    "shortName": "JIS Group",
    "short_name": "JIS Group",
    "location": "Kolkata, West Bengal",
    "type": "Education Group",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Medicine"
    ],
    "officialSite": "https://jisgroup.org",
    "official_site": "https://jisgroup.org"
  },
  "bppimt": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "bppimt",
    "name": "B. P. Poddar Institute of Management and Technology",
    "shortName": "BPPIMT",
    "short_name": "BPPIMT",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "https://bppimt.ac.in",
    "official_site": "https://bppimt.ac.in"
  },
  "iias": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "iias",
    "name": "International Institute of Advanced Studies",
    "shortName": "IIAS",
    "short_name": "IIAS",
    "location": "Kolkata, West Bengal",
    "type": "Private Institute",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Business"
    ],
    "officialSite": "https://iias.ac.in",
    "official_site": "https://iias.ac.in"
  },
  "nif-global": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "nif-global",
    "name": "NIF Global Kolkata",
    "shortName": "NIF Global",
    "short_name": "NIF Global",
    "location": "Kolkata, West Bengal",
    "type": "Design Institute",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Design",
      "Arts"
    ],
    "officialSite": "https://nifglobalkolkata.com",
    "official_site": "https://nifglobalkolkata.com"
  },
  "rcciit": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "rcciit",
    "name": "RCC Institute of Information Technology",
    "shortName": "RCCIIT",
    "short_name": "RCCIIT",
    "location": "Kolkata, West Bengal",
    "type": "Engineering College",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering"
    ],
    "officialSite": "https://rcciit.org",
    "official_site": "https://rcciit.org"
  },
  "seacom": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "seacom",
    "name": "Seacom Skills University",
    "shortName": "Seacom",
    "short_name": "Seacom",
    "location": "Birbhum, West Bengal",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Science",
      "Arts"
    ],
    "officialSite": "https://seacomskillsuniversity.org",
    "official_site": "https://seacomskillsuniversity.org"
  },
  "bgc": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "bgc",
    "name": "Bengal Group of Colleges",
    "shortName": "BGC",
    "short_name": "BGC",
    "location": "Bolpur, West Bengal",
    "type": "Private College Group",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Arts"
    ],
    "officialSite": "https://bgc.org.in",
    "official_site": "https://bgc.org.in"
  },
  "krishna-group": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "krishna-group",
    "name": "Krishna Group of Colleges",
    "shortName": "Krishna Group",
    "short_name": "Krishna Group",
    "location": "Bijnor, Uttar Pradesh",
    "type": "Educational Group",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Arts"
    ],
    "officialSite": "https://krishnacollegebijnor.in/",
    "official_site": "https://krishnacollegebijnor.in/"
  },
  "sitm": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "sitm",
    "name": "SITM",
    "shortName": "SITM",
    "short_name": "SITM",
    "location": "India",
    "type": "Institute",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "#",
    "official_site": "#"
  },
  "mr-group": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "mr-group",
    "name": "MR Group of Institutions",
    "shortName": "MR Group",
    "short_name": "MR Group",
    "location": "India",
    "type": "Educational Group",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business"
    ],
    "officialSite": "#",
    "official_site": "#"
  },
  "kiit": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "kiit",
    "name": "Kalinga Institute of Industrial Technology (KIIT)",
    "shortName": "KIIT",
    "short_name": "KIIT",
    "location": "Bhubaneswar, Odisha",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Law",
      "Medicine",
      "Design",
      "Arts"
    ],
    "officialSite": "https://kiit.ac.in/",
    "official_site": "https://kiit.ac.in/"
  },
  "srm": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "srm",
    "name": "SRM Institute of Science and Technology",
    "shortName": "SRM",
    "short_name": "SRM",
    "location": "Chennai, Tamil Nadu",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Law",
      "Medicine"
    ],
    "officialSite": "https://www.srmist.edu.in/",
    "official_site": "https://www.srmist.edu.in/"
  },
  "vit": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "vit",
    "name": "Vellore Institute of Technology (VIT)",
    "shortName": "VIT",
    "short_name": "VIT",
    "location": "Vellore, Tamil Nadu",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Law"
    ],
    "officialSite": "https://vit.ac.in/",
    "official_site": "https://vit.ac.in/"
  },
  "bits-pilani": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "bits-pilani",
    "name": "Birla Institute of Technology and Science (BITS)",
    "shortName": "BITS Pilani",
    "short_name": "BITS Pilani",
    "location": "Pilani, Rajasthan",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science"
    ],
    "officialSite": "https://www.bits-pilani.ac.in/",
    "official_site": "https://www.bits-pilani.ac.in/"
  },
  "soa": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "soa",
    "name": "Siksha 'O' Anusandhan (SOA) University",
    "shortName": "SOA",
    "short_name": "SOA",
    "location": "Bhubaneswar, Odisha",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Law",
      "Medicine"
    ],
    "officialSite": "https://www.soa.ac.in/",
    "official_site": "https://www.soa.ac.in/"
  },
  "cv-raman": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "cv-raman",
    "name": "C. V. Raman Global University",
    "shortName": "CV Raman",
    "short_name": "CV Raman",
    "location": "Bhubaneswar, Odisha",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science"
    ],
    "officialSite": "https://cgu-odisha.ac.in/",
    "official_site": "https://cgu-odisha.ac.in/"
  },
  "manipal": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "manipal",
    "name": "Manipal Academy of Higher Education",
    "shortName": "Manipal",
    "short_name": "Manipal",
    "location": "Manipal, Karnataka",
    "type": "Private Deemed University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Medicine",
      "Design"
    ],
    "officialSite": "https://manipal.edu/",
    "official_site": "https://manipal.edu/"
  },
  "ms-ramaiah": {
    "desc": "A premier educational institution offering state-of-the-art infrastructure, experienced faculty, and industry-aligned curricula to prepare students for leadership roles in their respective fields.",
    "courses": [
      "Undergraduate Programs",
      "Postgraduate Specializations",
      "Vocational/Certificate Programs"
    ],
    "admission": "Admission is based on academic merit, performance in relevant qualifying examinations, or institutional counseling rounds.",
    "exams": "National / State level entrance tests or College Merit Assessment.",
    "fees": "Subsidized or competitive tuition structure based on merit brackets.",
    "placements": "Active placement cell coordinating campus interviews, internship cycles, and direct corporate recruitment channels.",
    "student_life": "Rich campus atmosphere featuring student societies, technical seminars, cultural symposiums, and sports tournaments.",
    "id": "ms-ramaiah",
    "name": "M. S. Ramaiah University of Applied Sciences",
    "shortName": "MS Ramaiah",
    "short_name": "MS Ramaiah",
    "location": "Bangalore, Karnataka",
    "type": "Private University",
    "logo": null,
    "img": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "categories": [
      "Engineering",
      "Business",
      "Science",
      "Design",
      "Medicine"
    ],
    "officialSite": "https://www.msruas.ac.in/",
    "official_site": "https://www.msruas.ac.in/"
  }
};


// =====================================================
// API ENDPOINTS
// =====================================================

// Retrieve all available careers, optionally filtered by category name
app.get('/api/careers', (req, res) => {
  const category = req.query.category;
  const careersList = Object.values(CAREERS_DB);
  if (category) {
    const filtered = careersList.filter(
      c => c.category.toUpperCase() === category.toUpperCase()
    );
    return res.json(filtered);
  }
  return res.json(careersList);
});

// Retrieve complete editorial details for a specific career
app.get('/api/careers/:career_id', (req, res) => {
  const careerId = req.params.career_id;
  if (!(careerId in CAREERS_DB)) {
    return res.status(404).json({ detail: "Career profile not found." });
  }
  return res.json(CAREERS_DB[careerId]);
});

// Retrieve all colleges, optionally filtered by discipline tags
app.get('/api/colleges', (req, res) => {
  const filterCat = req.query.filter_cat;
  const collegesList = Object.values(COLLEGES_DB);
  if (filterCat) {
    const filtered = collegesList.filter(col =>
      col.categories.some(cat => cat.toLowerCase() === filterCat.toLowerCase())
    );
    return res.json(filtered);
  }
  return res.json(collegesList);
});

// Retrieve complete courses, exams, fees and placement details for a college
app.get('/api/colleges/:college_id', (req, res) => {
  const collegeId = req.params.college_id;
  if (!(collegeId in COLLEGES_DB)) {
    return res.status(404).json({ detail: "College profile not found." });
  }
  return res.json(COLLEGES_DB[collegeId]);
});

// Recommendation Engine
app.post('/api/recommend', (req, res) => {
  const { answers } = req.body;
  if (!answers || !Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ detail: "Answers list cannot be empty." });
  }

  const total = answers.length;
  const categories = ["BUILD", "CREATE", "DISCOVER", "LEAD", "HELP", "ANALYZE"];
  const counts = { BUILD: 0, CREATE: 0, DISCOVER: 0, LEAD: 0, HELP: 0, ANALYZE: 0 };

  for (const ans of answers) {
    const ansUpper = ans.toUpperCase();
    if (ansUpper in counts) {
      counts[ansUpper]++;
    }
  }

  // Calculate percentages
  const matches = categories.map(c => {
    const pct = total > 0 ? (counts[c] / total) * 100 : 0;
    return { name: c, pct: Number(pct.toFixed(1)) };
  });

  // Sort matches by percentage descending
  matches.sort((a, b) => b.pct - a.pct);
  const topCat = matches[0].name;

  // Define profiles based on top scoring category
  const profiles = {
    "BUILD": {
      "personality": "YOU'RE A BUILDER.",
      "traits": "Curious. Analytical. Persistent.",
      "desc": "You derive deep fulfillment from engineering systems, writing code, and crafting structural designs. You love understanding how things work and assembling them into functional solutions."
    },
    "CREATE": {
      "personality": "YOU'RE A CREATOR.",
      "traits": "Aesthetic. Intuitive. Expressive.",
      "desc": "You are guided by visual harmony, narrative storytelling, and human experience. You excel at taking abstract, emotional thoughts and giving them form and design."
    },
    "DISCOVER": {
      "personality": "YOU'RE A DISCOVERER.",
      "traits": "Inquisitive. Methodical. Skeptical.",
      "desc": "You have an insatiable urge to understand the natural laws and secrets of the world. You thrive in research labs, compiling details, and proving scientific claims."
    },
    "LEAD": {
      "personality": "YOU'RE A LEADER.",
      "traits": "Strategic. Charismatic. Decisive.",
      "desc": "You love coordinating resources, delegating tasks, and driving groups toward big deadlines. You are naturally motivated by scaling startups and corporate organizations."
    },
    "HELP": {
      "personality": "YOU'RE A HELPER.",
      "traits": "Empathetic. Altruistic. Resilient.",
      "desc": "Your primary drive is human care, healing, and coaching. You find career satisfaction in clinical counseling, diagnosis, and developing communities."
    },
    "ANALYZE": {
      "personality": "YOU'RE AN ANALYZER.",
      "traits": "Precise. Quantitative. Objective.",
      "desc": "You love spreadsheets, financial sheets, and legal research. You excel at examining large systems, identifying patterns, and finding optimization details."
    }
  };

  const profile = profiles[topCat] || profiles["BUILD"];

  // Filter recommended careers matching top two categories
  const recCategories = [matches[0].name, matches[1].name];
  const recommendedCareers = Object.values(CAREERS_DB)
    .filter(c => recCategories.includes(c.category))
    .map(c => ({
      id: c.id,
      name: c.name,
      category: c.category,
      short_desc: c.short_desc
    }));

  // Filter recommended colleges matching categories
  const catMapping = {
    "BUILD": ["Engineering", "Research"],
    "CREATE": ["Design", "Arts"],
    "DISCOVER": ["Research", "Medicine"],
    "LEAD": ["Business"],
    "HELP": ["Medicine"],
    "ANALYZE": ["Law", "Business"]
  };

  const allowedCollegeCats = [];
  for (const rc of recCategories) {
    if (catMapping[rc]) {
      allowedCollegeCats.push(...catMapping[rc]);
    }
  }

  const recommendedColleges = Object.values(COLLEGES_DB)
    .filter(col => col.categories.some(cc => allowedCollegeCats.includes(cc)))
    .map(col => ({
      id: col.id,
      name: col.name,
      short_name: col.short_name,
      location: col.location
    }));

  return res.json({
    personality: profile.personality,
    traits: profile.traits,
    desc: profile.desc,
    matches: matches,
    careers: recommendedCareers.slice(0, 4),
    colleges: recommendedColleges.slice(0, 3)
  });
});

// Compare specifications of two career profiles side-by-side
app.post('/api/compare', (req, res) => {
  const { career_a, career_b } = req.body;
  if (!career_a || !career_b || !(career_a in CAREERS_DB) || !(career_b in CAREERS_DB)) {
    return res.status(404).json({ detail: "One or both career profiles not found in database." });
  }

  const ca = CAREERS_DB[career_a];
  const cb = CAREERS_DB[career_b];

  return res.json({
    career_a: {
      name: ca.name,
      duration: ca.duration,
      skills: ca.skills,
      work_env: ca.work_env,
      growth: ca.growth,
      challenges: ca.reality.challenging
    },
    career_b: {
      name: cb.name,
      duration: cb.duration,
      skills: cb.skills,
      work_env: cb.work_env,
      growth: cb.growth,
      challenges: cb.reality.challenging
    }
  });
});

// Receive student counseling details and schedule a counselor briefing
app.post('/api/counseling', (req, res) => {
  const { name, qualification, interested_in, confused_about, contact } = req.body;
  console.log(`NEW COUNSELING REQUEST: Name=${name}, Qualification=${qualification}, InterestedIn=${interested_in}, ConfusedAbout=${confused_about}, Contact=${contact}`);
  return res.json({
    status: "success",
    message: "Counseling request submitted successfully. An A & J Career Guidance counselor will connect with you within 24 hours."
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

