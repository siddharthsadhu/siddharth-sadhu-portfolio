import React from 'react';
import { Page } from '../types';
import { PortraitHero } from '../components/PortraitHero';
import { MagneticButton } from '../components/MagneticButton';

import { ConstellationMap } from '../components/ConstellationMap';
import { DynamicLatency } from '../components/DynamicLatency';
import { SystemStatus } from '../components/SystemStatus';

interface HomeProps {
  onBegin: (nextPage: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onBegin }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden animated-bg noise-overlay" style={{ minHeight: '100vh', paddingTop: '5.5rem', paddingBottom: '2.5rem' }}>
      {/* Interactive Constellation Map */}
      <ConstellationMap />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:60px_60px] text-slate-900 dark:text-white"></div>

      {/* Radial depth gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(10,10,11,0.4)_100%)] dark:bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/8 rounded-full floating-shape opacity-30 pointer-events-none" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-indigo-500/8 rotate-45 floating-shape opacity-20 pointer-events-none" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 border border-purple-400/8 rounded-lg floating-shape opacity-25 pointer-events-none" style={{ animationDelay: '10s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-[22%] w-[1px] h-48 bg-gradient-to-b from-purple-500/15 via-purple-500/3 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-[30%] w-[1px] h-32 bg-gradient-to-t from-indigo-500/10 via-indigo-500/3 to-transparent pointer-events-none"></div>

      {/* ── Left Content Column ── */}
      <div className="relative z-10 w-full lg:w-[50%] py-12 lg:py-0 flex flex-col justify-center space-y-8 sm:space-y-10">
        <div className="space-y-7">
          {/* Tagline */}
          <div className="flex items-center space-x-4 reveal-up reveal-up-delay-1">
            <div className="w-12 h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
            <span className="text-purple-700 dark:text-purple-300 text-[10px] font-bold tracking-[0.5em] uppercase block leading-none">
              Architecting Scalable Systems
            </span>
          </div>

          {/* Name — Refined typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extralight tracking-[-0.03em] leading-[0.92] group reveal-up reveal-up-delay-2">
            <span className="block transition-transform duration-700 group-hover:translate-x-2 gradient-text">Siddharth</span>
            <span className="block relative mt-1">
              <span className="gradient-text">Sadhu</span>
              <div className="absolute -bottom-3 left-0 w-20 h-[1.5px] bg-gradient-to-r from-purple-500/60 to-transparent group-hover:w-full transition-all duration-1000 ease-out-expo"></div>
            </span>
          </h1>
        </div>

        {/* Description — Better hierarchy */}
        <p className="text-lg md:text-xl lg:text-[1.35rem] text-slate-500 dark:text-slate-400/80 font-light leading-[1.7] max-w-lg lg:max-w-xl border-l-[1.5px] border-purple-500/20 pl-7 py-2 reveal-up reveal-up-delay-3">
          I design and build software systems focused on{' '}
          <span className="text-purple-600 dark:text-purple-400 font-medium">scalability</span>,{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">resilience</span>, and{' '}
          <span className="text-violet-600 dark:text-violet-400 font-medium">long-term evolution</span>{' '}
          — where architecture is a deliberate choice, not an afterthought.
        </p>

        {/* CTA Section */}
        <div className="pt-4 reveal-up reveal-up-delay-4">
          <MagneticButton
            onClick={() => onBegin(Page.Journey)}
            strength={0.2}
            aria-label="Begin journey through portfolio"
            className="group relative inline-flex items-center space-x-5 px-9 py-4.5 bg-slate-900 dark:bg-white rounded-full transition-all hover:scale-[1.02] active:scale-95 overflow-hidden btn-glow btn-shimmer shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.25)]"
          >
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white dark:text-slate-900 z-10">Begin Journey</span>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 dark:bg-slate-900/10 group-hover:bg-purple-500/25 transition-all duration-500 z-10">
              <svg className="w-3.5 h-3.5 text-white dark:text-slate-900 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </MagneticButton>
        </div>
      </div>

      {/* ── Right Visual / Hero Column ── */}
      <div className="w-full lg:w-[45%] h-[320px] sm:h-[420px] lg:h-[85vh] flex items-center justify-center reveal-up relative my-6 lg:my-0" style={{ animationDelay: '0.3s', animationDuration: '1.5s' }}>
        <div className="relative w-full max-w-lg aspect-square">
          <PortraitHero />
        </div>
        {/* Badges — positioned outside aspect-square to prevent overflow */}
        <SystemStatus />
        <DynamicLatency />
      </div>

      {/* Top Left — Tagline (above nav, below content) */}
      <div className="absolute top-6 left-6 md:left-16 hidden lg:block opacity-40 hover:opacity-70 transition-opacity duration-500 pointer-events-none z-40">
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-500 dark:text-slate-500 whitespace-nowrap">Designed to Scale. Built to Last.</span>
      </div>

      {/* Bottom Right — Social Icons + Ref Badge */}
      <div className="absolute bottom-6 right-6 md:right-16 hidden lg:flex items-center space-x-4 z-40">
        {/* Social Icons */}
        <div className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <a href="https://www.linkedin.com/in/siddharth-sadhu-b67551274/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-purple-400">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="https://github.com/siddharthsadhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-purple-400">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" /></svg>
          </a>
          <a href="https://x.com/SidSadhu28" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-purple-400">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="mailto:siddharthsadhu28@gmail.com" aria-label="Email" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300 text-slate-500 dark:text-slate-400 hover:text-purple-400">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/[0.08] dark:bg-white/[0.08]"></div>
        {/* Ref Badge */}
        <span className="text-[7px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 opacity-50 hover:opacity-80 transition-opacity duration-500">
          REF: SS-2505-V3
        </span>
      </div>

      {/* Bottom Left — Narrative Indicator */}
      <div className="absolute bottom-6 left-6 md:left-16 hidden lg:flex items-center space-x-5 opacity-70 hover:opacity-100 transition-all duration-500 cursor-default group z-40">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500/60 blur-[3px] animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute inset-0 m-auto"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-slate-600 dark:text-slate-400 group-hover:text-purple-500 transition-colors duration-300">
            Building Resilient Systems
          </span>
          <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-500">Open to Opportunities</span>
        </div>
      </div>


    </div>
  );
};
