"use client";

import gsap from "gsap";

export const INTRO_DURATION_DESKTOP = 3.55;
export const INTRO_DURATION_MOBILE = 2.55;

export type IntroAnim = {
  assemble: number;
  energy: number;
  orbitY: number;
  orbitX: number;
  camZ: number;
  camPush: number;
  volumetric: number;
  mouseX: number;
  mouseY: number;
};

export function createIntroAnim(): IntroAnim {
  return {
    assemble: 0,
    energy: 0,
    orbitY: -10 * (Math.PI / 180),
    orbitX: 0,
    camZ: 4.8,
    camPush: 0,
    volumetric: 0,
    mouseX: 0,
    mouseY: 0,
  };
}

export function runIntroTimeline(
  anim: IntroAnim,
  opts: {
    lite: boolean;
    onBrand?: () => void;
    onTagline?: () => void;
    onTaglineHide?: () => void;
    onWipe?: () => void;
    onDone?: () => void;
  },
) {
  const dur = opts.lite ? INTRO_DURATION_MOBILE : INTRO_DURATION_DESKTOP;
  const tl = gsap.timeline({
    onComplete: () => opts.onDone?.(),
  });

  tl.to(anim, { volumetric: 0, duration: 0.3, ease: "none" }, 0);
  tl.to(anim, { volumetric: 1, duration: 0.35, ease: "power2.out" }, 0.3);
  tl.to(anim, { volumetric: 0.35, duration: 0.5, ease: "power1.inOut" }, 0.65);

  const assembleDur = opts.lite ? 0.7 : 0.95;
  tl.to(anim, { assemble: 1, duration: assembleDur, ease: "power2.inOut" }, 0.55);

  tl.to(
    anim,
    { energy: 1, duration: opts.lite ? 0.35 : 0.45, ease: "none" },
    0.55 + assembleDur * 0.85,
  );

  tl.to(
    anim,
    {
      orbitY: 7 * (Math.PI / 180),
      orbitX: -2 * (Math.PI / 180),
      duration: opts.lite ? 0.45 : 0.65,
      ease: "power1.inOut",
    },
    0.55 + assembleDur,
  );

  tl.to(anim, { camZ: 5.4, duration: 0.4, ease: "power1.out" }, 0.55 + assembleDur);

  const brandAt = opts.lite ? 1.45 : 1.85;
  tl.call(() => opts.onBrand?.(), undefined, brandAt);
  tl.call(() => opts.onTagline?.(), undefined, brandAt + 0.2);
  tl.call(() => opts.onTaglineHide?.(), undefined, brandAt + 0.2 + 0.7);

  const pushAt = opts.lite ? 1.85 : 2.55;
  tl.to(
    anim,
    { camPush: 1, camZ: 1.2, duration: opts.lite ? 0.55 : 0.75, ease: "power3.in" },
    pushAt,
  );
  tl.call(() => opts.onWipe?.(), undefined, pushAt + (opts.lite ? 0.28 : 0.38));
  tl.to({}, { duration: 0.01 }, dur);

  return tl;
}
