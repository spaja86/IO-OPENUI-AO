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
}

export const universityProgram: UniversityProgram = {
  heroTitle: 'UNEVERZITET · PAN · SER · DAK · UPR · DOK · DUN',
  heroSummary:
    'Digitalni univerzitet unutar IO-OPENUI-AO platforme koji povezuje obrazovanje, testiranje, sertifikaciju, praktičan rad i prelazak u profesionalni režim.',
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
        'Spremnost za leadership, professional ili real-money privilegije',
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
    'Faza 5: povezati univerzitet sa profesionalnim pristupom i drugim sistemima platforme.',
    'Faza 6: uvesti nedeljnu, mesečnu i sezonsku reevaluaciju.',
  ],
  professionalBridge: [
    'UNEVERZITET nije samo edukativni sloj već filter kvaliteta i baza za profesionalni pristup.',
    'DUN završni status može postati uslov za leadership, verified professional tokove ili future real-money privilege gate.',
    'Sistem omogućava da pristup višim privilegijama bude zasnovan na dokazivom znanju, disciplini i integritetu.',
  ],
};
