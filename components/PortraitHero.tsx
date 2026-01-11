
import React from 'react';

export const PortraitHero: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Background Aura - Multi-layered glow */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent opacity-60 animate-pulse duration-[4000ms]"></div>
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent opacity-40 animate-pulse duration-[6000ms] delay-1000"></div>

      {/* Floating Particles */}
      <div className="absolute w-2 h-2 bg-purple-400/60 rounded-full top-[10%] left-[15%] particle particle-delay-1 blur-[1px]"></div>
      <div className="absolute w-1.5 h-1.5 bg-indigo-400/50 rounded-full top-[25%] right-[20%] particle particle-delay-2 blur-[0.5px]"></div>
      <div className="absolute w-1 h-1 bg-purple-300/70 rounded-full bottom-[30%] left-[10%] particle particle-delay-3"></div>
      <div className="absolute w-2.5 h-2.5 bg-violet-400/40 rounded-full bottom-[15%] right-[15%] particle particle-delay-4 blur-[1px]"></div>
      <div className="absolute w-1.5 h-1.5 bg-purple-500/50 rounded-full top-[40%] left-[5%] particle particle-delay-5"></div>

      {/* Twinkling Stars */}
      <div className="absolute top-[5%] right-[10%] star star-delay-1">
        <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L19 9L14.14 12.97L15.64 19L12 15.77L8.36 19L9.86 12.97L5 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[8%] star star-delay-3">
        <svg className="w-3 h-3 text-purple-400/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L19 9L14.14 12.97L15.64 19L12 15.77L8.36 19L9.86 12.97L5 9L10.91 8.26L12 2Z" />
        </svg>
      </div>

      {/* Animated Orbiting Rings */}
      <div className="absolute w-[115%] h-[115%] border border-purple-500/10 rounded-full pointer-events-none" style={{ animation: 'orbit-slow 60s linear infinite' }}></div>
      <div className="absolute w-[105%] h-[105%] border-t border-r border-purple-400/20 rounded-full pointer-events-none" style={{ animation: 'orbit-slow 40s linear infinite' }}></div>
      <div className="absolute w-[95%] h-[95%] border-b border-l border-indigo-400/15 rounded-full pointer-events-none" style={{ animation: 'orbit-reverse 35s linear infinite' }}></div>
      <div className="absolute w-[85%] h-[85%] border border-dashed border-purple-500/10 rounded-full pointer-events-none" style={{ animation: 'orbit-slow 50s linear infinite' }}></div>

      {/* Scanning Laser Line */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-20 opacity-60">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" style={{ animation: 'scan-line 4s ease-in-out infinite' }}></div>
      </div>

      {/* Main Portrait Frame with Glow */}
      <div
        className="relative z-10 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full p-[3px] bg-gradient-to-br from-purple-500/30 via-slate-600/20 to-indigo-500/30 dark:from-purple-400/20 dark:via-white/5 dark:to-indigo-400/20 group transition-all duration-1000 hover:scale-[1.02]"
        style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
      >
        {/* Inner Portrait Circle */}
        <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]">
          {/* Subtle color overlay for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/15 via-transparent to-indigo-900/10 z-10 mix-blend-overlay pointer-events-none"></div>

          {/* Portrait Image */}
          <img
            src="/images/portrait.jpg"
            alt="Siddharth Sadhu Professional Portrait"
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[4s] ease-out cursor-crosshair"
          />

          {/* Inner ring glow */}
          <div className="absolute inset-0 z-20 pointer-events-none ring-inset ring-2 ring-purple-500/10 rounded-full"></div>

          {/* Hover spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          {/* Top highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
        </div>

        {/* Outer decorative rings */}
        <div className="absolute inset-[-12px] rounded-full border border-purple-500/10 pointer-events-none"></div>
        <div className="absolute inset-[-20px] rounded-full border border-dashed border-slate-400/5 dark:border-white/5 pointer-events-none" style={{ animation: 'orbit-slow 80s linear infinite' }}></div>

        {/* Corner accent markers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-5 bg-gradient-to-b from-purple-400/60 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-5 bg-gradient-to-t from-purple-400/60 to-transparent rounded-full"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[3px] bg-gradient-to-r from-purple-400/60 to-transparent rounded-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-[3px] bg-gradient-to-l from-purple-400/60 to-transparent rounded-full"></div>
      </div>

      {/* System Status Badge - Enhanced */}
      <div className="absolute top-4 right-0 md:-right-16 flex items-center space-x-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-purple-500/20 px-6 py-4 rounded-3xl shadow-2xl transition-all hover:translate-x-2 hover:shadow-purple-500/10 group cursor-default z-30 hover-glow">
        <div className="relative">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full relative border-2 border-white dark:border-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] text-slate-400 dark:text-slate-500 font-bold tracking-[0.4em] uppercase leading-none mb-1.5">Infrastructure</span>
          <span className="text-[11px] text-slate-900 dark:text-white font-bold tracking-[0.15em] uppercase leading-none">System Online</span>
        </div>
      </div>

      {/* Telemetry Badge - Enhanced */}
      <div className="absolute bottom-16 left-0 md:-left-16 hidden md:flex items-center space-x-5 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-slate-200 dark:border-purple-500/10 opacity-70 hover:opacity-100 transition-all duration-700 group cursor-default z-30 hover-glow">
        <div className="text-right">
          <span className="text-[8px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.4em] block mb-1">Compute Latency</span>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-[13px] text-slate-900 dark:text-white font-mono tracking-tighter tabular-nums">0.002505</span>
            <span className="text-[9px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest">ms</span>
          </div>
        </div>
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>
        <div className="flex flex-col space-y-1.5">
          <div className="w-10 h-1 bg-purple-500/20 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{ animation: 'gradient-shift 2s ease-in-out infinite' }}></div>
          </div>
          <div className="w-8 h-1 bg-slate-300 dark:bg-white/10 rounded-full"></div>
          <div className="w-12 h-1 bg-slate-300 dark:bg-white/10 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Coordinate overlay */}
      <div className="absolute bottom-4 right-0 opacity-20 font-mono text-[7px] tracking-[0.5em] text-slate-900 dark:text-white pointer-events-none">
        X: 42.091 // Y: 18.2505
      </div>
    </div>
  );
};
