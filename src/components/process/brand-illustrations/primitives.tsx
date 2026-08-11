"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StageFrame({
  className,
  atmosphere,
  children,
}: {
  className?: string;
  atmosphere: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "relative isolate min-h-[540px] w-full overflow-hidden rounded-[28px] border border-border-strong bg-surface shadow-[var(--shadow-depth)] md:min-h-[620px]",
        className,
      )}
      style={{ perspective: "1400px" }}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="absolute inset-0" style={{ background: atmosphere }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-[1] h-full min-h-[inherit]">{children}</div>
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 48%, rgba(12,18,28,0.22) 100%)",
        }}
      />
    </motion.div>
  );
}

/** Supporting Apple-like props — dark aluminum, no product UI chrome. */
export function DeviceMacBook({
  className,
  screen,
  scale = 1,
}: {
  className?: string;
  screen?: React.ReactNode;
  scale?: number;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{ transform: `scale(${scale})`, transformOrigin: "center bottom" }}
    >
      <div
        className="relative overflow-hidden rounded-[10px] border border-white/12"
        style={{
          width: 168,
          height: 106,
          background: "linear-gradient(160deg, #2a2d33, #15171b)",
          boxShadow:
            "0 24px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        <div className="absolute inset-[5px] overflow-hidden rounded-[6px] bg-[#1a2332]">
          {screen ?? <div className="h-full w-full bg-gradient-to-br from-white/[0.04] to-transparent" />}
        </div>
      </div>
      <div
        className="mx-auto h-[5px] w-[190px] rounded-b-[10px]"
        style={{
          background: "linear-gradient(180deg, #3a3d44, #1a1c20)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      />
      <div className="mx-auto h-[2px] w-[56px] rounded-full bg-white/10" />
    </div>
  );
}

export function DeviceIPhone({
  className,
  screen,
  scale = 1,
}: {
  className?: string;
  screen?: React.ReactNode;
  scale?: number;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        width: 52 * scale,
        height: 108 * scale,
        borderRadius: 14 * scale,
        background: "linear-gradient(160deg, #2c2f36, #12141a)",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.12)",
        padding: 3 * scale,
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden bg-[#1a2332]"
        style={{ borderRadius: 11 * scale }}
      >
        <div
          className="absolute top-1.5 left-1/2 z-[2] h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/80"
          style={{ width: 22 * scale, height: 5 * scale }}
        />
        {screen ?? (
          <div className="h-full w-full bg-gradient-to-b from-[#0b1220] to-[#1a2332]" />
        )}
      </div>
    </div>
  );
}

export function DeviceIPad({
  className,
  screen,
  scale = 1,
  landscape = false,
}: {
  className?: string;
  screen?: React.ReactNode;
  scale?: number;
  landscape?: boolean;
}) {
  const w = (landscape ? 148 : 98) * scale;
  const h = (landscape ? 104 : 132) * scale;
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width: w,
        height: h,
        borderRadius: 14 * scale,
        background: "linear-gradient(155deg, #2a2d34, #12141a)",
        boxShadow:
          "0 22px 44px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: 5 * scale,
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-[8px] bg-[#1a2332]">
        {screen ?? <div className="h-full w-full bg-gradient-to-br from-white/[0.03] to-transparent" />}
      </div>
    </div>
  );
}

export function DeviceStudioDisplay({
  className,
  screen,
  scale = 1,
}: {
  className?: string;
  screen?: React.ReactNode;
  scale?: number;
}) {
  return (
    <div className={cn("relative flex flex-col items-center", className)} style={{ transform: `scale(${scale})` }}>
      <div
        className="overflow-hidden rounded-[14px] border border-white/12"
        style={{
          width: 210,
          height: 136,
          background: "linear-gradient(160deg, #2e3138, #16181d)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.14)",
          padding: 7,
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[6px] bg-[#1a2332]">
          <div className="absolute top-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[#1a1c22] ring-1 ring-white/10" />
          {screen ?? (
            <div className="h-full w-full bg-gradient-to-br from-[#263243] via-[#1a2332] to-[#080c14]" />
          )}
        </div>
      </div>
      <div
        className="mt-1 h-10 w-9"
        style={{
          background: "linear-gradient(180deg, #3a3d44, #1c1e24)",
          clipPath: "polygon(28% 0, 72% 0, 88% 100%, 12% 100%)",
        }}
      />
      <div
        className="h-1.5 w-16 rounded-full"
        style={{ background: "linear-gradient(90deg, #22252b, #3a3d44, #22252b)" }}
      />
    </div>
  );
}

export function DeviceVisionPro({ className, scale = 1 }: { className?: string; scale?: number }) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        width: 72 * scale,
        height: 36 * scale,
        borderRadius: 999,
        background: "linear-gradient(180deg, #2a2d34, #0e1014)",
        boxShadow:
          "0 16px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 h-[55%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 40% 35%, rgba(120,180,255,0.35), rgba(20,30,50,0.9))",
          boxShadow: "inset 0 0 12px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

export function ApplePencil({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-1 w-20 rounded-full", className)}
      style={{
        background: "linear-gradient(90deg, #e8e8ea, #b8b8bc 70%, #6a6a70)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        transform: "rotate(-28deg)",
      }}
    />
  );
}

export function GlassCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn("rounded-2xl border border-white/15 backdrop-blur-xl", className)}
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
        boxShadow:
          "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.22)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
