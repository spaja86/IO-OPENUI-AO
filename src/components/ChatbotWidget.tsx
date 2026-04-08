import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
  ts: Date;
}

const KB: [RegExp, string][] = [
  [/video poziv|webrtc/i, 'Da pokrenete video poziv: idite na stranicu Video, kliknite "Pokreni poziv" i odobrite pristup kameri i mikrofonu. Koristimo WebRTC tehnologiju — direktna veza, bez servera.'],
  [/igric[ae]|games/i, 'Dostupne igrice: 🎮 Tic-Tac-Toe (vs AI), 🧠 Tehnološki Kviz, ♟️ Chess (uskoro), 🏓 Pong (uskoro). Idite na stranicu Igrice!'],
  [/webrtc/i, 'WebRTC (Web Real-Time Communication) je otvoreni standard za peer-to-peer audio, video i razmenu podataka direktno između pretraživača — bez potrebe za serverom.'],
  [/chat|poruka/i, 'Za korišćenje chata: idite na Chat stranicu, izaberite kanal (#general, #gaming, #business, #random) i počnite da kucate. Podržani su emoji i reply na poruke.'],
  [/vlasnik|autor|ko je/i, 'Vlasnik platforme je Nikola Spajić 👨‍💻. Email: spajicn@yahoo.com | spajicn@gmail.com. GitHub: spaja86. Facebook/Instagram/TikTok: Spaja86.'],
  [/platform[ae]|ekosistem/i, 'IO-OPENUI-AO ekosistem ima 4 platforme:\n🌐 IO-OPENUI-AO — saradnja i igrice\n💱 Ai-Iq-Menjačnica — kripto menjačnica\n🏦 Ai-Iq-World-Bank — digitalna banka\n🏢 Kompanija SPAJA — IT hub'],
];

function getReply(text: string): string {
  for (const [pattern, reply] of KB) {
    if (pattern.test(text)) return reply;
  }
  return 'Pitajte me o IO-OPENUI-AO platformi! Mogu da pomognem sa: video pozivima, igricama, chatom, WebRTC ili informacijama o platformi. 🤖';
}

let nextId = 1;

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId++, role: 'bot', text: 'Zdravo! Ja sam IO-AO asistent 🤖. Mogu da pomognem sa pitanjima o platformi!', ts: new Date() },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const { lang } = useLanguage();

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: nextId++, role: 'user', text, ts: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { id: nextId++, role: 'bot', text: getReply(text), ts: new Date() }]);
    }, 1000 + Math.random() * 800);
  };

  const fmt = (d: Date) => d.toLocaleTimeString(lang === 'sr' ? 'sr-RS' : 'en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="AI Chatbot"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          border: 'none',
          color: '#fff',
          fontSize: '1.6rem',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
          zIndex: 7000,
          transition: 'transform 0.2s',
          transform: open ? 'rotate(20deg)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🤖
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            width: 'min(360px, calc(100vw - 32px))',
            height: '480px',
            background: 'rgba(13,13,26,0.97)',
            border: '1px solid rgba(124,58,237,0.4)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 16px 60px rgba(124,58,237,0.3)',
            backdropFilter: 'blur(16px)',
            zIndex: 7000,
            animation: 'fadeInUp 0.3s ease',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 18px',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
              borderBottom: '1px solid rgba(124,58,237,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>🤖</span>
            <div>
              <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>IO-AO Asistent</p>
              <p style={{ color: '#10b981', fontSize: '0.72rem', margin: 0 }}>● Online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
                      : 'rgba(255,255,255,0.07)',
                    color: '#f1f5f9',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </div>
                <span style={{ color: '#475569', fontSize: '0.7rem', marginTop: '3px' }}>{fmt(msg.ts)}</span>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 14px', background: 'rgba(255,255,255,0.07)', borderRadius: '16px 16px 16px 4px', width: 'fit-content' }}>
                {[0, 1, 2].map(i => (
                  <span key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7c3aed', display: 'block', animation: 'typingDot 1.2s infinite', animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Pitajte nešto..."
              style={{
                flex: 1,
                padding: '9px 13px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: '10px',
                color: '#f1f5f9',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            />
            <button
              onClick={send}
              style={{
                padding: '9px 14px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
