"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="hero-aurora noise relative isolate -mt-[var(--nav-h)] overflow-hidden pt-[var(--nav-h)]">
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-60" />
      <div className="pointer-events-none absolute top-[15%] right-[10%] h-[42vw] max-h-[520px] w-[42vw] max-w-[520px] rounded-full bg-accent/18 blur-[120px]" />

      <div className="container-wide relative z-[1] grid min-h-[calc(100svh-var(--nav-h))] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-10">
        <div className="relative z-[2] max-w-xl lg:pb-12">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] tracking-[0.28em] text-accent uppercase"
          >
            Northline
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-semibold tracking-[-0.045em] text-balance"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-md text-base leading-[1.65] text-muted md:text-lg"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/proje-baslat">{t("ctaPrimary")}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/calismalar">{t("ctaSecondary")}</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="group relative"
        >
          <div className="overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-depth)]">
            <PremiumVisual
              src={media.hero.ecosystem}
              alt="Northline digital product ecosystem — laptop, phone and tablet"
              className="w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-[1] border-t border-white/10">
        <ul className="container-page flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-[11px] tracking-[0.18em] text-muted uppercase md:justify-between">
          {(t.raw("capabilities") as string[]).map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
