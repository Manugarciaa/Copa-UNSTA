import { NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

export async function GET(request: Request) {
  try {
    const response = await fetch(getSheetURL('Estadísticas'))
    const data = await response.json()
    
    return NextResponse.json({
      estadisticas: data,
      total: data.length
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener estadísticas' }, { status: 500 })
  }
}