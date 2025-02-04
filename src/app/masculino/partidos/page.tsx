'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Match {
  local: string;
  visitante: string;
  golesLocal?: number;
  golesVisitante?: number;
  descripcion?: string;
  fecha?: string;
  hora?: string;
  grupo: string;
  jornada?: number;
  fase?: string;
}

function getTeamImagePath(teamCode: string): string {
  return `/images/${teamCode.toLowerCase()}_icon.webp`;
}

const getGroupColors = (group: string) => {
  switch (group) {
    case 'A':
      return { from: 'from-green-500', to: 'to-green-600', gradient: 'from-green-400 to-green-600' };
    case 'B':
      return { from: 'from-red-500', to: 'to-red-600', gradient: 'from-red-400 to-red-600' };
    case 'C':
      return { from: 'from-blue-500', to: 'to-blue-600', gradient: 'from-blue-400 to-blue-600' };
    case 'D':
      return { from: 'from-yellow-500', to: 'to-yellow-600', gradient: 'from-yellow-400 to-yellow-600' };
    default:
      return { from: 'from-green-500', to: 'to-green-600', gradient: 'from-green-400 to-green-600' };
  }
};

const Partidos = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedJornada, setSelectedJornada] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllMatches = async () => {
      try {
        const groups = ['A', 'B', 'C', 'D'];
        const allMatches = await Promise.all(
          groups.map(async (group) => {
            const res = await fetch(`/api/v1/grupos/${group}?type=matches&group=${group}`);
            if (!res.ok) throw new Error(`Error al obtener los partidos del grupo ${group}`);
            const data = await res.json();
            return data.matches.map((match: Match) => ({ ...match, grupo: group }));
          })
        );

        // Asignar jornadas y fases a los partidos
        const groupMatchesCount = new Map();
        const matchesWithJornadas = allMatches.flat().map((match) => {
          let jornada;
          let fase = 'Fase de grupos';
          
          // Inicializar contadores para cada grupo si no existen
          if (!groupMatchesCount.has(match.grupo)) {
            groupMatchesCount.set(match.grupo, 0);
          }
          
          // Incrementar el contador para este grupo
          const currentCount = groupMatchesCount.get(match.grupo);
          groupMatchesCount.set(match.grupo, currentCount + 1);
          
          // Distribución de partidos por jornada según el grupo
          if (match.grupo === 'A' || match.grupo === 'B') {
            // Primeros 4 partidos en Jornada 1
            if (currentCount < 4) {
              jornada = 1;
            } 
            // Los siguientes 2 partidos en Jornada 2
            else {
              jornada = 2;
            }            
          } else if (match.grupo === 'C' || match.grupo === 'D') {
            // Primeros 2 partidos en Jornada 1
            if (currentCount < 2) {
              jornada = 1;
            }
            // Los siguientes 4 partidos en Jornada 2
            else {
              jornada = 2;
            }            
          }

          return { ...match, jornada, fase };
        });

        setMatches(matchesWithJornadas);
      } catch (err) {
        console.error('Error:', err);
        setError('Error al cargar los partidos.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllMatches();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const filteredMatches = matches.filter(match => match.jornada === selectedJornada);

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-8">
      <div className="text-center mb-4 w-full max-w-7xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
            Partidos
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          {[1, 2].map((jornada) => (
            <button
              key={jornada}
              onClick={() => setSelectedJornada(jornada)}
              className={`w-full sm:w-auto px-6 py-3 rounded-lg text-lg transition-all duration-300 ${
                selectedJornada === jornada
                  ? 'bg-gradient-to-r from-[#ff9966] to-[#ff5500] text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Jornada {jornada}
            </button>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text mb-4">
          Jornada {selectedJornada} - {selectedJornada < 3 ? 'Fase de grupos' : 'Eliminatorias'}
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {filteredMatches.map((match, index) => {
            const colors = getGroupColors(match.grupo);
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                <div className={`bg-gradient-to-r ${colors.from} ${colors.to} text-white text-sm py-2 px-4 flex items-center justify-between`}>
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
                          <div className={`text-3xl font-bold bg-gradient-to-br ${colors.gradient} text-transparent bg-clip-text`}>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partidos;