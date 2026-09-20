import type {
  BlockerAgingItem,
  CommandCenterItem,
  ControlTowerDomainStatus,
  CreateWorkflowStep,
  DeveloperPersona,
  DependencyMapItem,
  DomainOperatingSignal,
  DomainReadinessMatrix,
  DomainScorecard,
  OperatingPhase,
  OwnershipRole,
  ReleaseMaturityStage,
  RepositoryHealthOverview,
} from './types';

export const REPOSITORY_HEALTH_OVERVIEW: RepositoryHealthOverview = {
  status: 'active',
  readinessScore: 79,
  trustScore: 83,
  ownershipClarityScore: 86,
  releaseDisciplineScore: 78,
  rollbackConfidenceScore: 74,
  summary:
    'Repo ima stabilan control-tower pravac i jasnu strukturu domena, ali još uvek mora dodatno zaključati evidence discipline i zajednički capability unlock model.',
  criticalBlockers: [
    'Cross-domain release evidence još nije formalizovan za sve domene.',
    'Capability unlock pravila nisu jednako eksplicitna za games, spajapro i university.',
    'Repo-wide consistency layer mora da potvrdi terminologiju i ownership reference.',
  ],
  topDecisions: [
    'Zaključati canonical vocabulary kao globalni jezik repozitorijuma.',
    'Voditi sve velike promene kroz standard templates + evidence matrix.',
    'Koristiti domain scorecards kao centralni executive prikaz po modulu.',
  ],
};

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

export const DOMAIN_READINESS_MATRIX: DomainReadinessMatrix[] = [
  { domain: '/games', product: 'ready', tech: 'partial', security: 'partial', compliance: 'partial', operations: 'partial' },
  { domain: '/spajapro', product: 'ready', tech: 'ready', security: 'partial', compliance: 'partial', operations: 'ready' },
  { domain: '/university', product: 'ready', tech: 'ready', security: 'ready', compliance: 'partial', operations: 'partial' },
];

export const DOMAIN_SCORECARDS: DomainScorecard[] = [
  {
    domain: '/games',
    role: 'Gameplay economics + fairness + staged live activation',
    status: 'pilot',
    trend: 'up',
    nextUnlock: 'Verifikovan professional readiness paket po igri.',
    scores: { readiness: 76, trust: 72, ownership: 81, release: 70, rollback: 68 },
    dependencies: ['Compliance evidence', 'Fairness audit', '3D readiness discipline'],
  },
  {
    domain: '/spajapro',
    role: 'Agent orchestration + runtime + security policy backbone',
    status: 'active',
    trend: 'stable',
    nextUnlock: 'Povezan release approval chain sa audit trace modelom.',
    scores: { readiness: 84, trust: 80, ownership: 88, release: 79, rollback: 75 },
    dependencies: ['Connector safety', 'Audit trail completeness', 'Runtime isolation proof'],
  },
  {
    domain: '/university',
    role: 'Certification + progression + work-readiness governance',
    status: 'active',
    trend: 'up',
    nextUnlock: 'Centralni score koji vezuje knowledge proof i professional activation.',
    scores: { readiness: 82, trust: 85, ownership: 84, release: 77, rollback: 73 },
    dependencies: ['Certification evidence', 'Region readiness mapping', 'Progression integrity'],
  },
  {
    domain: '/developer-create',
    role: 'Repo-wide master operating system za standarde, gates i odluke',
    status: 'active',
    trend: 'up',
    nextUnlock: 'Formalizovan validation layer za sve buduće module i rute.',
    scores: { readiness: 88, trust: 87, ownership: 90, release: 84, rollback: 80 },
    dependencies: ['Canonical vocabulary', 'Policy inheritance model', 'Executive review discipline'],
  },
];

export const CONTROL_TOWER_SCORE_SNAPSHOTS = [
  {
    route: '/games',
    phase: 'Faza 3 · Povezivanje domena',
    readiness: 76,
    trust: 72,
    release: 70,
    signal: 'Usklađivanje fairness/compliance signala sa release odlukama.',
  },
  {
    route: '/spajapro',
    phase: 'Faza 4 · Governance hardening',
    readiness: 84,
    trust: 80,
    release: 79,
    signal: 'Stabilizacija release approvals i audit traga.',
  },
  {
    route: '/university',
    phase: 'Faza 4 · Governance hardening',
    readiness: 82,
    trust: 85,
    release: 77,
    signal: 'Zatvaranje certification evidence i region-ready signala.',
  },
  {
    route: '/developer-create',
    phase: 'Faza 5 · Executive visibility',
    readiness: 88,
    trust: 87,
    release: 84,
    signal: 'Centralni control tower signal za sve domene.',
  },
];

