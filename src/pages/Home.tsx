import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PlatformLinks from '../components/PlatformLinks';
import ScrollAnimation from '../components/ScrollAnimation';
import { FEATURES } from '../utils/constants';

const STATS = [
  { value: '2', label: 'Real-time modula' },
  { value: 'WebRTC + Socket.IO', label: 'Tehnologije' },
  { value: 'TypeScript', label: 'Tip sigurnost' },
  { value: 'Vercel', label: 'Hosting' },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Stats bar */}
      <ScrollAnimation>
        <section
          style={{
            background: 'var(--io-panel)',
            borderTop: '1px solid rgba(0,212,255,0.1)',
            borderBottom: '1px solid rgba(0,212,255,0.1)',
            padding: '32px 0',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '24px',
                textAlign: 'center',
              }}
            >
              {STATS.map(stat => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      background: 'var(--gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '6px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--io-muted)', fontSize: '0.85rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Features grid */}
      <section style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <ScrollAnimation>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-title">
                Ključne <span className="gradient-text">Funkcionalnosti</span>
              </h2>
              <p className="section-subtitle">
                Sve što vam je potrebno za profesionalnu online saradnju
              </p>
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
                <FeatureCard feature={feature} delay={idx * 100} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Platform links */}
      <PlatformLinks />

      {/* CTA */}
      <ScrollAnimation>
        <section
          style={{
            padding: 'var(--section-padding)',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <div
              className="glass-card"
              style={{
                padding: '60px 40px',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  marginBottom: '16px',
                }}
              >
                Isprobaj{' '}
                <span className="gradient-text">Real-time Demo</span>
              </h2>
              <p
                style={{
                  color: 'var(--io-muted)',
                  fontSize: '1.05rem',
                  maxWidth: '500px',
                  margin: '0 auto 32px',
                }}
              >
                Testiraj live chat i simulirani video poziv direktno u browseru
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/realtime" className="btn-primary">
                  🚀 Pokreni Demo
                </Link>
                <Link to="/features" className="btn-secondary">
                  📋 Sve funkcije
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
