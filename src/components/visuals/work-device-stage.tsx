"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualCanvas } from "@/components/visuals/visual-canvas";
import { GlassFloat, LightBrowser, LightPhone } from "@/components/visuals/light-stage";
import { UiHarbor, UiHarborBook, UiLedger } from "@/components/visuals/light-uis";

export function WorkDeviceStage() {
  const reduce = useReducedMotion();

  return (
    <VisualCanvas>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[1%] h-[52%] w-[80%]"
        style={{ transform: "perspective(1400px) rotateY(-6deg)" }}
      >
        <LightBrowser url="app.ledgerflow.io" className="h-full">
          <UiLedger />
        </LightBrowser>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        className="absolute top-[48%] left-[2%] z-10 h-[40%] w-[58%]"
      >
        <LightBrowser url="harbor.stay/odalar" className="h-full">
          <UiHarbor />
        </LightBrowser>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[36%] right-[4%] z-20 h-[58%] w-[28%]"
      >
        <LightPhone className="h-full w-full">
          <UiHarborBook />
        </LightPhone>
      </motion.div>
      <GlassFloat className="absolute bottom-[6%] left-[10%] z-30 w-[38%]">
        <p className="text-[8px] tracking-wide text-[#94a3b8] uppercase">Selected work</p>
        <p className="font-display text-[12px] font-bold text-[#111827]">Booking + Fintech UI</p>
      </GlassFloat>
    </VisualCanvas>
  );
}
