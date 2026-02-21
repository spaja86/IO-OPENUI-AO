# I/OOpenUI/AO

Platforma za AI komunikaciju u realnom vremenu — glasovna konverzacija (WebRTC) i tekstualni chat (Socket.IO).

**Domen:** [https://www.ioopenuiao.com](https://www.ioopenuiao.com)

---

## Struktura projekta

```
/
├── index.html                        ← Landing page (servisira se sa /)
├── vercel.json                       ← Vercel routing (landing + /realtime/ + /chat/)
├── put-a-realtime-webrtc/
│   ├── server/                       ← Express backend (ephemeral key, CORS, rate-limit)
│   └── web/                          ← Vite frontend (build → /realtime/)
└── put-b-chat-socketio/
    ├── server/                       ← Express + Socket.IO backend (streaming chat)
    └── web/                          ← Vite frontend (build → /chat/)
```

---

## Deployment na Vercel (frontend)

### 1. Postavi Vercel projekat

U Vercel dashboard-u:
- **Root Directory:** `/` (repo root)
- **Framework Preset:** Other / None
- **Build Command:** `cd put-a-realtime-webrtc/web && npm ci && npm run build && cd ../../put-b-chat-socketio/web && npm ci && npm run build`
- **Output Directory:** `.` (repo root — `index.html` + `realtime/` + `chat/` folderi)
- **Install Command:** _(ostaviti prazno)_

### 2. Postavi environment varijable u Vercel

| Varijabla | Vrednost |
|---|---|
| `VITE_SERVER_URL` | URL tvog Realtime servera, npr. `https://realtime-server.onrender.com` |
| `VITE_SOCKET_URL` | URL tvog Chat servera, npr. `https://chat-server.onrender.com` |

> **Bez ovih varijabli frontend će pokušati da se konektuje na `localhost` i neće raditi u produkciji!**

---

## Deployment backend servera

Backend serveri zahtevaju persistentnu Node.js sredinu (Vercel Serverless **ne podržava** WebSocket/Socket.IO bez Pro plana).

**Preporučeni hosting:** [Render.com](https://render.com) (besplatan tier), [Railway.app](https://railway.app), ili [Fly.io](https://fly.io).

### Put A – Realtime server (port 3000)

```bash
cd put-a-realtime-webrtc/server
cp .env.example .env
# Uredi .env: postavi OPENAI_API_KEY i CORS_ORIGIN
npm ci
npm run dev       # development
npm run start     # production (posle npm run build)
```

#### .env vrednosti za produkciju
```
OPENAI_API_KEY=sk-...
REALTIME_MODEL=gpt-4o-realtime-preview
PORT=3000
CORS_ORIGIN=https://ioopenuiao.com,https://www.ioopenuiao.com
```

### Put B – Chat server (port 3001)

```bash
cd put-b-chat-socketio/server
cp .env.example .env
# Uredi .env: postavi OPENAI_API_KEY i CORS_ORIGIN
npm ci
npm run dev       # development
npm run start     # production (posle npm run build)
```

#### .env vrednosti za produkciju
```
OPENAI_API_KEY=sk-...
RESP_MODEL=gpt-4o-mini
PORT=3001
CORS_ORIGIN=https://ioopenuiao.com,https://www.ioopenuiao.com
```

---

## Lokalni razvoj

```bash
# Terminal 1 – Realtime server
cd put-a-realtime-webrtc/server && cp .env.example .env && npm ci && npm run dev

# Terminal 2 – Realtime frontend
cd put-a-realtime-webrtc/web && npm ci && npm run dev
# → http://localhost:5173

# Terminal 3 – Chat server
cd put-b-chat-socketio/server && cp .env.example .env && npm ci && npm run dev

# Terminal 4 – Chat frontend
cd put-b-chat-socketio/web && npm ci && npm run dev
# → http://localhost:5174
```

---

## Sigurnosne napomene

- `OPENAI_API_KEY` **nikad** ne sme biti u frontend kodu niti commitovan u repo.
- U produkciji uvek koristi **HTTPS** (obavezno za WebRTC mikrofon).
- CORS je konfigurisan na serveru da prihvata samo dozvoljene origine.
- Rate limit na `/api/realtime/ephemeral`: 5 zahteva/min/IP.
