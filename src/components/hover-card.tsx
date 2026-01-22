"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface HoverCardProps {
  children: ReactNode;
  scaleOnHover?: number;
  rotateAmplitude?: number;
}

export function HoverCard({
  children,
  scaleOnHover = 1.02,
  rotateAmplitude = 6,
}: HoverCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  return (
    <div
      ref={ref}
      className="relative"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Purple border glow on hover */}
        <div
          className={`pointer-events-none absolute -inset-[1px] rounded-xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            border: "1px solid #6214d9",
            boxShadow: "0 0 15px rgba(98, 20, 217, 0.4), inset 0 0 15px rgba(98, 20, 217, 0.1)",
          }}
        />
        {children}
      </motion.div>

    </div>
  );
}

export default HoverCard;
