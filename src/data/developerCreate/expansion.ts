import type {
  CapabilityRegistryItem,
  ChangeImpactItem,
  ExtremeControlTowerLane,
  LockedMetric,
  ScenarioMode,
} from './types';

export const LOCKED_METRICS: LockedMetric[] = [
  { metric: 'Readiness Index', target: '0–100 po domenu i capability nivou', whyItMatters: 'Daje jedinstvenu sliku napretka.' },
  { metric: 'Gate pass rate', target: 'Stabilan green signal pre release-a', whyItMatters: 'Pokazuje disciplinu isporuke.' },
  { metric: 'Regression stability', target: 'Bez blokera kroz ključne tokove', whyItMatters: 'Čuva kvalitet pri promenama.' },
  { metric: 'Security finding severity trend', target: 'Down ili stable bez critical nalaza', whyItMatters: 'Štiti trust sloj.' },
  { metric: 'Performance stability', target: 'Budžeti ispunjeni po domenu', whyItMatters: 'Čuva korisničko iskustvo i live spremnost.' },
  { metric: 'Compliance completion rate', target: 'Sve obavezne kontrole zatvorene pre live', whyItMatters: 'Smanjuje regulatorni rizik.' },
  { metric: 'Blocker aging', target: 'Blocked/held odluke zatvorene unutar definisanog SLA', whyItMatters: 'Sprečava zastoje i povećava predvidivost delivery-ja.' },
  { metric: 'Time from concept to release', target: 'Merljiv i trendovski optimizovan', whyItMatters: 'Pomaže planiranju delivery-ja.' },
  { metric: 'Rollback readiness score', target: 'Jasan recovery plan za svaki rollout', whyItMatters: 'Smanjuje incident impact.' },
  { metric: 'Documentation completeness', target: 'Template-i kompletni bez rupa', whyItMatters: 'Obezbeđuje audit i transfer znanja.' },
  { metric: 'Ownership clarity score', target: 'Nema nejasnih owner-a na ključnim tokovima', whyItMatters: 'Sprečava blokere i praznine u odgovornosti.' },
];

export const EXTREME_REVIEW_PACK = [
  'Status: capability nivo i readiness signal po domenu.',
  'Trend: up / stable / watch po metrici i po riziku.',
  'Blockers: šta blokira sledeći maturity nivo.',
  'Decisions: promote, hold, rollback ili archive.',
  'Next actions: konkretni sledeći koraci i owner-i.',
];

export const FUTURE_EXPANSION_MODELS = [
  'Repo-wide capability map: šta je planned, pilot, live i enterprise-ready.',
  'Global taxonomy za module, programe i readiness statuse.',
  'Multi-repo sync model za buduće povezane sisteme.',
  'Innovation without production damage lane za agresivno testiranje ideja.',
];

export const ADVANCED_CONTINUOUS_IMPROVEMENTS = [
  'Readiness Index (0–100) po domenu, modulu i capability nivou sa jasnim scoring pravilima.',
  '3D Readiness Score kao podskor gde je 3D/immersive sloj relevantan.',
  'Health Heatmap po domenu: readiness + rizik + trend + ownership signal.',
  'Progressive unlock: idea → prototype → validation → pilot → live → enterprise-ready.',
  'Safe mode fallback na niži capability nivo kada signal padne.',
  'Certification lane za trust, security i domain-specific validaciju.',
  'Risk board po kategorijama: security, performance, compliance, fairness, content integrity.',
  'Weekly readiness review sa trendovima i sledećom executive odlukom.',
  'Experimental lane za mehanike, agente i algoritme bez uticaja na live stabilnost.',
];

