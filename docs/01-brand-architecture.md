# Northline — Marka & Mimari

## Referans Analizi (prensipler — kopya değil)

| Kaynak | Alınan prensip | Kasten kaçınılan |
|--------|----------------|------------------|
| Clay | Sunum kalitesi, büyük vaka anlatımı, tipografi hiyerarşisi | Logo/müşteri/case/görsel/metin kopyası; “global branding agency” dili |
| Cuberto | Cesur ama kontrollü hareket; portfolio-first ağırlık | Aşırı mouse-hijack; belirsiz deneysel navigasyon |
| Locomotive | Özgün karakter, scroll hikâyesi | Tüm projelerde aynı art-direction; scroll hijacking |
| Ramotion | Kurumsal güven, net hizmet dili, sonuç odaklı yapı | Sahte istatistik/testimonial/ödül |
| Awwwards | Tipografi ölçeği, grid dışı kompozisyon | Performans bozan WebGL şovu |

## Marka yönü

- **Ad:** Northline
- **Konum:** Premium dijital ürün stüdyosu (reklam ajansı değil)
- **Vaad:** İşletmeleri büyüten web siteleri, mobil uygulamalar ve özel dijital ürünler
- **EN:** We design and build digital products that move businesses forward.
- **Karakter:** Sakin özgüven, netlik, ölçülebilir iş sonucu — neon/crypto/metaverse yok

## Tasarım tokenları

| Token | Değer |
|-------|-------|
| bg-primary | `#07090D` |
| bg-secondary | `#0D1118` |
| surface | `#121722` |
| text | `#F7F8FA` |
| text-muted | `#A7AFBD` |
| border | `rgba(255,255,255,0.10)` |
| accent | `#5B7CFF` |
| accent-2 | `#8B5CF6` |
| success | `#48C78E` |
| display font | Plus Jakarta Sans |
| body font | Geist Sans |

## Site haritası

1. `/` Ana sayfa
2. `/hizmetler` Hizmetler index
3. `/hizmetler/web` Web siteleri
4. `/hizmetler/mobil` Mobil uygulamalar
5. `/hizmetler/ui-ux` UI/UX
6. `/hizmetler/saas` Özel yazılım & SaaS
7. `/hizmetler/e-ticaret` E-ticaret
8. `/hizmetler/ai` AI & otomasyon
9. `/calismalar` Portföy
10. `/calismalar/[slug]` Case study
11. `/surec` Çalışma süreci
12. `/hakkimizda` Hakkımızda
13. `/paketler` Paketler / bütçe rehberi
14. `/icgoruler` Blog
15. `/icgoruler/[slug]` Blog yazısı
16. `/sss` SSS
17. `/proje-baslat` Proje sihirbazı
18. `/iletisim` İletişim
19. `/gizlilik` Gizlilik
20. `/kvkk` KVKK
21. `/cerezler` Çerezler
22. `/kullanim-kosullari` Kullanım koşulları
23. `/admin` Yönetim (Supabase Auth)

EN route’lar paralel (`/en/...`).

## Teknik mimari

- Next.js App Router + TypeScript strict
- Tailwind CSS v4 + design tokens
- Framer Motion (mikro + reveal); Lenis (smooth scroll)
- next-intl (TR/EN)
- Supabase: content CMS + leads + auth (env yoksa seed/local fallback)
- React Hook Form + Zod
- Resend (e-posta; env yoksa console/log fallback)
- Vercel deploy hazır

## Kullanıcı akışları (özet)

1. Keşif → Çalışmalar / Hizmetler → Proje Başlat
2. Hero CTA → Proje sihirbazı (6 adım) → onay + toplantı
3. SSS / Blog → hizmet sayfası → teklif
4. Dil değiştirme → aynı path, lokalize içerik

## Animasyon bütçesi

- ~70% sakin / 30% hareket
- prefers-reduced-motion fallback
- Mobilde sadeleştirilmiş hero (CSS cihaz ekosistemi; WebGL opsiyonel ve kapalı default)
