import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* Matières générées par canvas — aucune texture externe. */
function canvasTexture(dessin: (ctx: CanvasRenderingContext2D, s: number) => void) {
  const s = 512;
  const c = document.createElement("canvas");
  c.width = s;
  c.height = s;
  const ctx = c.getContext("2d")!;
  dessin(ctx, s);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function textureTravertin() {
  return canvasTexture((ctx, s) => {
    ctx.fillStyle = "#CFBEA4";
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * s,
        Math.random() * s,
        40 + Math.random() * 130,
        3 + Math.random() * 9,
        (Math.random() - 0.5) * 0.25,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = `rgba(${168 + Math.random() * 40},${150 + Math.random() * 30},${120 + Math.random() * 30},0.16)`;
      ctx.fill();
    }
    for (let i = 0; i < 1600; i++) {
      ctx.fillStyle = "rgba(120,105,85,0.18)";
      ctx.fillRect(Math.random() * s, Math.random() * s, 1, 1);
    }
  });
}

export function textureBois(fond: string, veine: string) {
  return canvasTexture((ctx, s) => {
    ctx.fillStyle = fond;
    ctx.fillRect(0, 0, s, s);
    ctx.lineWidth = 1;
    for (let i = 0; i < 220; i++) {
      const x = Math.random() * s;
      ctx.strokeStyle = veine;
      ctx.globalAlpha = 0.06 + Math.random() * 0.12;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 14, s / 3, x - 14, (s * 2) / 3, x + 6, s);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });
}

export function textureBruit(fond: string) {
  return canvasTexture((ctx, s) => {
    ctx.fillStyle = fond;
    ctx.fillRect(0, 0, s, s);
    const img = ctx.getImageData(0, 0, s, s);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 22;
      img.data[i] += n;
      img.data[i + 1] += n;
      img.data[i + 2] += n;
    }
    ctx.putImageData(img, 0, 0);
  });
}

type Essence = "noyer" | "noir" | "travertin";
type Pietement = "joues" | "cannele" | "acier";

function Plateau({
  ronde,
  L,
  l,
  ep,
  materiau,
}: {
  ronde: boolean;
  L: number;
  l: number;
  ep: number;
  materiau: THREE.Material;
}) {
  if (ronde) {
    const r = Math.min(L, l) / 2;
    return (
      <mesh castShadow receiveShadow material={materiau}>
        <cylinderGeometry args={[r, r, ep, 56]} />
      </mesh>
    );
  }
  return (
    <RoundedBox args={[L, ep, l]} radius={0.006} smoothness={3} castShadow receiveShadow material={materiau} />
  );
}

function PietementAcier({ L, l, h, materiau }: { L: number; l: number; h: number; materiau: THREE.Material }) {
  const px = L / 2 - 0.075;
  const pz = l / 2 - 0.065;
  const positions: [number, number][] = [
    [px, pz],
    [-px, pz],
    [px, -pz],
    [-px, -pz],
  ];
  return (
    <group>
      {positions.map(([x, z], i) => (
        <mesh key={i} position={[x, -h / 2, z]} castShadow material={materiau}>
          <cylinderGeometry args={[0.011, 0.011, h, 16]} />
        </mesh>
      ))}
      <mesh position={[0, -h + h * 0.16, pz]} rotation={[0, 0, Math.PI / 2]} castShadow material={materiau}>
        <cylinderGeometry args={[0.008, 0.008, px * 2, 12]} />
      </mesh>
      <mesh position={[0, -h + h * 0.16, -pz]} rotation={[0, 0, Math.PI / 2]} castShadow material={materiau}>
        <cylinderGeometry args={[0.008, 0.008, px * 2, 12]} />
      </mesh>
      <mesh position={[px, -h + h * 0.16, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow material={materiau}>
        <cylinderGeometry args={[0.008, 0.008, pz * 2, 12]} />
      </mesh>
    </group>
  );
}

function PietementCannele({ r, h, materiau }: { r: number; h: number; materiau: THREE.Material }) {
  const rFut = r * 0.44;
  const n = Math.max(14, Math.round(rFut * 150));
  const rc = 0.115 * rFut;
  return (
    <group position={[0, -h / 2, 0]}>
      <mesh castShadow material={materiau}>
        <cylinderGeometry args={[rFut, rFut, h, 40]} />
      </mesh>
      {Array.from({ length: n }).map((_, i) => {
        const a = (i / n) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * rFut, 0, Math.sin(a) * rFut]} castShadow material={materiau}>
            <cylinderGeometry args={[rc, rc, h, 8]} />
          </mesh>
        );
      })}
    </group>
  );
}

