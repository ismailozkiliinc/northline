"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/calismalar", labelKey: "work" },
  { href: "/hizmetler", labelKey: "services" },
  { href: "/surec", labelKey: "process" },
  { href: "/hakkimizda", labelKey: "about" },
  { href: "/icgoruler", labelKey: "insights" },
] as const;

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={t("menu")}
        >
          <div
            ref={panelRef}
            className="flex h-full flex-col"
          >
            <div className="container-page flex h-[var(--nav-h)] items-center justify-between">
              <Logo onClick={onClose} />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
                aria-label={t("close")}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav
              className="container-page flex flex-1 flex-col justify-center gap-2 py-8"
              aria-label="Ana menü"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + i * 0.04, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "font-display block py-3 text-3xl font-semibold tracking-tight text-fg",
                      "link-underline w-fit",
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="container-page flex flex-col gap-6 border-t border-border pb-10 pt-8">
              <Button asChild size="lg" className="w-full">
                <Link href="/proje-baslat" onClick={onClose}>
                  {t("start")}
                </Link>
              </Button>
              <LocaleSwitcher variant="stacked" className="self-start" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