export const EXTREME_PROGRAM_LAYER = {
  title: 'Developer & Create EXTREME v2 Control Tower',
  strategicRoadmap: [
    'Extreme Stage 1: Consolidate ownership, taxonomy i KPI baseline.',
    'Extreme Stage 2: Full governance chain (DoR/DoD/QA/Security/Compliance/Release/Rollback).',
    'Extreme Stage 3: Capability unlock model za route/module/program nivoe.',
    'Extreme Stage 4: Continuous risk orchestration i weekly executive review.',
  ],
  deliveryGovernance: [
    'Definition of Ready (hard pre-start gate)',
    'Definition of Done (hard pre-release gate)',
    'QA gate (functional + regression + accessibility + content audit)',
    'Release gate (phased rollout + monitoring + incident owner)',
    'Rollback gate (trigger rules + owner + recovery target)',
  ],
  riskOrchestration: [
    'Security lane: secret scanning + policy enforcement + dependency risk check',
    'Performance lane: FPS/load/memory/latency budget ili ekvivalentni signal po domenu',
    'Compliance lane: age-gating + region lock + KYC/AML + certification readiness',
    'Fairness/content lane: anti-abuse + integrity + audit trail + scope truthfulness',
  ],
  mandatoryWeeklyReview: ['status', 'trend', 'blockers', 'decisions', 'next actions'],
};

export const EXTREME_CONTROL_TOWER_LANES: ExtremeControlTowerLane[] = [
  {
    lane: 'Product Control',
    owner: 'Product owner',
    kpi: 'Readiness Index i acceptance gate pass rate',
    cadence: 'Weekly',
  },
  {
    lane: 'Platform Control',
    owner: 'Platform lead',
    kpi: 'Performance/latency stabilnost + integration readiness',
    cadence: 'Weekly',
  },
  {
    lane: 'Content Control',
    owner: 'Content lead',
    kpi: 'Template completeness + terminology consistency + limitation quality',
    cadence: 'Weekly',
  },
  {
    lane: 'Operations Control',
    owner: 'Ops lead',
    kpi: 'Rollback readiness + incident recovery + audit completeness',
    cadence: 'Weekly',
  },
  {
    lane: 'Trust Control',
    owner: 'Security/compliance lead',
    kpi: 'Critical finding trend + evidence completeness + policy adherence',
    cadence: 'Weekly',
  },
];

export const THREE_D_VISION_DIMENSION_POLICY = [
  '360D/720D nivo mora biti READY pre live kada je immersive sloj deo proizvoda.',
  '1440D minimum PARTIAL uz stabilizacioni plan pre širenja capability nivoa.',
  '2880D i 5760D mogu ostati experimental dok ne prođu performanse, sigurnost i ergonomiju.',
  'Safe mode fallback spušta immersive capability kada signal padne ispod budžeta.',
  'Certification lane potvrđuje vendor/device profil pre enterprise-ready oznake.',
];

export const CAPABILITY_REGISTRY: CapabilityRegistryItem[] = [
  {
    capability: 'Games readiness orchestration',
    owner: 'Games product + QA lead',
    currentLevel: 'pilot',
    unlocks: ['Professional per-title approval', '3D certification rollout', 'Fairness-backed live expansion'],
  },
  {
    capability: 'SPAJAPRO agent execution',
    owner: 'Platform engineering',
    currentLevel: 'active',
    unlocks: ['Enterprise automation', 'Connector policy scaling', 'Audit-driven orchestration'],
  },
  {
    capability: 'University professional bridge',
    owner: 'Learning/content ops',
    currentLevel: 'active',
    unlocks: ['Verified capability proof', 'License activation discipline', 'Region-aware progression'],
  },
  {
    capability: 'Developer & Create master operating system',
    owner: 'Program governance',
    currentLevel: 'active',
    unlocks: ['Repo-wide validation layer', 'Decision memory discipline', 'Multi-repo expansion model'],
  },
];

export const SCENARIO_MODES: ScenarioMode[] = [
  {
    mode: 'Fastest path to pilot',
    bias: 'Smanji scope, ali ne preskači ownership i rollback lane.',
    mustProtect: ['Definition of Ready', 'Minimal evidence pack', 'Rollback path'],
  },
  {
    mode: 'Safest path to live',
    bias: 'Maksimalna verifikacija trust, compliance i release discipline.',
    mustProtect: ['No live without evidence', 'Security/compliance green status', 'Monitoring coverage'],
  },
  {
    mode: 'Enterprise hardening path',
    bias: 'Skaliranje tek nakon stabilnog audit, policy i KPI signala.',
    mustProtect: ['Capability registry', 'Decision memory', 'Policy inheritance consistency'],
  },
];

export const CRITICAL_PATH_MAP = [
  'Canonical vocabulary → quality contracts → evidence matrix → cross-domain scorecards.',
  'Dependency map → change impact checks → release approvals → rollback confidence.',
  'Trust surface map → failure mode board → weekly executive review → enterprise expansion.',
];

