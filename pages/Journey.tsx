import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from '../components/SectionHeader';

interface JourneyProps {
  onNavigateToHackathons?: () => void;
}

/* ── Story Chapters ── */
const storyChapters = [
  {
    id: 'origin',
    year: '2006',
    title: 'The Beginning',
    subtitle: 'Nar Town, Anand District, Gujarat',
    quote: 'This is where the story begins.',
    story: 'My father serves as the Pujari at Gayatri Mandir. I was born into a traditional Brahmin family, where faith came first and the future was already written. There were no engineers in my family. No tech founders. No one who looked at a computer and saw a career. Including me. I was the quiet, introverted kid who had no idea what was coming — but this small town would become the starting line of everything.',
    gradient: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    images: ['/images/journey/beginning.jpg'],
    imageCaption: 'Nar Town, Anand District — where the foundation was laid.',
    layout: 'hero' as const,
  },
  {
    id: 'crossroads',
    year: '2019',
    title: 'The Crossroads',
    subtitle: 'After 10th — Two Paths, One Decision',
    quote: 'Why wait years to start building?',
    story: 'After 10th, most students chose 11-12 Science — the traditional path to engineering. But I was drawn to something more direct. The Diploma in IT started with actual computer subjects from day one — programming, databases, networking. No two years of physics and chemistry first. My family supported the decision, and I earned a merit-based TFW seat that made it affordable. It felt like the right move for someone who wanted to build, not just study.',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    images: ['/images/journey/crossroad.png'],
    imageCaption: 'Choosing the Diploma in IT path over traditional schooling.',
    layout: 'image-left' as const,
  },
  {
    id: 'shock-first-win',
    year: '2021',
    title: 'The Shock & First Win',
    subtitle: 'First semester. Zero coding background. 9.26 SPA.',
    quote: 'From self-doubt to conviction — I actually belong here.',
    story: 'Everything changed overnight. Social Science and Hindi suddenly became Machine Learning and Web Development. The curriculum shifted dramatically — from familiar school subjects to entirely new technical domains. My peers seemed like veteran developers while I was still learning what a "function" meant. When the first year results came, I couldn\'t believe it: a 9.26 SPA and Second Rank in the semester. The quiet kid who thought he would fail had just discovered he belongs.',
    highlight: '9.26 SPA • 2nd Rank in 2nd Semester',
    gradient: 'from-red-500/20 to-emerald-500/10',
    borderColor: 'border-red-500/30',
    images: ['/images/journey/diploma-second-rank.jpg'],
    imageCaption: 'Receiving 2nd Rank in 2nd Semester — the moment self-doubt transformed into genuine conviction.',
    layout: 'image-right' as const,
  },
  {
    id: 'first-build',
    year: '2022',
    title: 'The First Build',
    subtitle: 'First Hackathon — Building Jarvis',
    quote: 'The moment curiosity became a calling.',
    story: 'That weekend changed everything. We had no frameworks, no ML models, no experience — just HTML, CSS, JavaScript for the UI and Python for the logic. We built JARVIS — a voice assistant powered by Python that actually listened. While other teams showcased polished AI, we learned something deeper: the first step isn\'t about being the best. It\'s about being brave enough to begin. That hackathon didn\'t give me a trophy. It gave me an identity.',
    highlight: '0 frameworks. 1 weekend. 1 working product.',
    gradient: 'from-purple-500/20 to-violet-500/10',
    borderColor: 'border-purple-500/30',
    images: ['/images/journey/hackathon-first.jpg'],
    imageCaption: "My first ever hackathon team — Darpan, Divy, me (Siddharth), and Aarya.",
    layout: 'image-left' as const,
  },
  {
    id: 'first-internship',
    year: '2022',
    title: 'The First Internship',
    subtitle: 'Webial Technology — First Real-World Exposure',
    quote: 'Stepping into a professional environment at 16.',
    story: 'While still in my diploma, I landed my first internship at Webial Technology — a real company, real deadlines, real code. HTML, CSS, JavaScript — the same basics from my first hackathon, now used in production. It wasn\'t glamorous. But stepping into a professional development environment at 16 gave me something no classroom could: the confidence that I belonged in this industry.',
    highlight: 'First Professional Internship — At 16',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    images: ['/images/journey/first-internship.jpg'],
    imageCaption: 'Submitting my first real-world production deliverables at 16.',
    layout: 'image-right' as const,
  },
  {
    id: 'purpose-impact',
    year: '2023',
    title: 'The Purpose',
    subtitle: 'Smart Glasses for Visually Impaired — SSIP Innovation Grant',
    quote: 'What looks basic today was the spark of everything that came after.',
    tags: ['HC-SR04 Proximity Sensing', 'Vision Obstacle Detection', 'SSIP Grant Funded'],
    story: 'Today, with AI experience, this setup looks nostalgic in its simplicity. But in 2023, wiring that ultrasonic sensor and seeing it successfully alert for obstacles in our college lab felt monumental. It wasn\'t about building a finished consumer product — it was about proving a concept for social good. That raw intent earned us the SSIP Government Innovation Grant and gave me the conviction that technology is at its highest purpose when built to help people.',
    highlight: 'SSIP Selected — Government Innovation Grant • Embedded Systems & Sensors',
    gradient: 'from-indigo-500/20 to-violet-500/10',
    borderColor: 'border-indigo-500/30',
    images: ['/images/journey/smart-glass-horizontal.jpg'],
    imageCaption: 'The 2023 SSIP Prototype — Simple hardware, genuine purpose.',
    layout: 'image-left' as const,
  },
  {
    id: 'recognition',
    year: '2024',
    title: 'The Recognition',
    subtitle: 'CREATO 2024 — 3rd Place, State-Level',
    quote: 'From building JARVIS in a classroom to competing at the state level.',
    story: 'At CREATO 2024 — a premier state-level project competition — our team competed against top engineering students across Gujarat and secured 3rd Place. The kid from Nar Town who once didn\'t know what a function was was now standing on the podium against the best in the state. Every late night, every failed build, every "I\'ll figure it out" moment — it all led to that stage.',
    highlight: '3rd Place — State-Level Project Competition',
    gradient: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'border-amber-500/30',
    images: ['/images/journey/creato-1.jpg', '/images/journey/creato-2.jpg'],
    imageCaption: 'Standing on the podium — 3rd Place at CREATO 2024 State-Level Competition.',
    expandedCaption: 'CREATO 2024 3rd Prize State Trophy awarded at B&B Institute of Technology.',
    layout: 'image-right' as const,
  },
  {
    id: 'graduation',
    year: '2024',
    title: 'The Graduation',
    subtitle: 'Diploma in IT — 9.73 CGPA (2nd Rank in Department)',
    quote: 'Three years of consistency. From zero coding background to securing 2nd Rank in the department.',
    story: 'Completing my 3-year Diploma in Information Technology was a defining milestone. Starting with zero programming background, I finished with a 9.73 CGPA and secured the Second Rank across the entire IT Department. Standing on stage at the 67th Annual Day to receive the departmental award proved that relentless curiosity, work ethic, and dedication will always beat initial disadvantages — earning me direct merit entry into B.Tech ICT at Adani University.',
    highlight: '9.73 CGPA • 2nd Rank in IT Department • Adani University Next',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    images: ['/images/journey/diploma-rank-1.jpg'],
    imageCaption: 'Receiving the 2nd Rank Award for the entire Diploma IT Department (9.73 CGPA).',
    layout: 'image-left' as const,
  },
  {
    id: 'adani-university',
    year: '2024',
    title: 'The Next Horizon',
    subtitle: 'Adani University — B.Tech in Information & Communication Technology (ICT)',
    quote: 'Every graduation is just the starting line of a larger arena.',
    tags: ['B.Tech ICT', 'Adani University (FOT)', 'Merit D2D Admission', 'CGPA 8.88'],
    story: 'Graduating with top departmental honors earned me merit-based direct second-year entry into the B.Tech ICT program at Adani University, Ahmedabad. Stepping onto this modern campus in Shantigram marked an intellectual expansion in my journey — transitioning from diploma fundamentals into advanced computing: distributed systems, algorithm analysis, computer networks, and artificial intelligence. Maintaining an 8.88 CGPA while balancing intensive hackathons and engineering projects, Adani University provided the collaborative research environment and resources to build at scale.',
    highlight: 'B.Tech ICT (CGPA 8.88) • Adani University, Ahmedabad',
    gradient: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    images: ['/images/journey/adani-university.jpg'],
    imageCaption: 'At Adani University, Ahmedabad — Pursuing B.Tech in ICT (CGPA 8.88).',
    layout: 'image-right' as const,
  },
  {
    id: 'builder',
    year: '2024',
    title: 'The Builder',
    subtitle: 'BookMyLook — Transforming Walk-in Salon Queues into Conflict-Free Digital Bookings',
    quote: 'When real users depend on your system, edge cases and clean architecture become everything.',
    tags: ['React.js & Node.js', 'Dual-Sided Dashboards', 'MySQL Relational Schema', 'Dynamic Slot Scheduling'],
    story: 'Transitioning from hackathons to production engineering meant solving real business friction. I architected BookMyLook to digitize local salons and eliminate walk-in queues through a dual-sided booking system. On the client side, customers browse stylized service catalogs, select preferred stylists, and book dynamic time slots calculated by service duration. On the business side, salon owners manage chair availability, stylist schedules, and daily appointment traffic without collisions. Engineering this with React.js, Node.js, and MySQL taught me normalized relational database design, JWT authentication, and how to prevent race conditions during simultaneous bookings — turning me from a student writing scripts into an engineer designing reliable software systems.',
    highlight: 'Dual-Sided Platform • Conflict-Free Slot Engine • React, Node.js & MySQL',
    gradient: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
    images: ['/images/journey/bookmylook.jpg'],
    imageCaption: 'BookMyLook — Dual-sided salon booking and stylist management platform.',
    layout: 'image-left' as const,
  },
  {
    id: 'mission',
    year: '2025',
    title: 'The Mission',
    subtitle: 'SaralAI — Bringing Generative AI to 600M+ Non-English Speakers',
    quote: 'Technology isn\'t truly intelligent until it speaks the language of the people it serves.',
    tags: ['10+ Indic Languages', 'Sarvam AI Mayura & sarvam-m', 'Wiki Grounding', 'FastAPI & PostgreSQL'],
    story: 'Every milestone leading up to 2025 — from building voice assistants in my first hackathon to scaling AI reasoning engines in production — converged on one glaring problem: the global AI revolution was speaking fluent English, while over 600 million Indians were left outside the room. I knew this gap intimately. I built SaralAI to bridge that divide. Engineered with React.js, FastAPI, PostgreSQL, and Sarvam AI\'s Mayura v1 translation API and sarvam-m LLM, SaralAI is a voice-first multilingual assistant. To guarantee safety on high-stakes public welfare queries, I integrated real-time Wikipedia grounding to eliminate hallucinations and architected an intelligent text chunking engine to conquer upstream API rate limits. Anyone can now speak in Gujarati, Hindi, or 10+ Indic languages to get verified, step-by-step guidance on pensions, healthcare, and welfare schemes. SaralAI isn\'t just another project — it is the culmination of architectural rigor and deep empathy for the next billion users.',
    highlight: '10+ Indic Languages • Voice-First • Sarvam AI Mayura v1 & sarvam-m • Zero Hallucination',
    gradient: 'from-purple-500/20 to-fuchsia-500/10',
    borderColor: 'border-purple-500/30',
    images: ['/images/journey/saral-ai.png'],
    imageCaption: 'SaralAI Prototype — Voice-first multi-step regional interface for 10+ Indian languages.',
    layout: 'image-right' as const,
  },
  {
    id: 'present',
    year: '2026',
    title: 'The Advanced Arena',
    subtitle: 'AI & Software Engineering Intern — Vicharanam Labs (VLEID), IIT Ropar',
    quote: 'True engineering begins when you stop following tutorials and start architecting novel systems.',
    tags: ['Vicharanam Labs (VLEID)', 'IIT Ropar Collaboration', 'Engineering Standup', 'Intelligent Systems'],
    story: 'Selected for a competitive AI & Software Engineering internship at Vicharanam Labs (VLEID), in collaboration with IIT Ropar. Stepping into a high-caliber environment alongside distinguished mentors and researchers, I worked on the frontiers of intelligent computing and educational systems. Daily technical standups, rigorous architecture reviews, and designing robust system pipelines elevated my engineering craftsmanship to an industry-grade standard.',
    highlight: 'IIT Ropar Collaboration • Vicharanam Labs (VLEID) • Intelligent Systems',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    images: ['/images/journey/iit-ropar-standup.png'],
    imageCaption: 'VLEID Summership Evening Standup (Day 53) — Daily technical reviews with Prof. Meenakshi & IIT Ropar team.',
    layout: 'image-left' as const,
  },
  {
    id: 'pybe-engine',
    year: '2026',
    title: 'The Breakthrough',
    subtitle: 'PyBe — Flipping CS Education from Code-First to Concept-First',
    quote: 'Syntax is just the translation layer. Real programming is the architecture of thought.',
    tags: ['Constructivist Theory (Jonassen)', 'Cognitive Load Theory (Sweller)', 'CKLIS Reasoning Engine', 'Production PR #69 Merged'],
    story: 'Traditional CS education suffers from a foundational flaw: forcing beginners into syntax memorization before they understand systems. Grounded in David Jonassen’s Constructivist Problem-Solving Theory and John Sweller’s Cognitive Load Theory, PyBe eliminates extraneous cognitive load by flipping education from "code-first" to "concept-first". I engineered core subsystems of the Code Katha Learning Intelligence System (CKLIS), anchoring abstract programming in David Kolb’s experiential learning pathway: Scenario Experience → Pattern Recognition → Mental Model Construction → Code Implementation. To deliver instant, low-latency cognitive feedback, I architected a Server-Sent Events (SSE) streaming engine. My work culminated in a major production pull request (PR #69) being validated and merged into the core upstream codebase — merging learning science with production AI engineering.',
    highlight: 'Cognitive Learning Science • CKLIS Engine • Production PR #69 Merged',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    images: ['/images/journey/pybe-ui-studio.png'],
    imageCaption: 'PyBe Studio Interface — AI-powered concept-to-code generation with live CKLIS reasoning workflows.',
    layout: 'image-right' as const,
  },
];

