import React from 'react';
import ChatDemo from '../components/ChatDemo';
import VideoCallDemo from '../components/VideoCallDemo';
import ScrollAnimation from '../components/ScrollAnimation';

export default function Realtime() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 0 60px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <ScrollAnimation>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: '20px',
                color: 'var(--io-accent)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--io-green)',
                  borderRadius: '50%',
                  animation: 'blink 2s ease-in-out infinite',
                }}
              />
              Mock Demo Mode
            </div>

            <h1 className="section-title">
              <span className="gradient-text">Real-time Demo</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Isprobajte live chat i video poziv demo — sve radi lokalno bez servera
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Demos */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}
          >
            <ScrollAnimation>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                💬 Socket.IO Chat
                <span
                  style={{
                    padding: '3px 10px',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: '20px',
                    color: 'var(--io-green)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Mock
                </span>
              </h2>
              <ChatDemo />
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                📹 WebRTC Video
                <span
                  style={{
                    padding: '3px 10px',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    borderRadius: '20px',
                    color: '#a78bfa',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Simulacija
                </span>
              </h2>
              <VideoCallDemo />
            </ScrollAnimation>
          </div>

          {/* Info box */}
          <ScrollAnimation>
            <div
              className="glass-card"
              style={{
                padding: '28px 32px',
                marginTop: '40px',
                background: 'rgba(0,212,255,0.03)',
              }}
            >
              <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                ℹ️ O Demo modu
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '20px',
                  color: 'var(--io-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                <div>
                  <strong style={{ color: 'var(--io-text)' }}>💬 Chat demo</strong> koristi lokalni
                  React state za simulaciju Socket.IO poruka. Bot odgovori dolaze sa randomnim kašnjenjem
                  od 1-2.5 sekundi.
                </div>
                <div>
                  <strong style={{ color: 'var(--io-text)' }}>📹 Video demo</strong> simulira WebRTC
                  korisničko sučelje. Pravi WebRTC server se nalazi u{' '}
                  <code style={{ color: 'var(--io-accent)', fontSize: '0.85rem' }}>
                    put-a-realtime-webrtc/
                  </code>{' '}
                  folderu.
                </div>
                <div>
                  <strong style={{ color: 'var(--io-text)' }}>🔌 Socket.IO server</strong> se nalazi u{' '}
                  <code style={{ color: 'var(--io-accent)', fontSize: '0.85rem' }}>
                    put-b-chat-socketio/
                  </code>{' '}
                  i može se pokrenuti lokalno.
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
