
import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { JOURNEY_TIMELINE_DATA } from '../data';
import { JourneyYear } from '../types';

interface JourneyProps {
  onNavigateToHackathons?: () => void;
}

const MilestoneIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'achievement':
      return (
        <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-amber-500/20 border border-amber-500/30">
          <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      );
    case 'learning':
      return (
        <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30">
          <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      );
    case 'project':
      return (
        <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-emerald-500/20 border border-emerald-500/30">
          <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-500/20 border border-purple-500/30">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
      );
  }
};

const YearCard: React.FC<{ yearData: JourneyYear; index: number; onNavigateToHackathons?: () => void }> = ({ yearData, index, onNavigateToHackathons }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First one expanded by default

  return (
    <div
      className="relative reveal-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-7px] top-6 z-10">
        <div className={`w-4 h-4 rounded-full shadow-[0_0_20px_rgba(167,139,250,0.6)] ${yearData.isEducation ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}></div>
        {isExpanded && <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30"></div>}
      </div>

      {/* Connection Line */}
      <div className="absolute left-[1px] top-10 w-[1px] bg-gradient-to-b from-purple-500/30 to-transparent" style={{ height: isExpanded ? '100%' : '60px' }}></div>

      {/* Year Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left pl-10 group"
      >
        <div className="flex items-center justify-between p-6 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-purple-300/50 dark:hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(167,139,250,0.1)] transition-all duration-500 hover-glow">
          <div className="flex items-center space-x-6">
            <span className={`text-3xl md:text-4xl font-extralight tracking-tight ${isExpanded ? 'gradient-text' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white'} transition-colors`}>
              {yearData.period || yearData.year}
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                {yearData.title}
              </h3>
              {yearData.subtitle && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{yearData.subtitle}</p>
              )}
            </div>
          </div>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 transition-all duration-300 ${isExpanded ? 'rotate-180 bg-purple-100 dark:bg-purple-500/20' : ''}`}>
            <svg className={`w-4 h-4 ${isExpanded ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="pl-10 mt-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          {/* Milestones */}
          <div className="space-y-3">
            {yearData.milestones.map((milestone, i) => (
              <div
                key={i}
                className="p-4 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-xl hover:border-purple-200 dark:hover:border-purple-500/20 transition-all duration-300 group/milestone"
              >
                <div className="flex items-start space-x-4">
                  <MilestoneIcon type={milestone.type} />
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover/milestone:text-purple-700 dark:group-hover/milestone:text-purple-400 transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathon Previews */}
          {yearData.hackathonPreviews && yearData.hackathonPreviews.length > 0 && (
            <div className="pt-4 border-t border-slate-200/50 dark:border-white/5">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">🏆 Hackathons</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {yearData.hackathonPreviews.map((hackathon) => (
                  <button
                    key={hackathon.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateToHackathons?.();
                    }}
                    className="group/hack flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-300/30 dark:border-amber-500/20 rounded-xl hover:border-amber-400/50 hover:shadow-[0_5px_20px_rgba(245,158,11,0.15)] transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-300">{hackathon.name}</span>
                    {hackathon.result && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full">
                        {hackathon.result}
                      </span>
                    )}
                    <svg className="w-3 h-3 text-amber-500 opacity-0 group-hover/hack:opacity-100 group-hover/hack:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Certification Previews */}
          {yearData.certificationPreviews && yearData.certificationPreviews.length > 0 && (
            <div className="pt-4 border-t border-slate-200/50 dark:border-white/5">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">📜 Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {yearData.certificationPreviews.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateToHackathons?.();
                    }}
                    className="group/cert flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-300/30 dark:border-emerald-500/20 rounded-xl hover:border-emerald-400/50 hover:shadow-[0_5px_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{cert.name}</span>
                    <span className="text-[10px] text-emerald-500 dark:text-emerald-400">{cert.platform}</span>
                    <svg className="w-3 h-3 text-emerald-500 opacity-0 group-hover/cert:opacity-100 group-hover/cert:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Journey: React.FC<JourneyProps> = ({ onNavigateToHackathons }) => {
  return (
    <div className="min-h-screen py-24 px-8 md:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-96 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-[1px] h-64 bg-gradient-to-t from-indigo-500/15 via-indigo-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal-up">
          <SectionHeader
            title="Journey"
            subtitle="A chronological timeline of growth, learning, and the moments that shaped my path."
          />
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 mt-8 mb-12 reveal-up" style={{ animationDelay: '0.1s' }}>
          <div className="px-4 py-2 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Years in Tech</span>
            <span className="text-xl font-light gradient-text ml-3">5+</span>
          </div>
          <div className="px-4 py-2 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Hackathons</span>
            <span className="text-xl font-light gradient-text ml-3">4</span>
          </div>
          <div className="px-4 py-2 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Certifications</span>
            <span className="text-xl font-light gradient-text ml-3">5</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 mt-16">
          {/* Main Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-purple-500/10 rounded-full"></div>
          <div className="absolute left-0 top-0 w-[2px] h-32 bg-gradient-to-b from-purple-400 to-transparent rounded-full" style={{ animation: 'scan-line 8s ease-in-out infinite' }}></div>

          {/* Year Cards */}
          <div className="space-y-8">
            {JOURNEY_TIMELINE_DATA.map((yearData, index) => (
              <YearCard
                key={yearData.year}
                yearData={yearData}
                index={index}
                onNavigateToHackathons={onNavigateToHackathons}
              />
            ))}
          </div>
        </div>

        {/* View All Achievements CTA */}
        <div className="mt-16 text-center reveal-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={onNavigateToHackathons}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/25"
          >
            <span>View All Hackathons & Certifications</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
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
