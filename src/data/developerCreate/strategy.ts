import type {
  CanonicalVocabularyItem,
  DeveloperCreateNorthStar,
  DeveloperCreatePillar,
  ProgramHierarchyLayer,
  RepositoryDomainBoundary,
} from './types';

export const DEVELOPER_CREATE_NORTH_STAR: DeveloperCreateNorthStar = {
  title: 'Developer & Create Control Tower',
  mission:
    'Jedinstveni upravljački sloj koji definiše kako se u repozitorijumu planira, gradi, proverava, pušta i unapređuje svaki proizvodni domen.',
  why: [
    'Da /games, /spajapro i /university koriste isti governance jezik.',
    'Da svaki novi modul ima merljiv readiness pre nego što ide u pilot/live.',
    'Da sigurnost, compliance i rollback spremnost budu deo početka, ne završnog popravnog koraka.',
  ],
  measures: [
    'Readiness Index po domenu i ruti.',
    'Gate pass rate za build, QA, security, compliance i release.',
    'Trend blokera, odluka i rollback spremnosti na weekly review nivou.',
  ],
};

export const PROGRAM_HIERARCHY: ProgramHierarchyLayer[] = [
  {
    layer: 'Strategy',
    summary: 'Zaključava viziju, scope, ownership i ciljne capability nivoe.',
    outputs: ['North Star', 'Master mission', 'Repo capability map'],
  },
  {
    layer: 'Standards',
    summary: 'Definiše obavezne template-e, quality contract i single source of truth pravila.',
    outputs: ['Content model', 'Quality contract', 'Standard templates'],
  },
  {
    layer: 'Gates',
    summary: 'Uvodi tvrde pre-start, pre-release i post-release provere.',
    outputs: ['DoR', 'DoD', 'QA/Security/Compliance/Release/Rollback'],
  },
  {
    layer: 'Metrics',
    summary: 'Meri napredak kroz readiness, stabilnost, rizik i ownership jasnoću.',
    outputs: ['Readiness Index', 'Risk severity trend', 'Ownership clarity score'],
  },
  {
    layer: 'Domain execution',
    summary: 'Povezuje /games, /spajapro i /university sa zajedničkim modelom isporuke.',
    outputs: ['Domain status', 'Dependency map', 'Release maturity ladder'],
  },
  {
    layer: 'Review loop',
    summary: 'Zaključava obavezne weekly review odluke i continuous improvement ciklus.',
    outputs: ['Extreme review pack', 'Executive KPI board', 'Improvement engine'],
  },
];

export const DEVELOPER_CREATE_EPIC_PILLARS: DeveloperCreatePillar[] = [
  {
    pillar: 'Product',
    mission: 'Jasan proizvodni tok od Fun/Test do Professional i Enterprise režima.',
    outcomes: [
      'Zaključani ciljevi za svaku capability zonu i svaki domen.',
      'Release maturity ladder od ideje do enterprise-ready nivoa.',
    ],
  },
  {
    pillar: 'Platform',
    mission: 'Stabilna tehnička osnova za razvoj, integracije, performanse i rollback.',
    outcomes: [
      'Standardizovana compatibility, performance i observability matrica.',
      'Tehnički readiness i rollback disciplina po fazama release-a.',
    ],
  },
  {
    pillar: 'Content',
    mission: 'Jedinstveni sadržajni model za gameplay, edukaciju, agent logiku i trust sloj.',
    outcomes: [
      'Template completeness za svaku novu stranicu, program i modul.',
      'Single source of truth za known limitations, glossary i operativni kontekst.',
    ],
  },
  {
    pillar: 'Operations',
    mission: 'Operativna disciplina sa auditabilnim razvojem, release kontrolom i incident ownership-om.',
    outcomes: [
      'Definition of Ready i Definition of Done kao hard gate.',
      'Weekly review sa statusom, trendom, blockerima i odlukama.',
    ],
  },
  {
    pillar: 'Trust & Governance',
    mission: 'Sigurnost, compliance i dokaziv audit evidence model kao obavezni deo svakog toka.',
    outcomes: [
      'No live without evidence pravilo za production spremnost.',
      'Security-by-default i audit evidence zahtevi za svaku promenu.',
    ],
  },
  {
    pillar: 'AI/Agent Execution',
    mission: 'Kontrolisana upotreba agenata, automatizacije i quality gate-ova bez narušavanja stabilnosti.',
    outcomes: [
      'AI agent governance model sa human-review i escalation pravilima.',
      'Innovation sandbox za eksperimente bez rizika za live tok.',
    ],
  },
];

