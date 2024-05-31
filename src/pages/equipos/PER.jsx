import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PER_logo from '../../assets/images/PER_logo.png';

const PER = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [jugadores, setJugadores] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sheet.best/api/sheets/ce4f122f-b450-41fc-8e30-f21eebada6c1');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtrarPorId = (id) => {
      return data.filter(item => item.ID === id);
    };

    const datosFiltrados = filtrarPorId('PER');

    // Crear un objeto con los jugadores
    const jugadoresObj = {};
    datosFiltrados.forEach((item, index) => {
      jugadoresObj[`jugador${index + 1}_nombre`] = item.Nombre;
      jugadoresObj[`jugador${index + 1}_apellido`] = item.Apellido;
      jugadoresObj[`jugador${index + 1}_carrera`] = item.Carrera;
    });

    setJugadores(jugadoresObj);
  }, [data]);

  return (
    <div className="bg-[#23282D] min-h-screen flex flex-col">
      <header className="bg-gray dark:bg-gray-950 text-white py-4 px-6 mb-8">
        <h1 className="text-5xl font-bold text-center">Perritos UNSTA F. C.</h1>
        {/* <button>volver atras</button> */}
      </header>
      <div className="flex justify-center items-center w-full h-50">
        <img
          alt="Team Logo"
          height={150}
          src={PER_logo}
          width={150}
        />
      </div>
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(jugadores).map((key, index) => {
            if (key.includes('_nombre')) {
              const jugadorIndex = key.split('_')[0].replace('jugador', '');
              return (
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
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
  )
}

export default PER;