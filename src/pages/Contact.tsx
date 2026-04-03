import React, { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { OWNER } from '../utils/constants';
import { ContactForm } from '../types';

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm(INITIAL_FORM);
      setSubmitted(false);
    }, 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: 'var(--io-text)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-sans)',
  };

  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero */}
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
              <span className="gradient-text">Kontaktirajte Nas</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Imate pitanje ili ideju? Javite nam se!
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* Contact info */}
            <ScrollAnimation>
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Direktan kontakt</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="glass-card" style={{ padding: '20px' }}>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                      AUTOR
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>👤 {OWNER.name}</div>
                  </div>

                  {OWNER.email.map(email => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="glass-card"
                      style={{
                        padding: '20px',
                        display: 'block',
                        textDecoration: 'none',
                        transition: 'transform 0.2s',
                      }}
                      onMouseEnter={e =>
                        ((e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)')
                      }
                      onMouseLeave={e =>
                        ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')
                      }
                    >
                      <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                        EMAIL
                      </div>
                      <div style={{ color: 'var(--io-accent)', fontWeight: 600 }}>✉️ {email}</div>
                    </a>
                  ))}

                  <div className="glass-card" style={{ padding: '20px' }}>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '12px' }}>
                      SOCIJALNE MREŽE
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
                            padding: '8px 14px',
                            background: 'rgba(0,212,255,0.08)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            color: 'var(--io-text)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          {s.icon} {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Form */}
            <ScrollAnimation>
              <div className="glass-card" style={{ padding: '36px' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>Pošaljite poruku</h2>

                {submitted ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '40px 20px',
                    }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                    <h3 style={{ marginBottom: '8px' }}>Poruka primljena!</h3>
                    <p style={{ color: 'var(--io-muted)' }}>
                      Hvala vam! Odgovorićemo što pre.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                        IME I PREZIME
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Vaše ime"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--io-accent)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                        EMAIL
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vasa@email.com"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--io-accent)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                        TEMA
                      </label>
                      <input
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Tema poruke"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--io-accent)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--io-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                        PORUKA
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Vaša poruka..."
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--io-accent)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
                      📨 Pošaljite poruku
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
