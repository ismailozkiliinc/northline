"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", labelKey: "home", exact: true },
  { href: "/calismalar", labelKey: "work" },
  { href: "/iletisim", labelKey: "contact" },
] as const;

function isActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
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
          className="fixed inset-0 z-50 flex flex-col bg-[#05070D]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={t("menu")}
        >
          <div ref={panelRef} className="flex h-full flex-col">
            <div className="container-page flex h-[var(--nav-h)] items-center justify-between border-b border-white/8">
              <Logo onClick={onClose} />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-[#98A2B3]"
                aria-label={t("close")}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav
              className="container-page flex flex-1 flex-col justify-center gap-1 py-8"
              aria-label="Ana menü"
            >
              {navItems.map((item, i) => {
                const active = isActive(pathname, item.href, "exact" in item ? item.exact : false);
                return (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.04 + i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "font-display flex items-center gap-3 rounded-xl px-3 py-3.5 text-2xl font-semibold tracking-tight",
                        active ? "text-brand-gradient" : "text-[#F7F9FC]",
                      )}
                    >
                      {t(item.labelKey)}
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="container-page flex flex-col gap-5 border-t border-white/8 pb-10 pt-8">
              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#98A2B3] transition-colors hover:text-[#F7F9FC]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#6366f1]" aria-hidden />
                  {siteConfig.email}
                </a>
              ) : null}
              <div className="rounded-full p-[1.5px] bg-brand-gradient">
                <Link
                  href="/proje-baslat"
                  onClick={onClose}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0B1020] text-sm font-semibold text-[#F7F9FC]"
                >
                  {t("start")}
                  <ArrowRight className="h-4 w-4 text-[#6366f1]" aria-hidden />
                </Link>
              </div>
              <LocaleSwitcher variant="stacked" className="self-start" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
