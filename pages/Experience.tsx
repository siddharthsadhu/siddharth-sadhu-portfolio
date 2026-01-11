
import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { EXPERIENCE_DATA } from '../data';

export const Experience: React.FC = () => {
  const [isRecruiterView, setIsRecruiterView] = useState(true);

  return (
    <div className="min-h-screen py-24 px-8 md:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 right-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
      <div className="absolute bottom-32 left-8 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-violet-500/3 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '10s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-96 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-[1px] h-64 bg-gradient-to-t from-indigo-500/15 via-indigo-500/5 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-purple-400 rounded-full particle particle-delay-1"></div>
      <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full particle particle-delay-2"></div>
      <div className="absolute bottom-48 left-1/4 w-1 h-1 bg-violet-400 rounded-full particle particle-delay-3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-up">
          <SectionHeader
            title="Experience"
            subtitle="A summary of leadership, architectural influence, and shipped products."
          />

          {/* Premium View Toggle */}
          <div className="flex items-center p-1.5 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-white/10 shadow-lg shadow-purple-500/5">
            <button
              onClick={() => setIsRecruiterView(true)}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${isRecruiterView ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span>Recruiter Mode</span>
            </button>
            <button
              onClick={() => setIsRecruiterView(false)}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${!isRecruiterView ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>Narrative View</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
          {/* Premium Sidebar - Sticky on desktop */}
          <aside className="lg:sticky lg:top-32 h-fit reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl space-y-8 shadow-xl shadow-purple-500/5 hover-glow transition-all duration-500">
              {/* Profile Header */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border-2 border-white/50 dark:border-white/10">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Siddharth Sadhu" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 dark:text-white">Siddharth Sadhu</h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest font-bold">Hybrid Engineer</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-y border-slate-200/50 dark:border-white/5 py-6">
                {EXPERIENCE_DATA[0].stats.map((s, i) => (
                  <div key={s.label} className="text-center reveal-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 block">{s.label}</span>
                    <span className="text-2xl font-light gradient-text">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-slate-900/20 dark:shadow-white/10 flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span>Download Resume</span>
                </button>
                <div className="flex space-x-3">
                  <a href="#" className="flex-1 py-3 bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex-1 py-3 bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-slate-200/50 dark:border-white/5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Available for Opportunities</span>
              </div>
            </div>
          </aside>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-purple-500/10 rounded-full"></div>
            <div className="absolute left-0 top-0 w-[2px] h-32 bg-gradient-to-b from-purple-400 to-transparent rounded-full" style={{ animation: 'scan-line 8s ease-in-out infinite' }}></div>

            <div className="space-y-20 pl-10">
              {EXPERIENCE_DATA.map((exp, index) => (
                <div
                  key={index}
                  className="relative reveal-up"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-[-38px] top-2 z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(167,139,250,0.6)]"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Connection Line */}
                  <div className="absolute left-[-22px] top-4 w-6 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>

                  {/* Experience Card */}
                  <div className="group p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl transition-all duration-500 hover:border-purple-300/50 dark:hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(167,139,250,0.15)] hover-glow">
                    {/* Role Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-light text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500">
                          {exp.role} <span className="text-slate-300 dark:text-slate-700 mx-2">@</span>
                          <span className="gradient-text">{exp.company}</span>
                        </h3>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center space-x-2">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{exp.location}</span>
                          </div>
                          <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                          <div className="flex items-center space-x-2">
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{exp.dates}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Based on View Mode */}
                    {isRecruiterView ? (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        {/* Impact Metrics */}
                        <div className="space-y-4 mb-8">
                          {exp.impactMetrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-white/[0.02] rounded-xl border border-slate-100 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/20 transition-all duration-300 group/metric"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.5)] group-hover/metric:shadow-[0_0_12px_rgba(167,139,250,0.8)] transition-all duration-300"></div>
                              </div>
                              <p className="text-lg font-light leading-relaxed text-slate-700 dark:text-slate-300">{metric}</p>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-white/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:border-purple-300 dark:hover:border-purple-500/30 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                              style={{ animationDelay: `${i * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                        {/* Context & Decisions */}
                        <div className="space-y-6">
                          {/* Context Card */}
                          <div className="p-6 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-emerald-300/50 dark:hover:border-emerald-500/30 transition-all duration-300 hover-glow">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                              <h4 className="text-slate-800 dark:text-white text-xs font-bold uppercase tracking-[0.25em]">Context</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{exp.narrative.context}</p>
                          </div>

                          {/* Decisions Card */}
                          <div className="p-6 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-blue-300/50 dark:hover:border-blue-500/30 transition-all duration-300 hover-glow">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                              <h4 className="text-slate-800 dark:text-white text-xs font-bold uppercase tracking-[0.25em]">Key Decisions</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{exp.narrative.decisions}</p>
                          </div>
                        </div>

                        {/* Strategic Learning - Highlighted */}
                        <div className="p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/5 backdrop-blur-xl border border-purple-300/30 dark:border-purple-500/20 rounded-2xl hover:border-purple-400/50 dark:hover:border-purple-400/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(167,139,250,0.15)] flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.6)]"></div>
                            <h4 className="text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-[0.25em]">Strategic Learning</h4>
                          </div>
                          <p className="text-purple-900 dark:text-purple-100 font-medium italic leading-relaxed text-xl">"{exp.narrative.learning}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center mt-24 opacity-30">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-purple-500/50 rounded-full"></div>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
