"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-display font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            Toda marca tem algo que{" "}
            <span className="text-primary-600">só ela pode ser</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-600 sm:text-xl lg:text-2xl"
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
            <Button href="/portfolio" size="lg" variant="primary">
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

