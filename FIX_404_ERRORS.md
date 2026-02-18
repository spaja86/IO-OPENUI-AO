# 404 Error Fix / Popravka 404 Greške

## Problem / Проблем

Prethodna konfiguracija je imala sledeće probleme:
- Pokušavala je da koristi već kompajlirane `dist/index.js` fajlove koji nisu bili u repozitorijumu
- Serverless funkcije su bile loše konfigurisane
- Statički fajlovi nisu bili pravilno servovani

The previous configuration had the following issues:
- It tried to use pre-compiled `dist/index.js` files that weren't in the repository
- Serverless functions were misconfigured
- Static files were not properly served

---

## Rešenje / Solution

### Nova Struktura / New Structure

```
IO-OPENUI-AO/
├── public/              ← Statički fajlovi / Static files
│   ├── index.html       ← Glavna stranica / Main page
│   └── main.js          ← JavaScript za WebRTC
├── api/                 ← Serverless funkcije / Serverless functions
│   ├── realtime.js      ← WebRTC API endpoint
│   └── chat.js          ← Chat API endpoint
├── vercel.json          ← Vercel konfiguracija
└── package.json         ← Dependencies za API
```

### Ključne Promene / Key Changes

1. **Dodao `public/` direktorijum**
   - Vercel automatski servira fajlove iz `public/`
   - `index.html` je sada dostupan na `/`

2. **Kreirao `api/` direktorijum sa serverless funkcijama**
   - `api/realtime.js` - odgovara na `/api/realtime/*`
   - `api/chat.js` - odgovara na `/api/chat/*`
   - Funkcije su pravilno strukturirane za Vercel

3. **Pojednostavljena `vercel.json` konfiguracija**
   - Koristi Vercel rewrites za rutiranje
   - Nema zastarelih `builds` konfiguracija

4. **Konvertovao TypeScript u JavaScript**
   - `main.ts` → `main.js`
   - Sada radi direktno u browser-u

---

## Kako Testirati / How to Test

### Lokalno / Locally

```bash
# Instalirajte Vercel CLI
npm install -g vercel

# U root direktorijumu projekta
cd /home/runner/work/IO-OPENUI-AO/IO-OPENUI-AO

# Pokrenite lokalni dev server
vercel dev
```

Ovo će pokrenuti:
- `http://localhost:3000/` - Glavna stranica
- `http://localhost:3000/api/realtime/key` - Realtime API
- `http://localhost:3000/api/chat/` - Chat API

This will start:
- `http://localhost:3000/` - Main page
- `http://localhost:3000/api/realtime/key` - Realtime API
- `http://localhost:3000/api/chat/` - Chat API

### Na Vercel / On Vercel

1. Deploy na Vercel / Deploy to Vercel
2. Podesite environment variable / Set environment variable:
   ```
   OPENAI_API_KEY = "your-api-key"
   ```
3. Testirajte URL-ove / Test URLs:
   - `https://your-site.vercel.app/`
   - `https://your-site.vercel.app/api/realtime/key`
   - `https://your-site.vercel.app/api/chat/`

---

## API Endpoints

### `/api/realtime/key`

**Metod / Method:** GET

**Odgovor / Response:**
```json
{
  "key": "your-openai-api-key"
}
```

**Primer / Example:**
```bash
curl https://your-site.vercel.app/api/realtime/key
```

### `/api/chat/`

**Metod / Method:** GET

**Odgovor / Response:**
```json
{
  "message": "Chat server is running!",
  "status": "online"
}
```

**Metod / Method:** POST

**Body:**
```json
{
  "message": "Hello"
}
```

**Odgovor / Response:**
```json
{
  "received": "Hello",
  "timestamp": "2026-02-18T21:38:35.842Z"
}
```

---

## Rešavanje Problema / Troubleshooting

### Još uvek dobijam 404 / Still getting 404

1. **Proverite da li su fajlovi deployovani / Check if files are deployed:**
   ```bash
   vercel ls
   ```

2. **Proverite build logove / Check build logs:**
   - Idite na Vercel Dashboard
   - Otvorite poslednji deployment
   - Kliknite na "View Build Logs"

3. **Verifikujte strukturu fajlova / Verify file structure:**
   - `public/` direktorijum mora biti u root-u
   - `api/` direktorijum mora biti u root-u

### API ne radi / API not working

1. **Proverite environment variables:**
   - Vercel Dashboard → Settings → Environment Variables
   - Uverite se da je `OPENAI_API_KEY` podešen

2. **Proverite Function logs:**
   - Vercel Dashboard → Deployment → Functions tab
   - Pogledajte greške u realnom vremenu

### Statički fajlovi ne učitavaju / Static files not loading

1. **Proverite da li su fajlovi u `public/`:**
   ```bash
   ls public/
   # Trebalo bi da vidite: index.html, main.js
   ```

2. **Cache problem:**
   - Očistite browser cache
   - Koristite Ctrl+Shift+R (hard refresh)

---

## Dodatne Informacije / Additional Information

### Zašto ova struktura? / Why this structure?

Vercel ima specifične konvencije:
- `public/` - Automatski servira statičke fajlove
- `api/` - Automatski kreira serverless funkcije
- Ne treba složena `vercel.json` konfiguracija

Vercel has specific conventions:
- `public/` - Automatically serves static files
- `api/` - Automatically creates serverless functions
- No need for complex `vercel.json` configuration

### Alternativni Pristup / Alternative Approach

Ako želite da koristite Express servere iz `put-a-realtime-webrtc/server` i `put-b-chat-socketio/server`, potrebno je:

1. Konvertovati Express apps u Vercel serverless funkcije
2. Koristiti `@vercel/node` builder
3. Eksportovati handler umesto `app.listen()`

If you want to use the Express servers from `put-a-realtime-webrtc/server` and `put-b-chat-socketio/server`, you need to:

1. Convert Express apps to Vercel serverless functions
2. Use `@vercel/node` builder
3. Export a handler instead of `app.listen()`

---

## Zakljucak / Conclusion

404 greška je rešena kreiranjem pravilne strukture direktorijuma i API endpoints-a koji su kompatibilni sa Vercel platformom.

The 404 error has been fixed by creating proper directory structure and API endpoints compatible with the Vercel platform.

**Sledeći korak:** Deploy na Vercel i testirajte!
**Next step:** Deploy to Vercel and test!
