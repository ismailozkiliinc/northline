import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  text: z.string().min(3).max(2000),
  locale: z.enum(["tr", "en"]).optional(),
});

const DISCLAIMER = {
  tr: "Bu öneri otomatik sınıflandırma içindir. Kesin fiyat, teslim tarihi veya taahhüt içermez.",
  en: "This suggestion is automated classification only. No fixed price, deadline, or commitment.",
};

type FeatureRule = { keywords: string[]; features: string[] };

const TYPE_RULES: { id: string; keywords: string[] }[] = [
  {
    id: "mobile",
    keywords: [
      "mobil",
      "mobile",
      "app",
      "uygulama",
      "ios",
      "android",
      "flutter",
      "push",
    ],
  },
  {
    id: "ecommerce",
    keywords: [
      "e-ticaret",
      "ecommerce",
      "e commerce",
      "mağaza",
      "store",
      "shop",
      "sepet",
      "cart",
      "ürün",
      "product",
      "checkout",
    ],
  },
  {
    id: "saas",
    keywords: [
      "saas",
      "panel",
      "crm",
      "dashboard",
      "admin",
      "rezervasyon",
      "booking",
      "workflow",
      "yazılım",
      "software",
    ],
  },
  {
    id: "uiux",
    keywords: [
      "ui",
      "ux",
      "tasarım",
      "design",
      "figma",
      "wireframe",
      "prototip",
      "prototype",
    ],
  },
  {
    id: "ai",
    keywords: [
      "ai",
      "yapay zeka",
      "artificial",
      "chatbot",
      "otomasyon",
      "automation",
      "rag",
      "llm",
    ],
  },
  {
    id: "web",
    keywords: [
      "web",
      "site",
      "website",
      "landing",
      "kurumsal",
      "corporate",
      "cms",
      "blog",
    ],
  },
];

const FEATURE_RULES: FeatureRule[] = [
  { keywords: ["cms", "içerik", "content"], features: ["cms"] },
  { keywords: ["blog", "haber", "news"], features: ["blog"] },
  { keywords: ["çok dilli", "multilang", "multilingual", "en/tr", "tr/en"], features: ["multilang"] },
  { keywords: ["seo", "arama"], features: ["seo"] },
  { keywords: ["form", "lead"], features: ["forms"] },
  { keywords: ["analitik", "analytics", "ga4"], features: ["analytics"] },
  { keywords: ["auth", "giriş", "login", "üyelik", "membership"], features: ["auth"] },
  { keywords: ["push", "bildirim", "notification"], features: ["push"] },
  { keywords: ["ödeme", "payment", "stripe", "iyzico"], features: ["payments"] },
  { keywords: ["offline", "çevrimdışı"], features: ["offline"] },
  { keywords: ["harita", "map", "konum", "location"], features: ["maps"] },
  { keywords: ["admin", "panel", "dashboard"], features: ["admin"] },
  { keywords: ["rapor", "report"], features: ["reports"] },
  { keywords: ["entegrasyon", "integration", "api"], features: ["integrations"] },
  { keywords: ["katalog", "catalog", "ürün list"], features: ["catalog"] },
  { keywords: ["sepet", "checkout", "cart"], features: ["checkout"] },
  { keywords: ["kargo", "shipping"], features: ["shipping"] },
  { keywords: ["stok", "inventory"], features: ["inventory"] },
  { keywords: ["chatbot", "asistan", "assistant"], features: ["chatbot"] },
  { keywords: ["rag", "bilgi tabanı", "knowledge"], features: ["rag"] },
  { keywords: ["otomasyon", "automation"], features: ["automation"] },
];

function classify(text: string): { type: string; features: string[] } {
  const lower = text.toLowerCase();
  let type = "unsure";
  let bestScore = 0;

  for (const rule of TYPE_RULES) {
    const score = rule.keywords.filter((k) => lower.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      type = rule.id;
    }
  }

  const features = new Set<string>();
  for (const rule of FEATURE_RULES) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      rule.features.forEach((f) => features.add(f));
    }
  }

  if (features.size === 0 && type !== "unsure") {
    const defaults: Record<string, string[]> = {
      web: ["cms", "forms"],
      mobile: ["auth"],
      saas: ["auth", "admin"],
      ecommerce: ["catalog", "checkout"],
      uiux: ["wireframes", "ui"],
      ai: ["chatbot"],
    };
    defaults[type]?.forEach((f) => features.add(f));
  }

  return { type, features: [...features] };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const locale = parsed.data.locale ?? "tr";
  const { type, features } = classify(parsed.data.text);

  const messages = {
    tr: `Metninize göre proje türü "${type}" olarak öne çıkıyor. Önerilen özellikler: ${features.join(", ") || "keşif görüşmesi ile netleştirilmeli"}.`,
    en: `Based on your text, project type "${type}" seems most relevant. Suggested features: ${features.join(", ") || "to clarify in discovery"}.`,
  };

  return NextResponse.json({
    type,
    features,
    message: messages[locale],
    disclaimer: DISCLAIMER[locale],
  });
}
