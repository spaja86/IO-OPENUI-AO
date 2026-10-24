# Uvoz univerzitetskog kataloga

Na postojećoj stranici `/university` dodat je katalog sa deset numerisanih mesta: devet imenovanih akademskih traka i jedno rezervisano mesto. Šest postojećih akademskih jedinica PAN, SER, DAK, UPR, DOK i DUN ostaje zaseban deo UNEVERZITET programa.

## Izvor i vlasništvo

- Kanonski izvor: [AI-IQ-SUPER-PLATFORMA / ECOSYSTEM-REFERENCE-LIST.md](https://github.com/spaja86/AI-IQ-SUPER-PLATFORMA/blob/f6c2be5b25d5849193c9067b1f3f5aa67480d4ef/docs/ECOSYSTEM-REFERENCE-LIST.md).
- Izvorni commit: `f6c2be5b25d5849193c9067b1f3f5aa67480d4ef`; blob: `edcae21c9accdf67b9ee8b8ee2f2677ff4a29d45`.
- Odredište: `spaja86/IO-OPENUI-AO`, `src/data/universityCatalog.ts` i komponenta `UniversityCatalog` na postojećoj ruti.
- Ovo je eksplicitan snimak dokumentacionog kataloga. Nema automatske sinhronizacije ili preuzimanja privatnih podataka pri poseti stranici.
- Nazivi „Univerzitet“ i „Uneverzitet“ sačuvani su kao u izvoru; pretraga prihvata oba oblika, kao i tekst bez dijakritike.

## Granice i deseto mesto

Izvor navodi univerzitetske trake, pod-traku i gaming smer, a ne deset osnovanih ili akreditovanih ustanova. Deseto mesto nema potvrđen naziv, repozitorijum ni vlasništvo. Ostaje `reserved`, bez aktivacionog dugmeta i bez uvećavanja broja imenovanih stavki. Njegovo popunjavanje prvo zahteva konkretne podatke u kanonskom izvoru.

Katalog ne menja ocene, studentske statuse, licence, plaćanja, gaming payout ili EXTREM/EXTRONDOL ownership. Izmene su ograničene na dokumentacione podatke, prikaz i pretragu. Nema novih zavisnosti, tajni ili runtime ruta.

## Provera i održavanje

`node --test src/data/universityCatalog.test.ts src/pages/universityPageModel.test.ts` (Node 24 ili drugi runtime sa podrškom za TypeScript type stripping).

Testovi proveravaju deset pozicija, devet imenovanih stavki, izolaciju rezervisanog mesta, pretragu naziva/aliasa i postojeći izbor PAN–DUN jedinica. Pri budućem uvozu treba ažurirati izvorni commit, podatke i provere zajedno. Pregledati promenu sa vlasnikom izvora pre spajanja. Rollback je povratak ovog izolovanog commita.
