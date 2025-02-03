import { NextRequest, NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

interface Goleador {
  ID: string;
  Equipo: string;
  Nombre: string;
  Apellido: string;
  Goles: number;
}

interface EquipoEstadisticas {
  ID: string;
  Equipo: string;
  GF: number;
  GC: number;
}

export async function GET(_request: NextRequest) {
  try {
    // Obtener datos de jugadores desde "Datos"
    const responseJugadores = await fetch(getSheetURL('Datos'))
    const dataJugadores = await responseJugadores.json()

    if (!dataJugadores || !Array.isArray(dataJugadores)) {
      throw new Error('Formato de datos inválido en Datos')
    }

    // Obtener datos de equipos desde "Estadisticas"
    const responseEquipos = await fetch(getSheetURL('Estadisticas'))
    const dataEquipos = await responseEquipos.json()

    if (!dataEquipos || !Array.isArray(dataEquipos)) {
      throw new Error('Formato de datos inválido en Estadisticas')
    }

    // Filtrar jugadores con goles válidos y convertir a números
    const jugadores: Goleador[] = dataJugadores
      .filter(jugador => jugador.Goles && !isNaN(parseInt(jugador.Goles)))
      .map(jugador => ({
        ID: jugador.ID || '',
        Equipo: jugador.Equipo || '',
        Nombre: jugador.Nombre || '',
        Apellido: jugador.Apellido || '',
        Goles: parseInt(jugador.Goles)
      }))

    // Top 10 goleadores
    const topGoleadores = [...jugadores]
      .sort((a, b) => b.Goles - a.Goles)
      .slice(0, 10)

    // Extraer equipos con GF y GC de "Estadisticas"
    const equipos: EquipoEstadisticas[] = dataEquipos.map(equipo => ({
      ID: equipo.ID || '',
      Equipo: equipo.Equipo || '',
      GF: parseInt(equipo.GF) || 0,
      GC: parseInt(equipo.GC) || 0
    }))

    // Ordenar por goles a favor
    const topEquiposGoleadores = [...equipos]
      .sort((a, b) => b.GF - a.GF)
      .slice(0, 10)

    // Ordenar por goles en contra (los menos goleados primero)
    const equiposMenosGoleados = [...equipos]
      .sort((a, b) => a.GC - b.GC)
      .slice(0, 10)

    return NextResponse.json({
      topGoleadores,
      topEquiposGoleadores,
      equiposMenosGoleados
    })
  } catch (error) {
    console.error('Error al obtener estadísticas:', error)
    return NextResponse.json({ error: 'Error al obtener estadísticas' }, { status: 500 })
  }
}