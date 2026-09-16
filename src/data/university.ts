export interface UniversityUnit {
  code: 'PAN' | 'SER' | 'DAK' | 'UPR' | 'DOK' | 'DUN';
  title: string;
  motto: string;
  mission: string;
  difficulty: string;
  focus: string[];
  mandatoryModules: string[];
  practicalWork: string[];
  testingModel: string[];
  passingCriteria: string[];
  risks: string[];
  outcome: string;
}

export interface UniversityCadence {
  label: string;
  summary: string;
  items: string[];
}

export interface UniversityTrackStage {
  title: string;
  gate: string;
  requirements: string[];
}

export interface UniversityStatus {
  title: string;
  meaning: string;
  unlocks: string;
}

export interface UniversitySection {
  title: string;
  items: string[];
}

export interface UniversityWorkTrack {
  title: string;
  summary: string;
  modules: string[];
  outcomes: string[];
}

export interface UniversityLicenceTier {
  title: string;
  audience: string;
  unlocks: string[];
  validActivities: string[];
  requirements: string[];
  verification: string;
  renewal: string;
  suspension: string;
}

export interface UniversityGlobalStatus {
  title: string;
  entryRequirements: string[];
  allowedActivities: string[];
  territory: string;
  financialLimits: string;
  auditLevel: string;
  universityBridge: string;
}

export interface UniversityRegionReadiness {
  title: string;
  status: 'Supported' | 'Conditional' | 'Restricted' | 'Enterprise review';
  summary: string;
  controls: string[];
}

export interface UniversityProgram {
  heroTitle: string;
  heroSummary: string;
  mission: string[];
  architecture: string[];
  progression: UniversityTrackStage[];
  units: UniversityUnit[];
  evaluation: UniversitySection;
  statuses: UniversityStatus[];
  cadence: UniversityCadence[];
  integrity: UniversitySection;
  rollout: string[];
  professionalBridge: string[];
  workReadiness: UniversityWorkTrack[];
  licenceTiers: UniversityLicenceTier[];
  industryTracks: string[];
  globalStatuses: UniversityGlobalStatus[];
  regionReadiness: UniversityRegionReadiness[];
  complianceBoundaries: string[];
}

