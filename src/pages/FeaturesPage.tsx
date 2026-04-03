import { FEATURES } from '../constants';
import FeatureCard from '../components/ui/FeatureCard';

export default function FeaturesPage() {
  return (
    <div style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
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
            Sve Funkcionalnosti
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Platforma pruza sve sto ti treba za profesionalnu saradnju, komunikaciju i zabavu
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i * 80} />
          ))}
        </div>

        {/* Roadmap */}
        <div style={{ marginTop: '80px' }}>
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '40px',
              color: '#f1f5f9',
            }}
          >
            🗺️ Roadmap
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { period: 'Q1 2026', title: 'WebRTC & Chat', items: ['WebRTC video pozivi', 'Socket.IO chat', 'Kanali i sobe', 'Mobile responsive'], color: '#10b981', done: true },
              { period: 'Q2 2026', title: 'Igrice & Gamifikacija', items: ['Tic-Tac-Toe', 'Quiz sistem', 'Chess (u razvoju)', 'Multiplayer Pong'], color: '#7c3aed', done: true },
              { period: 'Q3 2026', title: 'AI Features', items: ['AI chat asistent', 'Smart matchmaking', 'Content moderation', 'Personalizacija'], color: '#06b6d4', done: false },
              { period: 'Q4 2026', title: 'Enterprise', items: ['B2B integracije', 'Advanced analytics', 'White-label opcija', 'SLA garantije'], color: '#f59e0b', done: false },
            ].map((phase, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${phase.color}33`,
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: phase.color, fontWeight: 700, fontSize: '0.875rem' }}>{phase.period}</span>
                  {phase.done && <span style={{ background: `${phase.color}22`, color: phase.color, fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>✓ Dostupno</span>}
                </div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '12px' }}>{phase.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{ color: '#94a3b8', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: phase.color, fontSize: '0.75rem' }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
