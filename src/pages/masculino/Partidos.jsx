import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';
import TBD_logo from '../../assets/images/TBD_logo.png';
import SCH_logo from '../../assets/images/SCH_logo.png';
import PAB_logo from '../../assets/images/PAB_logo.png';
import DX1_logo from '../../assets/images/DX1_logo.png';
import QUE_logo from '../../assets/images/QUE_logo.png';
import SZO_logo from '../../assets/images/SZO_logo.png';
import ANT_logo from '../../assets/images/ANT_logo.png';
import EXP_logo from '../../assets/images/EXP_logo.png';
import TAR_logo from '../../assets/images/TAR_logo.png';
import GHO_logo from '../../assets/images/GHO_logo.png';
import BAS_logo from '../../assets/images/BAS_logo.png';
import ARQ_logo from '../../assets/images/ARQ_logo.png';
import HDV_logo from '../../assets/images/HDV_logo.png';
import RAM_logo from '../../assets/images/RAM_logo.png';
import EVS_logo from '../../assets/images/EVS_logo.png';
import ADO_logo from '../../assets/images/ADO_logo.png';
import PMA_logo from '../../assets/images/PMA_logo.png';

const PartidoCard = styled.div`
  display: flex;
  justify-content: space-between; // Ensure even spacing between children
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: relative;
  margin: 1rem 0;
  background-color: #d5d5d5;

  .equipo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem; // Add margin to create more space

    img {
      max-width: 60px;
      max-height: 60px;
      margin-bottom: 1rem;
    }
  }

  .resultado {
    font-weight: bold;
    font-size: 2rem;
    margin: 0 4rem; // Increase margin for more spacing
  }
`;

const Etapa = styled.div`
  color: #666;
  font-size: 1.2rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const getLogoForTeam = (teamName) => {
  switch (teamName) {
    case 'SCH': return SCH_logo;
    case 'PAB': return PAB_logo;
    case 'DX1': return DX1_logo;
    case 'QUE': return QUE_logo;
    case 'SZO': return SZO_logo;
    case 'ANT': return ANT_logo;
    case 'EXP': return EXP_logo;
    case 'TAR': return TAR_logo;
    case 'GHO': return GHO_logo;
    case 'BAS': return BAS_logo;
    case 'ARQ': return ARQ_logo;
    case 'HDV': return HDV_logo;
    case 'RAM': return RAM_logo;
    case 'EVS': return EVS_logo;
    case 'ADO': return ADO_logo;
    case 'PMA': return PMA_logo;
    default: return TBD_logo;
  }
};

const Partido = ({ descripcion, equipo1, equipo2, fecha, resultado, estado }) => {
  const logo1 = getLogoForTeam(equipo1);
  const logo2 = getLogoForTeam(equipo2);

  return (
    <PartidoCard>
      <Etapa>{descripcion || 'TBD'}</Etapa>
      <div className="equipo">
        <img src={logo1} alt={equipo1 || '???'} />
        <span>{equipo1 || '???'}</span>
      </div>
      <div className="resultado">
        {estado === 'Terminado' ? resultado || 'vs' : fecha || 'Fecha por definir'}
      </div>
      <div className="equipo">
        <img src={logo2} alt={equipo2 || '???'} />
        <span>{equipo2 || '???'}</span>
      </div>
    </PartidoCard>
  );
};

const Partidos = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/partidos.csv');
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

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px] mb-5">
        <span className="text-gradient">Partidos</span>
      </h1>
      {data.map((match, index) => (
        <Partido
          key={index}
          descripcion={match.Descripcion}
          equipo1={match.Equipo1}
          equipo2={match.Equipo2}
          fecha={match.Fecha}
          resultado={match.Resultado}
          estado={match.Estado}
        />
      ))}
    </div>
  );
};

export default Partidos;
