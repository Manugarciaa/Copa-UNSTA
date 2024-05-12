import { logo_torneo } from "../assets";
import styles from "../style";
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <section id="inicio" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[42px] text-white leading-[45px] xl:text-[65px] xl:leading-[75px]">
            Bienvenidos al evento más emocionante de <span className="text-gradient">Ingeniería</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ¡No te pierdas las charlas y el torneo de futbol de la Semana de la Ingeniería!
          Mantente informado y participa en esta emocionante semana llena de aprendizaje y competencia
        </p>
        <div className={`flex space-x-20 sm:px-16 px-6`}>
          <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            <Link to="/masculino/partidos" className="text-white">
              Masculino
            </Link>
          </button>
          <button className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded">
            <Link to="/femenino/partidos" className="text-white">
              Femenino
            </Link>
          </button>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={logo_torneo}
          alt="Home image"
          className="w-[70%] h-[90%] relative z-[5]"
        />
        <div className="absolute z-[1] w-[60%] h-[70%] rounded-full orange__gradient bottom-40" />
      </div>
    </section>
  </>
);

export default Home;
