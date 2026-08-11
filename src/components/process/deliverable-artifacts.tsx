"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PreviewProps = { className?: string };

/** Shared canvas — luminous surface, fills ~70% of card */
function ArtifactCanvas({
  className,
  children,
  tone = "default",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "cool" | "violet" | "emerald" | "code";
}) {
  const tones = {
    default:
      "from-[#2a3950] via-[#243247] to-[#1e2a3c]",
    cool: "from-[#2b3a52] via-[#243449] to-[#1d2b3d]",
    violet: "from-[#2c3552] via-[#252f45] to-[#1e2740]",
    emerald: "from-[#243a42] via-[#223647] to-[#1d2d3a]",
    code: "from-[#222d40] via-[#1c2636] to-[#171f2e]",
  };

  return (
    <div
      className={cn(
        "relative aspect-[16/11] w-full overflow-hidden",
        "bg-linear-to-br",
        tones[tone],
        className,
      )}
      aria-hidden
    >
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(85,123,255,0.14),transparent_55%)]" />
      <div className="relative z-[1] h-full p-3 sm:p-3.5">{children}</div>
    </div>
  );
}

function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[10px] border border-white/12 bg-[#121a26]/88 shadow-[0_10px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[2px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "success" | "warn" | "violet";
}) {
  const styles = {
    neutral: "border-white/10 bg-white/[0.06] text-white/55",
    accent: "border-accent/30 bg-accent/15 text-[#9db4ff]",
    success: "border-emerald-400/25 bg-emerald-500/12 text-emerald-300",
    warn: "border-amber-400/25 bg-amber-500/12 text-amber-200",
    violet: "border-violet-400/25 bg-violet-500/12 text-violet-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-1.5 py-0.5 text-[6px] font-medium tracking-wide",
        styles[tone],
      )}
    >
      {children}
    </span>
  );
}

