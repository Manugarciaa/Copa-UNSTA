import styles from "./style";

import { Navbar, Hero, Stats } from "./components";

const App = () => (
  <div className={`${styles.backgroundColor} w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.backgroundColor} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.backgroundColor} ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>

  </div>
);

export default App