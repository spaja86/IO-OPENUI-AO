export type DeveloperCreatePillarName =
  | 'Product'
  | 'Platform'
  | 'Content'
  | 'Operations'
  | 'Trust & Governance'
  | 'AI/Agent Execution';

export type ControlTowerStatus = 'planned' | 'active' | 'pilot' | 'live' | 'enterprise-ready';
export type ReadinessSignal = 'ready' | 'partial' | 'blocked';
export type RiskSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface DeveloperCreateNorthStar {
  title: string;
  mission: string;
  why: string[];
  measures: string[];
}

export interface ProgramHierarchyLayer {
  layer: 'Strategy' | 'Standards' | 'Gates' | 'Metrics' | 'Domain execution' | 'Review loop';
  summary: string;
  outputs: string[];
}

export interface DeveloperCreatePillar {
  pillar: DeveloperCreatePillarName;
  mission: string;
  outcomes: string[];
}

export interface RepositoryDomainBoundary {
  area: '/games' | '/spajapro' | '/university' | '/developer-create';
  scope: string;
  ownership: string;
  readinessFocus: string;
}

export interface ControlTowerDomainStatus {
  domain: '/games' | '/spajapro' | '/university';
  status: ControlTowerStatus;
  focus: string;
  trend: 'up' | 'stable' | 'watch';
  blocker: string;
  nextDecision: string;
}

export interface DomainReadinessMatrix {
  domain: '/games' | '/spajapro' | '/university';
  product: ReadinessSignal;
  tech: ReadinessSignal;
  security: ReadinessSignal;
  compliance: ReadinessSignal;
  operations: ReadinessSignal;
}

export interface OwnershipRole {
  lane: string;
  owner: string;
  reviewer: string;
  approver: string;
  escalation: string;
}

export interface DependencyMapItem {
  domain: '/games' | '/spajapro' | '/university';
  dependsOn: string[];
  blockedBy: string[];
  readyFor: string[];
}

export interface ReleaseMaturityStage {
  stage: string;
  goal: string;
  exitCriteria: string[];
}

export interface RiskBoardItem {
  category: string;
  level: RiskSeverity;
  signal: string;
  mitigation: string;
}

export interface GovernancePolicySection {
  title: string;
  items: string[];
}

export interface DeveloperPersona {
  persona: string;
  mandate: string;
  mustOwn: string[];
}

export interface CreateWorkflowStep {
  step: string;
  objective: string;
  hardProof: string;
}

export interface QualityContract {
  asset: string;
  contract: string[];
}

export interface StandardTemplate {
  title: string;
  sections: string[];
}

export interface LockedMetric {
  metric: string;
  target: string;
  whyItMatters: string;
}

export interface OperatingPhase {
  phase: string;
  objective: string;
  outcomes: string[];
}

export interface ExtremeControlTowerLane {
  lane: string;
  owner: string;
  kpi: string;
  cadence: string;
}

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

