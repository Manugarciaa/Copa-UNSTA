'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface EquipoGrupo {
  ID: string;
  Equipo: string;
  Pts: number;
  PJ: number;
  PG: number;
  PE: number;
  PP: number;
  GF: number;
  GC: number;
  Dif: number;
  Grupo: string;
}

interface GruposData {
  [key: string]: EquipoGrupo[];
}

interface GrupoColors {
  text: string;
  gradient: string;
  bg: string;
}

const getGrupoColor = (): GrupoColors => {
  return {
    text: 'text-green-500',
    gradient: 'from-green-500 to-green-700',
    bg: 'bg-emerald-900/40'
  };
};

const FaseDeGrupos = () => {
  const [grupos, setGrupos] = useState<GruposData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await fetch('/api/v2/fase-grupos');
        const data = await response.json();
        if (data.grupos) {
          setGrupos(data.grupos);
        }
      } catch (_) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchGrupos();
  }, []);

  if (loading) return <div className="text-white text-center text-2xl">Cargando...</div>;
  if (error) return <div className="text-red-500 text-center text-2xl">{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-8">
      <div className="text-center mb-4 w-full max-w-[1200px] px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
            Fase de grupos
          </span>
        </h1>
      </div>

      <div className="w-full max-w-[1200px] px-4">
        {Object.entries(grupos).map(([grupoNombre, equipos]) => {
          const colors = getGrupoColor();
          return (
            <div 
              key={grupoNombre} 
              className={`${colors.bg} rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-700`}
            >
              <h2 
                className={`text-3xl font-bold mb-6 text-center tracking-wider ${colors.text}`}
              >
                {grupoNombre}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-lg text-gray-200">
                  <thead>
                    <tr className="text-base border-b-2 border-gray-700">
                      <th className="py-3 px-3 text-left font-semibold w-[250px]">Equipo</th>
                      <th className="py-3 px-2 text-center font-semibold w-[80px]">Pts</th>
                      <th className="py-3 px-2 text-center font-semibold w-[60px]">PJ</th>
                      <th className="hidden md:table-cell py-3 px-2 text-center font-semibold w-[60px]">PG</th>
                      <th className="hidden md:table-cell py-3 px-2 text-center font-semibold w-[60px]">PE</th>
                      <th className="hidden md:table-cell py-3 px-2 text-center font-semibold w-[60px]">PP</th>
                      <th className="hidden md:table-cell py-3 px-2 text-center font-semibold w-[60px]">GF</th>
                      <th className="hidden md:table-cell py-3 px-2 text-center font-semibold w-[60px]">GC</th>
                      <th className="py-3 px-2 text-center font-semibold w-[60px]">DIF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipos.map((equipo) => (
                      <tr
                        key={equipo.ID}
                        className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <td className="py-3 px-3 text-left">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                              <Image
                                src={`/images/${equipo.ID.toLowerCase()}_icon.webp`}
                                alt={equipo.Equipo}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="font-bold text-lg">{equipo.Equipo}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center text-xl font-bold">{equipo.Pts}</td>
                        <td className="py-3 px-2 text-center text-lg">{equipo.PJ}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-center text-lg">{equipo.PG}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-center text-lg">{equipo.PE}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-center text-lg">{equipo.PP}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-center text-lg">{equipo.GF}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-center text-lg">{equipo.GC}</td>
                        <td className="py-3 px-2 text-center text-lg">{equipo.Dif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaseDeGrupos;