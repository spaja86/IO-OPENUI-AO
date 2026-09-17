import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import {
  ADVANCED_CONTINUOUS_IMPROVEMENTS,
  AI_AGENT_GOVERNANCE_MODEL,
  CERTIFICATION_AND_TRUST_FRAMEWORK,
  CONTROL_TOWER_DASHBOARD,
  CREATE_WORKFLOW,
  DEFINITION_OF_DONE,
  DEFINITION_OF_READY,
  DEVELOPER_CREATE_EPIC_PILLARS,
  DEVELOPER_CREATE_NORTH_STAR,
  DEVELOPER_CREATE_ROADMAP,
  DEPENDENCY_MAP,
  DOMAIN_READINESS_MATRIX,
  EXTREME_CONTROL_TOWER_LANES,
  EXTREME_PROGRAM_LAYER,
  EXTREME_REVIEW_PACK,
  FUTURE_EXPANSION_MODELS,
  GOVERNANCE_POLICY_SECTIONS,
  INCIDENT_AND_ROLLBACK_DISCIPLINE,
  INNOVATION_SANDBOX,
  LOCKED_METRICS,
  LOCKED_PROGRAM_GOALS,
  OPERATING_PHASES,
  OWNERSHIP_MODEL,
  PROGRAM_HIERARCHY,
  QA_AND_RELEASE_GATES,
  QUALITY_CONTRACTS,
  RELEASE_MATURITY_LADDER,
  REPOSITORY_DOMAIN_BOUNDARIES,
  RISK_BOARD,
  STANDARD_TEMPLATES,
  THREE_D_VISION_DIMENSION_POLICY,
  DEVELOPER_PERSONAS,
} from '../data/developerCreate';

const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: '18px',
  background: 'rgba(18, 35, 64, 0.7)',
  border: '1px solid rgba(0, 212, 255, 0.16)',
  backdropFilter: 'blur(16px)',
};

function badgeStyle(color: string): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '999px',
    background: `${color}20`,
    border: `1px solid ${color}4d`,
    color,
    fontSize: '0.78rem',
    fontWeight: 700,
  };
}

function listStyle(color: string): React.CSSProperties {
  return {
    padding: '10px 14px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    color,
  };
}

function statusColor(status: string) {
  switch (status) {
    case 'ready':
    case 'active':
    case 'live':
    case 'up':
      return '#10b981';
    case 'pilot':
    case 'partial':
    case 'stable':
    case 'medium':
      return '#f59e0b';
    case 'planned':
    case 'enterprise-ready':
      return '#2563eb';
    case 'high':
    case 'watch':
      return '#fb7185';
    case 'critical':
    case 'blocked':
      return '#ef4444';
    case 'low':
      return '#06b6d4';
    default:
      return '#94a3b8';
  }
}

function routeAccent(route: string) {
  switch (route) {
    case '/games':
      return '#f59e0b';
    case '/spajapro':
      return '#7c3aed';
    case '/university':
      return '#2563eb';
    case '/developer-create':
      return '#06b6d4';
    default:
      return '#94a3b8';
  }
}

