"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";
import { BrandLogos } from "./brand-logos";
import {
  Users,
  Wrench,
  ClipboardCheck,
  Clock,
  Bot,
  ShieldCheck,
  Settings,
  Database,
  Infinity,
  Globe,
  Cloud,
  KeyRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  text: string;
}

const engineeringFeatures: Feature[] = [
  { icon: Users, text: "Dedicated engineering capacity, fractional commitment" },
  { icon: Wrench, text: "New builds or fixing what's broken" },
  { icon: ClipboardCheck, text: "Guaranteed deliverables, tracked transparently" },
  { icon: Clock, text: "24-hour response SLA" },
  { icon: Bot, text: "Real engineers + AI agents, working in unison. Nothing ships without review." },
  { icon: ShieldCheck, text: "Every workflow is sandboxed, auditable, and GDPR-compliant" },
];

const knowseeFeatures: Feature[] = [
  { icon: Settings, text: "Fully managed. We deploy, maintain, and update it for you." },
  { icon: Database, text: "Connected to all your data sources (yes, all of them)" },
  { icon: Infinity, text: "Unlimited users, unlimited queries" },
  { icon: Globe, text: "Answers validated against live web data" },
  { icon: Cloud, text: "Your data stays in your cloud. Always." },
  { icon: KeyRound, text: "Want even more control? Opt for an open-weight model. The model is yours too." },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      {/* Brand logos as trust signal before price */}
      <BrandLogos />

      <div className="mx-auto max-w-3xl px-6">
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

          <div className="mx-auto mb-6 h-16 w-16">
            <LottieIcon src="/lotties/pricing.json" className="h-full w-full" />
          </div>

          <h2 className="text-3xl text-white md:text-5xl">
            Engineering and AI.{" "}
            <span className="font-serif italic">One monthly price.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Everything you need to fix your data and keep it running. No hiring, no overhead.
          </p>
        </motion.div>

        {/* Stacked Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Pilot card — peeks out behind the main card */}
          <div className="mx-2 rounded-3xl border border-white/10 bg-white/[0.04] px-8 pb-20 pt-6 md:px-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  30-day pilot
                </span>
                <div className="mt-1 text-2xl font-medium text-white md:text-3xl">
                  £1,500
                </div>
              </div>
              <p className="max-w-xs text-center text-sm text-gray-400 sm:text-left">
                Same features. See if we&apos;re the right fit.
              </p>
              <a
                href="https://calendly.com/saahil_mehta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-[#6214d9] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#6214d9]/20"
              >
                Start pilot
              </a>
            </div>
          </div>

          {/* Main retainer card — overlaps the pilot card */}
          <div className="relative z-10 -mt-12 overflow-hidden rounded-3xl border border-[#6214d9]/30 bg-[#0a0a0a] p-8 md:p-10">
            {/* Purple orb decoration */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96">
              <div className="h-full w-full rounded-full bg-[#6214d9]/30 blur-3xl" />
            </div>

            <div className="relative">
              {/* Price */}
              <div className="mb-8 text-center">
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-gray-400">
                  Full retainer
                </span>
                <div className="text-4xl font-medium text-white md:text-5xl">
                  £2,799
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
                Book a call
              </a>

              {/* Features - Two columns */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Engineering */}
                <div>
                  <h3 className="mb-6 text-2xl text-white">
                    Engineering
                  </h3>
                  <ul className="space-y-4">
                    {engineeringFeatures.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3 text-sm text-white">
                        <feature.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Knowsee */}
                <div>
                  <h3 className="mb-6 text-2xl text-white">
                    <span className="font-serif">Know</span><span className="font-serif italic">see</span> <span className="text-lg text-gray-500">(included)</span>
                  </h3>
                  <ul className="space-y-4">
                    {knowseeFeatures.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3 text-sm text-white">
                        <feature.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6214d9]" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Commitment note */}
              <p className="mt-10 text-center text-sm text-gray-500">
                No lock-in. Cancel anytime.
              </p>
              <p className="mt-2 text-center text-xs text-gray-600">
                Save 15% with an annual commitment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
