import { NextResponse } from 'next/server';
import { getSheetURL } from '../../utils/constants';

interface PlayerStats {
  local: string;
  visitante: string;
  golesLocal?: number;
  golesVisitante?: number;
  descripcion?: string;
  fecha?: string;
  hora?: string;
}

interface GroupData {
  group: string;
  matches: PlayerStats[];
  standings: {
    team: string;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    matches: number;
  }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const group = searchParams.get('group')?.toUpperCase();
  const type = searchParams.get('type');

  if (!group || !['A', 'B', 'C', 'D'].includes(group)) {
    return NextResponse.json(
      { error: 'Grupo inválido' },
      { status: 400 }
    );
  }

  try {
    const [response, cronogramaResponse] = await Promise.all([
      fetch(getSheetURL(`Grupo ${group}`)),
      fetch(getSheetURL('Cronograma')),
    ]);

    if (!response.ok || !cronogramaResponse.ok) {
      throw new Error(`Error al obtener datos del grupo ${group} o del cronograma`);
    }

    const data = await response.json();
    const cronogramaData = await cronogramaResponse.json();

    if (!data || !Array.isArray(data) || !cronogramaData || !Array.isArray(cronogramaData)) {
      throw new Error('Formato de datos inválido');
    }

    const groupData = transformGroupData(data, cronogramaData, group);

    if (type === 'matches') {
      return NextResponse.json({ matches: groupData.matches });
    } else if (type === 'standings') {
      return NextResponse.json({ standings: groupData.standings });
    }

    return NextResponse.json(groupData);
  } catch (error) {
    console.error(`Error al obtener datos del grupo ${group}:`, error);
    return NextResponse.json(
      { error: `Error al obtener datos del grupo ${group}` },
      { status: 500 }
    );
  }
}

function transformGroupData(rawData: any[], cronogramaData: any[], group: string | null): GroupData {
  const matches: PlayerStats[] = [];
  const teamsMap = new Map();

  const firstRow = rawData[0] || {};

  for (let i = 1; i <= 6; i++) {
    const localKey = `${group}${i}_L`;
    const visitanteKey = `${group}${i}_V`;
    const golesLocalKey = `G_${group}${i}_L`;
    const golesVisitanteKey = `G_${group}${i}_V`;

    const local = firstRow[localKey];
    const visitante = firstRow[visitanteKey];
    const golesLocal = parseInt(firstRow[golesLocalKey]) || undefined;
    const golesVisitante = parseInt(firstRow[golesVisitanteKey]) || undefined;

    if (local && visitante) {
      const cronogramaMatch = cronogramaData.find(
        (match) => match.Equipo1 === local && match.Equipo2 === visitante
      );

      matches.push({
        local,
        visitante,
        golesLocal,
        golesVisitante,
        descripcion: cronogramaMatch?.Descripcion || 'Fase de Grupos',
        fecha: cronogramaMatch?.Fecha || 'Por definir',
        hora: cronogramaMatch?.Hora || '',
      });

      // updateTeamStats(teamsMap, local, golesLocal, golesVisitante);
      // updateTeamStats(teamsMap, visitante, golesVisitante, golesLocal);
    }
  }

  const standings = Array.from(teamsMap.values()).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const bGD = b.goalsFor - b.goalsAgainst;
    const aGD = a.goalsFor - a.goalsAgainst;
    if (bGD !== aGD) return bGD - aGD;
    return b.goalsFor - a.goalsFor;
  });

  return {
    group: group || 'ALL',
    matches,
    standings,
  };
}

// function updateTeamStats(teamsMap: Map<string, any>, team: string, goalsFor: number, goalsAgainst: number) {
//   const stats = teamsMap.get(team) || {
//     team,
//     points: 0,
//     goalsFor: 0,
//     goalsAgainst: 0,
//     matches: 0,
//   };

//   stats.goalsFor += goalsFor || 0;
//   stats.goalsAgainst += goalsAgainst || 0;
//   stats.matches += 1;

//   if (goalsFor > goalsAgainst) {
//     stats.points += 3;
//   } else if (goalsFor === goalsAgainst) {
//     stats.points += 1;
//   }

//   teamsMap.set(team, stats);
// }
