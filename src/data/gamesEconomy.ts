export type AccessTier = 'fun' | 'professional';
export type TransactionType = 'license' | 'start' | 'bonus' | 'prize' | 'refund' | 'salary' | 'allowance';
export type ProPlayerStatus = 'candidate' | 'contracted' | 'independent' | 'suspended' | 'released';
export type EngagementModel = 'employee' | 'contractor' | 'esports-contractor';
export type ContractTier = 'development' | 'standard' | 'premium' | 'elite';

export interface BonusRule {
  id: string;
  title: string;
  amount: string;
  category: 'automatic' | 'reviewed';
  requiresVictory: boolean;
  note: string;
}

export interface MatchMetric {
  title: string;
  description: string;
  payoutMode: 'telemetry' | 'manual-review';
}

export interface PayoutSplit {
  label: string;
  value: string;
  note: string;
}

export interface GamePlanConfig {
  entry_fee_per_player: string;
  team_size: string;
  base_prize_pool: string;
  sponsor_boost?: string;
  bonus_reserve: string;
  operator_margin_reserve: string;
  victory_required_for_bonus: boolean;
}

export interface GamePlan {
  eligibility: string[];
  matchFormat: string;
  minimumPlayers: string;
  startFee: string;
  payouts: PayoutSplit[];
  bonusRules: BonusRule[];
  reviewedMetrics: MatchMetric[];
}

export interface GameCatalogEntry {
  id: string;
  title: string;
  status: 'pilot' | 'live';
  genre: string;
  licensePrice: string;
  funStartCredit: string;
  professionalStartCredit: string;
  summary: string;
  compliance: string;
  config: GamePlanConfig;
  gamePlan: GamePlan;
}

export interface WalletSnapshot {
  available: string;
  reserved: string;
  pendingPayout: string;
  lockedForReview: string;
}

export interface TransactionRecord {
  id: string;
  player: string;
  match: string;
  amount: string;
  type: TransactionType;
  pdf: string;
  email: string;
  status: string;
}

export interface LedgerEntry {
  title: string;
  amount: string;
  state: string;
  note: string;
}

export interface MatchLifecycleStep {
  id: string;
  title: string;
  detail: string;
}

export interface ComplianceRequirement {
  title: string;
  detail: string;
}

export interface AntiFraudRule {
  title: string;
  detail: string;
}

export interface AdminControl {
  title: string;
  detail: string;
}

export interface ProgramStatusDefinition {
  status: ProPlayerStatus;
  label: string;
  detail: string;
}

export interface ProgramSubsystem {
  title: string;
  detail: string;
  scope: string;
}

export interface LegalTrack {
  model: EngagementModel;
  label: string;
  salary: string;
  weeklyHours: string;
  requiredTraining: string;
  contractContents: string;
  vacation: string;
  monthlyDaysOff: string;
  addons: string;
  termination: string;
}

export interface RankFactor {
  title: string;
  weight: string;
  detail: string;
}

export interface WeeklyRankSnapshot {
  player: string;
  status: ProPlayerStatus;
  contractTier: ContractTier | 'none';
  game: string;
  globalRank: string;
  gameRank: string;
  movement: string;
  validHours: string;
  note: string;
}

export interface ContractTierPolicy {
  tier: ContractTier;
  label: string;
  baseSalary: string;
  weeklyHours: string;
  requiredTraining: string;
  vacation: string;
  monthlyDaysOff: string;
  addons: string[];
  autoReview: string;
}

export interface WorkRule {
  title: string;
  detail: string;
}

export interface CompensationRule {
  title: string;
  detail: string;
}

export interface BountyAntiAbuseRule {
  title: string;
  detail: string;
}

export interface BountyMatrixEntry {
  targetBand: string;
  hunterBand: string;
  baseBonus: string;
  rankUpBonus: string;
  multiplier: string;
  note: string;
}

export interface BountyEvent {
  id: string;
  hunter: string;
  target: string;
  trigger: string;
  payout: string;
  status: string;
  note: string;
}

export interface WeeklySettlement {
  player: string;
  contractStatus: string;
  salary: string;
  addons: string;
  bounty: string;
  penalties: string;
  net: string;
  decision: string;
}

export interface OperationalControl {
  title: string;
  detail: string;
  audit: string;
}

