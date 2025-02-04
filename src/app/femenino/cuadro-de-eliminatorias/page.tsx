'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

interface PlayerStats {
  local: string;
  visitante: string;
  golesLocal?: number;
  golesVisitante?: number;
  fecha?: string;
  hora?: string;
  descripcion?: string;
}

interface GroupData {
  group: string;
  matches: PlayerStats[];
}

function getTeamImagePath(teamCode: string): string {
  return `/images/${teamCode.toLowerCase()}_icon.webp`;
}

const CuadroDeEliminatoria = () => {
  const [copaData, setCopaData] = useState<{ [key: string]: GroupData }>({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const copas = useMemo(() => [
    { id: 'CO', nombre: 'Copa de Oro', color: 'from-yellow-400 to-yellow-600', gradient: 'from-yellow-400 to-yellow-600' },
    { id: 'CB', nombre: 'Copa de Bronce', color: 'from-amber-600 to-amber-800', gradient: 'from-amber-600 to-amber-800' },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const results: { [key: string]: GroupData } = {};
      const errorMessages: { [key: string]: string } = {};

      const fetchPromises = copas.map(async (copa) => {
        try {
          const response = await fetch(`/api/v2/copas/${copa.id}`);
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
  }, [copas]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-8">
      <div className="text-center mb-4 w-full max-w-7xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
            Cuadro de Eliminatorias
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {copas.map((copa) => (
          <div key={copa.id} className="bg-gray-800/50 rounded-lg p-6">
            <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${copa.color} text-transparent bg-clip-text`}>
              {copa.nombre}
            </h2>
            {errors[copa.id] ? (
              <p className="text-red-500 text-center">{errors[copa.id]}</p>
            ) : copaData[copa.id]?.matches?.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {copaData[copa.id].matches.map((match, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
                  >
                    <div className={`bg-gradient-to-r ${copa.color} text-white text-sm py-2 px-4 flex items-center justify-between`}>
                      <span>{match.descripcion}</span>                      
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src={getTeamImagePath(match.local)}
                                alt={match.local}
                                fill
                                className="object-contain drop-shadow-lg"
                              />
                            </div>
                            <span className="font-bold text-xl text-white">{match.local}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center px-4">
                          {match.golesLocal !== undefined && match.golesVisitante !== undefined ? (
                            <>
                              <div className={`text-3xl font-bold bg-gradient-to-br ${copa.gradient} text-transparent bg-clip-text`}>
                                {match.golesLocal} - {match.golesVisitante}
                              </div>
                              <span className="text-gray-400 text-sm mt-1">Final</span>
                            </>
                          ) : (
                            <>
                              <div className="text-xl font-bold text-white">
                                {match.fecha}
                              </div>
                              <div className="text-gray-400 text-sm mt-1">
                                {match.hora}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end space-x-4">
                            <span className="font-bold text-xl text-white">{match.visitante}</span>
                            <div className="relative w-16 h-16 transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src={getTeamImagePath(match.visitante)}
                                alt={match.visitante}
                                fill
                                className="object-contain drop-shadow-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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