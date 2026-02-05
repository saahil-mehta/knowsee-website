"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";

const steps = [
  {
    icon: "/lotties/search.json",
    title: "Audit",
    description:
      "We review your data architecture and deliver actionable recommendations. Free.",
  },
  {
    icon: "/lotties/onboard.json",
    title: "Onboard",
    description:
      "Knowsee deployed to your cloud infrastructure. Your data stays secure in your own environment.",
  },
  {
    icon: "/lotties/cog-settings.json",
    title: "Build",
    description:
      "Instagram to BigQuery. Salesforce to Snowflake. Stripe to your warehouse. HubSpot to Redshift. Any source, any destination.",
  },
  {
    icon: "/lotties/maintain.json",
    title: "Maintain",
    description:
      "Monitoring, updates, and support. Governed by strict SLAs and an experienced team of engineers (human and AI) led by Saahil.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section container */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-8 py-16 md:px-16">
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
              From scattered data to{" "}
              <span className="font-serif italic">AI insights</span>.
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
                <div className="mx-auto mb-6 h-16 w-16">
                  <LottieIcon src={step.icon} className="h-full w-full" />
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
              href="https://calendly.com/saahil_mehta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#6214d9] px-10 py-4 text-base font-medium text-white transition-all hover:bg-[#7928e8]"
            >
              Start with an audit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
