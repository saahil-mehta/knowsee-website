"use client";

import { motion } from "framer-motion";
import { Search, Settings, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Quick Search",
    description: 'Ask "What was Q2 revenue by region?"',
  },
  {
    icon: Settings,
    title: "Messy data made clean",
    description: "Inconsistent formats, missing",
  },
  {
    icon: CheckCircle,
    title: "Strength in consolidation",
    description: "AI securely learns your terminology,",
  },
];

export function ProblemSolution() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section container */}
        <div className="section-container px-8 py-16 md:px-16">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            {/* Badge */}
            <span className="mb-8 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
              Problem
            </span>

            {/* Headline */}
            <h2 className="mb-8 font-serif text-3xl italic leading-tight text-white md:text-5xl">
              Employees spent 25% of their work time searching for data*
            </h2>

            {/* Info list */}
            <div className="mb-8 space-y-2 text-lg text-white md:text-xl">
              <p>information lives everywhere, example:</p>
              <p>- Salesforce has customer history</p>
              <p>- Google Drive has that Q2 analysis</p>
              <p>- Slack has the discussion about pricing</p>
              <p>- Someone&apos;s Excel has actual numbers</p>
            </div>

            {/* Stat */}
            <p className="mb-4 text-xl font-medium text-white md:text-2xl">
              Finding anything takes 8 searches. Getting the right answer? Another
              30 minutes.
            </p>

            {/* Citation */}
            <p className="text-xs text-gray-500">
              (*{" "}
              <a
                href="https://www.hcamag.com/us/specialization/employee-engagement/employees-waste-at-least-two-hours-a-day-searching-for-what-they-need-to-work/324737"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                https://www.hcamag.com/us/specialization/employee-engagement/employees-waste-at-least-two-hours-a-day-searching-for-what-they-need-to-work/324737
              </a>
              )
            </p>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <span className="mb-12 inline-block rounded-full border border-white/[0.15] bg-white/5 px-4 py-2 text-sm text-gray-300">
              Solution
            </span>

            {/* Solution Cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                    <solution.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