function PietementJoues({ l, h, materiau }: { l: number; h: number; materiau: THREE.Material }) {
  return (
    <group>
      {[-1, 1].map((s) => (
        <RoundedBox
          key={s}
          args={[0.032, h, l * 0.86]}
          radius={0.004}
          smoothness={2}
          position={[s * 0.36, -h / 2, 0]}
          castShadow
          material={materiau}
        />
      ))}
      <mesh position={[0, -h + h * 0.22, 0]} rotation={[0, 0, Math.PI / 2]} castShadow material={materiau}>
        <cylinderGeometry args={[0.014, 0.014, 0.72, 12]} />
      </mesh>
    </group>
  );
}

function Table({ progression, reduit }: { progression: () => number; reduit: boolean }) {
  const groupe = useRef<THREE.Group>(null);
  const [etat, setEtat] = useMemo(() => {
    return [{ p: 0 }, (v: number) => v] as const;
  }, []);

  const materiaux = useMemo(() => {
    const travertin = new THREE.MeshStandardMaterial({
      map: textureTravertin(),
      roughness: 0.82,
      metalness: 0,
    });
    const noyer = new THREE.MeshStandardMaterial({
      map: textureBois("#6B4A32", "#3E2717"),
      roughness: 0.58,
    });
    const noir = new THREE.MeshStandardMaterial({ map: textureBruit("#22201C"), roughness: 0.88 });
    const acier = new THREE.MeshStandardMaterial({ color: "#1A1815", roughness: 0.42, metalness: 0.82 });
    return { travertin, noyer, noir, acier };
  }, []);

  const [dims, setDims] = useMemo(
    () => [{ L: 1.2, l: 0.7, h: 0.38 }, (v: unknown) => v] as const,
    [],
  );

  const ref = useRef({ L: 1.2, l: 0.7, h: 0.38, p: 0 });

  useFrame((_, delta) => {
    const p = progression();
    ref.current.p = p;
    // Interpolation continue des dimensions
    ref.current.L = 1.1 + p * 0.35;
    ref.current.l = 0.62 + p * 0.18;
    ref.current.h = 0.36 + p * 0.06;
    if (groupe.current && !reduit) groupe.current.rotation.y += delta * 0.22;
    setEtat(p);
    setDims(dims);
  });

  const p = ref.current.p;
  const essence: Essence = p < 1 / 6 ? "noyer" : p < 0.5 ? "noyer" : p < 5 / 6 ? "noir" : "travertin";
  const pietement: Pietement = p < 1 / 6 ? "joues" : p < 0.5 ? "joues" : p < 5 / 6 ? "cannele" : "acier";
  const ronde = pietement === "cannele";

  const matPlateau =
    essence === "noyer" ? materiaux.noyer : essence === "noir" ? materiaux.noir : materiaux.travertin;
  const matPied = pietement === "acier" ? materiaux.acier : matPlateau;
  const ep = 0.028;
  const { L, l, h } = ref.current;

  return (
    <group ref={groupe} position={[0, h / 2, 0]}>
      <group position={[0, 0, 0]}>
        <Plateau ronde={ronde} L={L} l={l} ep={ep} materiau={matPlateau} />
        {pietement === "acier" && <PietementAcier L={L} l={l} h={h} materiau={matPied} />}
        {pietement === "cannele" && <PietementCannele r={Math.min(L, l) / 2} h={h} materiau={matPied} />}
        {pietement === "joues" && <PietementJoues l={l} h={h} materiau={matPied} />}
      </group>
    </group>
  );
}

function Lumieres() {
  return (
    <>
      <hemisphereLight args={[0xfff6e9, 0xd8ccb9, 0.66]} />
      <directionalLight
        color={0xfff2e0}
        intensity={2.05}
        position={[3.2, 3.4, 1.9]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={3}
        shadow-bias={-0.0015}
      />
      <directionalLight color={0xdfe8f0} intensity={0.42} position={[-2.8, 1.5, -1.6]} />
      <directionalLight color={0xffffff} intensity={0.5} position={[-0.8, 1.2, -3]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <shadowMaterial opacity={0.19} />
      </mesh>
    </>
  );
}

export default function TableScrollScene({
  progression,
  reduit = false,
}: {
  progression: () => number;
  reduit?: boolean;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.18 }}
      camera={{ fov: 34, position: [1.5, 0.95, 1.85] }}
      style={{ background: "transparent" }}
    >
      <Lumieres />
      <Table progression={progression} reduit={reduit} />
    </Canvas>
  );
}
