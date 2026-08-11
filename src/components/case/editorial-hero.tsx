"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { RestaurantProductStage } from "@/components/case/restaurant-product-stage";
import { CaseVisual } from "@/components/shared/premium-visual";
import { LaptopFrame, PhoneFrame } from "@/components/mockups/device-frames";
import {
  FinanceDashboard,
  FinanceMobileNotify,
  HotelBookingDesktop,
  HotelBookingMobile,
  EcommerceProduct,
  EcommerceCart,
  EducationDesktop,
  AiWorkspace,
} from "@/components/mockups/product-screens";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";
import type { Locale, Project } from "@/content/types";

type Theme = {
  bg: string;
  accent: string;
  muted: string;
  chip: string;
  glow: string;
};

const themes: Record<string, Theme> = {
  "table-reserve": {
    bg: "bg-bg-secondary",
    accent: "text-[#e8c9a0]",
    muted: "text-[#b5a698]",
    chip: "border-[#c4a574]/30 bg-[#c4a574]/10 text-[#e8c9a0]",
    glow: "rgba(196,165,116,0.1)",
  },
  "harbor-stay": {
    bg: "bg-bg-secondary",
    accent: "text-emerald-300/90",
    muted: "text-teal-100/55",
    chip: "border-emerald-400/25 bg-emerald-500/10 text-emerald-100/80",
    glow: "rgba(69,169,154,0.1)",
  },
  "ledger-flow": {
    bg: "bg-bg-secondary",
    accent: "text-indigo-300/90",
    muted: "text-slate-300/55",
    chip: "border-indigo-400/25 bg-indigo-500/10 text-indigo-100/80",
    glow: "rgba(85,123,255,0.1)",
  },
  "atelier-shop": {
    bg: "bg-bg-secondary",
    accent: "text-orange-200/90",
    muted: "text-orange-100/50",
    chip: "border-orange-400/25 bg-orange-500/10 text-orange-100/80",
    glow: "rgba(190,120,65,0.09)",
  },
  "campus-learn": {
    bg: "bg-bg-secondary",
    accent: "text-sky-300/90",
    muted: "text-slate-300/55",
    chip: "border-sky-400/25 bg-sky-500/10 text-sky-100/80",
    glow: "rgba(56,189,248,0.09)",
  },
  "pulse-flow": {
    bg: "bg-bg-secondary",
    accent: "text-violet-300/90",
    muted: "text-violet-100/50",
    chip: "border-violet-400/25 bg-violet-500/10 text-violet-100/80",
    glow: "rgba(139,108,255,0.1)",
  },
};

function LayeredProductStage({ slug }: { slug: string }) {
  if (slug === "table-reserve") {
    return <RestaurantProductStage />;
  }

  const layers: Record<
    string,
    { Desktop: React.FC<{ className?: string }>; Mobile: React.FC<{ className?: string }>; detail: string }
  > = {
    "harbor-stay": {
      Desktop: HotelBookingDesktop,
      Mobile: HotelBookingMobile,
      detail: media.cases["harbor-stay"],
    },
    "ledger-flow": {
      Desktop: FinanceDashboard,
      Mobile: FinanceMobileNotify,
      detail: media.cases["ledger-flow"],
    },
    "atelier-shop": {
      Desktop: EcommerceProduct,
      Mobile: EcommerceCart,
      detail: media.cases["atelier-shop"],
    },
    "campus-learn": {
      Desktop: EducationDesktop,
      Mobile: FinanceMobileNotify,
      detail: media.cases["campus-learn"],
    },
    "pulse-flow": {
      Desktop: AiWorkspace,
      Mobile: FinanceMobileNotify,
      detail: media.cases["pulse-flow"],
    },
  };

  const layer = layers[slug] ?? layers["harbor-stay"];
  const Desktop = layer.Desktop;
  const Mobile = layer.Mobile;

  return (
    <div className="relative isolate min-h-[340px] w-full md:min-h-[420px] lg:min-h-[480px]">
      <div
        className="pointer-events-none absolute -top-6 right-0 h-36 w-36 rounded-full blur-3xl"
        style={{ background: themes[slug]?.glow ?? themes["harbor-stay"].glow }}
        aria-hidden
      />

      <div className="absolute top-[6%] right-[-5%] z-10 w-[90%] md:right-[-7%] md:w-[86%]">
        <LaptopFrame transform="perspective(1400px) rotateY(-5deg) rotateX(2deg)">
          <div className="aspect-[16/10]">
            <Desktop />
          </div>
        </LaptopFrame>
      </div>

      <div className="absolute top-[-2%] left-[-6%] z-[4] hidden w-[40%] overflow-hidden rounded-2xl opacity-35 md:block">
        <div className="relative aspect-[4/5] rotate-[-5deg]">
          <Image src={layer.detail} alt="" fill className="object-cover" sizes="260px" aria-hidden />
          <div className="absolute inset-0 bg-bg-primary/45" />
        </div>
      </div>

      <div className="absolute bottom-[-3%] left-[4%] z-30 w-[26%] max-w-[124px] md:w-[22%]">
        <PhoneFrame transform="perspective(900px) rotateY(8deg)">
          <div className="aspect-[9/19]">
            <Mobile />
          </div>
        </PhoneFrame>
      </div>

      <div className="absolute top-[12%] left-[0%] z-20 w-[34%] max-w-[190px] overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[16/11]">
          <Image
            src={layer.detail}
            alt=""
            fill
            className="object-cover object-center"
            sizes="200px"
          />
        </div>
      </div>
    </div>
  );
}

export function CaseStudyEditorialHero({
  project,
  locale,
  demoLabel,
  ctaLabel,
}: {
  project: Project;
  locale: Locale;
  demoLabel: string;
  ctaLabel: string;
}) {
  const theme = themes[project.slug] ?? themes["harbor-stay"];

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10",
        theme.bg,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 75% 35%, ${theme.glow}, transparent 55%)`,
        }}
        aria-hidden
      />

      <div className="container-wide relative grid items-center gap-8 pt-14 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:pt-16 lg:pb-12">
        {/* Left — editorial copy */}
        <div className="relative z-[2] max-w-xl lg:pr-4">
          <p className={cn("text-[11px] tracking-[0.22em] uppercase", theme.accent)}>
            {demoLabel} · {project.sector[locale]}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.4rem)] font-semibold tracking-[-0.04em] text-balance text-[#f7f3ee]">
            {project.shortTitle[locale]}
          </h1>
          <p className={cn("mt-5 max-w-md text-[15px] leading-relaxed md:text-base", theme.muted)}>
            {project.summary[locale]}
          </p>

          <div className="mt-7">
            <p className={cn("mb-2.5 text-[10px] tracking-[0.18em] uppercase", theme.muted)}>
              {locale === "tr" ? "Teknoloji" : "Technology"}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech[locale].slice(0, 5).map((tech) => (
                <li key={tech} className={cn("rounded-full border px-3 py-1 text-xs", theme.chip)}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/proje-baslat">{ctaLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#case-story">{locale === "tr" ? "Hikâyeyi oku" : "Read the story"}</a>
            </Button>
          </div>
        </div>

        {/* Right — layered product presentation (overflows container) */}
        <div className="relative z-[1] hidden overflow-visible md:block md:-mr-6 lg:-mr-10 xl:-mr-14">
          <LayeredProductStage slug={project.slug} />
        </div>
      </div>

      {/* Mobile: dense product still — not an empty rectangle */}
      <div className="border-t border-white/5 px-4 pb-8 md:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <CaseVisual
            slug={project.slug}
            alt={project.shortTitle[locale]}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
