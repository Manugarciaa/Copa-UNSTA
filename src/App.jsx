import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import styles from "./style";

import Header from "./components/Header"
import Home from "./pages/Home";
import EncabezadoTorneo from "./components/EncabezadoTorneo";
import Equipos from "./pages/Equipos";
import DX1 from "./pages/equipos/DX1";
import EXP from "./pages/equipos/EXP";
import HDV from "./pages/equipos/HDV";
import SZO from "./pages/equipos/SZO";
import QUE from "./pages/equipos/QUE";
import PER from "./pages/equipos/PER";
import BAS from "./pages/equipos/BAS";
import SCH from "./pages/equipos/SCH";
import ARQ from "./pages/equipos/ARQ";
import RAM from "./pages/equipos/RAM";
import PAB from "./pages/equipos/PAB";
import TAR from "./pages/equipos/TAR";
import FEC from "./pages/equipos/FEC";
import EVS from "./pages/equipos/EVS";
import ADO from "./pages/equipos/ADO";
import PMA from "./pages/equipos/PMA";
import Partidos from "./pages/Partidos";
import FaseDeGrupos from "./pages/FaseDeGrupos";
import CuadroDeEliminatorias from "./pages/CuadroDeEliminatorias";
import Estadisticas from "./pages/Estadisticas";
import Footer from "./components/Footer"

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
              <Route path="/masculino/equipos/DX1" element={<> <EncabezadoTorneo /> <DX1 /> </>} />
              <Route path="/masculino/equipos/EXP" element={<> <EncabezadoTorneo /> <EXP /> </>} />
              <Route path="/masculino/equipos/HDV" element={<> <EncabezadoTorneo /> <HDV /> </>} />
              <Route path="/masculino/equipos/SZO" element={<> <EncabezadoTorneo /> <SZO /> </>} />
              <Route path="/masculino/equipos/QUE" element={<> <EncabezadoTorneo /> <QUE /> </>} />
              <Route path="/masculino/equipos/PER" element={<> <EncabezadoTorneo /> <PER /> </>} />
              <Route path="/masculino/equipos/BAS" element={<> <EncabezadoTorneo /> <BAS /> </>} />
              <Route path="/masculino/equipos/SCH" element={<> <EncabezadoTorneo /> <SCH /> </>} />
              <Route path="/masculino/equipos/ARQ" element={<> <EncabezadoTorneo /> <ARQ /> </>} />
              <Route path="/masculino/equipos/RAM" element={<> <EncabezadoTorneo /> <RAM /> </>} />
              <Route path="/masculino/equipos/PAB" element={<> <EncabezadoTorneo /> <PAB /> </>} />
              <Route path="/masculino/equipos/TAR" element={<> <EncabezadoTorneo /> <TAR /> </>} />
              <Route path="/masculino/equipos/FEC" element={<> <EncabezadoTorneo /> <FEC /> </>} />
              <Route path="/masculino/equipos/EVS" element={<> <EncabezadoTorneo /> <EVS /> </>} />
              <Route path="/masculino/equipos/ADO" element={<> <EncabezadoTorneo /> <ADO /> </>} />
              <Route path="/masculino/equipos/PMA" element={<> <EncabezadoTorneo /> <PMA /> </>} />
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