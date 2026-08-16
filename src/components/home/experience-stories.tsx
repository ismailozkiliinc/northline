"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionLabel } from "@/components/system/section-label";
import { GradientHeading } from "@/components/system/gradient-heading";

type Story = {
  slug: string;
  image: string;
  overlay: "care" | "reserve" | "pulse" | "shop" | "harbor" | "ledger";
};

type CardCopy = {
  slug: string;
  category: string;
  title: string;
  f1: string;
  f1l: string;
  f2: string;
  f2l: string;
};

const STORIES: Story[] = [
  { slug: "campus-learn", image: "/images/stories/care.jpg", overlay: "care" },
  { slug: "table-reserve", image: "/images/stories/dining.jpg", overlay: "reserve" },
  { slug: "pulse-flow", image: "/images/stories/ai.jpg", overlay: "pulse" },
  { slug: "atelier-shop", image: "/images/stories/commerce.jpg", overlay: "shop" },
  { slug: "harbor-stay", image: "/images/stories/stay.jpg", overlay: "harbor" },
  { slug: "ledger-flow", image: "/images/stories/finance.jpg", overlay: "ledger" },
];

const LOOP_COPIES = 3;
const CYCLE_SECONDS = 30;
const RESUME_MS = 2800;
const SPEED_TAU = 0.34;
const DRAG_CLICK_PX = 8;

