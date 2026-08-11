"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProcessStep = {
  n: string;
  title: string;
  client: string;
  team: string;
  output: string;
  gate: string;
};

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const t = useTranslations("process");
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={s.n}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                active === i
                  ? "border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(91,124,255,0.2)]"
                  : "border-border bg-surface/40 hover:border-accent/40",
              )}
            >
              <span className="font-mono text-xs text-accent">{s.n}</span>
              <span className="text-sm font-medium">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
        <span className="font-mono text-xs text-accent">{step.n}</span>
        <h3 className="mt-2 font-display text-xl font-semibold">{step.title}</h3>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t("client")}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{step.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t("team")}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{step.team}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t("output")}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{step.output}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
              {t("gate")}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{step.gate}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
