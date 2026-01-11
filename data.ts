
import { JourneyNode, Project, Experience, JourneyYear, Hackathon, Certification } from './types';

// Legacy Journey Data - kept for reference
export const JOURNEY_DATA: JourneyNode[] = [
  {
    year: "2024",
    role: "System Architect Intern",
    context: "Optimizing high-throughput data ingestion pipelines for cloud-native environments.",
    constraint: "Limited compute resources vs. unpredictable data spikes (10x normal load).",
    whatChanged: "Moved from synchronous processing to a durable event-driven architecture using message queues.",
    whatWasLearned: "System reliability is not just about error handling; it's about graceful degradation under pressure.",
    failure: {
      issue: "Over-engineered the initial buffering logic.",
      analysis: "Spent 2 weeks on a custom ring buffer when a standard queue was sufficient. Prioritize simplicity over novelty."
    }
  },
  {
    year: "2023",
    role: "Core Platform Engineer",
    context: "Developing internal tooling for automated regression testing and observability.",
    constraint: "Legacy database schemas with high normalization and slow query times.",
    whatChanged: "Implemented a read-optimized caching layer and query refactoring using Redis.",
    whatWasLearned: "The cost of abstraction. Sometimes code clarity must be balanced against database performance.",
  }
];

// New Journey Timeline Data
export const JOURNEY_TIMELINE_DATA: JourneyYear[] = [
  {
    year: "2024",
    title: "System Architect Intern",
    subtitle: "TechFlow Systems • Remote",
    milestones: [
      {
        title: "Architected Event-Driven Pipeline",
        description: "Designed high-throughput data ingestion system handling 10x traffic spikes with graceful degradation.",
        type: "project"
      },
      {
        title: "Open Source Contribution",
        description: "Contributed to Apache Kafka client library, fixing memory leak in consumer group rebalancing.",
        type: "achievement"
      },
      {
        title: "Learned Cloud-Native Patterns",
        description: "Mastered Kubernetes operators, service mesh architecture, and distributed tracing with Jaeger.",
        type: "learning"
      }
    ],
    hackathonPreviews: [
      { id: "code-sprint-2024", name: "Code Sprint 2024", result: "1st Place" },
      { id: "devfest-2024", name: "DevFest Hackathon", result: "Finalist" }
    ],
    certificationPreviews: [
      { id: "aws-solutions-architect", name: "AWS Solutions Architect", platform: "Amazon" },
      { id: "kubernetes-admin", name: "CKA - Certified Kubernetes Administrator", platform: "CNCF" }
    ]
  },
  {
    year: "2023",
    title: "Core Platform Developer",
    subtitle: "Building Internal Tooling & Observability",
    milestones: [
      {
        title: "Built Regression Testing Framework",
        description: "Developed automated testing suite that reduced QA cycle time by 60%.",
        type: "project"
      },
      {
        title: "Optimized Database Performance",
        description: "Implemented Redis caching layer, reducing query times from 800ms to 45ms.",
        type: "achievement"
      },
      {
        title: "First Technical Blog Published",
        description: "Wrote about database optimization patterns, garnering 5k+ readers on Dev.to.",
        type: "achievement"
      }
    ],
    hackathonPreviews: [
      { id: "smart-india-2023", name: "Smart India Hackathon", result: "Winner - Software Edition" }
    ],
    certificationPreviews: [
      { id: "react-advanced", name: "React - The Complete Guide", platform: "Udemy" },
      { id: "system-design", name: "System Design Fundamentals", platform: "educative.io" }
    ]
  },
  {
    year: "2022",
    title: "Full Stack Development Journey",
    subtitle: "Transitioning from Frontend to Full Stack",
    milestones: [
      {
        title: "Built First Production API",
        description: "Developed RESTful API serving 10k+ requests daily using Node.js and Express.",
        type: "project"
      },
      {
        title: "Learned Backend Architecture",
        description: "Deep dive into microservices, API design, authentication, and database design.",
        type: "learning"
      },
      {
        title: "Contributed to College Tech Fest",
        description: "Led technical team for annual college fest, managing website and registrations.",
        type: "achievement"
      }
    ],
    certificationPreviews: [
      { id: "mongodb-developer", name: "MongoDB Developer Associate", platform: "MongoDB" }
    ]
  },
  {
    year: "2021-2024",
    title: "Diploma in Computer Engineering",
    subtitle: "Government Polytechnic • Maharashtra",
    period: "2021 - 2024",
    isEducation: true,
    milestones: [
      {
        title: "Academic Excellence",
        description: "Maintained 85%+ aggregate with distinction in core subjects.",
        type: "achievement"
      },
      {
        title: "Capstone Project",
        description: "Built a real-time collaborative code editor with WebSocket synchronization.",
        type: "project"
      },
      {
        title: "Technical Club Lead",
        description: "Founded and led the coding club, organizing workshops and coding competitions.",
        type: "achievement"
      },
      {
        title: "Foundation in CS Fundamentals",
        description: "Data Structures, Algorithms, Operating Systems, Database Management, Computer Networks.",
        type: "learning"
      }
    ]
  },
  {
    year: "2019-2021",
    title: "High School",
    subtitle: "Where the Tech Journey Began",
    period: "2019 - 2021",
    isEducation: true,
    milestones: [
      {
        title: "First Line of Code",
        description: "Wrote my first Python script - a basic calculator. The moment everything changed.",
        type: "achievement"
      },
      {
        title: "Self-Taught Web Development",
        description: "Learned HTML, CSS, JavaScript through online resources and built first portfolio.",
        type: "learning"
      },
      {
        title: "Discovered Open Source",
        description: "Made first GitHub account, explored open source projects, understood version control.",
        type: "learning"
      }
    ]
  },
  {
    year: "2006",
    title: "The Beginning",
    subtitle: "Born in Maharashtra, India",
    milestones: [
      {
        title: "Origin Story",
        description: "Born with curiosity and a love for understanding how things work. The foundation of an engineering mindset.",
        type: "achievement"
      }
    ]
  }
];

