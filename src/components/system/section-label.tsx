import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-semibold tracking-[0.22em] text-brand-gradient uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
