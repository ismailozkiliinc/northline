"use client";

import { CampaignStage, DeviceComposition, ProductLaptop, ProductPhone } from "@/components/demos/campaign-scene";
import { OrbitPhoneHome, OrbitWebsite, TechChip } from "@/components/demos/product-uis";

export function UniverseLive() {
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="laptop-phone"
        laptop={
          <ProductLaptop url="orbit.niscraft.com">
            <OrbitWebsite pieces={4} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <OrbitPhoneHome />
          </ProductPhone>
        }
      />
      <div className="pointer-events-none absolute top-[14%] left-[5%] z-20 hidden sm:block">
        <TechChip>{"</>"}</TechChip>
      </div>
      <div className="pointer-events-none absolute right-[38%] top-[10%] z-20 hidden md:block">
        <TechChip>AI</TechChip>
      </div>
    </CampaignStage>
  );
}
