"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "rise" | "clip" | "mask" | "depth";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
  variant = "rise",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps =
    variant === "clip"
      ? {
          initial: { opacity: 0, clipPath: "inset(12% 8% 18% 8%)" },
          whileInView: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
        }
      : variant === "mask"
        ? {
            initial: { opacity: 0, WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%)", maskImage: "linear-gradient(90deg, transparent 0%, black 12%)" },
            whileInView: { opacity: 1, WebkitMaskImage: "linear-gradient(90deg, black 0%, black 100%)", maskImage: "linear-gradient(90deg, black 0%, black 100%)" },
          }
        : variant === "depth"
          ? {
              initial: { opacity: 0, scale: 0.97, y: 16 },
              whileInView: { opacity: 1, scale: 1, y: 0 },
            }
          : {
              initial: { opacity: 0, y },
              whileInView: { opacity: 1, y: 0 },
            };

  return (
    <Comp
      className={cn(className)}
      {...motionProps}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
