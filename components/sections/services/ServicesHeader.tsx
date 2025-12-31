"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ServicesHeader() {
  return (
    <section className="bg-primary-100 dark:bg-[#440756] py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-5xl lg:text-6xl">
            Serviços
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-white sm:text-xl">
            Oferecemos soluções completas para construir e fortalecer sua marca
            no ambiente digital. Cada serviço é pensado estrategicamente para
            gerar impacto real e duradouro.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

