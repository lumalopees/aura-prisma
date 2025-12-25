import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="mb-4 text-9xl font-display font-bold text-primary-600">
              404
            </h1>
            <h2 className="mb-4 text-3xl font-display font-bold text-neutral-900 sm:text-4xl">
              Página não encontrada
            </h2>
            <p className="mb-8 text-lg text-neutral-600">
              Ops! A página que você está procurando não existe ou foi movida.
              Vamos te ajudar a encontrar o que precisa.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg" variant="primary" asLink>
              Voltar para Home
            </Button>
            <Button href="/portfolio" size="lg" variant="outline" asLink>
              Ver Portfólio
            </Button>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-sm font-medium text-neutral-900">
              Ou navegue por:
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/sobre"
                className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
              >
                Sobre
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/servicos"
                className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
              >
                Serviços
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/portfolio"
                className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
              >
                Portfólio
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/contato"
                className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
}

