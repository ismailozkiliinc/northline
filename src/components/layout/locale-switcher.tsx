"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  variant?: "default" | "stacked";
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

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider",
        variant === "stacked" && "flex-col gap-2 text-sm",
        className,
      )}
      role="group"
      aria-label="Dil seçimi"
    >
      {siteConfig.locales.map((loc, index) => (
        <span key={loc} className="inline-flex items-center gap-1">
          {index > 0 && variant === "default" && (
            <span className="text-muted/40" aria-hidden>
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(loc)}
            className={cn(
              "rounded px-1.5 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              locale === loc
                ? "text-fg"
                : "text-muted hover:text-fg",
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
