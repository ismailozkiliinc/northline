import { cn } from "@/lib/utils";

export function NorthlineStageArt({
  className,
}: {
  art: string;
  className?: string;
}) {
  return <div className={cn("relative bg-transparent", className)} />;
}
