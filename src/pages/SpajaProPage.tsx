import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import {
  SPAJAPRO_DELIVERABLES,
  SPAJAPRO_GOVERNANCE,
  SPAJAPRO_KPIS,
  SPAJAPRO_LAYERS,
  SPAJAPRO_MODULES,
  SPAJAPRO_NON_FUNCTIONAL_REQUIREMENTS,
  SPAJAPRO_OPERATING_MODEL,
  SPAJAPRO_PHASES,
  SPAJAPRO_RISKS,
} from '../data/spajapro';

const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: '16px',
  background: 'var(--io-card)',
  border: '1px solid rgba(0, 212, 255, 0.16)',
};

export default function SpajaProPage() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '80px 0 60px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(124,58,237,0.12) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <ScrollAnimation>
            <h1 className="section-title">
              SPAJAPRO <span className="gradient-text">Platform Blueprint</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              AI platforma umesto ChatGPT sa modulnom arhitekturom, governance modelom i delivery disciplinom.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '20px' }}>1) Core moduli i granice odgovornosti</h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {SPAJAPRO_MODULES.map(module => (
              <ScrollAnimation key={module.code}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '10px' }}>{module.code}</h3>
                  <p style={{ color: 'var(--io-muted)', lineHeight: 1.6, marginBottom: '8px' }}>{module.role}</p>
                  <p style={{ color: 'var(--io-muted)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--io-text)' }}>Granica:</strong> {module.boundary}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '20px' }}>2) Target operativni model</h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {SPAJAPRO_OPERATING_MODEL.map(flow => (
              <ScrollAnimation key={flow.title}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '8px' }}>{flow.title}</h3>
                  <p style={{ color: 'var(--io-accent)', marginBottom: '10px', fontWeight: 600 }}>{flow.flow}</p>
                  <p style={{ color: 'var(--io-muted)', lineHeight: 1.6 }}>{flow.details}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '20px' }}>3) Arhitektura po slojevima</h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gap: '12px' }}>
            {SPAJAPRO_LAYERS.map(layer => (
              <ScrollAnimation key={layer.name}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '8px' }}>{layer.name}</h3>
                  <p style={{ color: 'var(--io-muted)', marginBottom: '10px' }}>{layer.scope}</p>
                  <p style={{ color: 'var(--io-text)', fontSize: '0.92rem' }}>
                    <strong>Moduli:</strong> {layer.modules.join(', ')}
                  </p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>4) Non-functional zahtevi</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_NON_FUNCTIONAL_REQUIREMENTS.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>5) Plan po fazama</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_PHASES.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>6) Governance i quality kontrola</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_GOVERNANCE.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>7) KPI okvir za uspeh</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_KPIS.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>8) Rizici i mitigacija</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_RISKS.map(item => (
                    <li key={item.risk}>
                      <strong style={{ color: 'var(--io-text)' }}>{item.risk}:</strong> {item.mitigation}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '16px' }}>9) Finalni deliverables</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_DELIVERABLES.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
