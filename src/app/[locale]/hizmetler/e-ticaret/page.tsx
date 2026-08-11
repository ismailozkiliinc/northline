import type { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { getServiceById } from "@/content/services";
import { ServiceDetailContent } from "@/components/pages/service-detail-content";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const service = getServiceById("ecommerce");
  if (!service) return {};
  const loc = locale as "tr" | "en";
  return pageMetadata({
    title: service.title[loc],
    description: service.description[loc],
    locale,
  });
}

export default async function EcommerceServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  await getLocale();
  return <ServiceDetailContent segment="e-ticaret" />;
}
