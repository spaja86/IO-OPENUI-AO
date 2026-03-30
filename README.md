# IO-OPENUI-AO

![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.0-646cff?style=flat-square&logo=vite)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> **Platforma za profesionalnu saradnju uz WebRTC video pozive, Socket.IO chat i igrice**

🔗 **Live:** https://io-openui-ao.vercel.app

---

## ✨ Features

- 📡 **WebRTC Video** — Peer-to-peer video pozivi direktno u pretrazivacu
- 💬 **Real-time Chat** — Socket.IO multi-channel chat sa sistemskim notifikacijama
- 🎮 **Igrice** — Tic-Tac-Toe (sa AI/minimax), Tehnoloski Kviz sa timerom
- 🤖 **AI Asistent** — Pametni chat bot (coming soon)
- 🔒 **E2E Enkripcija** — DTLS/SRTP privatnost
- 📱 **Cross-platform** — Responsive dizajn za sve uredaje
- 🌙 **Dark Theme** — Glassmorphism dizajn sa ljubicastom temom

## 📸 Screenshots

> *Stranice: Pocetna, Chat, Video, Igrice, O Nama, Kontakt*

---

## 🚀 Instalacija

```bash
# Klonirajte repo
git clone https://github.com/spaja86/IO-OPENUI-AO.git
cd IO-OPENUI-AO

# Instalirajte zavisnosti
npm install

# Pokrenite development server
npm run dev
```

Otvorite http://localhost:3000

## 🏗️ Struktura projekta

```
src/
  main.tsx              ← React entry point
  App.tsx               ← Router + Layout
  index.css             ← Globalni CSS varijable + animacije
  types/
    index.ts            ← TypeScript interfejsi
  constants/
    index.ts            ← OWNER_INFO, PLATFORMS, FEATURES, QUIZ
  components/
    layout/
      Header.tsx        ← Sticky nav sa mobile hamburger
      Footer.tsx        ← Owner info, social media, platform links
    ui/
      PlatformCard.tsx  ← Kartica za platforme
      FeatureCard.tsx   ← Kartica za features
      Button.tsx        ← Reusable button
      Badge.tsx         ← Tech stack badge
    demos/
      ChatDemo.tsx      ← Mock Socket.IO chat UI
      VideoCallDemo.tsx ← Mock WebRTC video call UI
      GameHub.tsx       ← Quiz igra sa timerom
      TicTacToe.tsx     ← Tic-Tac-Toe sa minimax AI
  hooks/
    useScrollAnimation.ts ← Intersection Observer hook
    useWebRTC.ts          ← Mock WebRTC hook
    useSocketIO.ts        ← Mock Socket.IO hook
    useTheme.ts           ← Dark/light mode hook
  pages/
    HomePage.tsx          ← Pocetna sa hero, stats, features, ecosystem
    FeaturesPage.tsx      ← Sve funkcionalnosti + roadmap
    AboutPage.tsx         ← O platformi, tech stack, vlasniku
    ContactPage.tsx       ← Kontakt forma + info
    GamesPage.tsx         ← Igrice hub
    ChatPage.tsx          ← Chat demo stranica
    VideoPage.tsx         ← Video call demo stranica
```

## 📦 Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # TypeScript check + Vite build
npm run preview  # Preview production build
npm run deploy   # Deploy na Vercel
```

## 🚀 Deployment na Vercel

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Deploy u produkciju
npm run deploy
```

Vercel automatski prepoznaje Vite projekte. `vercel.json` sadrzi SPA rewrites i security headers.

---

## 🌐 Ekosistem Platformi

Sve 4 platforme saradjuju medjusobno:

| Platforma | Opis | Tech |
|-----------|------|------|
| 🌐 [IO-OPENUI-AO](https://io-openui-ao.vercel.app) | Saradnja, igrice, real-time | React, WebRTC, Socket.IO |
| 🏦 [Ai-Iq-World-Bank](https://github.com/spaja86/Ai-Iq-World-Bank) | Profesionalna svetska banka | HTML, CSS, JS |
| 💱 [Ai-Iq-Menjacnica](https://github.com/spaja86/Ai-Iq-Menja-nica) | Kripto menjacnica | JavaScript |
| 🏢 [Kompanija SPAJA](https://github.com/spaja86/Kompanija-SPAJA) | Maticna IT kompanija | Next.js, TypeScript |

---

## 👤 Vlasnik

**Nikola Spajic**

- 📧 spajicn@yahoo.com
- 📧 spajicn@gmail.com
- 📘 [Facebook /Spaja86](https://www.facebook.com/Spaja86)
- 📷 [Instagram @spaja.1986](https://www.instagram.com/spaja.1986)
- 🎵 [TikTok @spaja.1986](https://www.tiktok.com/@spaja.1986)
- 📺 [YouTube @spajanikopenevolution](https://www.youtube.com/@spajanikopenevolution)
- 💻 [GitHub spaja86](https://github.com/spaja86)

---

## 📄 Licenca

MIT © 2026 Nikola Spajic
