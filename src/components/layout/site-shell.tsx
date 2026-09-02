import { Header } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { AnalyticsTracker } from "@/components/admin/analytics-tracker";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content / İçeriğe geç
      </a>
      <Header />
      <main id="content" className={cn("min-h-screen pt-[var(--nav-h)]", className)}>
        {children}
      </main>
      <SiteFooter />
      <CookieConsent />
      <AnalyticsTracker />
    </>
  );
}
