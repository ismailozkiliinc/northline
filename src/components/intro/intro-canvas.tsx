"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import gsap from "gsap";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import {
  Color,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  PointLight,
  Vector3,
  type PerspectiveCamera,
} from "three";
import { type IntroAnim } from "@/components/intro/intro-timeline";

const BG = "#05070B";
const ACCENT = "#4F7CFF";
const ACCENT_2 = "#7C5CFF";
const CYAN = "#52D9FF";
const KEY = "#F7F9FC";

/** 12 geometric metal segments that form the N monogram */
function buildSegments(lite: boolean) {
  const d = lite ? 0.14 : 0.18;
  const left: Array<{ id: string; to: [number, number, number]; size: [number, number, number] }> = [
    { id: "l0", to: [-0.52, 0.52, 0], size: [0.22, 0.28, d] },
    { id: "l1", to: [-0.52, 0.18, 0.02], size: [0.22, 0.28, d] },
    { id: "l2", to: [-0.52, -0.16, -0.02], size: [0.22, 0.28, d] },
    { id: "l3", to: [-0.52, -0.5, 0], size: [0.22, 0.28, d] },
  ];
  const right = [
    { id: "r0", to: [0.52, 0.52, 0] as [number, number, number], size: [0.22, 0.28, d] as [number, number, number] },
    { id: "r1", to: [0.52, 0.18, -0.02] as [number, number, number], size: [0.22, 0.28, d] as [number, number, number] },
    { id: "r2", to: [0.52, -0.16, 0.02] as [number, number, number], size: [0.22, 0.28, d] as [number, number, number] },
    { id: "r3", to: [0.52, -0.5, 0] as [number, number, number], size: [0.22, 0.28, d] as [number, number, number] },
  ];
  const diag = [
    { id: "d0", to: [-0.22, 0.38, 0.04] as [number, number, number], size: [0.42, 0.18, d * 0.95] as [number, number, number], rotZ: -0.72 },
    { id: "d1", to: [-0.02, 0.12, -0.03] as [number, number, number], size: [0.42, 0.18, d * 0.95] as [number, number, number], rotZ: -0.72 },
    { id: "d2", to: [0.18, -0.14, 0.03] as [number, number, number], size: [0.42, 0.18, d * 0.95] as [number, number, number], rotZ: -0.72 },
    { id: "d3", to: [0.36, -0.4, 0] as [number, number, number], size: [0.42, 0.18, d * 0.95] as [number, number, number], rotZ: -0.72 },
  ];
  return [...left, ...right, ...diag].map((s) => ({
    rotZ: 0,
    ...s,
  }));
}

function seedOffset(i: number): [number, number, number] {
  const a = i * 2.399;
  const r = 1.6 + (i % 3) * 0.55;
  return [
    Math.cos(a) * r * (i % 2 === 0 ? 1 : -0.85),
    Math.sin(a * 1.3) * (0.9 + (i % 4) * 0.2),
    2.2 + (i % 5) * 0.45,
  ];
}

function NMonogram({
  anim,
  lite,
}: {
  anim: MutableRefObject<IntroAnim>;
  lite: boolean;
}) {
  const root = useRef<Group>(null);
  const segs = useRef<(Group | null)[]>([]);
  const energy = useRef<PointLight>(null);
  const energyMesh = useRef<Mesh>(null);
  const segments = useMemo(() => buildSegments(lite), [lite]);

  const metal = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: new Color("#0B0F17"),
        metalness: 0.96,
        roughness: lite ? 0.32 : 0.18,
        clearcoat: lite ? 0.25 : 0.55,
        clearcoatRoughness: 0.28,
        envMapIntensity: 0.45,
        emissive: new Color("#05070B"),
        emissiveIntensity: 0.05,
      }),
    [lite],
  );
  const glass = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: new Color("#111827"),
        metalness: 0.55,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        transparent: true,
        opacity: 0.92,
        envMapIntensity: 0.35,
        emissive: new Color(ACCENT),
        emissiveIntensity: 0.02,
      }),
    [],
  );

  useEffect(
    () => () => {
      metal.dispose();
      glass.dispose();
    },
    [metal, glass],
  );

  const starts = useMemo(() => segments.map((_, i) => seedOffset(i)), [segments]);

  useFrame(() => {
    const a = anim.current;
    if (root.current) {
      root.current.rotation.y = a.orbitY + a.mouseX;
      root.current.rotation.x = a.orbitX + a.mouseY;
      const pushScale = 1 + a.camPush * 2.8;
      root.current.scale.setScalar(pushScale);
    }

    segments.forEach((seg, i) => {
      const g = segs.current[i];
      if (!g) return;
      const n = segments.length;
      const local = (a.assemble - (i / n) * 0.62) / 0.38;
      const t = Math.min(1, Math.max(0, local));
      const e = t * t * (3 - 2 * t);
      const [sx, sy, sz] = starts[i]!;
      const [tx, ty, tz] = seg.to;
      g.position.set(sx + (tx - sx) * e, sy + (ty - sy) * e, sz + (tz - sz) * e);
      g.scale.setScalar(0.15 + e * 0.85);
      g.rotation.y = (1 - e) * (i % 2 === 0 ? 0.8 : -0.6);
      g.rotation.x = (1 - e) * 0.35;
      g.rotation.z = seg.rotZ * e;
      g.visible = e > 0.02;
    });

    if (energy.current && energyMesh.current) {
      const e = a.energy;
      energy.current.intensity = e > 0.02 && e < 0.98 ? 1.8 : 0;
      const path: [number, number, number][] = [
        [-0.52, -0.55, 0.12],
        [-0.52, 0.55, 0.12],
        [0.05, 0.05, 0.14],
        [0.52, -0.55, 0.12],
        [0.52, 0.55, 0.12],
      ];
      const u = e * (path.length - 1);
      const i0 = Math.min(path.length - 2, Math.floor(u));
      const f = u - i0;
      const p0 = path[i0]!;
      const p1 = path[i0 + 1]!;
      const x = p0[0] + (p1[0] - p0[0]) * f;
      const y = p0[1] + (p1[1] - p0[1]) * f;
      const z = p0[2] + (p1[2] - p0[2]) * f;
      energy.current.position.set(x, y, z);
      energyMesh.current.position.set(x, y, z);
      energyMesh.current.visible = e > 0.02 && e < 0.98;
    }
  });

  return (
    <group ref={root}>
      {segments.map((seg, i) => (
        <group
          key={seg.id}
          ref={(el) => {
            segs.current[i] = el;
          }}
          visible={false}
        >
          <mesh>
            <boxGeometry args={seg.size} />
            <primitive object={i % 3 === 0 ? glass : metal} attach="material" />
          </mesh>
        </group>
      ))}
      <mesh ref={energyMesh} visible={false}>
        <boxGeometry args={[0.04, 0.04, 0.04]} />
        <meshBasicMaterial color={CYAN} toneMapped={false} transparent opacity={0.85} />
      </mesh>
      <pointLight ref={energy} color={ACCENT} intensity={0} distance={2.2} decay={2} />
    </group>
  );
}

function Atmosphere({
  anim,
  lite,
}: {
  anim: MutableRefObject<IntroAnim>;
  lite: boolean;
}) {
  const vol = useRef<PointLight>(null);
  const fogMesh = useRef<Mesh>(null);

  useFrame(() => {
    const v = anim.current.volumetric;
    if (vol.current) vol.current.intensity = v * 1.6;
    if (fogMesh.current) {
      const mat = fogMesh.current.material as { opacity: number };
      mat.opacity = v * 0.12;
    }
  });

  return (
    <>
      <pointLight ref={vol} color={ACCENT} intensity={0} distance={8} decay={2} position={[0, 0.2, 1.2]} />
      {!lite ? (
        <mesh ref={fogMesh} position={[0, 0, -1.5]}>
          <planeGeometry args={[14, 10]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0} depthWrite={false} />
        </mesh>
      ) : null}
      {/* Perspective grid — very subtle */}
      {!lite ? (
        <gridHelper
          args={[16, 24, "#111827", "#0B0F17"]}
          position={[0, -1.35, 0]}
          rotation={[0, 0, 0]}
        />
      ) : null}
    </>
  );
}

function SceneCamera({ anim }: { anim: MutableRefObject<IntroAnim> }) {
  const { camera } = useThree();
  useFrame(() => {
    const a = anim.current;
    const cam = camera as PerspectiveCamera;
    const z = a.camZ - a.camPush * 5.5;
    cam.position.set(a.mouseX * 0.15, 0.12 + a.mouseY * 0.1, Math.max(0.15, z));
    cam.lookAt(0, 0, 0);
  });
  return null;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.18} color={KEY} />
      <directionalLight position={[3.5, 3.2, 2.5]} intensity={1.15} color={KEY} />
      <directionalLight position={[-2.8, 1.2, -1.5]} intensity={0.65} color={ACCENT} />
      <directionalLight position={[1.2, -1.5, 2]} intensity={0.28} color={ACCENT_2} />
    </>
  );
}

function SoftParticles({ lite }: { lite: boolean }) {
  const count = lite ? 6 : 14;
  const pts = useMemo(() => {
    const arr: Vector3[] = [];
    for (let i = 0; i < count; i += 1) {
      const s = Math.sin(i * 12.9898) * 43758.5453;
      const r = s - Math.floor(s);
      const s2 = Math.sin(i * 78.233) * 43758.5453;
      const r2 = s2 - Math.floor(s2);
      const s3 = Math.sin(i * 45.164) * 43758.5453;
      const r3 = s3 - Math.floor(s3);
      arr.push(new Vector3((r - 0.5) * 6, (r2 - 0.5) * 4, -1 - r3 * 3));
    }
    return arr;
  }, [count]);

  return (
    <group>
      {pts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.015 + (i % 3) * 0.008, 6, 6]} />
          <meshBasicMaterial color={KEY} transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}

function detectLite() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(max-width: 900px)").matches ||
    (typeof navigator !== "undefined" &&
      navigator.hardwareConcurrency > 0 &&
      navigator.hardwareConcurrency <= 4)
  );
}

export function IntroCanvas({
  anim,
  onReady,
}: {
  anim: MutableRefObject<IntroAnim>;
  onReady?: () => void;
}) {
  const [lite] = useState(detectLite);
  const dpr = lite ? 1 : ([1, 1.35] as [number, number]);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      const max = 2.5 * (Math.PI / 180);
      gsap.to(anim.current, {
        mouseX: x * max,
        mouseY: -y * max * 0.6,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [anim]);

  return (
    <Canvas
      dpr={dpr}
      frameloop="always"
      performance={{ min: 0.5 }}
      gl={{
        antialias: !lite,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0.12, 4.8], fov: 32, near: 0.05, far: 40 }}
      onCreated={({ gl }) => {
        gl.setClearColor(BG, 1);
        gl.shadowMap.enabled = false;
      }}
      style={{ width: "100%", height: "100%", display: "block", background: BG }}
    >
      <AdaptiveDpr />
      <Lights />
      <Suspense fallback={null}>
        <Atmosphere anim={anim} lite={lite} />
        <SoftParticles lite={lite} />
        <NMonogram anim={anim} lite={lite} />
        <SceneCamera anim={anim} />
      </Suspense>
    </Canvas>
  );
}
