"use client";

import { cn } from "@/lib/utils";

const PHOTO: Record<string, string> = {
  "harbor-stay": "/images/campaign/harbor-campaign.jpg",
  "ledger-flow": "/images/campaign/ledger-campaign.jpg",
  "atelier-shop": "/images/campaign/atelier-campaign.jpg",
  "campus-learn": "/images/campaign/care-path.jpg",
  "table-reserve": "/images/campaign/reserve-campaign.jpg",
  "pulse-flow": "/images/campaign/pulse-work.jpg",
};

const TINT: Record<string, string> = {
  "harbor-stay": "from-[#0f172a]/80 via-[#0f172a]/25",
  "ledger-flow": "from-[#0b1020]/88 via-[#0b1020]/30",
  "atelier-shop": "from-[#1c1917]/80 via-transparent",
  "campus-learn": "from-teal-950/80 via-teal-950/20",
  "table-reserve": "from-[#1c1917]/82 via-[#1c1917]/25",
  "pulse-flow": "from-[#0b1020]/85 via-[#312e81]/25",
};

const LABEL: Record<string, { kicker: string; name: string }> = {
  "harbor-stay": { kicker: "Hospitality", name: "Harbor Stay" },
  "ledger-flow": { kicker: "Finance", name: "Ledger" },
  "atelier-shop": { kicker: "Commerce", name: "Atelier" },
  "campus-learn": { kicker: "Health", name: "CarePath" },
  "table-reserve": { kicker: "Dining", name: "Reserve" },
  "pulse-flow": { kicker: "AI", name: "Orbit AI" },
};

function Overlay({ slug }: { slug: string }) {
  if (slug === "campus-learn") {
    return (
      <div className="absolute top-5 left-5 rounded-2xl border border-white/35 bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur-md">
        <p className="text-[8px] tracking-[0.16em] text-teal-700 uppercase">Rounds</p>
        <p className="font-display text-sm font-bold text-[#111827]">Suite 4 · 09:40</p>
      </div>
    );
  }
  if (slug === "table-reserve") {
    return (
      <div className="absolute top-6 right-5 rounded-xl bg-[#1c1917]/80 px-3 py-2 text-white backdrop-blur-md">
        <p className="text-[8px] tracking-[0.16em] uppercase opacity-60">Tonight</p>
        <p className="font-display text-sm font-bold">Tasting · 8 seats</p>
      </div>
    );
  }
  if (slug === "pulse-flow") {
    return (
      <div className="absolute top-5 right-5 rounded-xl border border-white/15 bg-[#0b1020]/80 px-3 py-2 text-white backdrop-blur-md">
        <p className="font-mono text-[9px] text-indigo-300">run · 04</p>
        <p className="font-display text-sm font-bold">Queue clear</p>
      </div>
    );
  }
  if (slug === "atelier-shop") {
    return (
      <div className="absolute top-5 left-5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#111827]">
        Look 07
      </div>
    );
  }
  if (slug === "harbor-stay") {
    return (
      <div className="absolute top-5 right-5 rounded-xl bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">
        <p className="text-[8px] tracking-[0.16em] text-[#94a3b8] uppercase">Dates</p>
        <p className="font-display text-sm font-bold text-[#111827]">12 — 15 Oct</p>
      </div>
    );
  }
  return (
    <div className="absolute top-5 right-5 rounded-xl bg-emerald-500/90 px-3 py-2 text-white">
      <p className="text-[8px] tracking-[0.16em] uppercase opacity-80">Books</p>
      <p className="font-display text-sm font-bold">Closed</p>
    </div>
  );
}

export function ProjectStoryCover({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const src = PHOTO[slug] ?? PHOTO["harbor-stay"];
  const tint = TINT[slug] ?? TINT["harbor-stay"];
  const label = LABEL[slug] ?? LABEL["harbor-stay"];

  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-2xl", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <Overlay slug={slug} />
      <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", tint)} />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/65 uppercase">{label.kicker}</p>
        <p className="mt-1 font-display text-xl font-bold">{label.name}</p>
      </div>
    </div>
  );
}
