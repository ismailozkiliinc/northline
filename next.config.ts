import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** Set STATIC_EXPORT=1 for marketing-only static HTML (no admin/API). */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
        headers: async () => [
          {
            source: "/(.*)",
            headers: [
              { key: "X-Frame-Options", value: "DENY" },
              { key: "X-Content-Type-Options", value: "nosniff" },
              { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
              {
                key: "Permissions-Policy",
                value: "camera=(), microphone=(), geolocation=(), payment=()",
              },
              ...(isProd
                ? [
                    {
                      key: "Strict-Transport-Security",
                      value: "max-age=63072000; includeSubDomains; preload",
                    },
                  ]
                : []),
            ],
          },
        ],
      }),
};

export default withNextIntl(nextConfig);
