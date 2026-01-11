
import React from 'react';
import { Page } from '../types';
import { PortraitHero } from '../components/PortraitHero';

interface HomeProps {
  onBegin: (nextPage: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onBegin }) => {
  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-24 overflow-hidden animated-bg noise-overlay">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:60px_60px] text-slate-900 dark:text-white"></div>

      {/* Radial depth gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,transparent_0%,rgba(10,10,11,0.3)_100%)] dark:bg-[radial-gradient(circle_at_30%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/10 rounded-full floating-shape opacity-30 pointer-events-none" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-indigo-500/10 rotate-45 floating-shape opacity-20 pointer-events-none" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 border border-purple-400/10 rounded-lg floating-shape opacity-25 pointer-events-none" style={{ animationDelay: '10s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-violet-500/5 rounded-full floating-shape opacity-15 pointer-events-none" style={{ animationDelay: '7s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-48 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[1px] h-32 bg-gradient-to-t from-indigo-500/15 via-indigo-500/5 to-transparent pointer-events-none"></div>

      {/* Left Content Column */}
      <div className="relative z-10 w-full lg:w-[50%] py-24 lg:py-0 flex flex-col justify-center space-y-12">
        <div className="space-y-8">
          {/* Tagline with reveal animation */}
          <div className="flex items-center space-x-4 reveal-up reveal-up-delay-1">
            <div className="w-14 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-500 dark:to-indigo-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
            <span className="text-purple-700 dark:text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase block leading-none">
              Architecting Scalable Products & Systems
            </span>
          </div>

          {/* Name with Gradient Text Effect */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.2rem] font-light tracking-tight leading-[0.95] group reveal-up reveal-up-delay-2">
            <span className="block transition-transform duration-700 group-hover:translate-x-3 gradient-text">Siddharth</span>
            <span className="block relative">
              <span className="gradient-text">Sadhu</span>
              <div className="absolute -bottom-4 left-0 w-24 h-[2px] bg-gradient-to-r from-purple-500 to-transparent group-hover:w-full transition-all duration-1000"></div>
            </span>
          </h1>
        </div>

        {/* Description with enhanced styling */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-xl lg:max-w-2xl border-l-2 border-gradient-to-b from-purple-500/50 to-indigo-500/20 border-purple-500/30 pl-8 py-2 reveal-up reveal-up-delay-3">
          I design and build software systems focused on <span className="text-purple-600 dark:text-purple-400 font-medium">scalability</span>, <span className="text-indigo-600 dark:text-indigo-400 font-medium">resilience</span>, and <span className="text-violet-600 dark:text-violet-400 font-medium">long-term evolution</span> — where architecture is a deliberate choice, not an afterthought.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center pt-6 space-y-8 sm:space-y-0 sm:space-x-14 reveal-up reveal-up-delay-4">
          <button
            onClick={() => onBegin(Page.Journey)}
            className="group relative inline-flex items-center space-x-6 px-10 py-5 bg-slate-900 dark:bg-white rounded-full transition-all hover:scale-[1.03] active:scale-95 overflow-hidden btn-glow shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)]"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, rgba(168,85,247,0.3), rgba(99,102,241,0.3))', filter: 'blur(15px)' }}></div>

            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white dark:text-slate-900 z-10">Begin Journey</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 dark:bg-slate-900/10 group-hover:bg-purple-500/30 transition-all duration-500 z-10">
              <svg className="w-4 h-4 text-white dark:text-slate-900 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>

          <div className="flex items-center space-x-6 text-slate-400 dark:text-slate-500 group cursor-default">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Insights Driven</span>
            <div className="flex space-x-1">
              <div className="h-[2px] w-6 bg-slate-200 dark:bg-white/10 group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-500 dark:group-hover:from-purple-500 dark:group-hover:to-indigo-400 transition-all duration-500 rounded-full"></div>
              <div className="h-[2px] w-1 bg-slate-200 dark:bg-white/10 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-all duration-500 delay-75 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Right Visual / Hero Column */}
      <div className="w-full lg:w-[45%] h-[45vh] lg:h-[90vh] flex items-center justify-center reveal-up" style={{ animationDelay: '0.3s', animationDuration: '1.5s' }}>
        <div className="relative w-full max-w-xl aspect-square">
          <PortraitHero />
        </div>
      </div>

      {/* Narrative Progress Indicator */}
      <div className="absolute bottom-12 left-8 md:left-24 hidden lg:flex items-center space-x-6 opacity-40 hover:opacity-100 transition-all cursor-default group">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-purple-600 blur-[3px] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400 absolute inset-0 m-auto"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-slate-600 dark:text-slate-500 group-hover:text-purple-600 transition-colors duration-300">
            System Identity // 01
          </span>
          <span className="text-[7px] font-medium uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">Access Granted</span>
        </div>
      </div>

      {/* Version indicator */}
      <div className="absolute bottom-8 right-8 md:right-24 hidden lg:block opacity-20 hover:opacity-60 transition-opacity">
        <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-500 dark:text-slate-600">v2.0.25</span>
      </div>
    </div>
  );
};
