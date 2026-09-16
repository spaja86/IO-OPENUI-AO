export interface SpajaProModule {
  code: string;
  role: string;
  boundary: string;
}

export interface SpajaProLayer {
  name: string;
  scope: string;
  modules: string[];
}

export const SPAJAPRO_MODULES: SpajaProModule[] = [
  { code: 'ODIT', role: 'Audit trail, compliance evidence i forenzika.', boundary: 'Ne menja poslovnu logiku; beleži i dokazuje odluke.' },
  { code: 'DEKER', role: 'Deployment, environment management i release kontrole.', boundary: 'Ne obrađuje korisnički sadržaj; upravlja isporukom.' },
  { code: 'DUNOR', role: 'Ingestion i normalizacija izvora znanja.', boundary: 'Ne donosi odluke; samo priprema podatke.' },
  { code: 'SUMOR', role: 'Sumarizacija i višeslojni output formati.', boundary: 'Ne upravlja pristupom; fokus na kvalitet odgovora.' },
  { code: 'OKET', role: 'Konektori i eksterni alati/integracije.', boundary: 'Ne skladišti trajno znanje; obezbeđuje povezivanje.' },
  { code: 'DAKOR', role: 'Orkestracija i routing prema agentima/modelima.', boundary: 'Ne uvodi nove podatke; bira tok izvršavanja.' },
  { code: 'EKSER', role: 'Security enforcement, policy i secret scanning.', boundary: 'Ne isporučuje feature logiku; blokira rizične akcije.' },
  { code: 'DOKER', role: 'Izolovani runtime za agente i workload.', boundary: 'Ne određuje poslovna pravila; izvršava ih izolovano.' },
  { code: 'DUKAR', role: 'Strukturirano skladište znanja i indeksiranje.', boundary: 'Ne radi distribuciju izlaza; čuva i pretražuje znanje.' },
  { code: 'DONAR', role: 'Autorizovana distribucija podataka i output kanala.', boundary: 'Ne menja sadržaj; kontroliše kome i gde ide rezultat.' },
  { code: 'KODER', role: 'Kod-generacija, task automacija i quality gates.', boundary: 'Ne menja governance pravila; izvršava standarde isporuke.' },
];

export const SPAJAPRO_OPERATING_MODEL = [
  {
    title: 'Korisnički tok',
    flow: 'Ulaz → obrada → odgovor',
    details: 'SPAJAPRO prima upit, DAKOR bira model/agenta, SUMOR formatira izlaz, DONAR isporučuje odgovor kroz odobren kanal.',
  },
  {
    title: 'Enterprise tok',
    flow: 'Audit → compliance → licence',
    details: 'ODIT čuva audit trag, EKSER sprovodi policy kontrole, a licencni status i dozvole se potvrđuju pre isporuke.',
  },
  {
    title: 'Developerski tok',
    flow: 'Plugin/SDK → integracije → release',
    details: 'OKET upravlja konektorima, KODER uvodi quality gates, DEKER validira i pušta release po okruženjima.',
  },
  {
    title: 'Bezbednosni tok',
    flow: 'Secret scanning → policy enforcement → incident response',
    details: 'EKSER pokreće detekciju tajni i policy provere, ODIT obezbeđuje dokaz i forenzički tok za incidente.',
  },
];

export const SPAJAPRO_LAYERS: SpajaProLayer[] = [
  { name: 'Experience sloj', scope: 'SPAJAPRO UI i API gateway.', modules: ['Gateway', 'UI'] },
  { name: 'Intelligence sloj', scope: 'Orkestracija i logika odlučivanja.', modules: ['DAKOR', 'SUMOR', 'OKET'] },
  { name: 'Trust sloj', scope: 'Audit, sigurnost i policy kontrole.', modules: ['ODIT', 'EKSER'] },
  { name: 'Runtime sloj', scope: 'Izvršavanje workload-a i release izolacija.', modules: ['DOKER', 'DEKER'] },
  { name: 'Data/Knowledge sloj', scope: 'Memorija, dokumenti i retrieval.', modules: ['DUNOR', 'DUKAR', 'DONAR'] },
  { name: 'Delivery sloj', scope: 'Automation, CI/CD i agent execution.', modules: ['KODER'] },
];

export const SPAJAPRO_NON_FUNCTIONAL_REQUIREMENTS = [
  'Latencija i throughput definirani po tipu zahteva (chat, enterprise, automation).',
  'Multi-tenant izolacija podataka, runtime-a i pristupnih politika.',
  'Observability standard: metrics + logs + traces za svaki kritični tok.',
  'Disaster recovery i backup strategija sa testiranim restore procedurama.',
  'Data residency i regulatorna usklađenost po regionima.',
];

export const SPAJAPRO_PHASES = [
  'Faza 1: Core platform skeleton (gateway, auth, audit baseline, module contracts).',
  'Faza 2: Knowledge + orchestration (DUNOR/DUKAR/DAKOR + basic SUMOR).',
  'Faza 3: Security-hardening (EKSER + ODIT compliance proširenje).',
  'Faza 4: Runtime i integracije (DOKER/OKET/DEKER).',
  'Faza 5: Developer i enterprise capabilities (KODER + SLA/reporting/tenancy).',
  'Faza 6: Go-live, pilot klijenti, feedback loop, skaliranje.',
];

export const SPAJAPRO_GOVERNANCE = [
  'Obavezni human-review pre merge/deploy događaja.',
  'Policy-based blokade za security findinge.',
  'Audit log za sve agentske akcije.',
  'Release approvals po okruženju (dev/stage/prod).',
];

export const SPAJAPRO_KPIS = [
  'Tačnost i korisničko zadovoljstvo odgovora.',
  'Vreme odgovora i dostupnost platforme.',
  'Stopa sigurnosnih incidenata.',
  'Vreme od zahteva do produkcije.',
  'Stepen usvajanja modula po timu/klijentu.',
];

export const SPAJAPRO_RISKS = [
  { risk: 'Prevelika kompleksnost modula', mitigation: 'Strogi interfejsi, jasno ownership mapiranje i modularni ugovori.' },
  { risk: 'Sigurnosni rizik integracija', mitigation: 'Zero-trust model, least-privilege i kontinuirane policy provere.' },
  { risk: 'Kvalitet odgovora', mitigation: 'Eval pipeline, A/B validacija i kontinuirani feedback loop.' },
  { risk: 'Operativni rizik skaliranja', mitigation: 'Fazno uvođenje, capacity planning i runbook disciplina.' },
];

export const SPAJAPRO_DELIVERABLES = [
  'Arhitekturni blueprint SPAJAPRO.',
  'Katalog modula i odgovornosti.',
  'Roadmap po fazama implementacije.',
  'Governance i security standard.',
  'Operativni KPI dashboard i plan kontinuiranog unapređenja.',
];
