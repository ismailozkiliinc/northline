"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualCanvas } from "@/components/visuals/visual-canvas";
import { StudioBrowser, StudioPhone } from "@/components/visuals/premium-devices";
import { UiCipherAssistant, UiLumenHome, UiOrbitWeb } from "@/components/visuals/showcase-uis";

export function ServicesUniverse() {
  const reduce = useReducedMotion();

  return (
    <VisualCanvas>
      <motion.div
        animate={reduce ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[0%] h-[56%] w-[82%]"
        style={{ transform: "perspective(1400px) rotateY(-10deg) rotateX(4deg)" }}
      >
        <StudioBrowser url="app.orbit.dev" className="h-full">
          <UiOrbitWeb />
        </StudioBrowser>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -11, 0] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute right-[2%] bottom-[3%] z-20 h-[56%] w-[30%]"
        style={{ transform: "perspective(900px) rotateY(-12deg)" }}
      >
        <StudioPhone className="h-full w-full">
          <UiLumenHome />
        </StudioPhone>
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-[6%] left-[4%] z-10 h-[34%] w-[46%] overflow-hidden rounded-2xl border border-[#e8ecf4] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.1)]"
      >
        <UiCipherAssistant />
      </motion.div>
    </VisualCanvas>
  );
}
