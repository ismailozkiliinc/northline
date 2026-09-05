"use client";

import dynamic from "next/dynamic";
import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  createIntroAnim,
  runIntroTimeline,
  INTRO_DURATION_DESKTOP,
  INTRO_DURATION_MOBILE,
  type IntroAnim,
} from "@/components/intro/intro-timeline";

const STORAGE_KEY = "niscraft-intro-seen";

const IntroCanvas = dynamic(
  () => import("@/components/intro/intro-canvas").then((m) => m.IntroCanvas),
  { ssr: false },
);

const LETTERS = "NISCRAFT".split("");

type Phase = "boot" | "play" | "wipe" | "done";

function isLite() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(max-width: 900px)").matches;
}

function sessionSeen() {
  if (typeof window === "undefined") return true;
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

function BrandType({ show, showTag }: { show: boolean; showTag: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
      <div className="flex items-center gap-[0.08em] font-display text-[clamp(1.65rem,4.5vw,3.25rem)] font-semibold tracking-[0.08em] text-[#F7F9FC]">
        {LETTERS.map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
            animate={
              show
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : { opacity: 0, filter: "blur(8px)", y: 8 }
            }
            transition={{
              duration: 0.55,
              delay: show ? i * 0.035 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {ch}
          </motion.span>
        ))}
      </div>
      <AnimatePresence>
        {showTag ? (
          <motion.p
            key="tag"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 text-[12px] font-medium tracking-[0.28em] text-[#98A2B3] uppercase md:text-[13px]"
          >
            Digital Products · Web · Mobile · AI
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function StudioIntro() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("boot");
  const [canvasOn, setCanvasOn] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [wipe, setWipe] = useState(false);
  const anim = useRef<IntroAnim>(createIntroAnim());
  const tlRef = useRef<{ kill: () => void } | null>(null);

  const finish = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    startTransition(() => {
      setPhase("done");
      setCanvasOn(false);
    });
  }, []);

  useEffect(() => {
    if (sessionSeen()) {
      startTransition(() => setPhase("done"));
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // prefers-reduced-motion: brief logo → hero (~500ms), no 3D
    if (reduce === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      startTransition(() => {
        setPhase("play");
        setShowBrand(true);
      });
      const t = window.setTimeout(finish, 500);
      return () => {
        window.clearTimeout(t);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      };
    }

    const lite = isLite();
    startTransition(() => {
      setPhase("play");
      setCanvasOn(true);
    });

    const startTl = window.setTimeout(() => {
      tlRef.current = runIntroTimeline(anim.current, {
        lite,
        onBrand: () => startTransition(() => setShowBrand(true)),
        onTagline: () => startTransition(() => setShowTag(true)),
        onTaglineHide: () => startTransition(() => setShowTag(false)),
        onWipe: () => {
          startTransition(() => {
            setWipe(true);
            setPhase("wipe");
            setShowTag(false);
          });
          window.setTimeout(finish, 560);
        },
        onDone: () => {
          /* wipe handler finishes */
        },
      });
    }, 40);

    const safety = window.setTimeout(
      finish,
      (lite ? INTRO_DURATION_MOBILE : INTRO_DURATION_DESKTOP) * 1000 + 800,
    );

    return () => {
      window.clearTimeout(startTl);
      window.clearTimeout(safety);
      tlRef.current?.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [reduce, finish]);

  if (phase === "done") return null;

  return (
    <div
      className={cn(
        "pointer-events-auto fixed inset-0 z-[120] overflow-hidden bg-[#05070B]",
        wipe && "pointer-events-none",
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(79,124,255,0.14), transparent 42%), radial-gradient(circle at 70% 30%, rgba(79,124,255,0.08), transparent 35%), radial-gradient(circle at 30% 70%, rgba(124,92,255,0.06), transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {canvasOn ? (
        <div
          className={cn(
            "absolute inset-0 z-[3] transition-opacity duration-200",
            wipe && "opacity-0",
          )}
        >
          <IntroCanvas anim={anim} />
        </div>
      ) : null}

      <BrandType show={showBrand && !wipe} showTag={showTag && !wipe} />

      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 35%, rgba(5,7,11,0.72) 100%)",
        }}
      />

      {/* Reflection wipe — continuity into hero */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[20] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          wipe ? "translate-x-0" : "-translate-x-[105%]",
        )}
        style={{
          background:
            "linear-gradient(108deg, transparent 0%, rgba(79,124,255,0.45) 18%, rgba(124,92,255,0.28) 38%, rgba(82,217,255,0.2) 52%, #05070B 68%, #05070B 100%)",
        }}
      />
    </div>
  );
}
