import { useState, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { MOCK_MESSAGES } from '../constants';

export function useSocketIO() {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);
  const [activeChannel, setActiveChannel] = useState('general');
  const [isConnected] = useState(true);

  const sendMessage = useCallback((content: string, user = 'Ti') => {
    if (!content.trim()) return;
    const msg: ChatMessage = {
      id: Date.now().toString(),
      user,
      content,
      timestamp: new Date(),
      channel: activeChannel,
      type: 'message',
    };
    setMessages(prev => [...prev, msg]);

    // Simulate a reply after a short delay
    setTimeout(() => {
      const replies = [
        'Odlicno! 👍',
        'Razumem te 😊',
        'Interesantno!',
        'Hajde da nastavimo razgovor 🚀',
        'Dobar predlog!',
      ];
      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        user: 'Gost',
        content: replies[Math.floor(Math.random() * replies.length)],
        timestamp: new Date(),
        channel: activeChannel,
        type: 'message',
      };
      setMessages(prev => [...prev, reply]);
    }, 1200);
  }, [activeChannel]);

  const switchChannel = useCallback((channel: string) => {
    setActiveChannel(channel);
    const sysMsg: ChatMessage = {
      id: Date.now().toString(),
      user: 'Sistem',
      content: `Prešli ste na kanal #${channel}`,
      timestamp: new Date(),
      channel,
      type: 'system',
    };
    setMessages(prev => [...prev.filter(m => m.channel === channel), sysMsg]);
  }, []);

  return {
    messages: messages.filter(m => m.channel === activeChannel),
    activeChannel,
    isConnected,
    sendMessage,
    switchChannel,
  };
}
