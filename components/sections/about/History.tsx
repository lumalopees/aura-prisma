"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import aboutData from "@/data/about.json";

export default function History() {
  const history = aboutData.history;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 py-20 dark:from-[#3a0849] dark:via-[#3a0849] dark:to-[#2d0638] sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Imagem representativa da história do estúdio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-primary-200"
          >
            <Image
              src="/images/histoty-firm.webp"
              alt="História do estúdio"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-center text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
              {history.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-neutral-600 dark:text-white">
              {history.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

