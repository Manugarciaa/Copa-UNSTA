'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Jugador {
  id: string;
  nombre: string;
  apellido: string;
  equipo: string;
  posicion: string;
  numero: string;
  carrera: string;
}

interface EquipoDetalle {
  ID: string;
  Equipo: string;
  jugadores: Jugador[];
}

function getImagePath(id: string): string {
  return `/images/${id}_logo.webp`;
}

export default function EquipoDetalle() {
  const params = useParams();
  const [equipo, setEquipo] = useState<EquipoDetalle | null>(null);

  useEffect(() => {
    const fetchEquipoData = async () => {
      try {
        const responseEquipo = await fetch('/api/v2/equipos');
        if (!responseEquipo.ok) {
          throw new Error('Error al obtener datos del equipo');
        }
        const dataEquipo = await responseEquipo.json();
        const equipoInfo = dataEquipo.data.find((e: EquipoDetalle) => e.ID === params.id);

        if (!equipoInfo) {
          throw new Error('Equipo no encontrado');
        }

        const responseDatos = await fetch(`/api/v2/jugadores?equipo=${encodeURIComponent(equipoInfo.Equipo)}`);
        if (!responseDatos.ok) {
          throw new Error('Error al obtener datos de jugadores');
        }
        const datosJugadores = await responseDatos.json();

        setEquipo({
          ID: equipoInfo.ID,
          Equipo: equipoInfo.Equipo,
          jugadores: datosJugadores.jugadores
        });

      } catch (error: any) {
        console.error('Error:', error);
      }
    };

    fetchEquipoData();
  }, [params.id]);

  if (!equipo) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8">
            <Image
              src={getImagePath(equipo.ID)}
              alt={equipo.Equipo}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
              {equipo.Equipo}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipo.jugadores.map((jugador, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  <span className="text-orange-500">{jugador.apellido}</span>
                  <br />
                  <span className="text-lg">{jugador.nombre}</span>
                </h3>
                <span className="text-2xl font-bold text-orange-500">
                  #{jugador.numero}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-white/90 font-medium bg-white/5 rounded-md px-3 py-1">
                  {jugador.posicion}
                </p>
                <p className="text-base text-white/80 font-medium">
                  {jugador.carrera}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
