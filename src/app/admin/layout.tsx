import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "./admin.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NISCRAFT Admin",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="admin-root min-h-full bg-[#f8f9fc] text-[#0f172a] antialiased">{children}</body>
    </html>
  );
}
