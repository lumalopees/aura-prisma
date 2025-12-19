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
  image: string;
  client: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

