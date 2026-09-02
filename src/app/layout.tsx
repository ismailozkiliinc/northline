import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
};

/** Root layout — html/body live in [locale]/layout for correct lang attribute. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
