import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import HDV_logo from '../../../assets/images/HDV_logo.webp';

const HDV = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [jugadores, setJugadores] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/jugadores.csv');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo CSV');
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
            setIsLoading(false);
          },
          error: (error) => {
            console.error('Error al parsear el CSV:', error);
            setError('Error al parsear el archivo CSV');
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.error('Error al cargar el archivo CSV:', error);
        setError('Error al cargar el archivo CSV');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtrarPorId = (id) => {
      return data.filter(item => item.ID === id);
    };

    const datosFiltrados = filtrarPorId('HDV');

    // Crear un objeto con los jugadores
    const jugadoresObj = {};
    datosFiltrados.forEach((item, index) => {
      jugadoresObj[`jugador${index + 1}_nombre`] = item.Nombre;
      jugadoresObj[`jugador${index + 1}_apellido`] = item.Apellido;
      jugadoresObj[`jugador${index + 1}_carrera`] = item.Carrera;
    });

    setJugadores(jugadoresObj);
  }, [data]);

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="bg-[#23282D] min-h-screen flex flex-col">
      <header className="text-white py-4 px-6 mb-8">
        <h1 className="text-5xl font-bold text-center">Herederos de Vega</h1>
      </header>
      <div className="flex justify-center items-center w-full h-50">
        <img
          alt="Team Logo"
          height={150}
          src={HDV_logo}
          width={150}
        />
      </div>
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(jugadores).map((key, index) => {
            if (key.includes('_nombre')) {
              const jugadorIndex = key.split('_')[0].replace('jugador', '');
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xxl text-black font-bold">{jugadores[`jugador${jugadorIndex}_nombre`]} {jugadores[`jugador${jugadorIndex}_apellido`]}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{jugadores[`jugador${jugadorIndex}_carrera`]}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </main>
    </div>
  );
};

export default HDV;