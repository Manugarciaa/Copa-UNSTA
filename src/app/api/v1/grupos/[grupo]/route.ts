import { NextResponse } from 'next/server'
import { getSheetURL } from '../../utils/constants'

interface PlayerStats {
  local: string
  visitante: string
  golesLocal: number
  golesVisitante: number
}

interface GroupData {
  group: string
  matches: PlayerStats[]
  standings: {
    team: string
    points: number
    goalsFor: number
    goalsAgainst: number
    matches: number
  }[]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const group = searchParams.get('group')?.toUpperCase()
  const type = searchParams.get('type')

  if (!group || !['A', 'B', 'C', 'D'].includes(group)) {
    return NextResponse.json(
      { error: 'Grupo inválido' },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(getSheetURL(`Grupo ${group}`))
    if (!response.ok) {
      console.error(`Error en la respuesta de la API para Grupo ${group}:`, response.status)
      throw new Error(`Error al obtener datos del grupo ${group}`)
    }
    
    const data = await response.json()
    
    if (!data || !Array.isArray(data)) {
      console.error(`Formato de datos inválido para Grupo ${group}:`, data)
      throw new Error('Formato de datos inválido')
    }

    const groupData = transformGroupData(data, group)

    if (type === 'matches') {
      return NextResponse.json({
        matches: groupData.matches
      })
    } else if (type === 'standings') {
      return NextResponse.json({
        standings: groupData.standings
      })
    }

    return NextResponse.json(groupData)

  } catch (error) {
    console.error(`Error al obtener datos del grupo ${group}:`, error)
    return NextResponse.json(
      { error: `Error al obtener datos del grupo ${group}` },
      { status: 500 }
    )
  }
}

function transformGroupData(rawData: any[], group: string | null): GroupData {
  const matches: PlayerStats[] = [];
  const teamsMap = new Map();

  // Obtener la primera fila que contiene los datos de los partidos
  const firstRow = rawData[0] || {};
  
  // Procesar los 6 partidos
  for (let i = 1; i <= 6; i++) {
    const localKey = `${group}${i}_L`;
    const visitanteKey = `${group}${i}_V`;
    const golesLocalKey = `G_${group}${i}_L`;
    const golesVisitanteKey = `G_${group}${i}_V`;

    const local = firstRow[localKey];
    const visitante = firstRow[visitanteKey];
    const golesLocal = parseInt(firstRow[golesLocalKey]) || 0;
    const golesVisitante = parseInt(firstRow[golesVisitanteKey]) || 0;

    if (local && visitante) {
      matches.push({
        local,
        visitante,
        golesLocal,
        golesVisitante
      });

      // Actualizar estadísticas
      updateTeamStats(teamsMap, local, golesLocal, golesVisitante);
      updateTeamStats(teamsMap, visitante, golesVisitante, golesLocal);
    }
  }

  // Convertir estadísticas a array y ordenar
  const standings = Array.from(teamsMap.values())
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const bGD = b.goalsFor - b.goalsAgainst;
      const aGD = a.goalsFor - a.goalsAgainst;
      if (bGD !== aGD) return bGD - aGD;
      return b.goalsFor - a.goalsFor;
    });

  return {
    group: group || 'ALL',
    matches,
    standings
  };
}

function updateTeamStats(teamsMap: Map<string, any>, team: string, goalsFor: number, goalsAgainst: number) {
  const stats = teamsMap.get(team) || {
    team,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    matches: 0
  }

  stats.goalsFor += goalsFor || 0
  stats.goalsAgainst += goalsAgainst || 0
  stats.matches += 1

  // Update points
  if (goalsFor > goalsAgainst) {
    stats.points += 3
  } else if (goalsFor === goalsAgainst) {
    stats.points += 1
  }

  teamsMap.set(team, stats)
}
