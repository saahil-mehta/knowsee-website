"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  forwardRef,
  useRef,
  useMemo,
  useLayoutEffect,
  useState,
  useEffect,
  Component,
} from "react";
import type { ReactNode } from "react";
import { Color, Mesh, ShaderMaterial } from "three";

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

interface SilkPlaneProps {
  uniforms: {
    uSpeed: { value: number };
    uScale: { value: number };
    uNoiseIntensity: { value: number };
    uColor: { value: Color };
    uRotation: { value: number };
    uTime: { value: number };
  };
}

function SilkFallback({ color = "#2a1055" }: { color?: string }) {
  return (
    <div
      className="h-full w-full"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${color}, #0a0a0a)`,
      }}
    />
  );
}

function hasWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return gl instanceof WebGLRenderingContext || gl instanceof WebGL2RenderingContext;
  } catch {
    return false;
  }
}

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const hexToNormalisedRGB = (hex: string): [number, number, number] => {
  hex = hex.replace("#", "");
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();
  const meshRef = useRef<Mesh>(null);

  // Use the forwarded ref or local ref
  const actualRef = (ref as React.RefObject<Mesh>) || meshRef;

  useLayoutEffect(() => {
    if (actualRef.current) {
      actualRef.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [actualRef, viewport]);

  useFrame((_, delta) => {
    if (actualRef.current) {
      const material = actualRef.current.material as ShaderMaterial;
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={actualRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

export function Silk({
  speed = 3,
  scale = 1,
  color = "#2a1055",
  noiseIntensity = 1.2,
  rotation = 0,
}: SilkProps) {
  const meshRef = useRef<Mesh>(null);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(hasWebGLSupport());
  }, []);

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalisedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  // Still checking — render nothing to avoid flash
  if (webglSupported === null) return null;

  if (!webglSupported) {
    return <SilkFallback color={color} />;
  }

  return (
    <WebGLErrorBoundary fallback={<SilkFallback color={color} />}>
      <Canvas dpr={[1, 2]} frameloop="always">
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </WebGLErrorBoundary>
  );
}

export default Silk;