export const CHANGE_IMPACT_MAP: ChangeImpactItem[] = [
  {
    changeType: 'Nova ruta ili velika content sekcija',
    affects: ['Terminologiju', 'Ownership map', 'Readiness model', 'Navigation expectations'],
    requiredChecks: ['Standard template', 'Quality contract', 'Canonical vocabulary review'],
  },
  {
    changeType: 'Cross-domain integracija',
    affects: ['Dependency map', 'Trust surface', 'Release discipline', 'Scenario planning'],
    requiredChecks: ['Impact map', 'Evidence matrix', 'Human review escalation'],
  },
  {
    changeType: 'Automation / agent rule change',
    affects: ['Policy inheritance', 'Security posture', 'Audit trail', 'Decision memory'],
    requiredChecks: ['AI governance review', 'Risk board', 'Approval chain validation'],
  },
  {
    changeType: 'CI/deploy/config policy change',
    affects: ['Release discipline', 'Security posture', 'Cross-domain stability', 'Audit evidence'],
    requiredChecks: ['Owner/reviewer/approver confirmation', 'Security/compliance review', 'Change impact + rollback proof'],
  },
];

export const REPO_TRANSFORMATION_ROADMAP = [
  'Q1: Repo language consolidation i policy inheritance adoption.',
  'Q2: Domain scorecards, evidence matrix i impact review discipline.',
  'Q3: Capability registry, decision memory i scenario planning expansion.',
  'Q4: Multi-repo operating model i enterprise-grade executive dashboarding.',
];

export const ENTERPRISE_HARDENING_LANE = [
  'Audit readiness proverava evidencu odluka, release signale i rollback vežbe po domenu.',
  'Policy inheritance consistency proverava da /games, /spajapro i /university koriste ista centralna pravila.',
  'Multi-domain stability prati degradaciju između povezanih ruta pre promotion odluke.',
];

export const INNOVATION_SANDBOX_LANE = [
  'Eksperimenti rade u izolovanom capability prostoru bez direktnog uticaja na live tok.',
  'Svaki sandbox eksperiment mora imati rollback put i failure signal pre širenja.',
  'Promocija iz sandbox-a zahteva evidence paket i owner/reviewer/approver odluku.',
];

export const READINESS_CERTIFICATION_BADGES = [
  { level: 'Prototype', criteria: 'Rizici evidentirani, scope izolovan, bez live uticaja.' },
  { level: 'Validation', criteria: 'Readiness signal dokazan i acceptance kriterijumi prolaze.' },
  { level: 'Pilot', criteria: 'Monitoring + rollback + incident owner potvrđeni.' },
  { level: 'Live', criteria: 'No-live-without-evidence i svi hard gate-ovi green.' },
  { level: 'Enterprise-ready', criteria: 'SLA, audit trag i policy inheritance stabilni kroz cikluse.' },
];

export const CONTINUOUS_IMPROVEMENT_BACKLOG = [
  {
    priority: 'P1',
    item: 'Zatvoriti cross-domain release evidence gap',
    riskImpact: 'Visok rizik / visok uticaj',
    nextAction: 'Dopuniti evidence matrix za sve rute i vezati je za weekly review ulaz.',
  },
  {
    priority: 'P1',
    item: 'Formalizovati capability unlock/demotion pravila',
    riskImpact: 'Visok rizik / visok uticaj',
    nextAction: 'Zaključati promotivna i rollback pravila po maturity nivou.',
  },
  {
    priority: 'P2',
    item: 'Ujednačiti decision SLA discipline',
    riskImpact: 'Srednji rizik / visok uticaj',
    nextAction: 'Primeniti SLA pragove na blocked i held stanja kroz sve domene.',
  },
  {
    priority: 'P2',
    item: 'Pojačati policy drift monitoring',
    riskImpact: 'Srednji rizik / srednji uticaj',
    nextAction: 'Uvesti periodične drift check ulaze u governance review.',
  },
  {
    priority: 'P3',
    item: 'Skalirati readiness certification badge model',
    riskImpact: 'Nizak rizik / srednji uticaj',
    nextAction: 'Mapirati badge kriterijume na dashboard i release review pakete.',
  },
];
