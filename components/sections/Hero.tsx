"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 dark:from-neutral-900 dark:to-neutral-800 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-display font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}{" "}
            <span className="text-primary-600 dark:text-primary-400">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl lg:text-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/portfolio" size="lg" variant="primary">
              {t.hero.ctaWork}
            </Button>
            <Button href="/contato" size="lg" variant="outline">
              {t.hero.ctaContact}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
