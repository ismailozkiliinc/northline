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
      className="section-mist relative isolate overflow-hidden border-t border-border-ink"
    >
      <div className="pointer-events-none absolute inset-0 grid-ink opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute top-0 right-0 h-[60%] w-[50%] rounded-full bg-accent/5 blur-[100px] orb-drift"
        aria-hidden
      />

      <div className="container-page relative z-[1] grid items-center gap-10 py-16 md:min-h-[700px] md:gap-12 md:py-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
        <div className="max-w-[36rem] lg:self-center">
          <p className="mb-5 text-[11px] tracking-[0.24em] text-accent uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance text-ink">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-ink-muted md:text-lg">
            {t("subtitle")}
          </p>

          <motion.div
            key={activeStep.n}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-2xl border border-border-ink bg-white p-5 shadow-[var(--shadow-card)]"
          >
            <p className="font-mono text-xs text-accent">
              {activeStep.n} · {activeStep.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">{activeStep.body}</p>
            <dl className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              <div>
                <dt className="text-ink-muted">{t("client")}</dt>
                <dd className="mt-1 text-ink">{activeStep.client}</dd>
              </div>
              <div>
                <dt className="text-ink-muted">{t("team")}</dt>
                <dd className="mt-1 text-ink">{activeStep.team}</dd>
              </div>
            </dl>
          </motion.div>

          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/surec">{t("cta")}</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 lg:pl-2">
          <motion.div
            key={activeVisual}
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-[var(--radius-media)] border border-border-ink bg-white shadow-[var(--shadow-depth)]"
          >
            <PremiumVisual
              src={activeVisual}
              alt={activeStep.title}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </motion.div>

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
                        ? "border-accent/30 bg-accent-soft shadow-[var(--shadow-card)]"
                        : "border-border-ink bg-white hover:border-accent/20 hover:shadow-[var(--shadow-card)]",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-wider",
                        isActive ? "text-accent" : "text-ink-muted",
                      )}
                    >
                      {step.n}
                    </span>
                    <span
                      className={cn(
                        "mt-1 font-display text-[12px] font-semibold tracking-tight md:text-[13px]",
                        isActive ? "text-ink" : "text-ink-muted",
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
