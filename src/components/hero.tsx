"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-5xl leading-tight tracking-tight text-white md:text-7xl"
        >
          Stop searching,
          <br />
          Start knowing
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400"
        >
          Turn years of scattered company knowledge into instant, intelligent
          answers with best-in-class security.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="w-full rounded-full bg-[#6214d9] px-10 py-4 text-base font-medium text-white transition-all hover:bg-[#7928e8] sm:w-auto"
          >
            Book a call
          </a>
          <a
            href="#pricing"
            className="w-full rounded-full border border-white/[0.15] px-10 py-4 text-base text-white transition-all hover:border-white/30 hover:bg-white/5 sm:w-auto"
          >
            See pricing
          </a>
        </motion.div>
      </div>

      {/* Hero visual - abstract glass shape */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto mt-16 max-w-4xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6214d9]/20 via-purple-500/10 to-blue-500/20" />
          <div className="absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 translate-y-1/4">
            <div className="h-full w-full rounded-full bg-gradient-to-t from-[#6214d9]/50 via-purple-400/30 to-transparent blur-3xl" />
          </div>
          {/* Glass orb effect */}
          <div className="absolute bottom-0 right-0 h-[70%] w-[60%] translate-x-[10%] translate-y-[20%]">
            <div className="h-full w-full rounded-[40%] bg-gradient-to-br from-[#6214d9]/40 via-purple-500/25 to-blue-600/30 backdrop-blur-sm" />
          </div>
          <div className="absolute bottom-0 left-0 h-[50%] w-[40%] -translate-x-[10%] translate-y-[30%]">
            <div className="h-full w-full rounded-[50%] bg-gradient-to-tr from-blue-500/30 via-[#6214d9]/20 to-transparent backdrop-blur-sm" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
