import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SocialProof from "@/components/sections/SocialProof";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Segments from "@/components/sections/Segments";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/contact/ContactForm";
import { generatePageMetadata } from "@/components/seo/PageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description:
    "Estúdio criativo especializado em branding, identidade visual, social media e posicionamento digital. Transformamos sua marca em algo único.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SocialProof />
      <PortfolioPreview />
      <Segments />
      <Testimonials />
      <ContactForm />
    </>
  );
}
