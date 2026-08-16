import type { BlogCategory } from "@/content/types";

export type CoverKind =
  | "web-checklist"
  | "web"
  | "mobile-process"
  | "flutter-native"
  | "ecommerce"
  | "pricing"
  | "mvp"
  | "uiux"
  | "seo"
  | "ai"
  | "architecture"
  | "marketing";

const SLUG_COVER: Record<string, CoverKind> = {
  "corporate-website-checklist": "web-checklist",
  "mobile-app-process": "mobile-process",
  "flutter-vs-native": "flutter-native",
  "ecommerce-essential-features": "ecommerce",
  "website-pricing-factors": "pricing",
  "building-an-mvp": "mvp",
  "ui-ux-business-value": "uiux",
};

export function inferCoverKind(input: {
  slug?: string;
  title?: string;
  category?: BlogCategory | string;
}): CoverKind {
  if (input.slug && SLUG_COVER[input.slug]) return SLUG_COVER[input.slug];

  const hay = `${input.slug ?? ""} ${input.title ?? ""}`.toLowerCase();

  if (/flutter|native|swift|kotlin/.test(hay)) return "flutter-native";
  if (/checklist|kontrol list/.test(hay)) return "web-checklist";
  if (/\bmvp\b|minimum viable/.test(hay)) return "mvp";
  if (/fiyat|pricing|bütçe|budget|quote|teklif/.test(hay)) return "pricing";
  if (/e-?ticaret|ecommerce|checkout|shop|mağaza/.test(hay)) return "ecommerce";
  if (/\bui\b|\bux\b|figma|wireframe|prototip|tasarım sistemi/.test(hay)) return "uiux";
  if (/seo|sıralama|search/.test(hay)) return "seo";
  if (/\bai\b|yapay zek|chatbot|llm|neural/.test(hay)) return "ai";
  if (/api|backend|cloud|mimari|architecture|otomasyon/.test(hay)) return "architecture";
  if (/pazarlama|ads|campaign|reklam/.test(hay)) return "marketing";
  if (/mobil|mobile|uygulama|iphone|android|\bapp\b/.test(hay)) return "mobile-process";

  switch (input.category) {
    case "mobile":
      return "mobile-process";
    case "ecommerce":
      return "ecommerce";
    case "product":
      return "mvp";
    case "strategy":
      return "pricing";
    default:
      return "web";
  }
}
