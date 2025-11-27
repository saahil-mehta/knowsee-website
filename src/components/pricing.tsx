"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  "Full Setup and Integration",
  "Custom Sources and Data Pipelines",
  "Web Search and Research mode",
  "Maintenance and RAG",
  "SSO Setup",
  "End-to-end Encryption",
  "ISO Compliance",
  "Unlimited Questions (fair use)",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Badge */}
          <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
            Pricing
          </span>

          <h2 className="mb-4 text-3xl text-white md:text-5xl">
            Pricing that&apos;s so{" "}
            <span className="font-serif italic">simple</span>.
          </h2>
          <p className="text-lg text-gray-400">
            We like to keep things simple with one, limitless plan.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8"
        >
          {/* Purple orb decoration */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-[#6214d9]/40 via-purple-500/25 to-transparent blur-2xl" />
          </div>

          <div className="relative">
            {/* Price */}
            <div className="mb-2">
              <span className="text-5xl font-medium text-white">£0</span>
              <span className="text-xl text-gray-400">/month</span>
            </div>

            <p className="mb-6 text-gray-400">
              First 10 users. £xx /user thereafter
            </p>

            {/* CTA */}
            <a
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 block w-full rounded-full border border-white/[0.15] bg-white/5 py-4 text-center font-medium text-white transition-all hover:bg-white/10"
            >
              Book a call
            </a>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white">
                  <Sparkles className="h-5 w-5 flex-shrink-0 text-[#6214d9]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
