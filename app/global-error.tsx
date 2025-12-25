"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-2xl font-bold text-neutral-900">
              Algo deu errado
            </h1>
            <p className="mb-6 text-neutral-600">
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </p>
            <button
              onClick={reset}
              className="rounded-lg bg-neutral-900 px-6 py-3 text-white transition-colors hover:bg-neutral-800"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

