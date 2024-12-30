'use client';

import React, { useState, useEffect } from 'react';
import { EquipoData } from '@/types/equipo';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [teamData, setTeamData] = useState<EquipoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTeam, setCurrentTeam] = useState<string>('');
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/api/v1/equipos');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los equipos');
        }
        const data = await response.json();
        const equipos = data.data || [];

        if (!Array.isArray(equipos)) {
          throw new Error('Formato de respuesta inválido');
        }

        // Filtrar solo los equipos únicos que tienen ID y nombre
        const equiposUnicos = equipos.reduce((acc: EquipoData[], item: any) => {
          // Solo procesar si tiene ID y Equipo
          if (item.ID && item.Equipo && !acc.some(e => e.ID === item.ID)) {
            acc.push({
              ID: item.ID,
              Equipo: item.Equipo
            });
          }
          return acc;
        }, []);

        // Ordenar los equipos alfabéticamente por nombre
        equiposUnicos.sort((a, b) => a.Equipo.localeCompare(b.Equipo));

        setTeamData(equiposUnicos);
        if (equiposUnicos.length > 0) {
          setCurrentTeam(equiposUnicos[0].Equipo);
        }
        setError(null);
      } catch (error) {
        console.error('Error al cargar equipos:', error);
        setError('No se pudieron cargar los datos de los equipos');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    if (!api || !teamData.length) return;

    const handleSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      setCurrentTeam(teamData[index].Equipo);
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api, teamData]);

  const handleTeamClick = (teamId: string) => {
    router.push(`/masculino/equipos/${teamId}`);
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-100px)] py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500] text-transparent bg-clip-text">
          Equipos
        </span>
      </h1>

      {loading && (
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-.5s]"></div>
        </div>
      )}
      
      {error && <p className="text-red-500 text-xl">{error}</p>}

      {!loading && !error && teamData.length > 0 && (
        <div className="w-full max-w-7xl mx-auto px-12">
          <div className="relative h-[500px]">
            <Carousel 
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                dragFree: false
              }}
              className="w-full h-full"
              setApi={setApi}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <CarouselPrevious className="hidden md:flex w-14 h-14 -left-10 bg-white/10 hover:bg-white/20 pointer-events-auto" />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <CarouselNext className="hidden md:flex w-14 h-14 -right-10 bg-white/10 hover:bg-white/20 pointer-events-auto" />
              </div>

              <CarouselContent className="-ml-4 md:-ml-8 h-full">
                {teamData.map((team, index) => {
                  const distance = Math.abs(currentIndex - index);
                  const scale = distance === 0 ? 1 : Math.max(0.7, 1 - (distance * 0.15));
                  const opacity = distance === 0 ? 1 : Math.max(0.5, 1 - (distance * 0.3));
                  
                  return (
                    <CarouselItem 
                      key={team.ID} 
                      className="pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3 h-full flex items-center"
                    >
                      <div 
                        className="flex flex-col items-center justify-center p-6 w-full relative cursor-pointer"
                        onClick={() => handleTeamClick(team.ID)}
                      >
                        <div 
                          className="relative transition-all duration-500 ease-in-out"
                          style={{
                            width: `${scale * 400}px`,
                            height: `${scale * 400}px`,
                            opacity: opacity
                          }}
                        >
                          <Image
                            src={getImagePath(team.ID)}
                            alt={team.Equipo}
                            fill
                            className="object-contain transition-transform duration-500"
                            priority
                          />
                        </div>
                        <h2 
                          className={`
                            text-4xl md:text-5xl font-bold text-white mt-8 text-center 
                            transition-all duration-500 ease-in-out absolute bottom-0 left-0 right-0
                            ${distance === 0 ? 'opacity-100' : 'opacity-0'}
                          `}
                        >
                          {team.Equipo}
                        </h2>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-none">
                <div className="flex justify-center gap-4">
                  {teamData.map((_, index) => (
                    <button
                      key={index}
                      className={`
                        w-4 h-4 rounded-full transition-colors duration-300 ease-in-out cursor-pointer pointer-events-auto
                        ${currentTeam === teamData[index].Equipo 
                          ? 'bg-[#ff5500]' 
                          : 'bg-gray-400 hover:bg-gray-300'
                        }
                      `}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsCarousel;