
import React from 'react';
import { Project } from '../types';

interface ProjectDeepDiveProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDeepDive: React.FC<ProjectDeepDiveProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:60px_60px] text-slate-900 dark:text-white"></div>

      {/* Floating Decorative Blurs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>

      {/* Hero Section */}
      <div className="px-8 md:px-24 mb-20 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
          <div className="space-y-8 reveal-up">
            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-purple-300/30 dark:border-purple-500/20 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
                {project.category}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">{project.date}</span>
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] gradient-text">{project.title}</h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl border-l-2 border-purple-500/30 pl-6">
              {project.oneLiner}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.03] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_40px_rgba(255,255,255,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">View Live Prototype</span>
              </button>

              {/* GitHub Button */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.03] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-700/50 hover:border-slate-600/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {/* GitHub Logo */}
                  <svg
                    className="w-5 h-5 relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="relative z-10">View on GitHub</span>
                </a>
              )}

              <button className="px-8 py-4 border border-slate-300 dark:border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-purple-50 dark:hover:bg-purple-500/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all text-slate-700 dark:text-slate-400">
                Read Case Study ↓
              </button>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative group rounded-3xl overflow-hidden border border-slate-200/50 dark:border-white/5 bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.3)] reveal-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800" alt="Architecture Visual" className="w-full h-auto grayscale opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000" />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

            {/* Impact card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-purple-500/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.6)]"></div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">Primary Impact</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-light text-white">{project.metrics[0].value}</span>
                <span className="text-lg text-purple-400">{project.metrics[0].subtext}</span>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-4 right-4 opacity-30">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L19 9L14.14 12.97L15.64 19L12 15.77L8.36 19L9.86 12.97L5 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Specs Bar */}
      <div className="border-y border-slate-200/50 dark:border-white/5 py-10 mb-20 bg-white/30 dark:bg-white/[0.01] backdrop-blur-sm">
        <div className="px-8 md:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Role', value: project.role, color: 'emerald' },
              { label: 'Timeline', value: project.timeline, color: 'blue' },
              { label: 'Core Stack', value: project.stack.slice(0, 3).join(", "), color: 'amber' },
              { label: 'Outcome', value: project.outcome, color: 'purple', highlight: true }
            ].map((spec, i) => (
              <div key={i} className="group reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-1.5 h-1.5 bg-${spec.color}-500 rounded-full shadow-[0_0_6px_rgba(var(--${spec.color}-rgb),0.5)]`} style={{ backgroundColor: spec.color === 'emerald' ? '#10b981' : spec.color === 'blue' ? '#3b82f6' : spec.color === 'amber' ? '#f59e0b' : '#a855f7' }}></div>
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-[0.25em]">{spec.label}</span>
                </div>
                <span className={`text-base md:text-lg font-light ${spec.highlight ? 'text-purple-700 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 md:px-24 max-w-7xl mx-auto grid lg:grid-cols-[1fr_2.5fr] gap-16 lg:gap-24 relative z-10">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit space-y-10">
          {/* Project Index */}
          <div className="p-6 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500 mb-4 flex items-center space-x-2">
              <div className="w-4 h-[1px] bg-purple-500"></div>
              <span>Project Index</span>
            </h4>
            <nav className="flex flex-col space-y-3">
              {project.sections.map((s, i) => (
                <a key={i} href={`#section-${i}`} className="group/nav flex items-center space-x-3 text-sm font-light text-slate-600 dark:text-slate-500 hover:text-purple-700 dark:hover:text-purple-400 transition-all">
                  <span className="text-[10px] font-mono text-purple-500/50 group-hover/nav:text-purple-500">0{i + 1}</span>
                  <span>{s.title}</span>
                </a>
              ))}
              <a href="#outcomes" className="group/nav flex items-center space-x-3 text-sm font-light text-slate-600 dark:text-slate-500 hover:text-purple-700 dark:hover:text-purple-400 transition-all">
                <span className="text-[10px] font-mono text-purple-500/50 group-hover/nav:text-purple-500">0{project.sections.length + 1}</span>
                <span>Outcomes</span>
              </a>
            </nav>
          </div>

          {/* Tech Stack */}
          <div className="p-6 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 dark:from-purple-500/5 dark:to-indigo-500/5 backdrop-blur-xl rounded-2xl border border-purple-200/30 dark:border-purple-500/10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 mb-4 flex items-center space-x-2">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => (
                <span key={s} className="px-3 py-1.5 bg-white/50 dark:bg-black/20 border border-purple-200/50 dark:border-purple-500/20 rounded-lg text-[9px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider hover:border-purple-400 dark:hover:border-purple-400 transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Body */}
        <div className="space-y-24">
          {project.sections.map((section, idx) => (
            <section key={idx} id={`section-${idx}`} className="space-y-10 reveal-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Section Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-tight bg-purple-100 dark:bg-purple-500/10 px-3 py-1 rounded-lg">0{idx + 1}</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
                  {section.content}
                </p>
              </div>

              {/* Subsections */}
              {section.subsections && (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.subsections.map((sub, sidx) => (
                    <div key={sidx} className="group p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-purple-300/50 dark:hover:border-purple-500/20 transition-all duration-500 hover-glow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">{sub.title}</h3>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-500/10 dark:to-indigo-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{sub.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Outcomes Section */}
          <section id="outcomes" className="space-y-10 reveal-up">
            <div className="flex items-center space-x-4">
              <span className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-tight bg-purple-100 dark:bg-purple-500/10 px-3 py-1 rounded-lg">0{project.sections.length + 1}</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 dark:text-white">Outcomes</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="group p-8 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/5 backdrop-blur-xl border border-purple-200/30 dark:border-purple-500/20 rounded-2xl text-center space-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(167,139,250,0.15)] transition-all duration-500">
                  <span className="text-5xl md:text-6xl font-light gradient-text">{m.value}</span>
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">{m.label}</span>
                    {m.subtext && <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">{m.subtext}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Section */}
          <section className="pt-16 text-center space-y-10 border-t border-slate-200/50 dark:border-white/5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-300/30 dark:border-purple-500/20">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>

            <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight max-w-4xl mx-auto text-slate-900 dark:text-white">
              "The first version failed. <span className="gradient-text">That's why this one works.</span>"
            </h2>

            <p className="text-slate-600 dark:text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Iterative failure is the only path to a robust system. Ready to explore more?
            </p>

            <div className="pt-6">
              <button
                onClick={onBack}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-[1.03] transition-all shadow-[0_20px_50px_rgba(167,139,250,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">← Back to Projects</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
