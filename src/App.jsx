import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import styles from "./style";

import Header from "./components/Header"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import EncabezadoTorneo from "./components/EncabezadoTorneo";
import Equipos from "./pages/Equipos"
import Partidos from "./pages/Partidos"
import FaseDeGrupos from "./pages/FaseDeGrupos"
import CuadroDeEliminatorias from "./pages/CuadroDeEliminatorias"
import Estadisticas from "./pages/Estadisticas"

const App = () => {
  // useEffect(() => {
  //   const preventZoom = (event) => {
  //     if (event.ctrlKey) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('wheel', preventZoom, { passive: false });

  //   return () => {
  //     document.removeEventListener('wheel', preventZoom);
  //   };
  // }, []);

  return (
    <div className={`${styles.backgroundColor} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<> <Header /> <Home /> <Footer /> </>} />
              <Route path="/masculino/partidos" element={<> <EncabezadoTorneo /> <Partidos /> </>} />
              <Route path="/masculino/equipos" element={<> <EncabezadoTorneo /> <Equipos /> </>} />
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