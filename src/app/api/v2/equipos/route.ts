import { NextRequest, NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

export async function GET(
  _request: NextRequest
) {
  try {
    const response = await fetch(getSheetURL('Datos'))
    if (!response.ok) {
      throw new Error('Error al obtener datos de la hoja')
    }
    
    const data = await response.json()

    // Obtener equipos únicos
    const equiposUnicos = Array.from(new Set(data.map((item: any) => item.Equipo)))
      .map(equipo => {
        const equipoData = data.find((item: any) => item.Equipo === equipo)
        return {
          ID: equipoData.ID,
          Equipo: equipo
        }
      })

      return NextResponse.json({
        data: equiposUnicos,  
        total: equiposUnicos.length
      })
  } catch (error) {
    console.error('Error en /api/v2/equipos:', error)
    return NextResponse.json(
      { error: 'Error al obtener equipos' },
      { status: 500 }
    )
  }
}