import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = teams.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    } else if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    } else {
      return b.goalsFor - a.goalsFor; 
    }
  });

  return (
    <div className="flex flex-col items-center mb-10 sm:mb-16">
      <div className="w-full flex justify-center mb-5">
        <b className="text-white text-4xl sm:text-4xl">{groupName}</b>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-white">
              <th className="px-2 py-1 text-xl">#</th>
              <th className="px-2 py-1 text-xl">Equipo</th>
              <th className="px-2 py-1 text-xl">Pts</th>
              <th className="sm:table-cell px-2 py-1 text-xl">PJ</th>
              <th className="hidden sm:table-cell px-2 py-1 text-xl">PG</th>
              <th className="hidden sm:table-cell px-2 py-1 text-xl">PE</th>
              <th className="hidden sm:table-cell px-2 py-1 text-xl">PP</th>
              <th className="hidden sm:table-cell px-2 py-1 text-xl">GF</th>
              <th className="hidden sm:table-cell px-2 py-1 text-xl">GC</th>
              <th className="sm:table-cell px-2 py-1 text-xl">Dif</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <tr className="text-white border-b-2 border-gray-300" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)' }} key={index}>
                <td className="px-2 py-2 sm:px-4 sm:py-4 flex justify-center items-center">
                  {index < 2 ? (
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-200 shadow-md">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  ) : index < 4 ? (
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-00 shadow-md">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  ) : index < 6 ? (
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-00 shadow-md">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-400 shadow-md">
                      <span className="flex items-center justify-center h-full text-black font-bold text-lg">{index + 1}</span>
                    </div>
                  )}
                </td>
                <td className="px-2 py-1 sm:px-4 sm:py-3" colSpan={1}>
                  <div className="flex items-center">
                    {team.logo && (
                      <img src={team.logo} className="h-12 sm:h-12 mr-3 sm:mr-3" alt={`Logo ${team.name}`} />
                    )}
                    <span className="text-3xl">{team.name}</span>
                  </div>
                </td>
                <td className="px-2 py-1 sm:px-3 sm:py-2 font-bold text-center text-xl">{team.points}</td>
                <td className="sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.played}</td>
                <td className="hidden sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.won}</td>
                <td className="hidden sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.drawn}</td>
                <td className="hidden sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.lost}</td>
                <td className="hidden sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.goalsFor}</td>
                <td className="hidden sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.goalsAgainst}</td>
                <td className="sm:table-cell px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FaseDeGrupos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sheet.best/api/sheets/8906a66e-68bd-4121-8423-55fa423541c2');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);const grupoA = data.filter(item => item.Grupo === 'Grupo A');
  const grupoB = data.filter(item => item.Grupo === 'Grupo B');
  
  function getLogo(id) {
    try {
      return eval(`${id}_logo`);
    } catch (e) {
      console.warn(`Logo para ${id} no encontrado`);
      return null;
    }
  }

  const groups = [
    {
      groupName: 'Grupo A',
      teams: grupoA.map((item, index) => ({
        name: item.Equipo,
        points: item.Pts,
        played: item.PJ,
        won: item.PG,
        drawn: item.PE,
        lost: item.PP,
        goalsFor: item.GF,
        goalsAgainst: item.GC,
        goalDifference: item['Dif'],
        logo: getLogo(item.ID)
      })),
    },
    {
      groupName: 'Grupo B',
      teams: grupoB.map((item, index) => ({
        name: item.Equipo,
        points: item.Pts,
        played: item.PJ,
        won: item.PG,
        drawn: item.PE,
        lost: item.PP,
        goalsFor: item.GF,
        goalsAgainst: item.GC,
        goalDifference: item['Dif'],
        logo: getLogo(item.ID)
      })),
    },
  ];
  
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px] mb-5">
        <span className="text-gradient">Fase de grupos</span>
      </h1>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        groups.map((group, index) => (
          <GroupTable key={index} groupName={group.groupName} teams={group.teams} />
        ))
      )}
    </div>
  );
};

export default FaseDeGrupos;
