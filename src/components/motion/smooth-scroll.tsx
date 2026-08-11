"use client";

/**
 * Native scroll only.
 * Lenis was intercepting trackpad wheel events and caused scroll lock / freezes
 * on image-heavy pages (especially with ScrollTrigger / Framer Motion).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