export const gamesCatalog: GameCatalogEntry[] = [
  {
    id: 'dota-pro-circuit',
    title: 'Dota Pro Circuit',
    status: 'pilot',
    genre: 'MOBA / skill competition',
    licensePrice: '24.000 RSD trajna licenca',
    funStartCredit: '0 RSD · test lobby',
    professionalStartCredit: '7.000 RSD po START-u',
    summary: 'Profesionalni timski mečevi sa START kreditom, pobedničkim fondom i bonus pravilima.',
    compliance: '18+ · ID verifikacija · KYC/AML · manual payout approval',
    config: {
      entry_fee_per_player: '7.000 RSD',
      team_size: '7 vs 7',
      base_prize_pool: '380.000 RSD',
      sponsor_boost: '300.000 RSD sponsor/promotional reserve',
      bonus_reserve: 'do 1.400.000 RSD za bonus događaje',
      operator_margin_reserve: '18.000 RSD + audit reserve',
      victory_required_for_bonus: true,
    },
    gamePlan: {
      eligibility: [
        'Samo profesionalni verifikovani igrači',
        'Ispod 18 godina: samo Fun/Test režim',
        'Aktivna trajna licenca i pozitivan wallet',
      ],
      matchFormat: 'Drafted 7v7 competitive session sa zaključavanjem rostera pre START-a.',
      minimumPlayers: '14 potvrđenih igrača',
      startFee: '7.000 RSD po igraču pri svakom START-u',
      payouts: [
        {
          label: 'Collected entry fees',
          value: '98.000 RSD',
          note: '14 igrača × 7.000 RSD',
        },
        {
          label: 'Winner base prize pool',
          value: '380.000 RSD',
          note: 'Uključuje sponsor/promotional boost i zaključani fond',
        },
        {
          label: 'Bonus reserve',
          value: 'Event-based',
          note: 'Pentakill / 6-kill / 7-kill samo uz pobedu i verifikaciju',
        },
      ],
      bonusRules: [
        {
          id: 'first-blood',
          title: 'Prvi ubija heroj / first blood',
          amount: '15.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Automatska telemetry validacija i payout tek po potvrdi pobede.',
        },
        {
          id: 'first-objective',
          title: 'Prvi objective',
          amount: '20.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Uključuje prvu kulu ili definisani neutral objective.',
        },
        {
          id: 'pentakill',
          title: 'Pentakill',
          amount: '100.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Mora se desiti u validnom kratkom borbenom intervalu.',
        },
        {
          id: 'six-kill',
          title: '6-kill streak',
          amount: '300.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Samo za verifikovane competitive modove sa potpunom telemetry evidencijom.',
        },
        {
          id: 'seven-kill',
          title: '7-kill streak',
          amount: '1.000.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Isplata ostaje pending dok audit ne potvrdi da nema collusion signala.',
        },
      ],
      reviewedMetrics: [
        {
          title: 'Support impact i communication',
          description: 'Timplay, vision, setup i komunikacione akcije ulaze u AI + ručni review.',
          payoutMode: 'manual-review',
        },
        {
          title: 'Space creation / sacrifice value',
          description: 'Namerni death za map pressure i objective tempo zahteva audit označavanje.',
          payoutMode: 'manual-review',
        },
        {
          title: 'Offlane pressure i initiation',
          description: 'Pritisak na mapi, tower push i uspešne inicijacije imaju poseban scoring model.',
          payoutMode: 'manual-review',
        },
      ],
    },
  },
  {
    id: 'io-chess-arena',
    title: 'IO Chess Arena',
    status: 'pilot',
    genre: 'Strategy / 1v1',
    licensePrice: '12.000 RSD trajna licenca',
    funStartCredit: '0 RSD · practice board',
    professionalStartCredit: '2.500 RSD po START-u',
    summary: 'Šah kao skill-based duel sa manjim fondovima, bržim verifikovanjem i PDF obračunom.',
    compliance: '18+ za Professional · anti-engine audit · dispute review',
    config: {
      entry_fee_per_player: '2.500 RSD',
      team_size: '1 vs 1',
      base_prize_pool: '8.000 RSD',
      bonus_reserve: '2.000 RSD',
      operator_margin_reserve: '1.000 RSD',
      victory_required_for_bonus: true,
    },
    gamePlan: {
      eligibility: [
        'Verified user sa licencom',
        'Bez engine assistance signala',
        'Professional mode samo za 18+',
      ],
      matchFormat: 'Bo1 rapid ili Bo3 championship bracket',
      minimumPlayers: '2 igrača',
      startFee: '2.500 RSD pri potvrdi meča',
      payouts: [
        { label: 'Winner payout', value: '8.000 RSD', note: 'Zaključano do result verification statusa' },
        { label: 'Operator reserve', value: '1.000 RSD', note: 'Compliance, PDF i payout ops' },
      ],
      bonusRules: [
        {
          id: 'perfect-win',
          title: 'Perfect win',
          amount: '2.000 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Bez izgubljene figure više vrednosti od pešaka.',
        },
      ],
      reviewedMetrics: [
        {
          title: 'Suspicious move audit',
          description: 'Payout se blokira dok engine similarity review ne bude završen.',
          payoutMode: 'manual-review',
        },
      ],
    },
  },
  {
    id: 'io-quiz-clash',
    title: 'IO Quiz Clash',
    status: 'live',
    genre: 'Knowledge / solo',
    licensePrice: '4.000 RSD trajna licenca',
    funStartCredit: '0 RSD · browser kviz',
    professionalStartCredit: '900 RSD po START-u',
    summary: 'Znanje kao competitive skill mode sa malim ulazom i trenutnim PDF potvrđivanjem.',
    compliance: '18+ za Professional · telemetry + proctoring light',
    config: {
      entry_fee_per_player: '900 RSD',
      team_size: 'Solo',
      base_prize_pool: '5.000 RSD',
      bonus_reserve: '1.500 RSD',
      operator_margin_reserve: '700 RSD',
      victory_required_for_bonus: true,
    },
    gamePlan: {
      eligibility: [
        'Licenca aktivna',
        'Knowledge score threshold ispunjen',
        'Professional mode samo za punoletne korisnike',
      ],
      matchFormat: 'Timed ranked solo run sa zaključanim pitanjima',
      minimumPlayers: '1 igrač po sesiji',
      startFee: '900 RSD pri START-u',
      payouts: [
        { label: 'Top verified score payout', value: '5.000 RSD', note: 'Daily competitive window' },
        { label: 'Speed bonus reserve', value: '1.500 RSD', note: 'Victory + anti-cheat clean session' },
      ],
      bonusRules: [
        {
          id: 'perfect-streak',
          title: 'Perfect streak',
          amount: '1.500 RSD',
          category: 'automatic',
          requiresVictory: true,
          note: 'Bez netačnog odgovora i unutar target vremena.',
        },
      ],
      reviewedMetrics: [
        {
          title: 'Answer pattern review',
          description: 'Sumnjivi obrasci i copy-assist ponašanje šalju sesiju u pending audit.',
          payoutMode: 'manual-review',
        },
      ],
    },
  },
];

