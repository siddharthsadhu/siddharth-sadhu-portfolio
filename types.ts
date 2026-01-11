
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

// Legacy JourneyNode - kept for reference
export interface JourneyNode {
  year: string;
  role: string;
  context: string;
  constraint: string;
  whatChanged: string;
  whatWasLearned: string;
  failure?: {
    issue: string;
    analysis: string;
  };
}

// New Journey Timeline Types
export interface JourneyMilestone {
  title: string;
  description: string;
  type: 'achievement' | 'learning' | 'project' | 'hackathon' | 'certification';
  icon?: string;
  link?: string; // For hackathons/certs that link to deep dive
}

export interface JourneyYear {
  year: string;
  title: string;
  subtitle?: string;
  period?: string; // e.g., "2021 - 2024" for multi-year entries
  isEducation?: boolean;
  milestones: JourneyMilestone[];
  hackathonPreviews?: HackathonPreview[];
  certificationPreviews?: CertificationPreview[];
}

export interface HackathonPreview {
  id: string;
  name: string;
  result?: string; // e.g., "1st Place", "Finalist"
}

export interface CertificationPreview {
  id: string;
  name: string;
  platform: string;
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
