import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
    // Načtení env proměnných
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.SPREADSHEET_ID;
    // Pro Menu použijeme speciální list (např. "Menu")
    const menuSheetName = process.env.SHEET_NAME_MENU;

    const credentials = JSON.parse(serviceAccountKey as string);
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

    // Autorizace
    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth });

    // Vyčteme Google Sheet -> list Menu
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: menuSheetName, // "Menu"
    });

    const rows = response.data.values || [];
    // Očekáváme ["Name","Url"] v hlavičce
    const [header, ...dataRows] = rows;

    const menuItems = dataRows.map((row) => ({
      name: row[0] || "",
      url: row[1] || "#",
    }));

    return NextResponse.json({ menu: menuItems }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching menu data:", error);
    return NextResponse.json({ error: "Failed to fetch menu." }, { status: 500 });
  }
}
