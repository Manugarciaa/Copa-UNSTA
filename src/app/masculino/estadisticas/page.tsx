'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface Goleador {
  ID: string;
  Equipo: string;
  Nombre: string;
  Apellido: string;
  Goles: number;
}

interface EquipoEstadisticas {
  ID: string;
  Equipo: string;
  GF: number;
  GC: number;
}

// Función para obtener la ruta del logo
function getImagePath(id: string): string {
  return `/images/${id}_logo.webp`;
}

// Colores para los círculos de los 3 primeros lugares
const podiumColors = ['bg-[#FFD700]', 'bg-[#C0C0C0]', 'bg-[#CD7F32]'];

const Estadisticas = () => {
  const [topGoleadores, setTopGoleadores] = useState<Goleador[]>([])
  const [topEquiposGoleadores, setTopEquiposGoleadores] = useState<EquipoEstadisticas[]>([])
  const [equiposMenosGoleados, setEquiposMenosGoleados] = useState<EquipoEstadisticas[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEstadisticas = async () => {
      try {
        const response = await fetch('/api/v1/estadisticas')
        const data = await response.json()

        if (data.topGoleadores) setTopGoleadores(data.topGoleadores)
        if (data.topEquiposGoleadores) setTopEquiposGoleadores(data.topEquiposGoleadores)
        if (data.equiposMenosGoleados) setEquiposMenosGoleados(data.equiposMenosGoleados)
      } catch (err) {
        setError('Error al cargar los datos')
      } finally {
        setLoading(false)
      }
    }

    fetchEstadisticas()
  }, [])

  if (loading) return <div className="text-white text-center text-2xl">Cargando...</div>
  if (error) return <div className="text-red-500 text-center text-2xl">{error}</div>

  return (
    <div className="flex flex-col min-h-screen text-gray-50">
      <h1 className="text-5xl font-bold text-center mt-6 mb-12 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
        Estadísticas
      </h1>

      <main className="flex-1 py-8 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Goleadores */}
          <div className="bg-purple-900/30 rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-5xl font-bold mb-6 text-center">Goleadores</h2>
            <div className="space-y-6">
              {topGoleadores.map((jugador, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold mr-4 ${podiumColors[index] || 'bg-gray-700'}`}>
                    {index + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl">{jugador.Nombre} {jugador.Apellido}</span>
                    <div className="flex items-center mt-1">
                      <Image src={getImagePath(jugador.ID)} alt={jugador.Equipo} width={20} height={20} className="mr-2" />
                      <span className="text-gray-400 text-lg">{jugador.Equipo}</span>
                    </div>
                  </div>
                  <span className="ml-auto font-bold text-gray-300 text-2xl">{jugador.Goles}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipos más goleadores */}
          <div className="bg-purple-900/30 rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-5xl font-bold mb-6 text-center">Equipos más goleadores</h2>
            <div className="space-y-6">
              {topEquiposGoleadores.map((equipo, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold mr-4 ${podiumColors[index] || 'bg-gray-700'}`}>
                    {index + 1}
                  </span>
                  <div className="flex items-center space-x-3">
                    <Image src={getImagePath(equipo.ID)} alt={equipo.Equipo} width={40} height={40} className="rounded-full" />
                    <span className="font-bold text-2xl">{equipo.Equipo}</span>
                  </div>
                  <span className="ml-auto font-bold text-gray-300 text-2xl">{equipo.GF}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipos menos goleados */}
          <div className="bg-purple-900/30 rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-5xl font-bold mb-6 text-center">Equipos menos goleados</h2>
            <div className="space-y-6">
              {equiposMenosGoleados.map((equipo, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold mr-4 ${podiumColors[index] || 'bg-gray-700'}`}>
                    {index + 1}
                  </span>
                  <div className="flex items-center space-x-3">
                    <Image src={getImagePath(equipo.ID)} alt={equipo.Equipo} width={40} height={40} className="rounded-full" />
                    <span className="font-bold text-2xl">{equipo.Equipo}</span>
                  </div>
                  <span className="ml-auto font-bold text-gray-300 text-2xl">{equipo.GC}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Estadisticas