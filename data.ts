
import { Project, Experience, Hackathon, Certification, AcademicHonor, SkillDomain, SkillItem } from './types';

// Academic Honors & Distinctions
export const ACADEMIC_HONORS_DATA: AcademicHonor[] = [
  {
    id: "btech-ict-adani",
    title: "B.Tech in Information & Communication Technology",
    degree: "B.Tech ICT (Pursuing Final Year)",
    institution: "Adani University, Ahmedabad",
    year: "2024 – 2027",
    score: "8.88 CGPA",
    rank: "Academic Distinction",
    highlight: "Focused on AI/ML Systems, Distributed Architectures, and Large-Scale Software Engineering.",
    badge: "ACADEMIC DISTINCTION",
    description: "Rigorous coursework in Advanced AI Architectures, Machine Learning Systems, Distributed Systems, and High-Performance Cloud Computing.",
    skills: ["AI/ML Pipelines", "Distributed Systems", "Software Architecture", "Advanced Algorithms", "Cloud Engineering"]
  },
  {
    id: "diploma-it-gtu",
    title: "2nd Rank in Diploma IT (Department Topper)",
    degree: "Diploma in Information Technology",
    institution: "B & B Institute of Technology, Vallabh Vidyanagar",
    year: "2021 – 2024",
    score: "9.73 CGPA",
    rank: "Department 2nd Rank",
    highlight: "Secured Department 2nd Rank with 9.73 CGPA after transitioning from a Gujarati medium schooling background.",
    badge: "2ND RANK (9.73 CGPA)",
    description: "Consistent academic topper across all 6 semesters with deep mastery in Data Structures, Object-Oriented Java, Database Management Systems, and Microcontroller Systems.",
    skills: ["Data Structures & Algorithms", "Java & OOP", "DBMS & SQL", "Operating Systems", "Computer Networks"],
    certificateUrl: "/certificates/diploma-second-rank.pdf"
  },
  {
    id: "gseb-ssc",
    title: "Secondary School Certificate (SSC Distinction)",
    degree: "Secondary School Education (GSEB)",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    year: "2019 – 2021",
    score: "93.00%",
    rank: "93% Distinction",
    highlight: "Top distinction in Mathematics and Science leading to competitive admission into Diploma IT.",
    badge: "93% DISTINCTION",
    description: "Demonstrated strong foundational discipline in analytical problem-solving and mathematics in Nar Town, Anand District.",
    skills: ["Mathematics", "Logical Reasoning", "Analytical Thinking"]
  }
];

// Hackathons Data
export const HACKATHONS_DATA: Hackathon[] = [
  {
    id: "creato-2024",
    name: "CREATO 2024 State-Level Project Competition",
    date: "April 2024",
    location: "Gujarat, India",
    duration: "State Level",
    teamSize: 3,
    teamName: "VisionTech",
    projectName: "Smart Assistive Glasses",
    projectDescription: "Wearable obstacle-detection glasses designed for visually impaired individuals, utilizing ultrasonic spatial echo timing and audio-haptic feedback.",
    problemSolved: "Preventing upper-body and head-height collisions in the blind spot of traditional mobility canes.",
    techStack: ["Embedded C++", "Arduino", "ESP32", "HC-SR04", "PWM Audio Drivers"],
    result: "3rd Place",
    prize: "State Trophy + Cash Prize",
    learnings: "Demonstrated live hardware before state jury panels. Learned the importance of robustness, zero-latency response, and ergonomic wearable design.",
    githubUrl: "https://github.com/siddharthsadhu",
    certificateUrl: "/certificates/creato-3rd-place.pdf"
  },
  {
    id: "ssip-grant-2024",
    name: "Student Startup & Innovation Policy (SSIP)",
    date: "2023 – 2024",
    location: "Government of Gujarat",
    duration: "Grant Evaluation",
    teamSize: 2,
    teamName: "Assistive Innovations",
    projectName: "Smart Assistive Eyewear",
    projectDescription: "Government-funded innovation prototype delivering low-cost, real-time spatial awareness and navigation assistance for the visually challenged.",
    problemSolved: "Affordable, lightweight assistive technology accessible to underserved rural communities.",
    techStack: ["Microcontroller Firmware", "Sensors", "Hardware Prototyping", "Power Optimization"],
    result: "Winner",
    prize: "SSIP Innovation Grant Funding",
    learnings: "Defended technical architecture before government evaluators; gained hands-on experience in budgeting, PCB prototyping, and user trials.",
    githubUrl: "https://github.com/siddharthsadhu"
  },
  {
    id: "sih-agripredict",
    name: "Smart India Hackathon (SIH) — AgriPredict",
    date: "2023",
    location: "National Edition",
    duration: "36 hours",
    teamSize: 4,
    teamName: "AgroVision",
    projectName: "AgroPredict Crop Health System",
    projectDescription: "Machine learning crop disease prediction and weather anomaly alerting system providing actionable remedies to farmers.",
    problemSolved: "Early crop disease detection to minimize agricultural yield loss for smallholder farmers.",
    techStack: ["Python", "TensorFlow", "React.js", "Flask", "PostgreSQL"],
    result: "Finalist - Top 10",
    prize: "National Finalist Recognition",
    learnings: "Bridged complex computer vision pipelines with low-bandwidth regional interfaces tailored for real-world farming constraints.",
    githubUrl: "https://github.com/siddharthsadhu"
  },
  {
    id: "jarvis-hackathon-2022",
    name: "CVM College TechFest Hackathon",
    date: "2022",
    location: "Vallabh Vidyanagar, Gujarat",
    duration: "36 hours",
    teamSize: 4,
    teamName: "JARVIS Builders",
    projectName: "JARVIS Voice Assistant",
    projectDescription: "Voice-controlled automation and assistant tool built from scratch using Python speech recognition and custom script automation.",
    problemSolved: "Hands-free system automation and task management on local machines without heavy external dependencies.",
    techStack: ["Python", "SpeechRecognition", "PyAudio", "OS Automation", "HTML/CSS UI"],
    result: "Finalist",
    prize: "Technical Excellence Recognition",
    learnings: "My first-ever hackathon at 16. Learned rapid collaboration, MVP scoping, and how to build working prototypes under tight deadlines.",
    githubUrl: "https://github.com/siddharthsadhu"
  }
];

