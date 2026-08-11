import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/hizmetler/web" as const, key: "web" as const },
  { href: "/hizmetler/mobil" as const, key: "mobile" as const },
  { href: "/hizmetler/saas" as const, key: "saas" as const },
  { href: "/hizmetler/ui-ux" as const, key: "uiux" as const },
  { href: "/hizmetler/e-ticaret" as const, key: "ecommerce" as const },
  { href: "/hizmetler/ai" as const, key: "ai" as const },
] as const;

const companyLinks = [
  { href: "/hakkimizda" as const, labelKey: "about" as const },
  { href: "/surec" as const, labelKey: "process" as const },
  { href: "/calismalar" as const, labelKey: "work" as const },
  { href: "/icgoruler" as const, labelKey: "insights" as const },
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
  const tServices = await getTranslations("services.items");
  const tLegal = await getTranslations("legal");
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border bg-bg-footer", className)}>
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t("tagline")}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t("services")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg/80 transition-colors hover:text-fg link-underline"
                  >
                    {tServices(`${item.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t("company")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg/80 transition-colors hover:text-fg link-underline"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t("legal")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg/80 transition-colors hover:text-fg link-underline"
                  >
                    {tLegal(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
