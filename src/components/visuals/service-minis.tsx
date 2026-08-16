import {
  FloatPanel,
  ShowcaseStage,
  StudioBrowser,
  StudioPhone,
} from "@/components/visuals/premium-devices";
import {
  UiCipherAssistant,
  UiCipherEval,
  UiCipherWorkspace,
  UiHaloCart,
  UiHaloPdp,
  UiHaloStore,
  UiLumenActivity,
  UiLumenAnalytics,
  UiLumenHome,
  UiNorthPhone,
  UiNorthSystem,
  UiOrbitMobile,
  UiOrbitWeb,
} from "@/components/visuals/showcase-uis";
import { UiAdsBoard, UiSeoBoard } from "@/components/visuals/light-uis";

export function WebMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute top-[6%] bottom-[8%] left-[1%] w-[76%]"
          style={{
            transform: "perspective(1800px) rotateY(-18deg) rotateX(8deg)",
            transformOrigin: "50% 70%",
          }}
        >
          <StudioBrowser url="app.orbit.dev" className="h-full">
            <UiOrbitWeb />
          </StudioBrowser>
        </div>
        <div
          className="absolute right-[2%] bottom-[-4%] z-20 h-[92%] w-[26%] min-w-[88px]"
          style={{ transform: "perspective(1000px) rotateY(-16deg) rotateX(3deg)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiOrbitMobile />
          </StudioPhone>
        </div>
        <FloatPanel className="absolute bottom-[9%] left-[8%] z-30 w-[30%] min-w-[128px] p-2.5">
          <p className="text-[7px] tracking-wide text-[#94a3b8] uppercase">Deploys · 30d</p>
          <p className="font-display text-[15px] font-bold text-[#111827]">148</p>
          <p className="text-[8px] font-medium text-indigo-500">+12 this week · P95 182ms</p>
        </FloatPanel>
      </ShowcaseStage>
    </div>
  );
}

export function MobileMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute top-[16%] left-[6%] z-10 h-[68%] w-[24%] min-w-[72px] opacity-95"
          style={{ transform: "perspective(900px) rotateY(28deg) rotateX(6deg) translateZ(-40px)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiLumenAnalytics />
          </StudioPhone>
        </div>
        <div
          className="absolute top-[8%] left-[36%] z-30 h-[86%] w-[28%] min-w-[90px]"
          style={{ transform: "perspective(900px) rotateY(-4deg) rotateX(2deg) translateZ(48px)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiLumenHome />
          </StudioPhone>
        </div>
        <div
          className="absolute right-[5%] top-[20%] z-20 h-[70%] w-[24%] min-w-[72px]"
          style={{ transform: "perspective(900px) rotateY(-24deg) rotateX(5deg) translateZ(-24px)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiLumenActivity />
          </StudioPhone>
        </div>
        <FloatPanel className="absolute right-[10%] bottom-[6%] z-40 w-[28%] p-2">
          <p className="text-[7px] text-[#94a3b8]">Weekly</p>
          <p className="font-display text-[13px] font-bold text-[#111827]">+18%</p>
        </FloatPanel>
      </ShowcaseStage>
    </div>
  );
}

export function AiMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute top-[8%] bottom-[10%] left-[3%] w-[70%]"
          style={{
            transform: "perspective(1600px) rotateY(-12deg) rotateX(5deg)",
            transformOrigin: "left center",
          }}
        >
          <StudioBrowser url="cipher.northline/workspace" className="h-full">
            <UiCipherWorkspace />
          </StudioBrowser>
        </div>
        <FloatPanel className="absolute top-[12%] right-[5%] z-30 h-[42%] w-[32%] min-w-[120px]">
          <UiCipherAssistant />
        </FloatPanel>
        <FloatPanel className="absolute right-[8%] bottom-[7%] z-20 w-[30%] p-0">
          <UiCipherEval />
        </FloatPanel>
      </ShowcaseStage>
    </div>
  );
}

export function BrandMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute top-[10%] bottom-[12%] left-[4%] w-[62%]"
          style={{ transform: "perspective(1400px) rotateY(-10deg) rotateX(4deg)" }}
        >
          <StudioBrowser url="design.northline /system" className="h-full">
            <UiNorthSystem />
          </StudioBrowser>
        </div>
        <div
          className="absolute right-[6%] bottom-[4%] z-20 h-[82%] w-[26%] min-w-[86px]"
          style={{ transform: "perspective(900px) rotateY(-14deg)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiNorthPhone />
          </StudioPhone>
        </div>
        <FloatPanel className="absolute top-[14%] right-[22%] z-30 p-2">
          <p className="text-[7px] text-[#94a3b8]">State</p>
          <p className="text-[9px] font-semibold text-indigo-600">Primary / hover / disabled</p>
        </FloatPanel>
      </ShowcaseStage>
    </div>
  );
}

export function EcommerceMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute top-[7%] bottom-[10%] left-[2%] w-[68%]"
          style={{ transform: "perspective(1700px) rotateY(-15deg) rotateX(6deg)" }}
        >
          <StudioBrowser url="halo.store" className="h-full">
            <UiHaloStore />
          </StudioBrowser>
        </div>
        <div
          className="absolute right-[22%] bottom-[3%] z-20 h-[70%] w-[20%] min-w-[72px] -rotate-6"
          style={{ transform: "perspective(900px) rotateY(8deg)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiHaloPdp />
          </StudioPhone>
        </div>
        <div
          className="absolute right-[3%] bottom-[4%] z-30 h-[78%] w-[22%] min-w-[80px]"
          style={{ transform: "perspective(900px) rotateY(-12deg)" }}
        >
          <StudioPhone className="h-full w-full">
            <UiHaloCart />
          </StudioPhone>
        </div>
      </ShowcaseStage>
    </div>
  );
}

export function MarketingMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute inset-[8%]"
          style={{ transform: "perspective(1400px) rotateY(-10deg) rotateX(4deg)" }}
        >
          <StudioBrowser url="ads.northline /kampanya" className="h-full">
            <UiAdsBoard />
          </StudioBrowser>
        </div>
      </ShowcaseStage>
    </div>
  );
}

export function SeoMiniVisual() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden">
      <ShowcaseStage>
        <div
          className="absolute inset-[8%]"
          style={{ transform: "perspective(1400px) rotateY(-10deg) rotateX(4deg)" }}
        >
          <StudioBrowser url="northline.studio /seo" className="h-full">
            <UiSeoBoard />
          </StudioBrowser>
        </div>
      </ShowcaseStage>
    </div>
  );
}

export const SaasMiniVisual = AiMiniVisual;
export const SupportMiniVisual = BrandMiniVisual;
export const WebShowcase = WebMiniVisual;
export const MobileShowcase = MobileMiniVisual;
export const AiShowcase = AiMiniVisual;
export const UxShowcase = BrandMiniVisual;
export const ShopShowcase = EcommerceMiniVisual;
