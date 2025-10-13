import Papa from 'papaparse'

export async function GET() {
    const spreadsheetUrl = process.env.SPREADSHEET_URL ?? ""
  
  const response = await fetch(spreadsheetUrl)
  const csv = await response.text()

  console.log("response", response)
  
  const parsed = Papa.parse(csv, { header: true })
  return Response.json(parsed.data)
}
