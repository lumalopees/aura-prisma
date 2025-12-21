import ServicesHeader from "@/components/sections/services/ServicesHeader";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import ProcessSection from "@/components/sections/services/ProcessSection";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import servicesData from "@/data/services.json";
import { Service } from "@/types";

export default function ServicosPage() {
  const services = servicesData as Service[];

  return (
    <>
      <ServicesHeader />
      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}
      <ProcessSection />
      <ServicesCTA />
    </>
  );
}

