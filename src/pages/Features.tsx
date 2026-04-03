import React from 'react';
import FeatureCard from '../components/FeatureCard';
import ScrollAnimation from '../components/ScrollAnimation';
import { FEATURES } from '../utils/constants';

const CATEGORIES = [
  { id: 'realtime', label: '📡 Real-time', desc: 'WebRTC i Socket.IO tehnologije' },
  { id: 'collaboration', label: '🤝 Saradnja', desc: 'Timski alati i gaming' },
  { id: 'security', label: '🔒 Sigurnost', desc: 'Enkripcija i zaštita' },
  { id: 'ai', label: '🌍 Globalni', desc: 'Pristup svuda' },
] as const;

export default function Features() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header */}
      <section
        style={{
          padding: '80px 0 60px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(0,212,255,0.04) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <ScrollAnimation>
            <h1 className="section-title">
              <span className="gradient-text">Sve Funkcionalnosti</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Kompletna lista mogućnosti IO-OPENUI-AO platforme
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Category overview */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container">
          <ScrollAnimation>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '60px',
              }}
            >
              {CATEGORIES.map(cat => (
                <div
                  key={cat.id}
                  className="glass-card"
                  style={{ padding: '24px', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{cat.label}</div>
                  <div style={{ color: 'var(--io-muted)', fontSize: '0.85rem' }}>{cat.desc}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {FEATURES.map((feature, idx) => (
              <ScrollAnimation key={feature.id}>
                <FeatureCard feature={feature} delay={idx * 80} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <ScrollAnimation>
        <section
          style={{
            padding: 'var(--section-padding)',
            background: 'var(--io-panel)',
            borderTop: '1px solid rgba(0,212,255,0.1)',
          }}
        >
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
              Tehnološki <span className="gradient-text">Stack</span>
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {[
                { name: 'React 18', icon: '⚛️', color: '#61dafb' },
                { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
                { name: 'Vite', icon: '⚡', color: '#646cff' },
                { name: 'WebRTC', icon: '📡', color: '#00d4ff' },
                { name: 'Socket.IO', icon: '🔌', color: '#010101' },
                { name: 'React Router', icon: '🧭', color: '#ca4245' },
                { name: 'Vercel', icon: '▲', color: '#fff' },
                { name: 'CSS Variables', icon: '🎨', color: '#ff6b6b' },
              ].map(tech => (
                <div
                  key={tech.name}
                  className="glass-card"
                  style={{
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{tech.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
