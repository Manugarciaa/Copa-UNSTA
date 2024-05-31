import React, { useState, useEffect } from 'react';
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

const Partidos = () => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sheet.best/api/sheets/b71e9de1-b594-42c9-934b-9b003de90524');
        const adaptedMatches = response.data.map((item) => ({
          equipo_1: item['Equipo 1'],
          equipo_2: item['Equipo 2'],
          partido: item['Dato'],
        }));
        setMatches(adaptedMatches);
        console.log(adaptedMatches);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const getLogoForTeam = (teamName) => {
    switch (teamName) {
      case 'DX1': return <img src={DX1_logo} alt="DX1" className="w-8 h-8" />;
      case 'EXP': return <img src={EXP_logo} alt="EXP" className="w-8 h-8" />;
      case 'HDV': return <img src={HDV_logo} alt="HDV" className="w-8 h-8" />;
      case 'SZO': return <img src={SZO_logo} alt="SZO" className="w-8 h-8" />;
      case 'QUE': return <img src={QUE_logo} alt="QUE" className="w-8 h-8" />;
      case 'PER': return <img src={PER_logo} alt="PER" className="w-8 h-8" />;
      case 'BAS': return <img src={BAS_logo} alt="BAS" className="w-8 h-8" />;
      case 'SCH': return <img src={SCH_logo} alt="SCH" className="w-8 h-8" />;
      case 'ARQ': return <img src={ARQ_logo} alt="ARQ" className="w-8 h-8" />;
      case 'RAM': return <img src={RAM_logo} alt="RAM" className="w-8 h-8" />;
      case 'PAB': return <img src={PAB_logo} alt="PAB" className="w-8 h-8" />;
      case 'TAR': return <img src={TAR_logo} alt="TAR" className="w-8 h-8" />;
      case 'ANT': return <img src={ANT_logo} alt="ANT" className="w-8 h-8" />;
      case 'EVS': return <img src={EVS_logo} alt="EVS" className="w-8 h-8" />;
      case 'ADO': return <img src={ADO_logo} alt="ADO" className="w-8 h-8" />;
      case 'PMA': return <img src={PMA_logo} alt="PMA" className="w-8 h-8" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px] mb-5">
        <span className="text-gradient">Partidos</span>
      </h1>
      {matches.map((match, index) => (
        <div key={index} className="flex items-center justify-between w-full max-w-md px-6 py-4 mb-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            {getLogoForTeam(match.equipo_1)}
            <span className="text-xl font-bold ml-2">{match.equipo_1}</span>
          </div>
          <div className="flex flex-col items-center">
            {match.result && <span className="text-2xl font-bold">{match.result}</span>}
            {match.partido && <span className="text-lg font-bold text-gray-500">{match.partido}</span>}
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2">{match.equipo_2}</span>
            {getLogoForTeam(match.equipo_2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partidos;