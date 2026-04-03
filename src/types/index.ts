export interface Platform {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  tech: string[];
  icon: string;
  status: 'live' | 'active' | 'development';
}

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  isOwn: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'realtime' | 'ai' | 'security' | 'collaboration';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
