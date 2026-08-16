"use client";

import { CampaignStage, DeviceComposition, ProductLaptop, ProductPhone } from "@/components/demos/campaign-scene";
import { ShopPhone, ShopWebsite } from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

export function CommerceLive({ contained = false }: { contained?: boolean }) {
  void contained;
  const { ref, reduce, step } = useLiveSequence(5, 1600, 2000);
  const s = reduce ? 4 : step;

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="laptop-phone"
        laptop={
          <ProductLaptop url="atelier.store">
            <ShopWebsite step={s} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <ShopPhone step={s} />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
