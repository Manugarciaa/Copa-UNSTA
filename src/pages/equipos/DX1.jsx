import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DX1_logo from '../../assets/images/equipo_A1.png';

const DX1 = () => {
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

    const datosFiltrados = filtrarPorId('DX1');
    
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
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5 text-center">Dominio X+1</h1>
      <div className="flex items-start">
        <img src={DX1_logo} alt="Escudo" className="w-32 h-32 mr-5" /> {/* Cambia esta ruta según la ubicación de tu imagen */}
        <div>
          {Object.keys(jugadores).map((key, index) => {
            if (key.includes('_nombre')) {
              const jugadorIndex = key.split('_')[0].replace('jugador', '');
              return (
                <div key={index} className="mb-4">
                  <div className="text-xl font-bold">
                    {jugadores[`jugador${jugadorIndex}_nombre`]} {jugadores[`jugador${jugadorIndex}_apellido`]}
                  </div>
                  <div className="text-sm text-gray-600">
                    {jugadores[`jugador${jugadorIndex}_carrera`]}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DX1;
