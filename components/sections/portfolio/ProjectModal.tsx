"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 
    ? [project.image, ...project.images]
    : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 z-50 mx-auto max-w-6xl overflow-y-auto rounded-lg bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4">
              <h2 className="text-2xl font-display font-bold text-neutral-900">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
                aria-label="Fechar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Galeria de Imagens */}
              <div className="relative mb-8 aspect-video overflow-hidden rounded-lg bg-neutral-100">
                {/* Placeholder para imagem */}
                <div className="flex h-full items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary-700">
                    {project.title} - Imagem {currentImageIndex + 1}
                  </span>
                </div>
                {/* Quando houver imagens reais, usar:
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                */}

                {/* Navegação de imagens */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white"
                      aria-label="Imagem anterior"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white"
                      aria-label="Próxima imagem"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "w-8 bg-white"
                              : "w-2 bg-white/50"
                          }`}
                          aria-label={`Ir para imagem ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Informações do Projeto */}
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                    Sobre o projeto
                  </h3>
                  <p className="mb-6 text-neutral-600 leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>

                  {project.challenge && (
                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                        Desafio
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                        Solução
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="mb-4 text-sm font-semibold text-neutral-900">
                      Detalhes
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-medium text-neutral-500">
                          Cliente
                        </span>
                        <p className="text-sm text-neutral-900">
                          {project.client}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-neutral-500">
                          Ano
                        </span>
                        <p className="text-sm text-neutral-900">
                          {project.year}
                        </p>
                      </div>
                      {project.services && project.services.length > 0 && (
                        <div>
                          <span className="text-xs font-medium text-neutral-500">
                            Serviços
                          </span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {project.services.map((service) => (
                              <span
                                key={service}
                                className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer com navegação */}
            <div className="sticky bottom-0 flex items-center justify-between border-t border-neutral-200 bg-white px-6 py-4">
              <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  hasPrevious
                    ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    : "bg-neutral-50 text-neutral-400 cursor-not-allowed"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
                Projeto anterior
              </button>

              <button
                onClick={onNext}
                disabled={!hasNext}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  hasNext
                    ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    : "bg-neutral-50 text-neutral-400 cursor-not-allowed"
                }`}
              >
                Próximo projeto
                <svg
                  className="h-4 w-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

