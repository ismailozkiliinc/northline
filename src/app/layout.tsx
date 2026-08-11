import type { ReactNode } from "react";

/** Root layout — html/body live in [locale]/layout for correct lang attribute. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
