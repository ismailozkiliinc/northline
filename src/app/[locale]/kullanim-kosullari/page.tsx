import type { Metadata } from "next";
import {
  generateLegalMetadata,
  LegalPageContent,
  termsSections,
} from "@/components/pages/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateLegalMetadata(params, "terms");
}

export default function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <LegalPageContent params={params} titleKey="terms" sections={termsSections} />
  );
}
