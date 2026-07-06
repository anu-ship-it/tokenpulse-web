import { google } from 'googleapis'

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

function isConfigured(): boolean {
  return !!(SHEET_ID && SERVICE_ACCOUNT_EMAIL && PRIVATE_KEY)
}

async function getSheets() {
  const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({ version: 'v4', auth })
}

export interface SheetRow {
  sheet: 'Waitlist' | 'Support' | 'Uninstall'
  values: string[]
}

export async function appendRow({ sheet, values }: SheetRow): Promise<boolean> {
  if (!isConfigured()) {
    console.warn('[sheets] Not configured — skipping sheet append. Row:', values)
    return false
  }

  try {
    const sheets = await getSheets()
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID!,
      range: `${sheet}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), ...values]],
      },
    })
    return true
  } catch (err) {
    console.error('[sheets] Append failed:', err)
    return false
  }
}
