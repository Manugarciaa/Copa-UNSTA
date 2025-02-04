import { NextResponse } from 'next/server';
import { getSheetURL } from '../../utils/constants';

interface PlayerStats {
  local: string;
  visitante: string;
  golesLocal?: string;
  golesVisitante?: string;
  descripcion?: string;
  fecha?: string;
  hora?: string;
}

interface GroupData {
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

  if (!group || !['A'].includes(group)) {
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

  for (let i = 1; i <= 10; i++) {
    const localKey = `${group}${i}_L`;
    const visitanteKey = `${group}${i}_V`;
    const golesLocalKey = `G_${group}${i}_L`;
    const golesVisitanteKey = `G_${group}${i}_V`;

    const local = firstRow[localKey];
    const visitante = firstRow[visitanteKey];
    const golesLocal = firstRow[golesLocalKey] || undefined;
    const golesVisitante = firstRow[golesVisitanteKey] || undefined;

    const cronogramaMatch = cronogramaData.find(
      (match) => match.Equipo1 === local && match.Equipo2 === visitante
    );

    matches.push({
      local,
      visitante,
      golesLocal,
      golesVisitante,
      descripcion: cronogramaMatch?.Descripcion || 'Fase de Grupos',
      fecha: golesLocal === undefined && golesVisitante === undefined ? cronogramaMatch?.Fecha || 'Por definir' : undefined,
      hora: golesLocal === undefined && golesVisitante === undefined ? cronogramaMatch?.Hora || '' : undefined,
    });

    // Procesar estadísticas de equipos
    if (golesLocal !== undefined && golesVisitante !== undefined) {
      [local, visitante].forEach(team => {
        if (!teamsMap.has(team)) {
          teamsMap.set(team, {
            team,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            matches: 0
          });
        }
        const teamStats = teamsMap.get(team);
        teamStats.matches += 1;
        if (team === local) {
          teamStats.goalsFor += golesLocal;
          teamStats.goalsAgainst += golesVisitante;
          teamStats.points += golesLocal > golesVisitante ? 3 : golesLocal === golesVisitante ? 1 : 0;
        } else {
          teamStats.goalsFor += golesVisitante;
          teamStats.goalsAgainst += golesLocal;
          teamStats.points += golesVisitante > golesLocal ? 3 : golesVisitante === golesLocal ? 1 : 0;
        }
      });
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
    matches,
    standings,
  };
}