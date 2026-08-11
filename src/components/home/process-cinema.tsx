"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";

type Step = {
  n: string;
  title: string;
  body: string;
  client: string;
  team: string;
};

const STEP_VISUALS = [
  media.process.discovery,
  media.process.research,
  media.process.wireframe,
  media.process.design,
  media.process.development,
  media.process.qa,
  media.process.launch,
  media.process.growth,
] as const;

export function ProcessCinema() {
  const t = useTranslations("processCinema");
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const steps = t.raw("steps") as Step[];

  useEffect(() => {
    if (reduce) return;
    const root = sectionRef.current;
    if (!root) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const clear = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        clear();
        if (entry.isIntersecting) {
          timer = setInterval(() => {
            setActive((i) => (i + 1) % steps.length);
          }, 5200);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      clear();
    };
  }, [reduce, steps.length]);

  const activeStep = steps[active] ?? steps[0];
  const activeVisual = STEP_VISUALS[active] ?? STEP_VISUALS[0];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-border border-b border-b-white/[0.06]"
      style={{
        background:
          "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(85,123,255,0.1), transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(85,123,255,0.05), transparent 50%), var(--bg-secondary)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
        aria-hidden
      />

      <div className="container-page relative z-[1] grid items-center gap-10 py-16 md:min-h-[700px] md:gap-12 md:py-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
        {/* LEFT */}
        <div className="max-w-[36rem] lg:self-center">
          <p className="mb-5 text-[11px] tracking-[0.24em] text-accent uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-muted md:text-lg">
            {t("subtitle")}
          </p>

          <motion.div
            key={activeStep.n}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm"
          >
            <p className="font-mono text-xs text-accent">
              {activeStep.n} · {activeStep.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg/90">{activeStep.body}</p>
            <dl className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              <div>
                <dt className="text-faint">{t("client")}</dt>
                <dd className="mt-1 text-muted">{activeStep.client}</dd>
              </div>
              <div>
                <dt className="text-faint">{t("team")}</dt>
                <dd className="mt-1 text-muted">{activeStep.team}</dd>
              </div>
            </dl>
          </motion.div>

          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/surec">{t("cta")}</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT — cinematic workspace + timeline */}
        <div className="relative flex flex-col gap-5 lg:pl-2">
          <div className="group overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-depth)]">
            <PremiumVisual
              key={activeVisual}
              src={activeVisual}
              alt={activeStep.title}
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <ol className="relative grid grid-cols-2 gap-1.5 sm:grid-cols-4" aria-label={t("eyebrow")}>
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.n}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => {
                      if (!reduce) setActive(i);
                    }}
                    className={cn(
                      "flex w-full flex-col rounded-xl border px-2.5 py-2.5 text-left transition-all duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                      isActive
                        ? "border-accent/40 bg-accent/10 shadow-[0_0_24px_rgba(85,123,255,0.12)]"
                        : "border-border bg-surface/40 hover:border-white/14 hover:bg-surface/70",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-wider",
                        isActive ? "text-accent" : "text-faint",
                      )}
                    >
                      {step.n}
                    </span>
                    <span
                      className={cn(
                        "mt-1 font-display text-[12px] font-semibold tracking-tight md:text-[13px]",
                        isActive ? "text-fg" : "text-fg/60",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
