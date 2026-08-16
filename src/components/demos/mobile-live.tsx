"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CampaignStage, ProductPhone } from "@/components/demos/campaign-scene";
import {
  OrbitPhoneAnalytics,
  OrbitPhoneDetail,
  OrbitPhoneHome,
  OrbitPhoneProfile,
} from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

const SCREENS = [OrbitPhoneHome, OrbitPhoneAnalytics, OrbitPhoneProfile, OrbitPhoneDetail];

export function MobileLive() {
  const { ref, reduce, inView, step } = useLiveSequence(4, 2200, 1800);
  const Screen = SCREENS[reduce ? 0 : step];

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <div className="absolute inset-[6%] flex items-end justify-center gap-[4%]">
        <div className="hidden h-[70%] origin-bottom -rotate-6 md:block">
          <ProductPhone>
            <OrbitPhoneAnalytics />
          </ProductPhone>
        </div>
        <motion.div
          className="relative z-10 h-[92%]"
          animate={reduce || !inView ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <ProductPhone>
            <AnimatePresence mode="wait">
              <motion.div
                key={reduce ? "static" : step}
                className="h-full"
                initial={reduce ? false : { opacity: 0.35 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0.35 }}
                transition={{ duration: 0.45 }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </ProductPhone>
        </motion.div>
        <div className="hidden h-[70%] origin-bottom rotate-6 md:block">
          <ProductPhone>
            <OrbitPhoneProfile />
          </ProductPhone>
        </div>
      </div>
    </CampaignStage>
  );
}
