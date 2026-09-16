export interface DeveloperCreatePillar {
  pillar: 'Product' | 'Platform' | 'Content' | 'Operations';
  mission: string;
  outcomes: string[];
}

export interface RepositoryDomainBoundary {
  area: '/games' | '/spajapro' | '/university';
  scope: string;
  ownership: string;
}

export interface DeveloperWorkflowGate {
  title: string;
  checklist: string[];
}

export const DEVELOPER_CREATE_EPIC_PILLARS: DeveloperCreatePillar[] = [
  {
    pillar: 'Product',
    mission: 'Jasan proizvodni tok od Fun/Test do Professional režima uz merljive readiness kriterijume.',
    outcomes: [
      'Zaključani ciljevi: Fun/Test, Professional, Developer/Create tools, Enterprise readiness.',
      'Roadmap koji mapira ideju, validaciju, release i kontinualno unapređenje.',
    ],
  },
  {
    pillar: 'Platform',
    mission: 'Stabilna tehnička osnova za razvoj igara, modula i enterprise tokova.',
    outcomes: [
      'Standardizovana compatibility matrica za platforme, rezolucije, input i performanse.',
      'Definisani quality gates i rollback discipline po release fazi.',
    ],
  },
  {
    pillar: 'Content',
    mission: 'Centralni model koji povezuje gameplay, ekonomiju, trust/compliance i QA.',
    outcomes: [
      'Obavezni template po igri sa tehničkom readiness sekcijom.',
      'Jedinstveni prikaz known limitations i risk board indikatora.',
    ],
  },
  {
    pillar: 'Operations',
    mission: 'Operativna disciplina: auditabilan razvoj, sigurnost i kontrolisan rollout.',
    outcomes: [
      'Definition of Ready i Definition of Done kao hard gate za release.',
      'Weekly readiness review i trend metrike za kontinuirani napredak.',
    ],
  },
];

export const REPOSITORY_DOMAIN_BOUNDARIES: RepositoryDomainBoundary[] = [
  {
    area: '/games',
    scope: 'Gameplay ekonomija, game standardi, kompatibilnost, readiness i live/pilot statusi.',
    ownership: 'Game product + QA + compliance koordinacija.',
  },
  {
    area: '/spajapro',
    scope: 'Modulna platforma, agent orchestration, governance i enterprise automation.',
    ownership: 'Platform engineering + security + operations.',
  },
  {
    area: '/university',
    scope: 'Edukacioni i readiness tok, sertifikacija i prelaz ka profesionalnom režimu.',
    ownership: 'Learning/content ops + work-readiness governance.',
  },
];

export const LOCKED_PROGRAM_GOALS = [
  'Fun/Test zona ostaje bez realnog novca i služi za trening + validaciju znanja.',
  'Professional zona radi samo uz verifikaciju, compliance i audit-ready finansijski tok.',
  'Developer/Create tools standardizuju workflow, quality gates i release discipline.',
  'Enterprise readiness podrazumeva observability, policy enforcement i rollback spremnost.',
];

export const DEVELOPER_CREATE_ROADMAP = [
  'Faza A: Ujednačavanje sadržajnog modela i domain boundaries po repozitorijumu.',
  'Faza B: Standardizacija game template-a, tehničke readiness matrice i acceptance gate-a.',
  'Faza C: Uvođenje operativnih gate-ova (DoR/DoD/QA/Security/Release).',
  'Faza D: Readiness Index, risk board i weekly review ciklus.',
  'Faza E: Experimental lane za inovacije bez rizika za live tok.',
];

export const DEFINITION_OF_READY: DeveloperWorkflowGate = {
  title: 'Definition of Ready (nova igra/modul)',
  checklist: [
    'Jasno definisani ciljevi i scope (Fun/Test vs Professional).',
    'Kompatibilnost dimenzije i minimalni tehnički zahtevi su dokumentovani.',
    'Compliance scenario (age-gating, region lock, KYC/AML) je razrađen.',
    'QA plan, rizici i acceptance kriterijumi su potvrđeni.',
  ],
};

export const DEFINITION_OF_DONE: DeveloperWorkflowGate = {
  title: 'Definition of Done (release spremnost)',
  checklist: [
    'Funkcionalni testovi i regresija prolaze bez blokera.',
    'Security skenovi i policy kontrole bez kritičnih nalaza.',
    'Performanse (FPS/load/memory) su unutar ciljanih granica.',
    'Compliance i audit trag su verifikovani za production/live.',
  ],
};

export const QA_AND_RELEASE_GATES = [
  'QA gate: funkcionalni testovi + regresija + security scan + sadržajni audit.',
  'Release gate: rollout faze, monitoring signal, incident owner i rollback plan.',
  'Post-release gate: weekly readiness review, trend metrike i risk board update.',
];

export const ADVANCED_CONTINUOUS_IMPROVEMENTS = [
  'Readiness Index (0–100) po igri/modulu sa jasnim scoring pravilima.',
  'Risk board po kategorijama: security, performance, compliance, fairness.',
  'Weekly readiness review sa trendovima (up/stable/down).',
  'Experimental lane za mehanike i algoritme bez uticaja na live stabilnost.',
];
