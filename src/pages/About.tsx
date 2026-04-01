import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { OWNER } from '../utils/constants';

export default function About() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 0 60px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(124,58,237,0.06) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <ScrollAnimation>
            <h1 className="section-title">
              O <span className="gradient-text">Platformi</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              IO-OPENUI-AO — platforma za profesionalnu saradnju i komunikaciju
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* About content */}
      <section style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            <ScrollAnimation>
              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Šta je <span className="gradient-text">IO-OPENUI-AO</span>?
                </h2>
                <p style={{ color: 'var(--io-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
                  IO-OPENUI-AO je moderna web platforma izgrađena na Vite + React + TypeScript stack-u.
                  Platforma pruža real-time komunikacione alate putem WebRTC i Socket.IO tehnologija.
                </p>
                <p style={{ color: 'var(--io-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Deo je ekosistema <strong style={{ color: 'var(--io-text)' }}>Kompanija SPAJA</strong> —
                  IT kompanije koja razvija profesionalne digitalne platforme.
                </p>
                <p style={{ color: 'var(--io-muted)', lineHeight: 1.8 }}>
                  Platforma je deployovana na Vercel CDN i dostupna globalno 24/7.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ marginBottom: '24px', fontSize: '1.2rem' }}>
                  👤 Autor
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>
                      IME I PREZIME
                    </div>
                    <div style={{ fontWeight: 600 }}>{OWNER.name}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>
                      EMAIL
                    </div>
                    {OWNER.email.map(email => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        style={{ display: 'block', color: 'var(--io-accent)', fontSize: '0.9rem' }}
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                  <div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '8px' }}>
                      SOCIJALNE MREŽE
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {[
                        { href: OWNER.social.facebook, label: '📘 Facebook' },
                        { href: OWNER.social.instagram, label: '📸 Instagram' },
                        { href: OWNER.social.tiktok, label: '🎵 TikTok' },
                        { href: OWNER.social.youtube, label: '▶️ YouTube' },
                      ].map(s => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '6px 12px',
                            background: 'rgba(0,212,255,0.08)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            color: 'var(--io-text)',
                          }}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission */}
      <ScrollAnimation>
        <section
          style={{
            padding: 'var(--section-padding)',
            background: 'var(--io-panel)',
            borderTop: '1px solid rgba(0,212,255,0.1)',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  icon: '🎯',
                  title: 'Misija',
                  text: 'Omogućiti profesionalnu online saradnju putem najmodernijih web tehnologija.',
                },
                {
                  icon: '🔭',
                  title: 'Vizija',
                  text: 'Izgraditi globalni ekosistem povezanih platformi koje sarađuju i razmenjuju vrednost.',
                },
                {
                  icon: '💡',
                  title: 'Vrednosti',
                  text: 'Inovacija, transparentnost, kvalitet i posvećenost korisnicima.',
                },
              ].map(item => (
                <div key={item.title} className="glass-card" style={{ padding: '28px' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--io-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
