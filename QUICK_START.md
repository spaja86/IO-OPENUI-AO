# 🚀 Brzi Start / Quick Start

## DA, SAJT JE SPREMAN! / YES, THE SITE IS READY!

---

## 3 Jednostavna Koraka / 3 Simple Steps

### 🔗 Korak 1: Povežite sa Vercel
**Go to:** https://vercel.com/dashboard  
**Click:** "Add New Project" → Import GitHub Repo

### 🔑 Korak 2: Dodajte API Ključ
**Add Environment Variable:**
```
OPENAI_API_KEY = "sk-your-key-here"
```
Get your key: https://platform.openai.com/api-keys

### ✅ Korak 3: Deploy!
**Click:** "Deploy" button  
**Wait:** 2-3 minutes  
**Done!** 🎉

---

## 📋 Šta Dobijate / What You Get

- ✅ **Realtime WebRTC Server** → `/api/realtime/*`
- ✅ **Socket.IO Chat Server** → `/api/chat/*`
- ✅ **Web Interface** → `/`
- ✅ **Automatic SSL** (HTTPS)
- ✅ **Global CDN**
- ✅ **Auto-scaling**

---

## 📚 Dokumentacija / Documentation

- **Detaljno:** `DEPLOYMENT_CHECKLIST.md` (Srpski + English)
- **Tehnički:** `VERCEL_DEPLOYMENT.md` (English)

---

## 🆘 Pomoć / Help

**Provera / Check:**
```bash
# Testirajte da li API radi
curl https://your-site.vercel.app/api/realtime/key
```

**Problemi? / Issues?**
- Proverite Vercel Logs
- Verifikujte OPENAI_API_KEY
- Pogledajte DEPLOYMENT_CHECKLIST.md

---

**Sve je spremno - kliknite Deploy! 🚀**  
**Everything is ready - just click Deploy! 🚀**

---

## ⚠️ NAPOMENA O 404 GREŠKAMA / NOTE ABOUT 404 ERRORS

Ako dobijate 404 greške nakon deployment-a, problem je verovatno rešen!

If you're getting 404 errors after deployment, the problem has likely been fixed!

**Proverite / Check:**
- `public/` direktorijum mora postojati sa `index.html`
- `api/` direktorijum mora postojati sa API funkcijama

**Za detalje / For details:**
→ Pogledajte `FIX_404_ERRORS.md` za kompletno objašnjenje
→ See `FIX_404_ERRORS.md` for complete explanation

