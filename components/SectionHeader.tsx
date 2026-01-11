
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 pt-16">
      {/* Section indicator */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.4)]"></div>
        <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-[0.5em]">Section</span>
      </div>

      {/* Title with gradient */}
      <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 gradient-text">{title}</h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed border-l-2 border-purple-500/30 pl-6">{subtitle}</p>
      )}

      {/* Decorative line */}
      <div className="flex items-center mt-10 space-x-2">
        <div className="h-[2px] w-32 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-purple-500/50 rounded-full"></div>
      </div>
    </div>
  );
};
