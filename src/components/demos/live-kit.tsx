"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LiveStage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#f4f6ff]", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 88% 0%, rgba(99,102,241,0.12), transparent 55%), radial-gradient(ellipse 40% 40% at 6% 100%, rgba(139,92,246,0.07), transparent 50%)",
        }}
      />
      {children}
    </div>
  );
}

export function useDemoActive(amount = 0.4) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: false, amount });
  return { ref, reduce: !!reduce, active: !!reduce || inView };
}

export function CountUp({
  to,
  active,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: {
  to: number;
  active: boolean;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);

  return (
    <span className={className}>
      {prefix}
      {value.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export function PointerTilt({
  children,
  className,
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  if (reduce) {
    return <div className={cn("h-full w-full", className)}>{children}</div>;
  }

  return (
    <div
      className={cn("h-full w-full", className)}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 180ms ease-out",
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: px * max, y: -py * max });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
}
