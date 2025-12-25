"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-10 w-10 text-red-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-display font-bold text-neutral-900 sm:text-4xl">
              Algo deu errado
            </h1>
            <p className="mb-2 text-lg text-neutral-600">
              Ops! Encontramos um erro inesperado. Não se preocupe, nossa equipe
              foi notificada.
            </p>
            {error.message && (
              <p className="mb-8 text-sm text-neutral-500">
                {error.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={reset}
              size="lg"
              variant="primary"
            >
              Tentar novamente
            </Button>
            <Button href="/" size="lg" variant="outline" asLink>
              Voltar para Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

