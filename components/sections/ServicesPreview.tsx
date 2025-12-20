"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import servicesData from "@/data/services.json";
import { Service } from "@/types";

export default function ServicesPreview() {
  const services = servicesData as Service[];

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
            Serviços
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Oferecemos soluções completas para construir e fortalecer sua marca
            no ambiente digital
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <h3 className="mb-3 text-xl font-display font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/servicos#${service.id}`}
                  className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                >
                  Saiba mais →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicos"
            className="inline-block text-base font-medium text-neutral-700 transition-colors hover:text-neutral-900"
          >
            Ver todos os serviços →
          </Link>
        </div>
      </Container>
    </section>
  );
}

