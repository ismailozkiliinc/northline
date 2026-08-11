import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2.5 text-fg transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="Northline — Ana sayfa"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="6"
          className="stroke-border fill-surface"
          strokeWidth="1"
        />
        <line
          x1="8"
          y1="18"
          x2="20"
          y2="10"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="10" r="2.5" className="fill-accent" />
        <circle
          cx="8"
          cy="18"
          r="1.75"
          className="fill-muted"
          opacity="0.6"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Northline
      </span>
    </Link>
  );
}
