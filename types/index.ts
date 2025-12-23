export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  image: string;
  images?: string[];
  client: string;
  year: string;
  services?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

