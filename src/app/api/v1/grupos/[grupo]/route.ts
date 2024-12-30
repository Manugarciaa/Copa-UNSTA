import { NextResponse } from 'next/server'
import { getSheetURL } from '../../utils/constants'

interface PartidoGrupo {
  local: string
  golesLocal: number
  goleadoresLocal: string[]
  visitante: string 
  golesVisitante: number
  goleadoresVisitante: string[]
  equipoLocal: string
  equipoVisitante: string
}

interface GrupoData {
  'A1_L': string;
  'A2_L': string;
  'A3_L': string;
  'A4_L': string;
  'A5_L': string;
  'A6_L': string;
  'A1_V': string;
  'A2_V': string;
  'A3_V': string;
  'A4_V': string;
  'A5_V': string;
  'A6_V': string;
  'G_A1_L': number;
  'G_A1_V': number;
  'G_A2_L': number;
  'G_A2_V': number;
  'G_A3_L': number;
  'G_A3_V': number;
  'G_A4_L': number;
  'G_A4_V': number;
  'G_A5_L': number;
  'G_A5_V': number;
  'G_A6_L': number;
  'G_A6_V': number;
  [key: string]: any;
}

export async function GET(
  request: Request,
  { params }: { params: { grupo: string } }
) {
  const grupo = params.grupo.toUpperCase()
  if (!['A', 'B', 'C', 'D'].includes(grupo)) {
    return NextResponse.json({ error: 'Grupo no válido' }, { status: 400 })
  }

  try {
    const response = await fetch(getSheetURL(`Grupo ${grupo}`))
    const data: GrupoData[] = await response.json()
    
    // Transformar los datos al formato deseado
    const partidos: PartidoGrupo[] = []
    
    for (let i = 1; i <= 6; i++) {
      const goleadoresLocal = data[0][`GOL_${grupo}${i}_L`]?.split(',').map((g: string) => g.trim()) || []
      const goleadoresVisitante = data[0][`GOL_${grupo}${i}_V`]?.split(',').map((g: string) => g.trim()) || []

      partidos.push({
        local: data[0][`${grupo}${i}_L`],
        golesLocal: parseInt(data[0][`G_${grupo}${i}_L`]) || 0,
        goleadoresLocal,
        visitante: data[0][`${grupo}${i}_V`],
        golesVisitante: parseInt(data[0][`G_${grupo}${i}_V`]) || 0,
        goleadoresVisitante,
        equipoLocal: data[1][`${grupo}${i}_L`] || '',
        equipoVisitante: data[1][`${grupo}${i}_V`] || ''
      })
    }

    return NextResponse.json({
      grupo,
      partidos,
      total: partidos.length
    })
  } catch (error) {
    return NextResponse.json({ error: `Error al obtener Grupo ${grupo}` }, { status: 500 })
  }
}