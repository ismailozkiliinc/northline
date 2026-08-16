"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Canvas particle network ── */
function ParticleNetwork({ paused }: { paused: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (paused) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    const particles: Particle[] = [];
    const COUNT = 55;
    const LINK_DIST = 130;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.35)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [paused]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

/* ── Floating code fragments ── */
const CODE_SNIPPETS = [
  "const build = async () => {",
  "export default function App()",
  "<Component />",
  "npm run dev",
  "interface Product {",
  "await fetch('/api')",
  "return <Layout>",
  "type Props = {",
];

const TECH_TAGS = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "AI",
  "SaaS",
  "UI/UX",
  "Node.js",
];

const FLOAT_ITEMS = CODE_SNIPPETS.map((text, i) => ({
  text,
  x: `${8 + (i * 11) % 82}%`,
  y: `${6 + (i * 13) % 78}%`,
  delay: i * 0.4,
  duration: 14 + (i % 5) * 2,
}));

const TAG_ITEMS = TECH_TAGS.map((text, i) => ({
  text,
  x: `${5 + (i * 12) % 80}%`,
  y: `${10 + (i * 17) % 75}%`,
  delay: i * 0.6,
  duration: 16 + (i % 4) * 3,
}));

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div className="hero-bg-orb hero-bg-orb-1 absolute -top-[20%] -left-[10%] h-[55vw] max-h-[600px] w-[55vw] max-w-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="hero-bg-orb hero-bg-orb-2 absolute -top-[5%] -right-[15%] h-[50vw] max-h-[550px] w-[50vw] max-w-[550px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="hero-bg-orb hero-bg-orb-3 absolute bottom-[5%] left-[20%] h-[40vw] max-h-[450px] w-[40vw] max-w-[450px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.09)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Moving grid */}
      <div className="hero-grid-move absolute inset-0 opacity-[0.45]" />

      {/* Radial fade mask — keeps edges clean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,white_85%)]" />

      {/* Particle network */}
      <ParticleNetwork paused={!!reduce} />

      {/* Pulse rings — center-right */}
      {!reduce && (
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 max-lg:hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="hero-pulse-ring absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/25"
              style={{ animationDelay: `${i * 2.2}s` }}
            />
          ))}
        </div>
      )}

      {/* Floating code snippets */}
      {!reduce &&
        FLOAT_ITEMS.map((item, i) => (
          <motion.span
            key={item.text}
            className="absolute hidden font-mono text-[10px] tracking-wide text-indigo-300/50 md:block lg:text-[11px]"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -18, 0, 14, 0],
              x: [0, 8, -6, 0],
              opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.text}
          </motion.span>
        ))}

      {/* Floating tech tags */}
      {!reduce &&
        TAG_ITEMS.map((item) => (
          <motion.span
            key={item.text}
            className="absolute hidden rounded-full border border-indigo-200/40 bg-white/60 px-2.5 py-1 text-[10px] font-medium text-indigo-400/70 shadow-sm backdrop-blur-sm sm:block"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -22, 0, 16, 0],
              opacity: [0.4, 0.85, 0.5, 0.75, 0.4],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.text}
          </motion.span>
        ))}

      {/* Animated scan beam */}
      {!reduce && <div className="hero-scan-beam absolute inset-x-0 top-0 h-full" />}

      {/* Corner brackets — dev aesthetic */}
      {!reduce && (
        <>
          <motion.div
            className="absolute top-[18%] left-[4%] font-mono text-3xl font-light text-indigo-200/40 lg:text-4xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {"{"}
          </motion.div>
          <motion.div
            className="absolute right-[6%] bottom-[22%] font-mono text-3xl font-light text-indigo-200/40 lg:text-4xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {"}"}
          </motion.div>
          <motion.div
            className="absolute top-[28%] right-[12%] font-mono text-2xl text-blue-200/35 max-lg:hidden"
            animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {"</>"}
          </motion.div>
        </>
      )}
    </div>
  );
}
