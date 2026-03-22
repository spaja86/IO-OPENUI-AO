import { PLATFORMS, OWNER_INFO } from '../constants';
import PlatformCard from '../components/ui/PlatformCard';
import Badge from '../components/ui/Badge';

const TECH_STACK = [
  { name: 'React 18', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
  { name: 'Vite', icon: '⚡', color: '#646cff' },
  { name: 'WebRTC', icon: '📡', color: '#f59e0b' },
  { name: 'Socket.IO', icon: '🔌', color: '#10b981' },
  { name: 'React Router', icon: '🛣️', color: '#ca8a04' },
];

export default function AboutPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            O Platformi
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            IO-OPENUI-AO je platforma sledeće generacije za profesionalnu saradnju,
            kombinujući WebRTC video komunikaciju, real-time chat i interaktivne igrice
            u jednom elegantnom interfejsu.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {/* About platform */}
          <section>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.6rem', marginBottom: '24px' }}>
              🏗️ Arhitektura Platforme
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {[
                {
                  icon: '📡',
                  title: 'WebRTC Sloj',
                  desc: 'Peer-to-peer video i audio komunikacija pomocu WebRTC protokola. DTLS/SRTP enkripcija garantuje privatnost. STUN/TURN serveri za NAT traversal.',
                  color: '#7c3aed',
                },
                {
                  icon: '💬',
                  title: 'Socket.IO Sloj',
                  desc: 'Bidirekciona komunikacija u realnom vremenu za chat, notifikacije i statusne izmene. Podrska za sobe, kanale i privatne poruke.',
                  color: '#06b6d4',
                },
                {
                  icon: '⚛️',
                  title: 'React Frontend',
                  desc: 'Moderni React 18 sa TypeScript-om, React Router za SPA navigaciju i custom hooks za poslovnu logiku. Glassmorphism dizajn.',
                  color: '#10b981',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px',
                    background: `${c.color}0d`,
                    border: `1px solid ${c.color}33`,
                    borderRadius: '16px',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{c.icon}</div>
                  <h3 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech stack */}
          <section>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.6rem', marginBottom: '24px' }}>
              🛠️ Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {TECH_STACK.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    background: `${t.color}11`,
                    border: `1px solid ${t.color}33`,
                    borderRadius: '12px',
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{t.icon}</span>
                  <span style={{ color: t.color, fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Owner */}
          <section>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.6rem', marginBottom: '24px' }}>
              👤 O Vlasniku
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                padding: '32px',
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  flexShrink: 0,
                }}
              >
                NS
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.3rem', marginBottom: '8px' }}>
                  Nikola Spajic
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
                  Vlasnik i osnivač platforme IO-OPENUI-AO. Razvija profesionalne digitalne
                  platforme za saradnju i poslovanje — od kripto menjacnice do AI-powered alata.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                  {OWNER_INFO.emails.map(e => (
                    <a key={e} href={`mailto:${e}`} style={{ color: '#7c3aed', fontSize: '0.875rem', textDecoration: 'none' }}>
                      ✉ {e}
                    </a>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    { label: 'Facebook', href: OWNER_INFO.social.facebook, color: '#1877f2' },
                    { label: 'Instagram', href: OWNER_INFO.social.instagram, color: '#e4405f' },
                    { label: 'TikTok', href: OWNER_INFO.social.tiktok, color: '#69c9d0' },
                    { label: 'YouTube', href: OWNER_INFO.social.youtube, color: '#ff0000' },
                    { label: 'GitHub', href: OWNER_INFO.social.github, color: '#64748b' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge color={s.color}>{s.label}</Badge>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.6rem', marginBottom: '24px' }}>
              🗺️ Roadmap
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { q: 'Q1 2026', title: 'WebRTC & Chat', desc: 'Implementacija WebRTC video poziva i Socket.IO chat sistema sa kanalima', done: true },
                { q: 'Q2 2026', title: 'Games & Gamification', desc: 'Tic-Tac-Toe, kviz sistem i osnova za multiplayer igre', done: true },
                { q: 'Q3 2026', title: 'AI Features', desc: 'AI asistent, smart matchmaking i content personalizacija', done: false },
                { q: 'Q4 2026', title: 'Enterprise Scale', desc: 'B2B integracije, enterprise analytics i white-label resenja', done: false },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    paddingBottom: i < 3 ? '32px' : '0',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '40px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: item.done ? 'linear-gradient(135deg, #7c3aed, #06b6d4)' : 'rgba(255,255,255,0.08)',
                        border: item.done ? 'none' : '2px solid rgba(255,255,255,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '1rem',
                      }}
                    >
                      {item.done ? '✓' : '○'}
                    </div>
                    {i < 3 && (
                      <div style={{ width: '2px', flex: 1, marginTop: '8px', background: item.done ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)' }} />
                    )}
                  </div>
                  <div style={{ flex: 1, paddingTop: '8px' }}>
                    <span style={{ color: '#7c3aed', fontSize: '0.8rem', fontWeight: 700 }}>{item.q}</span>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 600, marginTop: '4px', marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ecosystem */}
          <section>
            <h2 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.6rem', marginBottom: '24px' }}>
              🌐 Ekosistem Platformi
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {PLATFORMS.map(p => (
                <PlatformCard key={p.id} platform={p} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