const stats = [
  { label: 'Diploma CGPA', value: '9.73', subtext: '2nd Rank in Department', gradient: 'from-emerald-400 to-teal-300', border: 'hover:border-emerald-500/40' },
  { label: 'B.Tech CGPA', value: '8.88', subtext: 'Adani University', gradient: 'from-blue-400 to-indigo-300', border: 'hover:border-blue-500/40' },
  { label: 'Internships', value: '2', subtext: 'Webial & IIT Ropar', gradient: 'from-purple-400 to-violet-300', border: 'hover:border-purple-500/40' },
  { label: 'Shipped Projects', value: '6+', subtext: 'Production & AI Systems', gradient: 'from-amber-400 to-orange-300', border: 'hover:border-amber-500/40' },
  { label: 'Years in Tech', value: '5+', subtext: '2021 — 2026', gradient: 'from-pink-400 to-rose-300', border: 'hover:border-pink-500/40' },
];

/* ── Image Lightbox ── */
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
    onClick={onClose}
  >
    <div className="relative max-w-4xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
      <img src={src} alt="Full size" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
);

/* ── Scroll Progress Indicator ── */
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/* ── Chapter Layout Components ── */

const HeroLayout: React.FC<{ chapter: typeof storyChapters[0]; onImageClick: (src: string) => void }> = ({ chapter, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const activeImage = expanded && chapter.images.length > 1 ? chapter.images[1] : chapter.images[0];
  const activeCaption = expanded && (chapter as any).expandedCaption ? (chapter as any).expandedCaption : chapter.imageCaption;

  return (
    <div className="relative rounded-3xl overflow-hidden group">
      {/* Full-width cinematic image */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] h-full overflow-hidden">
        <img
          key={activeImage}
          src={activeImage}
          alt={chapter.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 cursor-pointer absolute inset-0 animate-in fade-in"
          onClick={() => onImageClick(activeImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12 flex flex-col justify-end max-w-full md:max-w-[65%] lg:max-w-[55%] z-10">
        <div className={`inline-block self-start px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${chapter.gradient} ${chapter.borderColor} border mb-4 backdrop-blur-md`}>
          {chapter.year}
        </div>
        <h2 className="text-4xl md:text-5xl font-extralight text-white mb-2 tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-sm text-white/60 mb-3">{chapter.subtitle}</p>
        <p className="text-base italic text-purple-300/90 mb-4">&ldquo;{chapter.quote}&rdquo;</p>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-purple-300 transition-colors mb-2 text-left self-start flex items-center space-x-1.5 cursor-pointer"
        >
          <span>{expanded ? 'Read less ↑' : 'Read the story ↓'}</span>
        </button>

        {expanded && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-500">
            <p className="text-sm text-white/80 leading-relaxed max-w-lg">{chapter.story}</p>
            {activeCaption && (
              <p className="text-xs italic text-purple-300/70 mt-2">
                {activeCaption}
              </p>
            )}
            {chapter.highlight && (
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl mt-4 ${chapter.gradient} ${chapter.borderColor} border backdrop-blur-md`}>
                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                <span className="text-[10px] font-bold tracking-wider">{chapter.highlight}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ImageLeftLayout: React.FC<{ chapter: typeof storyChapters[0]; onImageClick: (src: string) => void }> = ({ chapter, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const activeImage = expanded && chapter.images.length > 1 ? chapter.images[1] : chapter.images[0];
  const activeCaption = expanded && (chapter as any).expandedCaption ? (chapter as any).expandedCaption : chapter.imageCaption;

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Image Block */}
      <div className="flex-1 relative group w-full">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 min-h-[260px] flex items-center justify-center">
          <img
            key={activeImage}
            src={activeImage}
            alt={chapter.title}
            className="w-full object-cover max-h-[460px] transition-all duration-700 group-hover:scale-105 cursor-pointer animate-in fade-in"
            onClick={() => onImageClick(activeImage)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${chapter.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
        {activeCaption && (
          <p className="text-xs italic text-slate-400 dark:text-slate-500 mt-2 text-center transition-all duration-300">
            {activeCaption}
          </p>
        )}
      </div>

      {/* Text Block */}
      <div className="flex-1">
        <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${chapter.gradient} ${chapter.borderColor} border mb-4`}>
          {chapter.year}
        </div>
        <h2 className="text-3xl md:text-4xl font-extralight text-slate-900 dark:text-white mb-2 tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{chapter.subtitle}</p>
        <p className="text-base italic text-purple-600/80 dark:text-purple-400/70 mb-6">
          "{chapter.quote}"
        </p>
        {chapter.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {chapter.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-mono tracking-wide rounded-lg bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors mb-4 cursor-pointer"
        >
          {expanded ? 'Read less ↑' : 'Read the story ↓'}
        </button>
        {expanded && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-500">
            <p className="text-sm text-slate-500 dark:text-slate-400/80 leading-relaxed">
              {chapter.story}
            </p>
            {chapter.highlight && (
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl mt-4 ${chapter.gradient} ${chapter.borderColor} border`}>
                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                <span className="text-[10px] font-bold tracking-wider">{chapter.highlight}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ImageRightLayout: React.FC<{ chapter: typeof storyChapters[0]; onImageClick: (src: string) => void }> = ({ chapter, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const activeImage = expanded && chapter.images.length > 1 ? chapter.images[1] : chapter.images[0];
  const activeCaption = expanded && (chapter as any).expandedCaption ? (chapter as any).expandedCaption : chapter.imageCaption;

  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
      {/* Image Block */}
      <div className="flex-1 relative group w-full">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 min-h-[260px] flex items-center justify-center">
          <img
            key={activeImage}
            src={activeImage}
            alt={chapter.title}
            className="w-full max-h-[460px] object-cover transition-all duration-700 group-hover:scale-105 cursor-pointer animate-in fade-in"
            onClick={() => onImageClick(activeImage)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${chapter.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
        {activeCaption && (
          <p className="text-xs italic text-slate-400 dark:text-slate-500 mt-2 text-center transition-all duration-300">
            {activeCaption}
          </p>
        )}
      </div>

      {/* Text Block */}
      <div className="flex-1">
        <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${chapter.gradient} ${chapter.borderColor} border mb-4`}>
          {chapter.year}
        </div>
        <h2 className="text-3xl md:text-4xl font-extralight text-slate-900 dark:text-white mb-2 tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{chapter.subtitle}</p>
        <p className="text-base italic text-purple-600/80 dark:text-purple-400/70 mb-6">
          &ldquo;{chapter.quote}&rdquo;
        </p>
        {chapter.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {chapter.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-mono tracking-wide rounded-lg bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors mb-4 cursor-pointer"
        >
          {expanded ? 'Read less ↑' : 'Read the story ↓'}
        </button>
        {expanded && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-500">
            <p className="text-sm text-slate-500 dark:text-slate-400/80 leading-relaxed">
              {chapter.story}
            </p>
            {chapter.highlight && (
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl mt-4 ${chapter.gradient} ${chapter.borderColor} border`}>
                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                <span className="text-[10px] font-bold tracking-wider">{chapter.highlight}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TimelineConnector: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-4">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0">
        <div className={`w-[1.5px] h-full transition-all duration-1000 ${
          visible ? 'bg-gradient-to-b from-purple-500/40 via-indigo-500/30 to-purple-500/10' : 'bg-white/[0.04]'
        }`} />
      </div>
      {/* Year marker */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${
          visible
            ? 'bg-purple-500 border-purple-400 shadow-[0_0_12px_rgba(168,139,250,0.5)]'
            : 'bg-white/[0.06] border-white/[0.1]'
        }`} />
      </div>
    </div>
  );
};

/* ── Main Journey Component ── */
export const Journey: React.FC<JourneyProps> = ({ onNavigateToHackathons }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden animated-bg noise-overlay">
      <ScrollProgress />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white" />
      <div className="absolute top-32 right-20 w-64 h-64 bg-purple-500/4 rounded-full blur-[100px] pointer-events-none floating-shape" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-500/4 rounded-full blur-[80px] pointer-events-none floating-shape" style={{ animationDelay: '5s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="reveal-up">
          <SectionHeader
            title="My Journey"
            subtitle="From a small town in Gujarat to IIT Ropar. This is not a resume — it's a story."
          />
        </div>

        {/* Quick Stats Grid — Clean, Balanced, and Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 my-10 reveal-up" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group p-5 card-premium rounded-2xl border border-white/5 ${stat.border} text-center transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
            >
              <div>
                <div className={`text-3xl lg:text-4xl font-light font-mono tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-white">
                  {stat.label}
                </div>
              </div>
              <div className="text-[9px] font-mono text-slate-400 mt-2 pt-2 border-t border-white/5 truncate">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Story Chapters */}
        <div className="relative space-y-6 md:space-y-8">
          {storyChapters.map((chapter, index) => (
            <React.Fragment key={chapter.id}>
              {/* Timeline connector */}
              <TimelineConnector />

              {/* Chapter card */}
              <div
                className="reveal-up pl-12 md:pl-16 lg:pl-20"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="glass-card rounded-2xl hover:border-purple-500/15 transition-all duration-500">
                  {chapter.layout === 'hero' && (
                    <HeroLayout chapter={chapter} onImageClick={setLightboxSrc} />
                  )}
                  {chapter.layout === 'image-left' && (
                    <div className="p-8 md:p-10">
                      <ImageLeftLayout chapter={chapter} onImageClick={setLightboxSrc} />
                    </div>
                  )}
                  {chapter.layout === 'image-right' && (
                    <div className="p-8 md:p-10">
                      <ImageRightLayout chapter={chapter} onImageClick={setLightboxSrc} />
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* End of Journey */}
        <div className="relative mt-16 text-center">
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 w-[1.5px] h-16 bg-gradient-to-b from-purple-500/20 to-transparent" />
          <div className="pt-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                The journey continues...
              </span>
            </div>
            <p className="text-sm italic text-purple-500/60 dark:text-purple-400/50 max-w-md mx-auto">
              "The journey doesn't end here. It's just getting started."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={onNavigateToHackathons}
            aria-label="View all achievements"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/20 btn-shimmer cursor-pointer"
          >
            <span>View All Achievements</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
};
