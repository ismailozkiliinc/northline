import { cn } from "@/lib/utils";
import { EducationDesktop } from "./product-screens";

type CampusLearnSceneProps = {
  className?: string;
};

export function CampusLearnScene({ className }: CampusLearnSceneProps) {
  return (
    <div
      className={cn(
        "relative aspect-[21/9] min-h-[180px] overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0e2018] via-[#1a3828] to-[#245040]" />
      <div className="absolute right-1/4 top-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[#d4ebe0]/8 blur-2xl" />

      <div className="relative h-full p-3 md:p-5">
        <div className="h-full overflow-hidden rounded-[1.35rem] border border-[#b8d4c4]/25 shadow-[0_20px_56px_rgba(0,0,0,0.38)]">
          <EducationDesktop />
        </div>
      </div>
    </div>
  );
}
