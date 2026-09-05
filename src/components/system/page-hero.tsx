"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Pathnames } from "@/i18n/routing";
import { PageAtmosphere } from "@/components/system/page-atmosphere";
import { GradientHeading } from "@/components/system/gradient-heading";
import { SectionLabel } from "@/components/system/section-label";
import { cn } from "@/lib/utils";

type StaticPath = Exclude<Pathnames, `${string}[${string}`>;

type CtaLink = {
  href: StaticPath;
  label: string;
};

type AtmosphereTone = "default" | "web" | "mobile" | "ai" | "work" | "about" | "contact" | "mist";

type PageHeroProps = {
  eyebrow: string;
  titleBefore: string;
  titleHighlight?: string;
  titleAfter?: string;
  subtitle: string;
  capabilityLine?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
  visual?: React.ReactNode;
  visualClassName?: string;
  className?: string;
  atmosphere?: AtmosphereTone;
};

export function PageHero({
  eyebrow,
  titleBefore,
  titleHighlight,
  titleAfter,
  subtitle,
  capabilityLine,
  primary,
  secondary,
  visual,
  visualClassName,
  className,
  atmosphere = "default",
}: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        "relative isolate -mt-[var(--nav-h)] bg-transparent pt-[var(--nav-h)]",
        visual ? "overflow-x-clip" : "overflow-hidden",
        className,
      )}
    >
      <PageAtmosphere tone={atmosphere} />
      <div
        className={cn(
          "container-page relative z-10 grid items-center gap-12 py-16 md:py-20 lg:gap-16 lg:py-24",
          visual ? "lg:grid-cols-2" : "",
        )}
      >
        <div className="relative max-w-xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>{eyebrow}</SectionLabel>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientHeading
              before={titleBefore}
              highlight={titleHighlight}
              after={titleAfter}
              className="text-[clamp(2.15rem,5vw,3.65rem)] leading-[1.08] whitespace-pre-line"
            />
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-[1.7] text-[#98A2B3] md:text-[1.05rem]"
          >
            {subtitle}
          </motion.p>

          {capabilityLine ? (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-5 text-[0.68rem] font-medium tracking-[0.22em] text-[#98A2B3] uppercase sm:text-[0.72rem]"
            >
              {capabilityLine}
            </motion.p>
          ) : null}

          {(primary || secondary) && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {primary && (
                <Link
                  href={primary.href}
                  className="btn-brand-gradient group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
                >
                  {primary.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-[rgba(15,23,42,0.55)] px-5 text-sm font-medium text-[#F7F9FC] backdrop-blur-sm transition-all hover:border-indigo-400/40 hover:bg-[rgba(15,23,42,0.75)]"
                >
                  {secondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {visual ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative z-10 h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[460px] lg:h-[min(520px,calc(100svh-var(--nav-h)-7rem))]",
              visualClassName,
            )}
          >
            {visual}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
