import { logo_torneo, logo } from "../assets";
import styles from "../style";

const Home = () => (
  <>
    {/* Sección "Inicio" */}
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
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
          className="w-[80%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
        <div className="absolute z-[1] w-[70%] h-[80%] rounded-full orange__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gray__gradient" />
        {/* gradient end */}
      </div>
    </section>

    {/* Sección "Torneo" */}
    <section id="Torneo" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative`}>
        <img
          src={logo_torneo}
          alt="Home image"
          className="w-[80%] h-[100%] relative z-[5]"
        />
      </div>

      {/* Ver como hacer para que el contenedor de la imagen pase abajo en el celular */}

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[42px] text-white leading-[45px] xl:text-[65px] xl:leading-[75px]">
            ¡No dejes pasar la oportunidad! {" "}
            <span className="text-gradient"> Inscríbete ahora.</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ¡No te pierdas las charlas y el torneo de futbol de la Semana de la Ingeniería!
          Mantente informado y participa en esta emocionante semana llena de aprendizaje y competencia
        </p>
        {/* Botón Inscribirse */}
        <button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ¡Inscríbete ahora!
        </button>
      </div>
    </section>

    <div className="my-6 border-b border-gray-300"></div>

    {/* Sección "Semana de la Ingeniería" */}
    <section id="semana-de-la-ingenieria" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div></div>
    </section>
  </>
);

export default Home;





