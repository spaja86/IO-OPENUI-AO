export type AccessTier = 'fun' | 'professional';
export type TransactionType = 'license' | 'start' | 'bonus' | 'prize' | 'refund' | 'salary' | 'allowance';
export type ProPlayerStatus = 'candidate' | 'contracted' | 'independent' | 'suspended' | 'released';
export type EngagementModel = 'employee' | 'contractor' | 'esportsContractor';
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

export interface GameKnowledgeLayer {
  title: string;
  focus: string;
  detail: string;
}

export interface GameMasterProfile {
  identity: string;
  genre: string;
  subgenre: string;
  coreIdea: string;
  matchGoal: string;
  victoryCondition: string;
  audience: string;
  sessionLength: string;
  entryDifficulty: string;
  tacticalDepth: string;
  playFormat: string;
  funTestUse: string;
  professionalUse: string;
}

export interface DetailCluster {
  title: string;
  points: string[];
}

export interface TacticalModule {
  title: string;
  focus: string;
  points: string[];
}

export interface ExplainedTopic {
  title: string;
  what: string;
  why: string;
  whenToUse: string;
  whenNotToUse: string;
  whatItBrings: string;
  cost: string;
  misuseConsequence: string;
  impact: string;
}

export interface EconomyBreakdownLine {
  title: string;
  value: string;
  detail: string;
}

export interface ScenarioBreakdown {
  title: string;
  summary: string;
  steps: string[];
}

export interface MetaInsight {
  title: string;
  detail: string;
}

export interface LearningStage {
  level: string;
  mustUnderstand: string[];
  mustPractice: string[];
  eliminateMistakes: string[];
}

