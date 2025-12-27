"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

// Verifica se a imagem existe
const hasImage = (projectId: string, imagePath: string) => {
  if (projectId === "project-1") {
    // Para project-1, verifica se a imagem específica existe
    return true; // Assumimos que a imagem será adicionada
  }
  return false;
};

export default function PortfolioPreview() {
  const [isLoading] = useState(false); // Simula loading quando necessário
  const projects = (projectsData as Project[]).slice(0, 4);

  if (isLoading) {
    return (
      <section className="py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mb-12">
            <div className="mb-4 h-10 w-64 animate-pulse rounded bg-neutral-200" />
            <div className="h-6 w-96 animate-pulse rounded bg-neutral-200" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 dark:text-orange-500 sm:text-4xl lg:text-5xl">
              Portfólio
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600 dark:text-white">
              Alguns dos projetos que desenvolvemos com paixão e dedicação
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="/portfolio" variant="outline" asLink>
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
              <Link href={`/portfolio#${project.id}`}>
                <div className="group relative overflow-hidden rounded-lg bg-neutral-100 aspect-[4/3]">
                  {/* Imagem do projeto - usa imagem específica para project-1, project-2, project-3 e project-4, senão usa placeholder */}
                  {project.id === "project-1" ? (
                    <>
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/branding.jpg"
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => {
                            // Se a imagem não carregar, mostra placeholder
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = 'none';
                              const placeholder = parent.querySelector('.image-placeholder');
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'flex';
                              }
                            }
                          }}
                        />
                        {/* Placeholder fallback caso imagem não carregue */}
                        <div className="image-placeholder hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                          <span className="text-sm font-medium text-primary-700">
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                    </>
                  ) : project.id === "project-2" ? (
                    <>
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/identidade-visual.jpg"
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => {
                            // Se a imagem não carregar, mostra placeholder
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = 'none';
                              const placeholder = parent.querySelector('.image-placeholder');
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'flex';
                              }
                            }
                          }}
                        />
                        {/* Placeholder fallback caso imagem não carregue */}
                        <div className="image-placeholder hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                          <span className="text-sm font-medium text-primary-700">
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                    </>
                  ) : project.id === "project-3" ? (
                    <>
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/social-media.jpg"
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => {
                            // Se a imagem não carregar, mostra placeholder
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = 'none';
                              const placeholder = parent.querySelector('.image-placeholder');
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'flex';
                              }
                            }
                          }}
                        />
                        {/* Placeholder fallback caso imagem não carregue */}
                        <div className="image-placeholder hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                          <span className="text-sm font-medium text-primary-700">
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                    </>
                  ) : project.id === "project-4" ? (
                    <>
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/posicionamento-digital.jpeg"
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => {
                            // Se a imagem não carregar, mostra placeholder
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = 'none';
                              const placeholder = parent.querySelector('.image-placeholder');
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'flex';
                              }
                            }
                          }}
                        />
                        {/* Placeholder fallback caso imagem não carregue */}
                        <div className="image-placeholder hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                          <span className="text-sm font-medium text-primary-700">
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                    </>
                  ) : (
                    <>
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                        <span className="text-sm font-medium text-primary-700">
                          {project.title}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/10" />
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-orange-500">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-white">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/portfolio" variant="outline" size="lg" asLink>
            Ver todos os projetos
          </Button>
        </div>
      </Container>
    </section>
  );
}
