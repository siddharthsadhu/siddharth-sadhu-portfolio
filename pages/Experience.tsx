import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCE_DATA, SIDEBAR_SKILLS } from '../data';

export const Experience: React.FC = () => {
  const [isRecruiterView, setIsRecruiterView] = useState(true);
  const [sidebarFilter, setSidebarFilter] = useState<'all' | 'AI' | 'Full-Stack' | 'Core' | 'Industry'>('all');
  const [hoveredSidebarSkill, setHoveredSidebarSkill] = useState<typeof SIDEBAR_SKILLS[0] | null>(null);

  const filteredSidebarSkills = SIDEBAR_SKILLS.filter((s) => {
    if (sidebarFilter === 'all') return true;
    if (sidebarFilter === 'AI') return s.tag === 'AI' || s.tag === 'LLM' || s.tag === 'SSE';
    if (sidebarFilter === 'Full-Stack') return s.tag === 'UI' || s.tag === 'DB' || s.tag === 'SQL';
    if (sidebarFilter === 'Core') return s.tag === 'IoT' || s.tag === 'CS' || s.tag === 'Git';
    if (sidebarFilter === 'Industry') return s.tag === 'Industry';
    return true;
  });

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Ambient glow orbs */}
      <div className="absolute top-20 right-16 w-80 h-80 bg-purple-500/4 rounded-full blur-[120px] pointer-events-none floating-shape"></div>
      <div className="absolute bottom-32 left-8 w-64 h-64 bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 right-[25%] w-[1px] h-96 bg-gradient-to-b from-purple-500/15 via-purple-500/3 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full particle particle-delay-1"></div>
      <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-indigo-400/30 rounded-full particle particle-delay-2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-up">
          <SectionHeader
            title="Experience"
            subtitle="A summary of leadership, architectural influence, and shipped products."
          />

          {/* Premium Toggle */}
          <div className="flex items-center p-1 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-white/[0.06] shadow-lg shadow-purple-500/3">
            <button
              onClick={() => setIsRecruiterView(true)}
              aria-pressed={isRecruiterView}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-500 ease-out-expo ${
                isRecruiterView
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Recruiter Focus</span>
            </button>
            <button
              onClick={() => setIsRecruiterView(false)}
              aria-pressed={!isRecruiterView}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-500 ease-out-expo ${
                !isRecruiterView
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>Narrative</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-10">
          {/* ── Premium Sidebar ── */}
          <aside className="lg:sticky lg:top-28 h-fit reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="card-premium p-6 space-y-6">
              {/* Profile Header */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500"></div>
                  <div className="relative w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border-2 border-white/50 dark:border-white/10">
                    <img src="/images/journey/portrait.jpg" alt="Siddharth Sadhu" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-light text-slate-900 dark:text-white tracking-tight">Siddharth Sadhu</h3>
                  <p className="text-[9px] text-purple-500 dark:text-purple-400 uppercase tracking-[0.2em] font-bold">Hybrid Engineer</p>
                </div>
              </div>

              {/* Live Interactive Core Skills Deck */}
              <div className="border-y border-slate-200/40 dark:border-white/[0.06] py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-[0.2em]">
                      Core & Industry Stack
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-purple-400 font-semibold">
                    {filteredSidebarSkills.length} Skills
                  </span>
                </div>

                {/* Subcategory Filter Segmented Bar */}
                <div className="grid grid-cols-5 p-1 bg-black/40 dark:bg-white/[0.03] rounded-xl border border-white/5 gap-1 text-[8.5px] font-mono">
                  {(['all', 'AI', 'Full-Stack', 'Core', 'Industry'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSidebarFilter(cat)}
                      className={`py-1.5 px-0.5 rounded-lg transition-all duration-200 cursor-pointer select-none text-center truncate ${
                        sidebarFilter === cat
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md shadow-purple-600/25'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat}
                    </button>
                  ))}
                </div>

                {/* Interactive Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1 max-h-[220px] overflow-y-auto pr-0.5 custom-scrollbar">
                  {filteredSidebarSkills.map((s, i) => {
                    const isIndustry = s.tag === 'Industry';
                    const isHovered = hoveredSidebarSkill?.name === s.name;

                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setHoveredSidebarSkill(s)}
                        onMouseLeave={() => setHoveredSidebarSkill(null)}
                        className={`px-2.5 py-1 rounded-lg border transition-all text-[10px] font-mono cursor-pointer select-none flex items-center gap-1.5 ${
                          isHovered
                            ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-[1.03]'
                            : isIndustry
                            ? 'bg-indigo-500/10 dark:bg-indigo-950/30 border-indigo-500/20 text-indigo-300 hover:border-indigo-500/50'
                            : 'bg-black/30 dark:bg-white/[0.03] border-white/5 hover:border-purple-500/40 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isHovered ? 'bg-white' : isIndustry ? 'bg-indigo-400' : 'bg-purple-400/80'}`} />
                        <span>{s.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Live Provenance & Context Footnote Box (Never Truncated) */}
                <div className="mt-2 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-2.5 min-h-[50px] transition-all duration-200">
                  <div className="mt-0.5 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${hoveredSidebarSkill ? 'bg-purple-400 animate-pulse' : 'bg-slate-600'}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    {hoveredSidebarSkill ? (
                      <div className="animate-in fade-in duration-150 space-y-0.5">
                        <div className="text-[10px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
                          <span>{hoveredSidebarSkill.name}</span>
                          <span className="text-[8px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-200 border border-purple-500/30 font-normal">
                            {hoveredSidebarSkill.category}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 leading-snug font-sans">
                          {hoveredSidebarSkill.project}
                        </p>
                      </div>
                    ) : (
                      <p className="text-[10px] font-mono text-slate-500 italic leading-snug">
                        Hover any capability above to see real-world application context
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a href="/resume.pdf" download aria-label="Download resume" className="w-full py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-[9px] font-bold uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-slate-900/15 dark:shadow-white/8 flex items-center justify-center space-x-2 btn-shimmer">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span>Download Resume</span>
                </a>
                <div className="flex space-x-2.5">
                  <a href="https://www.linkedin.com/in/siddharth-sadhu-b67551274/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile" className="flex-1 py-2.5 glass-card rounded-xl text-center text-[9px] font-bold uppercase tracking-[0.15em] hover:border-purple-300/40 dark:hover:border-purple-500/25 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-center space-x-1.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/siddharthsadhu" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" className="flex-1 py-2.5 glass-card rounded-xl text-center text-[9px] font-bold uppercase tracking-[0.15em] hover:border-purple-300/40 dark:hover:border-purple-500/25 transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-center space-x-1.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="flex items-center justify-center space-x-2 pt-3 border-t border-slate-200/40 dark:border-white/[0.04]">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Available</span>
              </div>
            </div>
          </aside>

          {/* ── Experience Timeline ── */}
          <div className="relative pl-10 md:pl-12">
            {/* Continuous Vertical Spine Line — Starts at first card dot (top-[26px]) and ends cleanly at bottom */}
            <div className="absolute left-[13px] top-[26px] bottom-[26px] w-[2px] bg-gradient-to-b from-purple-500/40 via-indigo-500/25 to-purple-500/10 rounded-full" />
            
            {/* Flowing Laser Signal traveling along the spine */}
            <div className="absolute left-[13px] top-[26px] bottom-[26px] w-[2px] overflow-hidden rounded-full pointer-events-none">
              <div
                className="w-full h-24 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                style={{
                  animation: 'scan-line 6s ease-in-out infinite'
                }}
              />
            </div>

            <div className="space-y-16">
              {EXPERIENCE_DATA.map((exp, index) => (
                <div
                  key={index}
                  className="relative reveal-up"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Timeline Dot — Centered exactly on the spine line */}
                  <div className="absolute left-[-34px] md:left-[-36px] top-6 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7)] border-2 border-background-dark flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Horizontal Branch Connector Line */}
                  <div className="absolute left-[-20px] md:left-[-22px] top-[32px] w-5 md:w-6 h-[1.5px] bg-gradient-to-r from-purple-500/60 to-purple-500/20" />

                  {/* Experience Card */}
                  <div className="card-premium p-8 md:p-10 transition-all duration-500 hover:border-purple-300/40 dark:hover:border-purple-500/25">
                    {/* Header: Company, Role, Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-7 border-b border-slate-200/40 dark:border-white/[0.04] gap-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-1.5">
                          <span className="text-xl md:text-2xl font-light text-slate-900 dark:text-white tracking-tight">{exp.company}</span>
                        </div>
                        <p className="text-sm font-medium gradient-text">{exp.role}</p>
                      </div>
                      <div className="sm:text-right">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/[0.06]">
                          <span className="text-[9px] font-mono font-medium text-slate-500 dark:text-slate-400">{exp.location}</span>
                          <span className="w-0.5 h-0.5 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                          <div className="flex items-center space-x-1.5">
                            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{exp.dates}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Based on View Mode */}
                    {isRecruiterView ? (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        {/* Impact Metrics */}
                        <div className="space-y-3 mb-7">
                          {exp.impactMetrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-3.5 p-4 glass-card rounded-xl group/metric"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-1.5 h-1.5 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-[0_0_6px_rgba(167,139,250,0.4)] group-hover/metric:shadow-[0_0_10px_rgba(167,139,250,0.7)] transition-all duration-300"></div>
                              </div>
                              <p className="text-base font-light leading-relaxed text-slate-600 dark:text-slate-300/80">{metric}</p>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack — Animated Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 glass-card rounded-lg text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 hover:border-purple-300/40 dark:hover:border-purple-500/25 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_4px_15px_rgba(167,139,250,0.1)]"
                              style={{ animationDelay: `${i * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="animate-in fade-in slide-in-from-left-4 duration-500 space-y-6">
                        {/* Narrative Paragraph */}
                        <p className="text-base font-light leading-relaxed text-slate-600 dark:text-slate-300/80">
                          {exp.narrative}
                        </p>

                        {/* Standout Achievement Box */}
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/[0.04] to-indigo-500/[0.02] border border-purple-400/15 dark:border-purple-500/15 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">Key Achievement</span>
                          </div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            {exp.highlight}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
