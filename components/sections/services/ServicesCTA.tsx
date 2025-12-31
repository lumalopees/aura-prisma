"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 dark:from-[#3a0849] dark:via-[#3a0849] dark:to-[#2d0638] py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
            Vamos começar seu próximo projeto?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 dark:text-white sm:text-xl">
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
              className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
            >
              Ver nosso trabalho
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

