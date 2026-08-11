import { cn } from "@/lib/utils";
import { PhoneFrame } from "./device-frames";
import {
  EcommerceCart,
  EcommerceCheckout,
  EcommerceProduct,
} from "./product-screens";

type AtelierShopSceneProps = {
  className?: string;
};

export function AtelierShopScene({ className }: AtelierShopSceneProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] min-h-[220px] overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#2a1810] via-[#3a2418] to-[#120c0a]" />
      <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-[#c4784a]/12 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-28 w-28 rounded-full bg-[#8b5a3c]/14 blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(196,120,74,0.6) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative flex h-full items-end justify-center gap-2 p-4 md:gap-5 md:p-7">
        <PhoneFrame
          className="w-[26%] min-w-[68px] max-w-[95px] md:max-w-[108px]"
          transform="perspective(700px) rotateY(6deg)"
        >
          <div className="aspect-[9/16]">
            <EcommerceProduct />
          </div>
        </PhoneFrame>

        <PhoneFrame
          className="w-[28%] min-w-[72px] max-w-[100px] -translate-y-4 md:max-w-[116px] md:-translate-y-6"
          transform="perspective(700px) rotateY(-2deg) translateY(-8px)"
        >
          <div className="aspect-[9/16]">
            <EcommerceCart />
          </div>
        </PhoneFrame>

        <PhoneFrame
          className="w-[26%] min-w-[68px] max-w-[95px] md:max-w-[108px]"
          transform="perspective(700px) rotateY(-6deg)"
        >
          <div className="aspect-[9/16]">
            <EcommerceCheckout />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
