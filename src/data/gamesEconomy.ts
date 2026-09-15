export type AccessTier = 'fun' | 'professional';
export type TransactionType = 'license' | 'start' | 'bonus' | 'prize' | 'refund';

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
