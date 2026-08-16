"use client";

import type { BlogCategory } from "@/content/types";
import { BlogEditorial } from "@/components/demos/blog-editorials";
import { inferCoverKind } from "@/lib/blog-cover";
import { VisualSlot } from "@/components/demos/campaign-scene";
import { cn } from "@/lib/utils";

export type ArticleCoverDensity = "featured" | "compact";

type ArticleCoverProps = {
  slug: string;
  title?: string;
  category?: BlogCategory | string;
  density?: ArticleCoverDensity;
  className?: string;
};

export function ArticleCover({ slug, title, category, density = "compact", className }: ArticleCoverProps) {
  const kind = inferCoverKind({ slug, title, category });
  return (
    <VisualSlot className={cn(density === "featured" ? "h-[320px] md:h-[420px]" : "h-[220px] md:h-[260px]", className)}>
      <BlogEditorial kind={kind} />
    </VisualSlot>
  );
}
