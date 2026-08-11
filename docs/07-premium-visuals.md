# Premium visual delivery

## Produced assets (`public/images/`)

| Set | Files |
|-----|-------|
| Hero | `hero/ecosystem.png` |
| Cases | harbor-stay, ledger-flow, atelier-shop, campus-learn (Care Path), table-reserve, pulse-flow |
| Services | web, mobile, ui-ux, saas, ecommerce, ai |
| About | studio.png |
| CTA | aurora.png |

## Integration
- Hero, Featured Work, Work index, Case pages → `CaseVisual` / `PremiumVisual`
- Services sticky + service detail → `ServiceVisual`
- Process cinema panels → premium stills
- About → studio photography (no fake people)
- CTA → aurora full-bleed

## Content
6 demo case studies. No fake awards/testimonials/metrics.

## Notes
- Next.js Image serves optimized formats at runtime.
- Source PNGs are large; compress to WebP/AVIF offline before production CDN if needed.
- CSS skeleton mockups no longer drive primary surfaces.

Build: OK · Demo: http://localhost:3000
