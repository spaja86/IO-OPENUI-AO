import React from 'react';
import { Link } from 'react-router-dom';
import {
  ADVANCED_CONTINUOUS_IMPROVEMENTS,
  AI_AGENT_GOVERNANCE_MODEL,
  BLOCKER_AGING_BOARD,
  CANONICAL_VOCABULARY,
  CAPABILITY_REGISTRY,
  CERTIFICATION_AND_TRUST_FRAMEWORK,
  CHANGE_CLASS_SYSTEM,
  CHANGE_IMPACT_MAP,
  CONTROL_TOWER_API_MODEL,
  CONTROL_TOWER_CHANGELOG,
  CONTROL_TOWER_SCORE_SNAPSHOTS,
  CONTROL_TOWER_DASHBOARD,
  CONTINUOUS_IMPROVEMENT_BACKLOG,
  CONTRIBUTOR_OPERATING_GUIDE,
  CRITICAL_DEPENDENCY_HEATMAP,
  CREATE_WORKFLOW,
  CRITICAL_PATH_MAP,
  DECISION_MEMORY,
  DECISION_SLA_MODEL,
  DEFINITION_OF_DONE,
  DEFINITION_OF_READY,
  DEVELOPER_CREATE_EXTREME_V2,
  DEVELOPER_CREATE_EPIC_PILLARS,
  DEVELOPER_CREATE_NORTH_STAR,
  DEVELOPER_CREATE_ROADMAP,
  DEVELOPER_PERSONAS,
  DELIVERY_LANE_RULES,
  DEPENDENCY_MAP,
  DEMOTION_ENGINE_RULES,
  DOMAIN_READINESS_MATRIX,
  DOMAIN_OPERATING_SIGNALS,
  DOMAIN_RISK_LENSES,
  DOMAIN_SCORECARDS,
  EVIDENCE_MATRIX,
  EXECUTIVE_MATURITY_MAP,
  FUTURE_MODULE_ONBOARDING_LANE,
  FUTURE_MODULE_READINESS_CONTRACT,
  EXTREME_CONTROL_TOWER_LANES,
  EXTREME_PROGRAM_LAYER,
  EXTREME_REVIEW_PACK,
  FAILURE_MODE_BOARD,
  FUTURE_EXPANSION_MODELS,
  GOVERNANCE_POLICY_SECTIONS,
  HUMAN_REVIEW_ESCALATION,
  INCIDENT_AND_ROLLBACK_DISCIPLINE,
  INNOVATION_SANDBOX_LANE,
  KNOWN_GOVERNANCE_DEBT,
  LOCKED_METRICS,
  LOCKED_PROGRAM_GOALS,
  LOCKED_REPOSITORY_HIERARCHY,
  MASTER_CAPABILITY_MAP,
  MINIMUM_PROOF_REQUIREMENTS,
  MULTI_REPO_READINESS_MODEL,
  OPERATING_PHASES,
  OPERATING_EXCEPTIONS,
  OWNERSHIP_MODEL,
  POLICY_DRIFT_MONITOR,
  POLICY_INHERITANCE_MODEL,
  PROGRAM_HIERARCHY,
  QUARTERLY_DOMAIN_TRANSFORMATION_MAP,
  QA_AND_RELEASE_GATES,
  QUALITY_CONTRACTS,
  READINESS_CERTIFICATION_BADGES,
  REPO_COMMAND_CENTER,
  REPO_OPERATING_CHARTER,
  RELEASE_MATURITY_LADDER,
  REPOSITORY_DOMAIN_BOUNDARIES,
  REPOSITORY_GOVERNANCE_RULES,
  REPOSITORY_HEALTH_OVERVIEW,
  REPO_TRANSFORMATION_ROADMAP,
  RISK_BOARD,
  SCENARIO_MODES,
  STRATEGIC_AUDIT_TRAIL_REQUIREMENTS,
  STANDARD_TEMPLATES,
  THREE_D_VISION_DIMENSION_POLICY,
  TRUST_SURFACE_MAP,
  ENTERPRISE_HARDENING_LANE,
} from '../data/developerCreate';
import type { ControlTowerStatus, ControlTowerTrend, DeliveryLane, ReadinessSignal, RiskSeverity } from '../data/developerCreate';
import {
  AnchorNavigation,
  InfoCard,
  MeterRow,
  SectionShell,
  StatTile,
  badgeStyle,
  cardStyle,
  listStyle,
} from '../components/developer-create/ControlTowerUI';

