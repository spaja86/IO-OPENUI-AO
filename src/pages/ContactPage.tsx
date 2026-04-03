import React, { useState } from 'react';
import { OWNER_INFO } from '../constants';

const TOPICS = ['Opšte informacije', 'Tehnička podrška', 'Poslovna saradnja', 'Prijavite grešku', 'Predlog funkcionalnosti', 'Ostalo'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(124,58,237,0.3)',
    borderRadius: '10px',
    color: '#f1f5f9',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Kontaktirajte nas
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Imate pitanje, predlog ili problem? Pišite nam!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: '40px',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#10b981', fontWeight: 700, fontSize: '1.2rem', marginBottom: '8px' }}>
                  Poruka poslata!
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                  Hvala na poruci. Odgovorićemo vam u najkraćem mogućem roku.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: TOPICS[0], message: '' }); }}
                  style={{
                    padding: '10px 24px',
                    background: 'rgba(16,185,129,0.2)',
                    border: '1px solid rgba(16,185,129,0.4)',
                    borderRadius: '8px',
                    color: '#10b981',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Nova poruka
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>
                    Ime i prezime *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Vaše ime"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>
                    Email adresa *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vas@email.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>
                    Tema upita
                  </label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    {TOPICS.map(t => (
                      <option key={t} value={t} style={{ background: '#1a1a2e' }}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>
                    Poruka *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Opišite šta vas zanima..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '14px',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    border: 'none',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  📨 Pošalji poruku
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                padding: '28px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}
            >
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '16px', fontSize: '1.1rem' }}>
                📬 Kontakt informacije
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Vlasnik</p>
                  <p style={{ color: '#f1f5f9', fontWeight: 600 }}>Nikola Spajic</p>
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Email adrese</p>
                  {OWNER_INFO.emails.map(e => (
                    <a key={e} href={`mailto:${e}`} style={{ display: 'block', color: '#7c3aed', fontSize: '0.9rem', textDecoration: 'none', marginBottom: '4px' }}>
                      ✉ {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '28px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}
            >
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '16px', fontSize: '1.1rem' }}>
                🌐 Socijalne mreže
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Facebook', handle: '/Spaja86', href: OWNER_INFO.social.facebook, color: '#1877f2' },
                  { label: 'Instagram', handle: '@spaja.1986', href: OWNER_INFO.social.instagram, color: '#e4405f' },
                  { label: 'TikTok', handle: '@spaja.1986', href: OWNER_INFO.social.tiktok, color: '#69c9d0' },
                  { label: 'YouTube', handle: '@spajanikopenevolution', href: OWNER_INFO.social.youtube, color: '#ff0000' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      background: `${s.color}11`,
                      border: `1px solid ${s.color}33`,
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: s.color, fontSize: '0.85rem', width: '72px' }}>{s.label}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
