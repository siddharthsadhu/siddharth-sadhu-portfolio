import React, { useRef, useEffect, useCallback, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  brightness: number;
  targetBrightness: number;
  isHub: boolean;
  hue: number;
  pulsePhase: number;
}

interface ConstellationMapProps {
  className?: string;
}

export const ConstellationMap: React.FC<ConstellationMapProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  // Initialize nodes
  const initNodes = useCallback((w: number, h: number) => {
    const count = Math.floor((w * h) / 10000); // Denser node field
    const nodes: Node[] = [];

    for (let i = 0; i < count; i++) {
      const isHub = i < Math.floor(count * 0.15); // 15% hub nodes
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: isHub ? 3 + Math.random() * 2 : 1.2 + Math.random() * 1.2,
        brightness: 0.2 + Math.random() * 0.2,
        targetBrightness: 0.2,
        isHub,
        hue: 260 + Math.random() * 40, // Purple range (260-300)
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      setDimensions({ w: rect.width, h: rect.height });
      initNodes(rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Connection distance — how close nodes need to be to connect
    const CONNECTION_DIST = 180; // Longer ambient connections
    const HOVER_RADIUS = 250; // Larger mouse interaction zone
    const HOVER_CONN_DIST = 320; // Much longer connections near cursor

    const animate = (time: number) => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const mouse = mouseRef.current;
      const nodes = nodesRef.current;

      // Clear with slight trail effect
      ctx.clearRect(0, 0, w, h);

      // Update nodes
      for (const node of nodes) {
        // Gentle drift
        node.x += node.vx;
        node.y += node.vy;

        // Soft return to base position
        node.x += (node.baseX - node.x) * 0.001;
        node.y += (node.baseY - node.y) * 0.001;

        // Bounce off edges softly
        if (node.x < 0 || node.x > w) node.vx *= -0.8;
        if (node.y < 0 || node.y > h) node.vy *= -0.8;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < HOVER_RADIUS) {
          const factor = 1 - distToMouse / HOVER_RADIUS;
          node.targetBrightness = 0.5 + factor * 0.5;
          // Gentle repulsion
          const angle = Math.atan2(dy, dx);
          node.x -= Math.cos(angle) * factor * 0.5;
          node.y -= Math.sin(angle) * factor * 0.5;
        } else {
          node.targetBrightness = node.isHub ? 0.4 : 0.2;
        }

        // Smooth brightness transition
        node.brightness += (node.targetBrightness - node.brightness) * 0.08;

        // Pulse
        node.pulsePhase += 0.02;
      }

      // Draw connections first (behind nodes)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Check if either node is near the mouse
          const aToMouse = Math.sqrt((mouse.x - a.x) ** 2 + (mouse.y - a.y) ** 2);
          const bToMouse = Math.sqrt((mouse.x - b.x) ** 2 + (mouse.y - b.y) ** 2);
          const nearMouse = aToMouse < HOVER_RADIUS || bToMouse < HOVER_RADIUS;

          const maxDist = nearMouse ? HOVER_CONN_DIST : CONNECTION_DIST;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.6; // Stronger connections
            const avgBrightness = (a.brightness + b.brightness) / 2;
            const finalOpacity = opacity * avgBrightness * 2.5;

            // Gradient line
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `hsla(${a.hue}, 70%, 65%, ${finalOpacity})`);
            gradient.addColorStop(0.5, `hsla(${(a.hue + b.hue) / 2}, 60%, 70%, ${finalOpacity * 0.8})`);
            gradient.addColorStop(1, `hsla(${b.hue}, 70%, 65%, ${finalOpacity})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = nearMouse ? 1.5 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw mouse glow connections (from cursor to nearby nodes)
      if (mouse.x > 0 && mouse.y > 0) {
        for (const node of nodes) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < HOVER_RADIUS * 1.8) {
            const opacity = (1 - dist / (HOVER_RADIUS * 1.8)) * 0.25;
            const gradient = ctx.createLinearGradient(mouse.x, mouse.y, node.x, node.y);
            gradient.addColorStop(0, `hsla(280, 60%, 70%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${node.hue}, 70%, 65%, ${opacity * 0.5})`);

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse glow aura — larger and brighter
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, HOVER_RADIUS * 0.8);
        mouseGlow.addColorStop(0, 'hsla(280, 60%, 65%, 0.1)');
        mouseGlow.addColorStop(0.5, 'hsla(280, 50%, 60%, 0.04)');
        mouseGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(mouse.x - HOVER_RADIUS, mouse.y - HOVER_RADIUS, HOVER_RADIUS * 2, HOVER_RADIUS * 2);
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = 1 + Math.sin(node.pulsePhase) * 0.15;
        const r = node.radius * pulse;
        const b = node.brightness;

        // Outer glow — larger and brighter
        if (b > 0.25) {
          const glowRadius = r * 5;
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
          glow.addColorStop(0, `hsla(${node.hue}, 70%, 65%, ${b * 0.4})`);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.fillRect(node.x - glowRadius, node.y - glowRadius, glowRadius * 2, glowRadius * 2);
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 70%, ${55 + b * 20}%, ${b})`;
        ctx.fill();

        // Inner bright core for hubs — more prominent
        if (node.isHub && b > 0.25) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, r * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${node.hue}, 50%, 90%, ${b * 0.9})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'auto' }}
    />
  );
};
