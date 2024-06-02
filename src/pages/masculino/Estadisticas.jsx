import React from 'react';
import SCH_logo from '../../assets/images/SCH_icon.webp';
import PAB_logo from '../../assets/images/PAB_icon.webp';
import DX1_logo from '../../assets/images/DX1_icon.webp';
import QUE_logo from '../../assets/images/QUE_icon.webp';
import SZO_logo from '../../assets/images/SZO_icon.webp';
import ANT_logo from '../../assets/images/ANT_icon.webp';
import EXP_logo from '../../assets/images/EXP_icon.webp';
import TAR_logo from '../../assets/images/TAR_icon.webp';
import GHO_logo from '../../assets/images/GHO_icon.webp';
import BAS_logo from '../../assets/images/BAS_icon.webp';
import ARQ_logo from '../../assets/images/ARQ_icon.webp';
import HDV_logo from '../../assets/images/HDV_icon.webp';
import RAM_logo from '../../assets/images/RAM_icon.webp';
import EVS_logo from '../../assets/images/EVS_icon.webp';
import ADO_logo from '../../assets/images/ADO_icon.webp';
import PMA_logo from '../../assets/images/PMA_icon.webp';

const Estadisticas = () => {
  const equipos = [
    { nombre: 'Dominio X+1', goles: 93, escudo: DX1_logo },
    { nombre: 'Expensive Bottles', goles: 89, escudo: EXP_logo },
    { nombre: 'Herederos de Vega', goles: 84, escudo: HDV_logo },
    { nombre: 'San Zócalo', goles: 81, escudo: SZO_logo },
    { nombre: 'El Queme', goles: 76, escudo: QUE_logo },
    { nombre: 'Ghostbusters', goles: 75, escudo: GHO_logo },
    { nombre: 'Bastardos de Richard', goles: 71, escudo: BAS_logo },
    { nombre: 'Schalke 23', goles: 59, escudo: SCH_logo },
    { nombre: 'Arquero Fantasma', goles: 55, escudo: ARQ_logo },
    { nombre: 'Rama y sus Ramitas', goles: 55, escudo: RAM_logo },
  ];

  return (

    <div class="flex flex-col min-h-screen text-gray-50">
      <main class="flex-1 py-8 px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-900 rounded-lg shadow-md p-6">
            <h2 class="text-4xl font-bold mb-4">Top Goleadores</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    1
                  </div>
                  <div>
                    <p class="font-medium">Lionel Messi</p>
                    <p class="text-gray-400">Miami</p>
                  </div>
                </div>
                <p class="font-bold text-gray-300">35 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    2
                  </div>
                  <div>
                    <p class="font-medium">Cristiano Ronaldo</p>
                    <p class="text-gray-400">ALNASSR</p>
                  </div>
                </div>
                <p class="font-bold text-gray-300">28 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    3
                  </div>
                  <div>
                    <p class="font-medium">Robert Lewandowski</p>
                    <p class="text-gray-400">Barcelona</p>
                  </div>
                </div>
                <p class="font-bold text-gray-300">25 Goals</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-900 rounded-lg shadow-md p-6">
            <h2 class="text-4xl font-bold mb-4">Top Equipos Goleadores</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    1
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center text-gray-400 font-bold gap-x-2">
                    <img src={ADO_logo} alt="" />
                  </div>
                  <p class="font-medium">Manchester City</p>
                </div>
                <p class="font-bold text-gray-300">85 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    2
                  </div>
                  <div class="w-10 h-10 flex items-center justify-center text-gray-400 font-bold gap-x-2">
                    <img src={EXP_logo} alt="" />
                  </div>
                  <p class="font-medium">Bayern Munich</p>
                </div>
                <p class="font-bold text-gray-300">78 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    3
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    <img src={ANT_logo} alt="" />
                  </div>
                  <p class="font-medium">Liverpool</p>
                </div>
                <p class="font-bold text-gray-300">72 Goals</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-900 rounded-lg shadow-md p-6">
            <h2 class="text-4xl font-bold mb-4">Equipos menos goleados</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    3
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    <img src={EXP_logo} alt="" />
                  </div>
                  <p class="font-medium">Manchester City</p>
                </div>
                <p class="font-bold text-gray-300">23 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    3
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    <img src={ARQ_logo} alt="" />
                  </div>
                  <p class="font-medium">Atletico Madrid</p>
                </div>
                <p class="font-bold text-gray-300">25 Goals</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    3
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                    <img src={EVS_logo} alt="" />
                  </div>
                  <p class="font-medium">Juventus</p>
                </div>
                <p class="font-bold text-gray-300">27 Goals</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Estadisticas;