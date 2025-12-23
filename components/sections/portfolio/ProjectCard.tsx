"use client";

import { motion } from "framer-motion";
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
        {/* Placeholder para imagem - será substituído quando houver imagens reais */}
        <div className="flex h-full items-center justify-center">
          <span className="text-lg font-display font-bold text-primary-700">
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
        <div className="absolute inset-0 bg-neutral-900/0 transition-colors group-hover:bg-neutral-900/20" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900">
            Ver projeto
          </span>
        </div>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-600">{project.description}</p>
      {project.services && project.services.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

