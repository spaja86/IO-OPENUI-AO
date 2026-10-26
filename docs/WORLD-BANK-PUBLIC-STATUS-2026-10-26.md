# AI IQ World Bank — javni status, 26. oktobar 2026.

Ova korekcija opisuje AI IQ World Bank kao radni naziv demonstracionog softvera bez dozvole NBS za rad banke. Usklađuje oba registra platformi, bankarsku karticu na početnoj, footer i odgovore chatbota. Status obe kartice postaje `development`. Uklanjaju se tvrdnje o postojećoj profesionalnoj banci, platnim tokovima i aktivnim licencama.

Izvori: [NBS — osnivanje i saglasnosti](https://www.nbs.rs/sr/finansijske-institucije/banke/osnivanje-i-saglasnosti/) i [Zakon o bankama sa izmenama 19/2025](https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/kpb_banke_2025.pdf). Član 6 ograničava upotrebu bankarskog naziva; oznaka demonstracionog softvera ne potvrđuje pravnu dozvoljenost poslovne upotrebe naziva. Planovi ostaju razvojni pravci, ne odobrenja ili usluge.

Glavna korekcija: https://github.com/spaja86/Ai-Iq-World-Bank/pull/49. Polazna revizija ovog repozitorijuma: `7c7fa179f88557b8e10ec3b56ea185bd8e128d03`.

Provera: `node --test src/worldBankPublicPresentation.test.cjs` — 4/4 prolaze (obuhvata sintaksu pet promenjenih TypeScript/TSX fajlova). Test koristi postojeću TypeScript razvojnu zavisnost. `git diff --check` prolazi. Nije rađen pun build, udaljeni CI niti vizuelna provera; sadržaj eventualne zasebne `/bank/` instalacije nije potvrđen ovom korekcijom.

Nema bankarskih operacija, stvarnih uplata, novih zavisnosti, spajanja ili produkcionog deployment-a. Izmene se čuvaju u grani `bugfix/world-bank-public-status-20261026` kroz GitHub web interfejs, koji potpisuje commitove; potpis prvih izmena potvrđen je kroz GitHub API (`verified: true`). Ljudski pregled pre spajanja ostaje obavezan prema AGENTS.md. Statusi svih commitova i konačni rezultat provera beleže se u draft PR-u.
