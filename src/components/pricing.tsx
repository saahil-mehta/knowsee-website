"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";
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
  { icon: Users, text: "Full-time engineering value, without the full-time hire" },
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
              30-day opt-out. If it&apos;s not right, walk away.
                <br />
                After that, 6-month commitment because results compound over time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
