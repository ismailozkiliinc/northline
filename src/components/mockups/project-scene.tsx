"use client";

import { CaseVisual } from "@/components/shared/premium-visual";

export type ProjectSlug =
  | "harbor-stay"
  | "ledger-flow"
  | "atelier-shop"
  | "campus-learn"
  | "table-reserve"
  | "pulse-flow";

export function ProjectScene({
  slug,
  className,
  variant,
}: {
  slug: ProjectSlug;
  className?: string;
  variant?: string;
}) {
  return <CaseVisual slug={slug} alt={slug} className={className} />;
}
