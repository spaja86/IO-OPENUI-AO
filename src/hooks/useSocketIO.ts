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
  const [activeChannel, setActiveChannel] = useState('general');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'Nikola',
      message: 'Zdravo! Kako ste?',
      content: 'Zdravo! Kako ste?',
      timestamp: new Date(),
      isOwn: false,
      type: 'message',
    },
    {
      id: '2',
      user: 'Marko',
      message: 'Odlično! Platforma radi sjajno 🚀',
      content: 'Odlično! Platforma radi sjajno 🚀',
      timestamp: new Date(),
      isOwn: false,
      type: 'message',
    },
    {
      id: '3',
      user: 'Ana',
      message: 'Testiramo Socket.IO integraciju',
      content: 'Testiramo Socket.IO integraciju',
      timestamp: new Date(),
      isOwn: false,
      type: 'message',
    },
  ]);

  const [isConnected] = useState(true);

  const sendMessage = useCallback((text: string, _user?: string) => {
    const myMsg: ChatMessage = {
      id: generateId(),
      user: 'Ti',
      message: text,
      content: text,
      timestamp: new Date(),
      isOwn: true,
      type: 'message',
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
        content: botMessage,
        timestamp: new Date(),
        isOwn: false,
        type: 'message',
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000 + Math.random() * 1500);
  }, []);

  const switchChannel = useCallback((channel: string) => {
    setActiveChannel(channel);
  }, []);

  return { messages, sendMessage, isConnected, activeChannel, switchChannel };
}