export const universityProgram: UniversityProgram = {
  heroTitle: 'UNEVERZITET · PAN · SER · DAK · UPR · DOK · DUN',
  heroSummary:
    'Digitalni univerzitet unutar IO-OPENUI-AO platforme koji povezuje obrazovanje, testiranje, sertifikaciju, praktičan rad i prelazak u licencirani profesionalni režim.',
  mission: [
    'UNEVERZITET je centralni obrazovni motor platforme i služi kao sistem pripreme, reputacije i dokazivanja kompetentnosti.',
    'Šest akademskih jedinica gradi jasan put od onboarding-a do elitnog završnog nivoa.',
    'Učenje nije odvojeno od prakse: svaki nivo kombinuje znanje, testiranje, praktične zadatke i proveru integriteta.',
  ],
  architecture: [
    'Univerzitet → Akademska jedinica → Smer / oblast → Modul → Lekcija → Test → Sertifikat → Rang / status',
    'Svaka jedinica ima svoju misiju, nivo težine, obavezne module, praktične zadatke i završnu proveru.',
    'Sadržaj je zamišljen kao data-driven sistem koji se lako proširuje novim oblastima, testovima i sertifikacionim pravilima.',
  ],
  progression: [
    {
      title: 'PAN → SER',
      gate: 'Ulaz iz osnova u usmereno učenje',
      requirements: [
        'Uspešno završen onboarding i početni testovi',
        'Dokazana disciplina, logika i razumevanje pravila',
        'Bez integritetnih flagova u početnoj fazi',
      ],
    },
    {
      title: 'SER → DAK',
      gate: 'Prelaz iz stabilnog znanja u analitiku i kreativnost',
      requirements: [
        'Položeni srednji stručni testovi',
        'Kontinuitet u mini proverama i vežbama',
        'Praktični rad koji pokazuje razumevanje, ne samo memoriju',
      ],
    },
    {
      title: 'DAK → UPR',
      gate: 'Prelaz u odlučivanje i vođenje procesa',
      requirements: [
        'Uspeh u kompleksnim scenarijima',
        'Dokaz da korisnik ume da rešava problem pod pritiskom',
        'Stabilno ponašanje u timskim i simulacionim zadacima',
      ],
    },
    {
      title: 'UPR → DOK',
      gate: 'Prelaz u dokazivanje znanja i audit standard',
      requirements: [
        'Operativna praksa i odgovornost u izvršenju',
        'Jasni izveštaji, dokumentacija i obrazloženje odluka',
        'Čist audit trag bez ozbiljnih odstupanja',
      ],
    },
    {
      title: 'DOK → DUN',
      gate: 'Završni prelaz u elitni nivo',
      requirements: [
        'Završni ispit i sertifikacioni prag',
        'Dokazana sposobnost rada po univerzalnom standardu',
        'Spremnost za leadership, professional ili licencne privilegije',
      ],
    },
  ],
  units: [
    {
      code: 'PAN',
      title: 'Početna Akademska Nadogradnja',
      motto: 'Ulaz kroz disciplinu, širinu i osnovu.',
      mission:
        'PAN uvodi korisnika u akademski sistem kroz opštu kulturu, osnovno obrazovanje, logiku, pravila i početne navike rada.',
      difficulty: 'Početni nivo',
      focus: ['Onboarding', 'Osnove opšte kulture', 'Disciplina', 'Logika', 'Pravila i ponašanje'],
      mandatoryModules: ['Akademski onboarding', 'Osnovno znanje', 'Pravila platforme', 'Prvi mini testovi'],
      practicalWork: ['Kratke vežbe razumevanja', 'Prvo snalaženje kroz interfejs', 'Jednostavni scenario zadaci'],
      testingModel: ['Ulazni test', 'Mini provere', 'Slikovita pitanja', 'Početni završni test'],
      passingCriteria: ['Minimalni prag znanja', 'Bez grube nediscipline', 'Razumevanje osnovnih pravila'],
      risks: ['Nasumično pogađanje', 'Nepažnja', 'Ignorisanje instrukcija'],
      outcome: 'Kandidat stiče pravo da pređe u SER i ulazi u status aktivnog polaznika.',
    },
    {
      code: 'SER',
      title: 'Specijalistički Edukativni Razvoj',
      motto: 'Od osnove do stabilne stručnosti.',
      mission:
        'SER razvija sistemsko učenje po oblastima i stabilizuje znanje kroz dublje module, redovne provere i vežbe.',
      difficulty: 'Srednji nivo',
      focus: ['Stručnost po oblastima', 'Sistemsko učenje', 'Stabilnost', 'Redovan rad'],
      mandatoryModules: ['Tematske oblasti', 'Rad po slabostima', 'Rutina testiranja', 'Strukturisane lekcije'],
      practicalWork: ['Vežbe po kategorijama', 'Srednji problemski zadaci', 'Praćenje napretka'],
      testingModel: ['Periodični veliki testovi', 'Kontinuirane mini provere', 'Kombinovana tekstualna i vizuelna pitanja'],
      passingCriteria: ['Stabilna prolaznost', 'Kontinuitet rada', 'Manje oscilacije pod pritiskom'],
      risks: ['Površno učenje', 'Pad ritma', 'Forsiranje brzine bez tačnosti'],
      outcome: 'Polaznik dobija bazu za ulazak u DAK i status verifikovanog polaznika.',
    },
    {
      code: 'DAK',
      title: 'Dubinska Analiza i Kreativnost',
      motto: 'Znanje mora da ume da misli.',
      mission:
        'DAK gradi analitičko i kreativno mišljenje kroz kompleksne scenarije, logičke obrasce i rešavanje problema.',
      difficulty: 'Napredni nivo',
      focus: ['Analitika', 'Kreativnost', 'Kompleksni scenariji', 'Rešavanje problema'],
      mandatoryModules: ['Napredna logika', 'Analiza slučaja', 'Kreativni odgovor', 'Scenarijsko donošenje odluka'],
      practicalWork: ['Rešavanje složenih situacija', 'Analiza grešaka', 'Kreativni pristupi pod ograničenjima'],
      testingModel: ['Scenario ispiti', 'Logički izazovi', 'Simulacije odluka', 'Napredna slikovita pitanja'],
      passingCriteria: ['Kvalitet argumentacije', 'Tačnost pod složenim uslovima', 'Sposobnost prilagođavanja'],
      risks: ['Mentalni tilt', 'Preterana komplikacija', 'Nedosledno zaključivanje'],
      outcome: 'Korisnik dokazuje da može da razmišlja na višem nivou i stiče uslov za UPR.',
    },
    {
      code: 'UPR',
      title: 'Upravljanje, Praksa i Rukovođenje',
      motto: 'Znanje mora znati da vodi.',
      mission:
        'UPR prevodi znanje u praksu kroz operativne tokove, donošenje odluka, odgovornost i rukovođenje procesima ili timovima.',
      difficulty: 'Viši operativni nivo',
      focus: ['Upravljanje', 'Praksa', 'Rukovođenje', 'Odgovornost', 'Operativna disciplina'],
      mandatoryModules: ['Decision flows', 'Operativna praksa', 'Timska odgovornost', 'Leadership simulacije'],
      practicalWork: ['Vođenje zadatka', 'Operativne simulacije', 'Izbor prioriteta i rešavanje konflikta'],
      testingModel: ['Simulacije vođenja', 'Operativni ispiti', 'Praktični izazovi', 'Review odluka'],
      passingCriteria: ['Jasne odluke', 'Odgovorno izvršenje', 'Kontrola rizika i stabilnost pod pritiskom'],
      risks: ['Loše postavljanje prioriteta', 'Nepotpuna komunikacija', 'Operativni haos'],
      outcome: 'Uspešan korisnik prelazi u DOK i postaje napredni član sistema.',
    },
    {
      code: 'DOK',
      title: 'Dokumentacija, Dokazivanje i Istraživanje',
      motto: 'Sve vredno mora biti dokazivo.',
      mission:
        'DOK formalizuje znanje kroz radove, izveštaje, standardizaciju rezultata, audit trag i sertifikacionu logiku.',
      difficulty: 'Ekspertski dokazni nivo',
      focus: ['Dokumentacija', 'Dokazivanje znanja', 'Istraživanje', 'Audit standard'],
      mandatoryModules: ['Pisani radovi', 'Izveštavanje', 'Audit trag', 'Istraživački zadaci'],
      practicalWork: ['Dokumentovanje odluka', 'Priprema dokaza', 'Sistematsko obrazlaganje rezultata'],
      testingModel: ['Review radova', 'Dokazni ispiti', 'Audit evaluacija', 'Standardizacioni pragovi'],
      passingCriteria: ['Jasna dokumentacija', 'Proverljivost', 'Konzistentnost rezultata', 'Čist audit'],
      risks: ['Nepotpuni tragovi', 'Nejasni zaključci', 'Nedovoljno dokaza'],
      outcome: 'Polaznik postaje sertifikovani operativac spreman za završni elitni nivo.',
    },
    {
      code: 'DUN',
      title: 'Dunavski Univerzalni Nivo',
      motto: 'Završni standard za najviši pristup.',
      mission:
        'DUN je elitni završni sloj koji objedinjuje univerzalni standard, međunarodnu spremnost i ulaz u leadership ili professional privilegije.',
      difficulty: 'Elitni završni nivo',
      focus: ['Univerzalni standard', 'Leadership', 'Završna kompetentnost', 'Priprema za profesionalni režim'],
      mandatoryModules: ['Završni master modul', 'Elitni scenario testovi', 'Leadership praksa', 'Finalna sertifikacija'],
      practicalWork: ['Kompleksni capstone zadaci', 'Visokorizične simulacije', 'Dokaz spremnosti za pristup privilegijama'],
      testingModel: ['Završni ispit', 'Sertifikacioni panel', 'Reevaluacija statusa', 'Napredne simulacije'],
      passingCriteria: ['Najviši prag znanja', 'Dokazana disciplina', 'Leadership spremnost', 'Bez ozbiljnih integritetnih nalaza'],
      risks: ['Pad standarda pod pritiskom', 'Nedoslednost u vrhunskim uslovima', 'Gubitak audit poverenja'],
      outcome: 'Korisnik postaje elitni diplomac i dobija uslov za najviši nivo pristupa u ekosistemu.',
    },
  ],
  evaluation: {
    title: 'Testiranje i evaluacija',
    items: [
      'Svaka jedinica ima ulazni test, kontinuirane mini provere, periodični veliki test i završni ispit.',
      'Testovi obuhvataju tekstualna pitanja, slikovita pitanja, logičke scenarije i simulacije odluka.',
      'Sistem meri razumevanje, ponašanje, disciplinu i praktičnu primenu, ne samo memorisanje činjenica.',
      'Pad ispod standarda vraća korisnika na prethodni ili korektivni nivo dok ne stabilizuje znanje.',
    ],
  },
  statuses: [
    { title: 'Kandidat', meaning: 'Ulazni status pre prve pune validacije.', unlocks: 'Pristup osnovnom onboarding-u i početnim proverama.' },
    { title: 'Aktivni polaznik', meaning: 'Korisnik aktivno pohađa nivo i izvršava zadatke.', unlocks: 'Redovne lekcije, mini testovi i osnovna praćenja.' },
    { title: 'Verifikovani polaznik', meaning: 'Pokazao je stabilno znanje na svom nivou.', unlocks: 'Naprednije module i pristup sledećem prelazu.' },
    { title: 'Napredni član', meaning: 'Ume da radi kroz složene scenarije i praksu.', unlocks: 'Operativne i leadership simulacije.' },
    { title: 'Sertifikovani operativac', meaning: 'Znanje je dokumentovano, proverljivo i audit-spremno.', unlocks: 'Završni elitni put i profesionalne evaluacije.' },
    { title: 'Elitni diplomac', meaning: 'Najviši akademski status univerziteta.', unlocks: 'Najviši pristup privilegijama, leadership put i profesionalni režim.' },
  ],
  cadence: [
    {
      label: 'Nedeljni nivo',
      summary: 'Kontinuirani ritam učenja i korekcije.',
      items: ['Nova predavanja i lekcije', 'Testovi i mini provere', 'Analiza uspeha', 'Korekcija slabosti'],
    },
    {
      label: 'Mesečni nivo',
      summary: 'Tematski ispiti i praktična selekcija.',
      items: ['Veliki tematski ispiti', 'Praktični izazovi', 'Rangiranje po kvalitetu', 'Selekcija za napredovanje'],
    },
    {
      label: 'Sezonski nivo',
      summary: 'Reevaluacija i reset prioriteta.',
      items: ['Reevaluacija statusa', 'Nova pravila i pragovi', 'Reset prioritetnih oblasti', 'Ažuriranje sertifikacionih uslova'],
    },
  ],
  integrity: {
    title: 'Bezbednost i integritet',
    items: [
      'Anti-cheat i review sumnjivih pokušaja su obavezni na svim nivoima.',
      'Trening, evaluacija i sertifikacija se vode odvojeno kako bi se sprečilo mešanje statusa.',
      'Audit trag mora postojati za svaku ozbiljnu proveru, sertifikaciju i promenu statusa.',
      'Nagli sumnjivi skokovi kvaliteta aktiviraju dodatno testiranje i ručni pregled.',
    ],
  },
  rollout: [
    'Faza 1: definisati zvanično značenje PAN, SER, DAK, UPR, DOK i DUN.',
    'Faza 2: izgraditi akademsku hijerarhiju, pravila napredovanja i uslove prelaza.',
    'Faza 3: napisati module, lekcije i sadržaj za svih 6 jedinica.',
    'Faza 4: dodati testove, sertifikaciju, statuse i review tokove.',
    'Faza 5: povezati univerzitet sa profesionalnim pristupom, bankom i licencnim sistemom.',
    'Faza 6: uvesti nedeljnu, mesečnu i sezonsku reevaluaciju.',
  ],
  professionalBridge: [
    'UNEVERZITET nije samo edukativni sloj već filter kvaliteta i baza za profesionalni pristup.',
    'DUN završni status može postati uslov za leadership, verified professional tokove ili future planetary licence gate.',
    'Sistem omogućava da pristup višim privilegijama bude zasnovan na dokazivom znanju, disciplini i integritetu.',
  ],
  workReadiness: [
    {
      title: 'Global work readiness',
      summary: 'Poseban smer koji spaja bankarske, licencne, compliance i operativne standarde pre profesionalne aktivacije.',
      modules: [
        'Global work onboarding i eligibility pravila',
        'Bank / compliance / licensing module',
        'KYC/AML i identitet / ownership provere',
        'Poslovna etika, audit i incident response',
      ],
      outcomes: [
        'Kandidat razume razliku između edukacije, sertifikacije i licence',
        'Kandidat zna kada je potreban ručni review i regionalni scope',
      ],
    },
    {
      title: 'AI finance + AI operations track',
      summary: 'Program za rad sa AI scoring, dokumentacijom, operativnim pregledom i business workflow-ima.',
      modules: [
        'AI risk scoring i reputacioni indeksi',
        'AI licencing advisor i activity matching',
        'AI dokument generator i audit narativi',
        'Ops workflow simulacije za payout, escrow i dispute tokove',
      ],
      outcomes: [
        'Polaznik može da koristi AI alate unutar dozvoljenog compliance okvira',
        'Polaznik razume kako se dokumentuju profesionalne finansijske i radne odluke',
      ],
    },
    {
      title: 'International collaboration + sector certification',
      summary: 'Sertifikacija po delatnostima, regionima i sektorima radi ulaska u licencirani rad.',
      modules: [
        'Međunarodna saradnja i dokumentacioni standardi',
        'Sektorski moduli za IT, fintech, AI, gaming i consulting',
        'Vendor, partner i enterprise onboarding scenariji',
        'Education-to-licence završni panel',
      ],
      outcomes: [
        'Polaznik dobija dokaziv most ka licensed operator ili certified professional statusu',
        'Napredovanje je vezano za delatnosti i teritorije koje su odobrene',
      ],
    },
  ],
  licenceTiers: [
    {
      title: 'Lična licenca',
      audience: 'Individualni korisnici koji ulaze u osnovni verified režim.',
      unlocks: ['Wallet i profil aktivacija', 'Osnovne radne i dokumentacione tokove'],
      validActivities: ['Osnovni freelance i collaboration tasks', 'Edukativni i light operational tokovi'],
      requirements: ['ID verifikacija', 'Prihvatanje platformskih pravila'],
      verification: 'Osnovni identity i activity review.',
      renewal: 'Periodična potvrda identiteta i prihvatanja pravila.',
      suspension: 'Lažni podaci, abuse ili ozbiljan compliance breach.',
    },
    {
      title: 'Profesionalna licenca',
      audience: 'Verified radnici i operativci sa dokazivom kompetencijom.',
      unlocks: ['Naplatu, payout i advanced activity access', 'Dokumente i verified professional status'],
      validActivities: ['IT, AI, consulting, operations', 'Sektorski odobrene poslovne aktivnosti'],
      requirements: ['Sertifikacija ili dokaziv radni prag', 'Compliance-ready status'],
      verification: 'Identity, competence i policy review.',
      renewal: 'Performance review i audit trail kontrola.',
      suspension: 'Pad standarda, neproverljivi rezultati ili policy breach.',
    },
    {
      title: 'Planetary licence',
      audience: 'Korisnici, partneri i lideri koji traže najširi multi-sector, multi-region pristup.',
      unlocks: ['Global work identity', 'Reputacioni skor i partner pristup', 'Najširi licencni scope na platformi'],
      validActivities: ['Višesektorski rad', 'Enterprise i partner tokovi', 'Cross-border poslovna aktivacija po pravilima'],
      requirements: ['Visoki sertifikacioni prag', 'Audit-ready dokumentacija', 'Regionalni i sektorski review'],
      verification: 'Najviši nivo identity, competence i compliance provere.',
      renewal: 'Redovni executive audit i teritorijalna reevaluacija.',
      suspension: 'Kritični incidenti, regulatorni konflikt ili gubitak audit poverenja.',
    },
  ],
  industryTracks: [
    'IT i software',
    'AI i automatizacija',
    'Fintech',
    'Bankarstvo',
    'Trading',
    'Gaming',
    'Edukacija',
    'Consulting',
    'Cyber security',
    'Cloud i DevOps',
    'Dizajn i media',
    'Sales i growth',
    'Support i operations',
    'Logistics coordination',
    'Digital administration',
    'Legal documentation support',
    'Creator economy',
    'Research and analytics',
  ],
  globalStatuses: [
    {
      title: 'Candidate',
      entryRequirements: ['Onboarding', 'Početni testovi', 'Bez finansijske aktivacije'],
      allowedActivities: ['Učenje', 'Trening', 'Simulacije'],
      territory: 'Bez punog regionalnog scope-a.',
      financialLimits: 'Nema ili minimalni testni limiti.',
      auditLevel: 'Osnovni onboarding audit.',
      universityBridge: 'PAN ulazni nivo.',
    },
    {
      title: 'Verified User',
      entryRequirements: ['ID provera', 'Osnovna pravila', 'Clean account status'],
      allowedActivities: ['Osnovni wallet', 'Light collaboration', 'Dokumentacioni tokovi'],
      territory: 'Podržane ili conditional regije.',
      financialLimits: 'Konzervativni limiti.',
      auditLevel: 'Basic compliance review.',
      universityBridge: 'PAN / SER stabilizacija.',
    },
    {
      title: 'Verified Worker',
      entryRequirements: ['Dokaziv radni prag', 'Sektorski readiness'],
      allowedActivities: ['Operativni rad', 'Freelance / consulting', 'Osnovni payout'],
      territory: 'Odobreni regioni i delatnosti.',
      financialLimits: 'Srednji limiti po sektoru.',
      auditLevel: 'Activity + payout review.',
      universityBridge: 'SER / DAK.',
    },
    {
      title: 'Certified Professional',
      entryRequirements: ['Sertifikacija', 'Praktični dokazi', 'Compliance-ready profil'],
      allowedActivities: ['Napredni projekti', 'Veći payout', 'Cross-team rad'],
      territory: 'Širi regionalni scope uz pravila.',
      financialLimits: 'Povišeni limiti.',
      auditLevel: 'Competence + documentation audit.',
      universityBridge: 'DAK / UPR.',
    },
    {
      title: 'Licensed Operator',
      entryRequirements: ['Operativna spremnost', 'Čist audit trag'],
      allowedActivities: ['Settlement, ops, delivery i verified execution'],
      territory: 'Dozvoljene regije uz licence.',
      financialLimits: 'Viši limiti sa monitoring-om.',
      auditLevel: 'Operational audit.',
      universityBridge: 'UPR / DOK.',
    },
    {
      title: 'Licensed Manager',
      entryRequirements: ['Leadership dokaz', 'Review odluka', 'Approval discipline'],
      allowedActivities: ['Vođenje timova', 'Approval tokovi', 'Enterprise koordinacija'],
      territory: 'Multi-region uz dodatni review.',
      financialLimits: 'Visoki limiti i approval pragovi.',
      auditLevel: 'Managerial audit.',
      universityBridge: 'DOK / DUN.',
    },
    {
      title: 'Enterprise-Approved Partner',
      entryRequirements: ['Partner due diligence', 'Ugovorni okvir', 'Vendor review'],
      allowedActivities: ['B2B, enterprise i integration tokovi'],
      territory: 'Po partner scope-u i ugovoru.',
      financialLimits: 'Custom enterprise limiti.',
      auditLevel: 'Partner + legal audit.',
      universityBridge: 'DUN ili ekvivalentan dokaz kompetencije.',
    },
    {
      title: 'Global Elite Status',
      entryRequirements: ['Najviši performance prag', 'Planetary licence gate', 'Kontinualni clean audit'],
      allowedActivities: ['Najširi multi-sector pristup', 'Leadership i premium partner scope'],
      territory: 'Najširi podržani regionalni scope.',
      financialLimits: 'Premium limiti uz ručni nadzor.',
      auditLevel: 'Executive audit.',
      universityBridge: 'DUN završni standard.',
    },
  ],
  regionReadiness: [
    {
      title: 'Supported regions',
      status: 'Supported',
      summary: 'Puna platformska podrška za odobrene delatnosti, dokumentaciju i payout tokove.',
      controls: ['Standardni KYC/AML', 'Identity verification', 'Routine transaction monitoring'],
    },
    {
      title: 'Conditional regions',
      status: 'Conditional',
      summary: 'Rad je moguć uz dodatni dokument, viši review prag ili limitiran scope aktivnosti.',
      controls: ['Manual compliance review', 'Sector-specific approval', 'Reduced transaction limits'],
    },
    {
      title: 'Restricted regions',
      status: 'Restricted',
      summary: 'Dozvoljena je samo edukacija, simulacija ili dokumentacioni režim bez pune finansijske aktivacije.',
      controls: ['No live payout', 'No sensitive sectors', 'Escalation before any status change'],
    },
    {
      title: 'Enterprise review regions',
      status: 'Enterprise review',
      summary: 'Ulaz kroz ugovoreni B2B okvir, custom pravila i regionalni legal/compliance panel.',
      controls: ['Contract review', 'Partner due diligence', 'Custom approval matrix'],
    },
  ],
  complianceBoundaries: [
    'Edukacija i trening nisu isto što i profesionalna licenca.',
    'Sertifikacija potvrđuje znanje, ali ne daje automatski regulatorno pravo rada u svakoj državi.',
    'Platformska licenca važi unutar ekosistema i mora biti usklađena sa teritorijalnim i sektorskim pravilima.',
    'Finansijska aktivacija dolazi tek posle identiteta, compliance-a, dokumentacije i dozvoljenog region-scope-a.',
  ],
};
