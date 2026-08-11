# Northline — Kurulum

## Gereksinimler

- Node.js 20+
- npm 10+

## Yerel çalıştırma

```bash
cp .env.example .env.local
npm install
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000)  
Varsayılan dil: Türkçe (`/`). İngilizce: `/en`.

## Ortam değişkenleri

`.env.example` dosyasına bakın.

| Değişken | Zorunlu | Açıklama |
|----------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Önerilir | Canonical / OG URL |
| Supabase trio | Hayır | Yoksa başvurular `.data/leads.json` |
| `RESEND_API_KEY` | Hayır | Yoksa e-posta konsola yazılır |
| Calendly / WhatsApp / telefon | Hayır | UI yalnızca doluysa gösterir |

## Supabase

1. Proje oluşturun  
2. `supabase/schema.sql` çalıştırın  
3. URL + anon + service role key ekleyin  

## Deploy (Vercel)

1. Repo’yu bağlayın  
2. Environment variables ekleyin  
3. Framework: Next.js (otomatik)

## İçerik

Şimdilik içerik `src/content/*` ve `src/messages/*` üzerinden yönetilir (seed).  
Supabase CMS tabloları sonraki iterasyon için hazırdır.

## Form test

1. `/proje-baslat` → sihirbazı tamamla  
2. `.data/leads.json` veya Supabase `leads` tablosunu kontrol et  
3. Resend ayarlıysa gelen kutusunu kontrol et  

## Scriptler

- `npm run dev` — geliştirme  
- `npm run build` — production build  
- `npm run start` — production sunucu  
- `npm run lint` — ESLint  
