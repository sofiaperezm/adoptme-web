import Papa from 'papaparse'
import { transformAnimalData } from '../services/animals'
import { AnimalDTO } from '../../contracts/animal-dto'

export async function GET() {
    const spreadsheetUrl = process.env.SPREADSHEET_URL ?? ""
  
  const response = await fetch(spreadsheetUrl)
  const csv = await response.text()
  
  const parsed = Papa.parse(csv, { header: true })
  const animals = await transformAnimalData(parsed.data as AnimalDTO[])
  console.log("animalData", animals)
  return Response.json(animals)
}
