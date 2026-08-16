"use client";

import { CampaignStage, DeviceComposition, ProductLaptop, ProductPhone } from "@/components/demos/campaign-scene";
import { AtlasPhone, AtlasWebsite } from "@/components/demos/product-uis";

export function AtlasSiteLive() {
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="laptop-phone"
        laptop={
          <ProductLaptop url="atlas.counsel">
            <AtlasWebsite />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <AtlasPhone />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}

export function AtlasDeskLive() {
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="atlas.counsel">
            <AtlasWebsite />
          </ProductLaptop>
        }
      />
    </CampaignStage>
  );
}