export const CRITICAL_DEPENDENCY_HEATMAP = [
  { from: '/games', to: '/spajapro', intensity: 'critical', reason: 'Policy orchestration i release guardrails zavise od platformskog enforcement sloja.' },
  { from: '/games', to: '/university', intensity: 'high', reason: 'Professional activation i certification bridge zahtevaju usklađen dokaz readiness-a.' },
  { from: '/university', to: '/spajapro', intensity: 'high', reason: 'Audit/compliance servisi i evidence trace dolaze kroz orchestration sloj.' },
  { from: '/spajapro', to: '/developer-create', intensity: 'medium', reason: 'Tehnička isporuka mora ostati usklađena sa centralnim governance pravilima.' },
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

export const DEVELOPER_PERSONAS: DeveloperPersona[] = [
  {
    persona: 'Creator',
    mandate: 'Pokreće ideju, definiše vrednost i mapira iskustvo korisnika.',
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

export const DOMAIN_OPERATING_SIGNALS: DomainOperatingSignal[] = [
  {
    domain: '/games',
    owner: 'Games product + fairness/release owner',
    blocker: 'Cross-domain release evidence za professional/live aktivaciju još nije zaključen po naslovu.',
    nextDecision: 'Potvrditi per-title evidence paket i demotion signal pre širenja live režima.',
    requiredEvidence: ['Fairness audit', 'Compliance proof', 'Rollback vežba', 'Monitoring coverage'],
    inheritedPolicies: ['Canonical vocabulary', 'No live without evidence', 'Ownership trijada'],
    impactSignal: 'Ako signal oslabi, professional claims i live readiness narativi postaju nevalidni.',
    escalationLane: 'Executive weekly review + security/compliance review',
    deliveryLane: 'hybrid',
  },
  {
    domain: '/spajapro',
    owner: 'Platform engineering + security owner',
    blocker: 'Connector policy i audit approvals nisu još potpuno zaključani za enterprise claim.',
    nextDecision: 'Zaključati reinforced review lane za automation, config i connector promene.',
    requiredEvidence: ['Connector safety proof', 'Audit trail completeness', 'Approval chain trace', 'Runtime isolation proof'],
    inheritedPolicies: ['Policy inheritance', 'AI governance review', 'Config-change reinforced review'],
    impactSignal: 'Slab signal direktno ruši release discipline drugih domena koji zavise od orchestration sloja.',
    escalationLane: 'Platform lead + security review board',
    deliveryLane: 'stable',
  },
  {
    domain: '/university',
    owner: 'Learning/content ops + readiness governance',
    blocker: 'Professional bridge i certification claims još nisu u potpunosti vezani za centralni scoring model.',
    nextDecision: 'Zaključati knowledge proof, region readiness i release evidence u jedinstveni unlock model.',
    requiredEvidence: ['Certification evidence', 'Region readiness map', 'Progression integrity proof', 'Rollback content plan'],
    inheritedPolicies: ['Canonical vocabulary', 'Evidence-first promotion', 'Decision SLA discipline'],
    impactSignal: 'Ako signal kasni, profesionalni prelaz i readiness claim-ovi postaju neusklađeni sa control tower-om.',
    escalationLane: 'Program governance + content/reviewer lane',
    deliveryLane: 'hybrid',
  },
  {
    domain: '/developer-create',
    owner: 'Program governance + technical leadership',
    blocker: 'Repo-wide capability unlock/demotion i audit layer moraju biti potpuno formalizovani.',
    nextDecision: 'Pretvoriti control tower u puni command center sa audit, change-class i future-module contract slojem.',
    requiredEvidence: ['Repo scorecards', 'Change impact rules', 'Audit trail requirements', 'Policy drift monitors'],
    inheritedPolicies: ['Single source of truth', 'Policy inheritance is mandatory', 'No high-impact change without evidence'],
    impactSignal: 'Ako ovaj signal kasni, svi ostali domeni gube zajednički operativni jezik i izvršni pregled.',
    escalationLane: 'Executive weekly review',
    deliveryLane: 'stable',
  },
];

export const REPO_COMMAND_CENTER: CommandCenterItem[] = [
  {
    title: 'Cross-domain release evidence gap',
    status: 'blocked',
    owner: 'Program governance',
    focus: 'Formalizovati minimum proof po domenu pre live/professional claim-a.',
    whatBreaksIfSlips: 'Repo health summary ostaje optimističniji od stvarnog stanja i live odluke gube auditabilnost.',
    nextAction: 'Veži evidence matrix, domain operating signals i weekly review u jedan release board.',
  },
  {
    title: 'Capability unlock / demotion engine',
    status: 'held',
    owner: 'Technical leadership + release owner',
    focus: 'Jedinstvena promotion/demotion logika za sve capability nivoe.',
    whatBreaksIfSlips: 'Pilot/live/enterprise-ready statusi ostaju neujednačeni i rollback disciplina slabi.',
    nextAction: 'Objaviti rule-set koji vezuje pad signala sa automatskim povratkom na niži nivo.',
  },
  {
    title: 'Config + agent reinforced review',
    status: 'pilot',
    owner: 'Security owner',
    focus: 'Poseban review lane za CI, deploy, agent i config promene.',
    whatBreaksIfSlips: 'Automatizacija može promeniti release ili security posture bez dovoljnog ljudskog nadzora.',
    nextAction: 'Uskladiti change classes, approval chain i audit trail za sve config-change scenarije.',
  },
  {
    title: 'Future module onboarding contract',
    status: 'active',
    owner: 'Control tower owner',
    focus: 'Novi moduli moraju naslediti terminologiju, owner-e i minimum proof pre aktivacije.',
    whatBreaksIfSlips: 'Repo raste bez zajedničkog operating modela i dobija governance drift.',
    nextAction: 'Koristiti future-module contract kao obavezni ulaz za sve nove sekcije i rute.',
  },
];

export const BLOCKER_AGING_BOARD: BlockerAgingItem[] = [
  {
    label: 'Cross-domain release evidence',
    state: 'blocked',
    age: '12 dana',
    owner: 'Program governance',
    impact: 'Blokira ujednačene live/professional odluke za /games i /university.',
    nextReview: 'Sledeći executive weekly review',
  },
  {
    label: 'Capability demotion rules',
    state: 'held',
    age: '8 dana',
    owner: 'Release owner',
    impact: 'Rollback signal ne spušta domene automatski na validation/pilot model.',
    nextReview: 'Release discipline sync',
  },
  {
    label: 'Config-change impact standard',
    state: 'watch',
    age: '5 dana',
    owner: 'Security owner',
    impact: 'CI/agent/deploy promene nemaju još potpuno standardizovan minimum proof model.',
    nextReview: 'Security/compliance lane',
  },
];
