import React, { useEffect, useState } from 'react';
import axios from 'axios';
import equipo_A1 from "../assets/images/equipo_A1.png";
import equipo_A2 from "../assets/images/equipo_A2.png";
import equipo_A3 from "../assets/images/equipo_A3.png";
import equipo_A4 from "../assets/images/equipo_A4.png";
import equipo_A5 from "../assets/images/equipo_A5.png";
import equipo_A6 from "../assets/images/equipo_A6.png";
import equipo_A7 from "../assets/images/equipo_A7.png";
import equipo_A8 from "../assets/images/equipo_A8.png";
import equipo_B1 from "../assets/images/equipo_B1.png";
import equipo_B2 from "../assets/images/equipo_B2.png";
import equipo_B3 from "../assets/images/equipo_B3.png";
import equipo_B4 from "../assets/images/equipo_B4.png";
import equipo_B5 from "../assets/images/equipo_B5.png";
import equipo_B6 from "../assets/images/equipo_B6.png";
import equipo_B7 from "../assets/images/equipo_B7.png";
import equipo_B8 from "../assets/images/equipo_B8.png";

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = teams.sort((a, b) => b.points - a.points);
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

const Tournament = () => {
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
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);const grupoA = data.filter(item => item.Grupo === 'Grupo A');
  const grupoB = data.filter(item => item.Grupo === 'Grupo B');
  
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
        logo: index < 8 ? eval(`equipo_A${index + 1}`) : null,
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
        logo: index < 8 ? eval(`equipo_B${index + 1}`) : null,
      })),
    },
  ];
  
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px] mb-5">
        <span className="text-gradient">Fase de grupos</span>
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        groups.map((group, index) => (
          <GroupTable key={index} groupName={group.groupName} teams={group.teams} />
        ))
      )}
    </div>
  );
  };
  
  export default Tournament;