# 🌍 SPAJA EKOSISTEM — Dokumentacija / Documentation

> **Srpski i Engleski** / Serbian and English

---

## 🇷🇸 Srpski

### Pregled arhitekture

SPAJA Ekosistem je **mono-repo + micro-frontend** platforma koja integriše 4 nezavisna servisa unutar jednog `IO-OPENUI-AO` repozitorijuma. Svaki modul ima svoju rutu, fasciklu i vizuelni identitet, ali svi dele isti dark theme i navigacioni sistem.

```
IO-OPENUI-AO (mono-repo hub)
│
├── public/                     ← Vercel static serving root
│   ├── index.html              ← SPAJA Ekosistem landing page
│   ├── bank/                   ← 🏦 AI IQ World Bank
│   │   ├── index.html
│   │   └── styles.css
│   ├── exchange/               ← 💱 AI IQ Menjačnica
│   │   ├── index.html
│   │   ├── trade.html
│   │   ├── css/styles.css
│   │   └── js/trade.js
│   ├── company/                ← 🏢 Kompanija SPAJA
│   │   └── index.html
│   ├── ai/                     ← 🤖 IO OpenUI AO hub
│   │   └── index.html
│   ├── realtime/               ← Vite build (WebRTC frontend)
│   │   ├── index.html
│   │   └── assets/
│   └── chat/                   ← Vite build (Chat SSE frontend)
│       ├── index.html
│       └── assets/
│
├── put-a-realtime-webrtc/      ← WebRTC modul (Vite + TypeScript)
│   ├── web/                    ← Frontend (builduje se u public/realtime/)
│   └── server/                 ← Premešteno u api/realtime/
│
├── put-b-chat-socketio/        ← Chat SSE modul (Vite + TypeScript)
│   ├── web/                    ← Frontend (builduje se u public/chat/)
│   └── server/                 ← Premešteno u api/chat/
│
└── api/                        ← Vercel Serverless Functions
    ├── realtime/ephemeral.ts   ← OpenAI WebRTC token endpoint
    └── chat/stream.ts          ← OpenAI SSE stream endpoint
```

### Opis modula

| Modul | URL | Opis | Tehnologije |
|-------|-----|------|-------------|
| 🌍 **SPAJA Ekosistem** | `/` | Centralni hub — navigacija prema svim servisima | HTML, CSS |
| 🏦 **AI IQ World Bank** | `/bank/` | Bankarski portal sa AI asistentom i Omega AI | HTML, CSS |
| 💱 **AI IQ Menjačnica** | `/exchange/` | Kripto/fiat menjačnica sa live kursevima | HTML, CSS, JS |
| 🏢 **Kompanija SPAJA** | `/company/` | IT usluge, projekti, kontakt forma | HTML, Tailwind CDN |
| 🤖 **IO OpenUI AO** | `/ai/` | AI hub sa vezama ka WebRTC i Chat modulima | HTML, CSS |
| 🎙️ **WebRTC Real-time** | `/realtime/` | Glasovni/tekstualni AI u realnom vremenu | Vite, TypeScript, WebRTC |
| 💬 **AI Chat (SSE)** | `/chat/` | Streaming AI chat | Vite, TypeScript, SSE |

### Mapa URL-ova

```
https://your-domain.vercel.app/            → SPAJA Ekosistem landing
https://your-domain.vercel.app/bank/       → AI IQ World Bank
https://your-domain.vercel.app/exchange/   → AI IQ Menjačnica (landing)
https://your-domain.vercel.app/exchange/trade.html → Market Trade UI
https://your-domain.vercel.app/company/   → Kompanija SPAJA
https://your-domain.vercel.app/ai/        → IO OpenUI AO hub
https://your-domain.vercel.app/realtime/  → WebRTC AI razgovor
https://your-domain.vercel.app/chat/      → SSE AI Chat
https://your-domain.vercel.app/api/realtime/ephemeral → OpenAI WebRTC token
https://your-domain.vercel.app/api/chat/stream → OpenAI SSE stream
```

### Kako dodati novi modul

