import React from 'react';
import { Link } from 'react-router-dom';
import { OWNER, PLATFORMS } from '../utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--io-panel)',
        borderTop: '1px solid rgba(0, 212, 255, 0.15)',
        padding: '60px 0 30px',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🌐</span>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                IO-OPENUI-AO
              </span>
            </div>
            <p style={{ color: 'var(--io-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Platforma za profesionalnu saradnju, real-time komunikaciju i napredne
              web tehnologije.
            </p>
            <div
              style={{
                marginTop: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                color: 'var(--io-green)',
              }}
            >
              🟢 Deployed on Vercel
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ marginBottom: '16px', color: 'var(--io-text)' }}>Navigacija</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { to: '/', label: 'Početna' },
                { to: '/features', label: 'Funkcionalnosti' },
                { to: '/realtime', label: 'Real-time Demo' },
                { to: '/about', label: 'O Nama' },
                { to: '/contact', label: 'Kontakt' },
              ].map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    style={{ color: 'var(--io-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--io-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--io-muted)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 style={{ marginBottom: '16px', color: 'var(--io-text)' }}>
              Ekosistem Kompanija SPAJA
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {PLATFORMS.map(p => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--io-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--io-accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--io-muted)')}
                  >
                    {p.icon} {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '16px', color: 'var(--io-text)' }}>Kontakt</h4>
            <p style={{ color: 'var(--io-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
              👤 {OWNER.name}
            </p>
            {OWNER.email.map(email => (
              <a
                key={email}
                href={`mailto:${email}`}
                style={{ display: 'block', color: 'var(--io-muted)', fontSize: '0.85rem', marginBottom: '6px' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--io-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--io-muted)')}
              >
                ✉️ {email}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[
                { href: OWNER.social.facebook, icon: '📘', label: 'Facebook' },
                { href: OWNER.social.instagram, icon: '📸', label: 'Instagram' },
                { href: OWNER.social.tiktok, icon: '🎵', label: 'TikTok' },
                { href: OWNER.social.youtube, icon: '▶️', label: 'YouTube' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 212, 255, 0.2)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--io-accent)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 212, 255, 0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: 'var(--io-muted)', fontSize: '0.85rem' }}>
            © {year} {OWNER.name} · Deo ekosistema Kompanija SPAJA
          </p>
          <p style={{ color: 'var(--io-muted)', fontSize: '0.8rem' }}>
            Vite + React + TypeScript · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
