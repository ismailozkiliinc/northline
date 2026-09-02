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
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="NISCRAFT — Ana sayfa"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="34" y2="34">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="30" height="30" rx="8" fill="url(#logo-grad)" />
        <path
          d="M9.5 23.5 V10.5 L22.5 23.5 V10.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-[0.95rem] font-bold tracking-[0.06em] text-[#111827] uppercase">
        NISCRAFT
      </span>
    </Link>
  );
}
