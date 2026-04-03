import { useState, useCallback } from 'react';
import { ChatMessage } from '../types';
import { generateId } from '../utils/helpers';

const BOT_USERS = ['Nikola', 'Marko', 'Ana'];
const BOT_MESSAGES = [
  'Zdravo! Dobrodošli na IO-OPENUI-AO! 👋',
  'Ova platforma je sjajna za real-time komunikaciju!',
  'Socket.IO omogućava instant razmenu poruka 🚀',
  'WebRTC video pozivi rade savršeno!',
  'Pogledajte i naš demo video poziv 📹',
  'Platforma je dostupna globalno 🌍',
  'TypeScript garantuje kvalitet koda ✅',
];

export function useSocketIO() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'Nikola',
      message: 'Zdravo! Kako ste?',
      timestamp: new Date(),
      isOwn: false,
    },
    {
      id: '2',
      user: 'Marko',
      message: 'Odlično! Platforma radi sjajno 🚀',
      timestamp: new Date(),
      isOwn: false,
    },
    {
      id: '3',
      user: 'Ana',
      message: 'Testiramo Socket.IO integraciju',
      timestamp: new Date(),
      isOwn: false,
    },
  ]);

  const [isConnected] = useState(true);

  const sendMessage = useCallback((text: string) => {
    const myMsg: ChatMessage = {
      id: generateId(),
      user: 'Ti',
      message: text,
      timestamp: new Date(),
      isOwn: true,
    };
    setMessages(prev => [...prev, myMsg]);

    // Simulate a bot response
    setTimeout(() => {
      const botUser = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)];
      const botMessage = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];
      const botMsg: ChatMessage = {
        id: generateId(),
        user: botUser,
        message: botMessage,
        timestamp: new Date(),
        isOwn: false,
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000 + Math.random() * 1500);
  }, []);

  return { messages, sendMessage, isConnected };
}
