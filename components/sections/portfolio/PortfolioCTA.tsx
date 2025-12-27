"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function PortfolioCTA() {
  return (
    <section className="bg-primary-100/30 py-20 dark:bg-neutral-800 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-display font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
            Tem um projeto em mente?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Vamos conversar sobre como podemos transformar sua ideia em
            realidade
          </p>
          <Button href="/contato" variant="primary" size="lg" asLink>
            Fale com a gente
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

