'use client';

import React, { useState, useEffect } from 'react';
import { EquipoData } from '@/types/equipo';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

function getImagePath(id: string): string {
  return `/images/${id}_logo.webp`;
}

const TeamsCarousel = () => {
  const [teamData, setTeamData] = useState<EquipoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTeam, setCurrentTeam] = useState<string>('');
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/api/equipos');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los equipos');
        }
        const data: EquipoData[] = await response.json();

        const equiposUnicos = Array.from(new Set(data.map((item) => item.Equipo))).map((equipo) => {
          const id = data.find((item) => item.Equipo === equipo)?.ID || '';
          return { Equipo: equipo, ID: id };
        });

        setTeamData(equiposUnicos);
        if (equiposUnicos.length > 0) {
          setCurrentTeam(equiposUnicos[0].Equipo);
        }
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError('No se pudieron cargar los datos de los equipos');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    if (!api || !teamData.length) return;

    api.on('select', () => {
      setCurrentTeam(teamData[api.selectedScrollSnap()].Equipo);
    });
  }, [api, teamData]);

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
          Equipos
        </span>
      </h1>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center transition-all duration-300">
        {currentTeam}
      </h2>

      {loading && (
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-.5s]"></div>
        </div>
      )}
      
      {error && <p className="text-red-500 text-xl">{error}</p>}

      {!loading && !error && teamData.length > 0 && (
        <div className="w-full max-w-7xl mx-auto px-4">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {teamData.map((team) => (
                <CarouselItem key={team.ID} className="basis-full md:basis-1/3 lg:basis-1/5 flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
                    <Image
                      src={getImagePath(team.ID)}
                      alt={team.Equipo}
                      fill
                      className="object-contain hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex w-12 h-12 -left-6" />
            <CarouselNext className="hidden md:flex w-12 h-12 -right-6" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {teamData.map((_, index) => (
              <div
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentTeam === teamData[index].Equipo 
                    ? 'bg-[#ff5500] scale-125' 
                    : 'bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsCarousel;