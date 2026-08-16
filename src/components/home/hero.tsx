"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { UniverseLive } from "@/components/demos/universe-live";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-x-clip bg-white pt-[var(--nav-h)]">
      <div className="container-page relative z-10 grid min-h-[calc(100svh-var(--nav-h))] items-center gap-8 py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-6 lg:py-8">
        {/* Left — content */}
        <div className="relative max-w-xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-xs font-semibold tracking-[0.22em] text-brand-gradient uppercase"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111827]"
          >
            {t("titleBefore")}
            <span className="text-brand-gradient">{t("titleHighlight")}</span>
            {t("titleAfter")}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-[1.7] text-[#64748b] md:text-[1.05rem]"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="btn-brand-gradient group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
            >
              {t("ctaPrimary")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>

            <Link
              href="/calismalar"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-[#e2e8f0] bg-white/80 px-5 text-sm font-medium text-[#334155] shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all hover:border-indigo-200 hover:bg-white hover:shadow-[0_4px_20px_rgba(99,102,241,0.12)]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-[#f8fafc] transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-[#6366f1] text-[#6366f1]" aria-hidden />
              </span>
              {t("ctaSecondary")}
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-indigo-100/80 pt-8"
          >
            {(t.raw("stats") as { value: string; label: string }[]).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.08 }}
              >
                <p className="font-display text-2xl font-bold text-brand-gradient">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-[#94a3b8] uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[420px] w-full min-w-0 overflow-hidden md:h-[520px] lg:h-[min(620px,calc(100svh-var(--nav-h)-48px))]"
        >
          <UniverseLive />
        </motion.div>
      </div>
    </section>
  );
}
