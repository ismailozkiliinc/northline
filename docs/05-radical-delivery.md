# Radikal yenileme — teslim raporu

| Bölüm | Eski sorun | Yapılan değişiklik | Mobil | Animasyon | Performans |
|-------|------------|--------------------|-------|-----------|------------|
| Portföy | Skeleton gradient kartlar | Asimetrik layout + 4 özgün UI mockup sahnesi | Tek kolon, 4:5 | Depth/scale, cursor etiketi (desktop) | CSS-only mockup — düşük maliyet |
| Hizmetler | Düz liste | Sticky showcase + ServiceScene geçişi | Accordion | Scene swap, expand | Client observer; reduced-motion |
| Süreç | Boş büyük kart | Sticky timeline + mobil details | Accordion | Progress line, scene swap | Hafif SVG |
| Güven | Soyut madde grid | Principles — doğrulanabilir ilkeler | 2 kolon | Reveal | Minimal |
| Hero | Monoton boşluk | Sıkı tipografi + ekosistem + yetkinlik şeridi | Sadeleşmiş | Split title | Mevcut cihaz CSS |
| CTA | Zayıf band | Büyük tipografi + aurora | Full-width butonlar | Statik + glow | CSS gradient |
| Case study | Cover skeleton | ProjectScene hero + tam bölüm yapısı | Stack | Reveal | CSS |
| Hizmet detay | Yalnız metin | ServiceScene + teslimatlar | Stack | — | CSS |
| Nav | Temel | Aktif underline, blur | Tam ekran menü | Underline | — |
| Tokens | Tek yüzey | Bölüm yüzeyleri, radius scale, process light | — | Duration tokens | — |

## Build
`npm run build` — **başarılı** (71 sayfa)

## Ölçülmeyen / açık
- Lighthouse (deploy sonrası)
- Ekran görüntüsü (manuel tarayıcı)
- Broken link otomatik taraması
- Console: env yoksa lead e-posta log (beklenen)
- WebGL hero (bilinçli olarak eklenmedi)
- Gerçek proje fotoğrafı / metrik (demo işaretli)

## Demo
http://localhost:3000