function statusColor(status: ControlTowerStatus | ControlTowerTrend | ReadinessSignal | RiskSeverity | 'held' | 'blocked' | 'validation') {
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
    case 'held':
      return '#f59e0b';
    case 'planned':
    case 'enterprise-ready':
    case 'validation':
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

function statusLabel(status: ControlTowerStatus | ControlTowerTrend | ReadinessSignal | RiskSeverity | 'held' | 'blocked' | 'validation') {
  switch (status) {
    case 'active':
      return '● active';
    case 'pilot':
      return '◐ pilot';
    case 'blocked':
      return '✕ blocked';
    case 'held':
      return '◌ held';
    case 'enterprise-ready':
      return '◆ enterprise-ready';
    case 'live':
      return '▲ live';
    case 'planned':
      return '○ planned';
    case 'validation':
      return '◍ validation';
    case 'up':
      return '↑ up';
    case 'stable':
      return '→ stable';
    case 'watch':
      return '⚠ watch';
    default:
      return status;
  }
}

function deliveryLaneStatus(lane: DeliveryLane): ControlTowerStatus {
  switch (lane) {
    case 'stable':
      return 'active';
    case 'experimental':
      return 'planned';
    default:
      return 'pilot';
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

function domainLabel(route: string) {
  switch (route) {
    case '/games':
      return 'Games Economy';
    case '/spajapro':
      return 'SPAJAPRO';
    case '/university':
      return 'UNEVERZITET';
    case '/developer-create':
      return 'Developer & Create';
    default:
      return route;
  }
}

function decisionStateColor(state: 'approved' | 'held' | 'blocked' | 'archived') {
  switch (state) {
    case 'approved':
      return statusColor('up');
    case 'held':
      return statusColor('stable');
    case 'archived':
      return statusColor('planned');
    default:
      return statusColor('blocked');
  }
}

const SECTION_ITEMS = [
  { id: 'strategy', label: 'Core · Strategy', tone: 'core' as const },
  { id: 'operating-model', label: 'Core · Operating Model', tone: 'core' as const },
  { id: 'governance', label: 'Advanced · Governance', tone: 'advanced' as const },
  { id: 'metrics', label: 'Advanced · Metrics', tone: 'advanced' as const },
  { id: 'risk', label: 'Advanced · Risk', tone: 'advanced' as const },
  { id: 'expansion', label: 'Future · Expansion', tone: 'future' as const },
  { id: 'audit', label: 'Audit · Evidence', tone: 'audit' as const },
];

export default function DeveloperCreatePage() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '96px 0 56px',
          background:
            'radial-gradient(circle at top, rgba(6,182,212,0.24), transparent 48%), linear-gradient(180deg, rgba(6,182,212,0.12) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
              <div style={badgeStyle('#06b6d4')}>🧭 Repo-wide master operating system</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h1 className="section-title" style={{ marginBottom: '18px' }}>
                Developer &amp; Create <span className="gradient-text">Control Tower</span>
              </h1>
              <p className="section-subtitle" style={{ maxWidth: '920px', margin: '0 auto 18px' }}>
                {DEVELOPER_CREATE_NORTH_STAR.mission}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={badgeStyle(statusColor(REPOSITORY_HEALTH_OVERVIEW.status))}>
                  Overall status: {statusLabel(REPOSITORY_HEALTH_OVERVIEW.status)}
                </span>
                <span style={badgeStyle('#14b8a6')}>EXTREME v2</span>
                <span style={badgeStyle('#8b5cf6')}>Single source of truth</span>
                <span style={badgeStyle('#10b981')}>Cross-domain governance</span>
              </div>
            </div>

            <div style={{ ...cardStyle, marginBottom: '18px', border: '1px solid rgba(6,182,212,0.3)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                <StatTile label="Readiness" value={`${REPOSITORY_HEALTH_OVERVIEW.readinessScore}%`} color="#06b6d4" />
                <StatTile label="Trust" value={`${REPOSITORY_HEALTH_OVERVIEW.trustScore}%`} color="#10b981" />
                <StatTile label="Ownership" value={`${REPOSITORY_HEALTH_OVERVIEW.ownershipClarityScore}%`} color="#2563eb" />
                <StatTile label="Release" value={`${REPOSITORY_HEALTH_OVERVIEW.releaseDisciplineScore}%`} color="#f59e0b" />
                <StatTile label="Rollback" value={`${REPOSITORY_HEALTH_OVERVIEW.rollbackConfidenceScore}%`} color="#fb7185" />
              </div>
              <p style={{ color: 'var(--io-text)', lineHeight: 1.7 }}>{REPOSITORY_HEALTH_OVERVIEW.summary}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={cardStyle}>
                <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '12px' }}>Top blockers</div>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {REPOSITORY_HEALTH_OVERVIEW.criticalBlockers.map(item => (
                    <div key={item} style={listStyle('#e2e8f0')}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={cardStyle}>
                <div style={{ ...badgeStyle('#10b981'), marginBottom: '12px' }}>Top decisions</div>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {REPOSITORY_HEALTH_OVERVIEW.topDecisions.map(item => (
                    <div key={item} style={listStyle('#e2e8f0')}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={cardStyle}>
                <div style={{ ...badgeStyle('#8b5cf6'), marginBottom: '12px' }}>North Star</div>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{DEVELOPER_CREATE_NORTH_STAR.title}</h2>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {DEVELOPER_CREATE_NORTH_STAR.why.slice(0, 2).map(item => (
                    <div key={item} style={listStyle('#e2e8f0')}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ ...cardStyle, marginTop: '16px', border: '1px solid rgba(249,115,22,0.35)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <div>
                  <div style={{ ...badgeStyle('#f97316'), marginBottom: '10px' }}>Repo command center</div>
                  <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{REPO_OPERATING_CHARTER.title}</h2>
                  <p style={{ color: 'var(--io-muted)', maxWidth: '860px', lineHeight: 1.7 }}>{REPO_OPERATING_CHARTER.promise}</p>
                </div>
                <div style={{ display: 'grid', gap: '8px', alignContent: 'flex-start' }}>
                  <span style={badgeStyle('#06b6d4')}>4 domain signals</span>
                  <span style={badgeStyle('#ef4444')}>3 aging blockers</span>
                  <span style={badgeStyle('#10b981')}>Unified proof model</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                {REPO_COMMAND_CENTER.map(item => (
                  <article key={item.title} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.status)}55` }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <span style={badgeStyle(statusColor(item.status))}>{statusLabel(item.status)}</span>
                      <span style={badgeStyle('#94a3b8')}>{item.owner}</span>
                    </div>
                    <strong style={{ display: 'block', marginBottom: '6px' }}>{item.title}</strong>
                    <div style={{ marginBottom: '6px' }}>{item.focus}</div>
                    <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}>
                      <strong>What breaks if this slips:</strong> {item.whatBreaksIfSlips}
                    </div>
                    <div style={{ color: 'var(--io-accent)' }}><strong>Next action:</strong> {item.nextAction}</div>
                  </article>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                <div style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '8px' }}>Highest-risk dependencies</strong>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {CRITICAL_DEPENDENCY_HEATMAP.slice(0, 3).map(item => (
                      <div key={`${item.from}-${item.to}`} style={{ ...listStyle('#cbd5e1'), border: `1px solid ${statusColor(item.intensity as RiskSeverity)}55` }}>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                          <strong>
                            {item.from} → {item.to}
                          </strong>
                          <span style={badgeStyle(statusColor(item.intensity as RiskSeverity))}>{item.intensity}</span>
                        </div>
                        <div style={{ color: 'var(--io-muted)' }}>{item.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '8px' }}>Operating principles</strong>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {REPO_OPERATING_CHARTER.operatingPrinciples.slice(0, 3).map(item => (
                      <div key={item} style={listStyle('#cbd5e1')}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 32px' }}>
        <div className="container">
          <AnchorNavigation items={SECTION_ITEMS} />
        </div>
      </section>

      <SectionShell
        id="strategy"
        tone="core"
        eyebrow="Core layer"
        title="Strategy and canonical language"
        subtitle="Developer & Create sada okuplja North Star, terminologiju i granice domena u jedan repo-level operativni jezik."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Program hierarchy" badge="Strategy → Review loop">
            <div style={{ display: 'grid', gap: '10px' }}>
              {PROGRAM_HIERARCHY.map(layer => (
                <div key={layer.layer} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{layer.layer}</strong>
                  <div style={{ marginBottom: '6px' }}>{layer.summary}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{layer.outputs.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Epic pillars" badge="6 stalnih stubova" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DEVELOPER_CREATE_EPIC_PILLARS.map(pillar => (
                <div key={pillar.pillar} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{pillar.pillar}</strong>
                  <div style={{ marginBottom: '6px' }}>{pillar.mission}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{pillar.outcomes.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Canonical vocabulary" badge="Repo-wide language" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CANONICAL_VOCABULARY.map(item => (
                <div key={item.term} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.term}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.definition}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.usage}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <InfoCard title={DEVELOPER_CREATE_EXTREME_V2.title} badge="Official repo program" badgeColor="#14b8a6">
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Scope</strong>
                <div style={{ color: 'var(--io-muted)' }}>{DEVELOPER_CREATE_EXTREME_V2.scope}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Objectives</strong>
                <div style={{ color: 'var(--io-muted)' }}>{DEVELOPER_CREATE_EXTREME_V2.objectives.join(' · ')}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Responsibility boundaries</strong>
                <div style={{ color: 'var(--io-muted)' }}>{DEVELOPER_CREATE_EXTREME_V2.responsibilityBoundaries.join(' · ')}</div>
              </div>
            </div>
          </InfoCard>
          <InfoCard title="Repository program map" badge="Domain orchestration">
            <div style={{ display: 'grid', gap: '12px' }}>
              {REPOSITORY_DOMAIN_BOUNDARIES.map(domain => (
                <article key={domain.area} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${routeAccent(domain.area)}55` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <div style={badgeStyle(routeAccent(domain.area))}>{domain.area}</div>
                    {domain.area === '/developer-create' ? (
                      <span style={badgeStyle('#06b6d4')}>Central coordinator</span>
                    ) : (
                      <Link to={domain.area} style={{ color: 'var(--io-accent)', fontWeight: 700 }}>
                        Otvori {domainLabel(domain.area)} →
                      </Link>
                    )}
                  </div>
                  <div style={{ marginBottom: '6px' }}><strong>Scope:</strong> {domain.scope}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Ownership:</strong> {domain.ownership}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Readiness focus:</strong> {domain.readinessFocus}</div>
                </article>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Locked program goals" badge="Non-negotiables" badgeColor="#f59e0b">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {LOCKED_PROGRAM_GOALS.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Locked hierarchy framework" badge="Mandatory order" badgeColor="#2563eb">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {LOCKED_REPOSITORY_HIERARCHY.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <InfoCard title="Repo operating charter" badge="Single operating system" badgeColor="#f97316">
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Promise</strong>
                <div style={{ color: 'var(--io-muted)' }}>{REPO_OPERATING_CHARTER.promise}</div>
              </div>
              {REPO_OPERATING_CHARTER.successDefinition.map(item => (
                <div key={item} style={listStyle('#e2e8f0')}>
                  {item}
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Master capability map" badge="Stable vs experimental" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {MASTER_CAPABILITY_MAP.map(item => (
                <div key={item.area} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${routeAccent(item.area === 'future modules' ? '/developer-create' : item.area)}55` }}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.area}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Current:</strong> {item.currentState}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Target:</strong> {item.targetState}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Stable boundary:</strong> {item.stableBoundary}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Experimental scope:</strong> {item.experimentalScope}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Executive maturity map" badge="Planned → Enterprise-ready" badgeColor="#2563eb">
            <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
              {EXECUTIVE_MATURITY_MAP.map(item => (
                <div key={item.stage} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{statusLabel(item.stage)}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.scope}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Exit signal:</strong> {item.exitSignal}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {DELIVERY_LANE_RULES.map(item => (
                <div key={item.lane} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px', textTransform: 'capitalize' }}>{item.lane} lane</strong>
                  <div style={{ marginBottom: '6px' }}>{item.purpose}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Protects: {item.protects.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell
        id="operating-model"
        tone="core"
        eyebrow="Core layer"
        title="Operating model and cross-domain execution"
        subtitle="Jedinstveni operating model povezuje domen scorecards, workflow, ownership i capability unlock logiku."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Repo operating roadmap" badge="6 faza">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {DEVELOPER_CREATE_ROADMAP.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Create workflow" badge="Idea → Review" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CREATE_WORKFLOW.map(item => (
                <div key={item.step} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.step}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.objective}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Hard proof:</strong> {item.hardProof}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Operating phases" badge="Transformation sequence" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {OPERATING_PHASES.map(item => (
                <div key={item.phase} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.phase}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.objective}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.outcomes.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Executive dashboard and domain scorecards" badge="Central unlock view">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
            {CONTROL_TOWER_DASHBOARD.map(item => (
              <article key={item.domain} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${routeAccent(item.domain)}55` }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <div style={badgeStyle(routeAccent(item.domain))}>{item.domain}</div>
                  <div style={badgeStyle(statusColor(item.status))}>{statusLabel(item.status)}</div>
                  <div style={badgeStyle(statusColor(item.trend))}>{item.trend}</div>
                </div>
                <div style={{ marginBottom: '6px' }}><strong>Focus:</strong> {item.focus}</div>
                <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Blocker:</strong> {item.blocker}</div>
                <div style={{ color: 'var(--io-muted)' }}><strong>Next decision:</strong> {item.nextDecision}</div>
              </article>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {DOMAIN_SCORECARDS.map(item => (
              <article key={item.domain} style={{ ...cardStyle, borderColor: `${routeAccent(item.domain)}55` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <div>
                    <div style={{ ...badgeStyle(routeAccent(item.domain)), marginBottom: '8px' }}>{item.domain}</div>
                    <h3 style={{ marginBottom: '6px' }}>{domainLabel(item.domain)}</h3>
                    <p style={{ color: 'var(--io-muted)' }}>{item.role}</p>
                  </div>
                  <div style={{ display: 'grid', gap: '8px', alignContent: 'flex-start' }}>
                    <div style={badgeStyle(statusColor(item.status))}>{statusLabel(item.status)}</div>
                    <div style={badgeStyle(statusColor(item.trend))}>{item.trend}</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
                  <MeterRow label="Readiness" value={item.scores.readiness} color="#06b6d4" />
                  <MeterRow label="Trust" value={item.scores.trust} color="#10b981" />
                  <MeterRow label="Ownership" value={item.scores.ownership} color="#2563eb" />
                  <MeterRow label="Release" value={item.scores.release} color="#f59e0b" />
                  <MeterRow label="Rollback" value={item.scores.rollback} color="#fb7185" />
                </div>
                <div style={{ marginBottom: '8px' }}><strong>Next unlock:</strong> {item.nextUnlock}</div>
                <div style={{ color: 'var(--io-muted)' }}><strong>Dependencies:</strong> {item.dependencies.join(' · ')}</div>
              </article>
            ))}
          </div>
        </InfoCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <InfoCard title="Control tower score snapshots" badge="Per route / phase" badgeColor="#14b8a6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CONTROL_TOWER_SCORE_SNAPSHOTS.map(item => (
                <div key={`${item.route}-${item.phase}`} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.route}</strong>
                  <div style={{ marginBottom: '6px' }}>Phase: {item.phase}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}>
                    Readiness {item.readiness}% · Trust {item.trust}% · Release {item.release}%
                  </div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.signal}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Critical dependency heatmap" badge="Cross-domain pressure" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CRITICAL_DEPENDENCY_HEATMAP.map(item => (
                <div key={`${item.from}-${item.to}`} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.intensity as RiskSeverity)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>
                      {item.from} → {item.to}
                    </strong>
                    <span style={badgeStyle(statusColor(item.intensity as RiskSeverity))}>{item.intensity}</span>
                  </div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.reason}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Readiness matrix" badge="Shared scoring">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DOMAIN_READINESS_MATRIX.map(item => (
                <div key={item.domain} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.domain}</strong>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px' }}>
                    {[
                      ['Product', item.product],
                      ['Tech', item.tech],
                      ['Security', item.security],
                      ['Compliance', item.compliance],
                      ['Operations', item.operations],
                    ].map(([label, value]) => (
                      <div key={`${item.domain}-${label}`} style={{ color: statusColor(value as ReadinessSignal) }}>
                        {label}: {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Ownership map" badge="Owner / Reviewer / Approver" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {OWNERSHIP_MODEL.map(item => (
                <div key={item.lane} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.lane}</strong>
                  <div>Owner: {item.owner}</div>
                  <div>Reviewer: {item.reviewer}</div>
                  <div>Approver: {item.approver}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Escalation: {item.escalation}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Dependency and capability registry" badge="Unlock logic" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
              {DEPENDENCY_MAP.map(item => (
                <div key={item.domain} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.domain}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Depends on:</strong> {item.dependsOn.join(' · ')}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Blocked by:</strong> {item.blockedBy.join(' · ')}</div>
                  <div><strong>Ready for:</strong> {item.readyFor.join(' · ')}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {CAPABILITY_REGISTRY.map(item => (
                <div key={item.capability} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.capability}</strong>
                  <div style={{ marginBottom: '6px' }}>Owner: {item.owner}</div>
                  <div style={{ marginBottom: '6px' }}>Current level: {statusLabel(item.currentLevel)}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}>Target state: {item.targetState}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Unlocks: {item.unlocks.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <InfoCard title="Domain operating signals" badge="Owner + blocker + evidence" badgeColor="#f97316">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DOMAIN_OPERATING_SIGNALS.map(item => (
                <div key={item.domain} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${routeAccent(item.domain)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={badgeStyle(routeAccent(item.domain))}>{item.domain}</span>
                    <span style={badgeStyle(statusColor(deliveryLaneStatus(item.deliveryLane)))}>
                      {item.deliveryLane} lane
                    </span>
                  </div>
                  <div style={{ marginBottom: '6px' }}><strong>Owner:</strong> {item.owner}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Blocker:</strong> {item.blocker}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Next decision:</strong> {item.nextDecision}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Required evidence:</strong> {item.requiredEvidence.join(' · ')}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Inherited policies:</strong> {item.inheritedPolicies.join(' · ')}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Impact signal:</strong> {item.impactSignal}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Escalation:</strong> {item.escalationLane}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Blocker aging board" badge="SLA-aware pressure" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {BLOCKER_AGING_BOARD.map(item => (
                <div key={item.label} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.state)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>{item.label}</strong>
                    <span style={badgeStyle(statusColor(item.state))}>{statusLabel(item.state)}</span>
                    <span style={badgeStyle('#94a3b8')}>{item.age}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>Owner: {item.owner}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}>{item.impact}</div>
                  <div style={{ color: 'var(--io-accent)' }}>Next review: {item.nextReview}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell
        id="governance"
        tone="advanced"
        eyebrow="Advanced layer"
        title="Governance, evidence and contribution rules"
        subtitle="Ovde se zaključavaju hard gates, standard templates, evidence discipline i human escalation pravila za ceo repo."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          {[DEFINITION_OF_READY, DEFINITION_OF_DONE].map(gate => (
            <InfoCard key={gate.title} title={gate.title} badge="Hard gate">
              <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
                {gate.checklist.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          ))}
          <InfoCard title="Release and rollback discipline" badge="Trust-critical" badgeColor="#ef4444">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {QA_AND_RELEASE_GATES.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {INCIDENT_AND_ROLLBACK_DISCIPLINE.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Repository governance rules" badge="Policy lock">
            <div style={{ display: 'grid', gap: '10px' }}>
              {REPOSITORY_GOVERNANCE_RULES.map(item => (
                <div key={item.title} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.title}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.policy}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.enforcement}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Templates and quality contracts" badge="Standardize every change" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '12px', marginBottom: '12px' }}>
              {STANDARD_TEMPLATES.map(item => (
                <div key={item.title} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.title}</strong>
                  <div style={{ color: 'var(--io-muted)' }}>{item.sections.join(' · ')}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {QUALITY_CONTRACTS.map(item => (
                <div key={item.asset} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.asset}</strong>
                  <div style={{ color: 'var(--io-muted)' }}>{item.contract.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Evidence matrix" badge="Approval proof" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {EVIDENCE_MATRIX.map(item => (
                <div key={item.asset} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.asset}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Evidence:</strong> {item.evidence}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Reviewer:</strong> {item.reviewer}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Gate:</strong> {item.approvalGate}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <InfoCard title="Decision SLA model" badge="Blocker closure discipline" badgeColor="#14b8a6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DECISION_SLA_MODEL.map(item => (
                <div key={item.state} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{statusLabel(item.state as 'held' | 'blocked')}</strong>
                  <div style={{ marginBottom: '6px' }}>Close within: {item.closeWithin}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}>Owner: {item.owner}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.escalation}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Policy drift monitor" badge="Deviation tracking" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {POLICY_DRIFT_MONITOR.map(item => (
                <div key={item.area} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.area}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Check:</strong> {item.check}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Reaction:</strong> {item.reaction}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Strategic audit trail requirements" badge="High-impact mandatory proof" badgeColor="#2563eb">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {STRATEGIC_AUDIT_TRAIL_REQUIREMENTS.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Decision memory" badge="Approved / held / blocked">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DECISION_MEMORY.map(item => (
                <div key={item.area} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${decisionStateColor(item.state)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>{item.area}</strong>
                    <span style={badgeStyle(decisionStateColor(item.state))}>{statusLabel(item.state as 'held' | 'blocked')}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>{item.reason}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.nextMove}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Contributor operating guide" badge="Onboarding standard" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CONTRIBUTOR_OPERATING_GUIDE.map(item => (
                <div key={item.step} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.step}</strong>
                  <div style={{ marginBottom: '6px' }}>Owner lane: {item.owner}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.output}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Policy inheritance and human escalation" badge="Guardrails" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
              {POLICY_INHERITANCE_MODEL.map(item => (
                <div key={item.source} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.source}</strong>
                  <div style={{ marginBottom: '6px' }}>Inherits to: {item.inheritsTo.join(' · ')}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.invariant}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {HUMAN_REVIEW_ESCALATION.map(item => (
                <div key={item.trigger} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.trigger}</strong>
                  <div style={{ marginBottom: '6px' }}>Agent limit: {item.agentLimit}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Human action: {item.humanAction}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <InfoCard title="Change class system" badge="Repo-wide review lanes" badgeColor="#f97316">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CHANGE_CLASS_SYSTEM.map(item => (
                <div key={item.changeClass} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px', textTransform: 'capitalize' }}>{item.changeClass}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Minimum proof:</strong> {item.minimumProof.join(' · ')}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Human review:</strong> {item.humanReviewRequired}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Escalation:</strong> {item.escalation}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Minimum proof required" badge="No change without evidence" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
              {MINIMUM_PROOF_REQUIREMENTS.map(item => (
                <div key={item.asset} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.asset}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.minimumProof.join(' · ')}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Failure if missing:</strong> {item.failureIfMissing}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {FUTURE_MODULE_READINESS_CONTRACT.map(item => (
                <div key={item.area} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.area}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Requirements:</strong> {item.requirements.join(' · ')}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Inherits:</strong> {item.inherits.join(' · ')}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Success signal:</strong> {item.successSignal}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell
        id="metrics"
        tone="advanced"
        eyebrow="Advanced layer"
        title="Metrics, KPI system and review readiness"
        subtitle="Postojeće metrike su podignute u jasniji KPI sistem koji povezuje scorecard-e, maturity ladder i weekly review paket."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Locked metrics" badge="Executive KPI board">
            <div style={{ display: 'grid', gap: '10px' }}>
              {LOCKED_METRICS.map(item => (
                <div key={item.metric} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.metric}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Target:</strong> {item.target}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.whyItMatters}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Release maturity ladder" badge="Unlock path" badgeColor="#2563eb">
            <div style={{ display: 'grid', gap: '10px' }}>
              {RELEASE_MATURITY_LADDER.map(stage => (
                <div key={stage.stage} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{stage.stage}</strong>
                  <div style={{ marginBottom: '6px' }}>{stage.goal}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{stage.exitCriteria.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Extreme review pack" badge="Weekly cadence" badgeColor="#8b5cf6">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {EXTREME_REVIEW_PACK.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ display: 'grid', gap: '10px' }}>
              {EXTREME_CONTROL_TOWER_LANES.map(item => (
                <div key={item.lane} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.lane}</strong>
                  <div>Owner: {item.owner}</div>
                  <div>KPI: {item.kpi}</div>
                  <div style={{ color: 'var(--io-accent)' }}>{item.cadence}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <InfoCard title="Developer personas" badge="Delivery roles">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DEVELOPER_PERSONAS.map(item => (
                <div key={item.persona} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.persona}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.mandate}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Must own: {item.mustOwn.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Trust and API operating models" badge="Future dashboard ready" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px', marginBottom: '12px' }}>
              {CERTIFICATION_AND_TRUST_FRAMEWORK.map(item => (
                <div key={item} style={listStyle('#e2e8f0')}>
                  {item}
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {CONTROL_TOWER_API_MODEL.map(item => (
                <div key={item.object} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.object}</strong>
                  <div style={{ marginBottom: '6px' }}>Fields: {item.fields.join(' · ')}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.usage}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Governance and AI execution" badge="Controlled automation" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {AI_AGENT_GOVERNANCE_MODEL.map(item => (
                <div key={item} style={listStyle('#e2e8f0')}>
                  {item}
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell
        id="risk"
        tone="advanced"
        eyebrow="Advanced layer"
        title="Risk, trust surface and failure modes"
        subtitle="Control tower sada ima eksplicitne failure mode, trust surface i escalation prikaze kako bi se readiness rušenje videlo unapred."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Risk board" badge="Severity map">
            <div style={{ display: 'grid', gap: '10px' }}>
              {RISK_BOARD.map(item => (
                <div key={item.category} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.level)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>{item.category}</strong>
                    <span style={badgeStyle(statusColor(item.level))}>{item.level}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>{item.signal}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.mitigation}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Failure mode board" badge="What breaks readiness" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {FAILURE_MODE_BOARD.map(item => (
                <div key={item.mode} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.mode}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Breaks:</strong> {item.breaks}</div>
                  <div style={{ marginBottom: '6px' }}><strong>Early signal:</strong> {item.earlySignal}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Response:</strong> {item.response}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Trust surface map" badge="Promises that must stay true" badgeColor="#10b981">
            <div style={{ display: 'grid', gap: '10px' }}>
              {TRUST_SURFACE_MAP.map(item => (
                <div key={item.surface} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.surface}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Promise:</strong> {item.promise}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Proof:</strong> {item.proof}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
        <InfoCard title="Governance policy sections" badge="Continuous improvement engine">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {GOVERNANCE_POLICY_SECTIONS.map(section => (
              <div key={section.title} style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>{section.title}</strong>
                <div style={{ color: 'var(--io-muted)' }}>{section.items.join(' · ')}</div>
              </div>
            ))}
          </div>
        </InfoCard>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <InfoCard title="Domain risk lenses" badge="Repo + domain tripwires" badgeColor="#f97316">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DOMAIN_RISK_LENSES.map(item => (
                <div key={item.domain} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.severity)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={badgeStyle(routeAccent(item.domain))}>{item.domain}</span>
                    <span style={badgeStyle(statusColor(item.severity))}>{item.severity}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}><strong>Top risk:</strong> {item.topRisk}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Tripwire:</strong> {item.tripwire}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Response:</strong> {item.response}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Capability unlock / demotion engine" badge="Fallback before failure" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {DEMOTION_ENGINE_RULES.map(item => (
                <div key={`${item.from}-${item.to}`} style={listStyle('#e2e8f0')}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={badgeStyle(statusColor(item.from))}>{statusLabel(item.from)}</span>
                    <span style={badgeStyle('#94a3b8')}>→</span>
                    <span style={badgeStyle(statusColor(item.to))}>{statusLabel(item.to)}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}><strong>Trigger:</strong> {item.trigger}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Proof to recover:</strong> {item.proofToRecover}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell
        id="expansion"
        tone="future"
        eyebrow="Future layer"
        title="Extreme layer and future expansion"
        subtitle="Najviši nivo dodaje scenario planning, critical-path mapiranje, change impact pregled i repo transformation roadmap."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title={EXTREME_PROGRAM_LAYER.title} badge="Extreme / max level">
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Strategic roadmap</strong>
                <div style={{ color: 'var(--io-muted)' }}>{EXTREME_PROGRAM_LAYER.strategicRoadmap.join(' · ')}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Delivery governance</strong>
                <div style={{ color: 'var(--io-muted)' }}>{EXTREME_PROGRAM_LAYER.deliveryGovernance.join(' · ')}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Risk orchestration</strong>
                <div style={{ color: 'var(--io-muted)' }}>{EXTREME_PROGRAM_LAYER.riskOrchestration.join(' · ')}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Mandatory weekly review</strong>
                <div style={{ color: 'var(--io-muted)' }}>{EXTREME_PROGRAM_LAYER.mandatoryWeeklyReview.join(' · ')}</div>
              </div>
            </div>
          </InfoCard>
          <InfoCard title="Scenario modes" badge="Planning lenses" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {SCENARIO_MODES.map(item => (
                <div key={item.mode} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.mode}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.bias}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Must protect: {item.mustProtect.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Critical path and future models" badge="Expansion sequence" badgeColor="#10b981">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {CRITICAL_PATH_MAP.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {FUTURE_EXPANSION_MODELS.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <InfoCard title="Change impact map" badge="Validation before scale">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CHANGE_IMPACT_MAP.map(item => (
                <div key={item.changeType} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.changeType}</strong>
                  <div style={{ marginBottom: '6px' }}>Affects: {item.affects.join(' · ')}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Checks: {item.requiredChecks.join(' · ')}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Enterprise hardening and sandbox lanes" badge="Scale without instability" badgeColor="#14b8a6">
            <div style={{ display: 'grid', gap: '12px', marginBottom: '12px' }}>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Enterprise hardening lane</strong>
                <div style={{ color: 'var(--io-muted)' }}>{ENTERPRISE_HARDENING_LANE.join(' · ')}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Innovation sandbox lane</strong>
                <div style={{ color: 'var(--io-muted)' }}>{INNOVATION_SANDBOX_LANE.join(' · ')}</div>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {READINESS_CERTIFICATION_BADGES.map(item => (
                <div key={item.level} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.level} badge</strong>
                  <div style={{ color: 'var(--io-muted)' }}>{item.criteria}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Repo transformation roadmap" badge="Quarterly evolution" badgeColor="#2563eb">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {REPO_TRANSFORMATION_ROADMAP.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px' }}>
              {ADVANCED_CONTINUOUS_IMPROVEMENTS.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="3D vision compatibility" badge="Immersive policy" badgeColor="#f59e0b">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {THREE_D_VISION_DIMENSION_POLICY.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ display: 'grid', gap: '10px' }}>
              {['Consistency layer', 'Future-ready repo scale', 'Safe promotion/demotion engine'].map(item => (
                <div key={item} style={listStyle('#e2e8f0')}>
                  {item}
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Continuous improvement backlog" badge="Prioritized by risk × impact" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CONTINUOUS_IMPROVEMENT_BACKLOG.map(item => (
                <div key={item.item} style={listStyle('#e2e8f0')}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>{item.item}</strong>
                    <span style={badgeStyle(item.priority === 'P1' ? '#ef4444' : item.priority === 'P2' ? '#f59e0b' : '#06b6d4')}>{item.priority}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>{item.riskImpact}</div>
                  <div style={{ color: 'var(--io-muted)' }}>Next action: {item.nextAction}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>
      <SectionShell
        id="audit"
        tone="audit"
        eyebrow="Audit layer"
        title="Audit, compliance and evolution ledger"
        subtitle="Najkritičniji evidence, exceptions, debt i changelog signali sada su izdvojeni kao poseban audit sloj za repo-level odluke."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <InfoCard title="Operating exceptions" badge="Allowed deviations" badgeColor="#f97316">
            <div style={{ display: 'grid', gap: '10px' }}>
              {OPERATING_EXCEPTIONS.map(item => (
                <div key={item.exception} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.exception}</strong>
                  <div style={{ marginBottom: '6px' }}><strong>Scope:</strong> {item.scope}</div>
                  <div style={{ marginBottom: '6px', color: 'var(--io-muted)' }}><strong>Guardrail:</strong> {item.guardrail}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Expires when:</strong> {item.expiresWhen}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Known governance debt" badge="Must burn down" badgeColor="#ef4444">
            <div style={{ display: 'grid', gap: '10px' }}>
              {KNOWN_GOVERNANCE_DEBT.map(item => (
                <div key={item.debt} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusColor(item.severity)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={badgeStyle(statusColor(item.severity))}>{item.severity}</span>
                  </div>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.debt}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.whyItMatters}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Closure signal:</strong> {item.closureSignal}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Control tower changelog" badge="Evolution trail" badgeColor="#2563eb">
            <div style={{ display: 'grid', gap: '10px' }}>
              {CONTROL_TOWER_CHANGELOG.map(item => (
                <div key={item.version} style={listStyle('#e2e8f0')}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <strong>{item.version}</strong>
                    <span style={badgeStyle('#94a3b8')}>{item.date}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>{item.highlights.join(' · ')}</div>
                  <div style={{ color: 'var(--io-muted)' }}>{item.effect}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          <InfoCard title="Future module onboarding lane" badge="Planned growth control" badgeColor="#10b981">
            <ul style={{ color: 'var(--io-muted)', lineHeight: 1.8, paddingLeft: '18px', marginBottom: '12px' }}>
              {FUTURE_MODULE_ONBOARDING_LANE.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ display: 'grid', gap: '10px' }}>
              {MULTI_REPO_READINESS_MODEL.map(item => (
                <div key={item.layer} style={listStyle('#e2e8f0')}>
                  <strong style={{ display: 'block', marginBottom: '6px' }}>{item.layer}</strong>
                  <div style={{ marginBottom: '6px' }}>{item.objective}</div>
                  <div style={{ color: 'var(--io-muted)' }}><strong>Guardrail:</strong> {item.guardrail}</div>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Quarterly domain transformation map" badge="By quarter and domain" badgeColor="#8b5cf6">
            <div style={{ display: 'grid', gap: '10px' }}>
              {QUARTERLY_DOMAIN_TRANSFORMATION_MAP.map(item => (
                <div key={`${item.quarter}-${item.domain}`} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${routeAccent(item.domain)}55` }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={badgeStyle('#94a3b8')}>{item.quarter}</span>
                    <span style={badgeStyle(routeAccent(item.domain))}>{item.domain}</span>
                  </div>
                  <div style={{ marginBottom: '6px' }}>{item.focus}</div>
                  <div style={{ color: 'var(--io-accent)' }}><strong>Exit signal:</strong> {item.exitSignal}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </SectionShell>
    </main>
  );
}
