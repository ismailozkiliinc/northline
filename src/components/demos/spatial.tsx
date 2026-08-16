"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Field = { mx: ReturnType<typeof useMotionValue<number>>; my: ReturnType<typeof useMotionValue<number>>; reduce: boolean; rich: boolean };

const SpatialCtx = createContext<Field | null>(null);

export function useSpatial() {
  return useContext(SpatialCtx);
}

function mouseRange(depth: number) {
  if (depth <= 0.65) return 2;
  if (depth >= 1.25) return 6;
  return 4;
}

export function SpatialField({
  children,
  className,
  contained = false,
}: {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  const reduce = !!useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [rich, setRich] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine) and (min-width: 768px)");
    const sync = () => setRich(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <SpatialCtx.Provider value={{ mx, my, reduce, rich }}>
      <div
        className={cn(
          "group/scene relative h-full w-full min-w-0 bg-transparent",
          contained
            ? "overflow-hidden [perspective:none] [transform-style:flat]"
            : "overflow-visible [perspective:1400px] [transform-style:preserve-3d]",
          className,
        )}
        onMouseMove={(e) => {
          if (reduce || !rich) return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
          my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        {children}
      </div>
    </SpatialCtx.Provider>
  );
}

export function LiveStage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <SpatialField className={className}>{children}</SpatialField>;
}

export function Float({
  children,
  className,
  style,
  depth = 1,
  drift = 5,
  spin = 0,
  duration = 10,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  depth?: number;
  drift?: number;
  spin?: number;
  duration?: number;
  delay?: number;
}) {
  const field = useSpatial();
  const reduce = field?.reduce ?? false;
  const rich = field?.rich ?? false;
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const srcX = field?.mx ?? fallbackX;
  const srcY = field?.my ?? fallbackY;
  const px = mouseRange(depth);
  const x = useSpring(useTransform(srcX, [-1, 1], [-px, px]), {
    stiffness: 70,
    damping: 26,
    mass: 0.5,
  });
  const y = useSpring(useTransform(srcY, [-1, 1], [-px * 0.7, px * 0.7]), {
    stiffness: 70,
    damping: 26,
    mass: 0.5,
  });

  const tilt = Math.min(Math.abs(spin), 2);
  const live = !reduce && rich;

  return (
    <div className={cn("absolute [transform-style:preserve-3d]", className)} style={style}>
      <motion.div className="h-full w-full will-change-transform" style={live ? { x, y } : undefined}>
        <motion.div
          animate={
            live && (drift > 0 || tilt > 0)
              ? {
                  y: drift ? [0, -Math.min(drift, 6), 0] : 0,
                  rotate: tilt ? [-tilt * 0.45, tilt, -tilt * 0.45] : 0,
                }
              : undefined
          }
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FloorShadow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-[6%] left-1/2 h-[18%] w-[62%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.16),transparent_70%)] blur-md",
        className,
      )}
    />
  );
}

export function GlassChip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full border border-white/70 bg-white/55 px-3 py-1.5 text-[10px] font-semibold text-[#111827] shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
