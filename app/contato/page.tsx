import { Metadata } from "next";
import ContactHeader from "@/components/sections/contact/ContactHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import { generatePageMetadata } from "@/components/seo/PageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contato",
  description:
    "Entre em contato com o Aura Prisma. Estamos prontos para transformar sua ideia em realidade e criar algo incrível juntos.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <ContactHeader />
      <ContactForm />
      <ContactCTA />
    </>
  );
}

