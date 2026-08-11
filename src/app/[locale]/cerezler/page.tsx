import type { Metadata } from "next";
import {
  cookieSections,
  generateLegalMetadata,
  LegalPageContent,
} from "@/components/pages/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateLegalMetadata(params, "cookies");
}

export default function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <LegalPageContent
      params={params}
      titleKey="cookies"
      sections={cookieSections}
    />
  );
}
