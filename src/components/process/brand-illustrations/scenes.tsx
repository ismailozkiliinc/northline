"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  StageFrame,
  DeviceMacBook,
  DeviceIPhone,
  DeviceIPad,
  DeviceStudioDisplay,
  DeviceVisionPro,
  ApplePencil,
  GlassCard,
} from "./primitives";

type Props = { className?: string };

/* ─────────────────────────────────────────────
   01 TANISMA — top-down round glass table + hologram core
   Camera: overhead / slight 3D tilt. Blue volumetric.
───────────────────────────────────────────── */
export function BriefDiscovery({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 50% 30%, rgba(85,123,255,0.1), transparent 45%), #192534"
    >
      {/* Volumetric shaft */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[70%] w-[55%] -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(100,160,255,0.45), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotateX(52deg) rotateZ(-8deg)", transformStyle: "preserve-3d" }}
      >
        {/* Round black glass table */}
        <div
          className="relative"
          style={{
            width: "min(78%, 380px)",
            aspectRatio: "1",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 35%, rgba(40,48,64,0.95), rgba(8,10,16,0.98))",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 60px rgba(80,140,255,0.08)",
            transform: "translateZ(0)",
          }}
        >
          <div
            className="absolute inset-[8%] rounded-full"
            style={{
              border: "1px solid rgba(120,170,255,0.15)",
              boxShadow: "inset 0 0 40px rgba(80,140,255,0.06)",
            }}
          />

          {/* Holographic project sphere — HERO */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "38%",
              aspectRatio: "1",
              background:
                "radial-gradient(circle at 35% 30%, rgba(180,210,255,0.55), rgba(60,120,255,0.25) 45%, rgba(20,40,90,0.15) 70%, transparent)",
              boxShadow:
                "0 0 60px rgba(80,150,255,0.45), inset 0 0 30px rgba(255,255,255,0.2)",
              border: "1px solid rgba(160,200,255,0.35)",
              transform: "translateZ(48px)",
            }}
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.04, 1],
                    opacity: [0.85, 1, 0.85],
                  }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-[18%] rounded-full border border-white/20" />
            <div className="absolute inset-[32%] rounded-full border border-cyan-300/25" />
          </motion.div>

          {/* Supporting devices on table rim */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2" style={{ transform: "translateZ(20px) rotateX(-52deg)" }}>
            <DeviceVisionPro scale={0.85} />
          </div>
          <div className="absolute bottom-[14%] left-[10%]" style={{ transform: "translateZ(16px) rotateX(-52deg) rotateZ(12deg)" }}>
            <DeviceIPad scale={0.55} landscape />
          </div>
          <div className="absolute right-[8%] bottom-[18%]" style={{ transform: "translateZ(16px) rotateX(-52deg) rotateZ(-18deg)" }}>
            <DeviceMacBook scale={0.55} />
          </div>
        </div>
      </div>

      {/* AI particles rising */}
      {!reduce &&
        Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1 rounded-full bg-[#8eb6ff]"
            style={{
              left: `${28 + (i % 6) * 8}%`,
              bottom: "22%",
              boxShadow: "0 0 8px rgba(140,180,255,0.8)",
            }}
            animate={{
              y: [0, -220 - (i % 5) * 30],
              opacity: [0, 1, 0],
              x: [0, ((i % 3) - 1) * 20],
            }}
            transition={{
              duration: 3.5 + (i % 4) * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeOut",
            }}
          />
        ))}
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   02 TEKLIF — floating holographic documents + signature
   Camera: three-quarter desk. Warm amber glass.
