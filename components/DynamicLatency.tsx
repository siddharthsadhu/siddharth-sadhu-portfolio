import React, { useEffect, useState } from 'react';

/* ── Dynamic Compute Latency ── */
export const DynamicLatency: React.FC = () => {
  const [latency, setLatency] = useState('0.000000');

  useEffect(() => {
    const conn = (navigator as any).connection;

    const measureLatency = async () => {
      try {
        const start = performance.now();
        await fetch('/favicon.ico', { method: 'HEAD', cache: 'no-store' });
        const end = performance.now();
        setLatency((end - start).toFixed(6));
      } catch {
        const base = conn?.rtt || 15;
        const jitter = (Math.random() - 0.5) * base * 0.3;
        setLatency((base + jitter).toFixed(6));
      }
    };

    measureLatency();
    const interval = setInterval(measureLatency, 3000);
    return () => clearInterval(interval);
  }, []);

  const pct = Math.min(100, (parseFloat(latency) / 50) * 100);

  return (
    <div className="absolute bottom-14 left-0 md:-left-14 hidden md:flex items-center space-x-4 glass-card px-5 py-3 rounded-xl opacity-80 hover:opacity-100 transition-all duration-700 group cursor-default z-30">
      <div className="text-right">
        <span className="text-[7px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.35em] block mb-1">Compute Latency</span>
        <div className="flex items-center justify-end space-x-1.5">
          <span className="text-[11px] text-slate-900 dark:text-white font-mono tracking-tighter tabular-nums transition-all duration-300">{latency}</span>
          <span className="text-[8px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest">ms</span>
        </div>
      </div>
      <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>
      <div className="flex flex-col space-y-1">
        <div className="w-8 h-[3px] bg-purple-500/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }}></div>
        </div>
        <div className="w-6 h-[3px] bg-white/[0.08] dark:bg-white/[0.06] rounded-full"></div>
        <div className="w-10 h-[3px] bg-white/[0.06] dark:bg-white/[0.05] rounded-full opacity-60"></div>
      </div>
    </div>
  );
};
