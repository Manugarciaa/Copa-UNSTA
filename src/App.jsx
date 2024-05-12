import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./style";

import Header from "./components/Header"
import Home from "./pages/Home";
import EncabezadoTorneo from "./components/EncabezadoTorneo";
import Equipos from "./pages/Equipos"
import Partidos from "./pages/Partidos"
import FaseDeGrupos from "./pages/FaseDeGrupos"
import CuadroDeEliminatorias from "./pages/CuadroDeEliminatorias"
import Estadisticas from "./pages/Estadisticas"

const App = () => (
  <div className={`${styles.backgroundColor} w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <> <Header /> <Home /> </> } />
            <Route path="/masculino/equipos" element={ <> <Equipos /> </>} />
            <Route path="/masculino/partidos" element={ <> <EncabezadoTorneo /> <Partidos /> </>} />
            <Route path="/masculino/fase_de_grupos" element={ <> <FaseDeGrupos /> </>} />
            <Route path="/masculino/cuadro_de_eliminatorias" element={ <> <CuadroDeEliminatorias /> </>} />
            <Route path="/masculino/estadisticas" element={ <> <Estadisticas /> </>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </div>
);

export default App