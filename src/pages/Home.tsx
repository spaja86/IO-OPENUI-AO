import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PlatformLinks from '../components/PlatformLinks';
import ScrollAnimation from '../components/ScrollAnimation';
import { FEATURES } from '../utils/constants';

const STATS = [
  { value: '4', label: 'Ekosistem modula' },
  { value: '10', label: 'Tipova licenci u bank sloju' },
  { value: '18', label: 'Ciljanih industrijskih vertikala' },
  { value: '24/7', label: 'Globalni pristup' },
];

export default function Home() {
  return (
    <main>
      <Hero />

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

      <section style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <ScrollAnimation>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-title">
                Ključne <span className="gradient-text">Funkcionalnosti</span>
              </h2>
              <p className="section-subtitle">
                Ekosistem spaja komunikaciju, edukaciju, finansije, licence i profesionalni rad.
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

      <ScrollAnimation>
        <section style={{ padding: '0 0 var(--section-padding)' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              <a href="/bank/" className="glass-card" style={{ padding: '28px', display: 'block', textDecoration: 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏦</div>
                <h3 style={{ color: 'var(--io-text)', marginBottom: '10px' }}>AI IQ World Bank</h3>
                <p style={{ color: 'var(--io-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                  Globalni work/licensing/compliance centar za delatnosti, dokumente, statuse, regione i enterprise aktivaciju.
                </p>
                <span style={{ color: 'var(--io-accent)', fontWeight: 700 }}>Otvori /bank/ →</span>
              </a>
              <Link to="/university" className="glass-card" style={{ padding: '28px', display: 'block', textDecoration: 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎓</div>
                <h3 style={{ color: 'var(--io-text)', marginBottom: '10px' }}>UNEVERZITET</h3>
                <p style={{ color: 'var(--io-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                  PAN → DUN putanja, global work readiness, licencni moduli i education-to-licence most za profesionalni režim.
                </p>
                <span style={{ color: 'var(--io-accent)', fontWeight: 700 }}>Otvori /university →</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <PlatformLinks />

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
                Aktiviraj <span className="gradient-text">globalni pristup</span>
              </h2>
              <p
                style={{
                  color: 'var(--io-muted)',
                  fontSize: '1.05rem',
                  maxWidth: '720px',
                  margin: '0 auto 32px',
                  lineHeight: 1.7,
                }}
              >
                Istraži AI IQ World Bank licence, proveri UNEVERZITET readiness putanju i zatim testiraj real-time i games module u istom ekosistemu.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/bank/" className="btn-primary">
                  🏦 Licence i compliance
                </a>
                <Link to="/university" className="btn-secondary">
                  🎓 Akademski put
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