export const walletSnapshot: WalletSnapshot = {
  available: '156.400 RSD',
  reserved: '14.000 RSD',
  pendingPayout: '380.000 RSD',
  lockedForReview: '100.000 RSD',
};

export const ledgerEntries: LedgerEntry[] = [
  {
    title: 'Trajne licence',
    amount: '+40.000 RSD',
    state: 'Settled',
    note: 'Jednokratna kupovina prava pristupa igrama na platformi.',
  },
  {
    title: 'START krediti',
    amount: '+112.000 RSD',
    state: 'Reserved',
    note: 'Sredstva zaključana do validacije rezultata ili refund događaja.',
  },
  {
    title: 'Pending payouts',
    amount: '-380.000 RSD',
    state: 'Awaiting winner verification',
    note: 'Pobednička ekipa i bonusi čekaju završni audit.',
  },
  {
    title: 'Weekly payroll reserve',
    amount: '-640.000 RSD',
    state: 'Scheduled after weekly close',
    note: 'Rezervisane osnovne plate za igrače pod aktivnim profesionalnim ugovorom.',
  },
  {
    title: 'Refund buffer',
    amount: '18.000 RSD',
    state: 'Protected',
    note: 'Rezerva za otkazan meč, nevalidan START ili tehnički prekid.',
  },
];

