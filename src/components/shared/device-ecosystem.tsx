"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type DeviceEcosystemProps = {
  className?: string;
};

function LaptopScreen() {
  return (
    <g>
      <rect x="0" y="0" width="120" height="80" fill="#202b3a" />
      <rect x="8" y="8" width="86" height="6" rx="2" fill="#1a2233" />
      <rect x="8" y="20" width="58" height="4" rx="1.5" fill="#141b28" />
      <rect x="8" y="28" width="43" height="3" rx="1.5" fill="#121822" opacity="0.8" />
      <rect x="8" y="38" width="28" height="10" rx="3" fill="#5b7cff" opacity="0.85" />
      <rect x="42" y="38" width="28" height="10" rx="3" fill="#ffffff" opacity="0.08" />
      <rect x="8" y="54" width="104" height="1" fill="#ffffff" opacity="0.06" />
      <rect x="8" y="62" width="26" height="3" rx="1.5" fill="#1a2233" />
      <rect x="8" y="70" width="26" height="22" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="38" y="70" width="26" height="22" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="68" y="70" width="26" height="22" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="12" y="76" width="18" height="2" rx="1" fill="#5b7cff" opacity="0.5" />
      <rect x="42" y="76" width="18" height="2" rx="1" fill="#ffffff" opacity="0.15" />
      <rect x="72" y="76" width="18" height="2" rx="1" fill="#ffffff" opacity="0.15" />
    </g>
  );
}

function PhoneScreen() {
  return (
    <g>
      <rect x="0" y="0" width="40" height="86" fill="#202b3a" />
      <rect x="6" y="10" width="24" height="4" rx="2" fill="#1a2233" />
      <rect x="6" y="18" width="16" height="3" rx="1.5" fill="#141b28" />
      <rect x="6" y="28" width="28" height="18" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="10" y="34" width="14" height="2.5" rx="1.25" fill="#5b7cff" opacity="0.6" />
      <rect x="10" y="39" width="20" height="2" rx="1" fill="#ffffff" opacity="0.12" />
      <rect x="6" y="50" width="28" height="14" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="10" y="55" width="13" height="2.5" rx="1.25" fill="#ffffff" opacity="0.15" />
      <rect x="6" y="68" width="28" height="14" rx="4" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <circle cx="14" cy="75" r="3" fill="#5b7cff" opacity="0.7" />
      <rect x="20" y="73" width="11" height="2" rx="1" fill="#ffffff" opacity="0.12" />
      <rect x="20" y="77" width="7" height="1.5" rx="0.75" fill="#ffffff" opacity="0.08" />
    </g>
  );
}

function TabletScreen() {
  return (
    <g>
      <rect x="0" y="0" width="100" height="75" fill="#1e2838" />
      <rect x="6" y="8" width="30" height="4" rx="2" fill="#1a2233" />
      <rect x="70" y="8" width="24" height="8" rx="3" fill="#5b7cff" opacity="0.25" />
      <rect x="6" y="20" width="22" height="16" rx="3" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="10" y="26" width="9" height="2" rx="1" fill="#5b7cff" opacity="0.7" />
      <rect x="10" y="30" width="12" height="1.5" rx="0.75" fill="#ffffff" opacity="0.1" />
      <rect x="32" y="20" width="22" height="16" rx="3" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="58" y="20" width="36" height="16" rx="3" fill="#121822" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="6" y="42" width="88" height="1" fill="#ffffff" opacity="0.05" />
      <rect x="8" y="48" width="6" height="28" rx="2" fill="#5b7cff" opacity="0.35" />
      <rect x="18" y="56" width="6" height="20" rx="2" fill="#ffffff" opacity="0.12" />
      <rect x="28" y="44" width="6" height="32" rx="2" fill="#5b7cff" opacity="0.55" />
      <rect x="38" y="52" width="6" height="24" rx="2" fill="#ffffff" opacity="0.18" />
      <rect x="48" y="40" width="6" height="36" rx="2" fill="#5b7cff" opacity="0.75" />
      <rect x="58" y="50" width="6" height="26" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="68" y="46" width="6" height="30" rx="2" fill="#5b7cff" opacity="0.45" />
      <rect x="78" y="54" width="6" height="22" rx="2" fill="#ffffff" opacity="0.1" />
      <path
        d="M8 82 Q30 74 52 78 T88 76"
        fill="none"
        stroke="#5b7cff"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function DeviceFrame({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.55)]",
        "border border-border-strong bg-gradient-to-br from-[#1e2838] via-[#263243] to-[#202b3a]",
        className,
      )}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      {children}
    </div>
  );
}

export function DeviceEcosystem({ className }: DeviceEcosystemProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce || !isDesktop || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax({ x, y });
    },
    [reduce, isDesktop],
  );

  const onMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  const px = reduce || !isDesktop ? 0 : parallax.x;
  const py = reduce || !isDesktop ? 0 : parallax.y;

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto w-full max-w-lg select-none md:max-w-xl", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(91,124,255,0.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto aspect-[5/4] w-[86%] md:aspect-[16/12] md:w-[80%]">
        {/* Laptop ~30% smaller */}
        <motion.div
          className="absolute top-[10%] left-1/2 z-10 w-[72%] max-w-[300px] -translate-x-1/2 md:w-[64%] md:max-w-[320px]"
          style={{ x: px * 4, y: py * 3 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <DeviceFrame className="rounded-t-xl rounded-b-md p-[3px] md:p-1">
            <div className="aspect-[16/10] overflow-hidden rounded-[6px] bg-bg-primary">
              <svg viewBox="0 0 120 80" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                <LaptopScreen />
              </svg>
            </div>
          </DeviceFrame>
          <div className="mx-auto h-2 w-[92%] rounded-b-lg bg-gradient-to-b from-[#2a3347] to-[#151b28]" />
          <div className="mx-auto h-1 w-[18%] rounded-b-md bg-bg-secondary" />
        </motion.div>

        {/* Phone ~20% smaller, overlapping */}
        <motion.div
          className="absolute bottom-[-2%] left-[16%] z-20 w-[18%] min-w-[58px] max-w-[88px] md:left-[20%] md:w-[15%]"
          style={{ x: px * -8, y: py * -6 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <DeviceFrame className="rounded-[14px] p-[2px] md:rounded-[16px] md:p-[3px]">
            <div className="aspect-[9/19] overflow-hidden rounded-[12px] bg-bg-primary md:rounded-[14px]">
              <div className="mx-auto mt-1.5 h-1 w-1/3 rounded-full bg-white/10" />
              <svg viewBox="0 0 40 86" className="h-[calc(100%-12px)] w-full" preserveAspectRatio="xMidYMid slice">
                <PhoneScreen />
              </svg>
            </div>
          </DeviceFrame>
        </motion.div>

        {/* Tablet ~40% smaller, tucked */}
        <motion.div
          className="absolute right-[6%] bottom-[8%] z-[8] w-[22%] min-w-[72px] max-w-[110px] md:right-[10%] md:w-[18%]"
          style={{ x: px * 7, y: py * -5 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <DeviceFrame className="rounded-[10px] p-[2px] opacity-80">
            <div className="aspect-[4/3] overflow-hidden rounded-[8px] bg-bg-primary">
              <svg viewBox="0 0 100 75" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                <TabletScreen />
              </svg>
            </div>
          </DeviceFrame>
        </motion.div>
      </div>
    </div>
  );
}
