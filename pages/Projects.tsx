import React, { useState, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { MagneticButton } from '../components/MagneticButton';

interface ProjectsProps {
  onSelect: (p: Project) => void;
}

interface FilterTab {
  id: string;
  label: string;
  filter: (p: Project) => boolean;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'all', label: 'All Projects', filter: () => true },
  { id: 'ai', label: 'AI & Generative LLMs', filter: (p) => p.category.toLowerCase().includes('ai') },
  { id: 'fullstack', label: 'Full-Stack Engineering', filter: (p) => p.category.toLowerCase().includes('full-stack') },
  { id: 'embedded', label: 'Embedded & Hardware', filter: (p) => p.category.toLowerCase().includes('embedded') },
];

export const Projects: React.FC<ProjectsProps> = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = useMemo(() => {
    const currentTab = FILTER_TABS.find((t) => t.id === activeTab);
    if (!currentTab) return PROJECTS_DATA;
    return PROJECTS_DATA.filter(currentTab.filter);
  }, [activeTab]);

  return (
    <div className="min-h-screen py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white" />

      {/* Ambient glow orbs */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none floating-shape" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none floating-shape" style={{ animationDelay: '7s' }} />

      {/* Accent Line */}
      <div className="absolute top-0 left-[25%] w-[1px] h-64 bg-gradient-to-b from-purple-500/15 via-purple-500/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal-up">
          <SectionHeader
            title="Projects"
            subtitle="High-signal architectural case studies. Focused on technical trade-offs, real constraints, and production outcomes."
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mt-8 mb-12 reveal-up">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-105 border border-purple-400/30 font-medium'
                    : 'glass-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/50 dark:border-white/5 hover:border-purple-500/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Card */}
              <div className="card-premium p-8 md:p-12 rounded-3xl overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                  <div className="space-y-6">
                    {/* Category & Date */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-purple-300/30 dark:border-purple-500/20">
                        {project.category}
                      </span>
                      <span className="flex items-center space-x-2 text-[10px] font-mono tracking-wider text-slate-400 dark:text-slate-500">
                        <div className="w-1 h-1 bg-purple-500 rounded-full" />
                        <span>{project.date}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-4xl font-extralight tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500">
                      {project.title}
                    </h3>

                    {/* One-Liner Description */}
                    <p className="text-slate-600 dark:text-slate-400/90 font-light text-sm md:text-base leading-relaxed max-w-xl">
                      {project.oneLiner}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] font-mono tracking-wide rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3.5 glass-card rounded-2xl border border-white/5 bg-black/10">
                          <div className="flex items-center space-x-1.5 mb-1">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_6px_rgba(167,139,250,0.5)]" />
                            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500 truncate">{m.label}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-base md:text-lg font-light text-slate-900 dark:text-white tracking-tight">{m.value}</span>
                            {m.subtext && <span className="text-[10px] text-purple-500 dark:text-purple-400 font-medium truncate">{m.subtext}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Visual + Action CTAs */}
                  <div className="flex flex-col justify-between space-y-6">
                    {/* Studio Window Browser Frame */}
                    <div
                      onClick={() => onSelect(project)}
                      className="rounded-3xl border border-white/10 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group/frame cursor-pointer transition-all hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
                    >
                      {/* Studio Window Chrome Header */}
                      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="px-3 py-0.5 rounded-full bg-black/40 border border-white/5 text-[10px] font-mono text-slate-400 flex items-center space-x-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="truncate max-w-[160px]">{project.title.split('–')[0].trim()}</span>
                        </div>
                        <span className="text-[10px] font-mono text-purple-400 group-hover/frame:text-purple-300 transition-colors flex items-center gap-1">
                          <span>Studio</span>
                          <span>↗</span>
                        </span>
                      </div>

                      {/* Viewport Frame (Clean, Unobstructed UI) */}
                      <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden max-h-[260px] aspect-video">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain bg-slate-950/60 transition-transform duration-700 group-hover/frame:scale-[1.03]"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-slate-900 flex items-center justify-center">
                            <span className="text-xs font-mono text-purple-400">Architectural Case Study</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions: Dive Deep & GitHub */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>Repository ↗</span>
                        </a>
                      )}

                      <MagneticButton
                        onClick={() => onSelect(project)}
                        strength={0.15}
                        aria-label={`View detailed case study for ${project.title}`}
                        className="group/btn relative inline-flex items-center space-x-3 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Architectural Case Study</span>
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </MagneticButton>
                    </div>
                  </div>
                </div>

                {/* Corner Accent Glow */}
                <div className="corner-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center mt-20 opacity-25">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="mx-3 w-1.5 h-1.5 bg-purple-500/40 rounded-full" />
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};
