import { cn } from "@/lib/utils";
import { PhoneFrame } from "./device-frames";
import { FinanceDashboard, FinanceMobileNotify } from "./product-screens";

type LedgerFlowSceneProps = {
  className?: string;
};

export function LedgerFlowScene({ className }: LedgerFlowSceneProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] min-h-[240px] overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0e1c] via-[#1a2250] to-[#101630]" />
      <div className="absolute inset-0 opacity-25 grid-lines" />
      <div className="absolute -right-10 top-1/4 h-36 w-36 rounded-full bg-indigo-500/14 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-24 w-24 rounded-full bg-indigo-400/8 blur-2xl" />

      <div className="relative h-full p-3 md:p-5">
        <div className="h-full overflow-hidden rounded-[1.35rem] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
          <FinanceDashboard />
        </div>

        <PhoneFrame
          className="absolute -bottom-1 -right-1 w-[24%] min-w-[72px] max-w-[100px] md:-right-2 md:bottom-0 md:w-[20%] md:max-w-[112px]"
          transform="perspective(800px) rotateY(-6deg)"
        >
          <div className="aspect-[9/14]">
            <FinanceMobileNotify />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
