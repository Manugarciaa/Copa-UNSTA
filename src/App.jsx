import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from 'react';

import styles from "./style";

import Header from "./components/Header";
import Home from "./pages/Home";
import EncabezadoM from "./components/EncabezadoM";
import Footer from "./components/Footer";
import EquiposM from './pages/masculino/Equipos';

const DX1 = lazy(() => import('./pages/masculino/equipos/DX1'));
const EXP = lazy(() => import('./pages/masculino/equipos/EXP'));
const HDV = lazy(() => import('./pages/masculino/equipos/HDV'));
const SZO = lazy(() => import('./pages/masculino/equipos/SZO'));
const QUE = lazy(() => import('./pages/masculino/equipos/QUE'));
const PER = lazy(() => import('./pages/masculino/equipos/PER'));
const BAS = lazy(() => import('./pages/masculino/equipos/BAS'));
const SCH = lazy(() => import('./pages/masculino/equipos/SCH'));
const ARQ = lazy(() => import('./pages/masculino/equipos/ARQ'));
const RAM = lazy(() => import('./pages/masculino/equipos/RAM'));
const PAB = lazy(() => import('./pages/masculino/equipos/PAB'));
const TAR = lazy(() => import('./pages/masculino/equipos/TAR'));
const ANT = lazy(() => import('./pages/masculino/equipos/ANT'));
const EVS = lazy(() => import('./pages/masculino/equipos/EVS'));
const ADO = lazy(() => import('./pages/masculino/equipos/ADO'));
const PMA = lazy(() => import('./pages/masculino/equipos/PMA'));
const PartidosM = lazy(() => import('./pages/masculino/Partidos'));
const FaseDeGruposM = lazy(() => import('./pages/masculino/FaseDeGrupos'));
const CuadroDeEliminatoriasM = lazy(() => import('./pages/masculino/CuadroDeEliminatorias'));
const EstadisticasM = lazy(() => import('./pages/masculino/Estadisticas'));

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
            <Suspense fallback={<div>Cargando...</div>}>
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
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;