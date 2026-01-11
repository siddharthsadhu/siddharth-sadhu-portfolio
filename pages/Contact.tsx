
import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';

const SocialLink = ({ icon, label, handle, href }: { icon: React.ReactNode, label: string, handle: string, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center p-5 space-x-4 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:border-purple-300/50 dark:hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(167,139,250,0.1)] transition-all duration-500 hover-glow"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/10 dark:to-white/5 border border-slate-200/50 dark:border-white/10 group-hover:border-purple-400/30 group-hover:from-purple-100 group-hover:to-purple-50 dark:group-hover:from-purple-500/20 dark:group-hover:to-purple-500/10 transition-all duration-300">
      <div className="text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <span className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">{label}</span>
      <span className="text-xs text-slate-500 dark:text-gray-500 font-light">{handle}</span>
    </div>
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100/50 dark:bg-white/5 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-300">
      <svg className="w-4 h-4 text-slate-400 dark:text-white/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@siddharth.dev";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-24 px-8 md:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white"></div>

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-16 w-64 h-64 bg-violet-500/3 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '10s' }}></div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-1/3 w-[1px] h-96 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[1px] h-64 bg-gradient-to-t from-indigo-500/15 via-indigo-500/5 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute top-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full particle particle-delay-1"></div>
      <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full particle particle-delay-2"></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-violet-400 rounded-full particle particle-delay-3"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[calc(100vh-12rem)]">
        <div className="max-w-4xl reveal-up">
          <SectionHeader
            title="Contact"
            subtitle="Direct entry points for professional collaboration. No barriers, just high-signal interaction."
          />
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 mt-12 items-start flex-grow">
          {/* Left Side: Email & Primary CTA */}
          <div className="space-y-12">
            {/* Email Section */}
            <div className="space-y-8 reveal-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
                <span className="text-slate-500 dark:text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                  Direct Communication
                </span>
              </div>

              <div className="relative group">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight gradient-text leading-tight break-all">
                  {email}
                </h3>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href={`mailto:${email}`}
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/25 flex items-center space-x-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="relative z-10">Draft Message</span>
                  </a>

                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-full border transition-all duration-300 ${copied
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                        : 'bg-white/50 dark:bg-white/5 border-slate-200/50 dark:border-white/10 text-slate-500 hover:border-purple-300 dark:hover:border-purple-500/30 hover:text-purple-600 dark:hover:text-purple-400'
                      }`}
                  >
                    {copied ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {copied ? 'Copied!' : 'Copy Address'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* CV Download Card */}
            <div className="reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="group p-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl hover:border-purple-300/50 dark:hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(167,139,250,0.1)] transition-all duration-500 hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/10 dark:to-white/5 border border-slate-200/50 dark:border-white/10">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">Technical Curriculum Vitae</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-500 font-light mt-1">Updated Q4 2024 • PDF • 1.2MB</p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-transform shadow-lg">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="reveal-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/5 backdrop-blur-xl border border-emerald-300/30 dark:border-emerald-500/20 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Currently Available</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Open to full-time opportunities & consulting projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Network & Code Hub */}
          <div className="space-y-10 lg:pl-8">
            {/* Professional Network */}
            <div className="space-y-6 reveal-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <span className="text-slate-500 dark:text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Professional Network</span>
              </div>
              <div className="space-y-4">
                <SocialLink
                  label="LinkedIn"
                  handle="/in/siddharthsadhu"
                  href="#"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                />
                <SocialLink
                  label="Twitter / X"
                  handle="@sid_sadhu"
                  href="#"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                />
              </div>
            </div>

            {/* Open Source */}
            <div className="space-y-6 reveal-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.5)]"></div>
                <span className="text-slate-500 dark:text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Open Source</span>
              </div>
              <div className="space-y-4">
                <SocialLink
                  label="GitHub"
                  handle="@siddharth-sadhu"
                  href="#"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" /></svg>}
                />
                <SocialLink
                  label="StackOverflow"
                  handle="siddharth-s"
                  href="#"
                  icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.437-2.092-10.48-2.189-.437 2.092zm1.504-4.404l9.223 5.198 1.071-1.9-9.224-5.198-1.07 1.9zm3.289-3.722l6.544 8.312 1.708-1.347-6.544-8.312-1.708 1.347zm7.562-2.15l-3.974 9.808 1.983.804 3.974-9.808-1.983-.804z" /></svg>}
                />
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="reveal-up" style={{ animationDelay: '0.35s' }}>
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/5 backdrop-blur-xl border border-purple-300/30 dark:border-purple-500/20 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-widest">Response Time</span>
                </div>
                <p className="text-purple-900 dark:text-purple-100 font-medium text-lg">Usually within 24 hours</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">I prioritize meaningful conversations and respond thoughtfully to every inquiry.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-24 reveal-up" style={{ animationDelay: '0.4s' }}>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-12 opacity-30">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-purple-500/50 rounded-full"></div>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <span className="text-slate-500 dark:text-gray-500 text-[9px] uppercase tracking-[0.5em] font-bold">Built with intentionality &copy; 2024</span>
              <span className="text-slate-400 dark:text-gray-600 text-[8px] uppercase tracking-[0.3em] font-medium">Ref: SS-PORTFOLIO-V1-2024</span>
            </div>
            <div className="flex items-center space-x-2 opacity-50">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 dark:text-slate-500 whitespace-nowrap">DESIGNED TO SCALE. BUILT TO LAST.</span>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
