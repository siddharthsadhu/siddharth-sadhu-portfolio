import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

type FilterCategory = 'all' | 'podiums' | 'academic' | 'certifications' | 'hackathons';

interface TimelineAchievement {
  id: string;
  year: string;
  yearNum: number;
  category: 'podiums' | 'academic' | 'certifications' | 'hackathons';
  badge: string;
  badgeStyle: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  scoreOrResult?: string;
  description: string;
  problemSolved?: string;
  learnings?: string;
  skills: string[];
  githubUrl?: string;
  verificationUrl?: string;
  certificateUrl?: string;
  certificateLabel?: string;
}

export const HackathonsCertifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'vleid-ai-research': true,
    'creato-2024': true,
    'ssip-grant-2024': true,
    'diploma-it-gtu': true
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Compile all achievements into a single unified chronological timeline list
  const allAchievements: TimelineAchievement[] = [
    // ── 2026 ──
    {
      id: 'vleid-ai-research',
      year: '2026',
      yearNum: 2026,
      category: 'certifications',
      badge: 'OPEN SOURCE CONTRIBUTION',
      badgeStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      title: 'AI & Learning Systems Engineering',
      subtitle: 'Open Source Research Contribution • Merged PR #69',
      organization: 'Vicharanam Labs (VLEID) / IIT Ropar',
      date: 'July 2026',
      scoreOrResult: 'Merged PR #69',
      description: 'Open source engineering contribution validating scenario & case study generation pipelines in PyBe, CKLIS pedagogical reasoning, Server-Sent Events (SSE) streaming, and merged PR #69.',
      problemSolved: 'Low-latency AI response streaming and constructivist pedagogical scaffolding for real-world code learners.',
      learnings: 'Engineered sub-100ms SSE token streaming under IIT Ropar mentorship with production open-source code reviews.',
      skills: ['CKLIS Architecture', 'Server-Sent Events (SSE)', 'Prompt Chains', 'TypeScript', 'Node.js'],
      certificateUrl: 'https://github.com/vicharanashala/pybe/pull/69',
      certificateLabel: 'View Merged PR #69'
    },
    {
      id: 'btech-ict-adani',
      year: '2026',
      yearNum: 2026,
      category: 'academic',
      badge: 'ACADEMIC DISTINCTION',
      badgeStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      title: 'B.Tech in Information & Communication Technology',
      subtitle: 'Adani University (Pursuing Final Year)',
      organization: 'Adani University, Ahmedabad',
      date: '2024 – 2027',
      scoreOrResult: '8.88 CGPA',
      description: 'Rigorous coursework in Advanced AI Architectures, Machine Learning Systems, Distributed Systems, and High-Performance Cloud Computing.',
      skills: ['AI/ML Pipelines', 'Distributed Systems', 'Software Architecture', 'Advanced Algorithms', 'Cloud Engineering']
    },

    // ── 2025 ──
    {
      id: 'yuva-ai-indiaai',
      year: '2025',
      yearNum: 2025,
      category: 'certifications',
      badge: 'NATIONAL AI CREDENTIAL',
      badgeStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      title: 'Yuva AI for All — FutureSkills Prime',
      subtitle: 'Government of India AI Literacy Program',
      organization: 'IndiaAI & NASSCOM (MeitY Endorsed)',
      date: 'December 2025',
      scoreOrResult: 'MeitY Endorsed',
      description: 'National AI literacy certification endorsed by the Ministry of Electronics and IT (MeitY) and NASSCOM covering Indic NLP and AI foundations.',
      skills: ['Generative AI', 'Responsible AI', 'Indic NLP', 'AI Ethics', 'Machine Learning Foundations'],
      certificateUrl: '/certificates/yuva-ai-indiaai.pdf',
      certificateLabel: 'Certificate'
    },
    {
      id: 'deloitte-data-analytics',
      year: '2025',
      yearNum: 2025,
      category: 'certifications',
      badge: 'ENTERPRISE ANALYTICS',
      badgeStyle: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      title: 'Data Analytics Virtual Experience Program',
      subtitle: 'Enterprise Telemetry & Forensic Data Simulation',
      organization: 'Deloitte & Forage',
      date: 'December 2025',
      scoreOrResult: 'Verified',
      description: 'Practical simulation on real-world enterprise telemetry, anomaly detection, statistical modeling, and Tableau business intelligence.',
      skills: ['Data Analytics', 'Forensic Data Analysis', 'Tableau', 'Statistical Modeling', 'Business Intelligence'],
      certificateUrl: '/certificates/deloitte-analytics.pdf',
      certificateLabel: 'Certificate'
    },
    {
      id: 'ibm-prompt-engineering',
      year: '2025',
      yearNum: 2025,
      category: 'certifications',
      badge: 'PROMPT ENGINEERING',
      badgeStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      title: 'Cognitive Prompt Engineering Certification',
      subtitle: 'IBM & Cognitive Class AI Specialization',
      organization: 'IBM / Cognitive Class',
      date: 'December 2025',
      scoreOrResult: 'IBM Certified',
      description: 'Specialized certification in cognitive prompt engineering patterns, context window optimization, and AI inference control.',
      skills: ['Prompt Engineering', 'LLM Fine-Tuning', 'Context Scaffolding', 'Inference Control'],
      certificateUrl: '/certificates/ibm-prompt-engineering.pdf',
      certificateLabel: 'Certificate'
    },

    // ── 2024 ──
    {
      id: 'creato-2024',
      year: '2024',
      yearNum: 2024,
      category: 'podiums',
      badge: 'STATE PODIUM (3RD)',
      badgeStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      title: 'CREATO 2024 State-Level Project Competition',
      subtitle: 'Smart Assistive Glasses for Visually Impaired',
      organization: 'State Innovation Forum, Gujarat',
      date: 'April 2024',
      scoreOrResult: '3rd Place Trophy',
      description: 'Wearable obstacle-detection glasses designed for visually impaired individuals, utilizing ultrasonic spatial echo timing and audio-haptic feedback.',
      problemSolved: 'Preventing upper-body and head-height collisions in the blind spot of traditional mobility canes.',
      learnings: 'Demonstrated live hardware before state jury panels. Learned the importance of robustness, zero-latency response, and ergonomic wearable design.',
      skills: ['Embedded C++', 'Arduino', 'ESP32', 'HC-SR04', 'PWM Audio Drivers'],
      githubUrl: 'https://github.com/siddharthsadhu',
      certificateUrl: '/certificates/creato-3rd-place.pdf',
      certificateLabel: 'State Certificate'
    },
    {
      id: 'ssip-grant-2024',
      year: '2024',
      yearNum: 2024,
      category: 'podiums',
      badge: 'GOVT INNOVATION GRANT',
      badgeStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      title: 'Student Startup & Innovation Policy (SSIP)',
      subtitle: 'Government of Gujarat Innovation Grant',
      organization: 'Government of Gujarat',
      date: '2023 – 2024',
      scoreOrResult: 'Grant Winner',
      description: 'Government-funded innovation prototype delivering low-cost, real-time spatial awareness and navigation assistance for the visually challenged.',
      problemSolved: 'Affordable, lightweight assistive technology accessible to underserved rural communities.',
      learnings: 'Defended technical architecture before government evaluators; gained hands-on experience in budgeting, PCB prototyping, and user trials.',
      skills: ['Microcontroller Firmware', 'Sensors', 'Hardware Prototyping', 'Power Optimization'],
      githubUrl: 'https://github.com/siddharthsadhu'
    },
    {
      id: 'diploma-it-gtu',
      year: '2024',
      yearNum: 2024,
      category: 'academic',
      badge: 'DEPARTMENT 2ND RANK',
      badgeStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      title: '2nd Rank in Diploma IT (9.73 CGPA)',
      subtitle: 'B & B Institute of Technology, Vallabh Vidyanagar',
      organization: 'B & B Institute of Technology',
      date: '2021 – 2024',
      scoreOrResult: '9.73 CGPA (Rank #2)',
      description: 'Consistent academic topper across all 6 semesters with deep mastery in Data Structures, Object-Oriented Java, Database Management Systems, and Microcontroller Systems.',
      skills: ['Data Structures & Algorithms', 'Java & OOP', 'DBMS & SQL', 'Operating Systems', 'Computer Networks'],
      certificateUrl: '/certificates/diploma-second-rank.pdf',
      certificateLabel: 'Rank Certificate'
    },
    {
      id: 'adit-hackathon-2024',
      year: '2024',
      yearNum: 2024,
      category: 'hackathons',
      badge: 'HACKATHON BUILD',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      title: 'ADIT TechFest Hackathon (March 2024)',
      subtitle: 'ADIT Institute of Technology',
      organization: 'ADIT, New Vallabh Vidyanagar',
      date: 'March 2024',
      scoreOrResult: 'Participated',
      description: 'Collaborative rapid software prototype built during the 36-hour ADIT regional hackathon sprint.',
      skills: ['Web Engineering', 'Rapid Prototyping', 'API Integration'],
      certificateUrl: '/certificates/adit-hackathon.pdf',
      certificateLabel: 'Certificate'
    },

    // ── 2023 ──
    {
      id: 'sih-agripredict',
      year: '2023',
      yearNum: 2023,
      category: 'hackathons',
      badge: 'NATIONAL FINALIST',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      title: 'Smart India Hackathon (SIH) — AgroPredict',
      subtitle: 'National Machine Learning Hackathon',
      organization: 'Smart India Hackathon (National Edition)',
      date: '2023',
      scoreOrResult: 'Top 10 Finalist',
      description: 'Machine learning crop disease prediction and weather anomaly alerting system providing actionable remedies to farmers.',
      problemSolved: 'Early crop disease detection to minimize agricultural yield loss for smallholder farmers.',
      learnings: 'Bridged complex computer vision pipelines with low-bandwidth regional interfaces tailored for real-world farming constraints.',
      skills: ['Python', 'TensorFlow', 'React.js', 'Flask', 'PostgreSQL'],
      githubUrl: 'https://github.com/siddharthsadhu'
    },

    // ── 2022 ──
    {
      id: 'webial-summer-internship',
      year: '2022',
      yearNum: 2022,
      category: 'certifications',
      badge: 'WEB DEVELOPMENT',
      badgeStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      title: 'Summer Web Development Internship Certificate',
      subtitle: 'Webial Technology Pvt. Ltd.',
      organization: 'Webial Technology Pvt. Ltd.',
      date: 'September 2022',
      scoreOrResult: 'Completed at 16',
      description: 'Commercial web development internship certification completed at age 16 for production client frontends.',
      skills: ['JavaScript (ES6+)', 'HTML5/CSS3', 'DOM Optimization', 'Client Modules'],
      certificateUrl: '/certificates/webial-internship.pdf',
      certificateLabel: 'Certificate'
    },
    {
      id: 'jarvis-hackathon-2022',
      year: '2022',
      yearNum: 2022,
      category: 'hackathons',
      badge: 'TECHFEST FINALIST',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      title: 'CVM College TechFest Hackathon (JARVIS)',
      subtitle: 'Autonomous Speech Recognition Assistant',
      organization: 'CVM University, Vallabh Vidyanagar',
      date: '2022',
      scoreOrResult: 'Finalist',
      description: 'Voice-controlled automation and assistant tool built from scratch using Python speech recognition and custom script automation at age 16.',
      problemSolved: 'Hands-free system automation and task management on local machines without heavy external dependencies.',
      learnings: 'My first-ever hackathon at 16. Learned rapid collaboration, MVP scoping, and how to build working prototypes under tight deadlines.',
      skills: ['Python', 'SpeechRecognition', 'PyAudio', 'OS Automation', 'HTML/CSS UI'],
      githubUrl: 'https://github.com/siddharthsadhu'
    },

    // ── 2021 ──
    {
      id: 'gseb-ssc',
      year: '2021',
      yearNum: 2021,
      category: 'academic',
      badge: '93% DISTINCTION',
      badgeStyle: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      title: 'Secondary School Certificate (SSC 93%)',
      subtitle: 'GSEB Board Distinction',
      organization: 'GSEB Board, Gujarat',
      date: '2019 – 2021',
      scoreOrResult: '93.00% Distinction',
      description: 'Top academic distinction in Mathematics and Science leading to selection into Diploma IT over traditional schooling.',
      skills: ['Mathematics', 'Logical Reasoning', 'Analytical Thinking'],
      certificateUrl: '/certificates/ssc-marksheet.pdf',
      certificateLabel: 'Marksheet'
    }
  ];

  // Filter achievements chronologically
  const filteredAchievements = allAchievements.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const years = Array.from(new Set(filteredAchievements.map((item) => item.year))).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 right-16 w-96 h-96 bg-purple-500/4 rounded-full blur-[140px] pointer-events-none floating-shape"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none floating-shape" style={{ animationDelay: '6s' }}></div>

      {/* Decorative Accent Scanline */}
      <div className="absolute top-0 right-[20%] w-[1px] h-96 bg-gradient-to-b from-purple-500/15 via-purple-500/3 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="reveal-up">
          <SectionHeader
            title="Achievements & Honors"
            subtitle="State competition podiums, government innovation grants, academic department rankings, and verified engineering credentials."
          />
        </div>

        {/* ── Top Executive Honors Beacon Bar (SVG Icons, No Emojis) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal-up" style={{ animationDelay: '0.1s' }}>
          {/* State Honors */}
          <div className="p-5 card-premium rounded-2xl border-white/[0.06] hover:border-amber-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-[8px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 uppercase tracking-widest">
                State Podium
              </span>
            </div>
            <div className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">2 State Honors</div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">CREATO 3rd & SSIP Govt Grant</p>
          </div>

          {/* Academic Rank */}
          <div className="p-5 card-premium rounded-2xl border-white/[0.06] hover:border-purple-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                </svg>
              </div>
              <span className="text-[8px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20 uppercase tracking-widest">
                Department Rank #2
              </span>
            </div>
            <div className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">9.73 CGPA</div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">Diploma IT Department Topper</p>
          </div>

          {/* Research Certs */}
          <div className="p-5 card-premium rounded-2xl border-white/[0.06] hover:border-indigo-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[8px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20 uppercase tracking-widest">
                Research & ATS
              </span>
            </div>
            <div className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">5 Credentials</div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">IIT Ropar, IndiaAI, IBM, Deloitte</p>
          </div>

          {/* Hackathons */}
          <div className="p-5 card-premium rounded-2xl border-white/[0.06] hover:border-emerald-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 uppercase tracking-widest">
                Competitive Builds
              </span>
            </div>
            <div className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">4 Hackathons</div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">Smart India Hackathon & TechFests</p>
          </div>
        </div>

        {/* ── Minimalist Segmented Filter Bar (No Emojis) ── */}
        <div className="flex justify-center reveal-up" style={{ animationDelay: '0.15s' }}>
          <div className="inline-flex p-1 bg-white/50 dark:bg-black/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-white/[0.06] shadow-lg shadow-purple-500/3 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'podiums', label: 'State Honors & Grants' },
              { id: 'academic', label: 'Academic Excellence' },
              { id: 'certifications', label: 'Verified Credentials' },
              { id: 'hackathons', label: 'Hackathons & Builds' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id as FilterCategory)}
                className={`px-4 py-2 rounded-xl text-[9.5px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${
                  activeFilter === id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Chronological Year Layers ── */}
        <div className="space-y-16">
          {years.map((yearStr) => {
            const yearItems = filteredAchievements.filter((item) => item.year === yearStr);

            return (
              <div key={yearStr} className="relative pl-6 md:pl-10 border-l-2 border-purple-500/20">
                {/* Year Marker Header Row */}
                <div className="flex items-center space-x-3 -ml-[33px] md:-ml-[49px] mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] shrink-0 z-10">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-purple-300 uppercase">
                      {yearStr} ERA
                    </span>
                  </div>
                </div>

                {/* Cards for this Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                  {yearItems.map((item) => {
                    const isExpanded = expandedCards[item.id] ?? false;

                    return (
                      <div
                        key={item.id}
                        className="card-premium p-7 md:p-8 rounded-3xl border border-white/[0.06] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Card Header Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-0.5 text-[8.5px] font-mono font-bold uppercase tracking-widest rounded-full border ${item.badgeStyle}`}>
                                {item.badge}
                              </span>
                              {item.scoreOrResult && (
                                <span className="text-[9.5px] font-mono text-purple-300/90 font-medium">
                                  {item.scoreOrResult}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{item.date}</span>
                          </div>

                          {/* Title & Organization */}
                          <h4 className="text-xl font-light text-slate-900 dark:text-white tracking-tight group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs font-mono text-purple-400/90 mt-1 mb-4">
                            {item.organization}
                          </p>

                          {/* Description Box */}
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.05] mb-4">
                            <p className="text-sm font-light text-slate-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Tech Stack / Competency Chips */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 rounded-lg bg-black/30 dark:bg-white/[0.03] border border-white/[0.06] text-[9.5px] font-mono text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Expandable Breakdown */}
                          {isExpanded && (item.problemSolved || item.learnings) && (
                            <div className="space-y-3 pt-3 border-t border-white/[0.06] animate-in fade-in duration-300 text-xs">
                              {item.problemSolved && (
                                <div>
                                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-0.5">
                                    Problem Solved / Focus
                                  </span>
                                  <p className="text-slate-300 font-light leading-relaxed">
                                    {item.problemSolved}
                                  </p>
                                </div>
                              )}
                              {item.learnings && (
                                <div>
                                  <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-0.5">
                                    Key Takeaway & Jury Feedback
                                  </span>
                                  <p className="text-purple-300/90 font-mono italic leading-relaxed">
                                    "{item.learnings}"
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-3 gap-2">
                          {(item.problemSolved || item.learnings) ? (
                            <button
                              onClick={() => toggleExpand(item.id)}
                              className="text-[10px] font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <span>{isExpanded ? 'Hide Details' : 'View Architecture Breakdown'}</span>
                              <span>{isExpanded ? '↑' : '↓'}</span>
                            </button>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-500 italic">Verified Record</span>
                          )}

                          <div className="flex items-center space-x-2">
                            {item.certificateUrl && (
                              <a
                                href={item.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-[9.5px] font-mono text-purple-300 hover:text-white flex items-center gap-1 transition-all shadow-sm"
                              >
                                <span>{item.certificateLabel || 'Certificate'}</span>
                                <span>↗</span>
                              </a>
                            )}
                            {item.githubUrl && (
                              <a
                                href={item.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-[9.5px] font-mono text-slate-300 hover:text-white flex items-center gap-1 transition-all"
                              >
                                <span>Code</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center mt-20 opacity-25">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="mx-3 w-1.5 h-1.5 bg-purple-500/40 rounded-full"></div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
