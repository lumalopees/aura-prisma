import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SocialProof from "@/components/sections/SocialProof";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Segments from "@/components/sections/Segments";
import ContactForm from "@/components/sections/ContactForm";
import Testimonials from "@/components/sections/Testimonials";

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

