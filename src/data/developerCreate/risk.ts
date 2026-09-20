import type { DemotionRule, DomainRiskLens, FailureModeItem, RiskBoardItem, TrustSurfaceItem } from './types';

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

export const FAILURE_MODE_BOARD: FailureModeItem[] = [
  {
    mode: 'Readiness inflation',
    breaks: 'Domen izgleda spremnije nego što dokazi podržavaju.',
    earlySignal: 'Live ili enterprise claim bez evidence paketa.',
    response: 'Spustiti capability nivo i zaključati missing proof pre daljeg rada.',
  },
  {
    mode: 'Cross-domain dependency drift',
    breaks: 'Jedan modul menja pravila i ne usklađuje se sa zavisnim domenima.',
    earlySignal: 'Dependency map i scorecard više ne pokazuju isti blokerski signal.',
    response: 'Pokrenuti impact review i vratiti domene na zajednički standard.',
  },
  {
    mode: 'Ownership vacuum',
    breaks: 'Odluke se gomilaju bez jasnog owner-a ili approver-a.',
    earlySignal: 'Decision log stoji u held/blocked stanju bez sledećeg poteza.',
    response: 'Aktivirati escalation lane i dopuniti ownership handoff.',
  },
  {
    mode: 'Rollback theater',
    breaks: 'Rollback postoji samo kao claim bez vežbanog recovery puta.',
    earlySignal: 'Release score raste, a rollback confidence ostaje nizak.',
    response: 'Zaustaviti promotion dok rollback signal ne bude verifikovan.',
  },
  {
    mode: 'Automation overreach',
    breaks: 'Agent ili automation tok dobija veći operativni domet od dozvoljenog.',
    earlySignal: 'Config/agent promena nema reinforced review ili human escalation dokaz.',
    response: 'Vratiti capability u controlled/sandbox lane dok se ne zaključa scope izolacija.',
  },
  {
    mode: 'Config drift under delivery pressure',
    breaks: 'CI/deploy/policy promena ulazi bez istog evidence i rollback modela kao code change.',
    earlySignal: 'Impact review nedostaje, a release ili security posture se ipak menja.',
    response: 'Blokirati promotion i vratiti config-change u reinforced review lane.',
  },
  {
    mode: 'Release shortcut claim',
    breaks: 'Domen tvrdi readiness uprkos otvorenim blockerima ili nekompletnom evidence paketu.',
    earlySignal: 'Status badge je green, a blocker aging ili decision log ostaju held/blocked.',
    response: 'Automatski spustiti signal na pilot/validation i otvoriti executive review.',
  },
];

export const TRUST_SURFACE_MAP: TrustSurfaceItem[] = [
  {
    surface: 'Games professional activation',
    promise: 'Professional mogućnosti ne idu live bez fairness, compliance i monitoring dokaza.',
    proof: 'Readiness gate + compliance evidence + rollback signali po naslovu.',
  },
  {
    surface: 'SPAJAPRO automation',
    promise: 'Agent execution radi pod policy enforcement i human-review guardrail-ovima.',
    proof: 'AI governance model + release approvals + audit trace.',
  },
  {
    surface: 'University certification',
    promise: 'Knowledge proof i work-readiness ostaju dokazivi i region-aware.',
    proof: 'Certification evidence + region readiness + progression integrity signal.',
  },
  {
    surface: 'Developer & Create control tower',
    promise: 'Repo-wide standardi i odluke ostaju konzistentni kroz sve module.',
    proof: 'Canonical vocabulary + policy inheritance + decision memory.',
  },
];

export const DOMAIN_RISK_LENSES: DomainRiskLens[] = [
  {
    domain: '/games',
    topRisk: 'Readiness inflation na professional/live claim-ovima bez dovoljno cross-domain evidence-a.',
    severity: 'critical',
    tripwire: 'Compliance ili rollback dokaz ostane partial dok status pokušava da ide ka live.',
    response: 'Spustiti capability na pilot i zatvoriti release evidence gap pre nove odluke.',
  },
  {
    domain: '/spajapro',
    topRisk: 'Automation ili connector promena menja policy posture drugih domena bez reinforced review-a.',
    severity: 'high',
    tripwire: 'Agent/config change ulazi bez audit traga ili security potvrde.',
    response: 'Zaustaviti rollout i vratiti promenu u config/automation review lane.',
  },
  {
    domain: '/university',
    topRisk: 'Certification i readiness claim nisu potpuno sinhronizovani sa centralnim scoring modelom.',
    severity: 'high',
    tripwire: 'Knowledge proof i region readiness više ne podržavaju isti maturity status.',
    response: 'Zadržati capability u validation/pilot zoni dok se dokazi ne poravnaju.',
  },
  {
    domain: '/developer-create',
    topRisk: 'Repo-level pravila se šire sporije od novih modula, što uvodi governance drift.',
    severity: 'high',
    tripwire: 'Novi modul ili change class se pojavljuje bez inheritance, audit i KPI veze.',
    response: 'Aktivirati command center blocker i zaustaviti širenje dok contract sloj ne bude primenjen.',
  },
];

export const DEMOTION_ENGINE_RULES: DemotionRule[] = [
  {
    from: 'live',
    to: 'pilot',
    trigger: 'Hard gate padne, evidence oslabi ili monitoring pokaže ozbiljno odstupanje.',
    proofToRecover: 'Treba ponovo zatvoriti gate-ove, rollback signal i decision review.',
  },
  {
    from: 'pilot',
    to: 'validation',
    trigger: 'Rollback plan nije održiv ili blocker aging probije SLA bez jasne odluke.',
    proofToRecover: 'Validation dokaz, novi owner commitments i stabilizovan dependency signal.',
  },
  {
    from: 'enterprise-ready',
    to: 'live',
    trigger: 'Policy inheritance, audit ili SLA trend više nisu stabilni kroz cikluse.',
    proofToRecover: 'Više uzastopnih green review ciklusa sa kompletnim audit tragom.',
  },
];
