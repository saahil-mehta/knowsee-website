"use client";

import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/logos/disney-hotstar.webp", alt: "Disney+ Hotstar" },
  { src: "/logos/samsung.png", alt: "Samsung" },
  { src: "/logos/vodafone.png", alt: "Vodafone" },
  { src: "/logos/diageo.svg", alt: "Diageo" },
  { src: "/logos/f1.png", alt: "Formula 1" },
  { src: "/logos/xiaomi.svg", alt: "Xiaomi" },
  { src: "/logos/amex.png", alt: "American Express" },
  { src: "/logos/bank-of-america.svg", alt: "Bank of America" },
  { src: "/logos/under-armour.svg", alt: "Under Armour" },
  { src: "/logos/here-dark.png", alt: "HERE" },
  { src: "/logos/ultratech.png", alt: "UltraTech" },
  { src: "/logos/byjus.png", alt: "Byju's" },
  { src: "/logos/wpp.svg", alt: "WPP" },
  { src: "/logos/digitas.png", alt: "Digitas" },
];

export function BrandLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const lastTimestamp = useRef<number>(0);

  const baseSpeed = 30; // pixels per second

  useEffect(() => {
    // requestAnimationFrame loop for smooth animation
    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      // Calculate movement based on time delta (adapts to refresh rate)
      const movement = (baseSpeed * deltaTime) / 1000;

      setOffset((prev) => {
        const newOffset = prev + movement;
        // Reset when we've scrolled one full set width
        const containerWidth = containerRef.current?.scrollWidth ?? 0;
        const singleSetWidth = containerWidth / 2;

        if (newOffset >= singleSetWidth) {
          return 0;
        }
        return newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-10 text-center text-lg text-gray-400">
          Built data foundations for
        </p>
      </div>

      {/* Ticker container with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        {/* Scrolling logos */}
        <div
          ref={containerRef}
          className="flex items-center gap-16"
          style={{
            transform: `translateX(${-offset}px)`,
            willChange: "transform",
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="group flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
