"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/system/page-hero";
import { PageCta } from "@/components/system/page-cta";
import { Reveal } from "@/components/motion/reveal";
import type { Pathnames } from "@/i18n/routing";
import { MobileLive } from "@/components/demos/mobile-live";
import { VisualSlot } from "@/components/demos/campaign-scene";
import { AtlasSiteLive } from "@/components/demos/atlas-live";
import {
  AiGraphLive,
  CapabilityMesh,
  ShopLookbook,
  UxJourneyLive,
} from "@/components/visuals/exclusive-scenes";
import { cn } from "@/lib/utils";

type ShowcaseCard = {
  id: "web" | "mobile" | "ai" | "uiux" | "ecommerce";
  label: string;
  title: string;
  body: string;
};

const HREFS = {
  web: "/hizmetler/web",
  mobile: "/hizmetler/mobil",
  ai: "/hizmetler/ai",
  uiux: "/hizmetler/ui-ux",
  ecommerce: "/hizmetler/e-ticaret",
} as const satisfies Record<ShowcaseCard["id"], Pathnames>;

const SHOWCASE_LIVE = {
  web: () => <AtlasSiteLive />,
  mobile: () => <MobileLive />,
  ai: () => <AiGraphLive />,
  uiux: () => <UxJourneyLive />,
  ecommerce: () => <ShopLookbook />,
} as const;

export function ServicesContent() {
  const t = useTranslations("services");
  const cards = t.raw("showcase") as ShowcaseCard[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        titleBefore={t("heroTitleBefore")}
        titleHighlight={t("heroTitleHighlight")}
        titleAfter={t("heroTitleAfter")}
        subtitle={t("heroBody")}
        primary={{ href: "/proje-baslat", label: t("heroCta") }}
        secondary={{ href: "/calismalar", label: t("heroSecondary") }}
        visual={<CapabilityMesh />}
      />

      <section className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-24">
        <div className="container-wide space-y-16 md:space-y-24">
          {cards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.04} variant={index % 2 === 0 ? "rise" : "mask"}>
              <Link
                href={HREFS[card.id]}
            className={cn(
              "group grid items-center gap-8 overflow-hidden lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-10",
              index % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
              >
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-gradient uppercase">
                    {card.label}
                  </p>
                  <h2 className="mt-3 font-display text-[1.75rem] font-bold tracking-tight text-[#111827] md:text-[2.1rem]">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4f6ef7]">
                    {t("cardExplore")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
                <VisualSlot className="h-[340px] md:h-[440px]">
                  {SHOWCASE_LIVE[card.id]()}
                </VisualSlot>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title={t("ctaTitle")}
        body={t("ctaBody")}
        primary={{ href: "/proje-baslat", label: t("pageCta") }}
        secondary={{ href: "/calismalar", label: t("heroSecondary") }}
      />
    </>
  );
}
