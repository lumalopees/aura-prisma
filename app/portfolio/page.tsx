"use client";

import { useState, useMemo } from "react";
import { Metadata } from "next";
import PortfolioHeader from "@/components/sections/portfolio/PortfolioHeader";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import ProjectModal from "@/components/sections/portfolio/ProjectModal";
import PortfolioCTA from "@/components/sections/portfolio/PortfolioCTA";
import Container from "@/components/ui/Container";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = projectsData as Project[];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const currentProjectIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleNext = () => {
    if (currentProjectIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentProjectIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(filteredProjects[currentProjectIndex - 1]);
    }
  };

  return (
    <>
      <PortfolioHeader
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <section className="py-20 sm:py-24 lg:py-32">
        <Container>
          <PortfolioGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </Container>
      </section>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentProjectIndex < filteredProjects.length - 1}
        hasPrevious={currentProjectIndex > 0}
      />
      <PortfolioCTA />
    </>
  );
}

