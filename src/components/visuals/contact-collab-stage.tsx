"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualCanvas } from "@/components/visuals/visual-canvas";
import { GlassFloat, LightBrowser } from "@/components/visuals/light-stage";
import { UiIntakeForm } from "@/components/visuals/light-uis";

export function ContactCollabStage() {
  const reduce = useReducedMotion();

  return (
    <VisualCanvas>
      <motion.div
        animate={reduce ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] left-[8%] h-[62%] w-[72%]"
      >
        <LightBrowser url="northline.studio /brief" className="h-full">
          <UiIntakeForm />
        </LightBrowser>
      </motion.div>

      <GlassFloat className="absolute top-[14%] right-[4%] z-20 w-[42%]">
        <p className="text-[8px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">
          Discovery
        </p>
        <p className="mt-1 font-display text-[13px] font-bold text-[#111827]">30 dk kickoff</p>
        <p className="mt-1 text-[8px] leading-snug text-[#64748b]">Kapsam, zaman çizelgesi ve ürün öncelikleri.</p>
      </GlassFloat>

      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        className="absolute right-[6%] bottom-[8%] z-20 w-[48%] overflow-hidden rounded-2xl border border-[#e8ecf4] bg-white p-3 shadow-[0_16px_36px_rgba(15,23,42,0.1)]"
      >
        <p className="font-mono text-[9px] text-[#64748b]">Nisan · Hafta 2</p>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {["P", "S", "Ç", "P", "C", "C", "P"].map((d, i) => (
            <span key={`${d}-${i}`} className="text-center text-[7px] text-[#94a3b8]">
              {d}
            </span>
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-md text-[8px] ${
                i === 8 ? "bg-brand-gradient font-semibold text-white" : "bg-[#f8faff] text-[#475569]"
              }`}
            >
              {i + 6}
            </div>
          ))}
        </div>
      </motion.div>
    </VisualCanvas>
  );
}
