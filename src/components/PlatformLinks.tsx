import React from 'react';
import { PLATFORMS } from '../utils/constants';

export default function PlatformLinks() {
  return (
    <section style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="section-title">
            Deo ekosistema{' '}
            <span className="gradient-text">Kompanija SPAJA</span>
          </h2>
          <p className="section-subtitle">
            IO-OPENUI-AO sarađuje sa svim platformama unutar ekosistema
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {PLATFORMS.map((platform, idx) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '28px',
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animationDelay: `${idx * 100}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{platform.icon}</div>
              <h3 style={{ color: 'var(--io-text)', fontSize: '1.05rem', marginBottom: '8px' }}>
                {platform.name}
              </h3>
              <p style={{ color: 'var(--io-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {platform.description}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                {platform.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '3px 8px',
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                      borderRadius: '20px',
                      color: 'var(--io-accent)',
                      fontSize: '0.72rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--io-accent)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                🔗 Posetite repozitorijum →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
