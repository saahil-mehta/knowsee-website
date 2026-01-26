"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const combinedFeatures = [
  "Dedicated engineering capacity, equivalent to a full-time hire",
  "Guaranteed monthly deliverables",
  "Knowsee deployed on your infrastructure",
  "Connected to all your data sources",
  "Support for state-of-the-art models (GPT, Claude, Gemini)",
  "Google Search integrated for accuracy and grounding",
  "Source citations for answer tracing",
  "Ongoing maintenance and support",
  "24-hour response SLA",
  "GDPR compliant and enterprise-grade security",
];

const engineeringFeatures = [
  "Dedicated engineering capacity, equivalent to a full-time hire",
  "Guaranteed monthly deliverables",
  "Pipeline development and optimisation",
  "Architecture design and review",
  "Brownfield troubleshooting",
  "Ongoing maintenance",
  "24-hour response SLA",
];

const knowseeFeatures = [
  "Deployed on your infrastructure",
  "Connected to all your data sources",
  "Support for state-of-the-art models (GPT, Claude, Gemini)",
  "Google Search for accuracy and grounding",
  "Source citations for answer tracing",
  "GDPR compliant and enterprise-grade security",
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
            Your data team, <span className="font-serif italic">without the headcount</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            For less than half the cost of one senior data engineer, get dedicated engineering capacity, an intelligent data app, and enterprise-grade security.
          </p>
        </motion.div>

        {/* Hero Card - Combined */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-[#6214d9]/30 bg-white/[0.02] p-8 md:p-10"
        >
          {/* Purple orb decoration */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96">
            <div className="h-full w-full rounded-full bg-[#6214d9]/30 blur-3xl" />
          </div>

          <div className="relative">
            {/* Recommended badge */}
            <span className="mb-4 inline-block rounded-full bg-[#6214d9]/20 px-3 py-1 text-sm text-[#a78bfa]">
              Recommended
            </span>

            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-medium text-white">Knowsee + Engineering</h3>
                <p className="mt-1 text-gray-400">The complete package</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-3xl font-medium text-white">£3,999<span className="text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-sm text-gray-500">vs. £7-10k/month for a senior hire</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 block w-full rounded-full bg-[#6214d9] py-4 text-center font-medium text-white transition-all hover:bg-[#7c3aed] md:w-auto md:px-8 md:inline-block"
            >
              Book a call
            </a>

            {/* Features - two columns on desktop */}
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {combinedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6214d9]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Secondary Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Engineering Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            {/* Purple orb decoration */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72">
              <div className="h-full w-full rounded-full bg-[#6214d9]/20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white">Engineering</h3>
                <p className="mt-1 text-sm text-gray-400">Dedicated engineering capacity, equivalent to a full-time hire</p>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-medium text-white">£2,999<span className="text-base font-normal text-gray-400">/month</span></div>
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/saahil_mehta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 block w-full rounded-full border border-white/[0.15] bg-white/5 py-3 text-center font-medium text-white transition-all hover:bg-white/10"
              >
                Book a call
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {engineeringFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            {/* Purple orb decoration */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72">
              <div className="h-full w-full rounded-full bg-[#6214d9]/20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white">Knowsee</h3>
                <p className="mt-1 text-sm text-gray-400">AI that understands your data</p>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-medium text-white">£1,499<span className="text-base font-normal text-gray-400">/month</span></div>
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/saahil_mehta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 block w-full rounded-full border border-white/[0.15] bg-white/5 py-3 text-center font-medium text-white transition-all hover:bg-white/10"
              >
                Book a call
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {knowseeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Knowsee Secure add-on */}
              <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">Knowsee</span>
                    <span className="rounded border border-white/50 px-1 py-px text-[10px] font-medium text-white">
                      secure
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white">+£150/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                    Fully self-hosted with open-weight models
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                    No data leaves your infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
