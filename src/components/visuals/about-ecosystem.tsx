"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualCanvas } from "@/components/visuals/visual-canvas";
import { LightBrowser, LightPhone } from "@/components/visuals/light-stage";
import { UiAiChat, UiCorporateSite, UiFitnessHome } from "@/components/visuals/light-uis";

export function AboutEcosystem() {
  const reduce = useReducedMotion();

  return (
    <VisualCanvas>
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[6%] left-[4%] h-[50%] w-[78%]"
      >
        <LightBrowser url="niscraft.com" className="h-full">
          <UiCorporateSite />
        </LightBrowser>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -11, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[38%] right-[6%] z-20 h-[54%] w-[30%]"
      >
        <LightPhone className="h-full w-full">
          <UiFitnessHome />
        </LightPhone>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        className="absolute bottom-[6%] left-[6%] z-10 h-[38%] w-[48%] overflow-hidden rounded-[1.35rem] border border-[#e8ecf4] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
      >
        <UiAiChat />
      </motion.div>
    </VisualCanvas>
  );
}
