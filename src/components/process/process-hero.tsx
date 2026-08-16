"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import type { ProcessStage } from "@/components/process/types";

function scrollToTimeline() {
  document.getElementById("process-timeline")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToStage(index: number) {
  const el = document.getElementById(`process-stage-${String(index + 1).padStart(2, "0")}`);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProcessHero() {
  const t = useTranslations("processPage");
  const stages = t.raw("stages") as ProcessStage[];
  const trust = t.raw("hero.trust") as string[];
  const reduce = useReducedMotion();

  return (
    <section
      className="noise relative isolate overflow-hidden border-b border-white/8"
      style={{
        background:
          "radial-gradient(circle at 78% 42%, rgba(85,123,255,0.1), transparent 45%), #172131",
      }}
    >
      <div className="container-wide relative pt-[clamp(7.5rem,14vh,11.25rem)] pb-14 lg:pb-16">
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

        <ol className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {stages.map((stage, i) => (
            <li key={stage.n}>
              <button
                type="button"
                onClick={() => scrollToStage(i)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="font-mono text-[10px] text-accent">{stage.n}</span>
                <p className="mt-1 font-display text-sm font-semibold text-fg">{stage.title}</p>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
