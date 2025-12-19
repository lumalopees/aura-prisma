import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/contato", label: "Contato" },
  ];

  const socialLinks = [
    { href: "#", label: "Instagram", icon: "instagram" },
    { href: "#", label: "Behance", icon: "behance" },
    { href: "#", label: "LinkedIn", icon: "linkedin" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-display font-bold text-neutral-900">
              Aura Prisma
            </h3>
            <p className="text-sm text-neutral-600">
              Estúdio criativo especializado em branding, identidade visual,
              social media e posicionamento digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-neutral-900">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-neutral-900">
              Redes Sociais
            </h4>
            <ul className="flex space-x-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="text-neutral-600 transition-colors hover:text-neutral-900"
                    aria-label={social.label}
                  >
                    <span className="text-sm capitalize">{social.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-neutral-200 pt-8">
          <p className="text-center text-sm text-neutral-600">
            © {currentYear} Aura Prisma. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

