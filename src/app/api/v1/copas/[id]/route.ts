import { NextResponse } from 'next/server';
import { getSheetURL } from '../../utils/constants';

interface PlayerStats {
  local: string;
  visitante: string;
  golesLocal: number;
  golesVisitante: number;
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
    // Esperar explícitamente los parámetros antes de usarlos
    const { id } = await Promise.resolve(context.params);

    // Validamos el ID después de obtenerlo correctamente
    if (!id || !['CO', 'CP', 'CB', 'CA'].includes(id)) {
      return NextResponse.json(
        { error: `Copa inválida: ${id}` },
        { status: 400 }
      );
    }

    const sheetUrl = getSheetURL(id);
    const response = await fetch(sheetUrl);

    if (!response.ok) {
      throw new Error(`Error al obtener datos de la copa ${id}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error('Formato de datos inválido');
    }

    const groupData = transformGroupData(data, id);
    return NextResponse.json(groupData);

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: `Error al obtener datos de la copa` },
      { status: 500 }
    );
  }
}

function transformGroupData(rawData: any[], group: string): GroupData {
  const matches: PlayerStats[] = [];

  rawData.forEach((row) => {
    for (let i = 1; i <= 3; i++) {
      const localKey = `${group}${i}_L`;
      const visitanteKey = `${group}${i}_V`;
      const golesLocalKey = `G_${group}${i}_L`;
      const golesVisitanteKey = `G_${group}${i}_V`;

      const local = row[localKey];
      const visitante = row[visitanteKey];
      const golesLocal = parseInt(row[golesLocalKey] || "0", 10);
      const golesVisitante = parseInt(row[golesVisitanteKey] || "0", 10);

      if (local?.length === 3 && visitante?.length === 3) {
        matches.push({
          local,
          visitante,
          golesLocal,
          golesVisitante,
        });
      }
    }
  });

  return {
    group,
    matches,
  };
}
