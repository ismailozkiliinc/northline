"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  variant?: "default" | "stacked" | "minimal";
};

export function LocaleSwitcher({
  className,
  variant = "default",
}: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: (typeof siteConfig.locales)[number]) => {
    if (next === locale) return;
    router.replace(
      pathname as Parameters<typeof router.replace>[0],
      { locale: next },
    );
  };

  if (variant === "minimal") {
    return (
      <div
        className={cn("inline-flex items-center gap-1 text-xs font-semibold", className)}
        role="group"
        aria-label="Dil seçimi"
      >
        {siteConfig.locales.map((loc, index) => (
          <span key={loc} className="inline-flex items-center gap-1">
            {index > 0 && (
              <span className="text-[#cbd5e1]" aria-hidden>
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => switchLocale(loc)}
              className={cn(
                "rounded px-1 py-0.5 uppercase tracking-wider transition-colors",
                locale === loc
                  ? "text-[#6366f1]"
                  : "text-[#98A2B3] hover:text-[#F7F9FC]",
              )}
              aria-current={locale === loc ? "true" : undefined}
              lang={loc}
            >
              {loc.toUpperCase()}
            </button>
          </span>
        ))}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={cn("inline-flex flex-col gap-2", className)}
        role="group"
        aria-label="Dil seçimi"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] text-ink-muted uppercase">
          Language
        </span>
        <div className="inline-flex rounded-full border border-border-ink bg-transparent p-1 shadow-[var(--shadow-card)]">
          {siteConfig.locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => switchLocale(loc)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300",
                locale === loc
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink-muted hover:text-ink",
              )}
              aria-current={locale === loc ? "true" : undefined}
              lang={loc}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border-ink bg-white/90 p-0.5 shadow-[var(--shadow-card)] backdrop-blur-sm",
        className,
      )}
      role="group"
      aria-label="Dil seçimi"
    >
      {siteConfig.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "relative rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300",
            locale === loc
              ? "bg-ink text-white shadow-sm"
              : "text-ink-muted hover:text-ink",
          )}
          aria-current={locale === loc ? "true" : undefined}
          lang={loc}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
