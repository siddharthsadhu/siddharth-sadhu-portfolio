import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types';

interface ProjectDeepDiveProps {
  project: Project;
  onBack: () => void;
}

type TabType = 'overview' | 'architecture' | 'decisions' | 'demo';

interface ModalData {
  src: string;
  title: string;
  subtitle: string;
  isBlueprint?: boolean;
}

export const ProjectDeepDive: React.FC<ProjectDeepDiveProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [copiedClone, setCopiedClone] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isMagnifierActive, setIsMagnifierActive] = useState<boolean>(true);

  const blueprintImgRef = useRef<HTMLImageElement>(null);
  const loupeRef = useRef<HTMLDivElement>(null);
  const cloneCommand = project.githubUrl ? `git clone ${project.githubUrl}.git` : 'git clone https://github.com/siddharthsadhu.git';

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  // High-impact zoom step transitions: 50% <-> 100% <-> 200% <-> 300% <-> 400%
  const ZOOM_PRESETS = [50, 100, 200, 300, 400];

  const handleZoomIn = () => {
    setZoomLevel((curr) => {
      const next = ZOOM_PRESETS.find((z) => z > curr);
      return next !== undefined ? next : 400;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((curr) => {
      const reversed = [...ZOOM_PRESETS].reverse();
      const prev = reversed.find((z) => z < curr);
      return prev !== undefined ? prev : 50;
    });
  };

  // Handle keyboard events (Escape to close, + / - to zoom, M to toggle loupe) and lock body scroll safely
  useEffect(() => {
    if (!modalData) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalData(null);
        setZoomLevel(100);
        if (loupeRef.current) loupeRef.current.style.display = 'none';
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0' || e.key.toLowerCase() === 'r') {
        setZoomLevel(100);
      } else if (e.key.toLowerCase() === 'm') {
        setIsMagnifierActive((prev) => {
          const next = !prev;
          if (!next && loupeRef.current) loupeRef.current.style.display = 'none';
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalData]);

  const handleOpenBlueprintModal = () => {
    const blueprintSrc = project.architectureImage || project.image || '';
    if (!blueprintSrc) return;
    setZoomLevel(100);
    setModalData({
      src: blueprintSrc,
      title: `${project.title} — System Architecture & Execution Blueprint`,
      subtitle: 'Technical Architecture • Production Architecture Flow',
      isBlueprint: true
    });
  };

  // Zero-re-render GPU-accelerated loupe positioning
  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMagnifierActive || zoomLevel !== 100 || !blueprintImgRef.current || !loupeRef.current) {
      if (loupeRef.current) loupeRef.current.style.display = 'none';
      return;
    }

    const rect = blueprintImgRef.current.getBoundingClientRect();
    const borderBuffer = 50; // generous margin so border text/edges never get clipped

    if (
      e.clientX < rect.left - borderBuffer ||
      e.clientX > rect.right + borderBuffer ||
      e.clientY < rect.top - borderBuffer ||
      e.clientY > rect.bottom + borderBuffer
    ) {
      loupeRef.current.style.display = 'none';
      return;
    }

    const LENS_RADIUS = 112; // 224px diameter loupe
    const ZOOM_FACTOR = 2.0; // 2x optical magnification scope

    const clampedX = Math.max(rect.left, Math.min(rect.right, e.clientX));
    const clampedY = Math.max(rect.top, Math.min(rect.bottom, e.clientY));

    const offsetX = clampedX - rect.left;
    const offsetY = clampedY - rect.top;

    const bgWidth = rect.width * ZOOM_FACTOR;
    const bgHeight = rect.height * ZOOM_FACTOR;

    const bgPosX = LENS_RADIUS - offsetX * ZOOM_FACTOR;
    const bgPosY = LENS_RADIUS - offsetY * ZOOM_FACTOR;

    loupeRef.current.style.display = 'block';
    loupeRef.current.style.transform = `translate3d(${e.clientX - LENS_RADIUS}px, ${e.clientY - LENS_RADIUS}px, 0)`;
    loupeRef.current.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    loupeRef.current.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
  };

  const renderFullscreenStudio = () => {
    if (!modalData) return null;

    return createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="blueprint-modal-title"
        className="fixed inset-0 z-[99999] w-screen h-screen bg-slate-950 flex flex-col overflow-hidden animate-in fade-in duration-200"
      >
        {/* Top Command Bar (Fixed & Minimalist) */}
        <header className="h-14 px-3 sm:px-6 bg-slate-900/95 border-b border-white/10 flex items-center justify-between gap-2 sm:gap-4 shrink-0 z-20">
          <div className="space-y-0.5 min-w-0 pr-2">
            <div className="flex items-center space-x-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <h3 id="blueprint-modal-title" className="text-xs sm:text-sm md:text-base font-medium text-white truncate">
                {modalData.title}
              </h3>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-purple-400 truncate">{modalData.subtitle}</p>
          </div>

          {/* Inspection Toolbar (Magnifier Scope, Zoom, Reset, Download, Close) */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {modalData.isBlueprint && (
              <>
                {/* Interactive Optical Magnifier Scope Toggle (hidden on small mobile) */}
                <button
                  onClick={() => {
                    setIsMagnifierActive((prev) => !prev);
                  }}
                  className={`hidden sm:flex px-3 py-1.5 rounded-xl text-xs font-mono border transition-all cursor-pointer items-center gap-1.5 select-none ${
                    isMagnifierActive && zoomLevel === 100
                      ? 'bg-purple-600/30 border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  title="Toggle 2x Optical Scope Glass (Key: M)"
                >
                  <span>🔍 Scope</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isMagnifierActive && zoomLevel === 100 ? 'bg-purple-400 animate-pulse' : 'bg-slate-500'}`} />
                </button>

                {/* High-Impact Zoom Segment */}
                <div className="flex items-center bg-black/60 border border-white/10 rounded-xl p-0.5 sm:p-1 text-[11px] sm:text-xs font-mono text-slate-300">
                  <button
                    onClick={handleZoomOut}
                    className="px-2 sm:px-2.5 py-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer select-none"
                    title="Zoom Out (-)"
                    aria-label="Zoom out"
                  >
                    －
                  </button>
                  <span className="px-1.5 sm:px-3 py-1 font-semibold text-purple-300 min-w-[42px] sm:min-w-[55px] text-center select-none text-[10px] sm:text-xs">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="px-2 sm:px-2.5 py-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer select-none"
                    title="Zoom In (+)"
                    aria-label="Zoom in"
                  >
                    ＋
                  </button>
                  <button
                    onClick={() => {
                      setZoomLevel(100);
                    }}
                    className={`hidden sm:inline-block px-3 py-1 ml-1 text-[11px] rounded-lg font-medium transition-all cursor-pointer select-none ${
                      zoomLevel !== 100
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30 hover:bg-purple-600/50'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/10'
                    }`}
                    title="Reset to 100% (0 / R)"
                  >
                    Reset
                  </button>
                </div>
              </>
            )}

            <a
              href={modalData.src}
              download={`${project.id}-architecture-blueprint`}
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 text-xs font-mono transition-colors flex items-center gap-1.5"
              title="Download Original Blueprint"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden md:inline">Download</span>
            </a>

            <button
              onClick={() => {
                setModalData(null);
                setZoomLevel(100);
                if (loupeRef.current) loupeRef.current.style.display = 'none';
              }}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose-500 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close fullscreen"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </header>

        {/* Center Canvas Viewport (Dynamic scaling from 50% to 400%) */}
        <main
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={() => {
            if (loupeRef.current) loupeRef.current.style.display = 'none';
          }}
          className={`flex-1 min-h-0 w-full relative flex bg-[radial-gradient(#1e1e2e_1px,transparent_1px)] [background-size:24px_24px] bg-slate-950 ${
            zoomLevel > 100
              ? 'overflow-auto cursor-grab active:cursor-grabbing p-8 md:p-14'
              : 'overflow-hidden p-4 sm:p-6 items-center justify-center'
          }`}
        >
          <div
            className="m-auto flex items-center justify-center shrink-0 transition-all duration-200 relative"
            style={{
              width: zoomLevel === 100 ? 'auto' : `${zoomLevel}%`,
              minWidth: zoomLevel > 100 ? `${(zoomLevel / 100) * 1200}px` : 'auto',
              maxWidth: zoomLevel < 100 ? `${zoomLevel}%` : 'none'
            }}
          >
            <img
              ref={blueprintImgRef}
              src={modalData.src}
              alt={modalData.title}
              style={{
                maxHeight: zoomLevel <= 100 ? `calc((100vh - 90px) * ${zoomLevel / 100})` : 'none',
                maxWidth: zoomLevel <= 100 ? `calc((100vw - 40px) * ${zoomLevel / 100})` : 'none'
              }}
              className={`w-auto h-auto object-contain rounded-2xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)] mx-auto block select-none ${
                isMagnifierActive && zoomLevel === 100 ? 'cursor-crosshair' : ''
              }`}
            />
          </div>
        </main>

        {/* Interactive Optical Loupe / Magnifier Glass Lens (2x Scope - Hardware Accelerated) */}
        {isMagnifierActive && zoomLevel === 100 && (
          <div
            ref={loupeRef}
            style={{
              display: 'none',
              top: 0,
              left: 0,
              backgroundImage: `url(${modalData.src})`,
              backgroundRepeat: 'no-repeat',
              willChange: 'transform, background-position'
            }}
            className="fixed z-[100000] w-56 h-56 rounded-full border-2 border-purple-400/90 shadow-[0_0_35px_rgba(168,85,247,0.7),0_20px_45px_rgba(0,0,0,0.9)] pointer-events-none overflow-hidden bg-slate-950"
          >
            {/* Precision Crosshairs & Optic Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-[1px] bg-purple-400" />
              <div className="h-full w-[1px] bg-purple-400 absolute" />
              <div className="w-8 h-8 rounded-full border border-purple-400 absolute" />
            </div>

            {/* Magnifier Badge */}
            <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
              <span className="px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-mono text-purple-300 font-bold border border-purple-500/40 shadow-md">
                2x OPTICAL SCOPE
              </span>
            </div>
          </div>
        )}
      </div>,
      document.body
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden animated-bg noise-overlay">
      {/* Fullscreen Studio Portal */}
      {renderFullscreenStudio()}

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:60px_60px] text-slate-900 dark:text-white" />

      {/* Floating Decorative Blurs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none floating-shape" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none floating-shape" style={{ animationDelay: '5s' }} />

      {/* Hero Section */}
      <div className="px-4 sm:px-8 md:px-24 mb-12 max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          aria-label="Back to all projects"
          className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 mb-8 group cursor-pointer"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Projects</span>
        </button>

        <div className="grid lg:grid-cols-[1.3fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-6 reveal-up">
            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-purple-300/30 dark:border-purple-500/20 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
                {project.category}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-mono tracking-wider">{project.date}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] gradient-text break-words">
              {project.title}
            </h1>

            {/* One-Liner */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300/90 font-light leading-relaxed max-w-2xl border-l-2 border-purple-500/40 pl-4 sm:pl-6">
              {project.oneLiner}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.03] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] w-full sm:w-auto text-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Repository ↗</span>
                </a>
              )}

              {/* Live Demo / Video CTA */}
              <button
                onClick={() => setActiveTab('demo')}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.03] transition-all shadow-[0_10px_30px_rgba(168,85,247,0.3)] cursor-pointer w-full sm:w-auto text-center"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Live Demo & Video ↗</span>
              </button>

              {project.presentationUrl && (
                <a
                  href={project.presentationUrl}
                  download
                  className="group flex items-center justify-center gap-2 px-5 py-3.5 border border-purple-400/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-[1.03] transition-all w-full sm:w-auto text-center"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Deck (.PPTX) ↓</span>
                </a>
              )}
            </div>

            {/* Live GitHub Clone Widget */}
            <div className="pt-2">
              <div className="p-3 sm:p-3.5 bg-slate-950/80 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center space-x-2 text-slate-400 overflow-x-auto scrollbar-none py-0.5 min-w-0 w-full">
                  <span className="text-purple-400 select-none shrink-0">$</span>
                  <span className="text-slate-200 select-all break-all">{cloneCommand}</span>
                </div>
                <button
                  onClick={handleCopyClone}
                  className="w-full sm:w-auto px-4 py-2 sm:py-1.5 rounded-lg bg-white/10 hover:bg-purple-600 text-white text-[10px] font-sans font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer text-center"
                >
                  {copiedClone ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Clean Studio Showcase Frame (Static UI Deliverable Display) */}
          <div className="reveal-up">
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Studio Window Chrome */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-black/40 border border-white/5 text-[10px] font-mono text-slate-400 flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="truncate max-w-[180px]">{project.title.split('–')[0].trim()}</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Viewport Frame (Clean, Static UI) */}
              <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden max-h-[380px]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[380px] object-contain bg-slate-950/60"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-purple-900/40 to-slate-950 flex items-center justify-center">
                    <span className="text-sm font-mono text-purple-400">Deliverable Interface</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Specs Bar */}
      <div className="border-y border-slate-200/50 dark:border-white/5 py-6 mb-12 bg-white/30 dark:bg-white/[0.01] backdrop-blur-sm">
        <div className="px-4 sm:px-8 md:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: 'Role', value: project.role, color: '#10b981' },
              { label: 'Timeline', value: project.timeline, color: '#3b82f6' },
              { label: 'Core Stack', value: project.stack.slice(0, 3).join(', '), color: '#f59e0b' },
              { label: 'Outcome', value: project.outcome, color: '#a855f7', highlight: true }
            ].map((spec, i) => (
              <div key={i} className="group reveal-up">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: spec.color }} />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em]">{spec.label}</span>
                </div>
                <span className={`text-xs md:text-sm font-light ${spec.highlight ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-slate-900 dark:text-white'}`}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive System Tabs Navigation */}
      <div className="px-4 sm:px-8 md:px-24 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 w-fit max-w-full">
          {[
            { id: 'overview', label: '01. Problem & Scope' },
            { id: 'architecture', label: '02. System Architecture & Flow' },
            { id: 'decisions', label: '03. Decisions ("Why X over Y")' },
            { id: 'demo', label: '04. Live Demo & Benchmarks' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] font-medium'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tabbed Content Body */}
      <div className="px-4 sm:px-8 md:px-24 max-w-7xl mx-auto grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16 relative z-10">
        {/* Sticky Tech Sidebar */}
        <aside className="hidden lg:block sticky top-32 h-fit space-y-6">
          {/* Tech Stack Chips */}
          <div className="p-6 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 backdrop-blur-xl rounded-2xl border border-purple-200/30 dark:border-purple-500/10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 mb-4 flex items-center space-x-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 bg-white/60 dark:bg-black/30 border border-purple-300/30 dark:border-purple-500/20 rounded-lg text-[10px] font-mono text-slate-800 dark:text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="p-6 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-white/5 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Core Highlights</h4>
            <div className="space-y-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{m.label}</span>
                  <span className="text-purple-400 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Dynamic Tab Panes */}
        <div className="min-h-[400px] space-y-8">
          {/* Mobile Tech Stack & Highlights (Visible on < lg viewports) */}
          <div className="block lg:hidden p-5 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl border border-purple-500/20 space-y-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">Technologies Used</div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-black/50 border border-white/10 rounded-lg text-[10px] font-mono text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/5">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-xs">
                  <span className="text-[9px] text-slate-400 font-mono uppercase block">{m.label}</span>
                  <span className="text-purple-300 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TAB 1: Problem & Scope */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2.5 py-1 rounded-md">TAB 01</span>
                  <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white">The Real-World Problem & Constraints</h2>
                </div>
                <p className="text-base md:text-lg font-light leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 bg-slate-900/70 border border-purple-500/20 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>PRIMARY SYSTEM CONSTRAINT</span>
                </div>
                <p className="text-slate-300 text-sm font-light leading-relaxed">{project.constraint}</p>
              </div>

              {/* Subsections */}
              {project.sections && (
                <div className="grid md:grid-cols-2 gap-5 pt-4">
                  {project.sections.flatMap((s) => s.subsections || []).map((sub, sidx) => (
                    <div
                      key={sidx}
                      className="p-6 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl"
                    >
                      <h3 className="text-base font-medium text-slate-900 dark:text-white mb-2">{sub.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">{sub.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: System Architecture & Flow */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2.5 py-1 rounded-md">TAB 02</span>
                  <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white">End-to-End System Architecture</h2>
                </div>
                <p className="text-xs font-mono text-slate-400">Interactive Pipeline & High-Resolution Execution Blueprint</p>
              </div>

              <p className="text-base font-light leading-relaxed text-slate-600 dark:text-slate-300">
                {project.architecture}
              </p>

              {/* In-Line Interactive Blueprint Studio Canvas */}
              {(project.architectureImage || project.image) && (
                <div className="rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="px-5 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-xs font-mono text-slate-300">System Execution Diagram</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleOpenBlueprintModal}
                        className="px-3 py-1 rounded-lg bg-white/10 hover:bg-purple-600 text-white text-[10px] font-mono transition-colors cursor-pointer"
                      >
                        Fullscreen + Zoom ↗
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={handleOpenBlueprintModal}
                    className="p-4 bg-[radial-gradient(#1e1e2e_1px,transparent_1px)] [background-size:20px_20px] bg-slate-950 flex items-center justify-center cursor-pointer group/blueprint relative"
                  >
                    <img
                      src={project.architectureImage || project.image}
                      alt={`${project.title} Architecture Blueprint`}
                      className="w-full h-auto max-h-[420px] object-contain rounded-xl border border-white/10 group-hover/blueprint:border-purple-500/40 transition-colors shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/blueprint:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-full bg-purple-600 text-white text-xs font-mono shadow-2xl flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Fullscreen + Zoom 🔍</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4-Step Interactive Pipeline Breakdown */}
              {project.architectureFlow && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400">
                    Step-by-Step Dataflow Stages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.architectureFlow.map((flow, fidx) => (
                      <div
                        key={fidx}
                        className="p-5 bg-slate-950/70 border border-purple-500/20 rounded-2xl relative group hover:border-purple-500/50 transition-all hover-glow"
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                            STAGE {flow.step}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{flow.tech}</span>
                        </div>
                        <h3 className="text-sm font-medium text-white mb-1.5">{flow.title}</h3>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{flow.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Engineering Decisions ("Why X over Y") */}
          {activeTab === 'decisions' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2.5 py-1 rounded-md">TAB 03</span>
                  <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white">Engineering Decision Matrix ("Why X over Y")</h2>
                </div>
                <p className="text-xs font-mono text-slate-400">Technical Trade-Offs & Rationale</p>
              </div>

              {/* Decision Comparison Cards */}
              {project.decisionMatrix && (
                <div className="space-y-5">
                  {project.decisionMatrix.map((dm, didx) => (
                    <div key={didx} className="p-6 bg-slate-950/80 border border-white/10 rounded-2xl space-y-4 hover:border-purple-500/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
                        <span className="text-sm font-medium text-white">{dm.decision}</span>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                            Chosen: {dm.choice}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-white/10 text-slate-400">
                            vs {dm.alternative}
                          </span>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-light">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-1">Architectural Rationale:</span>
                          <p className="text-slate-300 leading-relaxed">{dm.rationale}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">System Impact:</span>
                          <p className="text-slate-400 leading-relaxed">{dm.impact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* What Broke in Production */}
              <div className="p-6 glass-card rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span>Production Incident & Failure Recovery</span>
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{project.whatBroke}</p>
                {project.redesignReflections && (
                  <p className="text-xs text-slate-400 italic pt-2 border-t border-white/5">
                    Reflections: {project.redesignReflections}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: Live Demo Video & System Benchmarks */}
          {activeTab === 'demo' && (
            <div className="space-y-10 animate-in fade-in duration-300">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2.5 py-1 rounded-md">TAB 04</span>
                  <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white">Live Demo Video & System Benchmarks</h2>
                </div>
                <p className="text-xs font-mono text-slate-400">Interactive Walkthrough & Verified Performance Metrics</p>
              </div>

              {/* Dedicated Cinematic Demo Video Showcase Player */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="px-5 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300 font-medium">Demo Walkthrough — {project.title}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                    1080p 60FPS Showcase
                  </span>
                </div>

                <div className="relative aspect-video bg-slate-950 flex items-center justify-center group/video overflow-hidden">
                  {project.demoVideoUrl && isPlayingDemo ? (
                    <video
                      src={project.demoVideoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {project.image && (
                        <img
                          src={project.image}
                          alt="Demo Walkthrough Poster"
                          className="w-full h-full object-cover opacity-60 group-hover/video:opacity-75 transition-opacity duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <button
                          onClick={() => {
                            if (project.liveDemoUrl) window.open(project.liveDemoUrl, '_blank');
                            else setIsPlayingDemo(true);
                          }}
                          className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover/video:scale-110 transition-all cursor-pointer"
                        >
                          <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <div className="text-center px-4">
                          <span className="text-xs font-mono text-white/90 block">Interactive Walkthrough & Live Deliverable</span>
                          <span className="text-[10px] font-mono text-purple-300 mt-1 block">
                            {project.liveDemoUrl ? 'Click to Launch Live Prototype ↗' : 'Video Player Integration Ready'}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* System Verification & Hardened Benchmarks Matrix (Non-repeating!) */}
              {project.benchmarks && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-light text-white flex items-center space-x-2">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Hardened System Benchmarks</span>
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      Production Verified
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.benchmarks.map((bm, bidx) => (
                      <div key={bidx} className="p-5 bg-slate-950/80 border border-white/10 rounded-2xl space-y-2 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-white">{bm.metric}</span>
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                            {bm.status}
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between pt-1 text-xs">
                          <span className="text-slate-400 font-mono text-[11px]">Achieved:</span>
                          <span className="text-purple-300 font-mono font-medium">{bm.achieved}</span>
                        </div>
                        <div className="flex items-baseline justify-between text-xs border-t border-white/5 pt-1">
                          <span className="text-slate-500 font-mono text-[10px]">Target Requirement:</span>
                          <span className="text-slate-400 font-mono text-[10px]">{bm.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Return CTA */}
              <div className="p-8 text-center space-y-4 border border-white/10 rounded-2xl bg-slate-950/60">
                <h3 className="text-xl font-light text-white">Explore Additional Engineering Case Studies</h3>
                <p className="text-sm text-slate-400 max-w-xl mx-auto font-light">
                  Every subsystem was tested under load, hardened against edge cases, and evaluated against strict latency thresholds.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onBack}
                    className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold uppercase tracking-[0.25em] rounded-full transition-all shadow-[0_10px_30px_rgba(168,85,247,0.3)] cursor-pointer"
                  >
                    ← Return to Projects
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
