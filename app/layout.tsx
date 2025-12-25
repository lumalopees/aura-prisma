import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { defaultMetadata } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    name: "Aura Prisma",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://auraprisma.com",
    description:
      "Estúdio criativo especializado em branding, identidade visual, social media e posicionamento digital.",
    contactPoint: {
      "@type": "ContactPoint" as const,
      contactType: "Customer Service",
      email: "contato@auraprisma.com",
    },
    sameAs: [
      "https://instagram.com/auraprisma",
      "https://behance.net/auraprisma",
      "https://linkedin.com/company/auraprisma",
    ],
  };

  const websiteData = {
    name: "Aura Prisma",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://auraprisma.com",
    description:
      "Estúdio criativo especializado em branding, identidade visual, social media e posicionamento digital.",
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              ...organizationData,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              ...websiteData,
            }),
          }}
        />
      </head>
      <body>
        <ToastProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}