function Overlay({ kind }: { kind: Story["overlay"] }) {
  if (kind === "care") {
    return (
      <div className="absolute top-5 right-5 w-[42%] rounded-xl border border-white/40 bg-white/88 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.16)] backdrop-blur-md">
        <p className="text-[8px] font-semibold tracking-[0.16em] text-teal-700 uppercase">CarePath</p>
        <p className="mt-1 font-display text-sm font-bold text-[#111827]">A. Demir</p>
        <p className="text-[10px] text-[#64748b]">Suite 4 · Care</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-teal-100">
          <div className="h-full w-2/3 rounded-full bg-teal-600" />
        </div>
      </div>
    );
  }
  if (kind === "reserve") {
    return (
      <div className="absolute top-6 left-5 rounded-full bg-[#1c1917]/88 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
        Table 12 · 20:30
      </div>
    );
  }
  if (kind === "pulse") {
    return (
      <div className="absolute top-5 left-5 space-y-1.5">
        {["Ingest", "Route", "Update"].map((n, i) => (
          <div
            key={n}
            className="rounded-lg border border-white/20 bg-[#0b1020]/78 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md"
          >
            <span className="mr-2 font-mono text-[9px] text-indigo-300">0{i + 1}</span>
            {n}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "shop") {
    return (
      <div className="absolute top-5 right-5 rounded-xl bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">
        <p className="text-[8px] tracking-[0.16em] text-[#a8a29e] uppercase">Atelier</p>
        <p className="font-display text-sm font-bold text-[#111827]">Arc lamp</p>
      </div>
    );
  }
  if (kind === "harbor") {
    return (
      <div className="absolute right-5 bottom-24 rounded-xl border border-white/30 bg-[#1c1917]/70 px-3 py-2 text-white backdrop-blur-md">
        <p className="text-[8px] tracking-[0.16em] uppercase opacity-70">Harbor</p>
        <p className="font-display text-sm font-bold">Harbor Suite</p>
      </div>
    );
  }
  return (
    <div className="absolute top-5 left-5 rounded-xl bg-[#0b1020]/82 px-3 py-2 text-white backdrop-blur-md">
      <p className="text-[8px] text-emerald-300">Live</p>
      <p className="font-display text-lg font-bold">Ledger</p>
    </div>
  );
}

function StoryCard({
  story,
  copy,
  demoLabel,
  inert,
}: {
  story: Story;
  copy: CardCopy;
  demoLabel: string;
  inert?: boolean;
}) {
  return (
    <Link
      href={{ pathname: "/calismalar/[slug]", params: { slug: story.slug } }}
      tabIndex={inert ? -1 : undefined}
      aria-hidden={inert || undefined}
      draggable={false}
      className="group relative h-[420px] w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-[1.75rem] md:h-[520px] md:w-[min(32vw,340px)] lg:w-[min(26vw,360px)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={story.image}
        alt={inert ? "" : copy.title}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <Overlay kind={story.overlay} />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.28)_42%,transparent_68%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
          {demoLabel} · {copy.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-[1.75rem]">{copy.title}</h3>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="font-display text-lg font-bold">{copy.f1}</dt>
            <dd className="text-[11px] text-white/70">{copy.f1l}</dd>
          </div>
          <div>
            <dt className="font-display text-lg font-bold">{copy.f2}</dt>
            <dd className="text-[11px] text-white/70">{copy.f2l}</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

function wrapOffset(value: number, width: number) {
  if (width <= 0) return 0;
  let next = value % width;
  if (next < 0) next += width;
  return next;
}

export function ExperienceStories() {
  const t = useTranslations("homeStories");
  const cards = t.raw("cards") as CardCopy[];
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  const xRef = useRef(0);
  const speedRef = useRef(0);
  const loopWidthRef = useRef(0);
  const baseSpeedRef = useRef(40);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const resumeAtRef = useRef(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const firstSet = setRef.current;
    if (!track || !firstSet) return;
    const sets = track.querySelectorAll<HTMLElement>("[data-story-set]");
    const loopWidth =
      sets.length > 1 ? sets[1].offsetLeft - sets[0].offsetLeft : firstSet.offsetWidth;
    loopWidthRef.current = loopWidth;
    if (loopWidth > 0) {
      baseSpeedRef.current = loopWidth / CYCLE_SECONDS;
    }
    xRef.current = wrapOffset(xRef.current, loopWidth || 1);
    if (!reduceRef.current) {
      track.style.transform = `translate3d(${-xRef.current}px,0,0)`;
    }
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyReduce = () => {
      reduceRef.current = media.matches;
      if (media.matches) {
        speedRef.current = 0;
        xRef.current = 0;
        if (trackRef.current) trackRef.current.style.transform = "none";
      }
    };
    applyReduce();
    media.addEventListener("change", applyReduce);

    measure();
    const viewport = viewportRef.current;
    const firstSet = setRef.current;
    const observer = new ResizeObserver(measure);
    if (viewport) observer.observe(viewport);
    if (firstSet) observer.observe(firstSet);

    const onWheel = (event: WheelEvent) => {
      if (reduceRef.current) return;
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      if (absX < 1 && !event.shiftKey) return;
      if (absY > absX && !event.shiftKey) return;
      event.preventDefault();
      const loopWidth = loopWidthRef.current || 1;
      const delta = event.shiftKey && absX < absY ? event.deltaY : event.deltaX;
      xRef.current = wrapOffset(xRef.current + delta, loopWidth);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-xRef.current}px,0,0)`;
      }
      speedRef.current = 0;
      resumeAtRef.current = performance.now() + RESUME_MS;
    };

    viewport?.addEventListener("wheel", onWheel, { passive: false });

    const tick = (now: number) => {
      const last = lastTsRef.current || now;
      const dt = Math.min(0.05, (now - last) / 1000);
      lastTsRef.current = now;

      const loopWidth = loopWidthRef.current;
      const reduced = reduceRef.current;

      if (!reduced && loopWidth > 0 && !draggingRef.current) {
        const playing = !hoveringRef.current && now >= resumeAtRef.current;
        const target = playing ? baseSpeedRef.current : 0;
        const lerp = 1 - Math.exp(-dt / SPEED_TAU);
        speedRef.current += (target - speedRef.current) * lerp;
        if (Math.abs(speedRef.current) > 0.01) {
          xRef.current = wrapOffset(xRef.current + speedRef.current * dt, loopWidth);
          if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${-xRef.current}px,0,0)`;
          }
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      media.removeEventListener("change", applyReduce);
      observer.disconnect();
      viewport?.removeEventListener("wheel", onWheel);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  const pauseThenResume = () => {
    resumeAtRef.current = performance.now() + RESUME_MS;
  };

  const nudge = (dir: number) => {
    const loopWidth = loopWidthRef.current;
    if (reduceRef.current) {
      viewportRef.current?.scrollBy({ left: dir * ((viewportRef.current.clientWidth || 320) * 0.72), behavior: "smooth" });
      return;
    }
    const cardCount = STORIES.length;
    const step = loopWidth > 0 && cardCount ? loopWidth / cardCount : 360;
    xRef.current = wrapOffset(xRef.current + dir * step, loopWidth || 1);
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-xRef.current}px,0,0)`;
    }
    speedRef.current = 0;
    pauseThenResume();
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    dragMovedRef.current = false;
    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = reduceRef.current ? (viewportRef.current?.scrollLeft ?? 0) : xRef.current;
    speedRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || pointerIdRef.current !== event.pointerId) return;
    const delta = event.clientX - dragStartXRef.current;
    if (Math.abs(delta) > DRAG_CLICK_PX) dragMovedRef.current = true;
    if (reduceRef.current) {
      const el = viewportRef.current;
      if (el) el.scrollLeft = dragStartOffsetRef.current - delta;
      return;
    }
    const loopWidth = loopWidthRef.current || 1;
    xRef.current = wrapOffset(dragStartOffsetRef.current - delta, loopWidth);
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-xRef.current}px,0,0)`;
    }
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    draggingRef.current = false;
    pointerIdRef.current = null;
    if (dragMovedRef.current) pauseThenResume();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragMovedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    dragMovedRef.current = false;
  };

  return (
    <section className="border-t border-[#eef2f7] bg-white py-16 md:py-24">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionLabel>{t("eyebrow")}</SectionLabel>
            <GradientHeading as="h2" className="text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.1]">
              {t("title")}
            </GradientHeading>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#64748b] md:text-base">{t("body")}</p>
          </div>
          <div className="mb-1 hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#334155] transition-colors hover:border-indigo-200 hover:text-[#111827]"
              aria-label={t("prev")}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#334155] transition-colors hover:border-indigo-200 hover:text-[#111827]"
              aria-label={t("next")}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="mt-10 cursor-grab overflow-hidden px-[max(1rem,calc((100%-92rem)/2+1rem))] pb-4 select-none motion-reduce:overflow-x-auto motion-reduce:overflow-y-hidden motion-reduce:select-auto [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onMouseEnter={() => {
          hoveringRef.current = true;
        }}
        onMouseLeave={() => {
          hoveringRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max will-change-transform motion-reduce:transform-none"
        >
          {Array.from({ length: LOOP_COPIES }, (_, copy) => (
            <div
              key={copy}
              data-story-set
              ref={copy === 0 ? setRef : undefined}
              className={copy > 0 ? "ml-4 flex gap-4 md:ml-5 md:gap-5" : "flex gap-4 md:gap-5"}
            >
              {STORIES.map((story, i) => {
                const copyData = cards.find((c) => c.slug === story.slug) ?? cards[i];
                if (!copyData) return null;
                return (
                  <StoryCard
                    key={`${copy}-${story.slug}`}
                    story={story}
                    copy={copyData}
                    demoLabel={t("demo")}
                    inert={copy > 0}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