export interface GlossaryEntry {
  term: string;
  category: string;
  definition: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface TrustPoint {
  title: string;
  detail: string;
}

export interface RelatedSectionLink {
  label: string;
  anchor: string;
  note: string;
}

export interface GameKnowledgeEntry {
  shortOverview: string[];
  expandedOverview: string[];
  expertView: string[];
  operationalView: string[];
  historyMetaScenarios: string[];
  masterProfile: GameMasterProfile;
  mechanics: DetailCluster[];
  everythingInGame: DetailCluster[];
  tacticalGuide: TacticalModule[];
  explainedTopics: ExplainedTopic[];
  economyBreakdown: EconomyBreakdownLine[];
  scenarios: ScenarioBreakdown[];
  metaDevelopment: MetaInsight[];
  learningPath: LearningStage[];
  glossary: GlossaryEntry[];
  faq: FAQEntry[];
  trust: TrustPoint[];
  relatedSections: RelatedSectionLink[];
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


export const gamesPageMission = 'Maksimalno objašnjen prikaz svake igrice, njenog sveta, pravila, ekonomije, napredovanja, rizika, nagrada i svih podsistema.';

export const gameKnowledgeLayers: GameKnowledgeLayer[] = [
  {
    title: 'Kratki pregled igre',
    focus: 'Brza orijentacija',
    detail: 'Objašnjava šta je igra, ko igra, koliko traje jedna partija i gde se uklapa u Fun/Test i Professional zonu.',
  },
  {
    title: 'Prošireni pregled',
    focus: 'Sistem igre',
    detail: 'Povezuje mapu, pravila, uloge, resurse, progression i osnovne ritmove odlučivanja tokom partije.',
  },
  {
    title: 'Ekspertni tehnički nivo',
    focus: 'Taktika i disciplina',
    detail: 'Ulazi u tempo, positioning, timing, matchup logiku, greške viših nivoa i načine kažnjavanja slabijih odluka.',
  },
  {
    title: 'Operativni i ekonomski nivo',
    focus: 'Ulaz, fond i isplata',
    detail: 'Prikazuje licencu, START kredit, zaključavanje sredstava, bonus logiku, penale, review i audit trag.',
  },
  {
    title: 'Istorija, meta i scenariji',
    focus: 'Dubinsko razumevanje',
    detail: 'Povezuje patch promene, stabilne stilove, kontra-taktike, realne ishode mečeva i razvoj igrača po nivoima.',
  },
];

export const globalGamesGlossary: GlossaryEntry[] = [
  { term: 'START kredit', category: 'Finansije', definition: 'Obavezno rezervisanje ili trošak koji aktivira Professional meč i povezuje ga sa ledger zapisom.' },
  { term: 'Roster lock', category: 'Operacije', definition: 'Tačka posle koje se sastav, meč identitet i finansijske rezerve više ne menjaju bez admin intervencije.' },
  { term: 'Manual review', category: 'Compliance', definition: 'Ručno proveravanje rezultata, ponašanja ili bonusa kada automatski signali pokažu rizik.' },
  { term: 'Pending payout', category: 'Finansije', definition: 'Isplata je obračunata, ali još čeka potvrdu svih rezultata, bonus uslova i anti-fraud provera.' },
  { term: 'Telemetry potvrda', category: 'Gameplay', definition: 'Sistem beleži događaje iz partije kao dokaz da su rezultati, vreme i ključni potezi stvarno odigrani.' },
  { term: 'Dispute window', category: 'Admin', definition: 'Vremenski okvir u kome igrač ili tim mogu osporiti rezultat pre konačne isplate.' },
  { term: 'Bounty', category: 'Rang', definition: 'Dodatna nagrada za pobedu nad ciljanim rangom ili ispunjavanje posebnog takmičarskog uslova.' },
  { term: 'Collusion signal', category: 'Anti-fraud', definition: 'Signal da su igrači možda nameštali ishod, razmenjivali pobede ili zloupotrebljavali matchmaking.' },
];

export const gamesEncyclopedia: Record<string, GameKnowledgeEntry> = {
  'dota-pro-circuit': {
    shortOverview: [
      'Timska MOBA igra visokog tempa u kojoj se pobeda gradi kroz draft, lane kontrolu, objective tempo i timske borbe.',
      'Najviše nagrađuje koordinaciju, map awareness i sposobnost da se mali resursni dobici pretvore u stratešku prednost.',
      'Fun/Test služi za trening mehanika i komunikacije, dok Professional zona uvodi licencu, START, nagrade i audit.',
    ],
    expandedOverview: [
      'Partija prolazi kroz lane fazu, rotacije, objective borbe i završni high-ground pritisak.',
      'Svaka uloga ima jasan posao: carry zatvara partiju, support obezbeđuje vision i setup, offlane stvara prostor.',
      'Mikro odluke kao što su ward timing, smoke ruta i izbor borbe direktno menjaju ekonomiju tima i šansu za bonus.',
    ],
    expertView: [
      'Ekspertni nivo počinje kada tim upravlja talasima, cooldown prozorima i buyback ekonomijom bolje od protivnika.',
      'Loš positioning i neusklađen engage kažnjavaju se gubitkom objective-a, kontrole mape i dragocenog vremena za farm.',
      'Protiv jačih timova prednost se gradi kroz disciplinu, trade bez panike i kažnjavanje njihovih dugih rotacija.',
    ],
    operationalView: [
      'Professional meč zahteva verifikovan roster, rezervisan wallet, telemetry signal i zatvoren dispute window.',
      'Svaki objective, bonus i penalty ima svoj trag: match ID, izvor podatka, review status i PDF dokument.',
      'Ekonomija meča obuhvata ulazni trošak, zaključani fond, bonus rezervu, refund pravila i ručne intervencije kada postoje sporovi.',
    ],
    historyMetaScenarios: [
      'Meta se menja sa patch ritmom: jedan update može pojačati farm carry stil, drugi agresivne rotacije i rani snowball.',
      'Stabilni timovi imaju rezervni plan za sporiji tempo i plan za brzu egzekuciju kada protivnik kasni u map control-u.',
      'Najvredniji scenario treninga je prelazak iz kontrolisane lane faze u sigurnu završnicu bez bacanja prednosti.',
    ],
    masterProfile: {
      identity: 'Dota Pro Circuit',
      genre: 'MOBA',
      subgenre: 'Timska skill competition arena',
      coreIdea: 'Pet igrača po strani pretvara mikro i makro odluke u teritorijalnu, ekonomsku i borbenu dominaciju.',
      matchGoal: 'Srušiti glavnu bazu protivnika uz bolju kontrolu resursa i objective ritma.',
      victoryCondition: 'Pad Ancient-a uz validiran rezultat i zatvoren audit prozor.',
      audience: 'Igrači koji vole timsku koordinaciju, duboku taktiku i visoku odgovornost po ulozi.',
      sessionLength: '35 do 55 minuta po standardnom competitive meču.',
      entryDifficulty: 'Visoka; traži znanje heroja, role discipline i map čitanje.',
      tacticalDepth: 'Ekstremna; svaki draft i svaka rotacija menja plan partije.',
      playFormat: 'Timska igra sa specijalizovanim ulogama i visokim oslanjanjem na komunikaciju.',
      funTestUse: 'Trening heroja, last-hit ritma, komunikacije i osnovnih teamfight šema bez realnog novca.',
      professionalUse: 'Licencirani mečevi sa START uplatom, fondom, bonusima, review pravilima i payout auditom.',
    },
    mechanics: [
      {
        title: 'Osnovna pravila i tok partije',
        points: [
          'Početak je definisan draftom, lane raspodelom i planom za prve rune i ward pozicije.',
          'Pobeda i poraz zavise od objective kontrole, discipline pri borbama i sposobnosti zatvaranja mape.',
          'Tok partije ide kroz lane, rotacije, Roshan ili glavni objective pritisak i završni siege.',
        ],
      },
      {
        title: 'Uloge, resursi i odgovornosti',
        points: [
          'Carry pretvara farm u završnu snagu, mid diktira tempo, support čuva vision i inicira sigurnu informaciju.',
          'Resursi su zlato, iskustvo, teleport prozori, cooldown-i, smoke i prostor na mapi.',
          'Loša raspodela farm-a i nejasna uloga dovode do praznog mid-game perioda i izgubljenog tempa.',
        ],
      },
      {
        title: 'Tempo, positioning i timing',
        points: [
          'Pravi trenutak za borbu zavisi od item spike-a, ult cooldown-a i stanja talasa na mapi.',
          'Pozicioniranje support igrača odlučuje da li tim dobija vision pre engage-a ili ulazi slepo u zamku.',
          'Kašnjenje od nekoliko sekundi pri odgovoru na objective često košta kule, Roshan i bonus prozor.',
        ],
      },
      {
        title: 'Najvažnije odluke tokom meča',
        points: [
          'Da li trade-ovati objective za farm ili braniti po svaku cenu.',
          'Da li potrošiti buyback za trenutni swing ili sačuvati završnu odbranu.',
          'Da li loviti kill ili pretvoriti prednost u warding, tower damage i sigurniji map shape.',
        ],
      },
      {
        title: 'Greške početnika i naprednih igrača',
        points: [
          'Početnici previše jure kill i ostaju bez talasa, resursa i vizije.',
          'Napredni igrači gube meč kada precene prednost i razdvoje tim bez buyback provere.',
          'Oba nivoa trpe kada ignorišu objective tajming i komuniciraju kasno ili neprecizno.',
        ],
      },
    ],
    everythingInGame: [
      {
        title: 'Mape, arene i objektivi',
        points: [
          'Tri lane ose, river tačke, Roshan prostor i jungle sekcije definišu ritam kretanja i kontrole.',
          'Kule, barracks i vision zone služe kao merila teritorijalne dominacije.',
        ],
      },
      {
        title: 'Heroji, klase i uloge',
        points: [
          'Heroji se grupišu po engage, sustain, control, burst i scaling logici.',
          'Prava vrednost heroja dolazi iz toga kako se uklapa u timsku kompoziciju, ne samo iz solo snage.',
        ],
      },
      {
        title: 'Itemi, alati i upgrade sistemi',
        points: [
          'Item build nije samo jačanje statistika već odgovor na matchup i tempo partije.',
          'Defanzivni item u pravom prozoru često vredi više od agresivnog itema kupljenog prerano.',
        ],
      },
      {
        title: 'Score, rank i matchmaking',
        points: [
          'Rang se oslanja na rezultat, kvalitet protivnika, individualni učinak i anti-fraud status.',
          'Matchmaking ograničenja štite od prevelikog skill jaza i ponavljanja sumnjivih parova.',
        ],
      },
      {
        title: 'Eventovi, sezone i modovi',
        points: [
          'Sezonski patch može promeniti prioritet heroja, objective vrednost i idealnu dužinu meča.',
          'Specijalni modovi ostaju u Fun/Test zoni dok Professional koristi samo audit-podobne competitive formate.',
        ],
      },
    ],
    tacticalGuide: [
      {
        title: 'Opening taktike',
        focus: 'Prvih deset minuta',
        points: [
          'Obezbedi rune, lane ravnotežu i prvi vision bez nepotrebnog gubljenja HP-a i teleport resursa.',
          'Cilj nije spektakl već stabilna osnova za prvi item spike i sigurnu rotaciju.',
        ],
      },
      {
        title: 'Mid-game taktike',
        focus: 'Tempo i tranzicija',
        points: [
          'Prevedi jedan dobijen fight u tower, deep wards i kontrolu neutralnih resursa.',
          'Ne rasipaj prednost na solo lov bez vision pokrića i plana za sledeći objective.',
        ],
      },
      {
        title: 'End-game taktike',
        focus: 'Zatvaranje partije',
        points: [
          'Buyback status, wave position i vision linije moraju biti provereni pre high-ground pokušaja.',
          'Završnica traži disciplinu više nego mehaničku hrabrost.',
        ],
      },
      {
        title: 'Agresivni stil',
        focus: 'Pritisak',
        points: [
          'Radi kada tim ima rani power spike i dovoljno informacija da zatvori mapu.',
          'Ako se pretera, otvara prostor za comeback kroz preduge chase situacije.',
        ],
      },
      {
        title: 'Defanzivni stil',
        focus: 'Stabilizacija',
        points: [
          'Koristi se kada lineup traži vreme ili kada protivnik ima bolji early-game engage.',
          'Cilj je preživeti bez rasipanja resursa i dočekati bolji item ili fight prozor.',
        ],
      },
      {
        title: 'Kontrolni stil',
        focus: 'Vizija i prostor',
        points: [
          'Map control, smoke discipline i wave management troše protivničko vreme i mentalni fokus.',
          'Najvredniji je protiv haotičnih timova koji žele brze, neproverene borbe.',
        ],
      },
      {
        title: 'Timska koordinacija',
        focus: 'Pozivi i uloge',
        points: [
          'Jedan jasan caller smanjuje kašnjenje i preklapanje odluka.',
          'Svaka uloga mora da zna da li startuje, prati ili štiti backline.',
        ],
      },
      {
        title: 'Map awareness',
        focus: 'Informacija',
        points: [
          'Prati nestale heroje, status talasa i to gde protivnik može stići pre tebe.',
          'Map awareness direktno smanjuje glupe smrti i otvara sigurnije objective odluke.',
        ],
      },
      {
        title: 'Resource management',
        focus: 'Zlato, cooldown i TP',
        points: [
          'Nije dovoljno imati resurse; bitno je da su raspoređeni na pravim herojima u pravom trenutku.',
          'Cooldown bez plana i teleport bez razloga ostavljaju tim slepim i sporim.',
        ],
      },
      {
        title: 'Risk / reward i kontra jačima',
        focus: 'Pametno kažnjavanje',
        points: [
          'Protiv jačih timova uzimaj sigurne trade-ove, a ne herojske all-in poteze bez informacija.',
          'Kazni njihovu pohlepu: dugačak split, greedy item ili nebranjen vision pocket.',
        ],
      },
    ],
    explainedTopics: [
      {
        title: 'Draft plan',
        what: 'Sastavljanje heroja, uloga i win condition-a pre starta meča.',
        why: 'Bez dobrog drafta tim stalno juri ispravke tokom partije.',
        whenToUse: 'Uvek pre meča i pri svakoj velikoj patch promeni.',
        whenNotToUse: 'Ne sme se tretirati kao krut spisak heroja bez prilagođavanja protivniku.',
        whatItBrings: 'Jasniji lane plan, bolji scaling i lakšu komunikaciju tokom mid-game-a.',
        cost: 'Traži pripremu, znanje matchup-a i disciplinu u pick prioritetima.',
        misuseConsequence: 'Loš draft stvara nemoguće borbe i prisiljava tim na rizične improvizacije.',
        impact: 'Direktno utiče na timsku sinergiju, rezultat i potrebu za skupljim comeback scenarijima.',
      },
      {
        title: 'Vision control',
        what: 'Sistem wardova, dewardova i kretanja koji pretvara nepoznatu mapu u proverenu teritoriju.',
        why: 'Bez informacija i jači tim pravi početničke greške.',
        whenToUse: 'Pre svakog objective-a, posle dobijene borbe i pri prelasku iz defanzive u ofanzivu.',
        whenNotToUse: 'Ne vredi trošiti vision duboko bez pratnje ili bez resursa da ga odbraniš.',
        whatItBrings: 'Sigurnije engage-e, manje death-ova i lakše čitanje protivničkih rotacija.',
        cost: 'Troši vreme support igrača, ekonomiju i pozicionu bezbednost.',
        misuseConsequence: 'Pogrešan vision otkriva plan i ostavlja tim bez zaštite na drugoj strani mape.',
        impact: 'Menja sposobnost tima da zaradi, zadrži prednost i osigura bonus objective.',
      },
      {
        title: 'Buyback disciplina',
        what: 'Planirano čuvanje i trošenje resursa za povratak u ključnim završnim borbama.',
        why: 'Jedan nepromišljen buyback može rešiti ili uništiti celu partiju.',
        whenToUse: 'Kada povratak odmah vraća objective kontrolu ili sprečava kraj meča.',
        whenNotToUse: 'Kada tim ne može da stigne do borbe ili nema vision i cooldown podršku.',
        whatItBrings: 'Drugu šansu za odbranu, swing borbu i preokret ekonomije.',
        cost: 'Gubi se zlato, sledeći timing i sigurnost za naredne minute.',
        misuseConsequence: 'Prazan buyback ostavlja tim bez fonda i bez krajnjeg osigurača.',
        impact: 'Direktno menja finalni rezultat, tempo zatvaranja i finansijsku vrednost pobede.',
      },
      {
        title: 'Bonus objective window',
        what: 'Kratak takmičarski prozor u kome objective ili specijalni događaj može aktivirati dodatni payout.',
        why: 'Povezuje kvalitet igre sa merenim performansom, ne samo sa konačnim ishodom.',
        whenToUse: 'Kada tim već ima kontrolu, informacije i validan path do bezbednog objective-a.',
        whenNotToUse: 'Kada bi jurnjava za bonusom otvorila put protivniku za veći makro dobitak.',
        whatItBrings: 'Veću nagradu, jači moral i dodatnu vrednost timu ili pojedincu.',
        cost: 'Traži dodatni rizik, komunikaciju i audit-podoban telemetry trag.',
        misuseConsequence: 'Pohlepa za bonusom može pretvoriti dobijen meč u izgubljeni snowball.',
        impact: 'Pogađa timski rezultat, lični payout i ukupnu sliku profesionalne odgovornosti.',
      },
    ],
    economyBreakdown: [
      { title: 'Trajna licenca', value: '24.000 RSD', detail: 'Jednokratni pristup Professional formatu i njegovim takmičarskim pravilima.' },
      { title: 'START kredit', value: '7.000 RSD po igraču', detail: 'Rezerviše se pri svakom potvrđenom START-u i aktivira meč u ledger-u.' },
      { title: 'Ulazni trošak', value: '98.000 RSD timski zbir', detail: 'Za 14 potvrđenih igrača pre roster lock-a.' },
      { title: 'Nagradni fond', value: '380.000 RSD', detail: 'Bazni fond pobedničkog ishoda uz sponsor boost.' },
      { title: 'Bonus logika', value: 'do 1.400.000 RSD', detail: 'Samo uz pobedu, validnu telemetry evidenciju i čist anti-fraud status.' },
      { title: 'Rezervisana sredstva', value: 'Wallet hold + audit reserve', detail: 'Pokriraju refund, spor i ručnu proveru bez rušenja glavnog settlement toka.' },
      { title: 'Isplate', value: 'Pending → verified → paid', detail: 'Payout ostaje zaključan dok svi signali i dispute rok ne budu zatvoreni.' },
      { title: 'Penali', value: 'Role breach / roster breach / abuse', detail: 'Mogu umanjiti bonus, odložiti isplatu ili suspendovati profesionalni status.' },
      { title: 'Review mehanizam', value: 'AI telemetry + human audit', detail: 'Kombinuje mehaničke događaje, pattern review i ručno odlučivanje kada postoji rizik.' },
      { title: 'Primer kompletnog obračuna', value: '98.000 ulaz + 380.000 fond + validan bonus', detail: 'Tim A pobeđuje, jedan pentakill prolazi audit, refund nije aktiviran i payout ide kroz PDF potvrdu.' },
    ],
    scenarios: [
      {
        title: 'Meč od prijave do isplate',
        summary: 'Korisnici prolaze licencu, roster lock, meč, review i payout.',
        steps: ['Kupovina licence i wallet provera', 'START rezervacija i zaključavanje rostera', 'Telemetry potvrđen meč', 'Result + anti-fraud review', 'PDF i payout release'],
      },
      {
        title: 'Pobeda bez bonusa',
        summary: 'Tim igra disciplinovano, ali ne juri specijalne događaje.',
        steps: ['Sigurna lane faza', 'Kontrola objective-a', 'Bez rizičnog jurenja bonusa', 'Verified win', 'Bazni fond isplaćen'],
      },
      {
        title: 'Pobeda sa bonusima',
        summary: 'Kontrolisana pobeda uz validan special event.',
        steps: ['Draft za tempo i control', 'Vision priprema', 'Validan pentakill window', 'Win potvrđen', 'Bonus ostaje pending do kraja audita'],
      },
      {
        title: 'Sporni meč',
        summary: 'Postoji neslaganje oko event-a ili sumnjive rotacije.',
        steps: ['Dispute otvara ticket', 'Payout se zamrzava', 'Pregled telemetry i replay signala', 'Ručno zaključivanje', 'Korekcija settlement-a'],
      },
      {
        title: 'Diskvalifikacija',
        summary: 'Prekršaj ruši pravo na rezultat i novac.',
        steps: ['Otkriven collusion ili lažan nalog', 'Status ide u review', 'Match poništen', 'Nagrada blokirana', 'Profil može biti suspendovan'],
      },
      {
        title: 'Prelazak iz Fun/Test u Professional',
        summary: 'Igrač prelazi iz trening okruženja u punu odgovornost.',
        steps: ['Trening heroja i komunikacije', 'Kupovina licence', '18+ i ID verifikacija', 'Prvi START sa malim rizikom', 'Ulazak u rang i bounty sistem'],
      },
    ],
    metaDevelopment: [
      { title: 'Trenutno najjače', detail: 'Kompozicije sa jakim vision tempom i sigurnim objective pretvaranjem najstabilnije zatvaraju partije.' },
      { title: 'Stabilno za početnike', detail: 'Jednostavnije kompozicije sa jasnim engage i save alatima smanjuju broj haotičnih grešaka.' },
      { title: 'Visok skill prag', detail: 'Greedy scaling draftovi, split pressure i buyback bait zahtevaju vrhunsku koordinaciju.' },
      { title: 'Šta menja balans', detail: 'Patch koji dirne jungle ekonomiju, vision ekonomiju ili ključne engage heroje menja celu metu.' },
      { title: 'Patch uticaj na ekonomiju', detail: 'Brži ili sporiji mečevi direktno menjaju broj validnih bonus prozora i profil rizika po timu.' },
    ],
    learningPath: [
      {
        level: 'Početnik',
        mustUnderstand: ['Šta radi svaka osnovna uloga', 'Zašto je objective važniji od jednog kill-a'],
        mustPractice: ['Last hit i osnovno kretanje po mapi', 'Jednostavne komunikacione pozive'],
        eliminateMistakes: ['Nepotrebno jurenje kill-a', 'Ulazak bez informacija'],
      },
      {
        level: 'Srednji nivo',
        mustUnderstand: ['Item timing i vision vrednost', 'Kako se rotacijom otvara objective'],
        mustPractice: ['Smoke i ward rutine', 'Brzu reakciju na nestale protivnike'],
        eliminateMistakes: ['Kasna teleport reakcija', 'Predugo ostajanje na izgubljenoj lane poziciji'],
      },
      {
        level: 'Napredni nivo',
        mustUnderstand: ['Wave manipulation', 'Trade objective logiku i buyback ekonomiju'],
        mustPractice: ['Kontrolisane engage-e', 'Brzo prebacivanje plana kada protivnik menja tempo'],
        eliminateMistakes: ['Pohlepne chase odluke', 'Previše razdvojen tim u završnici'],
      },
      {
        level: 'Profesionalni nivo',
        mustUnderstand: ['Kompletan operativni tok: roster, review, payout i audit', 'Kako taktika utiče na finansijski ishod'],
        mustPractice: ['Stabilne comms pod pritiskom', 'Planiranje bonus pokušaja bez ugrožavanja pobede'],
        eliminateMistakes: ['Kršenje role discipline', 'Ignorisanje compliance i dispute pravila'],
      },
    ],
    glossary: [
      { term: 'Draft', category: 'Gameplay', definition: 'Biranje heroja i zabrana koje definišu strukturu tima i plan pobede.' },
      { term: 'Space creation', category: 'Gameplay', definition: 'Svesno privlačenje pritiska da bi saigrači uzeli vrednije resurse na drugoj strani mape.' },
      { term: 'Buyback', category: 'Gameplay', definition: 'Povratak u život trošenjem ekonomije radi ključne odbrane ili preokreta.' },
      { term: 'High ground', category: 'Gameplay', definition: 'Završna baza čije osvajanje traži maksimalnu disciplinu i vision kontrolu.' },
      { term: 'Pending bonus', category: 'Finansije', definition: 'Bonus je evidentiran, ali nije isplaćen dok pobeda i anti-fraud provere ne budu zatvorene.' },
      { term: 'Dispute ticket', category: 'Admin', definition: 'Formalni prigovor na događaj, bonus ili rezultat jednog meča.' },
      { term: 'Collusion', category: 'Anti-fraud', definition: 'Dogovoreno ponašanje kojim protivnici ili povezani nalozi lažno stvaraju rezultat.' },
      { term: 'Top 10.000 band', category: 'Rang', definition: 'Ciljani rang prozor relevantan za bounty proračune i kvalitet protivnika.' },
    ],
    faq: [
      { question: 'Kako počinjem Professional Dota režim?', answer: 'Kupovinom trajne licence, prolaskom verifikacije i dovoljnim wallet stanjem za START kredit.' },
      { question: 'Koliko meč realno košta?', answer: 'Pored licence, svaki potvrđeni START rezerviše 7.000 RSD po igraču pre roster lock-a.' },
      { question: 'Šta dobijam pobedom?', answer: 'Bazni fond, potencijalne validne bonuse i rang napredak ako je meč čist i verifikovan.' },
      { question: 'Šta mogu izgubiti?', answer: 'START rezervaciju, bonus pravo, rank momentum ili profesionalni status ako prekršiš pravila.' },
      { question: 'Kako se računa rezultat?', answer: 'Kroz kombinaciju službenog ishoda, telemetry događaja, role-based učinka i anti-fraud signala.' },
      { question: 'Kada dobijam bonus?', answer: 'Tek kada je pobeda potvrđena, event validiran i završena sva obavezna provera.' },
      { question: 'Zašto je nešto pod review-om?', answer: 'Zato što sistem vidi nesklad u događajima, pattern-u kretanja, roster pravilima ili bonus signalu.' },
    ],
    trust: [
      { title: 'Provera rezultata', detail: 'Rezultat ne važi samo zato što je prijavljen; mora da odgovara telemetry tragovima i review pravilima.' },
      { title: 'Žalbe i sporovi', detail: 'Svaki spor dobija ticket, status, vremenski okvir i audit zapis dok se ne zaključi.' },
      { title: 'Detekcija abuse-a', detail: 'Sistem prati povezane naloge, nenormalne obrasce borbi, sumnjive parove i prečeste bonus pokušaje.' },
      { title: 'Audit trag', detail: 'Wallet pokret, bonus odluka i ručna korekcija ostavljaju identifikator, razlog i dokumentovani izlaz.' },
      { title: 'Admin intervencija', detail: 'Aktivira se kada automatski signali nisu dovoljni ili kada odluka utiče na isplatu, suspenziju ili refund.' },
    ],
    relatedSections: [
      { label: 'Game Plan', anchor: 'game-plan', note: 'Pravila, fond i uslovi START-a.' },
      { label: 'Wallet / Ledger', anchor: 'wallet-ledger', note: 'Stanja, rezerve i trag novca.' },
      { label: 'Lifecycle', anchor: 'wallet-ledger', note: 'Koraci od license check-a do PDF potvrde.' },
      { label: 'Bounty', anchor: 'bounty-program', note: 'Nagrade za rang i poseban učinak.' },
      { label: 'Compliance', anchor: 'compliance-controls', note: 'Verifikacija, anti-fraud i admin pravila.' },
      { label: 'Playground', anchor: 'fun-test-playground', note: 'Siguran prostor za trening i onboarding.' },
    ],
  },
  'io-chess-arena': {
    shortOverview: [
      'Šah je 1v1 duel u kome pobeda dolazi iz preciznog planiranja, strpljenja i kažnjavanja i najmanje netačnosti.',
      'Fun/Test služi za učenje otvaranja, taktike i završnica, dok Professional uvodi licencu, START i anti-engine review.',
      'U ovoj igri tempo nije brzina ruke već kvalitet odluke po potezu.',
    ],
    expandedOverview: [
      'Partija ima jasan prelaz iz otvaranja u sredinu i završnicu, a svaki deo traži drugačiji tip razmišljanja.',
      'Resursi su figura, vreme na satu, struktura pešaka, prostor i inicijativa.',
      'Igranje protiv jačeg rivala traži kompaktnu poziciju i minimalan broj taktičkih rupa.',
    ],
    expertView: [
      'Ekspertni nivo podrazumeva procenu slabih polja, dugoročnih planova i prelaza u bolju završnicu.',
      'Najveće greške višeg nivoa nisu promašeni matovi već pogrešni strateški izbori pod vremenskim pritiskom.',
      'Tačan timing razmene figura menja celu vrednost pozicije i verovatnoću pobede.',
    ],
    operationalView: [
      'Professional partije se proveravaju na engine similarity, vremenske obrasce i sumnjiva odstupanja u kvalitetu poteza.',
      'Isplate su manje od timskih MOBA mečeva, ali review disciplina je stroža jer je svaki potez jasan signal.',
      'Svaki duel dobija PDF obračun, dispute opciju i audit log kad postoji sumnja na pomoć softvera.',
    ],
    historyMetaScenarios: [
      'Meta u šahu nije patch-based kao kod live service igara, ali format vremena menja dominantne stilove i opening prioritete.',
      'Rapid favorizuje praktične odluke, dok duži formati otvaraju dublju pripremu i endgame preciznost.',
      'Najvažniji razvoj igrača je prelaz sa taktičkog preživljavanja na plansko vođenje cele pozicije.',
    ],
    masterProfile: {
      identity: 'IO Chess Arena',
      genre: 'Strategy',
      subgenre: '1v1 board duel',
      coreIdea: 'Dva igrača pokušavaju da kroz bolje poteze, strukturu i vreme na satu dovedu kralja protivnika u neodbranjiv položaj.',
      matchGoal: 'Ostvariti mat, prisilni materijalni kolaps ili vremensku pobedu uz validan review ishod.',
      victoryCondition: 'Mat, predaja, pad vremena ili zvanična potvrda pobede po pravilima formata.',
      audience: 'Igrači koji vole precizno razmišljanje, planiranje i duboku individualnu odgovornost.',
      sessionLength: '10 do 35 minuta u rapid formatu ili duže u seriji.',
      entryDifficulty: 'Srednja za osnovna pravila, visoka za ozbiljan competitive nivo.',
      tacticalDepth: 'Veoma visoka; mala greška može odlučiti partiju više poteza unapred.',
      playFormat: 'Solo duel bez timske podrške, sa punim fokusom na individualni plan i disciplinu.',
      funTestUse: 'Vežba otvaranja, taktike, vremenske discipline i završnica bez finansijskog rizika.',
      professionalUse: 'Licencirani duel sa anti-engine auditom, manjim fondovima i transparentnim payout pravilima.',
    },
    mechanics: [
      { title: 'Osnovna pravila', points: ['Svaka figura ima definisan obrazac kretanja i vrednost.', 'Pobeda se gradi matom, materijalnom dominacijom ili vremenom.', 'Otvaranje, sredina i završnica imaju različite prioritete.'] },
      { title: 'Napredna pravila i faze', points: ['Rokada, en passant i promocija menjaju tempo i plan.', 'Poziciona žrtva može biti ispravna ako otvara trajnu inicijativu.', 'Završnica kažnjava svaku nepreciznost jer ima manje figura i manje prostora za popravku.'] },
      { title: 'Resursi i timing', points: ['Vreme na satu je resurs jednako važan kao figura.', 'Inicijativa, slaba polja i aktivnost figura određuju realnu snagu pozicije.', 'Predugo računanje u lošem trenutku vodi ka panici i grešci.'] },
      { title: 'Najvažnije odluke', points: ['Da li menjati figure ili zadržati napetost.', 'Da li ići na materijal ili dugoročni napad.', 'Da li ulaziti u završnicu koju objektivno bolje razumeš od protivnika.'] },
      { title: 'Greške po nivoima', points: ['Početnici puštaju figure i mat pretnje u jednom potezu.', 'Napredni igrači često precenjuju pripremu i potcenjuju praktične probleme na satu.', 'Svi greše kada zanemare bezbednost kralja zbog lepote kombinacije.'] },
    ],
    everythingInGame: [
      { title: 'Tabla i zone', points: ['Centar, poluotvorene linije i slaba polja određuju gde figura vredi najviše.', 'Svaka strana table nudi različite planove: kraljeva i damina strana nisu isto bojno polje.'] },
      { title: 'Figure i uloge', points: ['Kralj je cilj, dama snaga, topovi pritisak linija, lovci i skakači specijalisti za strukturu.', 'Vrednost figure zavisi od pozicije, ne samo od nominalnog broja poena.'] },
      { title: 'Otvaranja i upgrade razumevanja', points: ['Otvaranje nije memorija radi memorije već način da dobiješ razumljivu srednju igru.', 'Upgrade igrača je prelaz sa naučenih poteza na razumevanje planova i tipičnih manevara.'] },
      { title: 'Rank i matchmaking', points: ['Rang zavisi od verified rezultata i snage protivnika.', 'Ograničenja pariranja i review signali smanjuju manipulaciju rezultatima.'] },
      { title: 'Eventovi i modovi', points: ['Rapid i championship serije su professional podobni.', 'Eksperimentalni modovi ostaju u Fun/Test zoni dok ne dobiju pouzdan audit model.'] },
    ],
    tacticalGuide: [
      { title: 'Opening taktike', focus: 'Razvoj i centar', points: ['Brz razvoj i kontrola centra znače više od lova na jeftine trikove.', 'Otvaranje treba da vodi u poziciju koju razumeš, ne samo u teoriju koju pamtiš.'] },
      { title: 'Mid-game taktike', focus: 'Plan i kombinacija', points: ['Traži slaba polja, lošu koordinaciju figura i sigurnost kralja.', 'Napad bez dovoljno figura često samo poklanja inicijativu protivniku.'] },
      { title: 'End-game taktike', focus: 'Tehnika', points: ['Aktivan kralj i precizan račun poteza odlučuju završnicu.', 'Mala prednost postaje pobeda samo ako znaš da je tehnički realizuješ.'] },
      { title: 'Agresivni stil', focus: 'Napad', points: ['Radi kada imaš razvojnu prednost i otvorene linije.', 'Bez osnove prelazi u neopravdan blef.'] },
      { title: 'Defanzivni stil', focus: 'Otpornost', points: ['Traži hladnu procenu slabosti i smanjenje protivničkog prostora.', 'Cilj je preživeti talas pritiska i vratiti partiju u razumljiv plan.'] },
      { title: 'Kontrolni stil', focus: 'Struktura', points: ['Kontrolišeš ključna polja, menjaš dobre figure protivnika i gradiš dugoročni plus.', 'Ovaj stil posebno kažnjava nervozne i previše taktične rivale.'] },
      { title: 'Resource management', focus: 'Vreme i figura', points: ['Ne troši previše vremena na odluke koje ne menjaju plan.', 'Čuvaj kvalitet figura i ne ulazi u završnicu koja traži tehniku koju nemaš.'] },
      { title: 'Kontra jačima', focus: 'Praktičnost', points: ['Biraj stabilne sisteme i teraj jačeg rivala da dugo igra bez jasnog proboja.', 'Praktična otpornost povećava šansu da greška dođe sa druge strane.'] },
    ],
    explainedTopics: [
      { title: 'Otvaranje', what: 'Prva faza partije sa razvojem figura i borbom za centar.', why: 'Daje strukturu cele partije.', whenToUse: 'Uvek, uz sistem koji razumeš.', whenNotToUse: 'Ne treba slepo pratiti teoriju kada pozicija traži prilagođavanje.', whatItBrings: 'Bezbednog kralja i aktivne figure.', cost: 'Traži pripremu i razumevanje tipičnih planova.', misuseConsequence: 'Loše otvaranje vodi u pasivnost ili taktičke rupe.', impact: 'Menja kvalitet srednje igre i verovatnoću stabilne pobede.' },
      { title: 'Inicijativa', what: 'Pravo da ti postavljaš pretnje i teraš protivnika na odgovor.', why: 'Tempo često vredi koliko i materijal.', whenToUse: 'Kada imaš razvojnu ili prostornu prednost.', whenNotToUse: 'Ne sme se juriti ako ruši bezbednost kralja.', whatItBrings: 'Pritisak, greške protivnika i kontrolu toka partije.', cost: 'Nekad traži žrtvu pešaka ili slabiju strukturu.', misuseConsequence: 'Ako nestane zamaha, ostaješ sa trajnim slabostima.', impact: 'Utiče na rezultat i brzinu kojom zatvaraš partiju.' },
      { title: 'Engine audit', what: 'Provera sličnosti poteza sa računarom i obrasca donošenja odluka.', why: 'Čuva integritet Professional rezultata.', whenToUse: 'Automatski na svakom sumnjivom signalu ili random uzorku.', whenNotToUse: 'Ne služi za kažnjavanje kreativnih, ali legitimnih jakih poteza bez dodatnog konteksta.', whatItBrings: 'Poverenje u ranking i payout sistem.', cost: 'Može usporiti settlement kada traži ručni pregled.', misuseConsequence: 'Površna interpretacija vodi lažnim alarmima ili neotkrivenom abuse-u.', impact: 'Direktno utiče na isplatu, reputaciju i status naloga.' },
    ],
    economyBreakdown: [
      { title: 'Trajna licenca', value: '12.000 RSD', detail: 'Otključava Professional duel format.' },
      { title: 'START kredit', value: '2.500 RSD', detail: 'Aktivira verified duel i vezuje ga za ledger.' },
      { title: 'Ulazni trošak', value: '5.000 RSD ukupno', detail: 'Oba igrača rezervišu sredstva pre početka.' },
      { title: 'Nagradni fond', value: '8.000 RSD', detail: 'Bazna nagrada pobedniku verified meča.' },
      { title: 'Bonus logika', value: '2.000 RSD', detail: 'Perfect win bonus traži pobedu i čist review.' },
      { title: 'Rezervisana sredstva', value: 'Operator reserve', detail: 'Pokriraju audit, PDF i sporove.' },
      { title: 'Isplate', value: 'Posle review-a', detail: 'Brže od timskih igara, ali strogo zavise od anti-engine zaključka.' },
      { title: 'Penali', value: 'Poništenje, suspenzija', detail: 'Pokreću se kod pomoći motora, lažnog identiteta ili abuse pattern-a.' },
      { title: 'Primer obračuna', value: 'Bo3 clean sweep', detail: 'Pobednik dobija fond, perfect win samo ako su svi uslovi potvrđeni.' },
    ],
    scenarios: [
      { title: 'Meč od prijave do isplate', summary: 'Licenca, uparivanje, duel, review, payout.', steps: ['Licenca i verifikacija', 'Pairing i START hold', 'Rapid duel', 'Engine review', 'PDF i isplata'] },
      { title: 'Pobeda bez bonusa', summary: 'Čista tehnička pobeda bez perfect-win uslova.', steps: ['Jednak opening', 'Bolja srednja igra', 'Konverzija završnice', 'Verified payout'] },
      { title: 'Pobeda sa bonusom', summary: 'Dominacija bez gubitka većih figura.', steps: ['Precizno otvaranje', 'Taktički dobitak', 'Bezbedna realizacija', 'Bonus ide na review pa payout'] },
      { title: 'Sporni meč', summary: 'Neobičan kvalitet poteza traži dodatni pregled.', steps: ['Flag od sistema', 'Privremeno zamrzavanje', 'Ručno poređenje poteza', 'Zaključak review-a'] },
      { title: 'Diskvalifikacija', summary: 'Pomoć softvera ruši rezultat.', steps: ['Otkriven engine signal', 'Rezultat poništen', 'Fond blokiran', 'Status suspendovan'] },
      { title: 'Prelazak iz Fun/Test u Professional', summary: 'Igrač prelazi sa trening table na verified duel.', steps: ['Vežba otvaranja i taktike', 'Kupuje licencu', 'Ulazi u prvi rapid duel', 'Uči review i payout pravila'] },
    ],
    metaDevelopment: [
      { title: 'Trenutno najjače', detail: 'Praktična otvaranja koja daju razumljiv plan i malo rizika na satu.' },
      { title: 'Stabilno za početnike', detail: 'Jednostavniji setup-i sa jasnom strukturom i bez prisilnog memorisanja ogromne teorije.' },
      { title: 'Visok skill', detail: 'Kompleksne pozicione žrtve i duge tehničke završnice.' },
      { title: 'Promene balansa', detail: 'Balans menja izbor vremenskog formata, pairing pravila i review pragova više nego sadržaj same igre.' },
      { title: 'Uticaj update-a', detail: 'Promena formata ili anti-engine politike menja rizik, stil igre i brzinu settlement-a.' },
    ],
    learningPath: [
      { level: 'Početnik', mustUnderstand: ['Kretanje figura', 'Osnovne mat pretnje'], mustPractice: ['Bezbednost kralja', 'Jednostavne taktike'], eliminateMistakes: ['Poklanjanje figura', 'Ignorisanje poteza protivnika'] },
      { level: 'Srednji nivo', mustUnderstand: ['Otvaranje sa planom', 'Vrednost centra i razvoja'], mustPractice: ['Taktičko računanje', 'Igru pod satom'], eliminateMistakes: ['Pasivan razvoj', 'Forsiranje napada bez figura'] },
      { level: 'Napredni nivo', mustUnderstand: ['Pešačke strukture', 'Prelaz u završnice'], mustPractice: ['Procenu razmene', 'Planiranje više poteza unapred'], eliminateMistakes: ['Pogrešne strateške razmene', 'Loše upravljanje vremenom'] },
      { level: 'Profesionalni nivo', mustUnderstand: ['Review pravila', 'Kako kvalitet odluke utiče na payout i reputaciju'], mustPractice: ['Stabilnost pod pritiskom', 'Doslednu tehničku realizaciju'], eliminateMistakes: ['Sumnjive obrasce igranja', 'Nejasnu evidenciju identiteta i sesije'] },
    ],
    glossary: [
      { term: 'Tempo', category: 'Gameplay', definition: 'Dobitak poteza ili inicijative koji tera protivnika da reaguje.' },
      { term: 'Inicijativa', category: 'Gameplay', definition: 'Kontrola toka partije kroz stalne pretnje.' },
      { term: 'Endgame', category: 'Gameplay', definition: 'Završnica sa manjim brojem figura gde preciznost ima najveću težinu.' },
      { term: 'Engine similarity', category: 'Anti-fraud', definition: 'Stepen podudaranja odluka igrača sa računarskom analizom.' },
      { term: 'Verified win', category: 'Rang', definition: 'Pobeda potvrđena i rezultatom i review procesom.' },
      { term: 'Pending audit', category: 'Admin', definition: 'Status dok duel čeka dodatnu proveru.' },
    ],
    faq: [
      { question: 'Kako počinjem?', answer: 'Kroz Fun/Test trening, zatim kupovinu licence i verifikaciju za Professional duel.' },
      { question: 'Koliko košta jedan duel?', answer: '2.500 RSD START po igraču uz prethodno kupljenu licencu.' },
      { question: 'Šta dobijam pobedom?', answer: 'Bazni payout, rank pomeraj i eventualni perfect-win bonus.' },
      { question: 'Zašto je duel pod review-om?', answer: 'Jer je sistem prepoznao obrazac koji traži anti-engine proveru.' },
    ],
    trust: [
      { title: 'Provera poteza', detail: 'Kvalitet i ritam poteza se proveravaju na sumnjive skokove u performansu.' },
      { title: 'Žalbe', detail: 'Igrač može osporiti odluku ako veruje da je review pogrešno tumačen.' },
      { title: 'Audit trag', detail: 'Svaki reviewed duel čuva razlog flag-a i finalnu odluku.' },
      { title: 'Admin intervencija', detail: 'Pokreće se kod ozbiljne sumnje na engine pomoć ili spor identiteta.' },
    ],
    relatedSections: [
      { label: 'Game Plan', anchor: 'game-plan', note: 'Start, fond i uslovi duela.' },
      { label: 'Wallet / Ledger', anchor: 'wallet-ledger', note: 'Kako se drže rezervacije i payout status.' },
      { label: 'Bounty', anchor: 'bounty-program', note: 'Weekly layer za verified rang učinak.' },
      { label: 'Compliance', anchor: 'compliance-controls', note: 'Anti-engine i dispute pravila.' },
      { label: 'Playground', anchor: 'fun-test-playground', note: 'Practice board i onboarding.' },
    ],
  },
  'io-quiz-clash': {
    shortOverview: [
      'Knowledge duel gde pobeda dolazi iz tačnosti, brzine i kontrole fokusa pod vremenom.',
      'Fun/Test služi za vežbanje i lokalni leaderboard, a Professional uvodi licencu, START i review sumnjivih obrazaca odgovora.',
      'Iako je solo format, takmičarska disciplina je jednako stroga kao u ostalim igrama.',
    ],
    expandedOverview: [
      'Meč se sastoji od vremenski ograničenih pitanja, bodovnog skora i prozora u kome je tačnost važnija od impulsa.',
      'Resursi su vreme, koncentracija, znanje po oblastima i sposobnost da se zadrži ritam bez panike.',
      'Rizik raste kada igrač juri brzinu bez pouzdanosti ili pokušava da pogodi obrazac umesto sadržaja.',
    ],
    expertView: [
      'Ekspertni nivo nije samo znati odgovor nego znati kada usporiti, kada preskočiti mentalnu blokadu i kako održati streak.',
      'Napredni igrači gube kada brzinu stavljaju ispred stabilnosti ili kad puste da ih jedna greška razbije ritmom.',
      'Najveća tehnička vrednost je konzistentan performance kroz više rundi i raznih oblasti.',
    ],
    operationalView: [
      'Professional sesija beleži vreme odgovora, pattern odluka, tačnost i sumnjive skokove u performansu.',
      'Payout je manji ali brz; zato review mora jasno da odvoji vrhunsko znanje od copy-assist ponašanja.',
      'Svaki verified run dobija rezultat, PDF trag i eventualni bonus ako je perfect streak potvrđen.',
    ],
    historyMetaScenarios: [
      'Meta se menja sa bazom pitanja, težinom oblasti i pravilima rangiranja po brzini ili čistoj tačnosti.',
      'Za početnike je najstabilnije da grade širinu znanja, dok profesionalci traže maksimalnu konzistentnost pod satom.',
      'Najvažniji scenario treninga je kako sačuvati ritam posle jednog teškog ili varljivog pitanja.',
    ],
    masterProfile: {
      identity: 'IO Quiz Clash',
      genre: 'Knowledge',
      subgenre: 'Solo timed challenge',
      coreIdea: 'Igrač kroz znanje, brzinu i mentalnu disciplinu gradi verified score koji može postati profesionalni rezultat.',
      matchGoal: 'Postići najbolji tačan rezultat u okviru definisanog vremena i pravila sesije.',
      victoryCondition: 'Najbolji verified score u važećem prozoru uz čist review status.',
      audience: 'Igrači koji vole učenje, brz mentalni odgovor i merenje sopstvene konzistentnosti.',
      sessionLength: '5 do 12 minuta po solo run-u.',
      entryDifficulty: 'Niska za pristup, srednja do visoka za vrhunski score.',
      tacticalDepth: 'Srednja, ali sa visokim značajem psihološke stabilnosti i upravljanja vremenom.',
      playFormat: 'Solo kompeticija fokusirana na tačnost, tempo i anti-cheat čist trag.',
      funTestUse: 'Vežbanje oblasti znanja, reakcije i lokalnog leaderboard-a bez finansijskog rizika.',
      professionalUse: 'Licencirane solo sesije sa START naknadom, score payout-om i answer-pattern review-om.',
    },
    mechanics: [
      { title: 'Osnovna pravila', points: ['Sesija ima ograničen broj pitanja ili vremenski prozor.', 'Rezultat se računa kombinacijom tačnosti i brzine.', 'Pobeda traži verified score, ne samo visok sirovi broj poena.'] },
      { title: 'Napredna pravila i tok', points: ['Teža pitanja traže drugačiji tempo od sigurnih pitanja.', 'Održavanje streak-a menja i psihologiju i bonus potencijal.', 'Jedan pogrešan impuls može srušiti ceo ritam sesije.'] },
      { title: 'Resursi i timing', points: ['Vreme je glavni resurs; svaka sekunda ima cenu.', 'Mentalna energija i fokus opadaju ako igrač prebrzo ulazi u paniku.', 'Prava brzina je ona koja zadržava tačnost.'] },
      { title: 'Najvažnije odluke', points: ['Da li odgovoriti odmah ili uzeti sekundu za proveru logike.', 'Da li juriti perfect streak ili osigurati stabilan top score.', 'Da li posle greške ubrzati ili resetovati ritam.'] },
      { title: 'Greške po nivoima', points: ['Početnici pogađaju bez čitanja kraja pitanja.', 'Napredni igrači nepotrebno forsiraju brzinu i gube sigurnost.', 'Svi padaju kada ignorišu umor i mentalni tilt.'] },
    ],
    everythingInGame: [
      { title: 'Arene i setovi pitanja', points: ['Kategorije pitanja su bojišta znanja: tehnologija, opšta kultura, logika i specijalni event setovi.', 'Svaki set ima drugačiji ritam i prag pouzdanosti.'] },
      { title: 'Alati i sposobnosti', points: ['Glavni alat je znanje, a pomoćni alati su fokus, memorijska rutina i prepoznavanje zamki u formulaciji.', 'Professional mod ne dozvoljava spoljne asistive alate.'] },
      { title: 'Score, rank i matchmaking', points: ['Score ranking vrednuje verified rezultat i konzistentnost kroz takmičarske prozore.', 'Ograničenja sesija smanjuju abuse kroz previše pokušaja u kratkom periodu.'] },
      { title: 'Eventovi i sezonske promene', points: ['Tematske nedelje i novi skupovi pitanja menjaju prioritet oblasti za pripremu.', 'Patch u scoring-u menja odnos brzine i tačnosti.'] },
      { title: 'Posebni modovi', points: ['Eksperimentalni blitz i duel modovi ostaju u Fun/Test zoni dok ne dobiju stabilan audit model.'] },
    ],
    tacticalGuide: [
      { title: 'Opening taktike', focus: 'Prva pitanja', points: ['Kreni mirno da stabilizuješ ritam i samopouzdanje.', 'Nemoj odmah trošiti mentalnu energiju na prebrzo čitanje.'] },
      { title: 'Mid-game taktike', focus: 'Održavanje streak-a', points: ['Čuvaj balans brzine i tačnosti, posebno kada pitanja postanu varljivija.', 'Ako sesija nudi mešane oblasti, prepoznaj gde moraš usporiti.'] },
      { title: 'End-game taktike', focus: 'Zatvaranje run-a', points: ['Poslednja pitanja traže kontrolu pulsa i odsustvo panike.', 'Ne žrtvuj verified top score zbog jednog impulsa za savršen finiš.'] },
      { title: 'Agresivni stil', focus: 'Brzina', points: ['Koristan kada si siguran u oblast i želiš visok speed bonus.', 'Opasan je ako prelazi granicu pouzdanosti.'] },
      { title: 'Defanzivni stil', focus: 'Tačnost', points: ['Bolji je kada su pitanja zamršena ili je review prag strožiji.', 'Cilj je čist verified rezultat bez sumnjivih oscilacija.'] },
      { title: 'Kontrolni stil', focus: 'Ritam', points: ['Držiš ujednačen tempo i sprečavaš emocionalni pad posle jednog teškog pitanja.', 'Ovaj stil je najstabilniji za duže takmičarske prozore.'] },
      { title: 'Resource management', focus: 'Vreme i fokus', points: ['Ne troši previše vremena na jedno pitanje ako to ruši celu sesiju.', 'Mentalni reset posle greške je deo taktike, ne slabost.'] },
      { title: 'Kontra jačima', focus: 'Stabilnost', points: ['Protiv elitnih igrača ne pobedjuje se nužno brzinom već manjim brojem čistih grešaka.', 'Stabilan verified score pritiska i jače protivnike na grešku.'] },
    ],
    explainedTopics: [
      { title: 'Perfect streak', what: 'Niz tačnih odgovora bez ijedne greške u okviru vremenskog uslova.', why: 'Nagrađuje kombinaciju znanja i kontrole pod pritiskom.', whenToUse: 'Kada je ritam stabilan i pitanja su u pouzdanim oblastima.', whenNotToUse: 'Ne treba ga juriti kad to tera igrača u paničnu brzinu.', whatItBrings: 'Bonus i jači rang signal.', cost: 'Traži maksimalnu koncentraciju i rizik od psihološkog pucanja posle jedne greške.', misuseConsequence: 'Opsesija streak-om sruši osnovni verified score.', impact: 'Menja payout, samopouzdanje i način na koji igrač vodi celu sesiju.' },
      { title: 'Answer pattern review', what: 'Analiza vremena odgovora, rasporeda tačnosti i sumnjivih obrazaca ponašanja.', why: 'Štiti Professional mode od copy-assist ili drugih neregularnosti.', whenToUse: 'Automatski kada sistem vidi nenormalne skokove u performansu.', whenNotToUse: 'Ne sme se tumačiti bez konteksta istorije igrača i težine seta pitanja.', whatItBrings: 'Poverenje u leaderboard i nagrade.', cost: 'Može produžiti payout i tražiti dodatnu proveru.', misuseConsequence: 'Pogrešan zaključak šteti legitimnom igraču, a preslaba kontrola šteti celom sistemu.', impact: 'Utiče na reputaciju, rezultat i finansijsku validnost sesije.' },
      { title: 'Tempo odgovora', what: 'Način raspoređivanja brzine kroz celu sesiju.', why: 'Isti prosečan rezultat može imati vrlo različit nivo stabilnosti i rizika.', whenToUse: 'Uvek kao svesna taktika, ne kao instinkt.', whenNotToUse: 'Ne treba zadržavati isti tempo kroz sve tipove pitanja bez prilagođavanja.', whatItBrings: 'Manje panike, bolju konzistentnost i više verified score-ova.', cost: 'Traži samokontrolu i odricanje od impulsa da svako pitanje rešiš rekordno brzo.', misuseConsequence: 'Loš tempo vodi u niz grešaka i pad fokusa.', impact: 'Menja rank kvalitet i šansu za bonus.' },
    ],
    economyBreakdown: [
      { title: 'Trajna licenca', value: '4.000 RSD', detail: 'Otključava Professional quiz prozore.' },
      { title: 'START kredit', value: '900 RSD', detail: 'Rezerviše solo run pre aktivacije.' },
      { title: 'Ulazni trošak', value: '900 RSD po sesiji', detail: 'Nizak prag za ulaz, ali zahteva čist review rezultat.' },
      { title: 'Nagradni fond', value: '5.000 RSD', detail: 'Top verified score u relevantnom prozoru.' },
      { title: 'Bonus logika', value: '1.500 RSD', detail: 'Perfect streak samo uz pobedu i clean session.' },
      { title: 'Rezervisana sredstva', value: 'Review hold', detail: 'Pokriraju sporove i pattern proveru pre finalne isplate.' },
      { title: 'Isplate', value: 'Brze po zatvaranju sesije', detail: 'Najčešće se oslobađaju po završetku review prozora istog dana.' },
      { title: 'Penali', value: 'Reset score-a ili blok', detail: 'Aktiviraju se kod neregularnosti, lažnih pokušaja ili abuse pattern-a.' },
      { title: 'Primer obračuna', value: '900 START → 5.000 payout + 1.500 bonus', detail: 'Igrač završava clean session sa perfect streak-om i prolazi review bez zadrške.' },
    ],
    scenarios: [
      { title: 'Meč od prijave do isplate', summary: 'Licenca, start sesije, score, review, payout.', steps: ['Aktivna licenca', 'START rezervacija', 'Timed solo run', 'Pattern review', 'PDF i isplata'] },
      { title: 'Pobeda bez bonusa', summary: 'Najbolji verified score bez perfect streak-a.', steps: ['Stabilna tačnost', 'Jedna greška bez kolapsa', 'Top score', 'Verified payout'] },
      { title: 'Pobeda sa bonusom', summary: 'Čist run bez greške u vremenskom cilju.', steps: ['Kontrolisan opening', 'Ujednačen tempo', 'Perfect streak', 'Bonus review pa isplata'] },
      { title: 'Sporna sesija', summary: 'Previše nagli skok performanse traži proveru.', steps: ['Flag odgovora', 'Payout hold', 'Provera istorije i seta pitanja', 'Zaključak'] },
      { title: 'Diskvalifikacija', summary: 'Neregularna pomoć ruši score.', steps: ['Detektovan pattern', 'Rezultat poništen', 'Nagrada blokirana', 'Status može biti suspendovan'] },
      { title: 'Prelazak iz Fun/Test u Professional', summary: 'Igrač prelazi sa vežbe na verified knowledge run.', steps: ['Trening oblasti', 'Kupovina licence', 'Prvi low-risk Professional run', 'Ulazak u dnevne score prozore'] },
    ],
    metaDevelopment: [
      { title: 'Trenutno najjače', detail: 'Igrači sa ujednačenim tempom i širokim znanjem imaju najstabilnije verified score-ove.' },
      { title: 'Stabilno za početnike', detail: 'Fokus na tačnost i razumevanje formulacije pitanja, ne na rekordnu brzinu.' },
      { title: 'Visok skill', detail: 'Konzistentan top rezultat kroz više različitih setova i pod review pritiskom.' },
      { title: 'Promene balansa', detail: 'Scoring formule i težina kategorija mogu brzo promeniti šta je optimalna taktika.' },
      { title: 'Uticaj update-a', detail: 'Novi setovi pitanja i speed weighting menjaju način pripreme i vrednost streak taktike.' },
    ],
    learningPath: [
      { level: 'Početnik', mustUnderstand: ['Kako se računa score', 'Zašto je tačnost osnova'], mustPractice: ['Pažljivo čitanje pitanja', 'Mirno otvaranje sesije'], eliminateMistakes: ['Nasumično pogađanje', 'Preskakanje ključnih reči'] },
      { level: 'Srednji nivo', mustUnderstand: ['Odnos brzine i tačnosti', 'Kako jedna greška ne sme srušiti ritam'], mustPractice: ['Ravnomeran tempo', 'Rad po oblastima slabosti'], eliminateMistakes: ['Panično ubrzavanje', 'Mentalni tilt posle greške'] },
      { level: 'Napredni nivo', mustUnderstand: ['Kako se gradi perfect streak', 'Kako se čita obrazac težih pitanja'], mustPractice: ['Stabilnost kroz više run-ova', 'Brz reset fokusa'], eliminateMistakes: ['Preterano jurcanje bonus-a', 'Forsiranje oblasti koju ne kontrolišeš'] },
      { level: 'Profesionalni nivo', mustUnderstand: ['Review pravila i audit trag', 'Kako verified score utiče na payout i reputaciju'], mustPractice: ['Čistu i konzistentnu izvedbu', 'Pripremu po sezonskim setovima'], eliminateMistakes: ['Sumnjive obrasce odgovora', 'Nepoštovanje sesijskih ograničenja'] },
    ],
    glossary: [
      { term: 'Verified score', category: 'Rang', definition: 'Rezultat potvrđen i takmičarskim pravilima i review signalima.' },
      { term: 'Perfect streak', category: 'Gameplay', definition: 'Niz tačnih odgovora bez greške unutar zadatog uslova.' },
      { term: 'Speed weighting', category: 'Gameplay', definition: 'Deo formule koji vrednuje brzinu odgovora.' },
      { term: 'Pattern anomaly', category: 'Anti-fraud', definition: 'Neobičan obrazac odgovora koji traži proveru.' },
      { term: 'Daily competitive window', category: 'Admin', definition: 'Dnevni vremenski prozor u kom se porede rezultati za payout.' },
    ],
    faq: [
      { question: 'Kako počinjem?', answer: 'Kroz browser kviz trening, pa licencu i prvi Professional run.' },
      { question: 'Koliko košta jedan run?', answer: '900 RSD START po sesiji uz prethodno kupljenu licencu.' },
      { question: 'Kako dobijam bonus?', answer: 'Samo kroz verified perfect streak u čistoj sesiji.' },
      { question: 'Zašto je score blokiran?', answer: 'Zato što answer pattern ili tempo odgovora traže dodatni review.' },
    ],
    trust: [
      { title: 'Provera rezultata', detail: 'Ne gledaju se samo poeni već i ritam, tačnost i obrazac odluka.' },
      { title: 'Žalbe', detail: 'Igrač može osporiti flag ili tražiti ručni pregled sesije.' },
      { title: 'Detekcija abuse-a', detail: 'Sistem prati copy-assist signale, neuobičajene skokove i ponavljane sumnjive sesije.' },
      { title: 'Audit trag', detail: 'Svaka reviewed sesija ostavlja evidenciju o razlogu i ishodu odluke.' },
    ],
    relatedSections: [
      { label: 'Game Plan', anchor: 'game-plan', note: 'Kako izgleda verified score model.' },
      { label: 'Wallet / Ledger', anchor: 'wallet-ledger', note: 'START, hold i payout tokovi.' },
      { label: 'Bounty', anchor: 'bounty-program', note: 'Kako ranking i weekly layer grade dodatnu vrednost.' },
      { label: 'Compliance', anchor: 'compliance-controls', note: 'Pattern review i anti-abuse pravila.' },
      { label: 'Playground', anchor: 'fun-test-playground', note: 'Browser kviz za trening i onboarding.' },
    ],
  },
};

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
    model: 'esportsContractor',
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
