"use client";

import { CampaignStage, DeviceComposition, ProductLaptop, ProductPhone } from "@/components/demos/campaign-scene";
import { OrbitPhoneHome, OrbitWebsite } from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

export function WebLive() {
  const { ref, reduce, step } = useLiveSequence(9, 1100, 2400);
  const pieces = reduce ? 4 : Math.min(4, step <= 0 ? 1 : step);

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="browser-phone"
        laptop={
          <ProductLaptop url="niscraft.com">
            <OrbitWebsite pieces={Math.max(1, pieces)} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <OrbitPhoneHome />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
