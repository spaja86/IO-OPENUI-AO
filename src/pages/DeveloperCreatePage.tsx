import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import {
  ADVANCED_CONTINUOUS_IMPROVEMENTS,
  DEFINITION_OF_DONE,
  DEFINITION_OF_READY,
  DEVELOPER_CREATE_EPIC_PILLARS,
  DEVELOPER_CREATE_ROADMAP,
  EXTREME_CONTROL_TOWER_LANES,
  EXTREME_PROGRAM_LAYER,
  LOCKED_PROGRAM_GOALS,
  QA_AND_RELEASE_GATES,
  REPOSITORY_DOMAIN_BOUNDARIES,
  THREE_D_VISION_DIMENSION_POLICY,
} from '../data/developerCreate';
import { SPAJAPRO_GOVERNANCE, SPAJAPRO_PHASES } from '../data/spajapro';

const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: '16px',
  background: 'var(--io-card)',
  border: '1px solid rgba(0, 212, 255, 0.16)',
};

export default function DeveloperCreatePage() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '80px 0 60px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(6,182,212,0.14) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <ScrollAnimation>
            <h1 className="section-title">
              Developer &amp; Create <span className="gradient-text">Epic</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '920px' }}>
              Centralni okvir za Product/Platform/Content/Operations sa jasnom podelom
              `/games`, `/spajapro` i `/university` oblasti, quality gate-ovima i enterprise readiness disciplinom.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>1) Epic sa 4 stuba</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {DEVELOPER_CREATE_EPIC_PILLARS.map(pillar => (
              <ScrollAnimation key={pillar.pillar}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '8px' }}>{pillar.pillar}</h3>
                  <p style={{ color: 'var(--io-muted)', marginBottom: '10px', lineHeight: 1.6 }}>{pillar.mission}</p>
                  <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                    {pillar.outcomes.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>2) Granice po repozitorijum oblasti</h2></ScrollAnimation>
          <div style={{ display: 'grid', gap: '12px' }}>
            {REPOSITORY_DOMAIN_BOUNDARIES.map(domain => (
              <ScrollAnimation key={domain.area}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '8px' }}>{domain.area}</h3>
                  <p style={{ color: 'var(--io-muted)', marginBottom: '8px' }}>{domain.scope}</p>
                  <p style={{ color: 'var(--io-text)', fontSize: '0.92rem' }}>
                    <strong>Ownership:</strong> {domain.ownership}
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
                <h2 style={{ marginBottom: '14px' }}>3) Zaključani ciljevi</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {LOCKED_PROGRAM_GOALS.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>4) Centralni roadmap</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {DEVELOPER_CREATE_ROADMAP.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {[DEFINITION_OF_READY, DEFINITION_OF_DONE].map(gate => (
              <ScrollAnimation key={gate.title}>
                <article style={cardStyle}>
                  <h2 style={{ marginBottom: '14px' }}>{gate.title}</h2>
                  <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                    {gate.checklist.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>5) Veza sa SPAJAPRO fazama</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_PHASES.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>6) Veza sa governance pravilima</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {SPAJAPRO_GOVERNANCE.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>7) Extreme Program Layer</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h3 style={{ marginBottom: '10px' }}>Strategic roadmap</h3>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {EXTREME_PROGRAM_LAYER.strategicRoadmap.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h3 style={{ marginBottom: '10px' }}>Delivery governance</h3>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {EXTREME_PROGRAM_LAYER.deliveryGovernance.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h3 style={{ marginBottom: '10px' }}>Risk orchestration</h3>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {EXTREME_PROGRAM_LAYER.riskOrchestration.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
          <div style={{ ...cardStyle, marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '10px' }}>Mandatory weekly review</h3>
            <p style={{ color: 'var(--io-muted)', marginBottom: '10px' }}>
              Obavezni format: {EXTREME_PROGRAM_LAYER.mandatoryWeeklyReview.join(' · ')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {EXTREME_CONTROL_TOWER_LANES.map(item => (
                <div key={item.lane} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,212,255,0.18)', borderRadius: '12px', padding: '12px' }}>
                  <strong>{item.lane}</strong>
                  <div style={{ color: 'var(--io-muted)', fontSize: '0.86rem', marginTop: '4px' }}>Owner: {item.owner}</div>
                  <div style={{ color: 'var(--io-muted)', fontSize: '0.82rem', marginTop: '4px' }}>KPI: {item.kpi}</div>
                  <div style={{ color: 'var(--io-accent)', fontSize: '0.8rem', marginTop: '4px' }}>{item.cadence}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginBottom: '10px' }}>3D Vision Compatibility policy</h3>
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {THREE_D_VISION_DIMENSION_POLICY.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>8) QA i release gate-ovi</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {QA_AND_RELEASE_GATES.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>9) Napredni nivo (više)</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {ADVANCED_CONTINUOUS_IMPROVEMENTS.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
