"use client";

import { motion } from "framer-motion";
import { Clock, Wrench, TrendingUp, MessagesSquare } from "lucide-react";
import GlassSurface from "./glass-surface";

const steps = [
  {
    icon: Clock,
    title: "Audit",
    description:
      "Think systems. Identify every source. Map what connects where. Find the mess.",
  },
  {
    icon: Wrench,
    title: "Custom Engineering",
    description:
      "Connect sources. Clean data. Structure for AI comprehension. This is data engineering. Built to best practices. Tested thoroughly.",
  },
  {
    icon: TrendingUp,
    title: "AI Engineering",
    description:
      "Train on your knowledge. Test with real questions. Tune for accuracy.",
  },
  {
    icon: MessagesSquare,
    title: "Ask questions",
    description:
      "Deployment. Usage. Continuous refinement based on real feedback",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section container */}
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={32}
          backgroundOpacity={0.2}
          blur={12}
          saturation={1.1}
          className="px-8 py-16 md:px-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {/* Badge */}
            <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
              Process
            </span>

            <h2 className="text-3xl text-white md:text-5xl">
              Your knowledge,{" "}
              <span className="font-serif italic">accessible effortlessly</span>.
            </h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                  <step.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-block rounded-full bg-[#6214d9] px-10 py-4 text-base font-medium text-white transition-all hover:bg-[#7928e8]"
            >
              Book a 30-min call
            </a>
          </motion.div>
        </GlassSurface>
      </div>
    </section>
  );
}
