import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import styles from "./style";

import Header from "./components/Header";
import Home from "./pages/Home";
import EncabezadoM from "./components/EncabezadoM";
import EquiposM from "./pages/masculino/Equipos";
import DX1 from "./pages/masculino/equipos/DX1";
import EXP from "./pages/masculino/equipos/EXP";
import HDV from "./pages/masculino/equipos/HDV";
import SZO from "./pages/masculino/equipos/SZO";
import QUE from "./pages/masculino/equipos/QUE";
import PER from "./pages/masculino/equipos/PER";
import BAS from "./pages/masculino/equipos/BAS";
import SCH from "./pages/masculino/equipos/SCH";
import ARQ from "./pages/masculino/equipos/ARQ";
import RAM from "./pages/masculino/equipos/RAM";
import PAB from "./pages/masculino/equipos/PAB";
import TAR from "./pages/masculino/equipos/TAR";
import ANT from "./pages/masculino/equipos/ANT";
import EVS from "./pages/masculino/equipos/EVS";
import ADO from "./pages/masculino/equipos/ADO";
import PMA from "./pages/masculino/equipos/PMA";
import PartidosM from "./pages/masculino/Partidos";
import FaseDeGruposM from "./pages/masculino/FaseDeGrupos";
import CuadroDeEliminatoriasM from "./pages/masculino/CuadroDeEliminatorias";
import EstadisticasM from "./pages/masculino/Estadisticas";
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
              <Route path="/masculino/partidos" element={<> <EncabezadoM /> <PartidosM /> </>} />
              <Route path="/masculino/equipos" element={<> <EncabezadoM /> <EquiposM /> </>} />
              <Route path="/masculino/equipos/DX1" element={<> <EncabezadoM /> <DX1 /> </>} />
              <Route path="/masculino/equipos/EXP" element={<> <EncabezadoM /> <EXP /> </>} />
              <Route path="/masculino/equipos/HDV" element={<> <EncabezadoM /> <HDV /> </>} />
              <Route path="/masculino/equipos/SZO" element={<> <EncabezadoM /> <SZO /> </>} />
              <Route path="/masculino/equipos/QUE" element={<> <EncabezadoM /> <QUE /> </>} />
              <Route path="/masculino/equipos/PER" element={<> <EncabezadoM /> <PER /> </>} />
              <Route path="/masculino/equipos/BAS" element={<> <EncabezadoM /> <BAS /> </>} />
              <Route path="/masculino/equipos/SCH" element={<> <EncabezadoM /> <SCH /> </>} />
              <Route path="/masculino/equipos/ARQ" element={<> <EncabezadoM /> <ARQ /> </>} />
              <Route path="/masculino/equipos/RAM" element={<> <EncabezadoM /> <RAM /> </>} />
              <Route path="/masculino/equipos/PAB" element={<> <EncabezadoM /> <PAB /> </>} />
              <Route path="/masculino/equipos/TAR" element={<> <EncabezadoM /> <TAR /> </>} />
              <Route path="/masculino/equipos/ANT" element={<> <EncabezadoM /> <ANT /> </>} />
              <Route path="/masculino/equipos/EVS" element={<> <EncabezadoM /> <EVS /> </>} />
              <Route path="/masculino/equipos/ADO" element={<> <EncabezadoM /> <ADO /> </>} />
              <Route path="/masculino/equipos/PMA" element={<> <EncabezadoM /> <PMA /> </>} />
              <Route path="/masculino/fase_de_grupos" element={<> <EncabezadoM /> <FaseDeGruposM /> </>} />
              <Route path="/masculino/cuadro_de_eliminatorias" element={<> <EncabezadoM /> <CuadroDeEliminatoriasM /> </>} />
              <Route path="/masculino/estadisticas" element={<> <EncabezadoM /> <EstadisticasM /> </>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;