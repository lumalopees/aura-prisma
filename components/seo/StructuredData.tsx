import { Organization, WebSite, BreadcrumbList } from "@/types/structured-data";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "BreadcrumbList";
  data: Organization | WebSite | BreadcrumbList;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        }),
      }}
    />
  );
}

