# AGENTS

Ovo je dokument koji opisuje agente, njihove uloge i pravila korišćenja u ovom repozitorijumu.

Purpose
- Define agent roles, responsibilities, and how they should be used in CI / automation.

Agent roles
- human-review: zahteva ljudsku proveru pre merge-a.
- ci-bot: automatska provera i formatiranje (lint, tests).
- deploy-bot: obavlja deploy kada su testovi prošli.

Rules
1. Svaki agent mora ostaviti jasan audit log u commit poruci ili kao komentar na PR.
2. Agenti nikada ne smeju merge-ovati promene bez najmanje jedne ljudske provere (osim za hotfix branch-e označene kao `auto-merge: allowed`).
3. Agenti moraju poštovati sigurnosne varnice: ne dodavati tajne u kod; korišćenje Secrets Management (GitHub Secrets, Vault).
4. Ako agent menja konfiguracione fajlove (npr. CI, deploy), mora označiti PR sa labelom `agent:config-change`.

How to add a new agent
- Dodajte opis u ovaj fajl: ime, uloga, scope, webhook/identity, owner i kontakt.
- Napravite PR koji dokumentuje ponašanje i dodajte test koji potvrđuje expected behavior.

Kontakt
- Owner: IO-OPENUI-AO tim
- Email: team@spaja86.dev (ili ostavite kontakt u PR-u)

---

# AGENTS (English)

This file describes agents, their roles, and usage rules for automation in this repository.

Agent roles
- human-review: requires a human reviewer before merge.
- ci-bot: runs automated checks (lint, tests) and reports results.
- deploy-bot: handles deployments after passing checks.

Rules
1. Agents must leave clear audit logs either in commit messages or PR comments.
2. Agents must not merge changes without at least one human review (except branches marked `auto-merge: allowed`).
3. Agents must not introduce secrets into the repo; use GitHub Secrets or a secret manager.
4. Agents that modify configuration must label PRs with `agent:config-change`.

How to add a new agent
- Add an entry here with name, role, scope, identity/webhook, owner and contact.
- Open a PR documenting behavior and add tests that validate expected behavior.
