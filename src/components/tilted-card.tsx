"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedCardProps {
  children: ReactNode;
  containerHeight?: string;
  containerWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showShimmerBorder?: boolean;
}

export function TiltedCard({
  children,
  containerHeight = "auto",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showShimmerBorder = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!rectRef.current) return;

    const rect = rectRef.current;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    // Capture rect once on enter to avoid feedback loop from transformed bounds
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
    scale.set(scaleOnHover);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    rectRef.current = null;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "1000px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm text-gray-500 sm:hidden">
          Best viewed on desktop
        </div>
      )}

      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shimmer border */}
        {showShimmerBorder && (
          <div
            className={`pointer-events-none absolute -inset-[1px] rounded-xl transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(98, 20, 217, 0.3) 25%,
                rgba(98, 20, 217, 0.8) 50%,
                rgba(98, 20, 217, 0.3) 75%,
                transparent 100%
              )`,
              backgroundSize: "200% 100%",
              animation: isHovered ? "shimmer 2s linear infinite" : "none",
            }}
          />
        )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
        {children}
      </motion.div>

    </div>
  );
}

export default TiltedCard;