export const CONTROL_TOWER_DASHBOARD: ControlTowerDomainStatus[] = [
  {
    domain: '/games',
    status: 'pilot',
    focus: 'Fairness, 3D readiness i live monetization guardrails.',
    trend: 'up',
    blocker: 'Professional live zahteva dokazive compliance i rollback signale po naslovu.',
    nextDecision: 'Zaključati readiness thresholds i no-live evidence paket po igri.',
  },
  {
    domain: '/spajapro',
    status: 'active',
    focus: 'Orchestration, security enforcement i enterprise delivery discipline.',
    trend: 'stable',
    blocker: 'Potrebna puna povezanost release approvals, audit trace i connector policy modela.',
    nextDecision: 'Zaključati control tower ugovor između KODER, EKSER, ODIT i DEKER slojeva.',
  },
  {
    domain: '/university',
    status: 'active',
    focus: 'Certification, progression i work-readiness governance.',
    trend: 'up',
    blocker: 'Professional activation mora imati strogu vezu sa dokazima znanja i region readiness pravilima.',
    nextDecision: 'Povezati završne statuse i licence sa centralnim readiness scoring modelom.',
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

export const DOMAIN_READINESS_MATRIX: DomainReadinessMatrix[] = [
  { domain: '/games', product: 'ready', tech: 'partial', security: 'partial', compliance: 'partial', operations: 'partial' },
  { domain: '/spajapro', product: 'ready', tech: 'ready', security: 'partial', compliance: 'partial', operations: 'ready' },
  { domain: '/university', product: 'ready', tech: 'ready', security: 'ready', compliance: 'partial', operations: 'partial' },
];

export const OWNERSHIP_MODEL: OwnershipRole[] = [
  {
    lane: 'Product readiness',
    owner: 'Product owner',
    reviewer: 'Domain lead',
    approver: 'Program governance',
    escalation: 'Executive weekly review',
  },
  {
    lane: 'Technical delivery',
    owner: 'Technical lead',
    reviewer: 'Platform lead',
    approver: 'Release owner',
    escalation: 'Rollback / incident owner',
  },
  {
    lane: 'Security & compliance',
    owner: 'Security owner',
    reviewer: 'Compliance reviewer',
    approver: 'Security review board',
    escalation: 'Policy block + human review',
  },
  {
    lane: 'Content integrity',
    owner: 'Content lead',
    reviewer: 'QA/content ops',
    approver: 'Program governance',
    escalation: 'Content freeze',
  },
];

export const DEPENDENCY_MAP: DependencyMapItem[] = [
  {
    domain: '/games',
    dependsOn: ['/spajapro orchestration i policy', '/university readiness i certification bridge'],
    blockedBy: ['Compliance evidence', 'Performance budgets', 'Fairness audit'],
    readyFor: ['Pilot/live readiness', 'Professional activation', '3D certification rollout'],
  },
  {
    domain: '/spajapro',
    dependsOn: ['/developer-create standards', 'Security enforcement discipline', 'Runtime isolation'],
    blockedBy: ['Connector risk', 'Missing audit trace', 'Release approval gaps'],
    readyFor: ['Enterprise automation', 'Agent execution', 'Cross-module orchestration'],
  },
  {
    domain: '/university',
    dependsOn: ['/developer-create governance', '/spajapro audit/compliance services'],
    blockedBy: ['Certification evidence gaps', 'Region readiness mismatch', 'Progression integrity flags'],
    readyFor: ['Professional work bridge', 'Licensing activation', 'Verified capability proof'],
  },
];

export const DEVELOPER_CREATE_ROADMAP = [
  'Faza 1: Konsolidacija pojmova, scope-a i ownership modela po repozitorijumu.',
  'Faza 2: Standardizacija template-a, quality contract-a i readiness kriterijuma.',
  'Faza 3: Povezivanje /games, /spajapro i /university kroz zajedničke metrike i dependency map.',
  'Faza 4: Governance hardening kroz tvrde gate-ove, audit evidence i human/security review discipline.',
  'Faza 5: Executive visibility kroz control tower dashboard, KPI board i weekly review paket.',
  'Faza 6: Extreme / enterprise layer sa advanced scoring, sandbox lane-om i policy enforcement modelom.',
];

export const DEFINITION_OF_READY = {
  title: 'Definition of Ready (nova stranica/igra/modul)',
  checklist: [
    'Jasno definisani ciljevi, scope i capability nivo (idea/prototype/validation/pilot/live).',
    'Product, technical, security i operational owner su imenovani.',
    'Kompatibilnost, minimalni tehnički zahtevi i observability zahtevi su dokumentovani.',
    'Compliance scenario, rizici i acceptance kriterijumi su potvrđeni pre početka rada.',
  ],
};

export const DEFINITION_OF_DONE = {
  title: 'Definition of Done (release spremnost)',
  checklist: [
    'Funkcionalni testovi, regresija i sadržajni audit prolaze bez blokera.',
    'Security skenovi, secret scanning i policy kontrole nemaju kritične nalaze.',
    'Performanse, monitoring signali i rollback plan su verifikovani.',
    'Audit evidence paket i finalna odluka za sledeći maturity nivo su dokumentovani.',
  ],
};

export const QA_AND_RELEASE_GATES = [
  'QA gate: funkcionalni testovi + regresija + accessibility + sadržajni audit + edge-case validacija.',
  'Security gate: secret scanning + dependency risk check + policy enforcement + human review kada postoji rizik.',
  'Compliance gate: age-gating + region lock + KYC/AML + certification evidence kada je relevantno.',
  'Release gate: phased rollout + monitoring signal + incident owner + rollback plan + approval chain.',
  'Rollback gate: trigger pravila + recovery target + ownership + povratak na stabilan capability nivo.',
  'Weekly executive review: status + trend + blockers + decisions + next actions.',
];

export const RELEASE_MATURITY_LADDER: ReleaseMaturityStage[] = [
  {
    stage: 'Idea',
    goal: 'Definisati problem, ownership i očekivani impact.',
    exitCriteria: ['North Star veza postoji', 'Owner-i imenovani', 'Scope zaključan'],
  },
  {
    stage: 'Prototype',
    goal: 'Dokazati osnovni koncept bez live rizika.',
    exitCriteria: ['Eksperimentalni opseg ograničen', 'Rizici evidentirani', 'Nema produkcionog uticaja'],
  },
  {
    stage: 'Validation',
    goal: 'Potvrditi korisnost, kvalitet i minimalnu tehničku stabilnost.',
    exitCriteria: ['Acceptance kriterijumi prolaze', 'Readiness signal postoji', 'Dokazi su prikupljeni'],
  },
  {
    stage: 'Pilot',
    goal: 'Uvesti kontrolisano korišćenje sa monitoring-om i rollback-om.',
    exitCriteria: ['Phased rollout definisan', 'Incident owner poznat', 'Rollback testiran'],
  },
  {
    stage: 'Live',
    goal: 'Stabilno produkciono korišćenje uz governance disciplinu.',
    exitCriteria: ['No live without evidence ispunjen', 'Sve hard gate provere su green', 'Weekly review aktivan'],
  },
  {
    stage: 'Enterprise-ready',
    goal: 'Audit-ready, policy-driven i skalabilan modul/program.',
    exitCriteria: ['SLA/observability model aktivan', 'Security i compliance trend stabilan', 'Ownership i runbook kompletni'],
  },
];

export const INCIDENT_AND_ROLLBACK_DISCIPLINE = [
  'Svaki rollout ima imenovanog incident owner-a i recovery target.',
  'Rollback se planira pre puštanja, ne nakon incidenta.',
  'Capability se može spustiti sa live na pilot ili validation nivo kada metrički signal padne.',
  'Weekly review mora evidentirati rollback spremnost i poslednje recovery vežbe.',
];

export const CERTIFICATION_AND_TRUST_FRAMEWORK = [
  'Certification lane potvrđuje readiness, sigurnost i integritet po domenu.',
  'Audit evidence mora biti dovoljno jasan za review, release i eventualni incident response.',
  'Trust sloj povezuje compliance, fairness, policy enforcement i dokazivu istoriju odluka.',
  'Professional aktivacija je dozvoljena tek kada trust kontrole imaju stabilan signal.',
];

export const AI_AGENT_GOVERNANCE_MODEL = [
  'Agenti rade unutar jasno definisanih granica ownership-a i policy kontrole.',
  'Human-review ostaje obavezan za promene koje utiču na release, security ili governance.',
  'Automatizacija može ubrzati delivery, ali ne može preskočiti dokazive gate-ove.',
  'Eksperimentalni agentski tok mora ostati izolovan od live capability nivoa.',
];

export const INNOVATION_SANDBOX = [
  'Eksperimenti se izvode u odvojenom lane-u bez uticaja na live stabilnost.',
  'Svaki eksperiment mora imati exit uslov: promote, hold ili archive.',
  'Sandbox metrike mere učenje, a ne samo isporuku.',
  'Promocija iz sandbox-a zahteva iste evidence pakete kao i standardni rollout.',
];

export const DEVELOPER_PERSONAS: DeveloperPersona[] = [
  {
    persona: 'Creator',
    mandate: 'Pokreće ideju, definiše vrednost i mapira iskustvo korisnika.',
    mustOwn: ['Problem statement', 'North Star veza', 'Maturity cilj'],
  },
  {
    persona: 'Engineer',
    mandate: 'Pretvara ideju u stabilnu tehničku implementaciju sa standardima i telemetrijom.',
    mustOwn: ['Technical design', 'Performance budget', 'Rollback path'],
  },
  {
    persona: 'Operator',
    mandate: 'Drži release disciplinu, monitoring i incident spremnost.',
    mustOwn: ['Release approval chain', 'Monitoring signal', 'Recovery target'],
  },
  {
    persona: 'Reviewer',
    mandate: 'Validira da su dokazi, kvalitet i odluke konzistentni pre sledeće faze.',
    mustOwn: ['Acceptance review', 'Evidence quality', 'Decision log'],
  },
  {
    persona: 'Security owner',
    mandate: 'Blokira rizične promene i čuva trust sloj repozitorijuma.',
    mustOwn: ['Policy controls', 'Risk severity trend', 'Escalation pravila'],
  },
];

export const CREATE_WORKFLOW: CreateWorkflowStep[] = [
  { step: 'Ideja', objective: 'Definisati cilj i vrednost.', hardProof: 'Scope, owner-i i očekivani impact su zaključani.' },
  { step: 'Dizajn', objective: 'Prevesti ideju u strukturu i pravila.', hardProof: 'Standard template i quality contract su popunjeni.' },
  { step: 'Specifikacija', objective: 'Definisati readiness, rizike i zavisnosti.', hardProof: 'DoR uslovi i dependency map su potvrđeni.' },
  { step: 'Build', objective: 'Implementirati u okviru definisanih standarda.', hardProof: 'Code path, ownership i observability su prisutni.' },
  { step: 'Test', objective: 'Validirati kvalitet i stabilnost.', hardProof: 'QA, regression i domain kriterijumi prolaze.' },
  { step: 'Audit', objective: 'Potvrditi trust, policy i evidence trag.', hardProof: 'Security/compliance pregled i evidence paket su green.' },
  { step: 'Release', objective: 'Pustiti uz kontrolisan rizik.', hardProof: 'Approval chain, monitoring i rollback plan su aktivni.' },
  { step: 'Review', objective: 'Zaključati odluke i sledeći korak.', hardProof: 'Weekly review paket beleži status, trend, blokere i odluke.' },
];

export const GOVERNANCE_POLICY_SECTIONS: GovernancePolicySection[] = [
  {
    title: 'Repository Program Map',
    items: [
      'Developer & Create je centralni control tower za sve strateške i operativne odluke.',
      'Svaki domen dobija capability map: planned, pilot, live, enterprise-ready.',
      'Single source of truth živi u data modelu, ne u razbacanim pravilima.',
    ],
  },
  {
    title: 'Cross-Module Integration Policy',
    items: [
      'Integracije moraju jasno navesti dependency, blocked by i ready for signale.',
      'Promena u jednom domenu ne može degradirati drugi bez eksplicitne odluke.',
      'Shared metrics moraju biti isti za sve međuzavisne tokove.',
    ],
  },
  {
    title: 'Security-by-Default Policy',
    items: [
      'Bezbednosne kontrole se planiraju u DoR fazi.',
      'Policy block važi pre release-a kada postoji kritičan nalaz.',
      'Secret scanning i dependency risk check su deo osnovnog lanca isporuke.',
    ],
  },
  {
    title: 'Content Integrity Policy',
    items: [
      'Svaki sadržaj mora imati jasan owner i known limitations deo.',
      'Glossary, readiness i governance termini moraju biti konzistentni kroz repo.',
      'Content ne sme obećavati capability koja nema dokazivu readiness podršku.',
    ],
  },
  {
    title: 'Audit Evidence Requirements',
    items: [
      'Svaka promotivna faza mora imati decision log i evidence paket.',
      'Live i enterprise-ready status traže dokaziv monitoring i rollback trag.',
      'Human-review mora imati dovoljno informacija za auditabilnu odluku.',
    ],
  },
  {
    title: 'Continuous Improvement Engine',
    items: [
      'Weekly review zaključuje sledeći eksperiment ili korekciju.',
      'Trendovi se prate po riziku, stabilnosti i ownership jasnoći.',
      'Innovation lane postoji da ubrza učenje bez ugrožavanja produkcije.',
    ],
  },
];

export const QUALITY_CONTRACTS: QualityContract[] = [
  {
    asset: 'Nova stranica',
    contract: [
      'Mora imati jasan cilj, ownership i vezu sa capability map-om.',
      'Sadržaj mora koristiti postojeći governance jezik i readiness termine.',
      'Mora postojati dokaz kako stranica podržava domen ili control tower odluku.',
    ],
  },
  {
    asset: 'Nova igra / game entry',
    contract: [
      'Mora imati gameplay, ekonomiju, compliance i technical readiness prikaz.',
      'Moraju postojati risk board, acceptance gate i known limitations.',
      'Professional mogućnosti ne idu live bez evidence paketa.',
    ],
  },
  {
    asset: 'Novi program / modul',
    contract: [
      'Mora imati scope boundary, owner-e i integration policy.',
      'Mora navesti blocked by i ready for signale.',
      'Mora biti uklopljen u release maturity ladder i weekly review format.',
    ],
  },
];

export const STANDARD_TEMPLATES: StandardTemplate[] = [
  {
    title: 'Template: novo dodavanje u repo',
    sections: ['Cilj', 'Scope', 'Owner-i', 'Dependencies', 'Readiness kriterijumi', 'Rizici', 'Evidence plan'],
  },
  {
    title: 'Template: novi game/program/module entry',
    sections: ['Identity', 'User value', 'Technical readiness', 'Security/compliance', 'Known limitations', 'Maturity level'],
  },
  {
    title: 'Template: release readiness review',
    sections: ['Status', 'Trend', 'Blockers', 'Decisions', 'Rollback readiness', 'Next actions'],
  },
];

export const LOCKED_METRICS: LockedMetric[] = [
  { metric: 'Readiness Index', target: '0–100 po domenu i capability nivou', whyItMatters: 'Daje jedinstvenu sliku napretka.' },
  { metric: 'Gate pass rate', target: 'Stabilan green signal pre release-a', whyItMatters: 'Pokazuje disciplinu isporuke.' },
  { metric: 'Regression stability', target: 'Bez blokera kroz ključne tokove', whyItMatters: 'Čuva kvalitet pri promenama.' },
  { metric: 'Security finding severity trend', target: 'Down ili stable bez critical nalaza', whyItMatters: 'Štiti trust sloj.' },
  { metric: 'Performance stability', target: 'Budžeti ispunjeni po domenu', whyItMatters: 'Čuva korisničko iskustvo i live spremnost.' },
  { metric: 'Compliance completion rate', target: 'Sve obavezne kontrole zatvorene pre live', whyItMatters: 'Smanjuje regulatorni rizik.' },
  { metric: 'Time from concept to release', target: 'Merljiv i trendovski optimizovan', whyItMatters: 'Pomaže planiranju delivery-ja.' },
  { metric: 'Rollback readiness score', target: 'Jasan recovery plan za svaki rollout', whyItMatters: 'Smanjuje incident impact.' },
  { metric: 'Documentation completeness', target: 'Template-i kompletni bez rupa', whyItMatters: 'Obezbeđuje audit i transfer znanja.' },
  { metric: 'Ownership clarity score', target: 'Nema nejasnih owner-a na ključnim tokovima', whyItMatters: 'Sprečava blokere i praznine u odgovornosti.' },
];

export const OPERATING_PHASES: OperatingPhase[] = [
  {
    phase: 'Faza 1 · Konsolidacija',
    objective: 'Ujednačiti pojmove, scope i ownership.',
    outcomes: ['Jedan governance jezik', 'Zaključane granice domena', 'Owner-i i escalation model'],
  },
  {
    phase: 'Faza 2 · Standardizacija',
    objective: 'Zaključati template-e, contract-e i readiness kriterijume.',
    outcomes: ['Obavezni template-i', 'Quality contract', 'Standardni gate-ovi'],
  },
  {
    phase: 'Faza 3 · Povezivanje domena',
    objective: 'Uvesti zajedničke metrike i dependency map.',
    outcomes: ['Shared metrics', 'Blocked by / ready for logika', 'Risk language'],
  },
  {
    phase: 'Faza 4 · Governance hardening',
    objective: 'Uvesti tvrde kontrole za trust i release.',
    outcomes: ['Hard gate discipline', 'Audit evidence model', 'Human/security review'],
  },
  {
    phase: 'Faza 5 · Executive visibility',
    objective: 'Napraviti centralni pregled statusa, trendova i odluka.',
    outcomes: ['Control tower dashboard', 'Executive KPI board', 'Weekly review paket'],
  },
  {
    phase: 'Faza 6 · Extreme / enterprise layer',
    objective: 'Dodati advanced scoring, sandbox i enterprise discipline.',
    outcomes: ['Advanced readiness', 'Innovation sandbox', 'Policy-driven scaling'],
  },
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
  title: 'Developer & Create EXTREME Control Tower',
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

export const RISK_BOARD: RiskBoardItem[] = [
  {
    category: 'Security',
    level: 'critical',
    signal: 'Tajne, policy gap ili kritična zavisnost.',
    mitigation: 'Block release, ukloniti nalaz, ponoviti review i dokazati clean state.',
  },
  {
    category: 'Performance',
    level: 'high',
    signal: 'Pad stabilnosti, prekoračenje budžeta ili loš trend na pilot/live toku.',
    mitigation: 'Spustiti capability nivo, uključiti fallback i potvrditi recovery metrics.',
  },
  {
    category: 'Compliance',
    level: 'high',
    signal: 'Nedostaje dokaz za region, age gate ili professional aktivaciju.',
    mitigation: 'Zadržati modul u nižoj fazi dok evidence paket ne bude kompletan.',
  },
  {
    category: 'Content integrity',
    level: 'medium',
    signal: 'Terminologija ili obećanja nisu usklađeni sa realnim readiness signalom.',
    mitigation: 'Freeze sadržaj dok owner i reviewer ne usaglase source of truth.',
  },
  {
    category: 'Ownership',
    level: 'low',
    signal: 'Nejasan reviewer ili escalation put.',
    mitigation: 'Dopisati ownership map pre daljeg napredovanja.',
  },
];
