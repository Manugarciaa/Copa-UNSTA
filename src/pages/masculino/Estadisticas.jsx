import React from 'react';

import DX1_logo from '../../assets/images/DX1_logo.png';
import EXP_logo from '../../assets/images/EXP_logo.png';
import HDV_logo from '../../assets/images/HDV_logo.png';
import SZO_logo from '../../assets/images/SZO_logo.png';
import QUE_logo from '../../assets/images/QUE_logo.png';
import PER_logo from '../../assets/images/PER_logo.png';
import BAS_logo from '../../assets/images/BAS_logo.png';
import SCH_logo from '../../assets/images/SCH_logo.png';
import ARQ_logo from '../../assets/images/ARQ_logo.png';
import RAM_logo from '../../assets/images/RAM_logo.png';
import PAB_logo from '../../assets/images/PAB_logo.png';
import TAR_logo from '../../assets/images/TAR_logo.png';
import ANT_logo from '../../assets/images/ANT_logo.png';
import EVS_logo from '../../assets/images/EVS_logo.png';
import ADO_logo from '../../assets/images/ADO_logo.png';
import PMA_logo from '../../assets/images/PMA_logo.png';

const Estadisticas = () => {
  const equipos = [
    { nombre: 'Dominio X+1', goles: 93, escudo: DX1_logo },
    { nombre: 'Expensive Bottles', goles: 89, escudo: EXP_logo },
    { nombre: 'Herederos de Vega', goles: 84, escudo: HDV_logo },
    { nombre: 'San Zócalo', goles: 81, escudo: SZO_logo },
    { nombre: 'El Queme', goles: 76, escudo: QUE_logo },
    { nombre: 'Perritos UNSTA F. C.', goles: 75, escudo: PER_logo },
    { nombre: 'Bastardos de Richard', goles: 71, escudo: BAS_logo },
    { nombre: 'Schalke 23', goles: 59, escudo: SCH_logo },
    { nombre: 'Arquero Fantasma', goles: 55, escudo: ARQ_logo },
    { nombre: 'Rama y sus Ramitas', goles: 55, escudo: RAM_logo },
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