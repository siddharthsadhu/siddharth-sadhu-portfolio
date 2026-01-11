
import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onSelect: (p: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen py-24 px-8 md:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '7s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-64 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal-up">
          <SectionHeader
            title="Projects"
            subtitle="High-signal architectural case studies. Focused on technical trade-offs and decisions."
          />
        </div>

        <div className="grid grid-cols-1 gap-10 mt-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="group relative reveal-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Card with Glassmorphism */}
              <div className="relative p-8 md:p-10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(167,139,250,0.15)] overflow-hidden">

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20"></div>
                </div>

                <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
                  <div className="space-y-6">
                    {/* Category & Date Tags */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-purple-300/30 dark:border-purple-500/20 shadow-sm">
                        {project.category}
                      </span>
                      <span className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
                        <div className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
                        <span>{project.date}</span>
                      </span>
                    </div>

                    {/* Title with hover effect */}
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 dark:group-hover:from-purple-400 dark:group-hover:to-indigo-400 transition-all duration-500">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 font-light text-lg leading-relaxed max-w-xl">
                      {project.oneLiner}
                    </p>

                    {/* Metrics with animated indicators */}
                    <div className="flex flex-wrap gap-6 pt-4">
                      {project.metrics?.map((m, i) => (
                        <div key={i} className="group/metric p-4 bg-white/50 dark:bg-white/[0.02] rounded-xl border border-slate-100 dark:border-white/5 transition-all duration-300 hover:border-purple-300/50 dark:hover:border-purple-500/20 hover-glow">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_6px_rgba(167,139,250,0.6)]"></div>
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-500">{m.label}</span>
                          </div>
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-light text-slate-900 dark:text-white">{m.value}</span>
                            {m.subtext && <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">{m.subtext}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side with CTA */}
                  <div className="flex flex-col justify-between items-start md:items-end h-full space-y-8">
                    {/* Project Number */}
                    <div className="flex items-center space-x-3 opacity-30 group-hover:opacity-60 transition-opacity">
                      <span className="text-6xl md:text-7xl font-extralight text-slate-300 dark:text-slate-700 tracking-tighter">0{index + 1}</span>
                    </div>

                    {/* Dive Deep Button */}
                    <button
                      onClick={() => onSelect(project)}
                      className="group/btn relative inline-flex items-center space-x-4 px-8 py-4 bg-slate-900 dark:bg-white rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(167,139,250,0.2)] overflow-hidden"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white dark:text-slate-900 z-10">Dive Deep</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-slate-900/10 flex items-center justify-center z-10 group-hover/btn:bg-purple-500/30 transition-colors">
                        <svg className="w-4 h-4 text-white dark:text-slate-900 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"></div>

                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity">
                  <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-purple-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center mt-20 opacity-30">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-purple-500/50 rounded-full"></div>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
