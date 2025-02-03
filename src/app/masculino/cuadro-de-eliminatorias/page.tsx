'use client';

import React, { useEffect, useState } from 'react';

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

const CuadroDeEliminatoria = () => {
  const [copaData, setCopaData] = useState<{ [key: string]: GroupData }>({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const copas = [
    { id: 'CO', nombre: 'Copa de Oro', color: 'from-yellow-400 to-yellow-600' },
    { id: 'CP', nombre: 'Copa de Plata', color: 'from-gray-300 to-gray-500' },
    { id: 'CB', nombre: 'Copa de Bronce', color: 'from-amber-600 to-amber-800' },
    { id: 'CA', nombre: 'Copa de Aluminio', color: 'from-slate-400 to-slate-600' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const results: { [key: string]: GroupData } = {};
      const errorMessages: { [key: string]: string } = {};

      const fetchPromises = copas.map(async (copa) => {
        try {
          const response = await fetch(`/api/v1/copas/${copa.id}`);
          if (!response.ok) {
            throw new Error(`Error al cargar datos de ${copa.nombre}`);
          }
          const data = await response.json();
          results[copa.id] = data;
        } catch (err) {
          console.error(`Error al cargar ${copa.nombre}:`, err);
          errorMessages[copa.id] = err instanceof Error ? err.message : 'Error desconocido';
        }
      });

      await Promise.allSettled(fetchPromises);

      setCopaData(results);
      setErrors(errorMessages);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
          Cuadro de Eliminatorias
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {copas.map((copa) => (
          <div key={copa.id} className="bg-gray-800/50 rounded-lg p-6">
            <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${copa.color} text-transparent bg-clip-text`}>
              {copa.nombre}
            </h2>
            {errors[copa.id] ? (
              <p className="text-red-500 text-center">{errors[copa.id]}</p>
            ) : copaData[copa.id]?.matches?.length > 0 ? (
              copaData[copa.id].matches.map((match, index) => (
                <div key={index} className="bg-gray-700/30 rounded p-4 mb-4 flex flex-col items-center">
                  <div className="text-xl font-bold">{match.local}</div>
                  <div className="text-2xl font-bold my-2">
                    {match.golesLocal} - {match.golesVisitante}
                  </div>
                  <div className="text-xl font-bold">{match.visitante}</div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400">No hay partidos disponibles</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuadroDeEliminatoria;