"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const engineeringFeatures = [
  "Dedicated engineering capacity — pipelines, migrations, architecture",
  "Greenfield and brownfield — new builds or fixing what's broken",
  "Fast turnarounds — human engineers + AI agents working in parallel",
  "Guaranteed monthly deliverables",
  "24-hour response SLA",
];

const knowseeFeatures = [
  "AI built for you, deployed on your infrastructure",
  "Connected to all your data sources (yes, all of them)",
  "Unlimited users, unlimited queries",
  "Google Search grounding for accurate answers",
  "No data leaves your cloud (GDPR + SecOps best practices)",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
            Pricing
          </span>

          <h2 className="text-3xl text-white md:text-5xl">
            Your data team, <span className="font-serif italic">on retainer</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Engineering capacity, AI that understands your data, and none of the hiring headaches.
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-[#6214d9]/30 bg-white/[0.02] p-8 md:p-10"
        >
          {/* Purple orb decoration */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96">
            <div className="h-full w-full rounded-full bg-[#6214d9]/30 blur-3xl" />
          </div>

          <div className="relative">
            {/* Price */}
            <div className="mb-8 text-center">
              <div className="text-4xl font-medium text-white md:text-5xl">
                £2,699
                <span className="text-xl font-normal text-gray-400">/month</span>
              </div>
              <p className="mt-2 text-gray-500">
                Less than a part-time contractor.
                <br />
                Less than half a full-time hire.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 block w-full rounded-full bg-[#6214d9] py-4 text-center font-medium text-white transition-all hover:bg-[#7c3aed]"
            >
              Book a free audit
            </a>

            {/* Features - Two columns */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Engineering */}
              <div>
                <h3 className="mb-4 text-2xl text-white">
                  Engineering
                </h3>
                <ul className="space-y-3">
                  {engineeringFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Knowsee */}
              <div>
                <h3 className="mb-4 text-2xl text-white">
                  <span className="font-serif">Know</span><span className="font-serif italic">see</span> <span className="text-lg text-gray-500">(included)</span>
                </h3>
                <ul className="space-y-3">
                  {knowseeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Commitment note */}
            <p className="mt-10 text-center text-sm text-gray-500">
              Cancel within 30 days if it's not right.
                <br />
                After that, 6-month minimum — we want to build a lasting relationship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
