"use client";

import { useEffect, useState, startTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const FADE = { duration: 0.36, ease: [0.4, 0, 0.2, 1] as const };

type Phase = "hello" | "call" | "messages";
type ChatItem =
  | { id: string; kind: "typing"; from: "john" | "me" }
  | { id: string; kind: "msg"; from: "john" | "me"; text: string };

function StatusBar({ light = false }: { light?: boolean }) {
  const fill = light ? "#ffffff" : "#000000";
  return (
    <div className="relative z-10 flex h-11 shrink-0 items-center justify-between px-5">
      <span
        className="w-[4.5rem] text-[13px] font-semibold tabular-nums tracking-[-0.02em] leading-none"
        style={{ color: fill }}
      >
        9:41
      </span>
      <div className="h-7 w-[5.75rem] shrink-0" aria-hidden />
      <div className="flex w-[4.5rem] shrink-0 items-center justify-end gap-1">
        <svg width="15" height="10" viewBox="0 0 15 10" aria-hidden>
          <rect x="0" y="6" width="2.6" height="4" rx="0.5" fill={fill} />
          <rect x="4" y="4" width="2.6" height="6" rx="0.5" fill={fill} />
          <rect x="8" y="1.8" width="2.6" height="8.2" rx="0.5" fill={fill} />
          <rect x="12" y="0" width="2.6" height="10" rx="0.5" fill={fill} opacity="0.28" />
        </svg>
        <svg width="13" height="10" viewBox="0 0 13 10" fill={fill} aria-hidden>
          <circle cx="6.5" cy="8.6" r="1" />
          <path d="M2.2 5.5a6 6 0 0 1 8.6 0L9.7 6.6a4.4 4.4 0 0 0-6.4 0L2.2 5.5Z" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden>
          <rect x="0.35" y="0.35" width="17.5" height="9.3" rx="2" stroke={fill} strokeWidth="0.7" opacity="0.4" fill="none" />
          <rect x="1.5" y="1.5" width="13" height="7" rx="1" fill={fill} />
          <path d="M19.2 2.8v4.4c.85-.35.85-1.35 0-1.7V2.8Z" fill={fill} opacity="0.45" />
        </svg>
      </div>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[0.65rem] z-50 flex justify-center">
      <div className="relative h-[1.55rem] w-[5.75rem] rounded-full bg-black">
        <div className="absolute right-[0.72rem] top-1/2 h-[0.52rem] w-[0.52rem] -translate-y-1/2 rounded-full bg-[#12141c] shadow-[inset_0_0_0_1px_rgba(90,110,160,0.35)]" />
        <div className="absolute right-[1.4rem] top-1/2 h-[0.28rem] w-[0.28rem] -translate-y-1/2 rounded-full bg-[#0a0a10]" />
      </div>
    </div>
  );
}

function HomeBar({ light = false }: { light?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[0.4rem] z-50 flex justify-center">
      <div className={`h-[0.28rem] w-[5.75rem] rounded-full ${light ? "bg-white/40" : "bg-black/28"}`} />
    </div>
  );
}

function TypingDots({ light }: { light?: boolean }) {
  return (
    <div className="flex h-4 items-center gap-1.5 px-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={`block h-1.5 w-1.5 rounded-full ${light ? "bg-white/85" : "bg-[#8e8e93]"}`}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.95, repeat: Infinity, delay: i * 0.14, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function HelloScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#f5f5f7]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 42%, #fff 0%, #f5f5f7 60%, #ebebed 100%)",
        }}
      />
      <StatusBar />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-8">
        <motion.p
          className="font-display text-[2.25rem] font-semibold tracking-[-0.05em] text-[#1d1d1f]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          Hello
        </motion.p>
      </div>
      <HomeBar />
    </div>
  );
}

function NorthlineMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 34" fill="none" aria-hidden className={className}>
      <path
        d="M9.5 23.5 V10.5 L22.5 23.5 V10.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalRings({ reduce }: { reduce: boolean }) {
  const rings = [
    { size: 3.25, delay: 0 },
    { size: 4.15, delay: 0.55 },
    { size: 5.05, delay: 1.1 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      {rings.map((ring) => (
        <motion.span
          key={ring.size}
          className="absolute rounded-full border border-white/[0.18]"
          style={{ width: `${ring.size}rem`, height: `${ring.size}rem` }}
          initial={{ scale: 0.9, opacity: 0.35 }}
          animate={
            reduce
              ? { scale: 1, opacity: 0.18 }
              : { scale: [0.9, 1.15], opacity: [0.35, 0] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 2.6,
                  repeat: Infinity,
                  delay: ring.delay,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        />
      ))}
    </div>
  );
}

function CallScreen({ reduce = false }: { reduce?: boolean }) {
  const enter = reduce ? { duration: 0 } : { duration: 0.45, ease: EASE };

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#0a0f1a] text-white">
      <StatusBar light />

      <motion.p
        className="relative z-10 pt-3 text-center text-[0.58rem] font-semibold tracking-[0.28em] text-white/35 uppercase"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...enter, delay: reduce ? 0 : 0.05 }}
      >
        INCOMING IDEA
      </motion.p>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-2">
        <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center">
          <SignalRings reduce={reduce} />
          <motion.div
            className="relative z-[1] text-white"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...enter, delay: reduce ? 0 : 0.18 }}
          >
            <NorthlineMark className="h-9 w-9" />
          </motion.div>
        </div>

        <motion.h2
          className="mt-7 text-center font-display text-[1.35rem] font-bold leading-[1.12] tracking-[-0.04em] text-white"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...enter, delay: reduce ? 0 : 0.38 }}
        >
          A new <span className="text-[#6366f1]">idea</span>
          <br />
          is calling.
        </motion.h2>

        <motion.p
          className="mt-2.5 text-center text-[0.72rem] font-medium tracking-[-0.01em] text-white/42"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...enter, delay: reduce ? 0 : 0.52 }}
        >
          Ready to build something great?
        </motion.p>
      </div>

      <motion.div
        className="pointer-events-none relative z-10 mb-9 flex items-center justify-between gap-3 px-5"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...enter, delay: reduce ? 0 : 0.72 }}
      >
        <span className="rounded-full border border-white/[0.12] px-4 py-2.5 text-[0.72rem] font-medium text-white/45">
          Not now
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6366f1] px-5 py-2.5 text-[0.78rem] font-semibold text-white">
          Let&apos;s talk
          <span aria-hidden>→</span>
        </span>
      </motion.div>

      <HomeBar light />
    </div>
  );
}

function MessagesScreen({ items }: { items: ChatItem[] }) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#f9f9fb]">
      <div className="relative z-10 shrink-0 border-b border-black/[0.06] bg-[#f9f9fb]">
        <StatusBar />
        <div className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center px-1 pb-2.5 pt-0.5">
          <div className="flex justify-center text-[#007aff]" aria-hidden>
            <svg width="11" height="18" viewBox="0 0 12 20" fill="none">
              <path d="M10 2 2 10l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#b4b3ff] to-[#5b5ce6] text-[0.7rem] font-bold text-white">
              J
            </div>
            <p className="mt-1 text-[0.75rem] font-semibold leading-none tracking-[-0.02em] text-[#111]">John</p>
            <p className="mt-1 text-[0.58rem] font-medium leading-none text-[#34c759]">Online</p>
          </div>
          <div />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden bg-[#f2f2f7] px-3.5 pb-1.5 pt-3">
        <AnimatePresence initial={false}>
          {items.map((item) => {
            const mine = item.from === "me";
            return (
              <motion.div
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: EASE }}
                className={`flex ${mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[84%] px-3 py-2 text-[0.875rem] leading-snug tracking-[-0.015em] ${
                    mine
                      ? "rounded-[1.15rem] rounded-br-[0.28rem] bg-[#007aff] text-white"
                      : "rounded-[1.15rem] rounded-bl-[0.28rem] bg-[#e9e9eb] text-[#111]"
                  }`}
                >
                  {item.kind === "typing" ? <TypingDots light={mine} /> : item.text}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center gap-2 px-3 pb-8 pt-2">
        <div className="flex h-8 flex-1 items-center rounded-full border border-black/8 bg-white px-3.5 text-[0.78rem] text-[#8e8e93]">
          iMessage
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007aff]">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 11.5V2.5M7 2.5 3 6.5M7 2.5l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <HomeBar />
    </div>
  );
}

