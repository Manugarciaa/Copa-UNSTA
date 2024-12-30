import { NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

interface JugadorRow {
  ID: string
  Equipo: string
  Jugador: string
  Nombre: string
  Apellido: string
  Carrera: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const equipo = searchParams.get('equipo')
  const search = searchParams.get('q')?.toLowerCase()

  try {
    const response = await fetch(getSheetURL('Datos'))
    const data: JugadorRow[] = await response.json()

    let filteredData = data

    if (equipo) {
      filteredData = filteredData.filter(row => row.Equipo === equipo)
    }

    if (search) {
      filteredData = filteredData.filter(row => 
        row.Nombre.toLowerCase().includes(search) ||
        row.Apellido.toLowerCase().includes(search) ||
        row.Carrera.toLowerCase().includes(search)
      )
    }

    const startIndex = (page - 1) * limit
    const paginatedData = filteredData.slice(startIndex, startIndex + limit)

    return NextResponse.json({
      jugadores: paginatedData,
      total: filteredData.length,
      page,
      limit
    })
  } catch (error) {
    console.error('Error al obtener datos:', error)
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 })
  }
}