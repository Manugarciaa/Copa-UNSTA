import { NextResponse } from 'next/server';
import { getSheetURL } from '../../utils/constants';

interface PlayerStats {
  local: string;
  visitante: string;
  golesLocal?: string;
  golesVisitante?: string;
  fecha?: string;
  hora?: string;
  descripcion?: string;
}

interface GroupData {
  group: string;
  matches: PlayerStats[];
}

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = await Promise.resolve(context.params);

    if (!id || !['CO', 'CB'].includes(id)) {
      return NextResponse.json(
        { error: `Copa inválida: ${id}` },
        { status: 400 }
      );
    }

    const sheetUrl = getSheetURL(id);
    const cronogramaUrl = getSheetURL('Cronograma');

    const [response, cronogramaResponse] = await Promise.all([
      fetch(sheetUrl),
      fetch(cronogramaUrl)
    ]);

    if (!response.ok || !cronogramaResponse.ok) {
      throw new Error(`Error al obtener datos de la copa ${id} o del cronograma`);
    }

    const data = await response.json();
    const cronogramaData = await cronogramaResponse.json();

    if (!data || !Array.isArray(data) || !cronogramaData || !Array.isArray(cronogramaData)) {
      throw new Error('Formato de datos inválido');
    }

    const groupData = transformGroupData(data, cronogramaData, id);
    return NextResponse.json(groupData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: `Error al obtener datos de la copa` },
      { status: 500 }
    );
  }
}

function transformGroupData(rawData: any[], cronogramaData: any[], group: string): GroupData {
  const matches: PlayerStats[] = [];

  rawData.forEach((row) => {
    for (let i = 1; i <= 3; i++) {
      const localKey = `${group}${i}_L`;
      const visitanteKey = `${group}${i}_V`;
      const golesLocalKey = `G_${group}${i}_L`;
      const golesVisitanteKey = `G_${group}${i}_V`;

      const local = row[localKey];
      const visitante = row[visitanteKey];
      const golesLocal = row[golesLocalKey] || undefined;
      const golesVisitante = row[golesVisitanteKey] || undefined;

      if (local?.length === 3 && visitante?.length === 3) {
        const cronogramaMatch = cronogramaData.find(
          (match) => match.Equipo1 === local && match.Equipo2 === visitante
        );

        matches.push({
          local,
          visitante,
          golesLocal,
          golesVisitante,
          fecha: cronogramaMatch?.Fecha || 'Por definir',
          hora: cronogramaMatch?.Hora || '',
          descripcion: cronogramaMatch?.Descripcion || 'Eliminatorias',
        });
      }
    }
  });

  return {
    group,
    matches,
  };
}