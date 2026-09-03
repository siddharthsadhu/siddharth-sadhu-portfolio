import React from 'react';

export const PortraitHero: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient Background Glow — Multi-layered */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)] opacity-60 animate-pulse duration-[4000ms]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)] opacity-40 animate-pulse duration-[6000ms] delay-1000"></div>

      {/* Floating Particles — Refined */}
      <div className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full top-[10%] left-[15%] particle particle-delay-1 blur-[1px]"></div>
      <div className="absolute w-1 h-1 bg-indigo-400/30 rounded-full top-[25%] right-[20%] particle particle-delay-2 blur-[0.5px]"></div>
      <div className="absolute w-0.5 h-0.5 bg-purple-300/50 rounded-full bottom-[30%] left-[10%] particle particle-delay-3"></div>
      <div className="absolute w-2 h-2 bg-violet-400/25 rounded-full bottom-[15%] right-[15%] particle particle-delay-4 blur-[1px]"></div>
      <div className="absolute w-1 h-1 bg-purple-500/35 rounded-full top-[40%] left-[5%] particle particle-delay-5"></div>

      {/* Twinkling Stars — Subtle */}
      <div className="absolute top-[5%] right-[10%] star star-delay-1">
        <svg className="w-3 h-3 text-white/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L19 9L14.14 12.97L15.64 19L12 15.77L8.36 19L9.86 12.97L5 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-[8%] star star-delay-3">
        <svg className="w-2.5 h-2.5 text-purple-400/25" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L19 9L14.14 12.97L15.64 19L12 15.77L8.36 19L9.86 12.97L5 9L10.91 8.26L12 2Z" />
        </svg>
      </div>

      {/* Animated Orbiting Rings — Refined opacity */}
      <div className="absolute w-[115%] h-[115%] border border-purple-500/[0.06] rounded-full pointer-events-none" style={{ animation: 'orbit-slow 60s linear infinite' }}></div>
      <div className="absolute w-[105%] h-[105%] border-t border-r border-purple-400/[0.1] rounded-full pointer-events-none" style={{ animation: 'orbit-slow 40s linear infinite' }}></div>
      <div className="absolute w-[95%] h-[95%] border-b border-l border-indigo-400/[0.08] rounded-full pointer-events-none" style={{ animation: 'orbit-reverse 35s linear infinite' }}></div>
      <div className="absolute w-[85%] h-[85%] border border-dashed border-purple-500/[0.06] rounded-full pointer-events-none" style={{ animation: 'orbit-slow 50s linear infinite' }}></div>

      {/* Scanning Laser Line */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-20 opacity-40">
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" style={{ animation: 'scan-line 4s ease-in-out infinite' }}></div>
      </div>

      {/* ── Main Portrait Frame ── */}
      <div
        className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full p-[2px] bg-gradient-to-br from-purple-500/25 via-slate-600/10 to-indigo-500/25 dark:from-purple-400/15 dark:via-white/[0.03] dark:to-indigo-400/15 group transition-all duration-1000 hover:scale-[1.015]"
        style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
      >
        {/* Inner Portrait Circle */}
        <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 shadow-[inset_0_0_50px_rgba(0,0,0,0.4)]">
          {/* Subtle color overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-indigo-900/8 z-10 mix-blend-overlay pointer-events-none"></div>

          {/* Portrait Image */}
          <img
            src="/images/portrait.jpg"
            alt="Siddharth Sadhu Professional Portrait"
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[5s] ease-out cursor-crosshair"
          />

          {/* Hover spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          {/* Top highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[0.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-20"></div>
        </div>

        {/* Outer decorative rings */}
        <div className="absolute inset-[-10px] rounded-full border border-purple-500/[0.06] pointer-events-none"></div>
        <div className="absolute inset-[-18px] rounded-full border border-dashed border-white/[0.03] pointer-events-none" style={{ animation: 'orbit-slow 80s linear infinite' }}></div>

        {/* Corner accent markers — Refined */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-b from-purple-400/40 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-t from-purple-400/40 to-transparent rounded-full"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gradient-to-r from-purple-400/40 to-transparent rounded-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gradient-to-l from-purple-400/40 to-transparent rounded-full"></div>
      </div>

      {/* ── Dynamic System Status (rendered in Home.tsx) ── */}

      {/* ── Dynamic Latency Badge (imported from DynamicLatency) ── */}
      {/* Rendered in Home.tsx */}


    </div>
  );
};
