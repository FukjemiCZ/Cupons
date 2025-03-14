# 📌 Referral App

This project is a web application for managing and sharing discount coupons and referral codes. The data is loaded from Google Sheets, and the application is hosted on Vercel.

---

## 🚀 How to Deploy the Application on Vercel

1. **Create an account on Vercel**: [https://vercel.com](https://vercel.com)
2. **Fork or clone this repository**
3. **Import the project into Vercel**
4. **Set up environment variables** in the Vercel UI:
   - `GOOGLE_SERVICE_ACCOUNT_KEY` (JSON key content)
   - `SPREADSHEET_ID` (Google Sheets spreadsheet ID)
   - `SHEET_NAME` (Name of the sheet containing data)
   - `SHEET_NAME_MENU` (Name of the sheet containing menu data)
   - `NEXT_PUBLIC_APP_NAME` (Application name displayed in the UI)
   - `NEXT_PUBLIC_NAVBAR_COLOR` (Navigation bar color)
5. **Deploy the application**

---

## 📄 `.env` File Format

To ensure the application functions correctly, create a `.env.local` file with the following values:

```env
NEXT_PUBLIC_APP_NAME=My Referral App
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

> ⚠ **IMPORTANT**: Never share the `.env` file or its contents, as it contains sensitive information.

---

## 🛠 How to Obtain Google API Key and Spreadsheet ID

### 1️⃣ Creating a Service Account in Google Cloud

1. Open **Google Cloud Console**: [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Create a new project or use an existing one.
3. Navigate to **API & Services** > **Credentials**.
4. Click **+ Create Credentials** → **Service Account**.
5. Enter a name (e.g., `sheets-api`) and create the account.
6. Go to the **Keys** tab → **Add Key** → **Create New Key**.
7. Select **JSON** format, download the file, and save its content into `GOOGLE_SERVICE_ACCOUNT_KEY` in `.env.local`.

### 2️⃣ Sharing Google Sheet with the Service Account

1. Open the Google Sheet containing coupons.
2. Click **Share**.
3. Add the service account email (found in the JSON key under `client_email`).
4. Grant **Viewer** permission.

### 3️⃣ Obtaining the Spreadsheet ID and Sheet Name

- **SPREADSHEET_ID**: Found in the spreadsheet URL between `d/` and `/edit`, e.g.:  
  `https://docs.google.com/spreadsheets/d/1MMd28OsfrHJgnJ2qqfYSa3stEJKvtOOIPjdoI26djtM/edit#gid=0`
- **SHEET_NAME**: The sheet name at the bottom of the Google Sheet (e.g., `Coupons`).
- **SHEET_NAME_MENU**: The sheet name at the bottom of the Google Sheet (e.g., `Menu`).

---

## 💰 Support the Project

If this application has been helpful to you, you can support me by using one of the **referral codes** available at [code.fukjemi.cz](https://code.fukjemi.cz). Thank you! 🙌

---

## ⚡ Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open the application** in your browser at `http://localhost:3000`

---

## 📦 Technologies Used in the Project

- [Next.js](https://nextjs.org/) - React framework
- [Material UI](https://mui.com/) - Styling
- [Google Sheets API](https://developers.google.com/sheets/api) - Data source
- [Vercel](https://vercel.com/) - Hosting

---

## 👨‍💻 How to Contribute and Continue Development

This project is **open-source**, and I welcome any improvements! If you want to contribute or continue its development:

1. **Fork this repository** and create your own branch.
2. **Explore the existing code** and read the documentation.
3. **Suggest improvements or fix bugs** – such as UI enhancements, new features, or API optimizations.
4. **Open a pull request** and include a description of the changes.

If you need inspiration, try this prompt for ChatGPT:

```plaintext
Continue developing this Next.js application with Material UI. Focus on improving responsiveness, performance optimization, and expanding functionality. Ensure the application is accessible and well-structured. Add unit tests, enhance SEO, and keep the code clean. Utilize data from Google Sheets and maintain the current CI/CD workflow for Vercel.
```

---

## 📞 Contact

If you have any questions or suggestions for improvement, feel free to contact me!

📧 Email: cupon-github@fukjemi.cz

- 👤 **Main Developer**: ChatGPT
- 👤 **AI Supervisor**: FukjemiCZ
- 👤 **Owner**: FukjemiCZ



---
---

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

Pokud vám aplikace pomohla, můžete mě podpořit použitím některého z **referral kódů** dostupných na [code.fukjemi.cz](https://code.fukjemi.cz). Děkuji! 🙌

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
