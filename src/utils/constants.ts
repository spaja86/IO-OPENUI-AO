import { Platform, Feature } from '../types';

export const PLATFORMS: Platform[] = [
  {
    id: 'kompanija-spaja',
    name: 'Kompanija SPAJA',
    description: 'Matična IT kompanija — hub za sve platforme',
    url: 'https://github.com/spaja86/Kompanija-SPAJA',
    github: 'https://github.com/spaja86/Kompanija-SPAJA',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '🏢',
    status: 'active' as const,
  },
  {
    id: 'world-bank',
    name: 'Ai-Iq-World-Bank',
    description: 'Profesionalna svetska banka sa AI tehnologijama',
    url: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    github: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '🏦',
    status: 'active' as const,
  },
  {
    id: 'menjacnica',
    name: 'Ai-Iq-Menjačnica',
    description: 'Svetska kripto menjačnica sa AI trading platformom',
    url: 'https://github.com/spaja86/Ai-Iq-Menja-nica',
    github: 'https://github.com/spaja86/Ai-Iq-Menja-nica',
    tech: ['JavaScript', 'HTML', 'CSS'],
    icon: '💱',
    status: 'active' as const,
  },
];

export const OWNER = {
  name: 'Nikola Spajić',
  email: ['spajicn@yahoo.com', 'spajicn@gmail.com'],
  social: {
    facebook: 'https://www.facebook.com/Spaja86',
    instagram: 'https://www.instagram.com/spaja.1986',
    tiktok: 'https://www.tiktok.com/@spaja.1986',
    youtube: 'https://www.youtube.com/@spajanikopenevolution',
  },
};

export const FEATURES: Feature[] = [
  {
    id: 'webrtc',
    title: 'Real-time Video',
    description: 'Visokokvalitetni video pozivi i grupne konferencije putem WebRTC tehnologije. Peer-to-peer komunikacija bez servera.',
    icon: '📡',
    category: 'realtime',
  },
  {
    id: 'socketio',
    title: 'Live Chat',
    description: 'Instant messaging sa Socket.IO — ultra-brzi chat u realnom vremenu sa podruškom za sobe i notifikacije.',
    icon: '💬',
    category: 'realtime',
  },
  {
    id: 'collaboration',
    title: 'Profesionalna Saradnja',
    description: 'Alati za timsku saradnju — deljenje ekrana, bela tabla, zajednički dokumenti i task management.',
    icon: '🤝',
    category: 'collaboration',
  },
  {
    id: 'gaming',
    title: 'Gaming & Entertainment',
    description: 'Interaktivni multiplayer igre i zabavni sadržaj. Tic-Tac-Toe, kvizovi i još mnogo toga.',
    icon: '🎮',
    category: 'collaboration',
  },
  {
    id: 'security',
    title: 'Sigurna Komunikacija',
    description: 'End-to-end enkripcija, HTTPS protokol i napredne sigurnosne politike za zaštitu privatnosti.',
    icon: '🔒',
    category: 'security',
  },
  {
    id: 'global',
    title: 'Globalni Pristup',
    description: 'Platforma dostupna 24/7 iz celog sveta, deployovana na Vercel CDN sa minimalnom latencijom.',
    icon: '🌍',
    category: 'ai',
  },
];

export const NAV_LINKS = [
  { path: '/', label: 'Početna' },
  { path: '/features', label: 'Funkcionalnosti' },
  { path: '/realtime', label: 'Real-time Demo' },
  { path: '/about', label: 'O Nama' },
  { path: '/contact', label: 'Kontakt' },
];
