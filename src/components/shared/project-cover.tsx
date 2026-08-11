import { cn } from "@/lib/utils";

/** Navy family covers — character via soft tint, not painted fills. */
const tones: Record<string, string> = {
  "gradient-teal-calm-hospitality":
    "from-[#1a2a34] via-[#1e3038] to-[#172131]",
  "gradient-indigo-grid-saas":
    "from-[#1a2538] via-[#1e2a40] to-[#172131]",
  "gradient-copper-warm-ecommerce":
    "from-[#242018] via-[#2a261c] to-[#172131]",
  "gradient-green-soft-education":
    "from-[#1a2a28] via-[#1e302c] to-[#172131]",
  "gradient-teal-clinical-healthcare":
    "from-[#1a2a32] via-[#1e3038] to-[#172131]",
  "gradient-charcoal-luxury-dining":
    "from-[#22262e] via-[#262a32] to-[#172131]",
  "gradient-slate-workflow-automation":
    "from-[#1e2438] via-[#222840] to-[#172131]",
};

export function ProjectCover({
  tone,
  className,
}: {
  tone: string;
  className?: string;
}) {
  const gradient = tones[tone] ?? "from-[#202e40] via-[#26374a] to-[#172131]";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-linear-to-br",
        gradient,
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-40 grid-lines" />
      <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-8 left-8 right-8 space-y-3 opacity-80">
        <div className="h-3 w-1/3 rounded-full bg-white/15" />
        <div className="h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/8" />
          <div className="h-10 rounded-lg bg-white/8" />
          <div className="h-10 rounded-lg bg-accent/30" />
        </div>
      </div>
    </div>
  );
}
