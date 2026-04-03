# I/OOpenUI/AO

Platforma za AI komunikaciju u realnom vremenu — glasovna konverzacija (WebRTC) i tekstualni chat (SSE streaming).

**Domen:** [https://www.ioopenuiao.com](https://www.ioopenuiao.com)

---

## Struktura projekta

```
/
├── index.html                           ← Landing page
├── vercel.json                          ← Vercel routing + function config
├── package.json                         ← Root build script (pokreće oba Vite build-a)
├── api/
│   ├── health.ts                        ← GET  /api/health
│   ├── realtime/ephemeral.ts            ← POST /api/realtime/ephemeral (WebRTC token)
│   └── chat/stream.ts                   ← POST /api/chat/stream (SSE streaming)
├── put-a-realtime-webrtc/web/           ← Vite app → /realtime/
└── put-b-chat-socketio/web/             ← Vite app → /chat/
```

---

## Deployment na Vercel (sve automatski)

### Korak 1 — Poveži repo

1. Idi na [vercel.com/new](https://vercel.com/new)
2. Izaberi repo `spaja86/IO-OPENUI-AO`
3. Vercel automatski detektuje `package.json` i pokrne `npm ci && npm run build`
4. Klikni **Deploy**

> Framework Preset: **Other** · Build Command: `npm run build` · Output Directory: `.`

### Korak 2 — Postavi JEDNU environment varijablu

Vercel Dashboard → Settings → Environment Variables:

| Key | Value | Environment |
|---|---|---|
| `OPENAI_API_KEY` | `sk-...` (tvoj OpenAI ključ) | Production, Preview, Development |

**To je sve. Nema zasebnih servera, nema dodatnih konfiguracija.**

Opciono (ako hoćeš drugi model):

| Key | Default vrednost |
|---|---|
| `REALTIME_MODEL` | `gpt-4o-realtime-preview` |
| `RESP_MODEL` | `gpt-4o-mini` |

---

## API endpointovi (Vercel Serverless Functions)

| Endpoint | Metod | Opis | Timeout |
|---|---|---|---|
| `/api/health` | GET | Health check | 10 s |
| `/api/realtime/ephemeral` | POST | Kreira ephemeral token za WebRTC sesiju | 30 s |
| `/api/chat/stream` | POST `{ "text": "..." }` | SSE streaming chat odgovor | 60 s |

---

## Lokalni razvoj

```bash
# 1. Postavi environment varijablu
cp .env.example .env   # (videti dole za format)

# 2. Instaliraj zavisnosti i pokreni build
npm ci
npm run build

# 3. Pokreni Vite dev servere
cd put-a-realtime-webrtc/web && npm ci && npm run dev   # → http://localhost:5173
cd put-b-chat-socketio/web && npm ci && npm run dev    # → http://localhost:5174
```

`.env` u root-u:
```
OPENAI_API_KEY=sk-...
```

---

## Sigurnost

- `OPENAI_API_KEY` se čita **isključivo** u serverless funkcijama (`api/`) — nikad ne dolazi do browsera.
- U produkciji sve ide preko HTTPS (Vercel automatski).
- HTTPS je obavezan za WebRTC mikrofon pristup u svim modernim browserima.
- Rate limit na `/api/realtime/ephemeral`: 5 zahteva/min/IP.
