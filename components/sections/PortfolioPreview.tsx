"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function PortfolioPreview() {
  const projects = (projectsData as Project[]).slice(0, 4);

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
              Portfólio
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600">
              Alguns dos projetos que desenvolvemos com paixão e dedicação
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="/portfolio" variant="outline">
              Ver todos
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.id}`}>
                <div className="group relative overflow-hidden rounded-lg bg-neutral-100 aspect-[4/3]">
                  {/* Placeholder para imagem - será substituído quando houver imagens reais */}
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                    <span className="text-sm font-medium text-primary-700">
                      {project.title}
                    </span>
                  </div>
                  {/* Quando houver imagens reais, usar:
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  */}
                  <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/portfolio" variant="outline" size="lg">
            Ver todos os projetos
          </Button>
        </div>
      </Container>
    </section>
  );
}

