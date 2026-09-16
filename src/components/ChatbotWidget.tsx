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
  [/bank|world bank|ai iq world bank/i, 'AI IQ World Bank je globalni work/licensing/compliance centar ekosistema. Na /bank/ možete videti delatnosti, licence, statuse, regione, dokumentaciju i enterprise programe.'],
  [/licenc|license|licence/i, '"Licence za celu planetu za rad" je premium programski stub ekosistema: platformska licenca za globalni radni identitet, verifikovanu kompetenciju, compliance-ready status i odobrene delatnosti. Nije automatska državna radna dozvola za svaku zemlju.'],
  [/delatnost|sektor|industry|industr/i, 'AI IQ World Bank podržava širok katalog delatnosti: finansije, kripto tokove, poslovne servise, AI operacije, dokumentaciju i sektorske programe za IT, AI, fintech, gaming, consulting i druge industrije.'],
  [/univerzitet|sertifik|spremnost|readiness/i, 'UNEVERZITET vodi korisnika od PAN do DUN nivoa i sada uključuje global work readiness, bank/compliance/licensing module, KYC/AML, AI-finance i education-to-licence putanju.'],
  [/webrtc/i, 'WebRTC (Web Real-Time Communication) je otvoreni standard za peer-to-peer audio, video i razmenu podataka direktno između pretraživača — bez potrebe za serverom.'],
  [/chat|poruka/i, 'Za korišćenje chata: idite na Chat stranicu, izaberite kanal (#general, #gaming, #business, #random) i počnite da kucate. Podržani su emoji i reply na poruke.'],
  [/vlasnik|autor|ko je/i, 'Vlasnik platforme je Nikola Spajić 👨‍💻. Email: spajicn@yahoo.com | spajicn@gmail.com. GitHub: spaja86. Facebook/Instagram/TikTok: Spaja86.'],
  [/platform[ae]|ekosistem/i, 'IO-OPENUI-AO ekosistem ima 4 platforme:\n🌐 IO-OPENUI-AO — saradnja i igrice\n💱 Ai-Iq-Menjačnica — kripto menjačnica\n🏦 Ai-Iq-World-Bank — globalni work/licensing/compliance centar\n🏢 Kompanija SPAJA — IT hub'],
];

function getReply(text: string): string {
  for (const [pattern, reply] of KB) {
    if (pattern.test(text)) return reply;
  }
  return 'Pitajte me o IO-OPENUI-AO platformi! Mogu da pomognem sa: AI IQ World Bank, licencama, UNEVERZITET-om, video pozivima, igricama i platformskim funkcijama. 🤖';
}

let nextId = 1;

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId++, role: 'bot', text: 'Zdravo! Ja sam IO-AO asistent 🤖. Mogu da pomognem sa pitanjima o platformi, AI IQ World Bank licencama i UNEVERZITET sistemu!', ts: new Date() },
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
            <div style={{ fontSize: '1.3rem' }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>IO-AO Asistent</div>
              <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>Online · platforma · bank · licence</div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 12px',
                    borderRadius: '14px',
                    background: msg.role === 'user' ? 'linear-gradient(135deg, #7c3aed, #2563eb)' : 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {msg.text}
                </div>
                <span style={{ color: '#94a3b8', fontSize: '0.7rem', marginTop: '4px' }}>{fmt(msg.ts)}</span>
              </div>
            ))}
            {typing && <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Asistent kuca…</div>}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Pitaj o banki, licencama, univerzitetu..."
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '10px 12px',
                color: '#fff',
                outline: 'none',
              }}
            />
            <button
              onClick={send}
              style={{
                border: 'none',
                borderRadius: '12px',
                padding: '0 14px',
                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Pošalji
            </button>
          </div>
        </div>
      )}
    </>
  );
}