export const transactionHistory: TransactionRecord[] = [
  {
    id: 'TX-2026-0915-001',
    player: 'Team Captain A',
    match: 'Dota Pro Circuit / Match 208',
    amount: '7.000 RSD',
    type: 'start',
    pdf: 'PDF račun spreman',
    email: 'sent@pro-mail',
    status: 'Reserved for roster lock',
  },
  {
    id: 'TX-2026-0915-002',
    player: 'Player B',
    match: 'IO Chess Arena / Match 441',
    amount: '12.000 RSD',
    type: 'license',
    pdf: 'PDF račun spreman',
    email: 'sent@pro-mail',
    status: 'Settled',
  },
  {
    id: 'TX-2026-0915-003',
    player: 'Carry MVP',
    match: 'Dota Pro Circuit / Match 208',
    amount: '100.000 RSD',
    type: 'bonus',
    pdf: 'PDF obračun pending',
    email: 'queued@pro-mail',
    status: 'Audit review in progress',
  },
  {
    id: 'TX-2026-0915-004',
    player: 'Winning Team',
    match: 'Dota Pro Circuit / Match 208',
    amount: '380.000 RSD',
    type: 'prize',
    pdf: 'PDF fond obračun generisan',
    email: 'ready@pro-mail',
    status: 'Awaiting result verification',
  },
  {
    id: 'TX-2026-0915-005',
    player: 'Quiz Pro User',
    match: 'IO Quiz Clash / Session 99',
    amount: '900 RSD',
    type: 'refund',
    pdf: 'PDF refund potvrda',
    email: 'sent@pro-mail',
    status: 'Settled after invalid session',
  },
  {
    id: 'TX-2026-0915-006',
    player: 'Captain Nova',
    match: 'Professional weekly payroll / Cycle W37',
    amount: '180.000 RSD',
    type: 'salary',
    pdf: 'PDF payroll obračun spreman',
    email: 'sent@pro-mail',
    status: 'Queued after compliance close',
  },
  {
    id: 'TX-2026-0915-007',
    player: 'Rising Hunter',
    match: 'Weekly Bounty Program / Cycle W37',
    amount: '48.000 RSD',
    type: 'allowance',
    pdf: 'PDF bounty settlement spreman',
    email: 'queued@pro-mail',
    status: 'Telemetry and anti-collusion verified',
  },
];

export const lifecycleSteps: MatchLifecycleStep[] = [
  { id: 'license', title: 'License owned', detail: 'Igrač ima trajnu licencu za naslov i mod.' },
  { id: 'eligible', title: 'Player eligible', detail: 'Godine, KYC, znanje i anti-fraud check prolaze.' },
  { id: 'paid', title: 'START paid', detail: 'Wallet rezerviše START kredit pre roster lock-a.' },
  { id: 'roster', title: 'Roster locked', detail: 'Sastav tima se zaključava i transakcije se vežu za match ID.' },
  { id: 'started', title: 'Match started', detail: 'Tek tada se START smatra aktivnim i telemetry počinje.' },
  { id: 'result', title: 'Result submitted', detail: 'Statistika i rezultat se šalju u scoring pipeline.' },
  { id: 'verified', title: 'Result verified', detail: 'Anti-fraud i audit potvrđuju ispravnost pobede i bonusa.' },
  { id: 'payouts', title: 'Payouts generated', detail: 'Ledger formira prize, bonus ili refund zapise.' },
  { id: 'pdf', title: 'PDFs sent', detail: 'Računi i obračuni odlaze na profesionalni email.' },
];

export const complianceRequirements: ComplianceRequirement[] = [
  {
    title: '18+ za Professional zonu',
    detail: 'Maloletni korisnici mogu samo u Fun/Test modu; nema real-money START-a ni payout-a.',
  },
  {
    title: 'Identity + age verification',
    detail: 'Pre prve profesionalne licence mora postojati verifikacija identiteta i starosti.',
  },
  {
    title: 'KYC / AML i teritorijalna pravila',
    detail: 'Wallet, payout i sponsor fondovi zahtevaju regulatorni pregled po državi.',
  },
  {
    title: 'Skill competition legal review',
    detail: 'Professional mod ne ide live bez potvrde da format nije nedozvoljeni gambling proizvod.',
  },
  {
    title: 'Fiscal PDF archive',
    detail: 'Svaka uplata, bonus, nagrada i refund imaju PDF i audit trail.',
  },
];

