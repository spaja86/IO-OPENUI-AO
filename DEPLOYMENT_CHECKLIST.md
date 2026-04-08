# Deployment Checklist / Kontrolna Lista Za Pokretanje

## ✅ Spremno za Deploy / Ready to Deploy

Svi konfiguracioni fajlovi su kreirani i testirani.  
All configuration files have been created and tested.

---

## 🚀 Koraci za Pokretanje / Deployment Steps

### 1. Povežite Repozitorijum sa Vercel / Connect Repository to Vercel

**Srpski:**
1. Idite na [Vercel Dashboard](https://vercel.com/dashboard)
2. Kliknite dugme **"Add New Project"**
3. Izaberite **"Import Git Repository"**
4. Pronađite i selektujte repozitorijum `spaja86/IO-OPENUI-AO`
5. Kliknite **"Import"**

**English:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"** button
3. Select **"Import Git Repository"**
4. Find and select the `spaja86/IO-OPENUI-AO` repository
5. Click **"Import"**

---

### 2. Konfiguracija Projekta / Project Configuration

**Srpski:**
Vercel će automatski detektovati `vercel.json` konfiguraciju. Ne morate ništa menjati u ovom koraku.

**English:**
Vercel will automatically detect the `vercel.json` configuration. You don't need to change anything in this step.

---

### 3. Podesite Promenljive Okruženja / Set Environment Variables

**Srpski:**
Pre nego što kliknete "Deploy", dodajte sledeće promenljive okruženja:

**English:**
Before clicking "Deploy", add the following environment variables:

#### Obavezno / Required:

```
OPENAI_API_KEY = "sk-..."
```
➡️ Unesite vaš OpenAI API ključ koji možete dobiti na: https://platform.openai.com/api-keys

➡️ Enter your OpenAI API key which you can get from: https://platform.openai.com/api-keys

#### Opciono / Optional:

```
REALTIME_MODEL = "gpt-4-realtime-preview"
RESP_MODEL = "gpt-3.5-turbo"
CORS_ORIGIN = "*"
PORT = "3000"
NODE_ENV = "production"
```

**Kako dodati promenljive / How to add variables:**
1. U Vercel projektu, idite na karticu **"Environment Variables"**
2. Za svaku promenljivu unesite **Key** i **Value**
3. Izaberite okruženje: **Production**, **Preview**, i **Development** (sve tri)
4. Kliknite **"Add"**

---

### 4. Pokrenite Deploy / Deploy

**Srpski:**
1. Kliknite dugme **"Deploy"**
2. Vercel će:
   - Instalirati npm zavisnosti
   - Izgraditi oba TypeScript servera
   - Pokrenuti oba servisa
3. Sačekajte 2-3 minuta
4. Deploy je završen! 🎉

**English:**
1. Click the **"Deploy"** button
2. Vercel will:
   - Install npm dependencies
   - Build both TypeScript servers
   - Launch both services
3. Wait 2-3 minutes
4. Deployment complete! 🎉

---

## 🌐 Vaš Sajt / Your Site

Nakon uspešnog deploy-a, vaš sajt će biti dostupan na:  
After successful deployment, your site will be available at:

```
https://io-openui-ao.vercel.app
```
(ili vaš custom domen ako ste ga povezali)  
(or your custom domain if you've connected one)

### API Endpoints:

- **Realtime WebRTC API:**  
  `https://vaš-sajt.vercel.app/api/realtime/key`

- **Chat Socket.IO API:**  
  `https://vaš-sajt.vercel.app/api/chat/`

- **Web Interface:**  
  `https://vaš-sajt.vercel.app/`

---

## 🔧 Testiranje / Testing

**Srpski:**
Nakon deploy-a, testirajte:
1. Otvorite glavni URL u browser-u
2. Proverite da li se web interfejs učitava
3. Testirajte API endpoint-e pomoću curl ili Postman:

**English:**
After deployment, test:
1. Open the main URL in your browser
2. Check if the web interface loads
3. Test the API endpoints using curl or Postman:

```bash
# Test Realtime API
curl https://vaš-sajt.vercel.app/api/realtime/key

# Test Chat API  
curl https://vaš-sajt.vercel.app/api/chat/
```

---

## 📊 Monitoring / Praćenje

**Srpski:**
U Vercel dashboard-u možete videti:
- Logs servera (u realnom vremenu)
- Metrike performansi
- Broj zahteva
- Greške

**English:**
In the Vercel dashboard you can see:
- Server logs (in real-time)
- Performance metrics
- Number of requests
- Errors

Idite na / Go to: **Deployments** → **[Vaš projekat]** → **Logs**

---

## 🔄 Automatski Deploy / Automatic Deployment

**Srpski:**
Svaki put kada napravite push na GitHub:
- Vercel automatski pokreće novi build
- Nova verzija se automatski objavljuje
- Stari deployment ostaje kao backup

**English:**
Every time you push to GitHub:
- Vercel automatically triggers a new build
- New version is automatically published
- Old deployment remains as backup

---

## 🆘 Rešavanje Problema / Troubleshooting

### Problem: Build Failed / Neuspelo građenje

**Rešenje / Solution:**
1. Proverite Vercel logs
2. Verifikujte da su sve environment variables postavljene
3. Proverite da je OPENAI_API_KEY ispravan

### Problem: 500 Internal Server Error

**Rešenje / Solution:**
1. Proverite da li je OPENAI_API_KEY postavljen
2. Pogledajte Function Logs u Vercel dashboard-u
3. Proverite CORS_ORIGIN ako koristite custom domen

### Problem: API ne radi / API not working

**Rešenje / Solution:**
1. Verifikujte da rutiranje u `vercel.json` odgovara vašim zahtevima
2. Testirajte sa curl za više detalja
3. Proverite Vercel Function Logs

---

## 📚 Dodatne Informacije / Additional Information

Za detaljnija uputstva, pogledajte:  
For detailed instructions, see:

- `VERCEL_DEPLOYMENT.md` - Kompletna dokumentacija
- `.env.example` fajlove u server direktorijumima

---

## ✅ Checklist Pre Deploy-a / Pre-Deployment Checklist

- [ ] GitHub repozitorijum je aktivan i dostupan
- [ ] Imate Vercel nalog
- [ ] Imate OpenAI API ključ
- [ ] Pregledali ste konfiguracione fajlove
- [ ] Razumete kako podešavati environment variables

## ✅ Checklist Nakon Deploy-a / Post-Deployment Checklist

- [ ] Sajt se učitava bez greške
- [ ] Realtime API endpoint odgovara
- [ ] Chat API endpoint odgovara
- [ ] Web interface se prikazuje pravilno
- [ ] Proverili ste logs za greške
- [ ] Custom domen povezan (opciono)

---

**Platforma je spremna! Srećno sa pokretanjem! 🚀**  
**Platform is ready! Good luck with your launch! 🚀**
