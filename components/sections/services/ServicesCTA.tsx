"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="bg-neutral-900 py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl">
            Vamos começar seu próximo projeto?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-300 sm:text-xl">
            Entre em contato para agendar uma conversa. Estamos prontos para
            transformar sua ideia em realidade.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contato" variant="secondary" size="lg" asLink>
              Fale com a gente
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="lg"
              asLink
              className="border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Ver nosso trabalho
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

