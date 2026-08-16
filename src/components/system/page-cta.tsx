"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Pathnames } from "@/i18n/routing";

type StaticPath = Exclude<Pathnames, `${string}[${string}`>;

export function PageCta({
  eyebrow = "Northline",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { href: StaticPath; label: string };
  secondary?: { href: StaticPath; label: string };
}) {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-[#e8ecf4] bg-white py-20 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="container-page"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0f172a] px-8 py-14 md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(99,102,241,0.25),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_100%,rgba(59,130,246,0.12),transparent)]"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-indigo-300 uppercase">
                {eyebrow}
              </p>
              <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#94a3b8]">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={primary.href}
                className="btn-brand-gradient group inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold"
              >
                {primary.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
