"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const visuals = [
  // 01 discovery
  <svg key="1" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    <circle cx="80" cy="100" r="36" fill="#5b7cff" opacity="0.25" />
    <circle cx="120" cy="100" r="36" fill="#7c6af2" opacity="0.2" />
    <rect x="170" y="60" width="110" height="10" rx="5" fill="#fff" opacity="0.2" />
    <rect x="170" y="82" width="90" height="8" rx="4" fill="#fff" opacity="0.12" />
    <rect x="170" y="100" width="100" height="8" rx="4" fill="#fff" opacity="0.12" />
    <rect x="170" y="130" width="70" height="24" rx="12" fill="#5b7cff" opacity="0.7" />
  </svg>,
  // 02 scope
  <svg key="2" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x="28" y={36 + i * 36} width="264" height="28" rx="8" fill="#fff" opacity={0.06 + i * 0.03} />
    ))}
    <rect x="40" y="44" width="40" height="12" rx="6" fill="#5b7cff" />
  </svg>,
  // 03 research
  <svg key="3" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    <rect x="24" y="30" width="120" height="140" rx="12" fill="#1a2130" stroke="#ffffff18" />
    <rect x="160" y="30" width="136" height="64" rx="12" fill="#1a2130" stroke="#ffffff18" />
    <rect x="160" y="106" width="136" height="64" rx="12" fill="#1a2130" stroke="#ffffff18" />
  </svg>,
  // 04 wireframe
  <svg key="4" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    <rect x="24" y="24" width="272" height="24" rx="4" fill="none" stroke="#5b7cff66" strokeDasharray="4 4" />
    <rect x="24" y="60" width="160" height="116" rx="4" fill="none" stroke="#ffffff33" strokeDasharray="4 4" />
    <rect x="196" y="60" width="100" height="52" rx="4" fill="none" stroke="#ffffff33" strokeDasharray="4 4" />
    <rect x="196" y="124" width="100" height="52" rx="4" fill="none" stroke="#ffffff33" strokeDasharray="4 4" />
  </svg>,
  // 05 ui
  <svg key="5" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#0c1018" rx="16" />
    <rect x="20" y="20" width="280" height="160" rx="12" fill="#171d2a" />
    <rect x="36" y="36" width="100" height="14" rx="7" fill="#5b7cff" />
    <rect x="36" y="64" width="180" height="10" rx="5" fill="#fff" opacity="0.15" />
    <rect x="36" y="90" width="248" height="70" rx="10" fill="#5b7cff22" />
  </svg>,
  // 06 code
  <svg key="6" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#0a0e14" rx="16" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x="32" y={36 + i * 22} width={80 + (i % 3) * 40} height="8" rx="4" fill={i % 2 ? "#5b7cff99" : "#48c78e88"} />
    ))}
  </svg>,
  // 07 qa
  <svg key="7" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <circle cx="48" cy={56 + i * 44} r="10" fill="#48c78e" opacity="0.8" />
        <rect x="72" y={48 + i * 44} width="200" height="16" rx="8" fill="#fff" opacity="0.12" />
      </g>
    ))}
  </svg>,
  // 08 launch
  <svg key="8" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    <rect x="70" y="40" width="180" height="120" rx="12" fill="#1a2130" stroke="#5b7cff55" />
    <circle cx="160" cy="100" r="28" fill="#5b7cff" opacity="0.5" />
    <path d="M160 86 L160 114 M146 100 H174" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>,
  // 09 care
  <svg key="9" viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
    <rect width="320" height="200" fill="#12161f" rx="16" />
    <polyline points="30,140 80,110 120,120 170,70 220,90 280,50" fill="none" stroke="#5b7cff" strokeWidth="3" />
    <circle cx="280" cy="50" r="6" fill="#48c78e" />
  </svg>,
];

export function ProcessSticky() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as {
    n: string;
    title: string;
    client: string;
    team: string;
    output: string;
    gate: string;
  }[];
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.2 },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="section-process border-t border-border-light py-20 md:py-28">
      <div className="container-page">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-accent uppercase">{t("eyebrow")}</p>
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight text-ink text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{t("subtitle")}</p>
        </div>

        {/* Mobile accordion-like stack */}
        <div className="space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <details
              key={step.n}
              className="group rounded-[var(--radius-card)] border border-border-light bg-transparent p-5 open:shadow-md"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span className="mr-3 font-mono text-sm text-accent">{step.n}</span>
                {step.title}
              </summary>
              <div className="mt-4 space-y-3 text-sm text-ink-muted">
                <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-control)]">
                  {visuals[i]}
                </div>
                <p>
                  <strong className="text-ink">{t("client")}:</strong> {step.client}
                </p>
                <p>
                  <strong className="text-ink">{t("team")}:</strong> {step.team}
                </p>
                <p>
                  <strong className="text-ink">{t("output")}:</strong> {step.output}
                </p>
                <p>
                  <strong className="text-ink">{t("gate")}:</strong> {step.gate}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Desktop sticky storytelling */}
        <div className="relative hidden gap-12 lg:grid lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="absolute top-3 bottom-3 left-[15px] w-px bg-border-light" aria-hidden />
            <div
              className="absolute left-[15px] w-px bg-accent transition-all duration-500"
              style={{
                top: 12,
                height: `calc(${(active / Math.max(steps.length - 1, 1)) * 100}% - 12px)`,
              }}
              aria-hidden
            />
            <ol className="space-y-24 pb-32">
              {steps.map((step, i) => (
                <li
                  key={step.n}
                  data-index={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className="relative pl-12"
                >
                  <span
                    className={cn(
                      "absolute top-1.5 left-2 size-3 rounded-full border-2 transition-colors",
                      i <= active
                        ? "border-accent bg-accent"
                        : "border-border-light bg-process-light",
                    )}
                  />
                  <p
                    className={cn(
                      "font-mono text-xs transition-colors",
                      i === active ? "text-accent" : "text-ink-muted",
                    )}
                  >
                    {step.n}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 font-display text-2xl font-semibold transition-colors",
                      i === active ? "text-ink" : "text-ink-muted",
                    )}
                  >
                    {step.title}
                  </h3>
                  <div
                    className={cn(
                      "mt-4 grid gap-3 text-sm transition-opacity",
                      i === active ? "opacity-100" : "opacity-40",
                    )}
                  >
                    <p>
                      <span className="font-medium text-ink">{t("client")}: </span>
                      <span className="text-ink-muted">{step.client}</span>
                    </p>
                    <p>
                      <span className="font-medium text-ink">{t("team")}: </span>
                      <span className="text-ink-muted">{step.team}</span>
                    </p>
                    <p>
                      <span className="font-medium text-ink">{t("output")}: </span>
                      <span className="text-ink-muted">{step.output}</span>
                    </p>
                    <p>
                      <span className="font-medium text-ink">{t("gate")}: </span>
                      <span className="text-ink-muted">{step.gate}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="sticky top-28 h-[min(70vh,520px)] self-start">
            <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-media)] border border-border-light bg-ink shadow-[var(--shadow-depth)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="font-mono text-xs text-accent">{steps[active]?.n}</span>
                <span className="text-xs text-muted">
                  {active + 1} / {steps.length}
                </span>
              </div>
              <div className="relative min-h-0 flex-1 p-4">
                {!reduce ? (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    {visuals[active]}
                  </motion.div>
                ) : (
                  visuals[active]
                )}
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="font-display text-lg font-semibold text-fg">
                  {steps[active]?.title}
                </p>
                <p className="mt-1 text-sm text-muted">{steps[active]?.output}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
