"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 py-20 dark:from-[#3a0849] dark:via-[#3a0849] dark:to-[#2d0638] sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-display font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Toda marca tem algo que{" "}
            <span className="text-primary-600 dark:text-orange-500">
              só ela pode ser
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl"
          >
            Somos um estúdio criativo que combina estratégia e sensibilidade para
            criar marcas que se posicionam com clareza e consistência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/portfolio" size="lg" variant="secondary">
              Conheça nosso trabalho
            </Button>
            <Button href="/contato" size="lg" variant="outline">
              Fale com a gente
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
