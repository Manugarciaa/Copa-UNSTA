import React from 'react';
import styled from 'styled-components';
import LogoEquipoA1 from '../assets/LogoEquipoA1.webp';

const CuadroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Fase = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }
`;

const Partido = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;

  img {
    max-width: 60px;
    max-height: 60px;
  }
`;

const CuadroDeEliminatorias = () => {
  return (
    <CuadroContainer className='text-white'>
      <Fase>
        <h3>Octavos de final</h3>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 1" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 2" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 5" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 6" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 7" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 8" />
        </Partido>
        {/*           */}
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 1" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 2" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 5" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 6" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 7" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 8" />
        </Partido>
      </Fase>
      <Fase>
        <h3>Cuartos de final</h3>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 3" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 4" />
        </Partido>
        {/* Agregar más partidos de cuartos de final */}
      </Fase>
      <Fase>
        <h3>Semifinales</h3>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 5" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 6" />
        </Partido>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 1" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 2" />
        </Partido>
      </Fase>
      <Fase>
        <h3>Final</h3>
        <Partido>
          <img src={LogoEquipoA1} alt="Equipo 7" />
          <span>vs</span>
          <img src={LogoEquipoA1} alt="Equipo 8" />
        </Partido>
      </Fase>
    </CuadroContainer>
  );
};

export default CuadroDeEliminatorias;