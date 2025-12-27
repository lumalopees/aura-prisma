"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import segmentsData from "@/data/segments.json";

interface Segment {
  id: string;
  title: string;
  description: string;
  services: string[];
}

export default function Segments() {
  const segments = segmentsData as Segment[];

  return (
    <section className="bg-primary-100/30 py-20 dark:bg-[#3a0849] sm:py-24 lg:py-32">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
            Principais segmentos atendidos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-white">
            Projetos personalizados para diferentes segmentos de mercado e
            objetivos de negócio
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <h3 className="mb-3 text-xl font-display font-semibold text-neutral-900 dark:text-orange-500">
                  {segment.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-white">
                  {segment.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {segment.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio?segment=${segment.id}`}
                  className="text-sm font-medium text-primary-600 transition-colors hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
                >
                  Ver projetos neste segmento →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

