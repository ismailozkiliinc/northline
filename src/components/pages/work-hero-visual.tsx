"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Real desk photo — MacBook with live code + monitor UI. */
export function WorkHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative h-full w-full"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-[#f1f5f9] shadow-[0_28px_64px_-24px_rgba(15,23,42,0.22)] ring-1 ring-[#e2e8f0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/scenes/code-desk.jpg"
          alt=""
          className="h-full w-full object-cover object-[42%_48%]"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
