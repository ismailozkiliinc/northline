/**
 * NISCRAFT media catalog
 * Art direction: premium creative technology studio
 * — architectural interiors, cinematic light, unique per section
 */
export const media = {
  hero: {
    ecosystem: "/images/hero/ecosystem.png",
  },
  cases: {
    "harbor-stay": "/images/cases/harbor-stay.png",
    "ledger-flow": "/images/cases/ledger-flow.png",
    "atelier-shop": "/images/cases/atelier-shop.png",
    "campus-learn": "/images/cases/campus-learn.png",
    "care-path": "/images/cases/care-path.png",
    "table-reserve": "/images/cases/table-reserve.png",
    "pulse-flow": "/images/cases/pulse-flow.png",
  },
  services: {
    web: "/images/services/web.png",
    mobile: "/images/services/mobile.png",
    "ui-ux": "/images/studio/ui.png",
    saas: "/images/services/saas.png",
    ecommerce: "/images/services/ecommerce.png",
    ai: "/images/studio/growth.png",
    support: "/images/studio/qa.png",
  },
  about: {
    studio: "/images/about/studio.png",
    materials: "/images/studio/materials.png",
    lounge: "/images/studio/lounge.png",
    craft: "/images/studio/ui.png",
  },
  studio: {
    strategy: "/images/studio/strategy.png",
    ux: "/images/studio/ux.png",
    ui: "/images/studio/ui.png",
    prototype: "/images/studio/prototype.png",
    development: "/images/studio/development.png",
    qa: "/images/studio/qa.png",
    launch: "/images/studio/launch.png",
    growth: "/images/studio/growth.png",
    materials: "/images/studio/materials.png",
    lounge: "/images/studio/lounge.png",
  },
  process: {
    discovery: "/images/studio/strategy.png",
    research: "/images/studio/ux.png",
    wireframe: "/images/studio/prototype.png",
    design: "/images/studio/ui.png",
    development: "/images/studio/development.png",
    qa: "/images/studio/qa.png",
    launch: "/images/studio/launch.png",
    growth: "/images/studio/growth.png",
  },
  cta: {
    aurora: "/images/studio/launch.png",
  },
} as const;

export type CaseImageSlug = keyof typeof media.cases;
export type ServiceImageId = keyof typeof media.services;
export type StudioImageId = keyof typeof media.studio;
export type ProcessImageId = keyof typeof media.process;
