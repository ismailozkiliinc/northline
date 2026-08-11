"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ProcessStageVisual } from "@/components/process/process-stage-visuals";
import type { ProcessStage } from "@/components/process/types";
import { cn } from "@/lib/utils";

const AUTO_MS = 4500;

/** Soft constellation positions for satellite cards (desktop) — % of board */
const ORBIT: { left: string; top: string }[] = [
  { left: "0%", top: "2%" },
  { left: "78%", top: "0%" },
  { left: "82%", top: "28%" },
  { left: "80%", top: "58%" },
  { left: "52%", top: "84%" },
  { left: "4%", top: "78%" },
  { left: "-2%", top: "38%" },
  { left: "34%", top: "-2%" },
];

function useIsDesktop() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
}

function scrollToStage(index: number) {
  const el = document.getElementById(`process-stage-${String(index + 1).padStart(2, "0")}`);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTimeline() {
  document.getElementById("process-timeline")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function ProcessHero() {
  const t = useTranslations("processPage");
  const stages = t.raw("stages") as ProcessStage[];
  const trust = t.raw("hero.trust") as string[];
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const gradientId = useId().replace(/:/g, "");

  const go = useCallback(
    (index: number) => {
      setActive(((index % stages.length) + stages.length) % stages.length);
    },
    [stages.length],
  );

  useEffect(() => {
    if (reduce || !isDesktop || paused || stages.length === 0) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % stages.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduce, isDesktop, paused, stages.length]);

  const stage = stages[active];
  if (!stage) return null;

  const satellites = stages
    .map((s, i) => ({ stage: s, index: i }))
    .filter(({ index }) => index !== active);

  return (
    <section
      className="noise relative isolate overflow-hidden border-b border-white/8"
      style={{
        minHeight: "clamp(760px, 88vh, 900px)",
        background:
          "radial-gradient(circle at 78% 42%, rgba(85,123,255,0.1), transparent 45%), #172131",
      }}
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 12% 70%, rgba(255,255,255,0.03), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-[0.35]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, #192534)",
        }}
        aria-hidden
      />

      <div className="container-wide relative grid h-full min-h-[inherit] grid-cols-1 items-start pt-[clamp(7.5rem,14vh,11.25rem)] pb-14 lg:grid-cols-12 lg:gap-x-[4.5rem] lg:pb-16">
        {/* LEFT — ~42% / 5 cols */}
        <div className="lg:col-span-5">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] tracking-[0.28em] text-accent uppercase"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-[14ch] font-display text-[clamp(2.15rem,4.2vw,3.55rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-balance whitespace-pre-line"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted md:text-base"
          >
            {t("hero.body")}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/proje-baslat">{t("hero.cta")}</Link>
            </Button>
            <Button size="lg" variant="secondary" type="button" onClick={scrollToTimeline}>
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
          >
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-fg/80">
                <span className="size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT — ~58% / 7 cols */}
        <div className="mt-10 w-full lg:col-span-7 lg:mt-0 lg:min-h-[520px]">
          {/* Desktop journey board */}
          <div
            ref={boardRef}
            className="relative hidden h-full min-h-[520px] w-full lg:block"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Soft connectors */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(91,124,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(91,124,255,0.04)" />
                </linearGradient>
              </defs>
              {ORBIT.slice(0, satellites.length).map((pos, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="48"
                  x2={parseFloat(pos.left) + 8}
                  y2={parseFloat(pos.top) + 5}
                  stroke={`url(#${gradientId})`}
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* Active glow */}
            <div
              className="pointer-events-none absolute top-[28%] left-[22%] h-[52%] w-[56%] rounded-full opacity-70 blur-3xl transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,116,255,0.28) 0%, transparent 68%)",
              }}
              aria-hidden
            />

            {/* Satellite cards */}
            {satellites.map(({ stage: s, index }, orbitIndex) => {
              const pos = ORBIT[orbitIndex % ORBIT.length];
              return (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => {
                    go(index);
                    scrollToStage(index);
                  }}
                  onMouseEnter={() => go(index)}
                  className={cn(
                    "absolute z-[1] w-[min(148px,28%)] rounded-xl border border-white/10 bg-surface/80 px-3 py-2.5 text-left backdrop-blur-md transition-all duration-300",
                    "hover:border-white/20 hover:bg-surface-elevated/95 hover:text-fg",
                    "text-fg/45",
                  )}
                  style={{ left: pos.left, top: pos.top }}
                >
                  <span className="font-mono text-[10px] text-accent/60">{s.n}</span>
                  <p className="mt-0.5 line-clamp-2 font-display text-[11px] font-semibold leading-snug">
                    {s.title}
                  </p>
                </button>
              );
            })}

            {/* Center active card */}
            <div className="absolute top-1/2 left-1/2 z-[2] w-[min(100%,400px)] -translate-x-1/2 -translate-y-[48%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.n}
                  initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-2xl border border-accent/30 bg-surface/95 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-md"
                >
                  <div className="border-b border-white/8 px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-sm text-accent">{stage.n}</p>
                        <h2 className="mt-0.5 font-display text-lg font-semibold tracking-tight text-fg md:text-xl">
                          {stage.title}
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => scrollToStage(active)}
                        className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] tracking-wide text-muted uppercase transition hover:border-accent/40 hover:text-fg"
                      >
                        {t("hero.openStep")}
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <ProcessStageVisual art={stage.art} />
                  </div>

                  <dl className="mt-2.5 grid grid-cols-2 gap-px bg-white/5 p-px">
                    {(
                      [
                        ["fromYou", stage.fromYou],
                        ["fromUs", stage.fromUs],
                        ["output", stage.output],
                        ["approval", stage.approval],
                      ] as const
                    ).map(([key, value]) => (
                      <div key={key} className="bg-surface px-3 py-2.5">
                        <dt className="text-[9px] tracking-[0.16em] text-muted uppercase">
                          {t(`hero.${key}`)}
                        </dt>
                        <dd className="mt-1 text-[11px] leading-snug text-fg/90 line-clamp-2">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="mt-4 flex justify-center gap-1.5" aria-hidden>
                {stages.map((s, i) => (
                  <button
                    key={s.n}
                    type="button"
                    aria-label={s.title}
                    onClick={() => go(i)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      i === active ? "w-5 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: active card + horizontal stage scroller */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={stage.n}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-2xl border border-accent/25 bg-surface/95 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="p-4">
                  <p className="font-mono text-sm text-accent">{stage.n}</p>
                  <h2 className="mt-1 font-display text-lg font-semibold tracking-tight">
                    {stage.title}
                  </h2>
                  <div className="mt-3 overflow-hidden rounded-xl">
                    <ProcessStageVisual art={stage.art} />
                  </div>
                  <dl className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {(
                      [
                        ["fromYou", stage.fromYou],
                        ["fromUs", stage.fromUs],
                        ["output", stage.output],
                        ["approval", stage.approval],
                      ] as const
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-xl border border-white/8 bg-white/[0.03] p-3"
                      >
                        <dt className="text-[9px] tracking-[0.16em] text-muted uppercase">
                          {t(`hero.${key}`)}
                        </dt>
                        <dd className="mt-1 text-[12px] leading-snug text-fg/90">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="-mx-1 mt-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-2 px-1">
                {stages.map((s, i) => (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => {
                      go(i);
                      scrollToStage(i);
                    }}
                    className={cn(
                      "w-[9.5rem] shrink-0 rounded-xl border px-3 py-2.5 text-left transition",
                      i === active
                        ? "border-accent/40 bg-accent/10 text-fg"
                        : "border-white/10 bg-surface/85 text-fg/55",
                    )}
                  >
                    <span className="font-mono text-[10px] text-accent/70">{s.n}</span>
                    <p className="mt-0.5 line-clamp-2 font-display text-[11px] font-semibold leading-snug">
                      {s.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
