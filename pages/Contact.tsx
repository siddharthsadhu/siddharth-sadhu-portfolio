import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MagneticButton } from '../components/MagneticButton';

/* ── 3D Quantum Holographic Particle Sphere Canvas ── */
const QuantumSphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Fibonacci Sphere Particles
    const numParticles = 120;
    const radius = Math.min(width, height) * 0.34 || 200;
    const particles: { x: number; y: number; z: number; size: number }[] = [];

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.acos(1 - 2 * (i + 0.5) / numParticles);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      particles.push({ x, y, z, size: Math.random() * 1.5 + 1.2 });
    }

    let angleX = 0.002;
    let angleY = 0.003;
    let targetAngleX = 0.002;
    let targetAngleY = 0.003;

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / (window.innerWidth || 1) - 0.5) * 0.015;
      const mouseY = (e.clientY / (window.innerHeight || 1) - 0.5) * 0.015;
      targetAngleX = mouseY;
      targetAngleY = mouseX;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const cosX = Math.cos(angleX + 0.002);
      const sinX = Math.sin(angleX + 0.002);
      const cosY = Math.cos(angleY + 0.003);
      const sinY = Math.sin(angleY + 0.003);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle orbital rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.07)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.max(10, radius * 1.15), Math.max(5, radius * 0.38), Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.06)';
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.max(10, radius * 1.3), Math.max(5, radius * 0.48), -Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      const projected: { x: number; y: number; z: number; size: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;

        const fov = 600;
        const scale = fov / Math.max(100, fov + z2);
        const projX = cx + x1 * scale;
        const projY = cy + y1 * scale;
        const alpha = Math.max(0.1, Math.min(1, (z2 + radius) / (2 * radius || 1)));
        const particleRadius = Math.max(0.5, p.size * scale);

        projected.push({ x: projX, y: projY, z: z2, size: particleRadius, alpha });
      }

      // Connect nearby particles
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 42 && projected[i].z > -radius * 0.4) {
            const lineAlpha = (1 - dist / 42) * 0.18 * projected[i].alpha;
            ctx.strokeStyle = `rgba(192, 132, 252, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
        if (p.z > 0) {
          ctx.fillStyle = `rgba(216, 180, 254, ${p.alpha * 0.9})`;
          ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha * 0.35})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full pointer-events-none absolute inset-0 z-0" />;
};

/* ── Live Frequency Wave Equalizer Canvas ── */
const AudioWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bars = 24;
      const barWidth = 3;
      const gap = 3;
      const totalWidth = bars * (barWidth + gap);
      const startX = (canvas.width - totalWidth) / 2;

      step += 0.05;

      for (let i = 0; i < bars; i++) {
        const h = Math.abs(Math.sin(step + i * 0.28)) * 14 + 3;
        const x = startX + i * (barWidth + gap);
        const y = (canvas.height - h) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, 'rgba(192, 132, 252, 0.9)');
        grad.addColorStop(1, 'rgba(99, 102, 241, 0.6)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, h, 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} width={160} height={26} className="pointer-events-none opacity-80" />;
};

/* ── 3D Parallax Tilt Holographic ID Card (Zero Emojis) ── */
const HolographicIDCard: React.FC<{ email: string; onCopy: () => void; copied: boolean }> = ({ email, onCopy, copied }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [currentTime, setCurrentTime] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(istTime);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / (centerY || 1)) * 10;
    const rotY = ((x - centerX) / (centerX || 1)) * 10;

    setRotate({ x: rotX, y: rotY });
    setGlare({
      x: (x / (rect.width || 1)) * 100,
      y: (y / (rect.height || 1)) * 100,
      opacity: 0.35
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(10px)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d'
        }}
        className="relative overflow-hidden rounded-3xl p-7 md:p-8 card-premium border border-white/10 hover:border-purple-500/50 shadow-2xl bg-gradient-to-br from-slate-900/90 via-black/80 to-purple-950/30 backdrop-blur-2xl group cursor-pointer"
        onClick={onCopy}
      >
        {/* Dynamic Hologram Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl z-30"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(216, 180, 254, ${glare.opacity}), transparent 60%)`
          }}
        />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

        {/* Header Badges with Live IST Clock */}
        <div className="flex items-center justify-between gap-3 mb-6 relative z-20" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center space-x-2.5">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="absolute w-4 h-4 rounded-full bg-emerald-400/40 animate-ping" />
            </div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-400">
              Live Signal • {currentTime || 'IST'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <AudioWaveCanvas />
          </div>
        </div>

        {/* Core Identity Details */}
        <div className="flex items-center space-x-5 mb-6 relative z-20" style={{ transform: 'translateZ(30px)' }}>
          <div className="relative group/avatar">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-400/40 p-0.5 bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/20">
              <img
                src="/images/portrait.jpg"
                alt="Siddharth Sadhu"
                className="w-full h-full object-cover rounded-[14px] group-hover/avatar:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-purple-400/40 flex items-center justify-center text-purple-300">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-white tracking-tight flex items-center gap-2">
              Siddharth Sadhu
              <span className="inline-block text-xs text-purple-400 font-mono">↗</span>
            </h3>
            <p className="text-xs font-mono text-purple-300/80 mt-0.5">
              AI Systems Engineer & Full-Stack Builder
            </p>
            <p className="text-[10.5px] font-mono text-slate-400 mt-0.5">
              Adani University • Vicharanam Labs (IIT Ropar)
            </p>
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/5 flex items-center justify-between relative z-20 hover:border-purple-500/30 transition-colors" style={{ transform: 'translateZ(25px)' }}>
          <div className="min-w-0 pr-3">
            <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
              Direct Frequency
            </span>
            <span className="text-sm md:text-base font-mono font-light text-purple-200 truncate block">
              {email}
            </span>
          </div>

          <div className="shrink-0 flex items-center space-x-2">
            <span className={`px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              copied
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                : 'bg-purple-600/80 text-white hover:bg-purple-600 shadow-md shadow-purple-500/20'
            }`}>
              {copied ? '✓ Copied' : 'Click to Copy'}
            </span>
          </div>
        </div>

        {/* Card Footer Holographic Watermark */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5 text-[9px] font-mono text-slate-500 relative z-20" style={{ transform: 'translateZ(15px)' }}>
          <span>AHMEDABAD, IN (IST)</span>
          <span className="text-purple-400/70">REF: SID-2026-BUILD</span>
          <span>GLOBAL REMOTE READY</span>
        </div>
      </div>
    </div>
  );
};

