"use client";

import { ProjectStoryCover } from "@/components/visuals/project-story-cover";

export function ProductLiveCover({ slug }: { slug: string }) {
  return (
    <div className="h-full min-w-0 w-full overflow-hidden">
      <ProjectStoryCover slug={slug} />
    </div>
  );
}
