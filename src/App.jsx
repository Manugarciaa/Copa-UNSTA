import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import styles from "./style";

import Header from "./components/Header";
import Home from "./pages/Home";
import EncabezadoTorneo from "./components/EncabezadoTorneoMasculino";
import Equipos from "./pages/Equipos";
import DX1 from "./pages/equipos/DX1";
import EquipoA2 from "./pages/equipos/EquipoA2";
import EquipoA3 from "./pages/equipos/EquipoA3";
import EquipoA4 from "./pages/equipos/EquipoA4";
import EquipoA5 from "./pages/equipos/EquipoA5";
import EquipoA6 from "./pages/equipos/EquipoA6";
import EquipoA7 from "./pages/equipos/EquipoA7";
import EquipoA8 from "./pages/equipos/EquipoA8";
import EquipoB1 from "./pages/equipos/EquipoB1";
import EquipoB2 from "./pages/equipos/EquipoB2";
import EquipoB3 from "./pages/equipos/EquipoB3";
import EquipoB4 from "./pages/equipos/EquipoB4";
import EquipoB5 from "./pages/equipos/EquipoB5";
import EquipoB6 from "./pages/equipos/EquipoB6";
import EquipoB7 from "./pages/equipos/EquipoB7";
import EquipoB8 from "./pages/equipos/EquipoB8";
import Partidos from "./pages/Partidos";
import FaseDeGrupos from "./pages/FaseDeGrupos";
import CuadroDeEliminatorias from "./pages/CuadroDeEliminatorias";
import Estadisticas from "./pages/Estadisticas";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const preventZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventZoom);
    };
  }, []);

  return (
    <div className={`${styles.backgroundColor} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<> <Header /> <Home /> <Footer /> </>} />
              <Route path="/masculino/partidos" element={<> <EncabezadoTorneo /> <Partidos /> </>} />
              <Route path="/masculino/equipos" element={<> <EncabezadoTorneo /> <Equipos /> </>} />
              <Route path="/masculino/equipos/equipo_A1" element={<> <DX1 /> </>} />
              <Route path="/masculino/equipos/equipo_A2" element={<> <EquipoA2 /> </>} />
              <Route path="/masculino/equipos/equipo_A3" element={<> <EquipoA3 /> </>} />
              <Route path="/masculino/equipos/equipo_A4" element={<> <EquipoA4 /> </>} />
              <Route path="/masculino/equipos/equipo_A5" element={<> <EquipoA5 /> </>} />
              <Route path="/masculino/equipos/equipo_A6" element={<> <EquipoA6 /> </>} />
              <Route path="/masculino/equipos/equipo_A7" element={<> <EquipoA7 /> </>} />
              <Route path="/masculino/equipos/equipo_A8" element={<> <EquipoA8 /> </>} />
              <Route path="/masculino/equipos/equipo_B1" element={<> <EquipoB1 /> </>} />
              <Route path="/masculino/equipos/equipo_B2" element={<> <EquipoB2 /> </>} />
              <Route path="/masculino/equipos/equipo_B3" element={<> <EquipoB3 /> </>} />
              <Route path="/masculino/equipos/equipo_B4" element={<> <EquipoB4 /> </>} />
              <Route path="/masculino/equipos/equipo_B5" element={<> <EquipoB5 /> </>} />
              <Route path="/masculino/equipos/equipo_B6" element={<> <EquipoB6 /> </>} />
              <Route path="/masculino/equipos/equipo_B7" element={<> <EquipoB7 /> </>} />
              <Route path="/masculino/equipos/equipo_B8" element={<> <EquipoB8 /> </>} />
              <Route path="/masculino/fase_de_grupos" element={<> <EncabezadoTorneo /> <FaseDeGrupos /> </>} />
              <Route path="/masculino/cuadro_de_eliminatorias" element={<> <EncabezadoTorneo /> <CuadroDeEliminatorias /> </>} />
              <Route path="/masculino/estadisticas" element={<> <EncabezadoTorneo /> <Estadisticas /> </>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;