export const REPOSITORY_DOMAIN_BOUNDARIES: RepositoryDomainBoundary[] = [
  {
    area: '/games',
    scope: 'Gameplay ekonomija, readiness, fairness, 3D/pilot/live disciplina i professional aktivacija.',
    ownership: 'Game product + QA + compliance koordinacija.',
    readinessFocus: 'Product balance, performance, fairness, KYC/compliance, live monitoring.',
  },
  {
    area: '/spajapro',
    scope: 'Agent orchestration, runtime, integracije, governance, security enforcement i enterprise automation.',
    ownership: 'Platform engineering + security + operations.',
    readinessFocus: 'Runtime isolation, connector safety, observability, policy enforcement, release approvals.',
  },
  {
    area: '/university',
    scope: 'Edukacija, sertifikacija, progression, work readiness i profesionalni prelaz.',
    ownership: 'Learning/content ops + work-readiness governance.',
    readinessFocus: 'Curriculum integrity, certification evidence, progression gates, region readiness.',
  },
  {
    area: '/developer-create',
    scope: 'Centralni control tower za standarde, gate-ove, metrike, dependency map i review loop.',
    ownership: 'Program governance + technical leadership + security review.',
    readinessFocus: 'Ownership clarity, cross-domain alignment, KPI review, policy enforcement.',
  },
];

export const LOCKED_PROGRAM_GOALS = [
  'Fun/Test zona ostaje bez realnog novca i služi za trening + validaciju znanja.',
  'Professional zona radi samo uz verifikaciju, compliance i audit-ready finansijski tok.',
  'Developer/Create je control tower za workflow, quality gates i release discipline.',
  'Enterprise readiness podrazumeva observability, policy enforcement i rollback spremnost.',
  'Svaki novi feature mora imati product, technical, security i operational owner-a.',
  'No live without evidence važi za sve domene i capability nivoe.',
];

export const DEVELOPER_CREATE_ROADMAP = [
  'Faza 1: Konsolidacija pojmova, scope-a i ownership modela po repozitorijumu.',
  'Faza 2: Standardizacija template-a, quality contract-a i readiness kriterijuma.',
  'Faza 3: Povezivanje /games, /spajapro i /university kroz zajedničke metrike i dependency map.',
  'Faza 4: Governance hardening kroz tvrde gate-ove, audit evidence i human/security review discipline.',
  'Faza 5: Executive visibility kroz control tower dashboard, KPI board i weekly review paket.',
  'Faza 6: Extreme / enterprise layer sa advanced scoring, sandbox lane-om i policy enforcement modelom.',
];

export const CANONICAL_VOCABULARY: CanonicalVocabularyItem[] = [
  {
    term: 'Readiness',
    definition: 'Merljiva spremnost domena ili modula za sledeći capability nivo.',
    usage: 'Koristi se u scorecard-ovima, release review-u i capability registru.',
  },
  {
    term: 'Pilot',
    definition: 'Kontrolisana upotreba uz monitoring, rollback i ograničen blast radius.',
    usage: 'Nijedan domen ne prelazi u pilot bez definisanog owner-a i rollback plana.',
  },
  {
    term: 'Live',
    definition: 'Stabilan produkcioni rad sa green gate-ovima i dokazivim evidence paketom.',
    usage: 'Live status aktivira no-live-without-evidence pravilo i weekly review.',
  },
  {
    term: 'Enterprise-ready',
    definition: 'Audit-ready, policy-driven i skalabilan nivo spremnosti.',
    usage: 'Koristi se za domene koji imaju stabilne KPI-jeve, ownership i trust signal.',
  },
  {
    term: 'Blocker',
    definition: 'Jasan razlog koji sprečava sledeći unlock ili release odluku.',
    usage: 'Svaki blocker mora imati owner-a, signal i sledeću odluku.',
  },
  {
    term: 'Next decision',
    definition: 'Najvažnija upravljačka odluka koja otključava sledeću fazu.',
    usage: 'Prikazuje se na dashboard-u i u weekly review paketu.',
  },
  {
    term: 'Owner / Reviewer / Approver',
    definition: 'Tri obavezne role koje vode, proveravaju i potvrđuju promenu.',
    usage: 'Obavezne su za svaki veliki feature, modul, release i audit lane.',
  },
];
