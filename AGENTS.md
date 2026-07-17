# AGENTS

Ovo je dokument koji opisuje agente, njihove uloge i pravila korišćenja u ovom repozitorijumu.

## Purpose
- Define agent roles, responsibilities, and how they should be used in CI / automation.

## Agent Roles

### human-review
- Zahteva ljudsku proveru pre merge-a.
- Komentiše na PR-u sa detaljnim povratnim informacijama.

### ci-bot
- Automatska provera i formatiranje (lint, tests).
- Proverava TypeScript, JavaScript, Python zavisnosti.
- Pokušava automatsku ispravku manjих problema (format, linting).

### deploy-bot
- Obavlja deploy kada su testovi prošli.
- Ne može deploy-ovati bez green status od ci-bot-a.
- Ostavlja audit log u PR komentar.

### security-scanner
- **Role**: Automated security scanning (dependencies, secrets, SAST)
- **Scope**: Sva repozitorijuma u organizaciji
- **Trigger**: Na svakom PR-u, svakodnevni nightly scans
- **Actions**: 
  - Auto-label PRs sa `security:review-needed` ako ima kritičnog nalaza
  - Blokira merge ako je pronađena kritična ranjivost
  - Skenira za lozinke, tokene, sekrete u kodu
  - Proverava zavisnosti (npm audit, pip audit, cargo audit)

## Rules / Pravila

1. **Audit Log** - Svaki agent mora ostaviti jasan audit log u commit poruci ili kao komentar na PR.
2. **Human Review** - Agenti nikada ne smeju merge-ovati promene bez najmanje jedne ljudske provere (osim za hotfix branch-e označene kao `auto-merge: allowed`).
3. **Security** - Agenti moraju poštovati sigurnosne varnice: 
   - Ne dodavati tajne u kod
   - Korišćenje Secrets Management (GitHub Secrets, Vault)
   - Nikada ne commitovati `.env` fajlove
4. **Config Changes** - Ako agent menja konfiguracione fajlove (npr. CI, deploy), mora označiti PR sa labelom `agent:config-change`.
5. **Security Scanning** - Security agents moraju skenirati za ranjivosti zavisnosti i označiti ih sa `security:needs-review`.
6. **Multi-Repo Sync** - Za multi-repo platforme (kao SUPER-PLATFORMA), agenti moraju sinhronizovati status između povezanih repozitorijuma.
7. **Custom Config** - Svi agenti moraju poštovati `.agent-config.json` fajlove u svakom repozitorijumu za custom ponašanje.
8. **Commit Sign-off** - Svi commits od strane agenta moraju biti potpisani (`git commit -S`).

## How to Add a New Agent / Kako dodati novog agenta

1. Dodajte opis u ovaj fajl: ime, uloga, scope, webhook/identity, owner i kontakt.
2. Kreirajte `.github/workflows/` fajl za agenta.
3. Napravite PR koji dokumentuje ponašanje i dodajte test koji potvrđuje expected behavior.
4. Dobijte human-review pre merge-a.

## Registered Agents / Registrovani agenti

| Agent | Role | Trigger | Owner | Status |
|-------|------|---------|-------|--------|
| ci-bot | Testing & Linting | PR, Push | @spaja86 | ✅ Active |
| human-review | Code Review | Manual | @spaja86 | ✅ Active |
| deploy-bot | Deployment | Merge to main | @spaja86 | ⏳ Planned |
| security-scanner | Security Scanning | PR, Nightly | @spaja86 | ⏳ Planned |

## Contact / Kontakt

- **Owner**: IO-OPENUI-AO tim
- **Email**: team@spaja86.dev
- **GitHub**: [@spaja86](https://github.com/spaja86)
- Ostavite kontakt ili questions u PR-u

---

# AGENTS (English)

This file describes agents, their roles, and usage rules for automation in this repository.

## Purpose
- Define agent roles, responsibilities, and how they should be used in CI / automation.

## Agent Roles

### human-review
- Requires a human reviewer before merge.
- Comments on PR with detailed feedback.

### ci-bot
- Runs automated checks (lint, tests) and reports results.
- Validates TypeScript, JavaScript, Python dependencies.
- Attempts auto-fix for minor issues (formatting, linting).

### deploy-bot
- Handles deployments after passing checks.
- Cannot deploy without green status from ci-bot.
- Leaves audit log in PR comment.

### security-scanner
- **Role**: Automated security scanning (dependencies, secrets, SAST)
- **Scope**: All repositories in the organization
- **Trigger**: On every PR, nightly scans
- **Actions**:
  - Auto-label PRs with `security:review-needed` if critical findings
  - Blocks merge if critical vulnerability detected
  - Scans for passwords, tokens, secrets in code
  - Checks dependencies (npm audit, pip audit, cargo audit)

## Rules

1. **Audit Logs** - Agents must leave clear audit logs either in commit messages or PR comments.
2. **Human Review** - Agents must not merge changes without at least one human review (except branches marked `auto-merge: allowed`).
3. **Security** - Agents must not introduce secrets into the repo; use GitHub Secrets or a secret manager.
   - Never commit `.env` files
   - Use GitHub Secrets for sensitive data
4. **Config Changes** - Agents that modify configuration must label PRs with `agent:config-change`.
5. **Security Scanning** - Security agents must scan for vulnerable dependencies and flag them with `security:needs-review`.
6. **Multi-Repo Sync** - For multi-repo platforms (like SUPER-PLATFORMA), agents must sync status across all linked repos.
7. **Custom Config** - All agents must respect `.agent-config.json` files in each repo for custom behavior.
8. **Commit Sign-off** - All agent commits must be signed (`git commit -S`).

## How to Add a New Agent

1. Add an entry here with name, role, scope, identity/webhook, owner and contact.
2. Create a `.github/workflows/` file for the agent.
3. Open a PR documenting behavior and add tests that validate expected behavior.
4. Get human-review before merging.

## Registered Agents

| Agent | Role | Trigger | Owner | Status |
|-------|------|---------|-------|--------|
| ci-bot | Testing & Linting | PR, Push | @spaja86 | ✅ Active |
| human-review | Code Review | Manual | @spaja86 | ✅ Active |
| deploy-bot | Deployment | Merge to main | @spaja86 | ⏳ Planned |
| security-scanner | Security Scanning | PR, Nightly | @spaja86 | ⏳ Planned |

## Contact

- **Owner**: IO-OPENUI-AO team
- **Email**: team@spaja86.dev
- **GitHub**: [@spaja86](https://github.com/spaja86)
- Leave feedback or questions in a PR