export const antiFraudRules: AntiFraudRule[] = [
  {
    title: 'Multi-account detection',
    detail: 'Jedan igrač ne može aktivirati više naloga u istom competitive window-u.',
  },
  {
    title: 'Collusion detection',
    detail: 'Neprirodni pattern-i u meču automatski zamrzavaju payout dok audit traje.',
  },
  {
    title: 'Suspicious match review',
    detail: 'Visoki bonusi i neuobičajene akcije idu u obavezni ručni pregled.',
  },
  {
    title: 'Cooldown posle spora',
    detail: 'Disputed mečevi stavljaju naloge u privremeni restricted state.',
  },
  {
    title: 'Manual override',
    detail: 'Operater može korigovati scoring i payout uz potpun audit zapis.',
  },
];

export const adminControls: AdminControl[] = [
  {
    title: 'Game Plan Creator',
    detail: 'Administratori definišu cenu licence, START kredit i bonus matricu po igri.',
  },
  {
    title: 'Prize pool controls',
    detail: 'Podešavanje koliko ide u fond, bonus reserve, refund buffer i operator ops.',
  },
  {
    title: 'Dispute desk',
    detail: 'Pregled sporova, telemetry snimaka, AI scoring i ručno odobrenje isplate.',
  },
  {
    title: 'PDF + email audit',
    detail: 'Praćenje generisanih PDF-ova i uspešnosti slanja na profesionalne email adrese.',
  },
];

export const proPlayerStatuses: ProgramStatusDefinition[] = [
  {
    status: 'candidate',
    label: 'Kandidat',
    detail: 'Igrač je ušao u Professional pipeline, ali još nema aktivan ugovor niti odobren puni payout režim.',
  },
  {
    status: 'contracted',
    label: 'Aktivan pod ugovorom',
    detail: 'Igrač prima osnovnu platu, ima definisane sate, KPI pragove i ulazi u nedeljni settlement ciklus.',
  },
  {
    status: 'independent',
    label: 'Aktivan bez ugovora',
    detail: 'Igrač može igrati ranked professional mečeve i skupljati bounty/premijume bez fiksne plate.',
  },
  {
    status: 'suspended',
    label: 'Suspendovan',
    detail: 'Payout i napredovanje su privremeno blokirani zbog spora, discipline ili anti-fraud pregleda.',
  },
  {
    status: 'released',
    label: 'Ispao iz programa',
    detail: 'Igrač više nema profesionalni status dok ponovo ne ispuni uslove za prijem i review.',
  },
];

export const programSubsystems: ProgramSubsystem[] = [
  {
    title: 'Pro Player Contracts',
    detail: 'Upravlja pravnim statusom, osnovnom platom, obaveznim satima, odmorima, KPI pragovima i nedeljnim review-em.',
    scope: 'Professional only',
  },
  {
    title: 'Weekly Bounty Program',
    detail: 'Nagrađuje pobede nad prvih 10.000 rangiranih igrača i rank-up proboje uz jasno definisan bonus model.',
    scope: 'Professional ranked matches',
  },
];

export const legalTracks: LegalTrack[] = [
  {
    model: 'employee',
    label: 'Zaposleni profesionalni igrač',
    salary: 'Fiksna plata + nedeljni premijumi',
    weeklyHours: '40h minimum',
    requiredTraining: '5 timskih treninga + 2 individualna review bloka',
    contractContents: 'Opis radnog mesta, KPI, roster obaveze, NDA, IP, disciplinska pravila',
    vacation: '20 radnih dana godišnje',
    monthlyDaysOff: '2 unapred odobrena slobodna dana',
    addons: 'Kapitenski dodatak, MVP dodatak, promo/stream dodatak',
    termination: 'Automatski review ako padnu rank, disciplina, attendance ili validni sati ispod praga',
  },
  {
    model: 'contractor',
    label: 'Honorarni saradnik',
    salary: 'Fiksni mesečni honorar + performance bonus',
    weeklyHours: '24h minimum',
    requiredTraining: '3 timska treninga + 1 coaching blok',
    contractContents: 'Statement of work, deliverables, availability SLA, payout schedule',
    vacation: 'Neplaćeno odsustvo po odobrenju',
    monthlyDaysOff: '2 slobodna dana uz najavu',
    addons: 'Turnirski bonus, promocija brenda, timski učinak',
    termination: 'Automatski izlaz iz ugovora ako dva uzastopna weekly review-a padnu ispod minimalnog score-a',
  },
  {
    model: 'esports-contractor',
    label: 'Esport ugovorni saradnik',
    salary: 'Osnovni retainer + bounty/premijum share',
    weeklyHours: '30h minimum',
    requiredTraining: '4 trening sesije + obavezni ranked blokovi',
    contractContents: 'Ekskluzivnost po naslovu, roster prava, content obaveze, audit i sponsor klauzule',
    vacation: '15 dana godišnje po kalendaru sezone',
    monthlyDaysOff: '1-2 dana van turnirskog prozora',
    addons: 'Elite rank dodatak, brand campaign dodatak, kapiten/MVP dodatak',
    termination: 'Automatska reevaluacija i moguće isključenje iz ugovorne obaveze pri padu KPI ili antifraud statusa',
  },
];

