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

export default function Process() {
  const steps = processData as ProcessStep[];

  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      discover: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      strategy: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      create: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      implement: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
    };

    return icons[iconName] || icons.discover;
  };

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
            Processo de Trabalho
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-white">
            De um desafio real a uma solução estratégica. Nosso processo é
            colaborativo e adaptado à realidade da sua marca.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha conectora - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary-200 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative lg:flex lg:items-center"
              >
                {/* Conteúdo - Alterna lado no desktop com zigue-zague */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:ml-auto lg:pl-12"
                  }`}
                >
                  <div
                    className={`flex items-start gap-6 ${
                      index % 2 !== 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Número e ícone */}
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                        <span className="text-2xl font-display font-bold">
                          {step.step}
                        </span>
                        {/* Ícone pequeno no canto */}
                        <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-600 dark:text-orange-400 shadow-md">
                          {getIcon(step.icon)}
                        </div>
                      </div>
                    </div>

                    {/* Texto */}
                    <div
                      className={`flex-1 ${
                        index % 2 !== 0 ? "text-right" : ""
                      }`}
                    >
                      <h3 className="mb-2 text-xl font-display font-semibold text-neutral-900 dark:text-orange-500">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-white leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Espaço vazio para alternar layout no desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

