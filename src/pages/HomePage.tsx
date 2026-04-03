import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PLATFORMS, FEATURES } from '../constants';
import PlatformCard from '../components/ui/PlatformCard';
import FeatureCard from '../components/ui/FeatureCard';

const TYPING_WORDS = ['Saradnja.', 'Igrice.', 'Real-time.'];

const STATS = [
  { icon: '⚡', label: 'WebRTC', desc: 'Peer-to-peer video' },
  { icon: '💬', label: 'Socket.IO', desc: 'Real-time chat' },
  { icon: '🎮', label: 'Igrice', desc: 'Online gaming' },
  { icon: '🤝', label: 'Saradnja', desc: 'Timski rad' },
];

export default function HomePage() {
  const [typingIdx, setTypingIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIdx(i => (i + 1) % TYPING_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated nodes background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                borderRadius: '50%',
                border: `1px solid rgba(124,58,237,${0.1 + i * 0.03})`,
                top: `${10 + i * 12}%`,
                left: `${5 + i * 15}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div style={{ maxWidth: '800px', position: 'relative' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '20px',
              fontSize: '0.875rem',
              color: '#7c3aed',
              marginBottom: '24px',
              fontWeight: 600,
            }}
          >
            🚀 v2.0 — React 18 + WebRTC + Socket.IO
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {TYPING_WORDS[typingIdx]}
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              marginBottom: '40px',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
          >
            Platforma za profesionalnu saradnju uz WebRTC video pozive,
            Socket.IO chat i igrice. Sve na jednom mestu.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/chat"
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              💬 Počni Chat
            </Link>
            <Link
              to="/video"
              style={{
                padding: '14px 28px',
                background: 'rgba(6,182,212,0.15)',
                border: '1px solid rgba(6,182,212,0.4)',
                borderRadius: '10px',
                color: '#06b6d4',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              📹 Video Poziv
            </Link>
            <Link
              to="/games"
              style={{
                padding: '14px 28px',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '10px',
                color: '#10b981',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              🎮 Igrice
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 0', background: 'rgba(26,26,46,0.5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '28px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Sve što ti treba
          </h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '48px', fontSize: '1.05rem' }}>
            Profesionalne alate za saradnju, komunikaciju i zabavu
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.id} feature={f} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section style={{ padding: '80px 0', background: 'rgba(26,26,46,0.4)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            🌐 Ekosistem Platformi
          </h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '48px', fontSize: '1.05rem' }}>
            Sve platforme sarađuju međusobno — tvoj digitalni ekosistem
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {PLATFORMS.filter(p => p.id !== 'io-openui-ao').map(p => (
              <PlatformCard key={p.id} platform={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Spreman si da počneš?
        </h2>
        <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '1.05rem' }}>
          Pridruži se platformi i iskusi sledeći nivo saradnje
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/chat"
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              borderRadius: '10px',
              color: '#fff',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Počni odmah →
          </Link>
          <Link
            to="/about"
            style={{
              padding: '14px 32px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              color: '#f1f5f9',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Saznaj više
          </Link>
        </div>
      </section>
    </div>
  );
}
