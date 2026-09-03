import React, { useState, useMemo } from 'react';
import { SKILL_DOMAINS, SkillDomain, SkillItem } from '../data';
import { RecruiterRole } from '../types';

interface SkillsMatrixProps {
  onProjectClick?: (projectId: string) => void;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ onProjectClick }) => {
  const [selectedRole, setSelectedRole] = useState<RecruiterRole>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [copiedStack, setCopiedStack] = useState(false);

  const rolePresets: { id: RecruiterRole; label: string; icon: string }[] = [
    { id: 'all', label: 'All Capabilities', icon: '✨' },
    { id: 'ai_ml', label: 'AI / ML Engineer', icon: '🧠' },
    { id: 'fullstack', label: 'Full-Stack Developer', icon: '⚡' },
    { id: 'backend', label: 'Backend & Data', icon: '🛠️' },
    { id: 'systems', label: 'Systems & Embedded', icon: '⚙️' },
  ];

  // Filter skills based on selected recruiter role and search input
  const filteredDomains = useMemo(() => {
    return SKILL_DOMAINS.map((domain) => {
      const matchingSkills = domain.skills.filter((skill) => {
        const matchesRole = selectedRole === 'all' || skill.roles.includes(selectedRole as any);
        const matchesSearch =
          searchQuery.trim() === '' ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.project && skill.project.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesRole && matchesSearch;
      });

      return {
        ...domain,
        skills: matchingSkills,
      };
    }).filter((domain) => domain.skills.length > 0);
  }, [selectedRole, searchQuery]);

  const totalVisibleSkills = useMemo(() => {
    return filteredDomains.reduce((acc, d) => acc + d.skills.length, 0);
  }, [filteredDomains]);

  const handleCopyTechStack = () => {
    const summary = `Siddharth Sadhu — Technical Capabilities Summary:
• Languages: Python, TypeScript, JavaScript (ES6+), Java, Embedded C++, SQL
• AI & LLMs: Sarvam AI (Mayura v1), FastAPI, Prompt Chains, RAG Grounding, SSE Token Streaming
• Full-Stack: React.js, Next.js, Node.js/Express, Tailwind CSS, Modern SPAs
• Databases: PostgreSQL, MongoDB, MySQL, Relational & Document Data Architecture
• Systems & IoT: Microcontroller Firmware (ESP32/Arduino), HC-SR04 Sensor Arrays, Git/CI-CD
• Verification: Govt of Gujarat SSIP Grant • CREATO 3rd Place • 9.73 CGPA (2nd Rank IT Dept)`;

    navigator.clipboard.writeText(summary);
    setCopiedStack(true);
    setTimeout(() => setCopiedStack(false), 2200);
  };

  return (
    <section className="relative mt-16 pt-12 border-t border-slate-200/50 dark:border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Interactive Competency Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight text-slate-900 dark:text-white tracking-tight">
            Production <span className="gradient-text font-normal">Skills Matrix</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl font-light">
            Every capability backed by production-tested code, deployed architectures, and verified research projects.
          </p>
        </div>

        {/* Quick ATS / Recruiter Copy Button */}
        <button
          onClick={handleCopyTechStack}
          className="self-start md:self-auto px-4 py-2.5 rounded-xl text-xs font-mono border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          title="Copy structured tech summary for recruiter notes"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          <span>{copiedStack ? 'Copied to Clipboard! ✓' : 'Copy Tech Summary'}</span>
        </button>
      </div>

      {/* Recruiter Lens Selector & Live Search Controls */}
      <div className="p-4 md:p-6 rounded-3xl bg-slate-900/60 dark:bg-black/40 border border-slate-200/40 dark:border-white/10 backdrop-blur-xl mb-10 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Role Lenses */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
              Recruiter Lens:
            </span>
            {rolePresets.map((r) => {
              const active = selectedRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-sans transition-all cursor-pointer flex items-center gap-2 select-none ${
                    active
                      ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] font-medium scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span>{r.icon}</span>
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill, project, tool..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400/60 transition-colors font-mono"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Live Filter Diagnostic Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Showing <strong className="text-purple-300">{totalVisibleSkills}</strong> production competencies
            </span>
          </div>
          <span className="hidden sm:inline text-[10px] text-slate-500">
            Hover cards for real-world deployment details
          </span>
        </div>
      </div>

      {/* Domain Clusters Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredDomains.map((domain) => (
          <div
            key={domain.id}
            className={`rounded-3xl border ${domain.borderColor} bg-gradient-to-br ${domain.gradient} p-6 md:p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-500/40 relative overflow-hidden group`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center space-x-2.5">
                  <span className="text-2xl">{domain.icon}</span>
                  <h3 className="text-xl md:text-2xl font-light text-slate-900 dark:text-white tracking-tight truncate">
                    {domain.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 font-light truncate">
                  {domain.subtitle}
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${domain.badgeColor} shrink-0`}>
                {domain.skills.length} Skills
              </span>
            </div>

            {/* Skill Cards List */}
            <div className="space-y-3.5">
              {domain.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 relative ${
                      isHovered
                        ? 'bg-black/60 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                        : 'bg-black/30 dark:bg-slate-950/40 border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Top Row: Name, Proficiency Meter, Badge */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className="text-sm">{skill.icon || '🔹'}</span>
                        <h4 className="text-xs md:text-sm font-medium text-slate-900 dark:text-white tracking-wide truncate">
                          {skill.name}
                        </h4>
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        {skill.project && (
                          <span
                            onClick={() => {
                              if (skill.projectId && onProjectClick) {
                                onProjectClick(skill.projectId);
                              }
                            }}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-colors ${
                              skill.projectId
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/40 cursor-pointer'
                                : 'bg-white/5 text-slate-400 border border-white/10'
                            }`}
                            title={skill.projectId ? `View ${skill.project} case study` : undefined}
                          >
                            {skill.project}
                          </span>
                        )}
                        <span className="text-[11px] font-mono font-semibold text-purple-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Live Progress Indicator Bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    {/* Context & Provenance Summary */}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {skill.context}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {filteredDomains.length === 0 && (
        <div className="text-center py-16 rounded-3xl border border-dashed border-white/10 bg-black/20">
          <p className="text-base text-slate-400 mb-2">No competencies match "{searchQuery}"</p>
          <button
            onClick={() => {
              setSelectedRole('all');
              setSearchQuery('');
            }}
            className="px-4 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-mono"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
