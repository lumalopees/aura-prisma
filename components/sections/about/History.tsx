"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import aboutData from "@/data/about.json";

export default function History() {
  const history = aboutData.history;

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Imagem representativa da história do estúdio - placeholder até imagem real ser adicionada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-primary-200"
          >
            {/* Quando houver imagem real, usar:
            <Image
              src="/images/about/history.jpg"
              alt="História do estúdio"
              fill
              className="object-cover"
            />
            */}
            <div className="flex h-full items-center justify-center">
              <span className="text-primary-700 font-medium">Imagem da História</span>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-display font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
              {history.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-neutral-600">
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

