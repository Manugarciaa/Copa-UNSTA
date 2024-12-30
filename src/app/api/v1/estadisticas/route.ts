import { NextRequest, NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

export async function GET(
  _request: NextRequest
) {
  try {
    const response = await fetch(getSheetURL('Estadísticas'))
    const data = await response.json()
    
    return NextResponse.json({
      estadisticas: data,
      total: data.length
    })
  } catch (err) {
    console.error('Error:', err)
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    )
  }
}