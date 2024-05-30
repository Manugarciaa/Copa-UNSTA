import React from 'react';

import equipo_A1 from '../assets/images/equipo_A1.png'
import equipo_A2 from '../assets/images/equipo_A2.png'
import equipo_A3 from '../assets/images/equipo_A3.png'
import equipo_A4 from '../assets/images/equipo_A4.png'
import equipo_A5 from '../assets/images/equipo_A5.png'
import equipo_A6 from '../assets/images/equipo_A6.png'
import equipo_A7 from '../assets/images/equipo_A7.png'
import equipo_A8 from '../assets/images/equipo_A8.png'
import equipo_B1 from '../assets/images/equipo_B1.png'
import equipo_B2 from '../assets/images/equipo_B2.png'

const Estadisticas = () => {
  const equipos = [
    { nombre: 'Man City', goles: 93, escudo: equipo_A1 },
    { nombre: 'Arsenal', goles: 89, escudo: equipo_A2 },
    { nombre: 'Liverpool', goles: 84, escudo: equipo_A3 },
    { nombre: 'Newcastle', goles: 81, escudo: equipo_A4 },
    { nombre: 'Aston Villa', goles: 76, escudo: equipo_A5 },
    { nombre: 'Chelsea', goles: 75, escudo: equipo_A6 },
    { nombre: 'Tottenham Hotspur', goles: 71, escudo: equipo_A7 },
    { nombre: 'West Ham', goles: 59, escudo: equipo_A8 },
    { nombre: 'Brighton', goles: 55, escudo: equipo_B1 },
    { nombre: 'Man Utd', goles: 55, escudo: equipo_B2 },
  ];

  return (
    <div className="flex flex-col bg-gray-200 rounded-lg p-4">
      <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg mb-2">
        <div className="w-8 h-8 mr-4">
          <img src={equipos[0].escudo} alt={equipos[0].nombre} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 font-bold text-2xl">{equipos[0].nombre}</div>
        <div className="w-12 text-right font-bold text-3xl">{equipos[0].goles}</div>
      </div>
      {equipos.slice(1).map((equipo, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-6 text-gray-500 mr-2">{index + 2}</div>
            <div className="w-6 h-6 mr-2">
              <img src={equipo.escudo} alt={equipo.nombre} className="w-full h-full object-contain" />
            </div>
            <div className="font-bold">{equipo.nombre}</div>
          </div>
          <div className="w-12 text-right">{equipo.goles}</div>
        </div>
      ))}
    </div>
  );
};

export default Estadisticas;