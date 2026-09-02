import { reportProductionEnv, isProductionRuntime } from "@/lib/env";

/**
 * Next.js instrumentation — runs once on server boot.
 * Logs missing production env loudly; does not crash static routes.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (!isProductionRuntime()) return;

  const report = reportProductionEnv();
  if (!report.ok) {
    console.error(
      "[NISCRAFT] PRODUCTION ENV INCOMPLETE — set these before accepting live traffic:\n  - " +
        report.missing.join("\n  - "),
    );
  } else {
    console.info("[NISCRAFT] Production environment variables look complete.");
  }
}
