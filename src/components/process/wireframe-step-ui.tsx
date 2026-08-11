"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  LayoutTemplate,
  GitBranch,
  Network,
  Map,
  StickyNote,
  MessageSquare,
  FileStack,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DELIVERABLE_ICONS: Record<string, LucideIcon> = {
  architecture: Network,
  flows: GitBranch,
  wireframes: LayoutTemplate,
  sitemap: Map,
  notes: StickyNote,
  review: MessageSquare,
  pages: FileStack,
  default: LayoutTemplate,
};

const TOOL_META: Record<
  string,
  { label: string; color: string; bg: string; mark: string }
> = {
  Figma: { label: "Figma", color: "#A259FF", bg: "rgba(162,89,255,0.12)", mark: "Fg" },
  FigJam: { label: "FigJam", color: "#7C3AED", bg: "rgba(124,58,237,0.14)", mark: "FJ" },
  Miro: { label: "Miro", color: "#FFD02F", bg: "rgba(255,208,47,0.12)", mark: "Mi" },
  Whimsical: {
    label: "Whimsical",
    color: "#4B7BFF",
    bg: "rgba(75,123,255,0.12)",
    mark: "Wh",
  },
  Notion: { label: "Notion", color: "#E8E8E8", bg: "rgba(255,255,255,0.08)", mark: "No" },
};

export type WireframeInfoCard = {
  icon: string;
  title: string;
  body: string;
  status: string;
  badge: string;
};

