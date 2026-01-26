"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
            About
          </span>

          <div className="mx-auto mb-6 h-16 w-16">
            <LottieIcon src="/lotties/user.json" className="h-full w-full" />
          </div>

          <h2 className="text-3xl text-white md:text-5xl">
            Built by <span className="font-serif italic">Saahil Mehta</span>.
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Learn more about me at{" "}
            <a
              href="https://saahil.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 transition-colors hover:text-[#6214d9]"
            >
              saahil.co.uk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
