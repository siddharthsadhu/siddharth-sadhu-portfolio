import React, { useEffect, useState } from 'react';

export const SystemStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [time, setTime] = useState('');
  const [network, setNetwork] = useState('');
  const [uptime, setUptime] = useState('00:00');

  useEffect(() => {
    // Connection status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Network detection
    const detectNetwork = () => {
      const conn = (navigator as any).connection;
      if (!conn) {
        setNetwork(navigator.onLine ? 'ONLINE' : 'OFFLINE');
        return;
      }

      const type = conn.type; // 'wifi', 'cellular', 'ethernet', 'bluetooth', etc.
      const effective = conn.effectiveType; // '4g', '3g', '2g', 'slow-2g'
      const downlink = conn.downlink; // Mbps estimate

      // Priority: actual type > effective type > downlink speed
      if (type === 'wifi' || type === 'ethernet' || type === 'bluetooth') {
        setNetwork(type.toUpperCase());
      } else if (type === 'cellular') {
        // For cellular, show the speed class
        setNetwork(effective ? effective.toUpperCase() : 'CELLULAR');
      } else if (effective) {
        // No type info, use effective type
        // If effectiveType is '4g' and downlink is high, it's likely WiFi
        if (effective === '4g' && downlink && downlink >= 10) {
          setNetwork('WIFI');
        } else {
          setNetwork(effective.toUpperCase());
        }
      } else {
        setNetwork(navigator.onLine ? 'ONLINE' : 'OFFLINE');
      }
    };

    detectNetwork();

    // Re-detect periodically in case connection changes
    const conn = (navigator as any).connection;
    if (conn) {
      conn.addEventListener('change', detectNetwork);
    }
    const interval = setInterval(detectNetwork, 10000);

    // Clock + uptime
    const startTime = Date.now();
    const tick = () => {
      const now = new Date();
      const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
      const h = String(ist.getUTCHours()).padStart(2, '0');
      const m = String(ist.getUTCMinutes()).padStart(2, '0');
      const s = String(ist.getUTCSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);

      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const uh = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const um = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const us = String(elapsed % 60).padStart(2, '0');
      setUptime(`${uh}:${um}:${us}`);
    };

    tick();
    const clockInterval = setInterval(tick, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (conn) conn.removeEventListener('change', detectNetwork);
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="absolute top-4 right-0 md:-right-12 flex items-center space-x-3 glass-card px-5 py-3.5 rounded-2xl shadow-2xl transition-all hover:translate-x-1 group cursor-default z-30">
      <div className="relative">
        <div className={`w-2.5 h-2.5 rounded-full animate-ping absolute inset-0 opacity-60 ${isOnline ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
        <div className={`w-2.5 h-2.5 rounded-full relative border-[1.5px] border-white dark:border-slate-900 ${isOnline ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]'}`}></div>
      </div>
      <div className="flex flex-col">
        <span className="text-[7px] text-slate-500 dark:text-slate-400 font-bold tracking-[0.35em] uppercase leading-none mb-1">
          {network ? `Network: ${network}` : 'Infrastructure'}
        </span>
        <span className="text-[10px] text-slate-900 dark:text-white font-bold tracking-[0.12em] uppercase leading-none">
          {isOnline ? 'System Online' : 'Offline'}
        </span>
      </div>
      <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>
      <div className="flex flex-col items-end">
        <span className="text-[8px] font-mono text-slate-900 dark:text-white/80 tabular-nums tracking-wider">{time}</span>
        <span className="text-[6px] font-mono text-slate-400 dark:text-slate-500 tracking-wider mt-0.5">UP {uptime}</span>
      </div>
    </div>
  );
};
