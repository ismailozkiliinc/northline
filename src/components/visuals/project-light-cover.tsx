"use client";

import { cn } from "@/lib/utils";
import { ProjectStoryCover } from "@/components/visuals/project-story-cover";

export function LightProjectCover({
  slug,
  featured = false,
  className,
}: {
  slug: string;
  featured?: boolean;
  className?: string;
}) {
  void featured;
  return (
      <div className={cn("h-full min-w-0 w-full overflow-hidden", className)}>
      <ProjectStoryCover slug={slug} />
    </div>
  );
}
