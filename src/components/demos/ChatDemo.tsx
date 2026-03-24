import React, { useState, useRef, useEffect } from 'react';
import { useSocketIO } from '../../hooks/useSocketIO';

const CHANNELS = ['general', 'gaming', 'business', 'random'];
const UNREAD: Record<string, number> = { gaming: 3, business: 1, random: 7 };
const ONLINE_USERS = ['Nikola 🟢', 'Ana 🟢', 'Marko 🟢', 'Guest 🟡'];

const EMOJI_LIST = ['😀','😂','🥹','😍','🤔','👍','👏','🚀','🔥','💡','🎉','❤️','✅','⚠️','🌐','💬','🎮','🤖','♟️','🏓'];

export default function ChatDemo() {
  const { messages, activeChannel, isConnected, sendMessage, switchChannel } = useSocketIO();
  const [input, setInput] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (text) {
      sendMessage(replyTo ? `↩ ${replyTo}\n${text}` : text, 'Ti');
      setInput('');
      setReplyTo(null);
      setShowEmoji(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape') setReplyTo(null);
  };

  const formatTime = (d: Date) =>
    new Intl.DateTimeFormat('sr', { hour: '2-digit', minute: '2-digit' }).format(d);

  const avatarColors: Record<string, string> = {
    Nikola: '#7c3aed',
    Gost: '#06b6d4',
    Ana: '#10b981',
    Ti: '#f59e0b',
    Sistem: '#64748b',
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '540px',
        background: 'rgba(13,13,26,0.95)',
        border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '200px',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 0',
          background: 'rgba(10,10,20,0.8)',
          flexShrink: 0,
        }}
      >
        <div style={{ padding: '0 16px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isConnected ? '#10b981' : '#ef4444',
            }}
          />
          <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
            {isConnected ? 'Povezan' : 'Nije povezan'}
          </span>
        </div>
        <div style={{ padding: '0 12px', marginBottom: '8px' }}>
          <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Kanali
          </p>
        </div>
        {CHANNELS.map(ch => (
          <button
            key={ch}
            onClick={() => switchChannel(ch)}
            style={{
              width: '100%',
              padding: '8px 16px',
              background: activeChannel === ch ? 'rgba(124,58,237,0.2)' : 'transparent',
              border: 'none',
              color: activeChannel === ch ? '#7c3aed' : '#64748b',
              fontSize: '0.9rem',
              cursor: 'pointer',
              textAlign: 'left',
              borderLeft: activeChannel === ch ? '3px solid #7c3aed' : '3px solid transparent',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span># {ch}</span>
            {UNREAD[ch] && activeChannel !== ch && (
              <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.65rem', fontWeight: 700, borderRadius: '10px', padding: '1px 6px', minWidth: '18px', textAlign: 'center' }}>
                {UNREAD[ch]}
              </span>
            )}
          </button>
        ))}

        <div style={{ padding: '0 12px', marginTop: '16px', marginBottom: '6px' }}>
          <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Online ({ONLINE_USERS.length})
          </p>
        </div>
        {ONLINE_USERS.map(u => (
          <div key={u} style={{ padding: '4px 16px', fontSize: '0.8rem', color: '#94a3b8' }}>{u}</div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Header */}
        <div
          style={{
            padding: '12px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#94a3b8', fontWeight: 600 }}># {activeChannel}</span>
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>— Socket.IO Demo</span>
          <button
            onClick={() => setSoundOn(s => !s)}
            title={soundOn ? 'Isključi zvuk' : 'Uključi zvuk'}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: soundOn ? '#94a3b8' : '#475569' }}
          >
            {soundOn ? '🔔' : '🔕'}
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                opacity: msg.type === 'system' ? 0.6 : 1,
              }}
            >
              {msg.type === 'system' ? (
                <div style={{ width: '100%', textAlign: 'center', color: '#64748b', fontSize: '0.8rem', fontStyle: 'italic' }}>
                  — {msg.content} —
                </div>
              ) : (
                <>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: avatarColors[msg.user] || '#7c3aed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {msg.user[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: avatarColors[msg.user] || '#7c3aed' }}>
                        {msg.user}
                      </span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{formatTime(msg.timestamp)}</span>
                      <button
                        onClick={() => setReplyTo(msg.content.length > 40 ? msg.content.slice(0, 40) + '…' : msg.content)}
                        style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#475569', cursor: 'pointer', fontSize: '0.72rem', padding: '2px 6px', borderRadius: '6px' }}
                        title="Odgovori"
                      >
                        ↩ Odgovori
                      </button>
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{msg.content}</p>
                  </div>
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Reply indicator */}
        {replyTo && (
          <div style={{ padding: '6px 20px', background: 'rgba(124,58,237,0.1)', borderTop: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#7c3aed', fontSize: '0.8rem' }}>↩ Odgovaraš na: <em style={{ color: '#94a3b8' }}>{replyTo}</em></span>
            <button onClick={() => setReplyTo(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}>×</button>
          </div>
        )}

        {/* Emoji picker */}
        {showEmoji && (
          <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', gap: '6px', background: 'rgba(10,10,20,0.8)' }}>
            {EMOJI_LIST.map(e => (
              <button key={e} onClick={() => setInput(i => i + e)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '2px', borderRadius: '4px' }}>{e}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setShowEmoji(s => !s)}
            style={{
              padding: '7px 10px',
              background: showEmoji ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '1rem',
              flexShrink: 0,
            }}
            title="Emoji"
          >
            😊
          </button>
          <button
            style={{
              padding: '7px 10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '1rem',
              flexShrink: 0,
            }}
            title="Priloži fajl (UI only)"
          >
            📎
          </button>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Poruka u #${activeChannel}...`}
            style={{
              flex: 1,
              padding: '10px 14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '8px',
              color: '#f1f5f9',
              fontSize: '0.9rem',
              outline: 'none',
              minWidth: 0,
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              flexShrink: 0,
            }}
          >
            Pošalji
          </button>
        </div>
      </div>
    </div>
  );
}
