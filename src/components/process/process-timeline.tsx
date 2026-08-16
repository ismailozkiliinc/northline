"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CheckCircle2,
  Clock,
  ArrowDown,
  Phone,
  MessageCircle,
  FileCheck2,
  Boxes,
  Component,
  Smartphone,
  MousePointerClick,
  Sparkles,
  Accessibility,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  MetaPremiumCard,
  ToolBrandChips,
  WireframeInfoCards,
} from "@/components/process/wireframe-step-ui";
import type { ProcessStage } from "@/components/process/types";
import { cn } from "@/lib/utils";

const DESIGN_DELIVERABLE_ICONS: LucideIcon[] = [
  Boxes,
  Component,
  Smartphone,
  MousePointerClick,
  Sparkles,
  Accessibility,
  Code2,
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.18em] text-muted uppercase">{children}</p>
  );
}

function DesignDeliverableList({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = DESIGN_DELIVERABLE_ICONS[i % DESIGN_DELIVERABLE_ICONS.length];
        return (
          <motion.li
            key={item}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex min-h-[56px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-accent/10 text-accent">
              <Icon className="size-3.5" strokeWidth={1.75} />
            </span>
            <span className="text-[12px] leading-snug font-medium text-fg/88">{item}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}

function CtaTrustRow({ items }: { items: string[] }) {
  const icons = [Phone, MessageCircle, FileCheck2];
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
      {items.map((item, i) => {
        const Icon = icons[i] ?? CheckCircle2;
        return (
          <li
            key={item}
            className="flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-2.5 py-2"
          >
            <Icon className="mt-0.5 size-3.5 shrink-0 text-accent/80" strokeWidth={1.75} />
            <span className="text-[11px] leading-snug text-muted">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

function NextStepPreview({
  next,
  label,
}: {
  next: ProcessStage | null;
  label: string;
}) {
  if (!next) return null;
  return (
    <a
      href={`#process-stage-${next.n}`}
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById(`process-stage-${next.n}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="group mt-8 flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 transition-colors hover:border-accent/25 hover:bg-accent/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="min-w-0">
        <p className="text-[9px] tracking-[0.16em] text-muted uppercase">{label}</p>
        <p className="mt-1 truncate font-display text-[13px] font-semibold text-fg/85 group-hover:text-fg">
          <span className="font-mono text-[11px] text-accent/80">{next.n}</span>{" "}
          {next.title}
        </p>
      </div>
      <ArrowDown className="size-4 shrink-0 text-accent/50 transition group-hover:translate-y-0.5 group-hover:text-accent" />
    </a>
  );
}

function StageCopy({
  stage,
  stages,
  index,
  labels,
  isDesign,
  isWireframe,
}: {
  stage: ProcessStage;
  stages: ProcessStage[];
  index: number;
  labels: {
    deliverables: string;
    decisions: string;
    tools: string;
    duration: string;
    approval: string;
    fromYou: string;
    fromUs: string;
    nextPreview: string;
    trustItems: string[];
  };
  isDesign: boolean;
  isWireframe: boolean;
}) {
  const deliverables =
    stage.deliverables && stage.deliverables.length > 0
      ? stage.deliverables
      : [stage.output];

  const next = index < stages.length - 1 ? stages[index + 1] : null;

  const deliverableCards =
    isWireframe && stage.infoCards
      ? stage.infoCards.filter((c) => !/çalışma|workspace/i.test(c.badge))
      : [];
  const collabCards =
    isWireframe && stage.infoCards
      ? stage.infoCards.filter((c) => /çalışma|workspace/i.test(c.badge))
      : [];

  return (
    <div className={cn("flex flex-col", isDesign || isWireframe ? "max-w-md" : "max-w-lg")}>
      <p className="font-mono text-sm text-accent">{stage.n}</p>
      <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.65rem)] font-semibold tracking-tight text-balance">
        {stage.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{stage.purpose}</p>

      {/* 1 — Deliverables */}
      <div className="mt-8">
        <SectionLabel>{labels.deliverables}</SectionLabel>
        {isWireframe && deliverableCards.length > 0 ? (
          <WireframeInfoCards cards={deliverableCards} />
        ) : isDesign ? (
          <div className="mt-2">
            <DesignDeliverableList items={deliverables} />
          </div>
        ) : (
          <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex min-h-[48px] items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] text-fg/85"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 2 — Decision Points */}
      <div className="mt-8">
        <SectionLabel>{labels.decisions}</SectionLabel>
        <dl className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <MetaPremiumCard
            icon={Clock}
            label={labels.duration}
            value={stage.duration}
            accent
          />
          <MetaPremiumCard
            icon={CheckCircle2}
            label={labels.approval}
            value={stage.approval}
          />
          {!isDesign && !isWireframe && (
            <>
              <MetaPremiumCard icon={MessageCircle} label={labels.fromYou} value={stage.fromYou} />
              <MetaPremiumCard icon={FileCheck2} label={labels.fromUs} value={stage.fromUs} />
            </>
          )}
        </dl>
      </div>

      {/* 3 — Tools & Collaboration */}
      <div className="mt-8">
        <SectionLabel>{labels.tools}</SectionLabel>
        {stage.tools && stage.tools.length > 0 && (
          <ToolBrandChips tools={stage.tools} label="" bare />
        )}
        {collabCards.length > 0 && (
          <div className="mt-2">
            <WireframeInfoCards cards={collabCards} />
          </div>
        )}
      </div>

      {stage.cta && (
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/proje-baslat">{stage.cta}</Link>
          </Button>
          <CtaTrustRow items={labels.trustItems} />
        </div>
      )}

      <NextStepPreview next={next} label={labels.nextPreview} />
    </div>
  );
}

export function ProcessTimeline() {
  const t = useTranslations("processPage.timeline");
  const stages = useTranslations("processPage").raw("stages") as ProcessStage[];
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-step]"));
    if (panels.length === 0) return;

    const ratios = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
        let bestIndex = 0;
        let bestRatio = -1;
        panels.forEach((el, i) => {
          const r = ratios.get(el) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestIndex = i;
          }
        });
        if (bestRatio > 0) setActive(bestIndex);
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    panels.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [stages.length]);

  const labels = {
    deliverables: t("deliverables"),
    decisions: t("decisions"),
    tools: t("tools"),
    duration: t("duration"),
    approval: t("approval"),
    fromYou: t("fromYou"),
    fromUs: t("fromUs"),
    nextPreview: t("nextPreview"),
    trustItems: t.raw("trustItems") as string[],
  };

  return (
    <section
      id="process-timeline"
      ref={rootRef}
      className="scroll-mt-24 border-b border-white/8 bg-bg-secondary"
    >
      <div className="container-page py-10 md:py-14">
        <p className="text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
        <h2 className="mt-2 max-w-[18ch] font-display text-[clamp(1.85rem,3.6vw,3.1rem)] font-semibold tracking-tight">
          {t("title")}
        </h2>
      </div>

      <div className="container-wide relative pb-12 lg:pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <nav
            className="mb-8 hidden lg:col-span-2 lg:mb-0 lg:block"
            aria-label={t("navLabel")}
          >
            <ol className="sticky top-28 space-y-1">
              {stages.map((stage, i) => (
                <li key={stage.n}>
                  <a
                    href={`#process-stage-${stage.n}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`process-stage-${stage.n}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-2 py-2 text-left transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-secondary",
                      i === active
                        ? "bg-white/[0.06] text-fg ring-1 ring-white/10"
                        : "text-fg/55 hover:bg-white/[0.04] hover:text-fg/85",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tabular-nums transition-colors",
                        i === active ? "text-accent" : "text-fg/40",
                      )}
                    >
                      {stage.n}
                    </span>
                    <span className="line-clamp-2 font-display text-[11px] font-semibold leading-snug">
                      {stage.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <ol className="lg:col-span-10">
            {stages.map((stage, i) => {
              const isDesign = stage.art === "design";
              const isWireframe = stage.art === "wireframe";
              const isActive = i === active;

              return (
                <li
                  key={stage.n}
                  id={`process-stage-${stage.n}`}
                  data-step
                  className={cn(
                    "relative scroll-mt-28 border-t border-white/6 py-10 md:py-12 [content-visibility:auto] [contain-intrinsic-size:auto_720px]",
                    "lg:scroll-mt-24 lg:py-14",
                    (isDesign || isWireframe) && "lg:py-16",
                  )}
                >
                  <div
                    className={cn(
                      "grid items-start gap-8 transition-opacity duration-300",
                      isActive ? "opacity-100" : reduce ? "opacity-80" : "opacity-70",
                    )}
                  >
                    <StageCopy
                      stage={stage}
                      stages={stages}
                      index={i}
                      labels={labels}
                      isDesign={isDesign}
                      isWireframe={isWireframe}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

