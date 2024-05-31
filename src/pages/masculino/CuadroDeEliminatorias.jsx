import React from 'react';
import styled from 'styled-components';
import TBD_logo from '../../assets/images/TBD_logo.png';

const CuadroContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto; 
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const CopaContainerORO = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  display: inline-block;
  width: 60%;
  box-sizing: border-box;
  background: linear-gradient(40deg, #F7DC6F, #977E1D, #F1C40F);
  background-size: 400% 400%;
  animation: verticalGradientAnimation 5s ease infinite;

  @media (max-width: 767px) {
    border-radius: 8px;
    width: 100%;
  }

  @keyframes verticalGradientAnimation {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
`;

const CopaContainerPLATA = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  display: inline-block;
  width: 60%;
  box-sizing: border-box;
  background: linear-gradient(70deg, #CACFD2, #424949, #D7DBDD);
  background-size: 400% 400%;
  animation: gradientAnimation 5s ease infinite;

  @media (max-width: 767px) {
    border-radius: 8;
    width: 100%;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CopaContainerBRONCE = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  display: inline-block;
  width: 60%;
  box-sizing: border-box;
  background: linear-gradient(40deg, #E67E22, #784212, #CA6F1E);
  background-size: 400% 400%;
  animation: gradientAnimation 5s ease infinite;

  @media (max-width: 767px) {
    border-radius: 8;
    width: 100%;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CopaContainerLECHE = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 8px;
  display: inline-block;
  width: 60%;
  box-sizing: border-box;
  background: linear-gradient(45deg, #E8F8F5, #7F8C8D, #F2F3F4);
  background-size: 400% 400%;
  animation: gradientAnimation 5s ease infinite;

  @media (max-width: 767px) {
    border-radius: 8;
    width: 100%;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Fase = styled.div`
  text-align: center;
  dislplay: flex;
  h2 {
    margin-bottom: 1rem;
  }
`;

const Etapa = styled.div`
  color: #666;
  font-size: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Partido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: relative;
  margin-left: 1rem; 
  margin-right: 1rem; 
  
  &:last-child {
    margin-bottom: 1rem;
  }
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
        <CopaContainerORO>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={TBD_logo} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2 style={{ fontSize: '20px' }}>COPA DE ORO</h2>
            </div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 1" />
                <span>???</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 2" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Final</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 3" />
                <span>???</span>
              </div>
              <div className="resultado" style={{ fontWeight: 'normal' }}>01 jun.</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 4" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 5" />
                <span>???</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 6" />
                <span>???</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainerORO>
      </div>
      <div className="copa-wrapper">
        <CopaContainerPLATA>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={TBD_logo} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2 style={{ fontSize: '20px' }}>COPA DE PLATA</h2>
            </div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 1" />
                <span>???</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 2" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Final</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 3" />
                <span>???</span>
              </div>
              <div className="resultado" style={{ fontWeight: 'normal' }}>01 jun.</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 4" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 5" />
                <span>???</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 6" />
                <span>???</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainerPLATA>
      </div>
      <div className="copa-wrapper">
        <CopaContainerBRONCE>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={TBD_logo} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2 style={{ fontSize: '20px' }}>COPA DE BRONCE</h2>
            </div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 1" />
                <span>???</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 2" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Final</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 3" />
                <span>???</span>
              </div>
              <div className="resultado" style={{ fontWeight: 'normal' }}>01 jun.</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 4" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 5" />
                <span>???</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 6" />
                <span>???</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainerBRONCE>
      </div>
      <div className="copa-wrapper">
        <CopaContainerLECHE>
          <Fase>
            <div className="header" style={{ textAlign: 'center' }}>
              <img src={TBD_logo} alt="Copa de Oro" style={{ width: '50px', height: 'auto', display: 'block', margin: 'auto' }} />
              <h2 style={{ fontSize: '20px' }}>COPA DE LECHE</h2>
            </div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 1" />
                <span>???</span>
              </div>
              <div className="resultado">2:0</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 2" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Final</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 3" />
                <span>???</span>
              </div>
              <div className="resultado" style={{ fontWeight: 'normal' }}>01 jun.</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 4" />
                <span>???</span>
              </div>
            </Partido>
            <div style={{ borderLeft: '3px solid gray', height: '20px', marginLeft: '50%' }}></div>
            <Partido>
              <Etapa>Semifinal</Etapa>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 5" />
                <span>???</span>
              </div>
              <div className="resultado">3:4</div>
              <div className="equipo">
                <img src={TBD_logo} alt="Equipo 6" />
                <span>???</span>
              </div>
            </Partido>
          </Fase>
        </CopaContainerLECHE>
      </div>
    </CuadroContainer>
  );
};

export default CuadroDeEliminatorias; 