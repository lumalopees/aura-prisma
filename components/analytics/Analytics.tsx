"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Google Analytics 4
export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || typeof window === "undefined") return;

    // Carregar script do GA4
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  // Track page views
  useEffect(() => {
    if (!measurementId || typeof window === "undefined") return;

    if (window.gtag) {
      window.gtag("config", measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, measurementId]);

  return null;
}

// Plausible Analytics
export function Plausible({ domain }: { domain?: string }) {
  useEffect(() => {
    if (!domain || typeof window === "undefined") return;

    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", domain);
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector(
        `script[data-domain="${domain}"]`
      );
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [domain]);

  return null;
}

// Vercel Analytics (se usar Vercel)
export function VercelAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Vercel Analytics é carregado automaticamente se estiver no Vercel
    // Mas podemos adicionar aqui se necessário
  }, []);

  return null;
}

