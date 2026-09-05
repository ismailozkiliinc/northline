"use client";

import { cn } from "@/lib/utils";

type AtmosphereTone = "default" | "web" | "mobile" | "ai" | "work" | "about" | "contact" | "mist";

/** Soft page-local glow layer — sits under section content, never opaque white. */
export function PageAtmosphere({
  tone = "default",
  className,
}: {
  tone?: AtmosphereTone;
  className?: string;
}) {
  const glows: Record<AtmosphereTone, string> = {
    default:
      "radial-gradient(circle at 18% 22%, rgba(99,102,241,0.12), transparent 34%), radial-gradient(circle at 82% 60%, rgba(56,189,248,0.07), transparent 32%)",
    mist:
      "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.08), transparent 40%)",
    web:
      "radial-gradient(circle at 20% 18%, rgba(99,102,241,0.13), transparent 34%), radial-gradient(circle at 80% 55%, rgba(56,189,248,0.09), transparent 32%)",
    mobile:
      "radial-gradient(circle at 78% 20%, rgba(139,92,246,0.11), transparent 34%), radial-gradient(circle at 24% 70%, rgba(99,102,241,0.09), transparent 32%)",
    ai:
      "radial-gradient(circle at 28% 24%, rgba(56,189,248,0.11), transparent 34%), radial-gradient(circle at 72% 58%, rgba(99,102,241,0.1), transparent 32%)",
    work:
      "radial-gradient(circle at 50% 12%, rgba(99,102,241,0.07), transparent 38%), radial-gradient(circle at 88% 70%, rgba(56,189,248,0.05), transparent 34%)",
    about:
      "radial-gradient(circle at 50% 42%, rgba(99,102,241,0.08), transparent 40%)",
    contact:
      "radial-gradient(circle at 82% 78%, rgba(99,102,241,0.1), transparent 34%), radial-gradient(circle at 68% 95%, rgba(139,92,246,0.08), transparent 36%)",
  };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-transparent", className)}
      aria-hidden
    >
      <div className="absolute inset-0" style={{ background: glows[tone] }} />
      <div className="absolute inset-0 opacity-[0.25] hero-grid-move" />
    </div>
  );
}
