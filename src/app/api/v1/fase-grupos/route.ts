import { NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

export async function GET(request: Request) {
  try {
    const response = await fetch(getSheetURL('Fase de grupos'))
    const data = await response.json()
    
    return NextResponse.json({
      datos: data,
      total: data.length
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener fase de grupos' }, { status: 500 })
  }
}