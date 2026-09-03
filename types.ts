
export enum Page {
  Home = 'home',
  Journey = 'journey',
  Projects = 'projects',
  ProjectDeepDive = 'project-deep-dive',
  Experience = 'experience',
  HackathonsCertifications = 'hackathons-certifications',
  Contact = 'contact'
}

export type Theme = 'light' | 'dark';

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  subsections?: { title: string; body: string; icon?: string }[];
}

export interface Project {
  id: string;
  category: string;
  date: string;
  title: string;
  oneLiner: string;
  problem: string;
  constraint: string;
  outcome: string;
  stack: string[];
  metrics: Metric[];
  role: string;
  timeline: string;
  architecture: string;
  tradeOffs: string[];
  whatBroke: string;
  redesignReflections: string;
  sections: ProjectSection[];
  githubUrl?: string;
  image?: string;
  gradient?: string;
  architectureImage?: string;
  liveDemoUrl?: string;
  demoVideoUrl?: string;
  presentationUrl?: string;
  architectureFlow?: { step: string; title: string; desc: string; tech: string }[];
  decisionMatrix?: { decision: string; choice: string; alternative: string; rationale: string; impact: string }[];
  benchmarks?: { metric: string; target: string; achieved: string; status: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  stats: { label: string; value: string }[];
  impactMetrics: string[];
  techStack: string[];
  narrative: {
    context: string;
    decisions: string;
    learning: string;
  };
}

// Hackathon & Certification Types
export interface Hackathon {
  id: string;
  name: string;
  date: string;
  location: string;
  duration: string;
  teamSize: number;
  teamName?: string;
  projectName: string;
  projectDescription: string;
  problemSolved: string;
  techStack: string[];
  result: string; // e.g., "1st Place", "Finalist", "Participated"
  prize?: string;
  learnings: string;
  demoUrl?: string;
  githubUrl?: string;
  certificateUrl?: string;
}

export interface AcademicHonor {
  id: string;
  title: string;
  degree: string;
  institution: string;
  year: string;
  score: string;
  rank?: string;
  highlight: string;
  badge: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  platform: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  logoUrl?: string;
}

export type SkillCategory = 'ai_ml' | 'fullstack' | 'backend_data' | 'systems_core';
export type RecruiterRole = 'all' | 'ai_ml' | 'fullstack' | 'backend' | 'systems';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0 - 100
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon?: string;
  context: string; // Real-world usage context
  project?: string; // Linked project name
  projectId?: string; // e.g. 'saral-ai'
  roles: ('ai_ml' | 'fullstack' | 'backend' | 'systems')[];
}

export interface SkillDomain {
  id: SkillCategory;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  badgeColor: string;
  borderColor: string;
  skills: SkillItem[];
}
