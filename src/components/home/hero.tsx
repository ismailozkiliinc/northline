"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { HeroMacbook } from "@/components/home/hero-macbook";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-x-clip bg-[#05070B] pt-[var(--nav-h)]">
      {/* Continuity glow from brand intro */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(79,124,255,0.12), transparent 35%), radial-gradient(circle at 20% 80%, rgba(124,92,255,0.06), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="container-page relative z-10 grid min-h-[calc(100svh-var(--nav-h))] items-center gap-8 py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-6 lg:py-8">
        {/* Left — content */}
        <div className="relative max-w-xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-xs font-semibold tracking-[0.22em] text-[#98A2B3] uppercase"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#F7F9FC]"
          >
            {t("titleBefore")}
            <span className="text-brand-gradient">{t("titleHighlight")}</span>
            {t("titleAfter")}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-[1.7] text-[#98A2B3] md:text-[1.05rem]"
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
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-[#111827]/80 px-5 text-sm font-medium text-[#F7F9FC] backdrop-blur-sm transition-all hover:border-[#4F7CFF]/40 hover:bg-[#111827]"
            >
              {t("ctaSecondary")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8"
          >
            {(t.raw("stats") as { value: string; label: string }[]).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.08 }}
              >
                <p className="font-display text-2xl font-bold text-brand-gradient">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-[#98A2B3] uppercase">
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
          className="relative flex h-[480px] w-full min-w-0 items-center overflow-visible md:h-[580px] lg:h-[min(700px,calc(100svh-var(--nav-h)-40px))]"
        >
          <HeroMacbook />
        </motion.div>
      </div>
    </section>
  );
}
