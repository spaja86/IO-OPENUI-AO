import type { Platform, Feature, QuizQuestion, NavLink } from '../types';

export const OWNER_INFO = {
  name: 'Nikola Spajic',
  emails: ['spajicn@yahoo.com', 'spajicn@gmail.com'],
  social: {
    facebook: 'https://www.facebook.com/Spaja86',
    instagram: 'https://www.instagram.com/spaja.1986',
    tiktok: 'https://www.tiktok.com/@spaja.1986',
    youtube: 'https://www.youtube.com/@spajanikopenevolution',
    github: 'https://github.com/spaja86',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Pocetna', path: '/' },
  { label: 'Funkcionalnosti', path: '/features' },
  { label: 'Chat', path: '/chat' },
  { label: 'Video', path: '/video' },
  { label: 'Igrice', path: '/games' },
  { label: 'O nama', path: '/about' },
  { label: 'Kontakt', path: '/contact' },
];

export const PLATFORMS: Platform[] = [
  {
    id: 'io-openui-ao',
    name: 'IO-OPENUI-AO',
    description: 'Platforma za profesionalnu saradnju, igrice i real-time komunikaciju',
    url: 'https://io-openui-ao.vercel.app',
    github: 'https://github.com/spaja86/IO-OPENUI-AO',
    tech: ['React', 'TypeScript', 'WebRTC', 'Socket.IO', 'Vite'],
    icon: '🌐',
    status: 'live',
  },
  {
    id: 'ai-iq-world-bank',
    name: 'Ai-Iq-World-Bank',
    description: 'Profesionalna svetska banka sa AI funkcionalnostima i globalnom saradnjom',
    url: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    github: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI'],
    icon: '🏦',
    status: 'active',
  },
  {
    id: 'ai-iq-menjacnica',
    name: 'Ai-Iq-Menjacnica',
    description: 'Profesionalna kripto menjacnica sa najvecim brojem kriptovaluta',
    url: 'https://github.com/spaja86/Ai-Iq-Menja-nica',
    github: 'https://github.com/spaja86/Ai-Iq-Menja-nica',
    tech: ['JavaScript', 'HTML', 'CSS', 'Crypto API'],
    icon: '💱',
    status: 'active',
  },
  {
    id: 'kompanija-spaja',
    name: 'Kompanija SPAJA',
    description: 'Maticna IT kompanija — hub za sve platforme i IT proizvode',
    url: 'https://github.com/spaja86/Kompanija-SPAJA',
    github: 'https://github.com/spaja86/Kompanija-SPAJA',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '🏢',
    status: 'active',
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'webrtc',
    icon: '📡',
    title: 'WebRTC Video',
    description: 'Peer-to-peer video pozivi direktno u pretrazivacu bez instalacije',
    color: '#7c3aed',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Socket.IO poruke u realnom vremenu sa kanalima i privatnim porukama',
    color: '#06b6d4',
  },
  {
    id: 'games',
    icon: '🎮',
    title: 'Igrice',
    description: 'Online igrice sa prijateljima — Tic-Tac-Toe, Quiz i jos mnogo toga',
    color: '#10b981',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI Asistent',
    description: 'Pametni chat bot koji pomaze sa svim vrstama pitanja i zadataka',
    color: '#f59e0b',
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'E2E Enkripcija',
    description: 'End-to-end enkripcija svih poruka i video poziva — privatnost garantovana',
    color: '#ef4444',
  },
  {
    id: 'crossplatform',
    icon: '📱',
    title: 'Cross-platform',
    description: 'Radi na svim uredajima i pretrazivacu — desktop, tablet, mobilni',
    color: '#8b5cf6',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Koji protokol koristi WebRTC za peer-to-peer komunikaciju?',
    options: ['HTTP', 'DTLS/SRTP', 'FTP', 'SMTP'],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'Koja kriptovaluta je prva i najveca po trzisnoj kapitalizaciji?',
    options: ['Ethereum', 'Solana', 'Bitcoin', 'Cardano'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Sta znaci akronim AI?',
    options: ['Advanced Internet', 'Artificial Intelligence', 'Automated Input', 'Advanced Integration'],
    correctIndex: 1,
  },
  {
    id: 4,
    question: 'Koji JavaScript framework koristi komponentno-baziran pristup?',
    options: ['jQuery', 'React', 'Bootstrap', 'Lodash'],
    correctIndex: 1,
  },
  {
    id: 5,
    question: 'Sta je Socket.IO?',
    options: [
      'Baza podataka',
      'Biblioteka za real-time bi-direktionalnu komunikaciju',
      'CSS framework',
      'Testing biblioteka',
    ],
    correctIndex: 1,
  },
];

export const MOCK_MESSAGES = [
  { id: '1', user: 'Nikola', content: 'Zdravo svima! 👋', timestamp: new Date(Date.now() - 300000), channel: 'general', type: 'message' as const },
  { id: '2', user: 'Gost', content: 'Cao Nikola! Kako si?', timestamp: new Date(Date.now() - 240000), channel: 'general', type: 'message' as const },
  { id: '3', user: 'Sistem', content: 'Ana se pridruzila kanalu', timestamp: new Date(Date.now() - 180000), channel: 'general', type: 'system' as const },
  { id: '4', user: 'Ana', content: 'Zdravo! Uzbudjeni smo zbog novog projekta 🚀', timestamp: new Date(Date.now() - 120000), channel: 'general', type: 'message' as const },
  { id: '5', user: 'Nikola', content: 'Odlicno! Radimo na WebRTC integraciji', timestamp: new Date(Date.now() - 60000), channel: 'general', type: 'message' as const },
  { id: '6', user: 'Gost', content: 'Zvuci super! Kad krecemo?', timestamp: new Date(Date.now() - 30000), channel: 'general', type: 'message' as const },
];