/** 01 — Product requirements / project brief workspace */
export function PreviewDocuments({ className }: PreviewProps) {
  const reduce = useReducedMotion();
  return (
    <ArtifactCanvas className={className} tone="default">
      <div className="flex h-full gap-2">
        <aside className="hidden w-[26%] flex-col gap-1 rounded-[9px] border border-white/10 bg-[#0e1520]/80 p-2 sm:flex">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="text-[6.5px] font-semibold text-white/70">Northline</span>
          </div>
          {[
            { label: "Brief", on: true },
            { label: "Scope", on: false },
            { label: "Milestones", on: false },
            { label: "Approvals", on: false },
            { label: "Risks", on: false },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                "rounded-md px-1.5 py-1 text-[6.5px]",
                item.on
                  ? "bg-accent/18 font-medium text-[#b6c6ff]"
                  : "text-white/35",
              )}
            >
              {item.label}
            </div>
          ))}
          <div className="mt-auto space-y-1 border-t border-white/8 pt-2">
            <div className="flex justify-between text-[5.5px] text-white/35">
              <span>Progress</span>
              <span className="text-accent">68%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: reduce ? "68%" : "0%" }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </aside>

        <Panel className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="flex items-start justify-between gap-2 border-b border-white/8 px-2.5 py-2">
            <div className="min-w-0">
              <p className="truncate text-[8px] font-semibold tracking-tight text-white/92">
                Product Requirements
              </p>
              <p className="mt-0.5 text-[5.5px] text-white/35">
                Ledger Flow · Discovery · v1.4
              </p>
            </div>
            <div className="flex shrink-0 gap-1">
              <Chip tone="warn">Review</Chip>
              <Chip tone="accent">Owner: NL</Chip>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-2 p-2.5">
            <div className="space-y-1.5">
              <p className="text-[6px] font-medium tracking-wider text-white/40 uppercase">
                Scope
              </p>
              {[
                "Multi-entity payouts",
                "Role-based approvals",
                "Audit trail export",
              ].map((row) => (
                <div
                  key={row}
                  className="flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.03] px-1.5 py-1"
                >
                  <span className="size-1 shrink-0 rounded-full bg-accent/80" />
                  <span className="truncate text-[6px] text-white/65">{row}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <p className="text-[6px] font-medium tracking-wider text-white/40 uppercase">
                Milestones
              </p>
              {[
                { n: "M1", label: "Discovery", s: "Done" },
                { n: "M2", label: "IA + flows", s: "Active" },
                { n: "M3", label: "UI system", s: "Queued" },
              ].map((m) => (
                <div
                  key={m.n}
                  className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.03] px-1.5 py-1"
                >
                  <span className="text-[6px] text-white/60">
                    <span className="font-mono text-accent/80">{m.n}</span> {m.label}
                  </span>
                  <Chip tone={m.s === "Done" ? "success" : m.s === "Active" ? "accent" : "neutral"}>
                    {m.s}
                  </Chip>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-white/8 px-2.5 py-1.5">
            <div className="flex -space-x-1">
              {["#557BFF", "#45A99A", "#8B6CFF"].map((c) => (
                <span
                  key={c}
                  className="size-3 rounded-full border border-[#121a26]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-[5.5px] text-white/35">3 stakeholders · 2 approvals pending</span>
            <span className="ml-auto text-[5.5px] text-emerald-300/80">Decision log synced</span>
          </div>
        </Panel>
      </div>
    </ArtifactCanvas>
  );
}

/** 02 — Premium Figma-style responsive UX workspace */
export function PreviewWireframes({ className }: PreviewProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative aspect-[16/11] w-full overflow-hidden",
        "bg-linear-to-br from-[#2d3c54] via-[#253448] to-[#1d2a3c]",
        className,
      )}
      aria-hidden
    >
      {/* Blueprint grids */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(157,180,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(157,180,255,0.4) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(85,123,255,0.16),transparent_55%)]" />

      <div className="relative z-[1] flex h-full flex-col p-2 sm:p-2.5">
        {/* Workspace chrome */}
        <div className="mb-1.5 flex shrink-0 items-center gap-1.5">
          <span className="rounded border border-white/12 bg-[#1a2434]/95 px-1.5 py-0.5 text-[5.5px] font-medium tracking-wide text-[#9db4ff]">
            WIREFRAME
          </span>
          <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[5px] text-white/40">
            v1.4
          </span>
          <span className="hidden rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[5px] text-white/35 sm:inline">
            UX FLOW
          </span>
          <span className="ml-auto font-mono text-[5px] tracking-wider text-white/35">
            1440 → 768 → 390
          </span>
          <span className="rounded border border-accent/25 bg-accent/10 px-1.5 py-0.5 text-[5px] text-[#9db4ff]">
            3 BREAKPOINTS
          </span>
        </div>

        {/* Left annotations */}
        <div className="pointer-events-none absolute top-[34%] left-1.5 z-[5] hidden sm:block">
          <p className="origin-left -rotate-90 translate-y-8 whitespace-nowrap font-mono text-[5px] tracking-[0.16em] text-[#8fa3c7]/65">
            12 COL GRID
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-[16%] left-2 z-[5] hidden sm:block">
          <div className="flex items-center gap-0.5">
            <span className="h-px w-2.5 bg-[#557BFF]/50" />
            <span className="font-mono text-[5px] text-[#9db4ff]/75">24px</span>
            <span className="h-px w-2.5 bg-[#557BFF]/50" />
          </div>
          <p className="mt-0.5 font-mono text-[4.5px] tracking-wider text-white/25">GAP</p>
        </div>

        {/* Right annotations */}
        <div className="pointer-events-none absolute top-9 right-2.5 z-[5] hidden text-right sm:block">
          <p className="font-mono text-[5px] tracking-wider text-[#8fa3c7]/70">MAX 1200</p>
          <p className="mt-1 font-mono text-[5px] tracking-wider text-white/25">AUTO LAYOUT</p>
          <p className="font-mono text-[5px] tracking-wider text-white/25">STACK</p>
        </div>

        {/* Measurement */}
        <div className="pointer-events-none absolute top-[15%] left-[14%] z-[5] hidden w-[40%] items-center sm:flex">
          <span className="h-px flex-1 bg-[#557BFF]/40" />
          <span className="mx-1 whitespace-nowrap font-mono text-[5px] text-[#9db4ff]/75">
            ← 24px →
          </span>
          <span className="h-px flex-1 bg-[#557BFF]/40" />
        </div>

        {/* Connectors */}
        <svg
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-55 transition-opacity duration-300 group-hover:opacity-85"
          viewBox="0 0 320 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M172 78 C 198 78, 210 98, 232 112"
            stroke="rgba(85,123,255,0.55)"
            strokeWidth="0.9"
            strokeDasharray="3 2"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          />
          <motion.path
            d="M252 120 C 266 132, 274 150, 280 168"
            stroke="rgba(85,123,255,0.4)"
            strokeWidth="0.8"
            strokeDasharray="3 2"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          />
          <circle cx="232" cy="112" r="1.4" fill="rgba(85,123,255,0.55)" />
          <circle cx="280" cy="168" r="1.3" fill="rgba(85,123,255,0.45)" />
        </svg>

        {/* Frames */}
        <div className="relative z-[1] flex min-h-0 flex-1 items-end justify-center gap-2 sm:gap-2.5">
          {/* DESKTOP */}
          <div
            className={cn(
              "relative z-[3] flex h-full w-[58%] flex-col overflow-hidden rounded-[9px]",
              "border border-[#5a6f90]/50 bg-[#1a2436]",
              "shadow-[0_16px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]",
              "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              !reduce && "group-hover:-translate-y-0.5",
            )}
          >
            <div className="flex shrink-0 items-center gap-1 border-b border-white/10 bg-[#222e42] px-1.5 py-1">
              <span className="size-1 rounded-full bg-[#6b7c96]" />
              <span className="size-1 rounded-full bg-[#5a6b84]" />
              <span className="size-1 rounded-full bg-[#4a5a72]" />
              <span className="ml-1 font-mono text-[5px] text-[#8fa3c7]/85">Desktop · 1440</span>
              <span className="ml-auto rounded bg-accent/15 px-1 py-px text-[4.5px] text-[#9db4ff]">
                Responsive
              </span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-[3px] overflow-hidden bg-[#151e2d] p-1.5">
              {/* Nav */}
              <div className="flex shrink-0 items-center gap-1 rounded-[4px] border border-[#3d4e68]/55 bg-[#1e2a3d] px-1.5 py-1">
                <div className="h-[5px] w-5 rounded-[2px] bg-[#8fa3c7]" />
                <div className="ml-0.5 hidden flex-1 items-center justify-center gap-1.5 sm:flex">
                  {["Product", "Solutions", "Pricing", "Docs"].map((label) => (
                    <span key={label} className="text-[4.5px] text-[#a8bad4]">
                      {label}
                    </span>
                  ))}
                </div>
                <span className="ml-auto rounded-[3px] bg-[#557BFF] px-1.5 py-0.5 text-[4.5px] font-medium text-white">
                  Get started
                </span>
              </div>

              {/* Hero */}
              <div className="grid shrink-0 grid-cols-[1.15fr_0.85fr] gap-1 rounded-[5px] border border-[#3d4e68]/50 bg-[#1c283b] p-1.5">
                <div className="flex flex-col justify-center gap-[3px]">
                  <span className="w-fit rounded-[2px] bg-accent/20 px-1 py-px text-[4px] tracking-wider text-[#9db4ff]">
                    PLATFORM
                  </span>
                  <div className="h-[5px] w-[92%] rounded-[2px] bg-[#d0dae9]" />
                  <div className="h-[5px] w-[72%] rounded-[2px] bg-[#b8c6dc]" />
                  <div className="mt-0.5 h-[3px] w-full rounded-[1px] bg-[#7d90b0]/75" />
                  <div className="h-[3px] w-[88%] rounded-[1px] bg-[#7d90b0]/55" />
                  <div className="mt-1 flex gap-1">
                    <span className="rounded-[3px] bg-[#557BFF] px-1.5 py-0.5 text-[4.5px] font-medium text-white">
                      Start project
                    </span>
                    <span className="rounded-[3px] border border-[#5a6f90]/65 px-1.5 py-0.5 text-[4.5px] text-[#b0c0d8]">
                      View work
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[4px] border border-[#4a5d7a]/55 bg-[#26354c]">
                  <div className="absolute inset-[14%] rounded-[3px] border border-dashed border-[#7d90b0]/55 bg-[#31435e]/85" />
                  <div className="absolute right-1 bottom-1 left-1 h-1 rounded-[1px] bg-[#557BFF]/40" />
                  <span className="absolute top-1 left-1 font-mono text-[3.5px] text-[#8fa3c7]/80">
                    IMG
                  </span>
                </div>
              </div>

              {/* Trust */}
              <div className="flex shrink-0 items-center gap-1 rounded-[4px] border border-[#3d4e68]/40 bg-[#1a2536] px-1.5 py-1">
                <span className="shrink-0 text-[3.5px] tracking-wider text-[#7d90b0]">TRUSTED BY</span>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="h-[4px] flex-1 rounded-[2px] bg-[#5a6f90]/60" />
                ))}
              </div>

              {/* Features 3-col */}
              <div className="grid shrink-0 grid-cols-3 gap-1">
                {["Discover", "Design", "Ship"].map((title, i) => (
                  <div
                    key={title}
                    className="rounded-[4px] border border-[#3d4e68]/50 bg-[#1e2a3d] p-1"
                  >
                    <div
                      className={cn(
                        "mb-0.5 flex size-2.5 items-center justify-center rounded-[2px]",
                        i === 0 ? "bg-accent/35" : "bg-[#3f536f]",
                      )}
                    >
                      <span className="size-1 rounded-[1px] bg-[#b6c6ff]" />
                    </div>
                    <p className="text-[5px] font-medium text-[#d4deee]">{title}</p>
                    <div className="mt-0.5 space-y-0.5">
                      <div className="h-[2px] w-full rounded-[1px] bg-[#6b7f9e]/65" />
                      <div className="h-[2px] w-[78%] rounded-[1px] bg-[#6b7f9e]/45" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashboard */}
              <div className="mt-auto grid min-h-0 grid-cols-[0.9fr_1.1fr] gap-1 rounded-[4px] border border-[#3d4e68]/45 bg-[#1a2536] p-1">
                <div className="rounded-[3px] border border-[#3d4e68]/45 bg-[#222f44] p-1">
                  <p className="text-[4px] text-[#8fa3c7]">Metrics</p>
                  <p className="font-mono text-[7px] leading-none text-[#d4deee]">98.4%</p>
                  <div className="mt-0.5 flex h-3 items-end gap-px">
                    {[35, 50, 40, 70, 55, 80, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-[0.5px] bg-accent/50"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-0.5 rounded-[3px] border border-[#3d4e68]/45 bg-[#222f44] p-1">
                  {["Onboarding flow", "Checkout path", "Settings IA"].map((row) => (
                    <div key={row} className="flex items-center gap-1">
                      <span className="size-1 rounded-full bg-[#557BFF]/80" />
                      <span className="truncate text-[4.5px] text-[#aebcd4]">{row}</span>
                      <span className="ml-auto h-[2px] w-4 rounded-[1px] bg-[#5a6f90]/65" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TABLET */}
          <div
            className={cn(
              "relative z-[1] hidden h-[88%] w-[22%] flex-col overflow-hidden rounded-[8px] sm:flex",
              "border border-[#4e6180]/45 bg-[#182233]",
              "shadow-[0_10px_24px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)]",
              "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75",
              !reduce && "group-hover:-translate-y-1",
            )}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-white/8 bg-[#1f2b3e] px-1 py-0.5">
              <span className="font-mono text-[4.5px] text-[#8fa3c7]/80">Tablet · 768</span>
              <span className="text-[4px] text-white/30">2-col</span>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-[3px] overflow-hidden bg-[#141c2a] p-1">
              <div className="flex shrink-0 items-center gap-0.5 rounded-[3px] border border-[#3d4e68]/50 bg-[#1c283b] px-1 py-0.5">
                <div className="h-[4px] w-3.5 rounded-[1px] bg-[#8fa3c7]" />
                <div className="ml-auto flex gap-0.5">
                  <span className="h-[3px] w-2 rounded-[1px] bg-[#6b7f9e]/70" />
                  <span className="h-[3px] w-2 rounded-[1px] bg-[#6b7f9e]/70" />
                </div>
                <span className="rounded-[2px] bg-[#557BFF] px-1 py-px text-[3.5px] text-white">
                  CTA
                </span>
              </div>

              <div className="shrink-0 rounded-[4px] border border-[#3d4e68]/50 bg-[#1c283b] p-1">
                <span className="text-[3.5px] tracking-wider text-[#9db4ff]/85">PLATFORM</span>
                <div className="mt-0.5 h-[4px] w-[90%] rounded-[1px] bg-[#c5d0e3]" />
                <div className="mt-0.5 h-[4px] w-[68%] rounded-[1px] bg-[#a8bad4]" />
                <div className="mt-1 h-5 rounded-[3px] border border-dashed border-[#6b7f9e]/55 bg-[#26354c]" />
                <div className="mt-1 flex gap-0.5">
                  <span className="rounded-[2px] bg-[#557BFF] px-1 py-px text-[3.5px] text-white">
                    Start
                  </span>
                  <span className="rounded-[2px] border border-[#5a6f90]/55 px-1 py-px text-[3.5px] text-[#aebcd4]">
                    Work
                  </span>
                </div>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-0.5">
                {["Discover", "Design"].map((t) => (
                  <div
                    key={t}
                    className="rounded-[3px] border border-[#3d4e68]/50 bg-[#1e2a3d] p-0.5"
                  >
                    <div className="mb-0.5 size-1.5 rounded-[1px] bg-accent/40" />
                    <p className="text-[4px] text-[#d4deee]">{t}</p>
                    <div className="mt-0.5 h-[2px] w-full rounded-[1px] bg-[#6b7f9e]/55" />
                    <div className="mt-0.5 h-[2px] w-[70%] rounded-[1px] bg-[#6b7f9e]/40" />
                  </div>
                ))}
              </div>
              <div className="shrink-0 rounded-[3px] border border-[#3d4e68]/45 bg-[#1e2a3d] p-0.5">
                <p className="text-[4px] text-[#d4deee]">Ship</p>
                <div className="mt-0.5 h-[2px] w-[82%] rounded-[1px] bg-[#6b7f9e]/50" />
              </div>

              <div className="mt-auto rounded-[3px] border border-[#3d4e68]/40 bg-[#1a2536] p-0.5">
                <div className="flex h-3 items-end gap-px">
                  {[40, 60, 45, 75, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[0.5px] bg-accent/45"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div
            className={cn(
              "relative z-[4] flex h-[82%] w-[19%] flex-col overflow-hidden rounded-[10px]",
              "border border-[#5a6f90]/55 bg-[#1a2436]",
              "shadow-[0_14px_28px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.07)]",
              "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100",
              !reduce && "group-hover:-translate-y-1.5",
            )}
          >
            <div className="mx-auto mt-1 h-[2px] w-5 shrink-0 rounded-full bg-[#4a5d7a]" />
            <div className="shrink-0 px-1 pt-0.5">
              <span className="font-mono text-[3.5px] text-[#8fa3c7]/75">Mobile · 390</span>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-[3px] overflow-hidden bg-[#141c2a] p-1">
              <div className="flex shrink-0 items-center justify-between rounded-[3px] border border-[#3d4e68]/50 bg-[#1e2a3d] px-1 py-0.5">
                <div className="h-[3.5px] w-3 rounded-[1px] bg-[#8fa3c7]" />
                <div className="flex flex-col gap-[1.5px]">
                  <span className="h-[1px] w-2.5 bg-[#b0c0d8]" />
                  <span className="h-[1px] w-2.5 bg-[#b0c0d8]" />
                  <span className="h-[1px] w-2.5 bg-[#b0c0d8]" />
                </div>
              </div>

              <div className="shrink-0 rounded-[4px] border border-[#3d4e68]/50 bg-[#1c283b] p-1">
                <span className="text-[3px] tracking-wider text-[#9db4ff]">PLATFORM</span>
                <div className="mt-0.5 h-[3.5px] w-full rounded-[1px] bg-[#d0dae9]" />
                <div className="mt-0.5 h-[3.5px] w-[80%] rounded-[1px] bg-[#b8c6dc]" />
                <div className="mt-0.5 h-[2px] w-full rounded-[1px] bg-[#7d90b0]/60" />
                <div className="mt-1 h-4 rounded-[3px] border border-dashed border-[#6b7f9e]/55 bg-[#26354c]" />
                <span className="mt-1 block rounded-[3px] bg-[#557BFF] py-0.5 text-center text-[4px] font-medium text-white">
                  Start project
                </span>
              </div>

              {["Discover", "Design", "Ship"].map((t, i) => (
                <div
                  key={t}
                  className="flex shrink-0 items-center gap-1 rounded-[3px] border border-[#3d4e68]/45 bg-[#1e2a3d] px-1 py-0.5"
                >
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-[1px]",
                      i === 0 ? "bg-accent/55" : "bg-[#4a5d7a]",
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[4px] text-[#d4deee]">{t}</p>
                    <div className="mt-px h-[1.5px] w-[72%] rounded-[1px] bg-[#6b7f9e]/50" />
                  </div>
                </div>
              ))}

              <div className="mt-auto shrink-0 rounded-[3px] border border-[#3d4e68]/40 bg-[#1a2536] p-0.5">
                <div className="flex justify-between px-0.5">
                  <span className="text-[3px] text-[#7d90b0]">IA</span>
                  <span className="font-mono text-[3px] text-[#9db4ff]/75">STACK</span>
                </div>
                <div className="mt-0.5 h-[2px] w-full rounded-[1px] bg-[#5a6f90]/55" />
                <div className="mt-0.5 h-[2px] w-[62%] rounded-[1px] bg-[#5a6f90]/40" />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-2 bottom-1 left-2 z-[5] flex items-center justify-between">
          <span className="font-mono text-[4.5px] tracking-wider text-[#8fa3c7]/55">
            BREAKPOINT · RESPONSIVE TRANSFORM
          </span>
          <span className="hidden font-mono text-[4.5px] text-white/25 sm:inline">
            Desktop / Tablet / Mobile
          </span>
        </div>
      </div>
    </div>
  );
}

/** 03 — Design system board */
export function PreviewUiKit({ className }: PreviewProps) {
  const reduce = useReducedMotion();
  const colors = [
    { name: "Primary", c: "#557BFF" },
    { name: "Accent", c: "#8B6CFF" },
    { name: "Success", c: "#3DBF8A" },
    { name: "Warning", c: "#E0A84E" },
    { name: "Neutral", c: "#8F9BAA" },
  ];

  return (
    <ArtifactCanvas className={className} tone="violet">
      <Panel className="flex h-full flex-col overflow-hidden p-2">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[7px] font-semibold text-white/85">Design System · v2.1</p>
          <Chip tone="violet">Tokens synced</Chip>
        </div>

        <div className="grid flex-1 grid-cols-12 gap-1.5">
          {/* Typography */}
          <div className="col-span-4 rounded-lg border border-white/8 bg-white/[0.03] p-1.5">
            <p className="text-[5.5px] tracking-wider text-white/35 uppercase">Typography</p>
            <p className="mt-1 font-display text-[22px] leading-none tracking-tight text-white/92">
              Aa
            </p>
            <p className="mt-1 text-[5.5px] text-white/40">Plus Jakarta</p>
            <div className="mt-1.5 space-y-0.5">
              <div className="flex items-center justify-between text-[5px] text-white/45">
                <span>Display</span>
                <span className="font-mono">32/36</span>
              </div>
              <div className="flex items-center justify-between text-[5px] text-white/45">
                <span>Body</span>
                <span className="font-mono">16/24</span>
              </div>
              <div className="flex items-center justify-between text-[5px] text-white/45">
                <span>Caption</span>
                <span className="font-mono">12/16</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="col-span-8 rounded-lg border border-white/8 bg-white/[0.03] p-1.5">
            <p className="text-[5.5px] tracking-wider text-white/35 uppercase">Color tokens</p>
            <div className="mt-1.5 flex gap-1.5">
              {colors.map((sw, i) => (
                <div key={sw.name} className="flex-1">
                  <motion.div
                    className="aspect-square rounded-md border border-white/10"
                    style={{ background: sw.c }}
                    animate={
                      reduce || i !== 0
                        ? undefined
                        : { boxShadow: ["0 0 0 transparent", "0 0 10px rgba(85,123,255,0.35)", "0 0 0 transparent"] }
                    }
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                  <p className="mt-0.5 truncate text-[5px] text-white/45">{sw.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Components */}
          <div className="col-span-12 flex flex-wrap items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] p-1.5">
            <span className="rounded-md bg-accent px-2 py-1 text-[6px] font-medium text-white">
              Primary
            </span>
            <span className="rounded-md border border-white/18 px-2 py-1 text-[6px] text-white/65">
              Secondary
            </span>
            <span className="h-5 min-w-[56px] rounded-md border border-white/12 bg-[#0e1520] px-1.5 text-[6px] leading-5 text-white/30">
              Input
            </span>
            <span className="relative h-3 w-5 rounded-full bg-accent/55">
              <span className="absolute top-0.5 right-0.5 size-2 rounded-full bg-white shadow" />
            </span>
            <Chip tone="success">Badge</Chip>
            <Chip tone="accent">New</Chip>
            <div className="ml-auto hidden items-center gap-1 sm:flex">
              <span className="text-[5px] text-white/30">Radius</span>
              <span className="rounded border border-white/10 px-1 text-[5px] text-white/45">8</span>
              <span className="rounded border border-white/10 px-1 text-[5px] text-white/45">12</span>
              <span className="rounded border border-white/10 px-1 text-[5px] text-white/45">16</span>
            </div>
          </div>

          {/* Spacing */}
          <div className="col-span-12 flex items-end gap-1 rounded-lg border border-white/8 bg-white/[0.03] px-2 py-1.5">
            <span className="mr-1 self-center text-[5px] tracking-wider text-white/30 uppercase">
              Space
            </span>
            {[4, 8, 12, 16, 24, 32].map((n) => (
              <div key={n} className="flex flex-col items-center gap-0.5">
                <div
                  className="rounded-sm bg-accent/45"
                  style={{ width: Math.max(4, n / 2), height: Math.max(6, n / 1.8) }}
                />
                <span className="font-mono text-[4.5px] text-white/35">{n}</span>
              </div>
            ))}
            <div className="ml-auto hidden rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 sm:block">
              <div className="h-1 w-10 rounded-sm bg-white/15" />
              <div className="mt-1 h-0.5 w-7 rounded-sm bg-white/10" />
            </div>
          </div>
        </div>
      </Panel>
    </ArtifactCanvas>
  );
}

/** 04 — Three premium mobile prototype screens */
export function PreviewPrototype({ className }: PreviewProps) {
  const reduce = useReducedMotion();
  const phones = [
    {
      title: "Home",
      body: (
        <>
          <div className="mb-1 flex items-center justify-between">
            <div className="h-1 w-8 rounded-sm bg-white/30" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <div className="mb-1 rounded-md bg-linear-to-br from-accent/35 to-violet-500/25 p-1.5">
            <p className="text-[6px] font-semibold text-white/90">Good morning</p>
            <p className="text-[5px] text-white/50">3 actions waiting</p>
          </div>
          <div className="space-y-1">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] p-1"
              >
                <span className="size-3 rounded bg-accent/30" />
                <div className="flex-1">
                  <div className="h-1 w-[70%] rounded-sm bg-white/25" />
                  <div className="mt-0.5 h-0.5 w-[45%] rounded-sm bg-white/12" />
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Dashboard",
      body: (
        <>
          <p className="mb-1 text-[6px] font-semibold text-white/85">Overview</p>
          <div className="mb-1 grid grid-cols-2 gap-1">
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-1">
              <p className="font-mono text-[8px] text-accent">$24.8k</p>
              <p className="text-[4.5px] text-white/35">Revenue</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-1">
              <p className="font-mono text-[8px] text-emerald-300">+12%</p>
              <p className="text-[4.5px] text-white/35">Growth</p>
            </div>
          </div>
          <div className="flex h-8 items-end gap-0.5 rounded-md border border-white/8 bg-white/[0.03] px-1 pb-1">
            {[40, 55, 35, 70, 50, 85, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/50"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Checkout",
      body: (
        <>
          <p className="mb-1 text-[6px] font-semibold text-white/85">Confirm</p>
          <div className="mb-1 space-y-1">
            <div className="h-1.5 rounded-sm bg-white/12" />
            <div className="h-1.5 rounded-sm bg-white/12" />
            <div className="flex justify-between text-[5px] text-white/45">
              <span>Total</span>
              <span className="font-mono text-white/75">$148.00</span>
            </div>
          </div>
          <div className="mt-auto rounded-md bg-accent py-1 text-center text-[6px] font-medium text-white">
            Pay now
          </div>
        </>
      ),
    },
  ];

  return (
    <ArtifactCanvas className={className} tone="default">
      <svg
        className="pointer-events-none absolute inset-x-[16%] top-[36%] z-[2] h-6 w-[68%]"
        viewBox="0 0 100 16"
        fill="none"
      >
        <motion.path
          d="M5 8 H 45"
          stroke="rgba(85,123,255,0.5)"
          strokeWidth="0.7"
          strokeDasharray="2 1.5"
          animate={reduce ? undefined : { strokeDashoffset: [0, -8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M55 8 H 95"
          stroke="rgba(139,108,255,0.45)"
          strokeWidth="0.7"
          strokeDasharray="2 1.5"
          animate={reduce ? undefined : { strokeDashoffset: [0, -8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative flex h-full items-center justify-center gap-2.5">
        {phones.map((phone, i) => (
          <div
            key={phone.title}
            className={cn(
              "flex h-[92%] w-[30%] flex-col rounded-[12px] border border-white/16 bg-[#0a101a] p-1.5 shadow-[0_14px_32px_rgba(0,0,0,0.4)] transition-transform duration-300",
              i === 1 && "z-[1] scale-[1.04]",
              "group-hover:-translate-y-1",
            )}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="mx-auto mb-1 h-0.5 w-5 rounded-full bg-white/20" />
            <div className="mb-1 flex items-center justify-between px-0.5">
              <span className="text-[5px] text-white/30">{phone.title}</span>
              <span className="size-1 rounded-full bg-emerald-400/70" />
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{phone.body}</div>
          </div>
        ))}
      </div>
    </ArtifactCanvas>
  );
}

/** 05 — Premium IDE / source code */
export function PreviewSourceCode({ className }: PreviewProps) {
  const reduce = useReducedMotion();
  const lines: { tone: string; text: string }[] = [
    { tone: "text-white/25", text: "1  import { createClient } from '@/lib/api'" },
    { tone: "text-white/25", text: "2  import { ProductCard } from '@/components'" },
    { tone: "text-white/25", text: "3" },
    { tone: "text-[#8B6CFF]", text: "4  export async function ProductPage() {" },
    { tone: "text-white/50", text: "5    const data = await createClient().list()" },
    { tone: "text-white/50", text: "6    return (" },
    { tone: "text-[#45A99A]", text: "7      <section className=\"grid\">" },
    { tone: "text-white/55", text: "8        {data.map((item) => (" },
    { tone: "text-[#557BFF]", text: "9          <ProductCard key={item.id} {...item} />" },
    { tone: "text-white/55", text: "10       ))}" },
    { tone: "text-[#45A99A]", text: "11     </section>" },
    { tone: "text-white/50", text: "12   )" },
    { tone: "text-[#8B6CFF]", text: "13 }" },
  ];

  return (
    <ArtifactCanvas className={className} tone="code">
      <div className="flex h-full overflow-hidden rounded-[10px] border border-white/12 bg-[#0a0f18] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
        <aside className="hidden w-[31%] border-r border-white/8 bg-[#0c121c] p-2 sm:block">
          <p className="mb-1.5 text-[5.5px] tracking-wider text-white/30 uppercase">
            Explorer
          </p>
          {[
            { t: "src/", d: 0 },
            { t: "components/", d: 1 },
            { t: "pages/", d: 1 },
            { t: "lib/", d: 1 },
            { t: "hooks/", d: 1 },
            { t: "services/", d: 1 },
            { t: "App.tsx", d: 1, on: true },
          ].map((f) => (
            <div
              key={f.t}
              className={cn(
                "truncate py-[2px] font-mono text-[6px]",
                f.on ? "rounded bg-accent/15 text-accent" : "text-white/40",
              )}
              style={{ paddingLeft: 4 + f.d * 6 }}
            >
              {f.t}
            </div>
          ))}
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-1 border-b border-white/8 bg-[#0c121c] px-2 py-1">
            <span className="rounded-t border border-b-0 border-white/10 bg-[#121a26] px-2 py-0.5 text-[6px] text-white/70">
              App.tsx
            </span>
            <span className="px-2 py-0.5 text-[6px] text-white/25">ProductCard.tsx</span>
            <span className="px-2 py-0.5 text-[6px] text-white/25">api.ts</span>
          </div>
          <div className="relative flex-1 overflow-hidden p-2 font-mono text-[6.5px] leading-[1.45]">
            {lines.map((line) => (
              <div key={line.text} className={cn("truncate", line.tone)}>
                {line.text}
              </div>
            ))}
            {!reduce && (
              <motion.span
                className="absolute top-[7.2rem] left-[3.6rem] h-2.5 w-px bg-accent"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.05, repeat: Infinity }}
              />
            )}
          </div>
          <div className="flex items-center gap-2 border-t border-white/8 px-2 py-1">
            <Chip tone="accent">TypeScript</Chip>
            <Chip tone="neutral">React</Chip>
            <Chip tone="success">Build passed</Chip>
            <span className="ml-auto font-mono text-[5px] text-white/30">Ln 9, Col 18</span>
          </div>
        </div>
      </div>
    </ArtifactCanvas>
  );
}

/** 06 — QA / automated testing dashboard */
export function PreviewTestReports({ className }: PreviewProps) {
  const reduce = useReducedMotion();
  const checks = [
    { label: "Responsive", ok: true },
    { label: "Authentication", ok: true },
    { label: "Forms", ok: true },
    { label: "Accessibility", ok: true },
    { label: "Performance", ok: true },
    { label: "API", ok: true },
  ];

  return (
    <ArtifactCanvas className={className} tone="emerald">
      <Panel className="flex h-full flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/8 px-2.5 py-2">
          <div>
            <p className="text-[8px] font-semibold text-white/90">QA Dashboard</p>
            <p className="text-[5.5px] text-white/35">Suite · release-candidate · 14m ago</p>
          </div>
          <Chip tone="success">Ready to ship</Chip>
        </div>

        <div className="grid grid-cols-3 gap-1.5 px-2.5 pt-2">
          {[
            { label: "Passed", value: "124", tone: "text-emerald-300", ring: "border-emerald-400/25" },
            { label: "Warnings", value: "3", tone: "text-amber-200", ring: "border-amber-400/20" },
            { label: "Failed", value: "0", tone: "text-white/55", ring: "border-white/10" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-lg border bg-white/[0.03] px-2 py-1.5",
                stat.ring,
              )}
            >
              <p className={cn("font-mono text-[13px] font-semibold leading-none", stat.tone)}>
                {stat.value}
              </p>
              <p className="mt-1 text-[5.5px] text-white/35">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex-1 space-y-1 px-2.5 pb-1">
          {checks.map((c, i) => (
            <motion.div
              key={c.label}
              className="flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.025] px-1.5 py-1"
              initial={reduce ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, duration: 0.3 }}
            >
              <span className="flex size-3 items-center justify-center rounded-full bg-emerald-500/20 text-[7px] text-emerald-300">
                ✓
              </span>
              <span className="text-[6.5px] text-white/65">{c.label}</span>
              <span className="ml-auto h-1 w-10 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  className="block h-full rounded-full bg-emerald-400/75"
                  initial={{ width: reduce ? "100%" : "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                />
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-white/8 px-2.5 py-1.5">
          <span className="text-[5.5px] text-white/30">Coverage</span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] rounded-full bg-linear-to-r from-accent to-emerald-400" />
          </div>
          <span className="font-mono text-[5.5px] text-white/45">94%</span>
        </div>
      </Panel>
    </ArtifactCanvas>
  );
}

export const DELIVERABLE_PREVIEWS = [
  PreviewDocuments,
  PreviewWireframes,
  PreviewUiKit,
  PreviewPrototype,
  PreviewSourceCode,
  PreviewTestReports,
] as const;
