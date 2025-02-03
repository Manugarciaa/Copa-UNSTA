import { NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

interface JugadorRow {
  ID: string
  Nombre: string
  Apellido: string
  Equipo: string
  Posicion: string
  Numero: string
  Carrera: string
} 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const equipoId = searchParams.get('equipo')
  const search = searchParams.get('q')?.toLowerCase()

  try {
    const response = await fetch(getSheetURL('Datos'))
    const data: JugadorRow[] = await response.json()

    let jugadores = data.map(row => ({
      id: row.ID,
      nombre: row.Nombre,
      apellido: row.Apellido,
      equipo: row.Equipo,
      posicion: row.Posicion,
      numero: row.Numero,
      carrera: row.Carrera
    }))

    if (equipoId) {
      jugadores = jugadores.filter(j => j.equipo === equipoId)
    }

    if (search) {
      jugadores = jugadores.filter(j => 
        j.nombre.toLowerCase().includes(search) ||
        j.posicion.toLowerCase().includes(search)
      )
    }

    const startIndex = (page - 1) * limit
    const jugadoresPaginados = jugadores.slice(startIndex, startIndex + limit)

    return NextResponse.json({
      jugadores: jugadoresPaginados,
      total: jugadores.length,
      page,
      limit
    })
  } catch (error) {
    console.error('Error al obtener jugadores:', error)
    return NextResponse.json({ error: 'Error al obtener jugadores' }, { status: 500 })
  }
}