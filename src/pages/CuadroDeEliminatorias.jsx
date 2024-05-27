import React from 'react';
import styled from 'styled-components';
import LogoEquipoA1 from '../assets/LogoEquipoA1.webp';

const CuadroContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const CopaContainer = styled.div`
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  display: inline-block;
  width: 60%;
  box-sizing: border-box;
  background-color: rgba(220, 220, 220, 1);
  @media (max-width: 767px) {
    border-radius: 8;
    width: 100%;
  }
`;

const Fase = styled.div`
  text-align: center;
  dislplay: flex;
  h2 {
    margin-bottom: 2rem;
  }
`;

const Partido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  
  &:nth-child(3n + 1) {
    background-color: #c0c0c0;
  }
  &:nth-child(3n + 2) {
    background-color: #d5d5d5;
  }
  &:nth-child(3n + 3) {
    background-color: #d5d5d5;
  }

  .equipo {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 50px;
      max-height: 50px;
      margin-bottom: 0.5rem;
    }
  }

  .resultado {
    font-weight: bold;
  }
`;

const CuadroDeEliminatorias = () => {
  return (
    <CuadroContainer className='text-black'>
      <div className="copa-wrapper">
        <CopaContainer>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={LogoEquipoA1} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2>COPA DE ORO</h2>
            </div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 1" />
                <span>EA1</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 2" />
                <span>EA2</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 3" />
                <span>EA3</span>
              </div>
              <div className="resultado">01 jun.</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 4" />
                <span>EA4</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 5" />
                <span>EA5</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 6" />
                <span>EA6</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainer>
      </div>
      <div className="copa-wrapper">
        <CopaContainer>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={LogoEquipoA1} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2>COPA DE PLATA</h2>
            </div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 1" />
                <span>EA1</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 2" />
                <span>EA2</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 3" />
                <span>EA3</span>
              </div>
              <div className="resultado">01 jun.</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 4" />
                <span>EA4</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 5" />
                <span>EA5</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 6" />
                <span>EA6</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainer>
      </div>
      <div className="copa-wrapper">
        <CopaContainer>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={LogoEquipoA1} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2>COPA DE BRONCE</h2>
            </div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 1" />
                <span>EA1</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 2" />
                <span>EA2</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 3" />
                <span>EA3</span>
              </div>
              <div className="resultado">01 jun.</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 4" />
                <span>EA4</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 5" />
                <span>EA5</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 6" />
                <span>EA6</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainer>
      </div>
      <div className="copa-wrapper">
        <CopaContainer>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={LogoEquipoA1} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2>COPA DE LECHE</h2>
            </div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 1" />
                <span>EA1</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 2" />
                <span>EA2</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 3" />
                <span>EA3</span>
              </div>
              <div className="resultado">01 jun.</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 4" />
                <span>EA4</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 5" />
                <span>EA5</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={LogoEquipoA1} alt="Equipo 6" />
                <span>EA6</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainer>
      </div>
    </CuadroContainer>
  );
};

export default CuadroDeEliminatorias;