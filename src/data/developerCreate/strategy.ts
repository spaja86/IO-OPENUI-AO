import type {
  CanonicalVocabularyItem,
  DeliveryLaneRule,
  DeveloperCreateNorthStar,
  DeveloperCreatePillar,
  MasterCapabilityMapItem,
  MaturityMapEntry,
  OperatingCharter,
  ProgramHierarchyLayer,
  RepositoryDomainBoundary,
} from './types';

export const DEVELOPER_CREATE_NORTH_STAR: DeveloperCreateNorthStar = {
  title: 'Developer & Create Control Tower',
  mission:
    'Jedinstveni repo-wide upravljački sloj koji zaključava isti jezik, iste gate-ove, isti ownership i isti evidence model za svaki proizvodni domen i svaki budući modul.',
  why: [
    'Da /games, /spajapro i /university koriste isti governance jezik.',
    'Da svaki novi modul ima merljiv readiness pre nego što ide u pilot/live.',
    'Da sigurnost, compliance i rollback spremnost budu deo početka, ne završnog popravnog koraka.',
    'Da se isti radni takt vidi u planiranju, build-u, review-u, release-u i poboljšanjima kroz ceo repo.',
  ],
  measures: [
    'Readiness Index po domenu i ruti.',
    'Gate pass rate za build, QA, security, compliance i release.',
    'Trend blokera, odluka i rollback spremnosti na weekly review nivou.',
    'Stepen usklađenosti domena sa jedinstvenim operating cycle modelom.',
  ],
};

export const DEVELOPER_CREATE_EXTREME_V2 = {
  title: 'Developer & Create EXTREME v2',
  scope:
    'Zvanični repo program koji zaključava zajednički operativni jezik, governance i readiness model za /games, /spajapro, /university i /developer-create.',
  objectives: [
    'Jedinstven model odluka, ownership-a i release discipline kroz sve domene.',
    'Maksimalna auditabilnost strategic i high-impact promena.',
    'Stabilan put od ideje do enterprise-ready capability nivoa.',
  ],
  responsibilityBoundaries: [
    'Product: vrednost, scope i capability target po domenu.',
    'Platform: tehnička stabilnost, observability i rollback spremnost.',
    'Trust/Governance: security, compliance, evidence i policy enforcement.',
  ],
};

export const LOCKED_REPOSITORY_HIERARCHY = ['Strategy', 'Standards', 'Gates', 'Metrics', 'Dependencies', 'Review loop'];

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
    layer: 'Dependencies',
    summary: 'Povezuje /games, /spajapro, /university i /developer-create kroz isti unlock, blocker i inheritance model.',
    outputs: ['Domain status', 'Dependency map', 'Inherited policies', 'Unified operating outputs'],
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

export const REPO_OPERATING_CHARTER: OperatingCharter = {
  title: 'Repo Operating Charter',
  promise:
    'Svaki domen i svaka promena u repozitorijumu ulaze u isti operativni sistem: isti jezik, isti dokazi, isti ownership i isti promotion/demotion signali.',
  operatingPrinciples: [
    'Single source of truth ostaje u `src/data/developerCreate/*` za repo-level pravila i modele.',
    'Policy inheritance nije opcionalan: svi domeni nasleđuju canonical vocabulary, evidence discipline i ownership trijadu.',
    'Stable i experimental lane se vode odvojeno kako bi inovacija bila brza, ali bez degradacije live/stable toka.',
    'No live without evidence, no high-impact change without audit trail i no config/agent change without reinforced review.',
  ],
  successDefinition: [
    'Svaki domen ima owner-a, blocker, next decision i minimum evidence signal.',
    'Capability promotion i demotion rade po istim pravilima kroz /games, /spajapro, /university i /developer-create.',
    'Executive pregled može na jednom mestu da vidi repo health, rizike, zavisnosti i sledeće odluke.',
  ],
};

