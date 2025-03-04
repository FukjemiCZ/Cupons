import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    // 1) Načtení proměnných z Environment Variables
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const sheetName = process.env.SHEET_NAME;

    if (!serviceAccountKey || !spreadsheetId || !sheetName) {
      throw new Error('Chybí některá z env proměnných!');
    }

    // 2) Parsování JSON klíče a příprava autentizace
    const parsedKey = JSON.parse(serviceAccountKey);

    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const auth = new google.auth.JWT(
      parsedKey.client_email,
      undefined,
      parsedKey.private_key,
      scopes
    );

    // 3) Volání Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetName, // např. "MyCoupons" nebo "List1"
    });

    const rows = response.data.values || [];

    // Předpokládejme, že první řádek v tabulce jsou záhlaví: [Platform, Kupon, URL, Logo]
    // Pokud je vaše tabulka jiná, upravte si kód podle potřeby.
    const [header, ...dataRows] = rows;

    // Transformace pole hodnot do pole objektů
    const coupons = dataRows.map((row) => {
      return {
        Platform: row[0] || '',
        Kupon: row[1] || '',
        URL: row[2] || '',
        Logo: row[3] || '',
      };
    });

    // 4) Vrácení dat v JSON formátu
    return NextResponse.json(coupons);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    // Vrátíme chybový JSON s HTTP kódem 500
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
