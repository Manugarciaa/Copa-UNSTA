import { NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

const CRONOGRAMA_URL = getSheetURL('Cronograma')

interface PartidoRow {
  Partido: string
  Descripcion: string
  Equipo1: string
  Equipo2: string
  Fecha: string
  Hora: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const equipo = searchParams.get('equipo')
  const fecha = searchParams.get('fecha')

  try {
    const response = await fetch(CRONOGRAMA_URL)
    const data: PartidoRow[] = await response.json()

    let partidos = data.map(row => ({
      partido: row.Partido,
      descripcion: row.Descripcion,
      equipo1: row.Equipo1,
      equipo2: row.Equipo2,
      fecha: row.Fecha,
      hora: row.Hora
    }))

    if (equipo) {
      partidos = partidos.filter((p) => 
        p.equipo1.toLowerCase() === equipo.toLowerCase() || 
        p.equipo2.toLowerCase() === equipo.toLowerCase()
      )
    }

    if (fecha) {
      partidos = partidos.filter((p) => p.fecha === fecha)
    }

    const startIndex = (page - 1) * limit
    const partidosPaginados = partidos.slice(startIndex, startIndex + limit)

    return NextResponse.json({
      partidos: partidosPaginados,
      total: partidos.length,
      page,
      limit
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener cronograma' }, { status: 500 })
  }
}