export const MASTER_CAPABILITY_MAP: MasterCapabilityMapItem[] = [
  {
    area: '/games',
    currentState: 'pilot',
    targetState: 'live → enterprise-ready po naslovu',
    stableBoundary: 'Fairness, compliance i rollback dokazi moraju biti green pre live aktivacije.',
    experimentalScope: '3D slojevi, nove ekonomije i test mehanike ostaju u izolovanom readiness prostoru.',
  },
  {
    area: '/spajapro',
    currentState: 'active',
    targetState: 'enterprise-ready orchestration backbone',
    stableBoundary: 'Policy enforcement, connector safety i audit trail ne smeju pasti ispod control tower minimuma.',
    experimentalScope: 'Novi agent tokovi i connector pattern-i idu kroz sandbox lane pre širenja.',
  },
  {
    area: '/university',
    currentState: 'active',
    targetState: 'verified professional bridge',
    stableBoundary: 'Certification evidence i region readiness ostaju obavezni za professional claim.',
    experimentalScope: 'Novi programi i progression modeli ostaju u validation/pilot zoni dok ne dobiju dokaz.',
  },
  {
    area: '/developer-create',
    currentState: 'active',
    targetState: 'repo-wide operating center',
    stableBoundary: 'Repo-level pravila, scorecards i evidence model moraju ostati konzistentni i auditabilni.',
    experimentalScope: 'Future dashboards, APIs i multi-repo kontrolni sloj razvijaju se bez rušenja postojećeg governance modela.',
  },
  {
    area: 'future modules',
    currentState: 'planned',
    targetState: 'policy-inherited module onboarding',
    stableBoundary: 'Nijedan novi modul ne ulazi bez ownership-a, template-a i evidence contract-a.',
    experimentalScope: 'Novi moduli smeju ući u sandbox lane dok ne dokažu readiness i stabilnost.',
  },
];

export const EXECUTIVE_MATURITY_MAP: MaturityMapEntry[] = [
  {
    stage: 'planned',
    scope: 'Future modules i nove capability ideje bez dozvole za aktivne claim-ove.',
    exitSignal: 'Scope, owner-i i minimalni proof plan su zaključani.',
  },
  {
    stage: 'validation',
    scope: 'Eksperimentalni tokovi sa dokazivanjem korisnosti i osnovne stabilnosti.',
    exitSignal: 'Acceptance signal, dependency map i minimalni evidence paket su kompletirani.',
  },
  {
    stage: 'pilot',
    scope: 'Kontrolisana aktivacija uz monitoring i rollback disciplinu.',
    exitSignal: 'Phased rollout, incident owner i demotion pravila su green.',
  },
  {
    stage: 'live',
    scope: 'Stabilan produkcioni rad uz pun evidence i governance trag.',
    exitSignal: 'No live without evidence i svi hard gate-ovi ostaju green kroz review cikluse.',
  },
  {
    stage: 'enterprise-ready',
    scope: 'Audit-ready i policy-driven capability koja može skalirati na repo/platform nivou.',
    exitSignal: 'SLA, policy inheritance i trend stabilnost ostaju dokazivi kroz više ciklusa.',
  },
];

export const DELIVERY_LANE_RULES: DeliveryLaneRule[] = [
  {
    lane: 'stable',
    purpose: 'Za capability-je koji nose live ili aktivne repo claim-ove.',
    protects: ['Release discipline', 'Observability', 'Rollback confidence', 'Audit evidence'],
  },
  {
    lane: 'experimental',
    purpose: 'Za agresivno testiranje novih modula, agenata i governance obrazaca bez rušenja stabilnog toka.',
    protects: ['Blast-radius izolaciju', 'Explicitne exit kriterijume', 'Brzu demotion putanju'],
  },
  {
    lane: 'hybrid',
    purpose: 'Za module koji imaju stabilno jezgro, ali testiraju novi sloj ili capability uz kontrolisani most.',
    protects: ['Stable core', 'Owner/reviewer/approver disciplinu', 'Decision memory i impact review'],
  },
];
