"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";

const auditItems = [
  {
    icon: "/lotties/data-mapped.json",
    title: "Your data, mapped.",
    description:
      "We trace every source, every tool, every spreadsheet. You get a clear picture of where your data lives, how it flows, and where it breaks.",
  },
  {
    icon: "/lotties/money-losing.json",
    title: "Where you're losing money.",
    description:
      "Tool overlap, unused subscriptions, manual work that should be automated. We show you exactly what's costing you and how to fix it.",
  },
  {
    icon: "/lotties/what-good.json",
    title: "What good looks like.",
    description:
      "A recommended architecture showing how your data should flow, what to connect, and the quality improvements you'd see.",
  },
];

export function AuditSection() {
  return (
    <section className="px-6 py-24">
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
              Free Audit
            </span>

            <h2 className="text-3xl text-white md:text-5xl">
              Here&apos;s what you get.{" "}
              <span className="font-serif italic">
                Before you pay a penny.
              </span>
            </h2>
          </motion.div>

          {/* Audit Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {auditItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-6 transition-colors hover:border-[#6214d9]/50"
              >
                <div className="mb-4 h-12 w-12">
                  <LottieIcon src={item.icon} className="h-full w-full" />
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#6214d9] px-10 py-4 text-base font-medium text-white transition-all hover:bg-[#7928e8]"
            >
              Get your free audit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
