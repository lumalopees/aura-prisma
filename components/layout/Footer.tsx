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
    <footer className="border-t border-primary-200 bg-primary-100/50 dark:bg-[#3a0849] dark:border-neutral-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-display font-bold text-neutral-900 dark:text-orange-500">
              Aura Prisma
            </h3>
            <p className="text-sm text-neutral-600 dark:text-white">
              Estúdio criativo especializado em branding, identidade visual,
              social media e posicionamento digital.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-orange-500">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 dark:text-white transition-colors hover:text-neutral-900 dark:hover:text-orange-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-orange-500">
              Redes Sociais
            </h4>
            <ul className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="text-neutral-600 dark:text-white transition-colors hover:text-neutral-900 dark:hover:text-orange-400"
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
          <p className="text-center text-sm text-neutral-600 dark:text-white">
            © {currentYear} Aura Prisma. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

