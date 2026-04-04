import React, { useState, useRef, useEffect } from 'react';
import { useSocketIO } from '../hooks/useSocketIO';
import { formatTimestamp } from '../utils/helpers';

export default function ChatDemo() {
  const { messages, sendMessage, isConnected } = useSocketIO();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    sendMessage(text);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '480px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>💬</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Live Chat Demo</div>
            <div style={{ color: 'var(--io-muted)', fontSize: '0.75rem' }}>
              Powered by Socket.IO (mock)
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            background: isConnected ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${isConnected ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            borderRadius: '20px',
            fontSize: '0.75rem',
            color: isConnected ? 'var(--io-green)' : '#ef4444',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              background: isConnected ? 'var(--io-green)' : '#ef4444',
              borderRadius: '50%',
              animation: isConnected ? 'blink 2s ease-in-out infinite' : 'none',
            }}
          />
          {isConnected ? 'Povezan' : 'Isključen'}
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: msg.isOwn ? 'row-reverse' : 'row',
              gap: '10px',
              alignItems: 'flex-end',
            }}
          >
            {!msg.isOwn && (
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0,
                  color: '#fff',
                }}
              >
                {msg.user[0]}
              </div>
            )}
            <div style={{ maxWidth: '70%' }}>
              {!msg.isOwn && (
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--io-muted)',
                    marginBottom: '4px',
                    paddingLeft: '4px',
                  }}
                >
                  {msg.user}
                </div>
              )}
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: msg.isOwn ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.isOwn
                    ? 'var(--gradient)'
                    : 'rgba(255, 255, 255, 0.06)',
                  border: msg.isOwn ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.9rem',
                  color: '#fff',
                  lineHeight: 1.5,
                }}
              >
                {msg.message}
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--io-muted)',
                  marginTop: '4px',
                  textAlign: msg.isOwn ? 'right' : 'left',
                  paddingLeft: msg.isOwn ? 0 : '4px',
                  paddingRight: msg.isOwn ? '4px' : 0,
                }}
              >
                {formatTimestamp(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(0, 212, 255, 0.15)',
          display: 'flex',
          gap: '10px',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Napišite poruku... (Enter za slanje)"
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: '10px',
            padding: '10px 14px',
            color: 'var(--io-text)',
            fontSize: '0.9rem',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => (e.target.style.borderColor = 'var(--io-accent)')}
          onBlur={e => (e.target.style.borderColor = 'rgba(0, 212, 255, 0.2)')}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            padding: '10px 18px',
            background: input.trim() ? 'var(--gradient)' : 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '10px',
            color: input.trim() ? '#fff' : 'var(--io-muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: input.trim() ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