───────────────────────────────────────────── */
export function ProposalFloat({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 70% 30%, rgba(190,120,65,0.08), transparent 45%), #192534"
    >
      {/* Black glass floor plane */}
      <div
        className="absolute right-[5%] bottom-[8%] left-[5%] h-[42%]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(0,0,0,0.5)), linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
          transform: "perspective(800px) rotateX(68deg)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 -40px 80px rgba(212,161,106,0.06)",
        }}
      />

      {/* Floating proposal sheets — HERO */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: "42%",
              maxWidth: 220,
              aspectRatio: "0.72",
              transform: `translateX(${(i - 1) * 18}%) translateY(${i * -6}%) rotateY(${-24 + i * 14}deg) rotateX(8deg) translateZ(${i * 40}px)`,
              transformStyle: "preserve-3d",
            }}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}
            animate={reduce ? undefined : { y: [0, -6 - i * 2, 0] }}
          >
            <GlassCard className="h-full w-full p-4" style={{ borderColor: "rgba(212,161,106,0.25)" }}>
              <div className="mb-3 h-1.5 w-12 rounded-full bg-[rgba(212,161,106,0.5)]" />
              <div className="space-y-2">
                {[0.7, 1, 0.85, 0.55, 0.9].map((w, j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full"
                    style={{
                      width: `${w * 100}%`,
                      background: `rgba(255,255,255,${0.08 + j * 0.03})`,
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-auto pt-8"
                style={{
                  borderTop: "1px solid rgba(212,161,106,0.2)",
                  marginTop: 24,
                }}
              >
                <div className="h-8 w-16 opacity-40">
                  <svg viewBox="0 0 64 32" className="h-full w-full">
                    <path
                      d="M4 22 C 14 8, 28 28, 40 14 S 56 8, 60 18"
                      fill="none"
                      stroke="rgba(212,161,106,0.8)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Supporting: iPad + Pencil */}
      <div className="absolute right-[10%] bottom-[14%] z-[2]" style={{ transform: "rotate(-6deg)" }}>
        <DeviceIPad
          scale={0.85}
          landscape
          screen={
            <div className="flex h-full flex-col bg-gradient-to-br from-[#1a1510] to-[#0a0806] p-2.5">
              <div className="h-1 w-10 rounded-full bg-[rgba(212,161,106,0.45)]" />
              <div className="mt-2 flex-1 space-y-1.5">
                {[70, 100, 85, 60].map((w, i) => (
                  <div key={i} className="h-1 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="mt-auto h-px bg-[rgba(212,161,106,0.3)]" />
            </div>
          }
        />
        <div className="absolute -right-2 -bottom-1">
          <ApplePencil />
        </div>
      </div>

      {/* Transparent floating UI chips */}
      {["Scope", "Timeline", "Investment"].map((label, i) => (
        <motion.div
          key={label}
          className="absolute rounded-xl border border-white/12 px-3 py-1.5 text-[9px] tracking-wide text-white/60 backdrop-blur-md"
          style={{
            left: `${8 + i * 8}%`,
            top: `${18 + i * 14}%`,
            background: "rgba(20,16,12,0.55)",
          }}
          animate={reduce ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        >
          {label}
        </motion.div>
      ))}
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   03 ARASTIRMA — NASA mission wall (panoramic)
   Camera: facing a deep holographic wall. Violet.
───────────────────────────────────────────── */
export function ResearchMissionWall({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 50% 35%, rgba(139,108,255,0.09), transparent 45%), #192534"
    >
      {/* Deep wall plane */}
      <div
        className="absolute inset-[6%] overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,25,60,0.4), rgba(10,8,20,0.9))",
          border: "1px solid rgba(160,140,255,0.15)",
          boxShadow: "inset 0 0 80px rgba(80,60,180,0.15)",
          transform: "perspective(1000px) rotateX(4deg)",
        }}
      >
        {/* Heatmap grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-px p-3 opacity-70">
          {Array.from({ length: 96 }).map((_, i) => {
            const heat = Math.sin(i * 0.7) * 0.5 + 0.5;
            return (
              <div
                key={i}
                className="rounded-[2px]"
                style={{
                  background: `rgba(${80 + heat * 100},${60 + heat * 40},${180 + heat * 40},${0.15 + heat * 0.45})`,
                }}
              />
            );
          })}
        </div>

        {/* 3D chart bars */}
        <div className="absolute bottom-[12%] left-[8%] flex h-[35%] items-end gap-1.5">
          {[40, 65, 45, 80, 55, 90, 70, 50, 75].map((h, i) => (
            <motion.div
              key={i}
              className="w-3 rounded-t-sm md:w-4"
              style={{
                height: `${h}%`,
                background: `linear-gradient(180deg, rgba(180,160,255,0.7), rgba(80,60,180,0.3))`,
                boxShadow: "0 0 12px rgba(140,120,255,0.25)",
              }}
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            />
          ))}
        </div>

        {/* Node network overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 100 100">
          {[
            [20, 25, 45, 18],
            [45, 18, 70, 28],
            [70, 28, 82, 50],
            [45, 18, 50, 45],
            [20, 25, 35, 55],
            [50, 45, 65, 60],
          ].map(([a, b, c, d], i) => (
            <motion.line
              key={i}
              x1={a}
              y1={b}
              x2={c}
              y2={d}
              stroke="rgba(180,160,255,0.4)"
              strokeWidth="0.3"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
            />
          ))}
          {[[20, 25], [45, 18], [70, 28], [50, 45], [82, 50], [35, 55]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(200,180,255,0.85)" />
          ))}
        </svg>

        {/* AI analysis layers labels */}
        <div className="absolute top-4 right-4 space-y-2">
          {["Layer · Behavior", "Layer · Intent", "Layer · Risk"].map((t, i) => (
            <motion.div
              key={t}
              className="rounded-lg border border-white/10 px-2.5 py-1 font-mono text-[8px] text-white/50 backdrop-blur-sm"
              style={{ background: "rgba(20,15,40,0.6)" }}
              initial={reduce ? false : { x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Depth glow floor */}
      <div
        className="pointer-events-none absolute right-[15%] bottom-0 left-[15%] h-24 blur-2xl"
        style={{ background: "radial-gradient(ellipse, rgba(120,100,255,0.25), transparent)" }}
      />
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   04 WIREFRAME — desk + devices SUPPORTING, hologram layers rising
   NO Figma. Blueprint + glass panels ascending.
───────────────────────────────────────────── */
export function WireframeAscent({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 50% 20%, rgba(85,123,255,0.09), transparent 45%), #192534"
    >
      {/* Background 3D node system */}
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100">
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 10 + (i % 4) * 25;
          const y = 15 + Math.floor(i / 4) * 28;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="0.8" fill="rgba(100,150,255,0.5)" />
              {i < 11 && (
                <line
                  x1={x}
                  y1={y}
                  x2={10 + ((i + 1) % 4) * 25}
                  y2={15 + Math.floor((i + 1) / 4) * 28}
                  stroke="rgba(100,150,255,0.2)"
                  strokeWidth="0.2"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Black glass desk */}
      <div
        className="absolute right-[6%] bottom-[6%] left-[6%] h-[28%] rounded-t-[40%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,38,55,0.9), rgba(8,10,16,0.95))",
          boxShadow: "0 -20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          transform: "perspective(900px) rotateX(55deg)",
        }}
      />

      {/* Supporting devices on desk */}
      <div className="absolute bottom-[18%] left-1/2 z-[2] flex -translate-x-1/2 items-end gap-3 md:gap-5">
        <DeviceMacBook scale={0.7} />
        <DeviceStudioDisplay
          scale={0.85}
          screen={
            <div className="flex h-full items-center justify-center bg-[#1e2838]">
              <div className="h-[55%] w-[70%] rounded border border-[#5175FF]/30 bg-[#5175FF]/5" />
            </div>
          }
        />
        <DeviceIPad scale={0.55} />
      </div>

      {/* Holographic wireframe layers rising — HERO */}
      <div className="absolute inset-x-0 top-[6%] bottom-[42%] flex flex-col items-center justify-end gap-3">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-[55%] max-w-[280px]"
            style={{
              height: 36 + i * 4,
              transform: `translateY(${-i * 8}px)`,
            }}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
            animate={reduce ? undefined : { y: [0, -4, 0] }}
          >
            <GlassCard
              className="relative h-full w-full overflow-hidden"
              style={{ borderColor: `rgba(130,170,255,${0.2 + i * 0.1})` }}
            >
              <svg className="h-full w-full p-2" viewBox="0 0 120 28">
                <path
                  d={`M 6 14 H ${25 + i * 6} L ${40 + i * 5} ${8 + (i % 2) * 10} L ${60 + i * 4} 14 H 114`}
                  fill="none"
                  stroke="rgba(130,180,255,0.65)"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                <rect x="20" y="6" width="14" height="16" rx="2" fill="none" stroke="rgba(81,117,255,0.5)" strokeWidth="0.8" />
                <rect x="72" y="8" width="20" height="12" rx="2" fill="none" stroke="rgba(81,117,255,0.4)" strokeWidth="0.8" />
              </svg>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Light beams from devices upward */}
      {!reduce &&
        [32, 50, 68].map((left, i) => (
          <motion.div
            key={i}
            className="absolute bottom-[38%] w-px"
            style={{
              left: `${left}%`,
              height: "35%",
              background:
                "linear-gradient(180deg, rgba(100,160,255,0.5), transparent)",
              boxShadow: "0 0 12px rgba(100,160,255,0.4)",
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          />
        ))}
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   05 UI DESIGN — product UI as sculpture (liquid glass)
   Hero = luminous app surfaces, devices support.
───────────────────────────────────────────── */
function PremiumDashUI() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-[#263243] via-[#1e2838] to-[#202b3a] p-2.5">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#4f74ff]" />
        <div className="h-1 w-12 rounded-full bg-white/20" />
        <div className="ml-auto h-1 w-6 rounded-full bg-white/10" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1.5">
        <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur-sm">
          <div className="mb-1 h-1 w-8 rounded-full bg-[#4f74ff]/50" />
          <div className="flex h-[70%] items-end gap-0.5">
            {[40, 70, 55, 85, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#4f74ff]/20 to-[#4f74ff]/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-[45%] rounded-lg border border-[#7a5cff]/25 bg-[#7a5cff]/10" />
          <div className="h-[45%] rounded-lg border border-[#1f8a7a]/25 bg-[#1f8a7a]/10" />
        </div>
      </div>
    </div>
  );
}

function MobileAppUI() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#10182a] to-[#202b3a] pt-4">
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-black/60" />
      <div className="px-2">
        <div className="mb-2 h-1.5 w-10 rounded-full bg-white/25" />
        <div className="mb-2 space-y-1">
          <div className="h-8 rounded-xl border border-white/10 bg-white/[0.07] backdrop-blur-md" />
          <div className="h-8 rounded-xl border border-[#4f74ff]/30 bg-[#4f74ff]/15" />
          <div className="h-8 rounded-xl border border-white/10 bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

export function DesignLiquidGlass({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 70% 30%, rgba(69,169,154,0.09), transparent 45%), #192534"
    >
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-6 md:gap-6">
        {/* Floating glass token orbs */}
        {["#4f74ff", "#7a5cff", "#1f8a7a", "#d4a16a"].map((c, i) => (
          <motion.div
            key={c}
            className="absolute size-8 rounded-full md:size-10"
            style={{
              left: `${12 + i * 22}%`,
              top: i % 2 === 0 ? "10%" : "82%",
              background: `radial-gradient(circle at 30% 30%, ${c}, ${c}88)`,
              boxShadow: `0 0 28px ${c}55`,
            }}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity }}
          />
        ))}

        <div className="relative z-[1] flex items-end gap-3 md:gap-5" style={{ transform: "rotateY(-8deg)" }}>
          <DeviceIPhone scale={1.15} screen={<MobileAppUI />} />
          <DeviceStudioDisplay scale={1.05} screen={<PremiumDashUI />} />
          <DeviceIPad scale={0.9} screen={<PremiumDashUI />} />
        </div>
      </div>

      {/* Liquid glass bloom */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79,116,255,0.35), transparent 65%)",
        }}
      />
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   06 YAZILIM — isometric server cluster + energy (NO code)
───────────────────────────────────────────── */
export function DevServerCluster({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 50% 45%, rgba(85,123,255,0.09), transparent 45%), #192534"
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotateX(18deg) rotateZ(-18deg)", transformStyle: "preserve-3d" }}
      >
        {/* Server racks — HERO */}
        <div className="relative flex gap-3 md:gap-4">
          {[0, 1, 2, 3].map((col) => (
            <div key={col} className="flex flex-col gap-1.5">
              {[0, 1, 2, 3, 4].map((row) => (
                <motion.div
                  key={row}
                  className="h-7 w-14 rounded-md border border-cyan-400/25 md:h-8 md:w-16"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(40,80,100,0.6), rgba(10,20,30,0.9))",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    transform: `translateZ(${col * 12}px)`,
                  }}
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (col * 5 + row) * 0.03 }}
                >
                  <div className="flex h-full items-center gap-1 px-1.5">
                    {[0, 1, 2].map((led) => (
                      <motion.span
                        key={led}
                        className="size-1 rounded-full"
                        style={{ background: led === 1 ? "#4fd1e0" : "#2a8a9a" }}
                        animate={
                          reduce
                            ? undefined
                            : { opacity: [0.4, 1, 0.4] }
                        }
                        transition={{
                          duration: 1.2 + led * 0.3,
                          repeat: Infinity,
                          delay: col * 0.2 + row * 0.1,
                        }}
                      />
                    ))}
                    <div className="ml-auto h-0.5 flex-1 rounded-full bg-cyan-400/20" />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* AI core */}
        <motion.div
          className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full md:size-20"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(160,240,255,0.6), rgba(20,80,100,0.4) 55%, transparent)",
            boxShadow: "0 0 50px rgba(79,209,224,0.45)",
            border: "1px solid rgba(120,230,240,0.4)",
            transform: "translateZ(60px)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Energy lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {!reduce &&
          [0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M ${15 + i * 5} 80 Q 50 ${40 - i * 8}, ${85 - i * 5} 20`}
              fill="none"
              stroke="rgba(79,209,224,0.35)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "linear" }}
            />
          ))}
      </svg>

      {/* Devices as control panels — small, supporting */}
      <div className="absolute right-6 bottom-6 opacity-90">
        <DeviceMacBook
          scale={0.55}
          screen={
            <div className="flex h-full items-center justify-center gap-1 bg-[#1e2a34] p-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[60%] w-3 rounded-sm bg-cyan-400/20" />
              ))}
            </div>
          }
        />
      </div>
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   07 TEST — robotic lab bay, scan beams, PASS
───────────────────────────────────────────── */
export function QaTestLab({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 50% 30%, rgba(85,123,255,0.09), transparent 45%), #192534"
    >
      {/* Lab bay frame */}
      <div
        className="absolute inset-[8%] rounded-2xl border border-white/8"
        style={{
          background: "linear-gradient(180deg, rgba(30,28,22,0.5), rgba(10,9,7,0.8))",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* Overhead rail */}
        <div
          className="absolute top-4 right-[10%] left-[10%] h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(232,200,120,0.4), transparent)" }}
        />

        {/* Devices under test */}
        <div className="absolute inset-x-0 top-[28%] flex items-end justify-center gap-6 md:gap-10">
          <DeviceIPhone
            scale={1.1}
            screen={<MobileAppUI />}
          />
          <DeviceIPad
            scale={0.85}
            screen={<PremiumDashUI />}
          />
          <DeviceMacBook
            scale={0.85}
            screen={<PremiumDashUI />}
          />
        </div>

        {/* AI scan beams */}
        {!reduce &&
          [28, 50, 72].map((left, i) => (
            <motion.div
              key={i}
              className="absolute top-8 w-0.5"
              style={{
                left: `${left}%`,
                height: "55%",
                background:
                  "linear-gradient(180deg, rgba(232,200,120,0.7), rgba(73,200,154,0.4), transparent)",
                boxShadow: "0 0 16px rgba(232,200,120,0.5)",
              }}
              animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.85, 1, 0.85] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
            />
          ))}

        {/* PASS particles */}
        {[
          { t: "PASS", c: "#49C89A", x: 12, y: 20 },
          { t: "PASS", c: "#49C89A", x: 78, y: 18 },
          { t: "BUG", c: "#e86a6a", x: 18, y: 72 },
          { t: "PASS", c: "#49C89A", x: 82, y: 70 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border px-2 py-0.5 font-mono text-[8px] font-bold"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              color: p.c,
              borderColor: `${p.c}55`,
              background: `${p.c}18`,
              boxShadow: `0 0 16px ${p.c}33`,
            }}
            animate={reduce ? undefined : { y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5 + i * 0.2, repeat: Infinity }}
          >
            {p.t}
          </motion.span>
        ))}
      </div>
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   08 YAYIN — App Store launch burst + global links
───────────────────────────────────────────── */
export function LaunchBurst({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 70% 50%, rgba(190,120,65,0.08), transparent 45%), #192534"
    >
      {/* Global connection arcs */}
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100">
        {[
          [50, 50, 18, 30],
          [50, 50, 82, 28],
          [50, 50, 20, 70],
          [50, 50, 80, 72],
          [50, 50, 50, 18],
          [50, 50, 50, 85],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.path
            key={i}
            d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 12}, ${x2} ${y2}`}
            fill="none"
            stroke="rgba(130,170,255,0.35)"
            strokeWidth="0.35"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * i }}
          />
        ))}
      </svg>

      {/* Edge nodes */}
      {[
        [18, 30],
        [82, 28],
        [20, 70],
        [80, 72],
        [50, 18],
        [50, 85],
      ].map(([x, y], i) => (
        <motion.div
          key={i}
          className="absolute size-2 rounded-full bg-[#4f74ff]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 14px rgba(79,116,255,0.8)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Hero app icon + launch ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!reduce &&
          Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            return (
              <motion.span
                key={i}
                className="absolute size-1 rounded-full bg-white"
                style={{ boxShadow: "0 0 6px rgba(255,255,255,0.8)" }}
                animate={{
                  x: [0, Math.cos(angle) * 140],
                  y: [0, Math.sin(angle) * 140],
                  opacity: [1, 0],
                  scale: [1, 0.2],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: (i % 8) * 0.15,
                  ease: "easeOut",
                }}
              />
            );
          })}

        <motion.div
          className="relative z-[1] flex size-24 items-center justify-center rounded-[28px] md:size-28"
          style={{
            background:
              "linear-gradient(145deg, #6a8aff, #4f74ff 40%, #3a5ad9)",
            boxShadow:
              "0 0 80px rgba(79,116,255,0.55), 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="size-10 rounded-2xl bg-white/20 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          className="absolute size-40 rounded-full border border-[#4f74ff]/30 md:size-48"
          animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      {/* Supporting phone — small */}
      <div className="absolute right-8 bottom-8 opacity-80">
        <DeviceIPhone scale={0.9} screen={<MobileAppUI />} />
      </div>
    </StageFrame>
  );
}

/* ─────────────────────────────────────────────
   09 BAKIM — orbital health monitor + live control
───────────────────────────────────────────── */
export function GrowthOrbitMonitor({ className }: Props) {
  const reduce = useReducedMotion();
  return (
    <StageFrame
      className={className}
      atmosphere="radial-gradient(circle at 45% 45%, rgba(139,108,255,0.09), transparent 45%), #192534"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Core health */}
        <div
          className="relative z-[1] flex size-24 flex-col items-center justify-center rounded-full md:size-28"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(80,220,160,0.45), rgba(15,40,30,0.9))",
            boxShadow: "0 0 50px rgba(61,191,138,0.35)",
            border: "1px solid rgba(61,191,138,0.4)",
          }}
        >
          <span className="font-mono text-[10px] tracking-widest text-[#3dbf8a]">99.9%</span>
          <span className="mt-0.5 text-[7px] tracking-wide text-white/40 uppercase">Uptime</span>
        </div>

        {/* Orbit rings */}
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border border-[rgba(61,191,138,0.22)]"
            style={{
              width: `${26 + ring * 15}%`,
              height: `${26 + ring * 15}%`,
            }}
            animate={reduce ? undefined : { rotate: ring % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 28 + ring * 12, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: ring === 2 ? "#4f74ff" : "#3dbf8a",
                boxShadow: "0 0 10px currentColor",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Live dashboard glass — supporting */}
      <GlassCard className="absolute top-6 left-6 w-[38%] max-w-[160px] p-2.5">
        <div className="mb-1.5 text-[7px] tracking-wider text-white/40 uppercase">Health</div>
        <div className="space-y-1">
          {["API", "CDN", "DB"].map((row) => (
            <div key={row} className="flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-[#3dbf8a]" />
              <span className="text-[8px] text-white/55">{row}</span>
              <div className="ml-auto h-0.5 w-8 rounded-full bg-[#3dbf8a]/40" />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Device control — supporting */}
      <div className="absolute right-6 bottom-8 flex items-end gap-2">
        <DeviceIPhone
          scale={0.75}
          screen={
            <div className="flex h-full flex-col justify-center gap-1 bg-[#1a2e24] p-2">
              <div className="h-1 w-full rounded-full bg-[#3dbf8a]/50" />
              <div className="h-1 w-[70%] rounded-full bg-white/15" />
              <div className="h-1 w-[85%] rounded-full bg-[#3dbf8a]/30" />
            </div>
          }
        />
        <DeviceMacBook
          scale={0.5}
          screen={
            <div className="grid h-full grid-cols-2 gap-0.5 bg-[#1a2e24] p-1">
              <div className="rounded-sm bg-[#3dbf8a]/20" />
              <div className="rounded-sm bg-white/5" />
              <div className="rounded-sm bg-white/5" />
              <div className="rounded-sm bg-[#4f74ff]/20" />
            </div>
          }
        />
      </div>

      {/* Data stream arcs */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {!reduce &&
          [0, 1].map((i) => (
            <motion.path
              key={i}
              d={`M 15 ${40 + i * 20} Q 50 ${25 + i * 15}, 85 ${45 + i * 10}`}
              fill="none"
              stroke="rgba(61,191,138,0.3)"
              strokeWidth="0.35"
              strokeDasharray="2 4"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
      </svg>
    </StageFrame>
  );
}
