"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Menu } from "lucide-react";
import { LayoutGroup, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
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

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f1f5f9] bg-white/95 backdrop-blur-md">
        <div className="container-page flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Ana menü">
            <LayoutGroup id="site-nav">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href, "exact" in item ? item.exact : false);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-200",
                    active
                      ? "font-semibold text-[#111827]"
                      : "font-medium text-[#64748b] hover:text-[#111827] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#cbd5e1] after:transition-transform after:duration-200 hover:after:scale-x-100",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.labelKey)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-0 -bottom-1 h-px bg-indigo-400/80"
                      aria-hidden
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
            </LayoutGroup>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSwitcher className="hidden md:inline-flex" variant="minimal" />
            <div className="hidden rounded-full p-[1.5px] bg-brand-gradient sm:block">
              <Link
                href="/proje-baslat"
                className="group inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#fafbff]"
              >
                {t("start")}
                <ArrowRight
                  className="h-4 w-4 text-[#6366f1] transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] text-[#64748b] transition-colors hover:text-[#111827] xl:hidden"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={t("menu")}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
