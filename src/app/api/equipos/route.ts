import { NextResponse } from 'next/server';
import { EquipoData } from '@/types/equipo';

const BASE_URL = 'https://sheetdb.io/api/v1/8hp0non5r5r7y';
const RATE_LIMIT_DELAY = 5000;
let lastRequestTime = 0;

// Manejo del método GET
export async function GET() {
  const now = Date.now();
  if (now - lastRequestTime < RATE_LIMIT_DELAY) {
    const tiempoEspera = RATE_LIMIT_DELAY - (now - lastRequestTime);
    await new Promise((resolve) => setTimeout(resolve, tiempoEspera));
  }

  try {
    // URL modificada para incluir sólo las columnas ID y Equipo
    const response = await fetch(`${BASE_URL}?sheet=Datos&columns=ID,Equipo`);
    if (!response.ok) {
      throw new Error('Error al obtener los datos desde la API externa');
    }

    // Especificamos que los datos son del tipo EquipoData[]
    const data: EquipoData[] = await response.json();

    // Filtrar datos únicos por equipo manteniendo el ID asociado
    const datosProcesados = Array.from(
      new Map(data.map((dato) => [dato.Equipo, { ID: dato.ID, Equipo: dato.Equipo }])).values()
    );

    lastRequestTime = now;

    return NextResponse.json(datosProcesados);
  } catch (error) {
    console.error('Error al obtener datos de equipos:', error);
    return NextResponse.json(
      { error: 'Error al obtener los datos de la API externa.' },
      { status: 500 }
    );
  }
}
