"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqAccordionItem = {
  id: string;
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              id={`faq-${item.id}`}
              aria-expanded={open}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="font-display text-base font-medium md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                  open && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-${item.id}`}
              hidden={!open}
              className={cn(
                "overflow-hidden pb-5 text-sm leading-relaxed text-muted md:text-base",
                !open && "hidden",
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
