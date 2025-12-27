"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface PortfolioHeaderProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categories = [
  { id: "all", label: "Todos" },
  { id: "branding", label: "Branding" },
  { id: "identidade-visual", label: "Identidade Visual" },
  { id: "social-media", label: "Social Media" },
  { id: "posicionamento-digital", label: "Posicionamento Digital" },
];

export default function PortfolioHeader({
  activeFilter,
  onFilterChange,
}: PortfolioHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 py-20 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-display font-bold text-neutral-900 sm:text-5xl lg:text-6xl">
            Portfólio
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Alguns dos projetos que desenvolvemos com paixão e dedicação
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