export const rankFactors: RankFactor[] = [
  { title: 'Rezultat mečeva', weight: '35%', detail: 'Pobede, win-streak i rezultat u relevantnom ranked ili turnirskom window-u.' },
  { title: 'Kvalitet protivnika', weight: '20%', detail: 'Više bodova nose pobede nad jačim protivnicima i top 10.000 igračima.' },
  { title: 'Individualni učinak', weight: '20%', detail: 'Role-based scoring, objective impact, consistency i potvrđeni performance KPI.' },
  { title: 'Disciplina', weight: '10%', detail: 'Bez sporova, report abuse-a, kašnjenja, neodobrenih izostanaka i roster prekršaja.' },
  { title: 'Validni sati treninga', weight: '10%', detail: 'Računaju se samo odobreni i telemetry-potvrđeni sati rada/treninga.' },
  { title: 'Anti-fraud status', weight: '5%', detail: 'Otvoreni review, collusion signal ili spor umanjuju score ili blokiraju plasman.' },
];

export const weeklyRankSnapshots: WeeklyRankSnapshot[] = [
  {
    player: 'Captain Nova',
    status: 'contracted',
    contractTier: 'elite',
    game: 'Dota Pro Circuit',
    globalRank: '#12',
    gameRank: '#4',
    movement: '+3',
    validHours: '42h',
    note: 'Zadržava ugovor i otključava elite payroll + captain addon.',
  },
  {
    player: 'Rising Hunter',
    status: 'independent',
    contractTier: 'none',
    game: 'IO Quiz Clash',
    globalRank: '#248',
    gameRank: '#19',
    movement: '+41',
    validHours: '26h',
    note: 'Aktivan bez ugovora, ali ulazi u fast-track review zbog jakog rasta.',
  },
  {
    player: 'Midlane Echo',
    status: 'contracted',
    contractTier: 'premium',
    game: 'Dota Pro Circuit',
    globalRank: '#390',
    gameRank: '#48',
    movement: '-27',
    validHours: '31h',
    note: 'Ulazi u probation jer su attendance i rank pali ispod premium praga.',
  },
  {
    player: 'Rook Analyst',
    status: 'candidate',
    contractTier: 'development',
    game: 'IO Chess Arena',
    globalRank: '#1.140',
    gameRank: '#86',
    movement: '+88',
    validHours: '20h',
    note: 'Kandidat za razvojni ugovor nakon narednog weekly close-a.',
  },
  {
    player: 'Shadow Pause',
    status: 'suspended',
    contractTier: 'standard',
    game: 'Dota Pro Circuit',
    globalRank: '#915',
    gameRank: '#111',
    movement: '—',
    validHours: '18h',
    note: 'Suspendovan zbog otvorenog collusion review-a i zamrznutih bounty isplata.',
  },
];

