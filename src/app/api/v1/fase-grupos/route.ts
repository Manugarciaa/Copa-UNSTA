import { NextRequest, NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

export async function GET(_request: NextRequest) {
  try {
    const response = await fetch(getSheetURL('Fase de grupos'))
    const data = await response.json()
    
    return NextResponse.json({
      datos: data,
      total: data.length
    })
  } catch (error) {
    console.error('Error al obtener fase de grupos:', error)
    return NextResponse.json({ error: 'Error al obtener fase de grupos' }, { status: 500 })
  }
}