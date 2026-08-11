import type { Metadata } from "next";
import {
  generateLegalMetadata,
  LegalPageContent,
  kvkkSections,
} from "@/components/pages/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return generateLegalMetadata(params, "kvkk");
}

export default function KvkkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <LegalPageContent params={params} titleKey="kvkk" sections={kvkkSections} />
  );
}