/* ── Interactive Social Node Card ── */
const SocialNode = ({
  icon,
  label,
  handle,
  href,
  tag,
  accentColor
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
  tag: string;
  accentColor: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center p-4 space-x-4 card-premium rounded-2xl border border-white/[0.06] hover:border-purple-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
  >
    <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${accentColor} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
      <div className="text-white">
        {icon}
      </div>
    </div>

    <div className="flex flex-col flex-grow min-w-0">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
          {label}
        </span>
        <span className="text-[8px] font-mono font-semibold px-2 py-0.2 rounded-full bg-white/[0.04] text-purple-300/80 border border-white/5">
          {tag}
        </span>
      </div>
      <span className="text-xs font-mono text-slate-400 truncate mt-0.5">{handle}</span>
    </div>

    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] group-hover:bg-purple-500/20 text-slate-400 group-hover:text-white transition-all transform group-hover:translate-x-1 duration-300">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
);

/* ── Main Contact Page ── */
export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string>('fulltime');
  const [customName, setCustomName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const email = 'siddharthsadhu28@gmail.com';

  const vibePillars = [
    {
      title: 'Zero-to-One Builders',
      subtitle: 'You love shipping real code',
      description: 'You get obsessed with turning a raw concept into a working system in a single sprint. You value craft, speed, and real execution over endless meetings.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accent: 'border-purple-500/20 hover:border-purple-500/50 bg-purple-950/20'
    },
    {
      title: 'Deep Systems & AI Thinkers',
      subtitle: 'You explore why things work',
      description: 'You get genuinely excited about LLM reasoning architectures, low-latency streaming (SSE), cognitive learning models, and foundational engineering principles.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      accent: 'border-indigo-500/20 hover:border-indigo-500/50 bg-indigo-950/20'
    },
    {
      title: 'Real-World Problem Solvers',
      subtitle: 'You build for actual humans',
      description: 'You care about software that solves tangible pain points — from regional multilingual AI (SaralAI) to education tools (PyBe) that help non-traditional learners flourish.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accent: 'border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-950/20'
    },
    {
      title: 'High-Agency & Grounded Minds',
      subtitle: 'Zero fluff, genuine resonance',
      description: 'No corporate politics, no pretense. You value direct intellectual honesty, mutual ambition, curious minds, and good conversations over a warm cup of chai.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      accent: 'border-amber-500/20 hover:border-amber-500/50 bg-amber-950/20'
    }
  ];

  const intents = [
    {
      id: 'fulltime',
      title: 'Full-Time / Founding Role',
      badge: 'CAREER',
      subject: 'Founding / Software Engineering Role Inquiry — Siddharth Sadhu',
      template: `Hi Siddharth,\n\nWe came across your portfolio and were deeply impressed by your work on AI systems, SaralAI, and your merged PR #69 with IIT Ropar. We'd love to discuss a technical engineering role with our team.\n\nBest regards,`
    },
    {
      id: 'ai-consulting',
      title: 'AI & LLM Architecture Consulting',
      badge: 'CONSULTING',
      subject: 'Consulting Inquiry — AI & Large Language Model Pipelines',
      template: `Hi Siddharth,\n\nI am reaching out regarding technical architecture consultation for an AI system we are building. Specifically, we would love your expertise in multilingual Indic LLMs, low-latency streaming (SSE), and grounded AI workflows.\n\nLooking forward to syncing,`
    },
    {
      id: 'opensource',
      title: 'Open Source & Research Collab',
      badge: 'RESEARCH',
      subject: 'Open Source Collaboration / Research Idea',
      template: `Hey Siddharth,\n\nI saw your contributions to PyBe, CKLIS pedagogical intelligence, and open source systems. I have a project / research proposal that aligns with your engineering craftsmanship and would love to collaborate.\n\nCheers,`
    },
    {
      id: 'creator',
      title: 'Podcast, Keynote & Creator Collab',
      badge: 'MEDIA',
      subject: 'Interview / Tech Talk / Creator Collab Invitation',
      template: `Hi Siddharth,\n\nYour journey from Nar Town to GTU 2nd Rank, SSIP Grant, and IIT Ropar is inspiring. We'd love to invite you for a tech podcast / creator session to discuss your engineering philosophy and generative AI.\n\nBest,`
    },
    {
      id: 'chai-code',
      title: 'Chai & Code / Casual Tech Sync',
      badge: 'COMMUNITY',
      subject: 'Quick Coffee & Code Chat — Siddharth Sadhu',
      template: `Hey Siddharth,\n\nLoved checking out your portfolio and background. Would love to connect for a casual virtual chat over chai to talk systems, tech stacks, and what you're building next.\n\nBest,`
    }
  ];

  const currentIntentObj = intents.find((i) => i.id === selectedIntent) || intents[0];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerEmail = () => {
    const finalSubject = encodeURIComponent(currentIntentObj.subject);
    const bodyContent = customMessage ? customMessage : currentIntentObj.template;
    const finalBody = encodeURIComponent(
      customName ? `From: ${customName}\n\n${bodyContent}` : bodyContent
    );
    window.location.href = `mailto:${email}?subject=${finalSubject}&body=${finalBody}`;
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden animated-bg noise-overlay">
      {/* 3D Quantum Holographic Canvas in Background */}
      <QuantumSphereCanvas />

      {/* Laser Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-slate-900 dark:text-white" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-[140px] pointer-events-none floating-shape" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/6 rounded-full blur-[120px] pointer-events-none floating-shape" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[calc(100vh-12rem)] space-y-16">
        {/* Header */}
        <div className="max-w-4xl reveal-up">
          <SectionHeader
            title="Let's Build Something Legendary"
            subtitle="Whether you're hiring an AI systems engineer, collaborating on high-signal open source, or looking for a transformative technical speaker."
          />
        </div>

        {/* ── Who I Vibe Best With (Why Connect) ── */}
        <div className="space-y-6 reveal-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-purple-400 block mb-1">
                Shared Resonance
              </span>
              <h3 className="text-xl md:text-2xl font-light text-white tracking-tight">
                Who I Vibe Best With
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Great things get built when curious minds align
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vibePillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${pillar.accent} card-premium flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-white transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] font-mono text-purple-300/80 block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500 group-hover:text-purple-300 transition-colors">
                  <span>MUTUAL VIBE</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Two-Column Interactive Studio ── */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          {/* ── LEFT COLUMN: 3D Holographic Card & Collaboration Intent Engine ── */}
          <div className="space-y-8">
            {/* 3D Parallax Tilt VIP ID Card with Live Clock & Equalizer */}
            <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
              <HolographicIDCard email={email} onCopy={copyToClipboard} copied={copied} />
            </div>

            {/* Collaboration Intent Selector */}
            <div className="card-premium p-7 md:p-8 rounded-3xl border border-white/[0.07] space-y-6 reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-light text-white tracking-tight">
                    Select Collaboration Mode
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Click any mode to automatically format your personalized message.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  Instant Dispatch
                </span>
              </div>

              {/* Intent Pills */}
              <div className="flex flex-wrap gap-2">
                {intents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedIntent(item.id);
                      setCustomMessage(item.template);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-[10px] font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      selectedIntent === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 font-bold border border-purple-400/30'
                        : 'bg-black/40 text-slate-300 hover:text-white border border-white/5 hover:border-white/15'
                    }`}
                  >
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              {/* Live Dispatch Preview Box */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/5 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>SUBJECT: <strong className="text-purple-300">{currentIntentObj.subject}</strong></span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    READY
                  </span>
                </div>

                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name / Organization (Optional)"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <textarea
                    rows={7}
                    value={customMessage || currentIntentObj.template}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full min-h-[165px] p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-200 leading-relaxed focus:outline-none focus:border-purple-500 transition-colors resize-y custom-scrollbar"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-mono text-slate-500">
                    Dispatches via default mail client
                  </span>
                  <MagneticButton
                    onClick={handleTriggerEmail}
                    strength={0.2}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/25 flex items-center gap-2 btn-shimmer cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Social Ecosystem & CV Download ── */}
          <div className="space-y-6">
            {/* Technical CV Download Spotlight */}
            <div className="reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-premium p-6 rounded-3xl border border-white/[0.08] hover:border-purple-500/40 transition-all group">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 text-purple-300 shadow-md">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-light text-white tracking-tight">
                      Technical Curriculum Vitae
                    </h4>
                  </div>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-200 text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl transition-all shadow-md shadow-white/10 hover:scale-105 inline-block"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Social Nodes Strip */}
            <div className="space-y-3 reveal-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center justify-between px-2">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.25em] text-slate-400">
                  Global Social Ecosystem
                </span>
                <span className="text-[9.5px] font-mono text-purple-400">6 Connected Nodes</span>
              </div>

              {/* LinkedIn */}
              <SocialNode
                label="LinkedIn"
                handle="/in/siddharth-sadhu-b67551274"
                href="https://www.linkedin.com/in/siddharth-sadhu-b67551274/"
                tag="Professional"
                accentColor="from-blue-600/30 to-indigo-600/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
              />

              {/* GitHub */}
              <SocialNode
                label="GitHub"
                handle="@siddharthsadhu"
                href="https://github.com/siddharthsadhu"
                tag="Open Source"
                accentColor="from-purple-600/30 to-violet-600/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" /></svg>}
              />

              {/* X / Twitter */}
              <SocialNode
                label="X / Twitter"
                handle="@SidSadhu28"
                href="https://x.com/SidSadhu28"
                tag="Creator Thoughts"
                accentColor="from-slate-700/40 to-slate-800/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
              />

              {/* Instagram */}
              <SocialNode
                label="Instagram"
                handle="@siddharthsadhu.28"
                href="https://www.instagram.com/siddharthsadhu.28/"
                tag="Personal"
                accentColor="from-pink-600/30 to-purple-600/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>}
              />

              {/* Substack */}
              <SocialNode
                label="Substack"
                handle="@siddharthsadhu"
                href="https://substack.com/@siddharthsadhu"
                tag="Articles"
                accentColor="from-amber-600/30 to-orange-600/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>}
              />

              {/* LeetCode */}
              <SocialNode
                label="LeetCode"
                handle="@lqOyhAZL67"
                href="https://leetcode.com/u/lqOyhAZL67/"
                tag="DSA & Algorithms"
                accentColor="from-yellow-600/30 to-amber-600/20"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.036-1.271 4.241-.278l3.501 3.502c.992.987 2.624 1.034 3.675.106l2.392-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164l2.524-2.854c.876-.97 2.454-1.076 3.457-.238l.004.001 4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164z" /></svg>}
              />
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="mt-auto pt-16 reveal-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-center mb-8 opacity-20">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="mx-2.5 w-1.5 h-1.5 bg-purple-500/40 rounded-full" />
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
            <div className="flex flex-col items-center md:items-start space-y-1">
              <span className="text-slate-400 dark:text-slate-500 text-[8.5px] uppercase tracking-[0.35em] font-mono">
                Siddharth Sadhu • Engineered to Scale • © 2026
              </span>
            </div>
            <div className="flex items-center space-x-2 opacity-50">
              <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-400">
                AI Architectures • Web Systems • Deep Rigor
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
