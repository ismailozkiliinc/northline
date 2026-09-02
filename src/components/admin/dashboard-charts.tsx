"use client";

import type { PageViewRecord } from "@/lib/cms/types";

function groupByDay(views: PageViewRecord[]) {
  const map = new Map<string, number>();
  for (const v of views) {
    const day = v.created_at.slice(0, 10);
    map.set(day, (map.get(day) ?? 0) + 1);
  }
  const days = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0])).slice(-14);
  const max = Math.max(...days.map(([, c]) => c), 1);
  return days.map(([day, count]) => ({ day, count, pct: (count / max) * 100 }));
}

function topPages(views: PageViewRecord[]) {
  const map = new Map<string, number>();
  for (const v of views) {
    map.set(v.path, (map.get(v.path) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
}

function deviceSplit(views: PageViewRecord[]) {
  const map = { mobile: 0, desktop: 0, tablet: 0, unknown: 0 };
  for (const v of views) {
    const d = v.device_type ?? "unknown";
    map[d] += 1;
  }
  const total = Object.values(map).reduce((a, b) => a + b, 0) || 1;
  return Object.entries(map).map(([k, v]) => ({ label: k, pct: Math.round((v / total) * 100) }));
}

export function DashboardCharts({ views }: { views: PageViewRecord[] }) {
  const daily = groupByDay(views);
  const pages = topPages(views);
  const devices = deviceSplit(views);

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-wide text-[#94a3b8] uppercase">Günlük ziyaretçi</p>
        <div className="flex h-36 items-end gap-1.5">
          {daily.length === 0 ? (
            <p className="text-sm text-[#94a3b8]">Henüz trafik verisi yok.</p>
          ) : (
            daily.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-[#6366f1] to-[#818cf8] transition-all"
                  style={{ height: `${Math.max(d.pct, 8)}%` }}
                  title={`${d.day}: ${d.count}`}
                />
                <span className="text-[9px] text-[#94a3b8]">{d.day.slice(5)}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-[#94a3b8] uppercase">En çok ziyaret edilen</p>
          <div className="space-y-2">
            {pages.map(([path, count]) => (
              <div key={path} className="flex items-center justify-between rounded-lg bg-[#f8fafc] px-3 py-2 text-sm">
                <span className="truncate">{path}</span>
                <span className="font-semibold text-[#6366f1]">{count}</span>
              </div>
            ))}
            {pages.length === 0 ? <p className="text-sm text-[#94a3b8]">—</p> : null}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-[#94a3b8] uppercase">Cihaz dağılımı</p>
          <div className="space-y-2">
            {devices.map((d) => (
              <div key={d.label}>
                <div className="mb-1 flex justify-between text-xs capitalize">
                  <span>{d.label}</span>
                  <span>{d.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#eef2ff]">
                  <div className="h-full rounded-full bg-[#6366f1]" style={{ width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
