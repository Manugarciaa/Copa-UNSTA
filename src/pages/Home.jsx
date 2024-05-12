import { logo_torneo } from "../assets";
import styles from "../style";
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="mb-35" /> {/* Espacio entre secciones */}
    {/* Sección "Inicio" */}
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
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={logo_torneo}
          alt="Home image"
          className="w-[70%] h-[90%] relative z-[5]"
        />
        <div className="absolute z-[1] w-[60%] h-[50%] rounded-full orange__gradient bottom-40" />
      </div>
    </section>

    <div className="mb-15" /> 

    {/* Sección "Torneo" */}
    <section id="torneo" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[40px] text-white leading-[40px] xl:text-[55px] xl:leading-[70px]">
            ¡No te pierdas los resultados del torneo! {" "}
            <span className="text-gradient"> Mantente al tanto.</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ¡Echa un vistazo a los horarios de los equipos masculinos y femeninos! ¡Y luego, anímalos para que se unan a la hinchada! ¡Será épico!
          <div className={`flex space-x-8 ${styles.flexCenter}`}>
            <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/masculino/partidos" className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Masculino
              </Link>
            </button>
            <button className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/femenino/partidos" className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                Femenino
              </Link>
            </button>
          </div>
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={logo_torneo}
          alt="Torneo image"
          className="w-[70%] h-[90%] relative z-[5]"
        />
      </div>
    </section>

    <div className="my-6 border-b border-gray-300"></div>
  </>
);

export default Home;
