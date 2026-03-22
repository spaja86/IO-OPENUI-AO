export interface Platform {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  tech: string[];
  icon: string;
  status: 'live' | 'active' | 'coming-soon';
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface ChatMessage {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  channel: string;
  type: 'message' | 'system';
}

export interface GameScore {
  player: string;
  score: number;
  game: string;
  date: Date;
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
