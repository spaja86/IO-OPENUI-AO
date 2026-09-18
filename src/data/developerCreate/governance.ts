import type {
  ControlTowerApiShape,
  ContributorGuideStep,
  DecisionLogEntry,
  EscalationTrigger,
  EvidenceMatrixItem,
  GovernancePolicySection,
  GovernanceRule,
  PolicyInheritanceRule,
  QualityContract,
  StandardTemplate,
} from './types';

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

export const REPOSITORY_GOVERNANCE_RULES: GovernanceRule[] = [
  {
    title: 'No live without evidence',
    policy: 'Nijedan modul ili capability ne ide live bez jasnog evidence paketa i green gate-ova.',
    enforcement: 'Blokirati promotion dok decision log, monitoring i rollback dokaz nisu prisutni.',
  },
  {
    title: 'Every change maps to an owner set',
    policy: 'Svaka veća promena mora imati owner-a, reviewer-a i approver-a.',
    enforcement: 'Change impact i evidence matrix ostaju nepotpuni bez ownership trijade.',
  },
  {
    title: 'Canonical vocabulary first',
    policy: 'Readiness termini moraju biti isti kroz sve domene i stranice.',
    enforcement: 'Content review vraća promenu ako terminologija izlazi iz standardnog jezika.',
  },
  {
    title: 'Policy inheritance is mandatory',
    policy: 'Cross-domain moduli nasledjuju centralna pravila iz Developer & Create control tower-a.',
    enforcement: 'Svaki domen mora dokazati gde primenjuje repo-level policy i gate-ove.',
  },
  {
    title: 'Config and agent changes require reinforced review',
    policy: 'Promene u CI/deploy/agent konfiguraciji moraju imati pojačan review signal i evidence.',
    enforcement: 'Bez owner/reviewer/approver potpisa, impact mape i audit traga promena ostaje blokirana.',
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
  {
    title: 'Template: risk review',
    sections: ['Risk category', 'Severity', 'Signal', 'Mitigation', 'Escalation', 'Recheck criteria'],
  },
  {
    title: 'Template: ownership handoff',
    sections: ['Context', 'Current owner', 'Incoming owner', 'Open blockers', 'Evidence pack', 'Approval'],
  },
];

export const EVIDENCE_MATRIX: EvidenceMatrixItem[] = [
  {
    asset: 'Nova ruta / stranica',
    evidence: 'North Star veza, scope, owner-i, readiness i known limitations.',
    reviewer: 'Domain lead + content reviewer',
    approvalGate: 'Definition of Ready',
  },
  {
    asset: 'Cross-domain feature',
    evidence: 'Dependency map, impact map, policy inheritance i rollback dokaz.',
    reviewer: 'Platform lead + governance owner',
    approvalGate: 'Release gate',
  },
  {
    asset: 'Professional activation',
    evidence: 'Compliance paket, trust signal, audit trail i monitoring.',
    reviewer: 'Security/compliance board',
    approvalGate: 'No live without evidence',
  },
  {
    asset: 'Agent automation change',
    evidence: 'Guardrails, human escalation pravilo i scope izolacija.',
    reviewer: 'Security owner + program governance',
    approvalGate: 'AI governance review',
  },
];

export const DECISION_MEMORY: DecisionLogEntry[] = [
  {
    area: 'Canonical vocabulary rollout',
    state: 'approved',
    reason: 'Repo treba jedan operativni jezik pre daljeg širenja domena.',
    nextMove: 'Preslikati termine na dashboard, templates i future content.',
  },
  {
    area: 'Evidence-first release discipline',
    state: 'approved',
    reason: 'Live claims bez dokaza ruše trust sloj i governance model.',
    nextMove: 'Koristiti evidence matrix u svim readiness i release pregledima.',
  },
  {
    area: 'Cross-module consistency checks',
    state: 'held',
    reason: 'Potrebna je puna mapa gde se repo-level termini pojavljuju u drugim domenima.',
    nextMove: 'Dodati verification checklist za buduće content i route promene.',
  },
  {
    area: 'Enterprise expansion',
    state: 'blocked',
    reason: 'Capability registry i failure-mode dokaz moraju biti kompletirani.',
    nextMove: 'Zaključati unlock/demotion model i critical-path pregled.',
  },
];

export const CONTRIBUTOR_OPERATING_GUIDE: ContributorGuideStep[] = [
  {
    step: 'Mapiraj promenu na domen i capability nivo.',
    owner: 'Creator / Product owner',
    output: 'Jasan scope, maturity cilj i povezanost sa control tower-om.',
  },
  {
    step: 'Popuni standard template i quality contract.',
    owner: 'Engineer / Content lead',
    output: 'Dokazana readiness, ownership i evidence očekivanja.',
  },
  {
    step: 'Prođi dependency, impact i risk mapu.',
    owner: 'Technical lead / Reviewer',
    output: 'Poznati blocker-i, mitigacije i cross-domain efekti.',
  },
  {
    step: 'Zaključaj review i escalation lane.',
    owner: 'Program governance / Security owner',
    output: 'Human-review i approval chain su spremni pre release odluke.',
  },
];

export const POLICY_INHERITANCE_MODEL: PolicyInheritanceRule[] = [
  {
    source: 'Canonical vocabulary',
    inheritsTo: ['/games', '/spajapro', '/university'],
    invariant: 'Readiness, blocker i decision termini ostaju isti kroz sve module.',
  },
  {
    source: 'No live without evidence',
    inheritsTo: ['/games', '/spajapro', '/university'],
    invariant: 'Live status traži evidence paket bez obzira na domen.',
  },
  {
    source: 'Ownership trijada',
    inheritsTo: ['/games', '/spajapro', '/university', 'future modules'],
    invariant: 'Owner, reviewer i approver su obavezni za svaku veću promenu.',
  },
];

export const HUMAN_REVIEW_ESCALATION: EscalationTrigger[] = [
  {
    trigger: 'Promena utiče na release, security ili governance claim.',
    agentLimit: 'Agent ne zatvara odluku samostalno.',
    humanAction: 'Traži se eksplicitna ljudska potvrda pre promocije ili merge odluke.',
  },
  {
    trigger: 'Critical risk ili policy block signal.',
    agentLimit: 'Automatizacija može samo da zaustavi tok i ostavi audit trag.',
    humanAction: 'Security/compliance owner odlučuje o unblock ili rollback putanji.',
  },
  {
    trigger: 'Cross-module degradacija ili konfliktni readiness signal.',
    agentLimit: 'Agent ne može prioritetizovati jedan domen na štetu drugog bez odluke.',
    humanAction: 'Program governance vodi finalnu trade-off odluku.',
  },
];

export const DECISION_SLA_MODEL = [
  {
    state: 'blocked',
    closeWithin: '48h',
    owner: 'Program governance',
    escalation: 'Automatski ide na executive weekly review ako rok probije SLA.',
  },
  {
    state: 'held',
    closeWithin: '5 radnih dana',
    owner: 'Domain lead',
    escalation: 'Ako nema sledeće odluke, uključuje se security/compliance owner.',
  },
  {
    state: 'approved',
    closeWithin: '24h za evidenciju',
    owner: 'Reviewer lane',
    escalation: 'Ako audit trag nije kompletan, approval se vraća u held.',
  },
];

export const POLICY_DRIFT_MONITOR = [
  {
    area: 'Terminology drift',
    check: 'Readiness, blocker i decision termini ostaju isti kroz sve rute.',
    reaction: 'Content freeze dok canonical vocabulary odstupanja ne budu uklonjena.',
  },
  {
    area: 'Gate drift',
    check: 'DoR/DoD/QA/Security/Release/Rollback lanac ostaje potpun po promeni.',
    reaction: 'Promena se blokira dok missing gate dokaz ne bude vraćen.',
  },
  {
    area: 'Ownership drift',
    check: 'Svaka high-impact promena ima owner/reviewer/approver trijadu.',
    reaction: 'Escalation i rollback readiness review postaju obavezni.',
  },
];

export const STRATEGIC_AUDIT_TRAIL_REQUIREMENTS = [
  'Svaka strateška odluka mora imati area, razlog, owner lane i sledeći potez.',
  'Svaka high-impact promena mora imati impact map, evidence paket i approval chain trag.',
  'Config i agent promene moraju sadržati policy check i security/compliance potvrdu.',
  'Decision log mora biti ažuriran u istom ciklusu kada se menja readiness status.',
];

export const CONTROL_TOWER_API_MODEL: ControlTowerApiShape[] = [
  {
    object: 'domainScorecard',
    fields: ['domain', 'status', 'trend', 'scores', 'nextUnlock', 'dependencies'],
    usage: 'Napaja future dashboard, admin pogled ili automation summary.',
  },
  {
    object: 'decisionMemory',
    fields: ['area', 'state', 'reason', 'nextMove'],
    usage: 'Čuva istoriju odobrenih, blokiranih i zadržanih odluka.',
  },
  {
    object: 'evidenceMatrix',
    fields: ['asset', 'evidence', 'reviewer', 'approvalGate'],
    usage: 'Standardizuje koji dokaz je potreban po tipu promene.',
  },
];
