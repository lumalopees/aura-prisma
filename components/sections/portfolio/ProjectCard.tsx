"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({
  project,
  onClick,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 mb-4">
        {/* Imagem do projeto */}
        {project.id === "project-1" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/tech-startup.webp"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-2" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/lifestyle.webp"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-3" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/ecommerce.webp"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-4" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/digital-services-main.jpg"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-5" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/foodtech.jpg"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-6" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/fintech.jpg"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-7" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/naturalproducts.jpg"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : project.id === "project-8" ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src="/images/edtech.jpeg"
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full items-center justify-center">
              <span className="text-center text-lg font-display font-bold text-primary-700 px-4">
                {project.title}
              </span>
            </div>
            <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-orange-50 dark:group-hover:text-orange-600 transition-colors">
                Ver projeto
              </span>
            </div>
          </>
        )}
      </div>
      <h3 className="mb-1 text-center text-lg font-semibold text-neutral-900 dark:text-orange-500">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-white">{project.description}</p>
      {project.services && project.services.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="relative rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 transition-all hover:bg-[#ddb4dc] hover:shadow-[0_0_0_2px_rgba(124,58,237,0.3)] dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50 dark:hover:shadow-[0_0_0_2px_rgba(249,115,22,0.3)]"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

