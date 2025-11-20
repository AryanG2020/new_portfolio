export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[]; // Changed to array of strings for bullet points
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools' | 'Design';
}