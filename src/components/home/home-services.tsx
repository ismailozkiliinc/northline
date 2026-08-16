"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Bot, Globe, Megaphone, Palette, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/system/section-label";
import { GradientHeading } from "@/components/system/gradient-heading";
import { AtlasWebsite } from "@/components/demos/product-uis";
import { CampaignBoardLive } from "@/components/visuals/exclusive-scenes";

type Category = {
  id: string;
  title: string;
  description: string;
};

const CATEGORY_META: Record<string, { icon: typeof Globe }> = {
  web: { icon: Globe },
  marketing: { icon: Megaphone },
  seo: { icon: Search },
  brand: { icon: Palette },
  software: { icon: Bot },
};

function PhotoCover({
  src,
  kicker,
  title,
  note,
}: {
  src: string;
  kicker: string;
  title: string;
  note: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.82),rgba(15,23,42,0.2)_48%,transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">{kicker}</p>
        <p className="mt-1 font-display text-xl font-bold">{title}</p>
        <p className="mt-1 text-[11px] text-white/70">{note}</p>
      </div>
    </div>
  );
}

const CATEGORY_VISUAL: Record<string, () => ReactNode> = {
  web: () => <AtlasWebsite />,
  marketing: () => <CampaignBoardLive />,
  seo: () => (
    <PhotoCover
      src="/images/scenes/seo-work.jpg"
      kicker="SEO"
      title="Search"
      note="Query · ranking · organic"
    />
  ),
  brand: () => (
    <PhotoCover
      src="/images/scenes/brand-pack.jpg"
      kicker="Identity"
      title="Brand system"
      note="Logo · type · print"
    />
  ),
  software: () => (
    <PhotoCover
      src="/images/scenes/code-desk.jpg"
      kicker="Software"
      title="Build"
      note="Product · API · automation"
    />
  ),
};

export function HomeServices() {
  const t = useTranslations("homeServices");
  const reduce = useReducedMotion();
  const categories = t.raw("categories") as Category[];

  return (
    <section id="services" className="border-t border-[#eef2f7] bg-[#f8faff] py-16 md:py-24">
      <div className="container-page">
        <div className="max-w-xl">
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <GradientHeading as="h2" className="text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.1]">
            {t("title")}
          </GradientHeading>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#64748b] md:text-base">{t("subtitle")}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const meta = CATEGORY_META[category.id] ?? CATEGORY_META.web;
            const Icon = meta.icon;
            const Visual = CATEGORY_VISUAL[category.id] ?? CATEGORY_VISUAL.web;
            return (
              <motion.li
                key={category.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#e8ecf4] bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.12)]">
                  <div className="relative h-[200px] overflow-hidden md:h-[220px]">{Visual()}</div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-[#6366f1]">
                      <Icon className="h-4 w-4" aria-hidden />
                      <span className="font-mono text-[11px] tracking-[0.16em] text-[#94a3b8] uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#111827]">{category.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748b]">{category.description}</p>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
