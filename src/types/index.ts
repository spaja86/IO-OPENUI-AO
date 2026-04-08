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
  color?: string;
  category?: 'realtime' | 'ai' | 'security' | 'collaboration';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
