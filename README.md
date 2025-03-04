# 📌 Referral App

Tento projekt je webová aplikace pro správu a sdílení slevových kuponů a referenčních kódů. Data jsou načítána z Google Sheets a aplikace je hostovaná na Vercelu.

---

## 🚀 Jak aplikaci nasadit na Vercel

1. **Vytvořte si účet na Vercelu**: [https://vercel.com](https://vercel.com)
2. **Forkněte nebo naklonujte tento repozitář**
3. **Importujte projekt do Vercelu**
4. **Nastavte environment variables** ve Vercel UI:
   - `GOOGLE_SERVICE_ACCOUNT_KEY` (obsah JSON klíče)
   - `SPREADSHEET_ID` (ID Google Sheets tabulky)
   - `SHEET_NAME` (Název listu s daty)
   - `SHEET_NAME_MENU` (Název listu s menu)
   - `NEXT_PUBLIC_APP_NAME` (Název aplikace zobrazovaný v UI)
   - `NEXT_PUBLIC_NAVBAR_COLOR` (Barva navigace)
5. **Deployněte aplikaci**

---

## 📄 Formát souboru `.env`

Pro správné fungování aplikace je nutné vytvořit `.env.local` soubor s následujícími hodnotami:

```env
NEXT_PUBLIC_APP_NAME=Moje Referral Aplikace
NEXT_PUBLIC_NAVBAR_COLOR=#bd5d38

GOOGLE_SERVICE_ACCOUNT_KEY='{
  "type": "service_account",
  "project_id": "xxx",
  "private_key_id": "xxx",
  "private_key": "-----BEGIN PRIVATE KEY-----\nxxx\n-----END PRIVATE KEY-----\n",
  "client_email": "xxx@xxx.iam.gserviceaccount.com",
  "client_id": "xxx",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxx.iam.gserviceaccount.com"
}'

SPREADSHEET_ID=1MMd28OsfrHJgnJ2qqfYSa3stEJKvtOOIPjdoI26djtM
SHEET_NAME=Coupons
SHEET_NAME_MENU=Menu
```

> ⚠ **DŮLEŽITÉ**: Nikdy nesdílejte `.env` soubor ani jeho obsah, protože obsahuje citlivé údaje.

---

## 🛠 Jak získat Google API klíč a ID tabulky

### 1️⃣ Vytvoření servisního účtu v Google Cloud

1. Otevřete **Google Cloud Console**: [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Vytvořte nový projekt nebo použijte existující.
3. Přejděte na **API a služby** > **Přihlašovací údaje**.
4. Klikněte na **+ Vytvořit přihlašovací údaje** → **Servisní účet**.
5. Zadejte název (např. `sheets-api`), vytvořte účet.
6. Přejděte na záložku **Klíče** → **Přidat klíč** → **Vytvořit nový klíč**.
7. Vyberte formát **JSON**, stáhněte si soubor a jeho obsah uložte do `GOOGLE_SERVICE_ACCOUNT_KEY` v `.env.local`.

### 2️⃣ Sdílení Google Sheet se servisním účtem

1. Otevřete Google Sheet s kupony.
2. Klikněte na **Sdílet**.
3. Přidejte e-mail servisního účtu (najdete ho v JSON klíči pod `client_email`).
4. Udělte oprávnění **Čtenář**.

### 3️⃣ Získání ID tabulky a názvu listu

- **SPREADSHEET_ID**: Najdete v URL tabulky mezi `d/` a `/edit`, např.:  
  `https://docs.google.com/spreadsheets/d/1MMd28OsfrHJgnJ2qqfYSa3stEJKvtOOIPjdoI26djtM/edit#gid=0`
- **SHEET_NAME**: Název listu dole v Google Tabulce (např. `Coupons`).
- **SHEET_NAME_MENU**: Název listu dole v Google Tabulce (např. `Menu`).


---

## 💰 Podpořte projekt

Pokud vám aplikace pomohla, můžete mě podpořit použitím některého z **referral kódů** dostupných na [fukjemi.cz/code](https://fukjemi.cz/code). Děkuji! 🙌

---

## ⚡ Rychlý start

1. **Nainstalujte závislosti**

   ```bash
   npm install
   ```

2. **Spusťte vývojový server**

   ```bash
   npm run dev
   ```

3. **Otevřete aplikaci** v prohlížeči na `http://localhost:3000`

---

## 📦 Technologie použité v projektu

- [Next.js](https://nextjs.org/) - React framework
- [Material UI](https://mui.com/) - Styling
- [Google Sheets API](https://developers.google.com/sheets/api) - Datový zdroj
- [Vercel](https://vercel.com/) - Hosting

---

## 👨‍💻 Jak přispět a pokračovat ve vývoji

Tento projekt je **open-source** a rád přivítám jakékoliv vylepšení! Pokud chcete přispět nebo pokračovat v jeho vývoji:

1. **Forkněte tento repozitář** a vytvořte si vlastní větev.
2. **Prozkoumejte existující kód** a přečtěte si dokumentaci.
3. **Navrhněte vylepšení nebo opravte chyby** – třeba zlepšení UI, nové funkce nebo optimalizace API.
4. **Otevřete pull request** a připojte popis změn.

Pokud potřebujete inspiraci, zkuste tento prompt pro ChatGPT:

```plaintext
Pokračuj ve vývoji této Next.js aplikace s Material UI. Zaměř se na vylepšení responzivity, optimalizaci výkonu a rozšíření funkcionality. Ujisti se, že aplikace je přístupná a dobře strukturovaná. Přidej unit testy, vylepši SEO a udržuj kód čistý. Využívej data z Google Sheets a zachovej aktuální CI/CD workflow pro Vercel.
```

---

## 📞 Kontakt

Pokud máte jakékoliv dotazy nebo návrhy na vylepšení, neváhejte mě kontaktovat!

📧 Email: cupon-github@fukjemi.cz

- 👤 **Main Developer**: ChatGPT
- 👤 **AI Supervisor**: FukjemiCZ
- 👤 **Owner**: FukjemiCZ
