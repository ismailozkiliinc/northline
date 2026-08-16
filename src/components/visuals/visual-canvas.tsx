import { cn } from "@/lib/utils";

export function VisualCanvas({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[480px] lg:max-w-[540px]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-brand-gradient opacity-[0.12] blur-3xl"
        aria-hidden
      />
      {children}
    </div>
  );
}
