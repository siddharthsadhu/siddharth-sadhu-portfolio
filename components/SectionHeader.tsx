import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-14 pt-14">
      {/* Section indicator */}
      <div className="flex items-center space-x-3 mb-5">
        <div className="w-10 h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.3)]"></div>
        <span className="text-purple-500 dark:text-purple-400 text-[9px] font-bold uppercase tracking-[0.5em]">Section</span>
      </div>

      {/* Title with gradient — with padding-bottom to prevent descender clipping */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] mb-5 pb-3 pt-1 leading-[1.25] block gradient-text">{title}</h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400/80 text-base md:text-lg max-w-2xl font-light leading-relaxed border-l-[1.5px] border-purple-500/20 pl-5">{subtitle}</p>
      )}

      {/* Decorative line */}
      <div className="flex items-center mt-8 space-x-2">
        <div className="h-[1.5px] w-24 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full"></div>
        <div className="w-1 h-1 bg-purple-500/40 rounded-full"></div>
      </div>
    </div>
  );
};
