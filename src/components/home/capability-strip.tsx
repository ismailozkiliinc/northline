"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type CapabilityStripProps = {
  className?: string;
};

export function CapabilityStrip({ className }: CapabilityStripProps) {
  const t = useTranslations("hero");
  const capabilities = t.raw("capabilities") as string[];

  return (
    <div
      className={cn(
        "relative border-y border-border bg-bg-secondary/60",
        className,
      )}
      aria-label="Capabilities"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg-secondary/90 to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg-secondary/90 to-transparent sm:w-16" />

      <div className="overflow-hidden py-4">
        <ul className="capability-marquee flex w-max gap-3 px-4 motion-reduce:animate-none sm:gap-4">
          {[...capabilities, ...capabilities].map((label, i) => (
            <li
              key={`${label}-${i}`}
              className="hairline flex shrink-0 items-center rounded-full bg-surface/80 px-4 py-2 text-xs font-medium tracking-wide text-muted sm:px-5 sm:text-sm"
            >
              <span
                className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