// Hackathons Data
export const HACKATHONS_DATA: Hackathon[] = [
  {
    id: "code-sprint-2024",
    name: "Code Sprint 2024",
    date: "March 2024",
    location: "Pune, Maharashtra",
    duration: "36 hours",
    teamSize: 4,
    teamName: "ByteForce",
    projectName: "EcoTrack",
    projectDescription: "A real-time carbon footprint tracking app that gamifies sustainable living. Users earn points for eco-friendly choices, compete in challenges, and unlock achievements.",
    problemSolved: "Making sustainability engaging and measurable for everyday users through gamification and real-time tracking.",
    techStack: ["React Native", "Node.js", "MongoDB", "TensorFlow Lite", "Google Maps API"],
    result: "1st Place",
    prize: "₹50,000 + Internship Opportunity",
    learnings: "Learned the importance of rapid prototyping and user-centric design. Our demo video and live presentation skills were crucial for winning.",
    demoUrl: "https://ecotrack-demo.vercel.app",
    githubUrl: "https://github.com/siddharth-sadhu/ecotrack"
  },
  {
    id: "devfest-2024",
    name: "DevFest Hackathon 2024",
    date: "January 2024",
    location: "Virtual",
    duration: "48 hours",
    teamSize: 3,
    teamName: "NullPointers",
    projectName: "AccessiLearn",
    projectDescription: "An AI-powered learning platform that automatically generates accessible content for visually impaired students, including audio descriptions and tactile diagrams.",
    problemSolved: "Bridging the educational accessibility gap for visually impaired students in STEM subjects.",
    techStack: ["Next.js", "Python", "OpenAI API", "AWS Polly", "Supabase"],
    result: "Finalist - Top 10",
    learnings: "First exposure to accessibility-focused development. Realized the massive impact technology can have on underserved communities.",
    githubUrl: "https://github.com/siddharth-sadhu/accessilearn"
  },
  {
    id: "smart-india-2023",
    name: "Smart India Hackathon 2023",
    date: "December 2023",
    location: "IIT Bombay",
    duration: "36 hours",
    teamSize: 6,
    teamName: "TechTitans",
    projectName: "AgroPredict",
    projectDescription: "ML-based crop disease prediction system using satellite imagery and weather data. Provides early warnings to farmers via SMS alerts.",
    problemSolved: "Helping farmers predict and prevent crop diseases before they spread, reducing agricultural losses.",
    techStack: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL", "Twilio"],
    result: "Winner - Software Edition",
    prize: "₹1,00,000 + Government Recognition",
    learnings: "Working with real government stakeholders taught me how to translate technical solutions into policy-ready products.",
    githubUrl: "https://github.com/siddharth-sadhu/agropredict",
    certificateUrl: "https://sih.gov.in/certificates/winner-2023"
  },
  {
    id: "hackathon-2022",
    name: "College Tech Fest Hackathon",
    date: "November 2022",
    location: "Government Polytechnic, Pune",
    duration: "24 hours",
    teamSize: 2,
    teamName: "CodeCraft",
    projectName: "StudyBuddy",
    projectDescription: "A peer-to-peer study group matching platform that connects students based on subjects, study habits, and availability.",
    problemSolved: "Helping students find compatible study partners in large institutions.",
    techStack: ["React", "Firebase", "Node.js", "Socket.io"],
    result: "2nd Place",
    prize: "₹10,000",
    learnings: "My first hackathon! Learned to work under extreme time pressure and the value of MVP thinking.",
    githubUrl: "https://github.com/siddharth-sadhu/studybuddy"
  }
];

