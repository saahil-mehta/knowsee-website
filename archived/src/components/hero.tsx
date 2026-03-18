"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const heroLogos = [
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
  { src: "/logos/publicis.svg", alt: "Publicis" },
  { src: "/logos/mindshare.png", alt: "Mindshare" },
];

export function Hero() {
  return (
    <section className="relative">
      {/* Hero content — left-aligned, Linear-style */}
      <div className="px-6 pt-40 pb-16 md:pt-52 md:pb-12">
        <div className="mx-auto max-w-6xl md:pl-16 lg:pl-12">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.25rem] font-normal leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem]"
          >
            The brand intelligence
            <br />
            engine.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg"
          >
            Quantified intelligence across AI visibility, commerce readiness,
            and competitive position. Plus, custom reports built around your
            metrics.
          </motion.p>

        </div>
      </div>

      {/* Product showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mx-auto max-w-6xl px-6 pb-12"
      >
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-black/40 shadow-2xl shadow-black/50">
          <img
            src="/knowsee.gif"
            alt="Knowsee platform demo"
            className="w-full"
          />
        </div>

        {/* Bottom fade to background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.div>

      {/* CTA buttons — below the demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mx-auto max-w-6xl px-6 pb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="https://calendly.com/saahil_mehta/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#6214d9] px-8 py-3.5 text-center text-[15px] font-medium text-white transition-all hover:bg-[#7928e8] sm:w-auto"
        >
          Get a free audit
        </a>
        <a
          href="https://calendly.com/saahil_mehta/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/[0.15] px-8 py-3.5 text-center text-[15px] text-white transition-all hover:border-white/30 hover:bg-white/5 sm:w-auto"
        >
          Book a demo
        </a>
      </motion.div>

      {/* Logo deck — scrolling ticker */}
      <LogoTicker />
    </section>
  );
}

function LogoTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const lastTimestamp = useRef<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const delta = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      setOffset((prev) => {
        const next = prev + (25 * delta) / 1000;
        const containerWidth = containerRef.current?.scrollWidth ?? 0;
        const halfWidth = containerWidth / 2;
        return next >= halfWidth ? 0 : next;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const allLogos = [...heroLogos, ...heroLogos];

  return (
    <div className="relative border-t border-white/[0.06] py-8 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <div
        ref={containerRef}
        className="flex items-center gap-14"
        style={{
          transform: `translateX(${-offset}px)`,
          willChange: "transform",
        }}
      >
        {allLogos.map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="h-7 w-auto flex-shrink-0 object-contain opacity-40"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