1. Kreiraj fasciklu `public/<ime-modula>/`
2. Dodaj `index.html` sa `← Nazad na SPAJA Ekosistem` linkom koji vodi na `/`
3. Dodaj karticu na `public/index.html` u `.modules` sekciji
4. Ako je potreban API, kreiraj serverless funkciju u `api/<ime-modula>/`
5. Dodaj modul u `vercel.json` routes (opciono — `/(.*) -> /$1` regel pokriva sve)
6. Dokumentuj modul u ovom fajlu

### Dizajn sistem

Sve stranice koriste konzistentan dark theme:

| Varijabla | Vrednost | Upotreba |
|-----------|---------|----------|
| `--bg` | `#0a0a0f` | Pozadina stranice |
| `--surface` | `#12121a` | Pozadina kartica/sekcija |
| `--border` | `#1e1e30` | Okviri i linije |
| `--accent` | `#7c3aed` | Ljubičasta — primarna |
| `--accent2` | `#2563eb` | Plava — sekundarna |
| `--text` | `#e2e8f0` | Tekst |
| `--muted` | `#94a3b8` | Muted/sekundarni tekst |

---

## 🇬🇧 English

### Architecture Overview

The SPAJA Ecosystem is a **mono-repo + micro-frontend** platform integrating 4 independent services within a single `IO-OPENUI-AO` repository. Each module has its own route, folder, and visual identity, but all share the same dark theme and navigation system.

### Module Descriptions

| Module | URL | Description | Technologies |
|--------|-----|-------------|--------------|
| 🌍 **SPAJA Ecosystem** | `/` | Central hub — navigation to all services | HTML, CSS |
| 🏦 **AI IQ World Bank** | `/bank/` | Banking portal with AI assistant and Omega AI | HTML, CSS |
| 💱 **AI IQ Exchange** | `/exchange/` | Crypto/fiat exchange with live rates | HTML, CSS, JS |
| 🏢 **Kompanija SPAJA** | `/company/` | IT services, projects, contact form | HTML, Tailwind CDN |
| 🤖 **IO OpenUI AO** | `/ai/` | AI hub linking to WebRTC and Chat modules | HTML, CSS |
| 🎙️ **WebRTC Real-time** | `/realtime/` | Voice/text AI in real-time | Vite, TypeScript, WebRTC |
| 💬 **AI Chat (SSE)** | `/chat/` | Streaming AI chat | Vite, TypeScript, SSE |

### How to Add a New Module

1. Create folder `public/<module-name>/`
2. Add `index.html` with a `← Back to SPAJA Ecosystem` link pointing to `/`
3. Add a card on `public/index.html` in the `.modules` section
4. If an API is needed, create a serverless function in `api/<module-name>/`
5. Add the module to `vercel.json` routes if needed (the `/(.*) -> /$1` catch-all covers all static files)
6. Document the module in this file

### URL Map

```
https://your-domain.vercel.app/            → SPAJA Ecosystem landing
https://your-domain.vercel.app/bank/       → AI IQ World Bank
https://your-domain.vercel.app/exchange/   → AI IQ Exchange (landing)
https://your-domain.vercel.app/exchange/trade.html → Market Trade UI
https://your-domain.vercel.app/company/   → Kompanija SPAJA
https://your-domain.vercel.app/ai/        → IO OpenUI AO hub
https://your-domain.vercel.app/realtime/  → WebRTC AI conversation
https://your-domain.vercel.app/chat/      → SSE AI Chat
https://your-domain.vercel.app/api/realtime/ephemeral → OpenAI WebRTC token
https://your-domain.vercel.app/api/chat/stream → OpenAI SSE stream
```

### Design System

All pages use a consistent dark theme defined by CSS variables. The primary accent is purple (`#7c3aed`) and the secondary is blue (`#2563eb`), on a near-black background (`#0a0a0f`).

---

## Vlasnik / Owner

**Nikola Spajić** — spajicn@gmail.com

© 2026 SPAJA Ekosistem. Sva prava zadržana / All rights reserved.
