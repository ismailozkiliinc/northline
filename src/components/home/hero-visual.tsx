"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Vec3 = { x: number; y: number; z: number };

function fibonacciSphere(n: number, radius: number): Vec3[] {
  const pts: Vec3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return pts;
}

function rotateY(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function rotateX(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

function RotatingNetworkGlobe({ paused }: { paused: boolean }) {
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
    let angleY = 0;
    let angleX = 0.35;

    const RADIUS = 1;
    const nodes = fibonacciSphere(28, RADIUS);
    const hub: Vec3 = { x: 0, y: 0, z: 0 };

    /* Connect each node to hub + nearby nodes */
    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      edges.push([-1, i]);
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.72) edges.push([i, j]);
      }
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const size = Math.min(parent.clientWidth, parent.clientHeight);
      w = size;
      h = size;
      canvas.width = size * devicePixelRatio;
      canvas.height = size * devicePixelRatio;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const project = (p: Vec3, cx: number, cy: number, scale: number) => {
      const perspective = 2.8 / (2.8 + p.z);
      return {
        x: cx + p.x * scale * perspective,
        y: cy + p.y * scale * perspective,
        z: p.z,
        scale: perspective,
      };
    };

    const draw = () => {
      angleY += 0.006;
      angleX = 0.3 + Math.sin(angleY * 0.7) * 0.12;

      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const scale = w * 0.36;

      const transform = (p: Vec3) => rotateX(rotateY(p, angleY), angleX);

      const projectedNodes = nodes.map((n) => project(transform(n), cx, cy, scale));
      const projectedHub = project(transform(hub), cx, cy, scale);

      /* Edges — back to front via avg z */
      const sortedEdges = edges
        .map(([a, b]) => {
          const pa = a === -1 ? projectedHub : projectedNodes[a];
          const pb = b === -1 ? projectedHub : projectedNodes[b];
          return { a: pa, b: pb, z: (pa.z + pb.z) / 2 };
        })
        .sort((x, y) => x.z - y.z);

      for (const { a, b, z } of sortedEdges) {
        const depth = (z + RADIUS) / (RADIUS * 2);
        const alpha = 0.08 + depth * 0.35;
        ctx.beginPath();
        ctx.strokeStyle =
          a === projectedHub || b === projectedHub
            ? `rgba(99, 102, 241, ${alpha + 0.15})`
            : `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = a === projectedHub || b === projectedHub ? 1.2 : 0.7;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      /* Hub glow */
      const hubGrad = ctx.createRadialGradient(
        projectedHub.x,
        projectedHub.y,
        0,
        projectedHub.x,
        projectedHub.y,
        18 * projectedHub.scale,
      );
      hubGrad.addColorStop(0, "rgba(99, 102, 241, 0.35)");
      hubGrad.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.beginPath();
      ctx.arc(projectedHub.x, projectedHub.y, 18 * projectedHub.scale, 0, Math.PI * 2);
      ctx.fillStyle = hubGrad;
      ctx.fill();

      /* Nodes */
      const sortedNodes = projectedNodes
        .map((p, i) => ({ ...p, i }))
        .sort((a, b) => a.z - b.z);

      for (const p of sortedNodes) {
        const depth = (p.z + RADIUS) / (RADIUS * 2);
        const r = (3 + depth * 3) * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.35 + depth * 0.55})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${depth * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      /* Hub node */
      ctx.beginPath();
      ctx.arc(projectedHub.x, projectedHub.y, 7 * projectedHub.scale, 0, Math.PI * 2);
      const hubFill = ctx.createRadialGradient(
        projectedHub.x - 2,
        projectedHub.y - 2,
        0,
        projectedHub.x,
        projectedHub.y,
        8 * projectedHub.scale,
      );
      hubFill.addColorStop(0, "#a5b4fc");
      hubFill.addColorStop(0.5, "#6366f1");
      hubFill.addColorStop(1, "#4f46e5");
      ctx.fillStyle = hubFill;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [paused]);

  return (
    <canvas
      ref={canvasRef}
      className="relative z-10 h-full w-full"
      aria-hidden
    />
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px] lg:max-w-[540px]">
      {/* Ambient glow */}
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-[10%] rounded-full bg-brand-gradient blur-3xl"
        aria-hidden
      />

      {/* Outer rotating ring */}
      {!reduce && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-[4%] rounded-full border border-indigo-200/30"
          aria-hidden
        />
      )}
      {!reduce && (
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-violet-200/25"
          aria-hidden
        />
      )}

      {/* Pulse rings */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <div
            key={i}
            className="hero-pulse-ring pointer-events-none absolute top-1/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20"
            style={{ animationDelay: `${i * 2}s` }}
            aria-hidden
          />
        ))}

      {/* Rotating 3D network globe */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[8%] flex items-center justify-center"
      >
        <div className="relative h-full w-full rounded-full border border-indigo-100/60 bg-white/40 shadow-[0_24px_80px_rgba(99,102,241,0.12)] backdrop-blur-sm">
          <RotatingNetworkGlobe paused={!!reduce} />
        </div>
      </motion.div>

      {/* Orbiting accent dots */}
      {!reduce && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-0"
            aria-hidden
          >
            <div className="absolute top-[8%] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-gradient shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-[6%]"
            aria-hidden
          >
            <div className="absolute bottom-[12%] right-[8%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.45)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-[10%]"
            aria-hidden
          >
            <div className="absolute top-[20%] left-[6%] h-2 w-2 rounded-full bg-violet-400/80" />
          </motion.div>
        </>
      )}
    </div>
  );
}
