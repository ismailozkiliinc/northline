import type { Metadata } from "next";
import {
  generateLegalMetadata,
  LegalPageContent,
  privacySections,
} from "@/components/pages/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateLegalMetadata(params, "privacy");
}

export default function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <LegalPageContent
      params={params}
      titleKey="privacy"
      sections={privacySections}
    />
  );
}
