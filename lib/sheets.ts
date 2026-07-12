import { google } from 'googleapis'

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!email || !key) return null

  return new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

export async function appendToSheet(tab: string, values: string[]) {
  const auth = getAuth()
  const sheetId = process.env.GOOGLE_SHEET_ID

  // Graceful degrade — if credentials missing, skip silently
  if (!auth || !sheetId) {
    console.warn('Google Sheets credentials not configured — skipping sheet write')
    return
  }

  try {
    const sheets = google.sheets({ version: 'v4', auth })
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tab}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    })
  } catch (err) {
    // Never let sheet errors break the API response
    console.error('Google Sheets write failed:', err)
  }
}