export const contractTierPolicies: ContractTierPolicy[] = [
  {
    tier: 'development',
    label: 'Razvojni',
    baseSalary: '60.000 RSD / nedeljni obračun',
    weeklyHours: '18h minimum',
    requiredTraining: '2 timska + 2 individualna bloka',
    vacation: '8 dana godišnje proporcionalno sezoni',
    monthlyDaysOff: '1 odobren dan',
    addons: ['Rookie progress bonus', 'Coach evaluation bonus'],
    autoReview: 'Ispadanje ako dva puta zaredom nema minimalnih sati ili rank padne ispod ulaznog praga.',
  },
  {
    tier: 'standard',
    label: 'Standardni',
    baseSalary: '95.000 RSD / nedeljni obračun',
    weeklyHours: '24h minimum',
    requiredTraining: '3 timska + 2 ranked review bloka',
    vacation: '12 dana godišnje',
    monthlyDaysOff: '2 odobrena dana',
    addons: ['Team contribution bonus', 'Discipline bonus'],
    autoReview: 'Prelazak u development ili probation ako attendance ili performance score padnu ispod standard praga.',
  },
  {
    tier: 'premium',
    label: 'Premium',
    baseSalary: '140.000 RSD / nedeljni obračun',
    weeklyHours: '32h minimum',
    requiredTraining: '4 timska + 2 coaching bloka',
    vacation: '16 dana godišnje',
    monthlyDaysOff: '2 odobrena dana',
    addons: ['MVP bonus', 'Promotion/stream bonus', 'Captain support bonus'],
    autoReview: 'Probation ili downgrade ako dva KPI segmenta padnu ispod premium target-a.',
  },
  {
    tier: 'elite',
    label: 'Elite',
    baseSalary: '180.000 RSD / nedeljni obračun',
    weeklyHours: '40h minimum',
    requiredTraining: '5 timskih + 2 analyst review bloka',
    vacation: '20 dana godišnje',
    monthlyDaysOff: '2 odobrena dana van ključnog competitive window-a',
    addons: ['Elite rank premium', 'Captain addon', 'Sponsor activation bonus'],
    autoReview: 'Automatski executive review pri ozbiljnom padu globalnog ranga, discipline ili anti-fraud statusa.',
  },
];

export const workRules: WorkRule[] = [
  { title: 'Tipovi sati', detail: 'Sati se odvajaju na trening, ranked mečeve, timske pripreme, coaching i promotivne aktivnosti.' },
  { title: 'Weekly minimum', detail: 'Minimum važi samo za validne i telemetry-potvrđene sate; ručni unos bez odobrenja se ne računa.' },
  { title: 'Odobreni odmori', detail: 'Mesečni slobodni dani i godišnji odmor ne ruše status samo ako su unapred odobreni i evidentirani.' },
  { title: 'Neodobrena neaktivnost', detail: 'Bez odobrenja direktno obara attendance score i može pokrenuti downgrade, probation ili izlaz iz ugovora.' },
];

export const compensationRules: CompensationRule[] = [
  { title: 'Osnovna plata', detail: 'Plaća se samo profesionalcima sa aktivnim ugovorom nakon zaključavanja nedeljnog rank snapshot-a.' },
  { title: 'Nedeljni premijumi', detail: 'Računaju se iz rank tier-a, pobeda, turnirskog učinka i unapred definisanih specijalnih ciljeva.' },
  { title: 'Dodaci', detail: 'Mogu biti za kapitena, MVP status, disciplinu, stream/promociju i dokazani timski doprinos.' },
  { title: 'Audit trag', detail: 'Svaki bonus i dodatak dobija razlog isplate, izvor podataka i PDF/ledger zapis pre slanja na payout.' },
];

export const bountyMatrix: BountyMatrixEntry[] = [
  {
    targetBand: 'Rank #5.001 - #10.000',
    hunterBand: 'Bilo koji rank iz top 10.000',
    baseBonus: '12.000 RSD',
    rankUpBonus: '6.000 RSD',
    multiplier: '1.0x',
    note: 'Ulazni bounty nivo za validne professional ranked pobede ili prelazak nivoa.',
  },
  {
    targetBand: 'Rank #1.001 - #5.000',
    hunterBand: 'Niži ili sličan rank',
    baseBonus: '24.000 RSD',
    rankUpBonus: '12.000 RSD',
    multiplier: '1.3x ako je hunter 500+ mesta niže',
    note: 'Underdog pobede nose pojačanje i dodatni review za autentičnost meča.',
  },
  {
    targetBand: 'Rank #101 - #1.000',
    hunterBand: 'Rank #1.001 - #10.000',
    baseBonus: '48.000 RSD',
    rankUpBonus: '20.000 RSD',
    multiplier: '1.6x',
    note: 'Veliki skok protiv višeg tier-a otključava premium bounty lane.',
  },
  {
    targetBand: 'Rank #11 - #100',
    hunterBand: 'Rank #101 - #10.000',
    baseBonus: '96.000 RSD',
    rankUpBonus: '45.000 RSD',
    multiplier: '2.0x',
    note: 'Isplata ide tek posle anti-collusion pregleda i nedeljnog close-a.',
  },
  {
    targetBand: 'Top 10 elite',
    hunterBand: 'Samo verified high-tier hunter',
    baseBonus: '120.000 RSD+',
    rankUpBonus: '60.000 RSD+',
    multiplier: 'Dinamički premium multiplier',
    note: 'Otvoren premium nivo bez tvrdog plafona, uz ručni executive audit.',
  },
];