export default function DeveloperCreatePage() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '96px 0 72px',
          background:
            'radial-gradient(circle at top, rgba(6,182,212,0.2), transparent 46%), linear-gradient(180deg, rgba(6,182,212,0.12) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '1020px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ ...badgeStyle('#06b6d4'), margin: '0 auto 18px' }}>🧭 Repo control tower · standards · gates · metrics</div>
            <h1 className="section-title" style={{ marginBottom: '18px' }}>
              Developer &amp; Create <span className="gradient-text">Control Tower</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '920px', margin: '0 auto' }}>
              {DEVELOPER_CREATE_NORTH_STAR.mission}
            </p>
            <div
              style={{
                ...cardStyle,
                marginTop: '28px',
                border: '1px solid rgba(6,182,212,0.3)',
                background: 'rgba(6,182,212,0.08)',
                textAlign: 'left',
              }}
            >
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '12px' }}>🎯 North Star</div>
              <h2 style={{ marginBottom: '10px', fontSize: '1.45rem' }}>{DEVELOPER_CREATE_NORTH_STAR.title}</h2>
              <p style={{ color: 'var(--io-text)', marginBottom: '18px' }}>{DEVELOPER_CREATE_NORTH_STAR.why[0]}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                <div>
                  <h3 style={{ marginBottom: '10px' }}>Zašto postoji</h3>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {DEVELOPER_CREATE_NORTH_STAR.why.map(item => (
                      <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ marginBottom: '10px' }}>Šta meri</h3>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {DEVELOPER_CREATE_NORTH_STAR.measures.map(item => (
                      <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '20px' }}>1) Strategy → Standards → Gates → Metrics → Domain execution → Review loop</h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {PROGRAM_HIERARCHY.map(layer => (
              <ScrollAnimation key={layer.layer}>
                <article style={cardStyle}>
                  <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '12px' }}>{layer.layer}</div>
                  <p style={{ color: 'var(--io-muted)', lineHeight: 1.6, marginBottom: '12px' }}>{layer.summary}</p>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {layer.outputs.map(item => (
                      <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                    ))}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>2) Epic sa 6 stalnih stubova</h2></ScrollAnimation>
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
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>3) Repository Program Map i domain orchestration</h2></ScrollAnimation>
          <div style={{ display: 'grid', gap: '16px' }}>
            {REPOSITORY_DOMAIN_BOUNDARIES.map(domain => (
              <ScrollAnimation key={domain.area}>
                <article style={{ ...cardStyle, borderColor: `${routeAccent(domain.area)}55` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <div>
                      <div style={{ ...badgeStyle(routeAccent(domain.area)), marginBottom: '10px' }}>{domain.area}</div>
                      <h3>{domain.scope}</h3>
                    </div>
                    {domain.area === '/developer-create' ? (
                      <span style={{ ...badgeStyle('#06b6d4'), alignSelf: 'flex-start' }}>Central coordinator</span>
                    ) : (
                      <Link
                        to={domain.area}
                        style={{
                          alignSelf: 'flex-start',
                          color: 'var(--io-accent)',
                          textDecoration: 'none',
                          fontWeight: 700,
                        }}
                      >
                        Otvori domenski modul →
                      </Link>
                    )}
                  </div>
                  <p style={{ color: 'var(--io-text)', marginBottom: '8px' }}><strong>Ownership:</strong> {domain.ownership}</p>
                  <p style={{ color: 'var(--io-muted)', lineHeight: 1.6 }}>{domain.readinessFocus}</p>
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
                <h2 style={{ marginBottom: '14px' }}>4) Zaključani ciljevi</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {LOCKED_PROGRAM_GOALS.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>5) Operativni roadmap</h2>
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
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>6) Control Tower dashboard</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {CONTROL_TOWER_DASHBOARD.map(item => (
              <ScrollAnimation key={item.domain}>
                <article style={{ ...cardStyle, borderColor: `${routeAccent(item.domain)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <div style={badgeStyle(routeAccent(item.domain))}>{item.domain}</div>
                    <div style={badgeStyle(statusColor(item.status))}>{item.status}</div>
                    <div style={badgeStyle(statusColor(item.trend))}>{item.trend}</div>
                  </div>
                  <p style={{ color: 'var(--io-text)', marginBottom: '10px' }}><strong>Focus:</strong> {item.focus}</p>
                  <p style={{ color: 'var(--io-muted)', marginBottom: '10px' }}><strong>Blocker:</strong> {item.blocker}</p>
                  <p style={{ color: 'var(--io-muted)' }}><strong>Next decision:</strong> {item.nextDecision}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>7) Readiness matrix po domenima</h2></ScrollAnimation>
          <div style={{ display: 'grid', gap: '16px' }}>
            {DOMAIN_READINESS_MATRIX.map(item => (
              <ScrollAnimation key={item.domain}>
                <article style={cardStyle}>
                  <div style={{ ...badgeStyle(routeAccent(item.domain)), marginBottom: '14px' }}>{item.domain}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                    {[
                      ['Product', item.product],
                      ['Tech', item.tech],
                      ['Security', item.security],
                      ['Compliance', item.compliance],
                      ['Operations', item.operations],
                    ].map(([label, value]) => (
                      <div key={`${item.domain}-${label}`} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(String(value))}55` }}>
                        <strong style={{ display: 'block', marginBottom: '4px' }}>{label}</strong>
                        <span style={{ color: statusColor(String(value)), fontWeight: 700 }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>8) Ownership map</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {OWNERSHIP_MODEL.map(item => (
                    <div key={item.lane} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.lane}</strong>
                      <div>Owner: {item.owner}</div>
                      <div>Reviewer: {item.reviewer}</div>
                      <div>Approver: {item.approver}</div>
                      <div>Escalation: {item.escalation}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>9) Dependency map</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {DEPENDENCY_MAP.map(item => (
                    <div key={item.domain} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.domain}</strong>
                      <div style={{ marginBottom: '6px' }}><strong>Depends on:</strong> {item.dependsOn.join(' · ')}</div>
                      <div style={{ marginBottom: '6px' }}><strong>Blocked by:</strong> {item.blockedBy.join(' · ')}</div>
                      <div><strong>Ready for:</strong> {item.readyFor.join(' · ')}</div>
                    </div>
                  ))}
                </div>
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
                <h2 style={{ marginBottom: '14px' }}>10) QA, security, compliance, release i rollback</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {QA_AND_RELEASE_GATES.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>11) Incident &amp; rollback discipline</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {INCIDENT_AND_ROLLBACK_DISCIPLINE.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>12) Release maturity ladder</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {RELEASE_MATURITY_LADDER.map(stage => (
              <ScrollAnimation key={stage.stage}>
                <article style={cardStyle}>
                  <div style={{ ...badgeStyle('#2563eb'), marginBottom: '12px' }}>{stage.stage}</div>
                  <p style={{ color: 'var(--io-text)', marginBottom: '10px' }}>{stage.goal}</p>
                  <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                    {stage.exitCriteria.map(item => <li key={item}>{item}</li>)}
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
                <h2 style={{ marginBottom: '14px' }}>13) Certification and trust framework</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {CERTIFICATION_AND_TRUST_FRAMEWORK.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>14) AI agent governance model</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {AI_AGENT_GOVERNANCE_MODEL.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>15) Innovation sandbox</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {INNOVATION_SANDBOX.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>16) Developer personas</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {DEVELOPER_PERSONAS.map(item => (
                    <div key={item.persona} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.persona}</strong>
                      <p style={{ marginBottom: '8px' }}>{item.mandate}</p>
                      <div><strong>Must own:</strong> {item.mustOwn.join(' · ')}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>17) Create workflow</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {CREATE_WORKFLOW.map(item => (
                    <div key={item.step} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.step}</strong>
                      <div style={{ marginBottom: '6px' }}>{item.objective}</div>
                      <div><strong>Hard proof:</strong> {item.hardProof}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>18) Quality contract</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {QUALITY_CONTRACTS.map(item => (
                    <div key={item.asset} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.asset}</strong>
                      <ul style={{ lineHeight: 1.8, paddingLeft: '18px' }}>
                        {item.contract.map(point => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>19) Standard templates</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {STANDARD_TEMPLATES.map(item => (
                    <div key={item.title} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.title}</strong>
                      <div>{item.sections.join(' · ')}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>20) Governance, integration i continuous improvement</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {GOVERNANCE_POLICY_SECTIONS.map(section => (
              <ScrollAnimation key={section.title}>
                <article style={cardStyle}>
                  <h3 style={{ marginBottom: '10px' }}>{section.title}</h3>
                  <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                    {section.items.map(item => <li key={item}>{item}</li>)}
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
                <h2 style={{ marginBottom: '14px' }}>21) Zaključane metrike</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {LOCKED_METRICS.map(item => (
                    <div key={item.metric} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.metric}</strong>
                      <div style={{ marginBottom: '6px' }}><strong>Target:</strong> {item.target}</div>
                      <div><strong>Zašto:</strong> {item.whyItMatters}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>22) Operativne faze</h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {OPERATING_PHASES.map(item => (
                    <div key={item.phase} style={listStyle('#e2e8f0')}>
                      <strong style={{ display: 'block', marginBottom: '8px' }}>{item.phase}</strong>
                      <div style={{ marginBottom: '6px' }}>{item.objective}</div>
                      <div>{item.outcomes.join(' · ')}</div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>23) Extreme review pack</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {EXTREME_REVIEW_PACK.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
            <ScrollAnimation>
              <article style={cardStyle}>
                <h2 style={{ marginBottom: '14px' }}>24) Future expansion</h2>
                <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                  {FUTURE_EXPANSION_MODELS.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>25) Risk board</h2></ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {RISK_BOARD.map(item => (
              <ScrollAnimation key={item.category}>
                <article style={{ ...cardStyle, borderColor: `${statusColor(item.level)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <div style={badgeStyle('#06b6d4')}>{item.category}</div>
                    <div style={badgeStyle(statusColor(item.level))}>{item.level}</div>
                  </div>
                  <p style={{ color: 'var(--io-text)', marginBottom: '10px' }}><strong>Signal:</strong> {item.signal}</p>
                  <p style={{ color: 'var(--io-muted)' }}><strong>Mitigation:</strong> {item.mitigation}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <ScrollAnimation><h2 style={{ marginBottom: '20px' }}>26) Extreme Program Layer</h2></ScrollAnimation>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={cardStyle}>
              <h3 style={{ marginBottom: '10px' }}>3D Vision Compatibility policy</h3>
              <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                {THREE_D_VISION_DIMENSION_POLICY.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div style={cardStyle}>
              <h3 style={{ marginBottom: '10px' }}>Napredni nivo</h3>
              <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                {ADVANCED_CONTINUOUS_IMPROVEMENTS.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
