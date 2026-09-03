# Portfolio Website - Project Context

## Owner: Siddharth Sadhu

### Personal Info
- **Name:** Siddharth Sadhu
- **Phone:** +91 92654 28944
- **Email:** siddharthsadhu28@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/siddharth-sadhu-b67551274/
- **GitHub:** https://github.com/siddharthsadhu
- **Location:** Ahmedabad, Gujarat, India (originally from Nar Town, Anand District)

### Education
- **B.Tech ICT** — Adani University, Ahmedabad (2024–2027, Pursuing) — CGPA: 8.88
- **Diploma IT** — B & B Institute of Technology, Vallabh Vidyanagar (2021–2024) — CGPA: 9.73 (2nd Rank)
- **SSC** — GSEB (2019–2021) — 93%

### Background
- Brahmin family from Nar Town, Anand District, Gujarat
- Father is Pujari at Gayatri Mandir
- Gujarati medium education background
- First in family to pursue tech/engineering

### Experience
- **AI/ML & Software Engineering Intern** — Vicharanam Labs (VLEID), IIT Ropar (May–July 2026, Remote)
- **Web Development Intern** — Webial Technology Pvt. Ltd. (Sep 2022, Vallabh Vidyanagar)

### Key Projects
1. **SaralAI** — Multilingual AI assistance platform (React.js + FastAPI + PostgreSQL + Sarvam AI Mayura v1 translation & sarvam-m LLM, Wiki grounding, role-based category-aware prompting, smart text chunking)
2. **PyBe** — AI-driven scenario-to-code learning engine (CKLIS reasoning, SSE streaming, React/TypeScript, Node.js/Express, MongoDB) — contributed production-merged PR #69
3. **BookMyLook** — Appointment & service booking system (React + Node.js + MySQL)
4. **Smart Glasses** — Wearable assistive system for visually impaired (Embedded Systems, Sensors) — SSIP Selected

### Skills
- **Languages:** Java, Python, JavaScript
- **Frontend:** HTML, CSS, React.js
- **Backend:** Node.js, FastAPI
- **Databases:** MySQL, MongoDB
- **Core CS:** DSA, OOP, DBMS
- **AI/ML:** Machine Learning, Data Preprocessing, Basic Statistics
- **Tools:** Git, GitHub

### Achievements
- 2nd Rank in Diploma IT (2023–24)
- 3rd Place — CREATO 2024 (State-Level Project Competition)
- SSIP Selected — Smart Glasses for Visually Impaired (2024)
- Yuva AI for All — IndiaAI & NASSCOM FutureSkills (Dec 2025)
- Deloitte Data Analytics Virtual Experience Program (Dec 2025)

### GitHub Repos (Public)
- SaralAI, PyBe, PyBe-Scenario-Engine, BookMyLook, UniPlayer, Morpho
- CrowdSourcedFAQ, CrowdMind, AI_AGRI_PROJECT
- AI-ML-Job-Market-Analysis, aadhaar_enrolment_update_analysis
- DV_Sem_6_Study_Material, SE_Sem_6_Study_Material, Poolio, BudgetBuddy

---

## Website Tech Stack
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS (dark/light theme)
- **Build:** Vite
- **Routing:** Custom page-based navigation (no React Router)

## Pages
1. **Home** — Hero + intro + quick links
2. **Journey** — Timeline story from childhood to present (10 chapters)
3. **Projects** — Deep dive into key projects
4. **Experience** — Work experience cards
5. **Hackathons & Certifications** — Awards and certs
6. **Contact** — Contact form + social links

## Journey Page Structure
- 10 story chapters in `storyChapters` array inside `pages/Journey.tsx`
- Each chapter has: id, year, title, subtitle, quote, story, gradient, borderColor, images, layout
- Layout types: hero, text, image-left, image-right, gallery
- Stats section at top with Diploma CGPA, B.Tech CGPA, Internships, Projects, Years in Tech

## Current Journey Chapters (chronological)
1. **The Beginning (2006)** — Nar Town origin story, Brahmin family, father as Pujari, no engineers in family, quiet kid with unknown potential
2. **The Crossroads (2019)** — After 10th, chose Diploma IT over 11-12 Science
3. **The Shock & First Win (2021)** — Gujarati medium → ML, 9.26 SPA
4. **The First Build (2022)** — First hackathon, built JARVIS
5. **The First Internship (2022)** — Webial Technology
6. **The Purpose (2023)** — ML discovery → Smart Glasses → SSIP
7. **The Recognition (2024)** — CREATO 2024, 3rd Place
8. **The Builder (2024)** — BookMyLook, PyBe, production projects
9. **The Mission (2025)** — SaralAI, AI for non-English speakers
10. **The Present (2026)** — IIT Ropar internship, B.Tech final year

## Design Conventions
- Glassmorphism cards (`glass-card` class)
- Purple/indigo gradient accents
- Scroll-reveal animations (`reveal-up`, `animate-in`)
- Dark mode primary, light mode toggle available
- Timeline connectors between chapters
- Image lightbox for full-size viewing
