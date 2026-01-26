"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0f0618] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Hero content */}
      <div className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-3xl font-serif italic font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            AI is only as good as your data
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-400 md:text-2xl"
          >
            Engineering that builds foundations.
            <br className="hidden sm:block" />
            AI that delivers insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#6214d9] px-10 py-4 text-base font-medium text-white transition-all hover:bg-[#7928e8] sm:w-auto"
            >
              Get a free audit
            </a>
            <a
              href="#pricing"
              className="w-full rounded-full border border-white/[0.15] px-10 py-4 text-base text-white transition-all hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              View pricing
            </a>
          </motion.div>
        </div>
      </div>

      {/* Product Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mx-auto max-w-6xl px-6 pb-20"
      >
        {/* Glow effect behind the video */}
        <div className="absolute -inset-4 rounded-2xl bg-[#6214d9]/20 blur-3xl" />

        {/* Demo container */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl shadow-black/50">
          <img
            src="/knowsee.gif"
            alt="Knowsee demo"
            className="w-full"
          />
        </div>

        {/* Fade to background gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.div>
    </section>
  );
}
