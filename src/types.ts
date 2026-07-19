export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of Lucide icon
  price?: string;
  features: string[];
}

export interface ContactInfo {
  email: string;
  whatsapp: string; // full link or phone
  github: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  aboutMarkdown: string;
  imagePath: string;
  services: Service[];
  contact: ContactInfo;
}