function PhoneDevice({
  phase,
  chat,
  reduce,
}: {
  phase: Phase;
  chat: ChatItem[];
  reduce: boolean;
}) {
  return (
    <div
      className="relative h-full w-auto opacity-100"
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <div
        className="relative h-full w-full"
        style={{
          boxShadow:
            "0 48px 80px -32px rgba(15,23,42,0.16), 0 24px 40px -24px rgba(15,23,42,0.1)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "14.5% / 7.2%",
            padding: "2.15%",
            background:
              "linear-gradient(180deg, #6a6a70 0%, #2e2e32 12%, #4a4a50 50%, #2e2e32 88%, #6a6a70 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.45)",
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden bg-black"
            style={{
              borderRadius: "11.6% / 5.8%",
              isolation: "isolate",
            }}
          >
            <AnimatePresence mode="wait">
              {phase === "hello" && (
                <motion.div
                  key="h"
                  className="absolute inset-0 overflow-hidden"
                  style={{ borderRadius: "inherit" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={FADE}
                >
                  <HelloScreen />
                </motion.div>
              )}
              {phase === "call" && (
                <motion.div
                  key="c"
                  className="absolute inset-0 overflow-hidden"
                  style={{ borderRadius: "inherit" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={FADE}
                >
                  <CallScreen reduce={reduce} />
                </motion.div>
              )}
              {phase === "messages" && (
                <motion.div
                  key="m"
                  className="absolute inset-0 overflow-hidden"
                  style={{ borderRadius: "inherit" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={FADE}
                >
                  <MessagesScreen items={chat} />
                </motion.div>
              )}
            </AnimatePresence>

            <DynamicIsland />

            <div
              className="pointer-events-none absolute inset-0 z-[45] overflow-hidden"
              style={{
                borderRadius: "inherit",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 16%)",
                boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.14)",
              }}
            />
          </div>
        </div>

        <div className="absolute left-0 top-[14.5%] h-[2.8%] w-[1.1%] -translate-x-[70%] rounded-l-[1px] bg-[#5c5c62]" />
        <div className="absolute left-0 top-[20%] h-[5.2%] w-[1.1%] -translate-x-[70%] rounded-l-[1px] bg-[#5c5c62]" />
        <div className="absolute left-0 top-[27%] h-[5.2%] w-[1.1%] -translate-x-[70%] rounded-l-[1px] bg-[#5c5c62]" />
        <div className="absolute right-0 top-[22.5%] h-[7.5%] w-[1.1%] translate-x-[70%] rounded-r-[1px] bg-[#5c5c62]" />
      </div>
    </div>
  );
}

export function ContactHeroVisual() {
  const reduce = useReducedMotion() ?? false;
  const [phase, setPhase] = useState<Phase>("hello");
  const [chat, setChat] = useState<ChatItem[]>([]);

  useEffect(() => {
    if (reduce) {
      startTransition(() => {
        setPhase("hello");
        setChat([]);
      });
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(
          window.setTimeout(() => {
            if (!cancelled) resolve();
          }, ms),
        );
      });

    const run = async () => {
      while (!cancelled) {
        setPhase("hello");
        setChat([]);
        await wait(950);
        if (cancelled) break;

        setPhase("call");
        await wait(2100);
        if (cancelled) break;

        setPhase("messages");
        setChat([]);
        await wait(380);
        if (cancelled) break;

        setChat([{ id: "1", kind: "msg", from: "john", text: "Hey! How are you?" }]);
        await wait(900);
        if (cancelled) break;

        setChat([
          { id: "1", kind: "msg", from: "john", text: "Hey! How are you?" },
          { id: "t1", kind: "typing", from: "me" },
        ]);
        await wait(720);
        if (cancelled) break;

        setChat([
          { id: "1", kind: "msg", from: "john", text: "Hey! How are you?" },
          { id: "2", kind: "msg", from: "me", text: "I'm good! Working on something new." },
        ]);
        await wait(900);
        if (cancelled) break;

        setChat([
          { id: "1", kind: "msg", from: "john", text: "Hey! How are you?" },
          { id: "2", kind: "msg", from: "me", text: "I'm good! Working on something new." },
          { id: "t2", kind: "typing", from: "john" },
        ]);
        await wait(720);
        if (cancelled) break;

        setChat([
          { id: "1", kind: "msg", from: "john", text: "Hey! How are you?" },
          { id: "2", kind: "msg", from: "me", text: "I'm good! Working on something new." },
          { id: "3", kind: "msg", from: "john", text: "Sounds exciting." },
        ]);
        await wait(950);
        if (cancelled) break;

        setChat([
          { id: "1", kind: "msg", from: "john", text: "Hey! How are you?" },
          { id: "2", kind: "msg", from: "me", text: "I'm good! Working on something new." },
          { id: "3", kind: "msg", from: "john", text: "Sounds exciting." },
          { id: "4", kind: "msg", from: "me", text: "Let's build something great." },
        ]);
        await wait(1900);
      }
    };

    void run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduce]);

  return (
    <div className="relative h-full w-full overflow-visible" aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-[88%] w-auto max-w-full sm:h-[92%] md:h-[94%] lg:h-[98%]"
          animate={reduce ? undefined : { y: [0, -3, 0] }}
          transition={
            reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <PhoneDevice phase={phase} chat={chat} reduce={reduce} />
        </motion.div>
      </div>
    </div>
  );
}
