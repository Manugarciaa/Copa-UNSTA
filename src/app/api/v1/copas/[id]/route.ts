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
  const id = await context.params.id;
  
  if (!id || !['co', 'cp', 'cb', 'ca'].includes(id)) {
    return NextResponse.json(
      { error: `Copa inválida: ${id}` },
      { status: 400 }
    );
  }

  try {
    const sheetUrl = getSheetURL(id);
    console.log('URL de la hoja:', sheetUrl);
    
    const response = await fetch(sheetUrl);
    console.log('Estado de la respuesta:', response.status);
    
    if (!response.ok) {
      console.error(`Error en la respuesta de la API para copa ${id}:`, response.status);
      throw new Error(`Error al obtener datos de la copa ${id}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos:', data);
    
    if (!data || !Array.isArray(data)) {
      console.error(`Formato de datos inválido para Copa ${id}:`, data);
      throw new Error('Formato de datos inválido');
    }

    const groupData = transformGroupData(data, id);
    console.log('Datos del grupo extraídos:', groupData);

    return NextResponse.json(groupData);

  } catch (error) {
    console.error(`Error al obtener datos de la copa ${id}:`, error);
    return NextResponse.json(
      { error: `Error al obtener datos de la copa ${id}` },
      { status: 500 }
    );
  }
}

function transformGroupData(rawData: any[], group: string): GroupData {
  const matches: PlayerStats[] = [];
  const firstRow = rawData[0] || {};

  // Procesar los datos de los partidos
  for (let i = 1; i <= 6; i++) {
    const localKey = `${group}${i}_l`; // Claves en minúsculas
    const visitanteKey = `${group}${i}_v`;
    const golesLocalKey = `g_${group}${i}_l`;
    const golesVisitanteKey = `g_${group}${i}_v`;

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
    }
  }

  return {
    group: group,
    matches
  };
}