export function WireframeInfoCards({
  cards,
  statusLabel,
}: {
  cards: WireframeInfoCard[];
  statusLabel?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {cards.map((card, i) => {
        const Icon = DELIVERABLE_ICONS[card.icon] ?? DELIVERABLE_ICONS.default;
        const isApproved =
          /onay|approv|ready|done/i.test(card.status) ||
          card.status.toLowerCase().includes("approved");
        const isReview = /review|inceleme|draft|taslak/i.test(card.status);
        const isWork = /çalışma|workspace/i.test(card.badge);

        return (
          <motion.li
            key={card.title}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex h-full min-h-[112px] flex-col overflow-hidden rounded-xl border p-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors hover:border-white/16",
              isApproved &&
                "border-emerald-400/15 bg-gradient-to-b from-emerald-500/[0.07] to-white/[0.015]",
              isWork &&
                !isApproved &&
                "border-violet-400/15 bg-gradient-to-b from-violet-500/[0.06] to-white/[0.015]",
              !isApproved &&
                !isWork &&
                "border-white/10 bg-gradient-to-b from-sky-500/[0.05] to-white/[0.015]",
            )}
          >
            <div className="flex flex-1 items-start gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-accent/10 text-accent">
                <Icon className="size-3.5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h4 className="font-display text-[13px] font-semibold tracking-tight text-fg">
                    {card.title}
                  </h4>
                  <span className="rounded-md border border-accent/25 bg-accent/10 px-1.5 py-0.5 text-[9px] tracking-wide text-accent uppercase">
                    {card.badge}
                  </span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-[12px] leading-snug text-muted">
                  {card.body}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 pl-[42px]">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                  isApproved && "bg-emerald-500/15 text-emerald-300",
                  isReview && !isApproved && "bg-amber-500/15 text-amber-200",
                  !isApproved && !isReview && "bg-white/8 text-fg/55",
                )}
              >
                {isApproved ? (
                  <CheckCircle2 className="size-3" />
                ) : (
                  <Clock className="size-3" />
                )}
                {statusLabel ? `${statusLabel}: ` : ""}
                {card.status}
              </span>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function ToolBrandChips({
  tools,
  label,
  bare = false,
}: {
  tools: string[];
  label: string;
  bare?: boolean;
}) {
  return (
    <div className={bare ? "mt-2" : "mt-6"}>
      {!bare && label && (
        <p className="text-[10px] tracking-[0.18em] text-muted uppercase">{label}</p>
      )}
      <ul className={cn("flex flex-wrap gap-2", !bare && label && "mt-2")}>
        {tools.map((tool) => {
          const meta = TOOL_META[tool] ?? {
            label: tool,
            color: "#9CA3AF",
            bg: "rgba(255,255,255,0.06)",
            mark: tool.slice(0, 2),
          };
          return (
            <li
              key={tool}
              className="inline-flex h-8 items-center gap-2 rounded-xl border border-white/10 px-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
              style={{ background: meta.bg }}
            >
              <span
                className="flex size-5 items-center justify-center rounded-md text-[8px] font-bold"
                style={{
                  background: `${meta.color}22`,
                  color: meta.color,
                  boxShadow: `inset 0 0 0 1px ${meta.color}44`,
                }}
              >
                {meta.mark}
              </span>
              <span className="text-[12px] font-medium text-fg/85">{meta.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function WorkflowProgression({
  previous,
  current,
  next,
  labels,
  compact = false,
}: {
  previous: { n: string; title: string } | null;
  current: { n: string; title: string };
  next: { n: string; title: string } | null;
  labels: { previous: string; current: string; next: string };
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const steps = [
    previous && { ...previous, kind: "previous" as const, label: labels.previous },
    { ...current, kind: "current" as const, label: labels.current },
    next && { ...next, kind: "next" as const, label: labels.next },
  ].filter(Boolean) as {
    n: string;
    title: string;
    kind: "previous" | "current" | "next";
    label: string;
  }[];

  if (compact) {
    return (
      <div className="mt-7 flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5">
        {steps.map((step, i) => (
          <div key={step.kind} className="flex min-w-0 flex-1 items-center gap-2">
            {i > 0 && (
              <motion.span
                className="shrink-0 text-[10px] text-accent/50"
                animate={
                  reduce ? undefined : { opacity: [0.35, 1, 0.35] }
                }
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15 }}
                aria-hidden
              >
                →
              </motion.span>
            )}
            <div
              className={cn(
                "min-w-0 flex-1 rounded-lg px-2 py-1.5",
                step.kind === "current" && "bg-accent/12 ring-1 ring-accent/25",
                step.kind !== "current" && "opacity-45",
              )}
            >
              <p className="text-[8px] tracking-[0.12em] text-muted uppercase">
                {step.label}
              </p>
              <p
                className={cn(
                  "mt-0.5 truncate font-display text-[11px] font-semibold",
                  step.kind === "current" ? "text-fg" : "text-fg/70",
                )}
              >
                <span className="font-mono text-[9px] text-accent/70">{step.n}</span>{" "}
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
      <ol className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <li key={step.kind} className="relative">
            <div
              className={cn(
                "flex items-start gap-3 rounded-xl px-3 py-2.5",
                step.kind === "current" && "border border-accent/30 bg-accent/10",
                step.kind !== "current" && "opacity-55",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 font-mono text-[10px] tabular-nums",
                  step.kind === "current" ? "text-accent" : "text-fg/35",
                )}
              >
                {step.n}
              </span>
              <div>
                <p className="text-[9px] tracking-[0.16em] text-muted uppercase">
                  {step.label}
                </p>
                <p
                  className={cn(
                    "mt-0.5 font-display text-[13px] font-semibold leading-snug",
                    step.kind === "current" ? "text-fg" : "text-fg/70",
                  )}
                >
                  {step.title}
                </p>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div className="relative flex h-7 items-center justify-center" aria-hidden>
                <motion.span
                  className="absolute h-full w-px origin-top bg-gradient-to-b from-accent/55 to-accent/10"
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                />
                <motion.span
                  className="relative z-[1] text-[11px] text-accent/70"
                  animate={
                    reduce
                      ? undefined
                      : { y: [0, 3, 0], opacity: [0.4, 1, 0.4] }
                  }
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                >
                  ↓
                </motion.span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MetaPremiumCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[88px] flex-col rounded-xl border p-3 shadow-[0_8px_24px_rgba(0,0,0,0.16)]",
        accent
          ? "border-accent/30 bg-accent/10"
          : "border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <Icon
          className={cn("size-3.5", accent ? "text-accent" : "text-muted")}
          strokeWidth={1.75}
        />
        <p
          className={cn(
            "text-[10px] tracking-[0.16em] uppercase",
            accent ? "text-accent" : "text-muted",
          )}
        >
          {label}
        </p>
      </div>
      <p className="mt-2 text-sm font-medium leading-snug text-fg">{value}</p>
    </div>
  );
}
