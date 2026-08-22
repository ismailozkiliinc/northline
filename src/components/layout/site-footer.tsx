"use client";

import { usePathname } from "@/i18n/navigation";
import { Footer } from "@/components/layout/footer";
import { ContactPageFooter } from "@/components/layout/contact-page-footer";

const CONTACT_PATHS = new Set(["/iletisim", "/contact"]);

export function SiteFooter() {
  const pathname = usePathname();

  if (CONTACT_PATHS.has(pathname)) {
    return <ContactPageFooter />;
  }

  return <Footer />;
}
