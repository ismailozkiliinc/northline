import { cn } from "@/lib/utils";
import type { ServiceId } from "@/content/types";
import { LaptopFrame, PhoneFrame } from "./device-frames";
import {
  AdminPanel,
  AiWorkspace,
  AnalyticsDesktop,
  CmsDesktop,
  EcommerceCart,
  EcommerceCheckout,
  EcommerceProduct,
  FinanceDashboard,
  HotelBookingMobile,
  SupportTimeline,
  UiUxCompare,
} from "./product-screens";

type ServiceSceneProps = {
  id: ServiceId;
  className?: string;
};

function WebScene() {
  return (
    <div className="relative flex h-full items-end justify-center p-3 md:p-5">
      <LaptopFrame
        className="relative z-20 w-[68%] max-w-[240px]"
        transform="perspective(1000px) rotateY(-3deg)"
      >
        <div className="aspect-[16/10]">
          <CmsDesktop />
        </div>
      </LaptopFrame>
      <LaptopFrame
        className="absolute left-[10%] top-[12%] z-10 w-[58%] max-w-[200px] opacity-70"
        transform="perspective(1000px) rotateY(-8deg) scale(0.9)"
      >
        <div className="aspect-[16/10]">
          <AnalyticsDesktop />
        </div>
      </LaptopFrame>
    </div>
  );
}

function MobileScene() {
  const steps = [
    { label: "Keşfet", content: <HotelBookingMobile /> },
    {
      label: "Sepet",
      content: (
        <div className="flex min-h-[140px] flex-col bg-[#202b3a] p-2.5 text-[7px] text-white/75">
          <p className="font-medium">Bildirimler</p>
          <div className="mt-2 rounded-lg border border-indigo-500/25 bg-indigo-500/10 p-2">
            <p>Rezervasyon onaylandı</p>
            <p className="mt-0.5 text-[6px] text-white/45">Harbor · 12–15 Ağu</p>
          </div>
        </div>
      ),
    },
    {
      label: "Profil",
      content: (
        <div className="flex min-h-[140px] flex-col bg-[#202b3a] p-2.5 text-[7px] text-white/75">
          <p className="font-medium">Hesabım</p>
          <p className="mt-2 text-[6px] text-white/45">Elif Yılmaz</p>
          <p className="text-[6px] text-white/45">elif@example.com</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-full items-end justify-center gap-2 p-3 md:gap-3 md:p-5">
      {steps.map((step, i) => (
        <PhoneFrame
          key={step.label}
          className={cn(
            "w-[26%] min-w-[56px] max-w-[84px] md:max-w-[92px]",
            i === 1 && "-translate-y-4 md:-translate-y-5",
          )}
          transform={
            i === 0
              ? "perspective(700px) rotateY(5deg)"
              : i === 2
                ? "perspective(700px) rotateY(-5deg)"
                : undefined
          }
        >
          <div className="aspect-[9/16]">{step.content}</div>
        </PhoneFrame>
      ))}
    </div>
  );
}

function UiUxScene() {
  return (
    <div className="h-full p-2 md:p-3">
      <UiUxCompare className="h-full" />
    </div>
  );
}

function SaasScene() {
  return (
    <div className="h-full p-3 md:p-4">
      <div className="h-full overflow-hidden rounded-[1.35rem] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <FinanceDashboard />
      </div>
    </div>
  );
}

function EcommerceScene() {
  const steps = [
    { label: "Ürün", screen: <EcommerceProduct /> },
    { label: "Sepet", screen: <EcommerceCart /> },
    { label: "Ödeme", screen: <EcommerceCheckout /> },
  ];

  return (
    <div className="flex h-full items-center gap-2 p-3 md:gap-4 md:p-5">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-1 flex-col items-center gap-1.5">
          <PhoneFrame
            className="w-full max-w-[96px]"
            transform={i === 1 ? "translateY(-6px)" : undefined}
          >
            <div className="aspect-[9/16]">{step.screen}</div>
          </PhoneFrame>
          <span className="text-[6px] text-[#c4784a]/75 md:text-[7px]">{step.label}</span>
          {i < steps.length - 1 && (
            <div className="absolute hidden md:block" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}

function AiScene() {
  return (
    <div className="h-full p-3 md:p-5">
      <div className="h-full overflow-hidden rounded-[1.35rem] border border-[#5b7cff]/20 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
        <AiWorkspace />
      </div>
    </div>
  );
}

function SupportScene() {
  return (
    <div className="flex h-full items-center p-4 md:p-6">
      <div className="grid w-full max-w-lg grid-cols-1 gap-3 md:grid-cols-[1fr_0.85fr]">
        <SupportTimeline className="min-h-[160px]" />
        <div className="hidden min-h-[160px] overflow-hidden rounded-[1.25rem] border border-white/8 md:block">
          <AdminPanel />
        </div>
      </div>
    </div>
  );
}

const sceneMap: Record<ServiceId, () => React.ReactNode> = {
  web: WebScene,
  mobile: MobileScene,
  "ui-ux": UiUxScene,
  saas: SaasScene,
  ecommerce: EcommerceScene,
  ai: AiScene,
  support: SupportScene,
};

export function ServiceScene({ id, className }: ServiceSceneProps) {
  const Scene = sceneMap[id];
  return (
    <div
      className={cn(
        "relative aspect-[16/10] min-h-[200px] overflow-hidden rounded-[1.5rem]",
        "border border-border bg-linear-to-br from-bg-secondary via-surface to-bg",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-20 grid-lines" />
      <div className="relative h-full">
        <Scene />
      </div>
    </div>
  );
}
