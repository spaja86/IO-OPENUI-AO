import type { FailureModeItem, RiskBoardItem, TrustSurfaceItem } from './types';

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
