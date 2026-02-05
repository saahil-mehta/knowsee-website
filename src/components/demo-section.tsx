"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const demos = [
  {
    video: "/demos/demo-query.mp4",
    headline: "Context-aware. Transparent.",
    description:
      "Ask in plain English. Knowsee understands your schema, generates SQL, and shows every step — attempts, bytes scanned, query logic. No black boxes.",
  },
  {
    video: "/demos/demo-visuals.mp4",
    headline: "Structure from chaos.",
    description:
      "Raw warehouse data becomes clear visuals in seconds. No dashboards to build, no analysts to brief.",
  },
  {
    video: "/demos/demo-grounding.mp4",
    headline: "Your data meets the world's.",
    description:
      "Query BigQuery, get your answer, then ground it with live Google Search. One conversation, multiple sources, complete context.",
  },
];

export function DemoSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const close = useCallback(() => setExpandedIndex(null), []);

  useEffect(() => {
    if (expandedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [expandedIndex, close]);

  return (
    <>
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-8 py-16 md:px-16">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
                Features
              </span>

              <h2 className="text-3xl text-white md:text-5xl">
                From question to answer.{" "}
                <span className="font-serif italic">In seconds.</span>
              </h2>
            </motion.div>

            {/* Demo Blocks */}
            <div className="grid gap-8 md:grid-cols-3">
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.headline}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col"
                >
                  {/* Video */}
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(index)}
                    className="group relative mb-5 overflow-hidden rounded-xl border border-white/[0.1] transition-colors hover:border-[#6214d9]/50"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full"
                    >
                      <source src={demo.video} type="video/mp4" />
                    </video>
                    {/* Expand hint */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                      <svg
                        className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Copy */}
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {demo.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {demo.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing Hook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <h3 className="mb-4 text-2xl text-white md:text-3xl">
                And that&apos;s just the{" "}
                <span className="font-serif italic">beginning</span>.
              </h3>
              <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
                Beyond the AI platform, we handle your data engineering, migrations, and tech debt.
                <br />
                No hiring, no overhead, a full super-efficient technical team on retainer.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://calendly.com/saahil_mehta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#6214d9] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#7928e8]"
                >
                  Free infra audit
                </a>
                <a
                  href="#pricing"
                  className="inline-block rounded-full border border-white/[0.15] px-8 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/30 hover:text-white"
                >
                  Check pricing
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={close}
                className="absolute -top-10 right-6 text-sm text-gray-400 transition-colors hover:text-white"
              >
                ESC to close
              </button>

              {/* Video */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.1]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full"
                  key={expandedIndex}
                >
                  <source
                    src={demos[expandedIndex].video}
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Caption */}
              <p className="mt-4 text-center text-sm text-gray-400">
                {demos[expandedIndex].headline}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
