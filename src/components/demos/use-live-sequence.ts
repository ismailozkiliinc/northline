"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Viewport-bound sequence with a pause at the end, then a soft restart. */
export function useLiveSequence(length: number, stepMs: number, holdMs = 2200) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.28 });
  const reduce = !!useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setStep(length - 1);
      return;
    }

    setStep(0);
    let i = 0;
    let timer = 0;

    const tick = () => {
      i += 1;
      if (i >= length) {
        timer = window.setTimeout(() => {
          i = 0;
          setStep(0);
          timer = window.setTimeout(tick, stepMs);
        }, holdMs);
        return;
      }
      setStep(i);
      timer = window.setTimeout(tick, stepMs);
    };

    timer = window.setTimeout(tick, stepMs);
    return () => window.clearTimeout(timer);
  }, [inView, reduce, length, stepMs, holdMs]);

  return { ref, reduce, inView, step };
}
