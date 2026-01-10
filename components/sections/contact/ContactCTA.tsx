"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 dark:bg-[#671770] dark:[background-image:none] py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-display font-bold italic text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Cada grande projeto começa com uma conversa. Estamos prontos para
            ouvir sua ideia e transformá-la em realidade.
          </p>
          <Button href="/portfolio" variant="secondary" size="lg" asLink>
            Ver nosso trabalho
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

