"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Service } from "@/types";

interface ServiceDetailProps {
  service: Service;
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className="relative overflow-hidden bg-gradient-to-b from-primary-100 via-primary-100/90 to-primary-200/50 py-20 dark:from-[#3a0849] dark:via-[#3a0849] dark:to-[#2d0638] sm:py-24 lg:py-32"
    >
      <Container>
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
            !isEven ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={!isEven ? "lg:order-2" : ""}
          >
            <h2 className="mb-6 text-center text-3xl font-display font-bold italic text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
              {service.title}
            </h2>

            {/* Imagem/Visual representativa do serviço */}
            <div className="mb-6 relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-primary-200">
              {service.id === "branding" ? (
                <Image
                  src="/images/branding2.png"
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : service.id === "identidade-visual" ? (
                <Image
                  src="/images/idvisual.webp"
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : service.id === "social-media" ? (
                <Image
                  src="/images/social-media2.webp"
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : service.id === "posicionamento-digital" ? (
                <Image
                  src="/images/posicionamento-digital-1-1.webp"
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-display font-bold text-primary-700">
                      {service.title}
                    </span>
                    <p className="mt-2 text-sm text-primary-600">
                      Exemplo visual
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="mb-6 text-lg leading-relaxed text-neutral-600 dark:text-white">
              {service.description}
            </p>

            <div className="mb-6 rounded-lg bg-orange-50 dark:bg-orange-900/20 p-6">
              <p className="text-sm font-medium text-primary-900 dark:text-white">
                {service.targetAudience}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-center text-lg font-semibold text-neutral-900 dark:text-orange-500">
                Principais entregas:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-3 justify-center sm:justify-start">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600 dark:text-white text-center sm:text-left">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Button href="/contato" variant="secondary" size="lg" asLink>
                Fale com a gente
              </Button>
            </div>
          </motion.div>

          {/* Espaço vazio para manter layout alternado no desktop */}
          <div className={!isEven ? "lg:order-1" : ""} />
        </div>
      </Container>
    </section>
  );
}

