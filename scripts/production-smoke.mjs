#!/usr/bin/env node
/**
 * Post-deploy smoke helper for NISCRAFT.
 *
 * Prerequisites: production env filled, `npm run build`, `npm start` running.
 *
 * Usage:
 *   BASE_URL=https://YOUR_REAL_DOMAIN.com node scripts/production-smoke.mjs
 *   BASE_URL=http://127.0.0.1:3000 node scripts/production-smoke.mjs
 *
 * This script verifies HTTP routes + lead API response shape.
 * Mailbox delivery must still be checked manually in LEAD_NOTIFY_EMAIL inbox.
 */

const base = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

async function check(path, opts = {}) {
  const res = await fetch(`${base}${path}`, opts);
  return { path, status: res.status, res };
}

async function main() {
  console.log(`NISCRAFT smoke → ${base}\n`);

  const routes = [
    "/",
    "/calismalar",
    "/iletisim",
    "/gizlilik",
    "/kvkk",
    "/admin/login",
    "/icon.png",
    "/opengraph-image.png",
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const path of routes) {
    const { status } = await check(path);
    const ok = status >= 200 && status < 400;
    console.log(`${ok ? "OK" : "FAIL"} ${status} ${path}`);
    if (!ok) process.exitCode = 1;
  }

  const notFound = await check("/this-route-should-404");
  console.log(`${notFound.status === 404 ? "OK" : "FAIL"} ${notFound.status} /404-check`);
  if (notFound.status !== 404) process.exitCode = 1;

  const admin = await check("/admin", { redirect: "manual" });
  const adminOk = admin.status === 307 || admin.status === 302 || admin.status === 200;
  console.log(`${adminOk ? "OK" : "FAIL"} ${admin.status} /admin (expect redirect or login)`);
  if (!adminOk) process.exitCode = 1;

  const home = await fetch(`${base}/`);
  const html = await home.text();
  for (const needle of ["og:title", "og:image", "twitter:card", "rel=\"canonical\""]) {
    const found = html.includes(needle) || html.includes(needle.replace(/"/g, ""));
    console.log(`${found ? "OK" : "FAIL"} meta ${needle}`);
    if (!found) process.exitCode = 1;
  }
  if (/localhost|127\.0\.0\.1/.test(html) && !base.includes("127.0.0.1") && !base.includes("localhost")) {
    console.log("FAIL localhost found in production HTML");
    process.exitCode = 1;
  }

  const leadRes = await fetch(`${base}/api/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Smoke Tester",
      email: "smoke@example.com",
      phone: "5550000000",
      company: "NISCRAFT Smoke",
      message: "Automated production smoke lead — safe to ignore.",
      consent: true,
      type: "web",
      source: "contact",
      website: "",
    }),
  });
  const lead = await leadRes.json().catch(() => ({}));
  console.log("\nLEAD API", leadRes.status, lead);

  if (lead.stored === true && lead.emailed === true && (lead.success === true || lead.ok === true)) {
    console.log("OK lead stored + emailed (check LEAD_NOTIFY_EMAIL inbox manually)");
  } else if (lead.stored === true && lead.emailed === false) {
    console.log("WARN lead stored but emailed=false — configure Resend / verify domain");
    process.exitCode = 1;
  } else {
    console.log("FAIL unexpected lead response");
    process.exitCode = 1;
  }

  console.log("\nManual: open LEAD_NOTIFY_EMAIL mailbox and confirm the smoke message arrived.");
  process.exit(process.exitCode ?? 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
