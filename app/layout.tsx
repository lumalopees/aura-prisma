import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import PageTransition from "@/components/transitions/PageTransition";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { GoogleAnalytics, Plausible } from "@/components/analytics/Analytics";
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const initialTheme = theme || systemTheme;
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
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
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white transition-colors duration-200">
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
        <Plausible domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} />
        <ThemeProvider>
          <ToastProvider>
            <ScrollProgress />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

