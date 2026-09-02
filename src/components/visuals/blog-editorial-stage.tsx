"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualCanvas } from "@/components/visuals/visual-canvas";
import { GlassFloat, LightBrowser, LightPhone } from "@/components/visuals/light-stage";
import { UiCorporateSite, UiFitnessHome, UiMvpBoard } from "@/components/visuals/light-uis";

export function BlogEditorialStage() {
  const reduce = useReducedMotion();

  return (
    <VisualCanvas>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[6%] left-[4%] h-[52%] w-[78%]"
      >
        <LightBrowser url="niscraft.com /icgoruler" className="h-full">
          <UiCorporateSite />
        </LightBrowser>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        className="absolute top-[46%] left-[4%] z-10 h-[36%] w-[48%] overflow-hidden rounded-[1.2rem] border border-[#e8ecf4] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.1)]"
      >
        <UiMvpBoard />
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
        className="absolute right-[6%] bottom-[6%] z-20 h-[48%] w-[28%]"
      >
        <LightPhone className="h-full w-full">
          <UiFitnessHome />
        </LightPhone>
      </motion.div>
      <GlassFloat className="absolute top-[10%] right-[6%] z-30 w-[36%]">
        <p className="text-[8px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">Insights</p>
        <p className="mt-1 font-display text-[12px] font-bold text-[#111827]">Web · Mobile · Product</p>
      </GlassFloat>
    </VisualCanvas>
  );
}
