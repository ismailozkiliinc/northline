import { cn } from "@/lib/utils";

type GradientHeadingProps = {
  before?: string;
  highlight?: string;
  after?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
};

export function GradientHeading({
  before,
  highlight,
  after,
  as: Tag = "h1",
  className,
  children,
}: GradientHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold tracking-[-0.03em] whitespace-pre-line text-balance text-[#111827]",
        className,
      )}
    >
      {children ?? (
        <>
          {before}
          {highlight ? <span className="text-brand-gradient">{highlight}</span> : null}
          {after}
        </>
      )}
    </Tag>
  );
}
