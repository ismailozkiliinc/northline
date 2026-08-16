import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const companyLinks = [
  { href: "/surec" as const, labelKey: "process" as const },
  { href: "/calismalar" as const, labelKey: "work" as const },
  { href: "/sss" as const, labelKey: "faq" as const },
  { href: "/iletisim" as const, labelKey: "contact" as const },
] as const;

const legalLinks = [
  { href: "/gizlilik" as const, key: "privacy" as const },
  { href: "/kvkk" as const, key: "kvkk" as const },
  { href: "/cerezler" as const, key: "cookies" as const },
  { href: "/kullanim-kosullari" as const, key: "terms" as const },
] as const;

type FooterProps = {
  className?: string;
};

export async function Footer({ className }: FooterProps) {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tLegal = await getTranslations("legal");
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border bg-bg-footer text-[#f8fafc]", className)}>
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#94a3b8]">
              {t("tagline")}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
              {t("company")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#cbd5e1] transition-colors hover:text-white link-underline"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
              {t("legal")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#cbd5e1] transition-colors hover:text-white link-underline"
                  >
                    {tLegal(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
