"use client";

import { motion } from "framer-motion";
import { LottieIcon } from "./lottie-icon";

const problems = [
  {
    icon: "/lotties/pipelines-break.json",
    title: "You spend Monday mornings pulling reports.",
    description:
      "Copying data between tools, building slides, chasing numbers. Every week.",
  },
  {
    icon: "/lotties/tools-charge.json",
    title: "Your numbers never match.",
    description:
      "Google Ads says one thing. Your CRM says another. Nobody knows which is right.",
  },
  {
    icon: "/lotties/clock.json",
    title: "You're paying for tools you barely use.",
    description: "Subscriptions stack up. Half your team uses spreadsheets anyway.",
  },
  {
    icon: "/lotties/ex-employee.json",
    title: "You know AI could help. You just can't start.",
    description:
      "No clean data, no engineering team, no time to figure it out.",
  },
];

export function ProblemSolution() {
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
            {/* Badge */}
            <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
              Problem
            </span>

            <h2 className="text-3xl text-white md:text-5xl">
              <span className="font-serif italic">This is costing you.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 md:text-xl">
              We fix this.
            </p>
          </motion.div>

          {/* Problem Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex h-48 flex-col items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] p-6 text-center transition-colors hover:border-[#6214d9]/50"
              >
                <div className="mb-4 h-12 w-12">
                  <LottieIcon src={problem.icon} className="h-full w-full" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  {problem.title}
                </h3>
                {problem.description && (
                  <p className="text-sm leading-relaxed text-gray-400">
                    {problem.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
