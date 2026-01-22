"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const engineeringFeatures = [
  "Up to 4 simple / 2 medium / 1 complex pipeline per month",
  "Up to 5 pipelines reviewed and optimised",
  "Up to 1 new system or architecture",
  "Ongoing maintenance for all delivered work",
  "24-hour response SLA",
];

const knowseeFeatures = [
  "Deployed on your cloud infrastructure",
  "Connected to your data sources",
  "GPT-4o or Claude model configuration",
  "Monthly updates to knowsee core",
  "24-hour support SLA",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
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

          <h2 className="text-3xl text-white md:text-5xl">
            Engineering + AI, <span className="font-serif italic">better together</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Simple pricing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Engineering Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            {/* Purple orb decoration */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72">
              <div className="h-full w-full rounded-full bg-[#6214d9]/30 blur-3xl" />
            </div>

            <div className="relative">
              {/* Title */}
              <h3 className="mb-4 text-lg font-medium text-white">Data Engineering</h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">£2,999</span>
                <span className="ml-2 text-5xl font-medium text-white">£2,499</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>

              <p className="mb-6 text-gray-400">
                Flat-rate engineering. No per-connector fees.
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
                {engineeringFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#6214d9]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Knowsee Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            {/* Purple orb decoration */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72">
              <div className="h-full w-full rounded-full bg-[#6214d9]/30 blur-3xl" />
            </div>

            <div className="relative">
              {/* Title */}
              <h3 className="mb-4 text-lg font-medium text-white">Knowsee</h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">£1,499</span>
                <span className="ml-2 text-5xl font-medium text-white">£999</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>

              <p className="mb-6 text-gray-400">
                AI that runs on your infrastructure.
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
                {knowseeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#6214d9]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