export const antiAbuseBountyRules: BountyAntiAbuseRule[] = [
  { title: 'Validan meč je obavezan', detail: 'Bez telemetry potvrde, anti-collusion check-a i zatvorenog dispute window-a nema bounty isplate.' },
  { title: 'Alt-account i collusion zabrana', detail: 'Farmovanje poznatih naloga, namešteni mečevi i povezani računi blokiraju payout i status.' },
  { title: 'Cooldown parova', detail: 'Isti par igrača ima cooldown period pre ponovnog bounty priznanja da bi se sprečilo farmovanje.' },
  { title: 'Ručno zamrzavanje', detail: 'Sumnjivi događaji idu u manual review i settlement ostaje zamrznut do završetka audita.' },
];

export const recentBountyEvents: BountyEvent[] = [
  {
    id: 'bounty-w37-001',
    hunter: 'Rising Hunter',
    target: 'Top-900 Quiz Pro',
    trigger: 'Pobeda + prelazak target tier-a',
    payout: '48.000 RSD',
    status: 'Approved',
    note: 'Potvrđen underdog scenario i čist anti-fraud signal.',
  },
  {
    id: 'bounty-w37-002',
    hunter: 'Captain Nova',
    target: 'Top-25 Dota carry',
    trigger: 'Match victory over higher-ranked target',
    payout: '120.000 RSD+',
    status: 'Executive review',
    note: 'Premium bounty lane bez hard cap-a, čeka finalni weekly close.',
  },
  {
    id: 'bounty-w37-003',
    hunter: 'Shadow Pause',
    target: 'Top-500 Dota support',
    trigger: 'Ranked win claim',
    payout: '0 RSD',
    status: 'Frozen',
    note: 'Otvoren collusion review i suspendovan contract status.',
  },
];

export const weeklySettlements: WeeklySettlement[] = [
  {
    player: 'Captain Nova',
    contractStatus: 'Elite contract active',
    salary: '180.000 RSD',
    addons: '32.000 RSD captain + discipline',
    bounty: '120.000 RSD+ pending close',
    penalties: '0 RSD',
    net: '332.000 RSD+',
    decision: 'Ostaje elite',
  },
  {
    player: 'Midlane Echo',
    contractStatus: 'Premium contract under review',
    salary: '140.000 RSD',
    addons: '10.000 RSD team contribution',
    bounty: '0 RSD',
    penalties: '-20.000 RSD attendance correction',
    net: '130.000 RSD',
    decision: 'Probation / mogući downgrade',
  },
  {
    player: 'Rising Hunter',
    contractStatus: 'Independent professional',
    salary: '0 RSD',
    addons: '0 RSD',
    bounty: '48.000 RSD',
    penalties: '0 RSD',
    net: '48.000 RSD',
    decision: 'Kandidat za development contract',
  },
  {
    player: 'Shadow Pause',
    contractStatus: 'Standard contract suspended',
    salary: '0 RSD',
    addons: '0 RSD',
    bounty: '0 RSD',
    penalties: 'Frozen pending dispute',
    net: '0 RSD',
    decision: 'Suspendovan do završetka review-a',
  },
];

export const operationalControls: OperationalControl[] = [
  {
    title: 'Contracts & status panel',
    detail: 'Promena tier-a, statusa, probation zastavica i razloga izlaska iz ugovora.',
    audit: 'Svaka promena čuva reviewer-a, razlog i vreme izmene.',
  },
  {
    title: 'Worklog & leave approval',
    detail: 'Potvrda sati, godišnjeg odmora, mesečnih slobodnih dana i neodobrenih izostanaka.',
    audit: 'Audit trag povezuje odobrenje sa weekly ranking obračunom.',
  },
  {
    title: 'Bounty disputes desk',
    detail: 'Pregled bounty događaja, cooldown provera, frozen payout-ova i dispute slučajeva.',
    audit: 'Ručno odmrzavanje zahteva obaveznu belešku i prateći dokaz.',
  },
  {
    title: 'Weekly settlement close',
    detail: 'Zaključavanje rankinga, obračun plata, dodataka, bounty bonusa, kazni i PDF izveštaja.',
    audit: 'Close operacija ostavlja kompletan settlement snapshot po igraču.',
  },
];
