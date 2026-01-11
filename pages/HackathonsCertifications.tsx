
import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { HACKATHONS_DATA, CERTIFICATIONS_DATA } from '../data';
import { Hackathon, Certification } from '../types';

const HackathonCard: React.FC<{ hackathon: Hackathon; index: number }> = ({ hackathon, index }) => {
     const [isExpanded, setIsExpanded] = useState(false);

     const resultColors: Record<string, string> = {
          '1st Place': 'from-amber-500 to-yellow-500 text-white',
          'Winner': 'from-amber-500 to-yellow-500 text-white',
          'Winner - Software Edition': 'from-amber-500 to-yellow-500 text-white',
          '2nd Place': 'from-slate-400 to-slate-500 text-white',
          'Finalist': 'from-purple-500 to-indigo-500 text-white',
          'Finalist - Top 10': 'from-purple-500 to-indigo-500 text-white',
     };

     return (
          <div
               className="reveal-up"
               style={{ animationDelay: `${index * 0.1}s` }}
          >
               <div className="group p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl hover:border-amber-300/50 dark:hover:border-amber-500/30 hover:shadow-[0_20px_60px_rgba(245,158,11,0.1)] transition-all duration-500 hover-glow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                         <div className="flex-grow">
                              <div className="flex items-center space-x-3 mb-2">
                                   <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-gradient-to-r ${resultColors[hackathon.result] || 'from-slate-500 to-slate-600 text-white'}`}>
                                        {hackathon.result}
                                   </span>
                                   {hackathon.prize && (
                                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                                             {hackathon.prize}
                                        </span>
                                   )}
                              </div>
                              <h3 className="text-2xl font-light text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                   {hackathon.name}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                                   <span className="flex items-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{hackathon.date}</span>
                                   </span>
                                   <span className="flex items-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span>{hackathon.location}</span>
                                   </span>
                                   <span className="flex items-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{hackathon.duration}</span>
                                   </span>
                                   <span className="flex items-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Team of {hackathon.teamSize}</span>
                                        {hackathon.teamName && <span className="text-amber-600 dark:text-amber-400">({hackathon.teamName})</span>}
                                   </span>
                              </div>
                         </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-200/30 dark:border-amber-500/10 rounded-2xl mb-6">
                         <h4 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-2">{hackathon.projectName}</h4>
                         <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{hackathon.projectDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                         {hackathon.techStack.map((tech) => (
                              <span key={tech} className="px-3 py-1.5 bg-white/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                                   {tech}
                              </span>
                         ))}
                    </div>

                    {/* Expand Button */}
                    <button
                         onClick={() => setIsExpanded(!isExpanded)}
                         className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                    >
                         <span className="text-[10px] font-bold uppercase tracking-widest">{isExpanded ? 'Show Less' : 'View Details'}</span>
                         <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                         </svg>
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                         <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-white/5 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                              <div>
                                   <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Problem Solved</h5>
                                   <p className="text-slate-700 dark:text-slate-300">{hackathon.problemSolved}</p>
                              </div>
                              <div>
                                   <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Key Learnings</h5>
                                   <p className="text-slate-700 dark:text-slate-300 italic">"{hackathon.learnings}"</p>
                              </div>

                              {/* Links */}
                              <div className="flex flex-wrap gap-3">
                                   {hackathon.githubUrl && (
                                        <a href={hackathon.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                             <span>View Code</span>
                                        </a>
                                   )}
                                   {hackathon.demoUrl && (
                                        <a href={hackathon.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                             <span>Live Demo</span>
                                        </a>
                                   )}
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};

const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
     const levelColors: Record<string, string> = {
          'Beginner': 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-300/30',
          'Intermediate': 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-300/30',
          'Advanced': 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-300/30',
          'Expert': 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-300/30',
     };

     return (
          <div
               className="reveal-up"
               style={{ animationDelay: `${index * 0.1}s` }}
          >
               <div className="group p-6 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-emerald-300/50 dark:hover:border-emerald-500/30 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] transition-all duration-500 hover-glow h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                         <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-300/30 dark:border-emerald-500/20">
                              <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                         </div>
                         {cert.level && (
                              <span className={`px-2 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg border ${levelColors[cert.level]}`}>
                                   {cert.level}
                              </span>
                         )}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                         <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1">
                              {cert.name}
                         </h3>
                         <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-3">{cert.platform}</p>
                         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{cert.description}</p>

                         {/* Skills */}
                         <div className="flex flex-wrap gap-1.5 mb-4">
                              {cert.skills.slice(0, 4).map((skill) => (
                                   <span key={skill} className="px-2 py-1 bg-slate-100/50 dark:bg-white/5 rounded-md text-[9px] font-medium text-slate-600 dark:text-slate-400">
                                        {skill}
                                   </span>
                              ))}
                              {cert.skills.length > 4 && (
                                   <span className="px-2 py-1 text-[9px] font-medium text-slate-500">+{cert.skills.length - 4} more</span>
                              )}
                         </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-200/50 dark:border-white/5">
                         <div className="flex items-center justify-between">
                              <div className="text-[10px] text-slate-500">
                                   <span>Issued: {cert.issueDate}</span>
                                   {cert.expiryDate && <span className="ml-2">• Expires: {cert.expiryDate}</span>}
                              </div>
                              {cert.verificationUrl && (
                                   <a
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                                   >
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Verify</span>
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                   </a>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export const HackathonsCertifications: React.FC = () => {
     const [activeTab, setActiveTab] = useState<'hackathons' | 'certifications'>('hackathons');

     return (
          <div className="min-h-screen py-24 px-8 md:px-24 relative overflow-hidden animated-bg noise-overlay">
               {/* Background Elements */}
               <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

               {/* Floating Decorative Elements */}
               <div className="absolute top-32 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
               <div className="absolute bottom-40 right-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>

               {/* Accent Lines */}
               <div className="absolute top-0 left-1/4 w-[1px] h-96 bg-gradient-to-b from-amber-500/20 via-amber-500/5 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-0 right-1/3 w-[1px] h-64 bg-gradient-to-t from-emerald-500/15 via-emerald-500/5 to-transparent pointer-events-none"></div>

               <div className="max-w-6xl mx-auto relative z-10">
                    <div className="reveal-up">
                         <SectionHeader
                              title="Hackathons & Certifications"
                              subtitle="Competitive achievements and validated expertise that demonstrate continuous growth."
                         />
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex items-center justify-center mt-8 mb-12 reveal-up" style={{ animationDelay: '0.1s' }}>
                         <div className="flex items-center p-1.5 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-white/10 shadow-lg">
                              <button
                                   onClick={() => setActiveTab('hackathons')}
                                   className={`flex items-center space-x-2 px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === 'hackathons' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                              >
                                   <span>🏆</span>
                                   <span>Hackathons ({HACKATHONS_DATA.length})</span>
                              </button>
                              <button
                                   onClick={() => setActiveTab('certifications')}
                                   className={`flex items-center space-x-2 px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === 'certifications' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                              >
                                   <span>📜</span>
                                   <span>Certifications ({CERTIFICATIONS_DATA.length})</span>
                              </button>
                         </div>
                    </div>

                    {/* Hackathons Section */}
                    {activeTab === 'hackathons' && (
                         <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                              {/* Stats */}
                              <div className="flex flex-wrap gap-4 mb-8">
                                   <div className="px-5 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-300/30 dark:border-amber-500/20 rounded-xl">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Total Participated</span>
                                        <span className="text-2xl font-light gradient-text ml-3">{HACKATHONS_DATA.length}</span>
                                   </div>
                                   <div className="px-5 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-300/30 dark:border-amber-500/20 rounded-xl">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Wins</span>
                                        <span className="text-2xl font-light gradient-text ml-3">{HACKATHONS_DATA.filter(h => h.result.includes('1st') || h.result.includes('Winner')).length}</span>
                                   </div>
                              </div>

                              {/* Hackathon Cards */}
                              {HACKATHONS_DATA.map((hackathon, index) => (
                                   <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
                              ))}
                         </div>
                    )}

                    {/* Certifications Section */}
                    {activeTab === 'certifications' && (
                         <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                              {/* Stats */}
                              <div className="flex flex-wrap gap-4 mb-8">
                                   <div className="px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-300/30 dark:border-emerald-500/20 rounded-xl">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Total Earned</span>
                                        <span className="text-2xl font-light gradient-text ml-3">{CERTIFICATIONS_DATA.length}</span>
                                   </div>
                                   <div className="px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-300/30 dark:border-emerald-500/20 rounded-xl">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Active</span>
                                        <span className="text-2xl font-light gradient-text ml-3">{CERTIFICATIONS_DATA.filter(c => !c.expiryDate || new Date(c.expiryDate) > new Date()).length}</span>
                                   </div>
                              </div>

                              {/* Certification Cards Grid */}
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                   {CERTIFICATIONS_DATA.map((cert, index) => (
                                        <CertificationCard key={cert.id} cert={cert} index={index} />
                                   ))}
                              </div>
                         </div>
                    )}

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
