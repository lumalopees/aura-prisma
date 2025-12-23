"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function PortfolioGrid({
  projects,
  onProjectClick,
}: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-neutral-600">
          Nenhum projeto encontrado nesta categoria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
          index={index}
        />
      ))}
    </div>
  );
}

