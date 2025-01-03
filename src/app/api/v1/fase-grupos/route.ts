import { NextRequest, NextResponse } from 'next/server'
import { getSheetURL } from '../utils/constants'

interface EquipoGrupo {
  ID: string
  Equipo: string
  Pts: number
  PJ: number
  PG: number
  PE: number
  PP: number
  GF: number
  GC: number
  Dif: number
  Grupo: string
}

export async function GET(_request: NextRequest) {
  try {
    const response = await fetch(getSheetURL('Fase de grupos'))
    const data = await response.json()
    
    if (!data || !Array.isArray(data)) {
      throw new Error('Formato de datos inválido')
    }

    // Transformar los datos en el formato deseado
    const grupos = data.reduce((acc: { [key: string]: EquipoGrupo[] }, item: any) => {
      const grupo = item.Grupo || ''
      
      if (!acc[grupo]) {
        acc[grupo] = []
      }

      acc[grupo].push({
        ID: item.ID || '',
        Equipo: item.Equipo || '',
        Pts: parseInt(item.Pts) || 0,
        PJ: parseInt(item.PJ) || 0,
        PG: parseInt(item.PG) || 0,
        PE: parseInt(item.PE) || 0,
        PP: parseInt(item.PP) || 0,
        GF: parseInt(item.GF) || 0,
        GC: parseInt(item.GC) || 0,
        Dif: parseInt(item.Dif) || 0,
        Grupo: grupo
      })

      return acc
    }, {})

    // Ordenar equipos dentro de cada grupo por puntos y diferencia de goles
    Object.keys(grupos).forEach(grupo => {
      grupos[grupo].sort((a, b) => {
        if (b.Pts !== a.Pts) return b.Pts - a.Pts
        if (b.Dif !== a.Dif) return b.Dif - a.Dif
        return b.GF - a.GF
      })
    })
    
    return NextResponse.json({
      grupos,
      total: Object.keys(grupos).length
    })
  } catch (error) {
    console.error('Error al obtener fase de grupos:', error)
    return NextResponse.json({ error: 'Error al obtener fase de grupos' }, { status: 500 })
  }
}