// Certifications Data
export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect - Associate",
    platform: "Amazon Web Services",
    issueDate: "October 2024",
    expiryDate: "October 2027",
    credentialId: "AWS-SAA-C03-12345",
    verificationUrl: "https://aws.amazon.com/verification/",
    skills: ["Cloud Architecture", "AWS Services", "High Availability", "Security", "Cost Optimization"],
    description: "Validates ability to design distributed systems on AWS, covering compute, storage, database, and networking services.",
    level: "Intermediate"
  },
  {
    id: "kubernetes-admin",
    name: "CKA - Certified Kubernetes Administrator",
    platform: "Cloud Native Computing Foundation",
    issueDate: "August 2024",
    expiryDate: "August 2027",
    credentialId: "CKA-2024-XXXXX",
    verificationUrl: "https://training.linuxfoundation.org/certification/verify/",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Networking", "Storage"],
    description: "Industry-recognized certification demonstrating expertise in Kubernetes cluster administration and troubleshooting.",
    level: "Advanced"
  },
  {
    id: "react-advanced",
    name: "React - The Complete Guide (incl. Redux)",
    platform: "Udemy",
    issueDate: "March 2023",
    credentialId: "UC-REACT-2023-XXX",
    verificationUrl: "https://udemy.com/certificate/",
    skills: ["React", "Redux", "React Router", "Hooks", "Context API"],
    description: "Comprehensive course covering React fundamentals to advanced patterns including state management and performance optimization.",
    level: "Intermediate"
  },
  {
    id: "system-design",
    name: "Grokking System Design Fundamentals",
    platform: "Educative.io",
    issueDate: "June 2023",
    credentialId: "ED-SYS-2023-XXX",
    verificationUrl: "https://educative.io/verify/",
    skills: ["System Design", "Scalability", "Load Balancing", "Caching", "Database Sharding"],
    description: "In-depth course on designing scalable, reliable distributed systems with real-world case studies.",
    level: "Intermediate"
  },
  {
    id: "mongodb-developer",
    name: "MongoDB Certified Developer Associate",
    platform: "MongoDB University",
    issueDate: "January 2023",
    expiryDate: "January 2026",
    credentialId: "MDB-DEV-2023-XXX",
    verificationUrl: "https://university.mongodb.com/certification/verify",
    skills: ["MongoDB", "NoSQL", "Aggregation", "Indexing", "Data Modeling"],
    description: "Validates proficiency in MongoDB application development, data modeling, and query optimization.",
    level: "Intermediate"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-nebula",
    category: "FINTECH",
    date: "Oct 2023",
    title: "Project Nebula",
    oneLiner: "A high-performance dashboard aimed at reducing cognitive load for institutional traders dealing with millisecond-latency data.",
    problem: "Traders were drowning in data. The legacy system displayed 14,000 data points simultaneously, leading to decision paralysis during high-volatility events.",
    constraint: "Previous DOM rendering took ~400ms, too slow for arbitrage opportunities.",
    outcome: "Adopted by 3 major firms, reducing time-to-action by 2.4s.",
    stack: ["React", "Next.js", "Tailwind", "D3.js", "Node.js", "GraphQL"],
    role: "Lead Product Engineer",
    timeline: "6 Weeks (Sprint)",
    architecture: "WebWorker-driven data processing decoupled from the UI thread, utilizing SharedArrayBuffer for zero-copy data transfer.",
    tradeOffs: [
      "Sacrificed deep historical lookback for 60fps real-time updates.",
      "Custom Canvas rendering over SVG to handle 50k+ nodes."
    ],
    whatBroke: "Initial WebSocket implementation flooded the main thread. Decoupled using a worker-proxy.",
    redesignReflections: "I would utilize WebGPU today for even denser heatmaps.",
    metrics: [
      { label: "TASK VELOCITY", value: "+40%", subtext: "improvement" },
      { label: "TIME-TO-ACTION", value: "2.4s", subtext: "reduction" },
      { label: "API VOLUME", value: "-60%", subtext: "via batching" }
    ],
    sections: [
      {
        title: "The Challenge",
        content: "The goal wasn't just to make it 'cleaner'. We needed to architect a system that understood context—hiding noise when the market was calm, and surfacing critical anomalies instantly when volatility spiked.",
        subsections: [
          { title: "Cognitive Overload", body: "Users spent 40% of their time filtering tables manually instead of trading.", icon: "eye-off" },
          { title: "Latency Issues", body: "Previous DOM rendering took ~400ms, too slow for real-time arbitrage.", icon: "zap" }
        ]
      },
      {
        title: "The Approach",
        content: "We moved away from a static grid to a modular widget system. Using WebSocket feeds, the UI determines intent based on cursor velocity and active window focus.",
        subsections: [
          { title: "Intent-Based UI", body: "Prefetching relevant data layers based on user focus areas." },
          { title: "Visual Physiology", body: "Calibrated contrast ratios for low-light trading floors to reduce eye strain." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharth-sadhu/project-nebula"
  },
  {
    id: "distributed-crawler",
    category: "INFRASTRUCTURE",
    date: "Jan 2024",
    title: "Sentinel Crawler",
    oneLiner: "Distributed web crawler architected for single-node efficiency and deduplication at scale.",
    problem: "Crawling 1M+ pages efficiently without rate-limiting or duplicating work on a single 8GB node.",
    constraint: "Memory-intensive URL frontier and bloom filter collisions.",
    outcome: "99.8% unique URL identification with 500 pages/minute throughput.",
    stack: ["Go", "Redis", "Docker", "Prometheus"],
    role: "Backend Architect",
    timeline: "3 Months",
    architecture: "Master-worker pattern with Redis as a shared frontier. Used double-hashed Bloom filters for O(1) deduplication.",
    tradeOffs: [
      "Probabilistic deduplication vs absolute memory exhaustion.",
      "Asynchronous DNS lookups over synchronous OS threads."
    ],
    whatBroke: "DNS resolver saturation. Implemented an internal DNS cache with TTL overrides.",
    redesignReflections: "Moving to a serverless worker model would improve elasticity.",
    metrics: [
      { label: "THROUGHPUT", value: "500", subtext: "pages/min" },
      { label: "UNIQUENESS", value: "99.8%", subtext: "accuracy" },
      { label: "UPTIME", value: "99.9%", subtext: "availability" }
    ],
    sections: [
      {
        title: "The Challenge",
        content: "Traditional crawlers are memory-hungry. We needed to handle a massive frontier within a fixed 8GB envelope.",
        subsections: [
          { title: "Frontier Management", body: "Redis-backed priority queues ensured mission-critical paths were prioritized." }
        ]
      }
    ],
    githubUrl: "https://github.com/siddharth-sadhu/sentinel-crawler"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Lead Product Engineer",
    company: "TechFlow Systems",
    location: "Remote",
    dates: "2021 — Present",
    stats: [
      { label: "Years", value: "3+" },
      { label: "Shipped", value: "12+" },
      { label: "Contribs", value: "2k+" }
    ],
    impactMetrics: [
      "Reduced API latency by 40% through aggressive caching strategies and Redis implementation.",
      "Mentored 4 junior developers and established team-wide code review standards.",
      "Spearheaded the migration from monolithic architecture to microservices using Kubernetes."
    ],
    techStack: ["TypeScript", "React", "Go", "Kubernetes", "Redis", "PostgreSQL"],
    narrative: {
      context: "TechFlow serves 50k+ daily users on a scaling SaaS platform.",
      decisions: "Adopted a documentation-first workflow to eliminate architectural debt during rapid expansion.",
      learning: "Engineering culture is a product of its constraints. Clearer constraints lead to better code."
    }
  },
  {
    role: "Frontend Developer",
    company: "Creative Solutions",
    location: "Chicago, IL",
    dates: "2018 — 2021",
    stats: [
      { label: "Projects", value: "8" },
      { label: "Clients", value: "Fortune 500" }
    ],
    impactMetrics: [
      "Developed a proprietary component library used across 12 distinct client projects.",
      "Implemented WCAG 2.1 AA compliance across all deliverables, reducing accessibility debt by 80%.",
      "Optimized bundle sizes by 35% through code splitting and tree-shaking audits."
    ],
    techStack: ["React", "D3.js", "GSAP", "SASS", "Web Accessibility"],
    narrative: {
      context: "A high-end agency environment requiring pixel-perfect, accessible execution.",
      decisions: "Chose D3.js over wrapper libraries to maintain absolute control over visualization performance.",
      learning: "The user's perception of performance is often more important than the actual benchmark."
    }
  }
];
