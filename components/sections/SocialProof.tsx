"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import statsData from "@/data/stats.json";

interface Stats {
  projects: string;
  clients: string;
  years: string;
  satisfaction: string;
}

export default function SocialProof() {
  const stats = statsData as Stats;

  const statsItems = [
    { label: "Projetos realizados", value: stats.projects },
    { label: "Clientes atendidos", value: stats.clients },
    { label: "Anos de experiência", value: stats.years },
    { label: "Satisfação", value: stats.satisfaction },
  ];

  return (
    <section className="bg-primary-100/30 py-16 dark:bg-[#3a0849] sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {statsItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-3xl font-display font-bold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                {item.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-orange-500 sm:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