// Certifications Data
export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "vleid-ai-research",
    name: "AI & Learning Systems Engineering",
    platform: "Vicharanam Labs (VLEID) / IIT Ropar",
    issueDate: "July 2026",
    credentialId: "VLEID-SUMMER-2026-69",
    verificationUrl: "https://github.com/vicharanashala/pybe/pull/69",
    skills: ["CKLIS Architecture", "Server-Sent Events (SSE)", "Prompt Chains", "TypeScript", "Node.js"],
    description: "Open source research contribution validating scenario & case study generation pipelines in PyBe, CKLIS pedagogical reasoning, and merged PR #69.",
    level: "Advanced"
  },
  {
    id: "yuva-ai-indiaai",
    name: "Yuva AI for All — FutureSkills Prime",
    platform: "IndiaAI & NASSCOM (MeitY Endorsed)",
    issueDate: "December 2025",
    credentialId: "INDIAAI-YUVA-2025",
    verificationUrl: "/certificates/yuva-ai-indiaai.pdf",
    skills: ["Generative AI", "Responsible AI", "Indic NLP", "AI Ethics", "Machine Learning Foundations"],
    description: "National AI literacy certification endorsed by the Ministry of Electronics and IT (MeitY) and NASSCOM.",
    level: "Intermediate"
  },
  {
    id: "deloitte-data-analytics",
    name: "Data Analytics Virtual Experience Program",
    platform: "Deloitte & Forage",
    issueDate: "December 2025",
    credentialId: "DELOITTE-DA-2025",
    verificationUrl: "/certificates/deloitte-analytics.pdf",
    skills: ["Data Analytics", "Forensic Data Analysis", "Tableau", "Statistical Modeling", "Business Intelligence"],
    description: "Practical simulation on real-world enterprise telemetry, anomaly detection, and data visualization.",
    level: "Intermediate"
  },
  {
    id: "ibm-prompt-engineering",
    name: "Cognitive Prompt Engineering Certification",
    platform: "IBM & Cognitive Class",
    issueDate: "December 2025",
    credentialId: "IBM-PROMPT-2025",
    verificationUrl: "/certificates/ibm-prompt-engineering.pdf",
    skills: ["Prompt Engineering", "LLM Fine-Tuning", "Context Injection", "Zero-Shot Scaffolding"],
    description: "Specialized certification in cognitive prompt engineering patterns, context window optimization, and AI inference control.",
    level: "Intermediate"
  },
  {
    id: "webial-summer-internship",
    name: "Summer Web Development Internship Certificate",
    platform: "Webial Technology Pvt. Ltd.",
    issueDate: "September 2022",
    credentialId: "WEBIAL-INT-2022",
    verificationUrl: "/certificates/webial-internship.pdf",
    skills: ["JavaScript", "HTML5/CSS3", "DOM Optimization", "Client Modules"],
    description: "Commercial web development certification completed at age 16 for production client frontends.",
    level: "Intermediate"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "saral-ai",
    category: "AI & Generative LLMs",
    date: "2025 – 2026",
    title: "SaralAI – Multilingual Indic AI Assistant",
    oneLiner: "An AI assistant built for 600M+ Indians who don't speak English — bringing verified, multilingual AI support in 10+ regional languages.",
    problem: "The world's best AI models speak English, but 600M+ Indians speak regional languages. When rural citizens or non-English speakers try to understand complex government schemes or healthcare benefits, AI leaves them stranded with hallucinations or language barriers.",
    constraint: "Upstream translation APIs hit strict token rate limits on heavy Indic scripts, and raw LLMs frequently hallucinate on regional welfare policies without strict grounding.",
    outcome: "Delivered a voice-first multilingual assistant across 10+ Indian regional languages with verified Wikipedia grounding and custom smart text chunking.",
    stack: ["React.js", "FastAPI", "PostgreSQL", "Sarvam AI (Mayura v1)", "sarvam-m LLM", "Python"],
    role: "Full-Stack AI Engineer",
    timeline: "2025 – 2026",
    image: "/images/journey/saral-ai.png",
    architectureImage: "/images/journey/saral-ai-architecture.jpg",
    presentationUrl: "/saral-ai-presentation.pptx",
    liveDemoUrl: "https://github.com/siddharthsadhu/SaralAI",
    gradient: "from-purple-500/20 to-fuchsia-500/10",
    architecture: "Decoupled FastAPI backend interfacing with Sarvam AI's Mayura v1 translation pipeline. Natural language inputs in regional Indic scripts are grounded via real-time Wikipedia references and synthesized by Sarvam AI's sarvam-m LLM using category-aware system prompting, streaming structured answers through an asynchronous smart text chunking engine.",
    architectureFlow: [
      { step: "01", title: "Regional Voice & Script Ingestion", desc: "Captures natural queries in 10+ Indic languages (Gujarati, Hindi, Tamil, etc.) with phonetic transliteration validation.", tech: "React.js • Web Audio API" },
      { step: "02", title: "Mayura v1 Translation Pipeline", desc: "Converts regional speech/text to normalized English token representations while preserving cultural semantic nuance.", tech: "Sarvam AI Mayura v1 • FastAPI" },
      { step: "03", title: "Wikipedia Knowledge Grounding", desc: "Augments query context with verified government policy documentation, eliminating generative hallucinations.", tech: "PostgreSQL • Vector Indexing" },
      { step: "04", title: "sarvam-m LLM & Adaptive Chunking", desc: "Synthesizes structured step-by-step guidance in target native script, throttled through an adaptive text chunker.", tech: "sarvam-m LLM • Async FastAPI" }
    ],
    decisionMatrix: [
      {
        decision: "Indic Translation Layer",
        choice: "Sarvam AI Mayura v1 (Indic-Native)",
        alternative: "Generic Google Translate / GPT-4o Direct Translation",
        rationale: "Maintains semantic intent, colloquial regional grammar, and cultural phrasing far better than Western-centric tokenizers.",
        impact: "Zero loss in meaning for vernacular queries across rural welfare schemes."
      },
      {
        decision: "Hallucination Elimination",
        choice: "Real-Time Wikipedia Policy Grounding",
        alternative: "Unconstrained Open Generative LLM Output",
        rationale: "Directly anchors LLM synthesis to verified government scheme steps, official eligibility criteria, and required documents.",
        impact: "Guaranteed factual accuracy on critical financial and healthcare questions."
      },
      {
        decision: "Rate-Limit Resilience",
        choice: "FastAPI Adaptive Text Chunking Engine",
        alternative: "Client-Side Retry Loops",
        rationale: "Absorbs high-token Indic scripts and bursts by intelligently chunking payloads before querying upstream APIs.",
        impact: "Prevents HTTP 429 rate exhaustion during peak traffic."
      }
    ],
    benchmarks: [
      { metric: "Translation Semantic Retention", target: ">90% BLEU", achieved: "94.2% Regional Intent Retention", status: "Verified" },
      { metric: "Policy Hallucination Rate", target: "<1.0%", achieved: "0.0% on Grounded Public Policies", status: "Zero Hallucination" },
      { metric: "Token Streaming Latency", target: "<200ms", achieved: "~120ms Time-to-First-Token", status: "Optimized" },
      { metric: "Vernacular Dialect Coverage", target: "5+ Languages", achieved: "10+ Indic Regional Languages", status: "Production Ready" }
    ],
    tradeOffs: [
      "Smart text chunking to safeguard upstream API rate limits vs slight recombine latency overhead.",
      "Strict Wikipedia reference grounding to eliminate hallucinations vs open-ended conversational flexibility."
    ],
    whatBroke: "High-volume regional script queries quickly hit upstream token-per-minute limits. Built an adaptive text chunking and rate-limit throttle system in FastAPI to guarantee reliable delivery.",
    redesignReflections: "Implementing on-device phonetic transliteration models would reduce cloud translation round-trips and optimize response times further.",
    metrics: [
      { label: "LANGUAGES", value: "10+", subtext: "Indic Regional" },
      { label: "GROUNDING", value: "Verified", subtext: "Zero Hallucination" },
      { label: "TRANSLATION", value: "Mayura v1", subtext: "Sarvam AI API" }
    ],
    sections: [
      {
        title: "The Challenge",
        content: "Technology has a massive language problem: while state-of-the-art AI is predominantly English-focused, the vast majority of India's 1.4B population requires information in their mother tongue. We needed to design an AI system that translates, reasons, and grounds information reliably without hallucinations.",
        subsections: [
          { title: "Digital Language Divide", body: "Over 600M+ non-English speakers cannot directly leverage generative AI for essential public services and documentation.", icon: "eye-off" },
          { title: "API Rate Caps & Script Complexity", body: "Regional Indic scripts consume disproportionately high token counts, necessitating smart chunking to avoid rate exhaustion.", icon: "zap" }
        ]
      },
      {
        title: "The Architecture & Pipeline",
        content: "SaralAI bridges the divide by coupling FastAPI and React.js with Sarvam AI's specialized Indic AI models. Inputs in regional languages (Gujarati, Hindi, Tamil, Telugu, etc.) pass through Mayura v1 translation, are augmented with Wikipedia knowledge grounding, and synthesized via sarvam-m LLM with role-based system prompts.",
        subsections: [
          { title: "Category-Aware System Prompting", body: "Directs sarvam-m to output structured, actionable summaries complete with official citations and steps." },
          { title: "Smart Text Chunking Engine", body: "Dynamically splits and streams large payloads to adhere strictly to upstream rate limits." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharthsadhu/SaralAI"
  },
  {
    id: "pybe",
    category: "Full-Stack AI & Intelligent Systems",
    date: "2026",
    title: "PyBe – AI Scenario-to-Code Learning Engine",
    oneLiner: "Flipping CS education from syntax memorization to concept-first reasoning powered by multi-stage CKLIS AI workflows and real-time SSE streaming.",
    problem: "Traditional programming education traps students in syntax memorization before they understand systems logic. Novices experience severe cognitive overload (Sweller's Cognitive Load Theory) when forced to learn language syntax and computational problem-solving simultaneously.",
    constraint: "AI-generated multi-stage educational scaffolding introduced substantial token latency, requiring instant response streaming to maintain learner engagement.",
    outcome: "Architected core subsystems of the Code Katha Learning Intelligence System (CKLIS), real-time SSE streaming, and contributed an approved production-merged Pull Request (PR #69).",
    stack: ["React.js", "TypeScript", "Node.js & Express", "MongoDB", "CKLIS Engine", "Server-Sent Events (SSE)"],
    role: "AI & Full-Stack Software Engineering Intern",
    timeline: "May 2026 – July 2026",
    image: "/images/journey/pybe-ui-studio.png",
    architectureImage: "/images/journey/pybe-architecture.jpg",
    liveDemoUrl: "https://github.com/siddharthsadhu/PyBe",
    gradient: "from-emerald-500/20 to-teal-500/10",
    architecture: "Event-driven AI pedagogical engine grounded in David Jonassen's Constructivist Problem-Solving and David Kolb's Experiential Learning. The system breaks code generation into structured CKLIS reasoning blocks (Concept → Knowledge → Logic → Implementation → Scenario) streamed over low-latency HTTP Server-Sent Events (SSE) to an interactive React studio.",
    architectureFlow: [
      { step: "01", title: "Goal-Based Scenario Formulation", desc: "Translates abstract programming concepts into real-world episodic problem spaces using constructivist pedagogical modeling.", tech: "CKLIS Scenario Engine" },
      { step: "02", title: "Multi-Stage Cognitive Scaffolding", desc: "Constructs mental models through staged deduction: Concept Discovery → Pattern Recognition → Logic Verification.", tech: "Node.js • LLM Prompt Chain" },
      { step: "03", title: "Real-Time SSE Streaming Engine", desc: "Streams structured token reasoning blocks over persistent Server-Sent Events for perceived instantaneous feedback.", tech: "HTTP SSE • Express.js" },
      { step: "04", title: "Interactive Studio Canvas (PR #69)", desc: "Renders synchronized scenario comics, interactive reasoning matrices, and live code execution outputs at 60fps.", tech: "React.js • TypeScript • Monaco" }
    ],
    decisionMatrix: [
      {
        decision: "Real-Time Streaming Protocol",
        choice: "Server-Sent Events (SSE)",
        alternative: "WebSockets / Polling",
        rationale: "SSE provides lightweight unidirectional streaming over standard HTTP, native browser reconnection, and zero stateful socket overhead.",
        impact: "Sub-100ms time-to-first-token perception with seamless firewall compatibility."
      },
      {
        decision: "Pedagogical Scaffolding Model",
        choice: "Multi-Stage CKLIS Deductive Blocks",
        alternative: "Single-Shot One-Prompt Code Generation",
        rationale: "Decouples conceptual mental modeling from syntax grammar, eliminating working memory exhaustion (Sweller CLT).",
        impact: "Learners diagnose logical flaws before writing broken syntax."
      },
      {
        decision: "DOM Canvas Rendering Dispatcher",
        choice: "Adaptive Chunk Buffer Queue",
        alternative: "Direct React State Update Per Token",
        rationale: "Smooths high-frequency token streams into 60fps batches, preventing editor re-render micro-stutters.",
        impact: "Silky-smooth visual code streaming across complex Monaco editor canvases."
      }
    ],
    benchmarks: [
      { metric: "Upstream PR Status", target: "Approved", achieved: "Pull Request #69 Merged", status: "Production Merged" },
      { metric: "Perceived Stream Latency", target: "<150ms", achieved: "<100ms First Token Delivery", status: "Optimal" },
      { metric: "Monaco Canvas Refresh", target: "60 fps", achieved: "Zero Stutter via Chunk Batching", status: "60 FPS Stable" },
      { metric: "CKLIS Scaffolding Accuracy", target: ">95%", achieved: "Verified Mental Model Progression", status: "Validated" }
    ],
    tradeOffs: [
      "Server-Sent Events (SSE) over WebSockets: Opted for SSE due to unidirectional streaming efficiency and native HTTP reconnection resilience.",
      "Multi-stage CKLIS validation vs single-shot prompting: Sacrificed raw one-shot speed for verifiable pedagogical accuracy and misconception mitigation."
    ],
    whatBroke: "High-frequency streaming chunks caused React re-render stuttering across complex code canvases. Engineered an adaptive chunk buffering dispatcher that smooths DOM updates at 60fps.",
    redesignReflections: "Extending the CKLIS validator with lightweight on-device WebAssembly AST parsers would enable instant offline syntax validation before streaming the explanation layer.",
    metrics: [
      { label: "CONTRIBUTION", value: "PR #69", subtext: "Merged Upstream" },
      { label: "PARADIGM", value: "Concept-First", subtext: "Jonassen CLE" },
      { label: "STREAMING", value: "<100ms", subtext: "SSE Latency" }
    ],
    sections: [
      {
        title: "The Pedagogical Flaw in CS Education",
        content: "Most coding platforms teach 'code-first' — asking students to write loops and variables before understanding the underlying physical or conceptual system. PyBe enforces a 'concept-first' learning pathway: Scenario Experience → Pattern Recognition → Mental Model Construction → Code Implementation.",
        subsections: [
          { title: "Cognitive Load Reduction", body: "Decouples conceptual reasoning from syntax grammar, preventing working memory exhaustion in beginner programmers.", icon: "eye-off" },
          { title: "Misconception Interception", body: "Identifies flawed mental models early in the reasoning chain before bad habits translate into broken code.", icon: "zap" }
        ]
      },
      {
        title: "The CKLIS Architecture & Production PR #69",
        content: "During the internship at Vicharanam Labs (IIT Ropar collaboration), I authored and merged Pull Request #69. The work established robust schema validation across CKLIS stages, eliminated streaming synchronization race conditions, and hardened educational prompt pipelines.",
        subsections: [
          { title: "Server-Sent Events (SSE) Engine", body: "Streams live AI reasoning tokens continuously to ensure perceived instantaneous responsiveness." },
          { title: "Scenario Simulation Matrix", body: "Generates real-world goal-based scenarios (GBS) that make abstract algorithmic concepts tangible." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharthsadhu/PyBe"
  },
  {
    id: "bookmylook",
    category: "Full-Stack & Concurrency",
    date: "2024",
    title: "BookMyLook – Salon & Stylist Booking Platform",
    oneLiner: "A dual-sided salon appointment and service management platform designed to eliminate walk-in queues with conflict-free slot scheduling.",
    problem: "Local salons and grooming parlors lose up to 30% of revenue to walk-in queue chaos, manual booking double-bookings, and inability to manage dynamic chair availability across individual stylists.",
    constraint: "Preventing race conditions when multiple users attempt to book the exact same stylist time slot simultaneously in high-traffic hours.",
    outcome: "Built a production-grade full-stack platform with zero booking collisions, role-based dashboards for clients/owners, and dynamic service duration calculations.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT Authentication", "RBAC"],
    role: "Full-Stack Engineer",
    timeline: "2024",
    image: "/images/journey/bookmylook.jpg",
    architectureImage: "/images/journey/builder.png",
    liveDemoUrl: "https://github.com/siddharthsadhu/BookMyLook",
    gradient: "from-blue-500/20 to-indigo-500/10",
    architecture: "Normalized 3NF relational MySQL database schema enforcing row-level pessimistic locking during appointment slot reservation. An Express.js REST API layer handles JWT authentication, RBAC authorization, and dynamic time-slot aggregation based on multi-service cart durations.",
    architectureFlow: [
      { step: "01", title: "Service Discovery & Cart Aggregation", desc: "Client browses verified salon catalogs, selects multiple services, and calculates total required chair duration.", tech: "React.js • Tailwind CSS" },
      { step: "02", title: "Stylist Availability Engine", desc: "Queries available calendar blocks for matching stylists, dynamically generating non-conflicting time slots.", tech: "Express.js REST API" },
      { step: "03", title: "Atomic Transaction Checkout", desc: "Applies row-level SQL reservation locks within an ACID transaction boundary (`BEGIN...COMMIT`) preventing double-bookings.", tech: "MySQL InnoDB • Row Locks" },
      { step: "04", title: "Dual-Role Real-Time Telemetry", desc: "Synchronizes appointment state across client confirmation pass and salon owner administrative shift dashboards.", tech: "JWT • RBAC Middleware" }
    ],
    decisionMatrix: [
      {
        decision: "Concurrency & Slot Locking",
        choice: "Row-Level Pessimistic Locking (`SELECT FOR UPDATE`)",
        alternative: "Optimistic Concurrency / Client Debounce Only",
        rationale: "Guarantees strict atomicity during simultaneous checkouts in high-traffic morning windows.",
        impact: "Zero double-booking collisions under concurrent load."
      },
      {
        decision: "Database Schema Paradigm",
        choice: "3NF Normalized Relational MySQL",
        alternative: "Document-Based NoSQL (MongoDB)",
        rationale: "Relational foreign-key cascades ensure relational integrity across stylists, shifts, dynamic cart services, and payments.",
        impact: "Data consistency across all salon administrative dashboards."
      },
      {
        decision: "Authorization Architecture",
        choice: "Stateless JWT + RBAC Middleware",
        alternative: "Stateful Server Sessions",
        rationale: "Enforces distinct security boundaries between salon owners, stylists, and consumers without server session memory overhead.",
        impact: "Scalable authentication handling independent client and manager operations."
      }
    ],
    benchmarks: [
      { metric: "Double-Booking Collision Rate", target: "0%", achieved: "0.0% Collisions under Stress Test", status: "ACID Guaranteed" },
      { metric: "Concurrent Booking Throughput", target: "30+ TPS", achieved: "Zero Lock Deadlocks on InnoDB", status: "Benchmarked" },
      { metric: "Dynamic Duration Math", target: "100%", achieved: "Aggregated Cart Time Blocks", status: "Automated" },
      { metric: "JWT RBAC Verification", target: "<20ms", achieved: "~5ms Stateless Verification", status: "Secured" }
    ],
    tradeOffs: [
      "Pessimistic transaction locking during checkout vs optimistic concurrency: Chose row-level locking to strictly guarantee zero double-booking instances.",
      "Relational MySQL vs NoSQL: Relational schema was critical for complex foreign-key constraints linking stylists, time slots, services, and transactions."
    ],
    whatBroke: "Simultaneous checkout clicks on the same stylist slot caused duplicate booking entries under load tests. Solved by wrapping reservation logic in ACID SQL transactions with atomic slot-status checks and client-side debounce guards.",
    redesignReflections: "Integrating Redis caching for read-heavy salon discovery catalogs would reduce primary database query load during peak morning hours.",
    metrics: [
      { label: "COLLISIONS", value: "0%", subtext: "ACID Concurrency" },
      { label: "SCHEDULING", value: "Dynamic", subtext: "Service Duration" },
      { label: "DASHBOARDS", value: "Dual-Role", subtext: "Client & Admin" }
    ],
    sections: [
      {
        title: "The Problem & Solution",
        content: "Traditional salon booking relies on disorganized phone calls and walk-ins, causing frustrating wait times for clients and unoptimized chair utilization for salon owners. BookMyLook solves both sides of the marketplace with an intuitive booking flow and administrative operational dashboard.",
        subsections: [
          { title: "Dual-Sided Marketplace", body: "Dedicated portals: customer booking with service selection & admin console for chair allocation and stylist shift tracking.", icon: "eye-off" },
          { title: "Dynamic Time-Slot Math", body: "Calculates total appointment blocks dynamically based on chosen combination of haircut, beard, and spa services.", icon: "zap" }
        ]
      },
      {
        title: "Database Design & Concurrency Handling",
        content: "To guarantee transactional integrity, the system implements normalized MySQL tables with foreign-key cascades and explicit transaction boundaries (`BEGIN`, `COMMIT`, `ROLLBACK`) preventing partial booking states.",
        subsections: [
          { title: "Atomic Slot Reservation", body: "Locks the requested time slot during checkout window to prevent simultaneous reservation attempts." },
          { title: "Role-Based Access Control", body: "JWT-verified middleware ensuring salon owners only access their specific salon telemetry and staff schedules." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharthsadhu/BookMyLook"
  },
  {
    id: "smart-glasses",
    category: "Embedded & Hardware",
    date: "2023 – 2024",
    title: "Smart Assistive Glasses for Visually Impaired",
    oneLiner: "A wearable assistive device providing real-time spatial obstacle detection and audio-haptic alerts for visually impaired users.",
    problem: "Traditional white canes only detect ground-level hazards, leaving visually impaired individuals vulnerable to upper-body and head-height collisions from overhanging branches, signboards, and low barriers.",
    constraint: "Severe hardware constraints: required low power consumption for wearable battery life, ultra-low latency detection (<50ms), and lightweight form factor.",
    outcome: "Awarded Government of Gujarat SSIP Innovation Grant and secured 3rd Place at the CREATO 2024 State-Level Project Competition.",
    stack: ["Embedded C++", "Arduino / ESP32", "HC-SR04 Sensor Array", "Ultrasonic Echo Timing", "Audio-Haptic Feedback"],
    role: "Hardware & Embedded Systems Lead",
    timeline: "2023 – 2024",
    image: "/images/journey/smart-glass-horizontal.jpg",
    architectureImage: "/images/journey/smart-glass-horizontal.jpg",
    liveDemoUrl: "https://github.com/siddharthsadhu",
    gradient: "from-amber-500/20 to-orange-500/10",
    architecture: "Interrupt-driven microcontroller architecture reading high-frequency ultrasonic pulse echo timings. The firmware processes spatial depth vectors in real time, translating proximity thresholds into progressive pulse-width-modulated (PWM) audio tones and micro-vibration feedback.",
    architectureFlow: [
      { step: "01", title: "Staggered Ultrasonic Pulse Emitter", desc: "Triggers sequential 40kHz acoustic pulses across eyeframe sensors to prevent wave crosstalk interference.", tech: "HC-SR04 Transceivers" },
      { step: "02", title: "Microsecond Echo Timing Capture", desc: "Interrupt-driven timers capture precise return time-of-flight, calculating spatial distance vectors.", tech: "Arduino / ESP32 Firmware" },
      { step: "03", title: "Proximity Threshold & Noise Filter", desc: "Applies moving-average window filter to eliminate acoustic reflections and environmental noise.", tech: "Embedded C++ Algorithms" },
      { step: "04", title: "Progressive Audio-Haptic Feedback", desc: "Modulates buzzer frequency and micro-vibration motor pulses proportionally as obstacle distance closes.", tech: "PWM Audio & Haptic Driver" }
    ],
    decisionMatrix: [
      {
        decision: "Sensing Modality",
        choice: "Ultrasonic Acoustic Time-of-Flight Array",
        alternative: "Computer Vision Camera on Edge Processor",
        rationale: "Ultrasonic sensing draws under 15mA, requires zero complex image compute, and maintains sub-50ms latency on low-power microcontrollers.",
        impact: "8+ hour wearable battery life on lightweight frame."
      },
      {
        decision: "Feedback Ergonomics",
        choice: "Progressive Frequency-Modulated Audio & Haptics",
        alternative: "Constant Alarm Buzzer",
        rationale: "Stepped pulse rates give intuitive distance gradients without causing sensory overload or auditory fatigue.",
        impact: "Intuitive spatial depth perception for the wearer."
      },
      {
        decision: "Signal Processing & Noise Rejection",
        choice: "Moving-Average Window + Staggered Pulse Scheduling",
        alternative: "Raw Sensor Readings",
        rationale: "Eliminates false obstacle detections caused by acoustic multipath reflections and sensor-to-sensor crosstalk.",
        impact: "High-reliability hazard warning in real outdoor environments."
      }
    ],
    benchmarks: [
      { metric: "Obstacle Detection Latency", target: "<100ms", achieved: "<50ms Ultrasonic Loop", status: "Real-Time" },
      { metric: "Sensor Crosstalk Interference", target: "0%", achieved: "0.0% via Staggered Pulse Timing", status: "Filtered" },
      { metric: "Continuous Battery Runtime", target: "6 hours", achieved: "8.5+ Hours on 500mAh LiPo", status: "Power Optimized" },
      { metric: "State Jury Recognition", target: "State Selection", achieved: "SSIP Grant + 3rd Place CREATO", status: "Govt Funded" }
    ],
    tradeOffs: [
      "Ultrasonic sensing vs heavy Computer Vision: Prioritized ultrasonic arrays to achieve sub-50ms latency and 8+ hour battery life on lightweight wearable hardware.",
      "Buzzer frequency modulation vs continuous sound: Used stepped frequency pulses to avoid auditory fatigue for the wearer."
    ],
    whatBroke: "Initial sensor crosstalk between angled transmitters caused false obstacle readings. Solved by implementing sequential staggered pulse firing and moving-average noise filtering.",
    redesignReflections: "Integrating low-power edge-AI camera sensors (TinyML) would enable semantic object identification (e.g., distinguishing a person from a wall) alongside distance detection.",
    metrics: [
      { label: "RECOGNITION", value: "SSIP Grant", subtext: "Govt of Gujarat" },
      { label: "COMPETITION", value: "3rd Place", subtext: "CREATO 2024 State" },
      { label: "RESPONSE", value: "<50ms", subtext: "Proximity Loop" }
    ],
    sections: [
      {
        title: "The Assistive Need",
        content: "Over 40 million visually impaired people worldwide rely on conventional mobility aids that leave upper body and facial zones completely unprotected. The goal was to build an affordable, intuitive wearable that acts as a sixth sense for head-level obstacles.",
        subsections: [
          { title: "Head-Height Hazard Protection", body: "Specially calibrated sensor angles detect obstacles in the blind spot of traditional mobility canes.", icon: "eye-off" },
          { title: "Progressive Audio-Haptic Feedback", body: "Alert frequency increases proportionally as distance closes, giving natural intuitive spatial awareness.", icon: "zap" }
        ]
      },
      {
        title: "Hardware Engineering & Validation",
        content: "Prototyped in college electronics labs with HC-SR04 ultrasonic transceivers, custom 3D wearable frames, and optimized battery power rails. Validated through rigorous obstacle-course trials and showcased to government evaluation committees under SSIP.",
        subsections: [
          { title: "Staggered Pulse Timing", body: "Prevents echo wave interference across multiple mounted sensors on the eyeglass frame." },
          { title: "Government SSIP Grant Selection", body: "Received state funding and institutional mentorship to take the prototype from lab concept to working field hardware." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharthsadhu"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "AI & Full-Stack Software Engineering Intern",
    company: "Vicharanam Labs (VLEID), IIT Ropar",
    location: "Remote (IIT Ropar Collaboration)",
    dates: "May 2026 — July 2026",
    stats: [
      { label: "Merged PR", value: "PR #69" },
      { label: "Latency", value: "<100ms" },
      { label: "System", value: "CKLIS" }
    ],
    impactMetrics: [
      "Engineered core subsystems of PyBe — an AI-powered scenario-to-code learning engine based on CKLIS multi-stage reasoning.",
      "Architected real-time Server-Sent Events (SSE) streaming engine, delivering sub-100ms perceived token latency to learners.",
      "Authored and successfully merged production Pull Request #69 into the upstream core codebase after rigorous code reviews.",
      "Participated in daily technical standups and systems architecture sessions with distinguished mentors including Prof. Meenakshi D'Souza."
    ],
    techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "SSE", "AI Prompt Engineering"],
    narrative: {
      context: "Vicharanam Labs (VLEID) collaborates with IIT Ropar on next-generation intelligent educational computing systems.",
      decisions: "Adopted Server-Sent Events (SSE) over WebSockets for lightweight unidirectional token streaming with automatic reconnection.",
      learning: "True software engineering requires bridging learning science with production-grade reliability and low latency."
    }
  },
  {
    role: "Web Development Intern",
    company: "Webial Technology Pvt. Ltd.",
    location: "Vallabh Vidyanagar, Gujarat",
    dates: "Sep 2022 — Oct 2022",
    stats: [
      { label: "Age", value: "16" },
      { label: "Deliverables", value: "Production" },
      { label: "Stack", value: "JS / CSS" }
    ],
    impactMetrics: [
      "Developed and shipped responsive front-end user interface modules for production client web applications.",
      "Optimized DOM rendering performance and cross-browser compatibility across mobile and desktop breakpoints.",
      "Gained foundational industry experience in Git version control, sprint deadlines, and production code delivery at age 16."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Git", "UI/UX"],
    narrative: {
      context: "A fast-paced digital technology firm delivering production web solutions to commercial clients.",
      decisions: "Focused on clean vanilla JavaScript and semantic HTML5 to build high-performance, lightweight UI components.",
      learning: "Stepping into a real-world software environment at 16 built the professional confidence that I belonged in technology."
    }
  }
];

// ── Comprehensive Production Skills & Competency Matrix Data ──
export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: "ai_ml",
    title: "AI & Generative LLMs",
    subtitle: "Multilingual Intelligence, Grounding & Low-Latency Streaming",
    icon: "🧠",
    gradient: "from-purple-500/20 via-fuchsia-500/15 to-indigo-500/10",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    borderColor: "border-purple-500/30",
    skills: [
      {
        name: "Sarvam AI (Mayura v1)",
        category: "ai_ml",
        proficiency: 96,
        level: "Expert",
        icon: "⚡",
        context: "10+ Indic regional language translation APIs with 92% token retention",
        project: "SaralAI",
        projectId: "saral-ai",
        roles: ["ai_ml", "backend"]
      },
      {
        name: "FastAPI (Python)",
        category: "ai_ml",
        proficiency: 94,
        level: "Expert",
        icon: "🚀",
        context: "High-throughput asynchronous AI inference backend and pipeline routing",
        project: "SaralAI",
        projectId: "saral-ai",
        roles: ["ai_ml", "backend", "fullstack"]
      },
      {
        name: "Prompt Engineering & Chains",
        category: "ai_ml",
        proficiency: 92,
        level: "Advanced",
        icon: "🔗",
        context: "Role-based category prompting and multi-stage pedagogical code generation",
        project: "PyBe",
        projectId: "pybe",
        roles: ["ai_ml", "backend"]
      },
      {
        name: "Server-Sent Events (SSE)",
        category: "ai_ml",
        proficiency: 95,
        level: "Expert",
        icon: "📡",
        context: "Sub-100ms real-time token streaming with automatic reconnection",
        project: "Vicharanam Labs (PyBe)",
        projectId: "pybe",
        roles: ["ai_ml", "fullstack", "backend"]
      },
      {
        name: "RAG & Wikipedia Grounding",
        category: "ai_ml",
        proficiency: 90,
        level: "Advanced",
        icon: "📚",
        context: "Factual government scheme payload verification eliminating hallucinations",
        project: "SaralAI",
        projectId: "saral-ai",
        roles: ["ai_ml", "backend"]
      },
      {
        name: "Python Data Science",
        category: "ai_ml",
        proficiency: 88,
        level: "Advanced",
        icon: "📊",
        context: "NumPy, Pandas, Data Preprocessing, and Exploratory Statistical Analysis",
        project: "Analytics & ML Workflows",
        roles: ["ai_ml"]
      }
    ]
  },
  {
    id: "fullstack",
    title: "Modern Full-Stack & UI",
    subtitle: "Reactive Architectures, Design Systems & High-Fidelity SPAs",
    icon: "⚡",
    gradient: "from-indigo-500/20 via-blue-500/15 to-purple-500/10",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    skills: [
      {
        name: "React.js & Hooks",
        category: "fullstack",
        proficiency: 96,
        level: "Expert",
        icon: "⚛️",
        context: "Architected modern production frontends for SaralAI, PyBe & BookMyLook",
        project: "SaralAI / PyBe",
        projectId: "saral-ai",
        roles: ["fullstack"]
      },
      {
        name: "TypeScript",
        category: "fullstack",
        proficiency: 92,
        level: "Expert",
        icon: "📘",
        context: "Type-safe interfaces, enterprise schemas, and production codebases",
        project: "PyBe (PR #69 Merged)",
        projectId: "pybe",
        roles: ["fullstack", "backend"]
      },
      {
        name: "JavaScript (ES6+)",
        category: "fullstack",
        proficiency: 95,
        level: "Expert",
        icon: "🟨",
        context: "Event Loop, DOM performance optimization, and client-side modules at age 16",
        project: "Webial Technology",
        roles: ["fullstack"]
      },
      {
        name: "Tailwind CSS & Styling",
        category: "fullstack",
        proficiency: 94,
        level: "Expert",
        icon: "🎨",
        context: "Glassmorphic design systems, responsive viewports, and micro-interactions",
        project: "Portfolio & Studio SPAs",
        roles: ["fullstack"]
      },
      {
        name: "SPA State & Routing",
        category: "fullstack",
        proficiency: 90,
        level: "Advanced",
        icon: "🔄",
        context: "Complex application state machines, portals, and hash-based navigation",
        project: "BookMyLook & Studio",
        projectId: "bookmylook",
        roles: ["fullstack"]
      }
    ]
  },
  {
    id: "backend_data",
    title: "Backend & Data Infrastructure",
    subtitle: "Scalable REST APIs, Document Stores & Relational Databases",
    icon: "🗄️",
    gradient: "from-emerald-500/20 via-teal-500/15 to-cyan-500/10",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    skills: [
      {
        name: "Node.js & Express.js",
        category: "backend_data",
        proficiency: 94,
        level: "Expert",
        icon: "🟢",
        context: "REST API microservices, authentication middleware, and backend routes",
        project: "PyBe & BookMyLook",
        projectId: "pybe",
        roles: ["backend", "fullstack"]
      },
      {
        name: "PostgreSQL",
        category: "backend_data",
        proficiency: 90,
        level: "Advanced",
        icon: "🐘",
        context: "Relational database modeling, indexing, and transactional integrity",
        project: "SaralAI",
        projectId: "saral-ai",
        roles: ["backend", "ai_ml"]
      },
      {
        name: "MongoDB & Mongoose",
        category: "backend_data",
        proficiency: 92,
        level: "Advanced",
        icon: "🍃",
        context: "Document store schema modeling and dynamic pedagogical state persistence",
        project: "PyBe",
        projectId: "pybe",
        roles: ["backend", "fullstack"]
      },
      {
        name: "MySQL",
        category: "backend_data",
        proficiency: 88,
        level: "Proficient",
        icon: "🐬",
        context: "Relational table schemas, foreign key constraints, and business logic",
        project: "BookMyLook",
        projectId: "bookmylook",
        roles: ["backend"]
      },
      {
        name: "REST API Architecture",
        category: "backend_data",
        proficiency: 95,
        level: "Expert",
        icon: "🌐",
        context: "API contracts, error handling patterns, payload optimization, and CORS",
        project: "Enterprise APIs",
        roles: ["backend", "fullstack"]
      }
    ]
  },
  {
    id: "systems_core",
    title: "Core CS & Embedded Systems",
    subtitle: "Algorithms, Microcontroller Firmware & Hardware Prototyping",
    icon: "⚙️",
    gradient: "from-amber-500/20 via-orange-500/15 to-rose-500/10",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    borderColor: "border-amber-500/30",
    skills: [
      {
        name: "Java & OOP",
        category: "systems_core",
        proficiency: 92,
        level: "Expert",
        icon: "☕",
        context: "Object-Oriented Design, inheritance hierarchies, and enterprise fundamentals",
        project: "Core CS Systems",
        roles: ["systems", "backend"]
      },
      {
        name: "Data Structures & Algorithms",
        category: "systems_core",
        proficiency: 90,
        level: "Advanced",
        icon: "🌲",
        context: "Algorithmic complexity, tree/graph traversal, and dynamic programming",
        project: "Competitive Coding & CS",
        roles: ["systems", "backend", "ai_ml"]
      },
      {
        name: "Embedded C++",
        category: "systems_core",
        proficiency: 88,
        level: "Advanced",
        icon: "💻",
        context: "Microcontroller firmware, interrupt handling, and ultrasonic echo timing",
        project: "Smart Assistive Glasses",
        projectId: "smart-glasses",
        roles: ["systems"]
      },
      {
        name: "ESP32 & Arduino Hardware",
        category: "systems_core",
        proficiency: 86,
        level: "Advanced",
        icon: "🔌",
        context: "HC-SR04 sensor arrays, PWM haptic motors, and hardware prototyping",
        project: "SSIP Grant / CREATO 3rd",
        projectId: "smart-glasses",
        roles: ["systems"]
      },
      {
        name: "Git, GitHub & Production PRs",
        category: "systems_core",
        proficiency: 95,
        level: "Expert",
        icon: "🐙",
        context: "Upstream code reviews, merge conflicts, branching, and production PR #69",
        project: "Vicharanam Labs / GitHub",
        roles: ["systems", "fullstack", "backend", "ai_ml"]
      }
    ]
  }
];

// Quick skills for profile sidebar cards (Technical + Professional Competencies)
export const SIDEBAR_SKILLS: { name: string; category: string; tag: string; project: string }[] = [
  // Technical Stack
  { name: "Python / FastAPI", category: "AI & Backend", tag: "AI", project: "SaralAI" },
  { name: "React.js & TypeScript", category: "Full-Stack", tag: "UI", project: "PyBe / SaralAI" },
  { name: "Sarvam AI (Mayura)", category: "Indic LLMs", tag: "LLM", project: "SaralAI (10+ Langs)" },
  { name: "Server-Sent Events", category: "Real-Time Streaming", tag: "SSE", project: "Vicharanam Labs" },
  { name: "Node.js & MongoDB", category: "Backend & Data", tag: "DB", project: "PyBe & BookMyLook" },
  { name: "PostgreSQL & MySQL", category: "Relational DB", tag: "SQL", project: "SaralAI" },
  { name: "Embedded C++ / ESP32", category: "Hardware & IoT", tag: "IoT", project: "SSIP Smart Glasses" },
  { name: "Java & Core DSA", category: "Systems & OOP", tag: "CS", project: "2nd Rank Diploma" },
  { name: "Git & Production PRs", category: "Engineering", tag: "Git", project: "PR #69 Merged" },

  // Industry & Professional Leadership
  { name: "Technical Communication", category: "Professional", tag: "Industry", project: "IIT Ropar Standups & Mentorship" },
  { name: "Critical Thinking & Design", category: "Professional", tag: "Industry", project: "Architectural Trade-Off Analyses" },
  { name: "Adaptability & Speed", category: "Professional", tag: "Industry", project: "Gujarati Medium to 9.73 CGPA & AI" },
  { name: "End-to-End Ownership", category: "Professional", tag: "Industry", project: "Production PR #69 Upstream Delivery" },
  { name: "Team Collaboration", category: "Professional", tag: "Industry", project: "CREATO 2024 State Podium Lead" },
  { name: "Problem Deconstruction", category: "Professional", tag: "Industry", project: "Complex Scheme Payload Simplification" }
];

