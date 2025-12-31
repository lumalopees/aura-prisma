"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import processData from "@/data/process.json";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessSection() {
  const steps = processData as ProcessStep[];

  return (
    <section className="bg-primary-100/30 py-20 dark:bg-[#3a0849] sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
            Como trabalhamos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-white">
            Nosso processo é colaborativo e adaptado à realidade da sua marca
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                  <span className="text-3xl font-display font-bold">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-display font-semibold text-neutral-900 dark:text-orange-500">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-white leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

