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
          className="mb-6 text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl"
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
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-300"
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

      {/* Hero visual - abstract objects video */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto mt-16 max-w-4xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
