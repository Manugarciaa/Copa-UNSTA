import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./style";

import Header from "./components/Header"
import Home from "./pages/Home";
import Tournament from "./pages/Tournament"

const App = () => (
  <div className={`${styles.backgroundColor} w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <> <Header /> <Home /> </> } />
            <Route path="/torneos" element={<Tournament />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </div>
);

export default App