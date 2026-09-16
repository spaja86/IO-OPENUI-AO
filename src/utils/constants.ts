import { Platform, Feature } from '../types';

export const PLATFORMS: Platform[] = [
  {
    id: 'kompanija-spaja',
    name: 'Kompanija SPAJA',
    description: 'Matična IT kompanija i delivery hub za AI, finansijske, licencne i compliance proizvode celog ekosistema.',
    url: 'https://github.com/spaja86/Kompanija-SPAJA',
    github: 'https://github.com/spaja86/Kompanija-SPAJA',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '🏢',
    status: 'active' as const,
  },
  {
    id: 'world-bank',
    name: 'Ai-Iq-World-Bank',
    description: 'Globalni work, licensing, finance i compliance centar za identitet, sertifikaciju, dokumentaciju i profesionalnu aktivaciju.',
    url: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    github: 'https://github.com/spaja86/Ai-Iq-World-Bank',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI'],
    icon: '🏦',
    status: 'active' as const,
  },
  {
    id: 'menjacnica',
    name: 'Ai-Iq-Menjačnica',
    description: 'Svetska kripto menjačnica povezana sa settlement, remittance i treasury tokovima AI IQ World Bank sistema.',
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
    description: 'Instant messaging sa Socket.IO — ultra-brzi chat u realnom vremenu sa podrškom za sobe, timsku koordinaciju i poslovnu komunikaciju.',
    icon: '💬',
    category: 'realtime',
  },
  {
    id: 'collaboration',
    title: 'Profesionalna Saradnja',
    description: 'Alati za timsku saradnju, task tokove, dokumentaciju i prelaz iz edukacije u verified profesionalni rad.',
    icon: '🤝',
    category: 'collaboration',
  },
  {
    id: 'gaming',
    title: 'Games Economy',
    description: 'Fun/Test mini-igre i profesionalni skill-based mod povezani sa trajnim licencama, START kreditima i payout pravilima.',
    icon: '🎮',
    category: 'collaboration',
  },
  {
    id: 'world-bank-licensing',
    title: 'AI IQ World Bank',
    description: 'Globalni work/licensing/compliance sloj za finansije, licence, identitet, sertifikaciju, dokumente i profesionalnu aktivaciju.',
    icon: '🏦',
    category: 'ai',
  },
  {
    id: 'university',
    title: 'UNEVERZITET',
    description: 'Akademski sistem sa 6 jedinica, global work readiness smerovima i mostom ka licenciranom profesionalnom režimu.',
    icon: '🎓',
    category: 'collaboration',
  },
  {
    id: 'security',
    title: 'Sigurna Komunikacija',
    description: 'End-to-end enkripcija, HTTPS protokol, audit trag i napredne sigurnosne politike za zaštitu privatnosti i poslovnog rada.',
    icon: '🔒',
    category: 'security',
  },
  {
    id: 'global',
    title: 'Globalni Pristup',
    description: 'Platforma dostupna 24/7 iz celog sveta sa regionalnim readiness pravilima, compliance granicama i enterprise pristupom.',
    icon: '🌍',
    category: 'ai',
  },
];

export const NAV_LINKS = [
  { path: '/', label: 'Početna' },
  { path: '/features', label: 'Funkcionalnosti' },
  { path: '/realtime', label: 'Real-time Demo' },
  { path: '/games', label: 'Games Economy' },
  { path: '/spajapro', label: 'SPAJAPRO' },
  { path: '/university', label: 'Univerzitet' },
  { path: '/about', label: 'O Nama' },
  { path: '/contact', label: 'Kontakt' },
];
