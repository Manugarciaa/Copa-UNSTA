import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/style.module.css';

const Home = () => {
  return (
    <section
      id="inicio"
      className={`
        flex md:flex-row flex-col
        ${styles.paddingY}
        container
        mx-auto
        px-4
        sm:px-6 
        lg:px-16
        items-center
        justify-center
        min-h-[calc(100vh-100px)]
        bg-gray-900
      `}
    >
      {/* Contenido Principal */}
      <div className="flex-1 xl:px-0 sm:px-16 px-6">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <h1 className="
            font-poppins
            font-semibold
            text-[52px]
            text-white
            leading-[55px]
            sm:text-[58px]
            sm:leading-[60px]
            md:text-[62px]
            md:leading-[65px]
            xl:text-[72px]
            xl:leading-[75px]
            order-1
            text-center md:text-left
            tracking-tight
          ">
            Bienvenidos a{' '}
            <span className="
              bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500]
              text-transparent bg-clip-text
              block
              font-bold
            ">
              Copa UNSTA 2024
            </span>
          </h1>

          {/* Imagen en móvil */}
          <div className="md:hidden order-2 flex justify-center items-center my-8">
            <div className="
              relative
              w-[200px]
              h-[200px]
              sm:w-[300px]
              sm:h-[300px]
            ">
              <Image
                src="/assets/logo_torneo.webp"
                alt="Logo Torneo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="
            font-poppins
            text-gray-300
            text-[16px]
            leading-[30.8px]
            max-w-[470px]
            sm:text-[18px]
            sm:leading-[32px]
            md:text-[20px]
            md:leading-[33px]
            order-3
            text-center md:text-left
          ">
            El torneo de fútbol más emocionante de la facultad de Ingeniería ha regresado en su 3ª
            edición. A través de este sitio web podrán mantenerse al tanto de los partidos, equipos,
            tablas de posiciones, estadísticas y todo lo relacionado con nuestro apasionante torneo de
            fútbol universitario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 order-4 justify-center md:justify-start w-full">
            <Link
              href="/masculino/"
              className="
                bg-blue-600 hover:bg-blue-700
                text-white font-bold
                py-4 px-8
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:scale-105
                text-center
                text-lg
                w-full sm:w-auto
                flex-1 sm:flex-initial
              "
            >
              Masculino
            </Link>
            <Link
              href="/femenino/"
              className="
                bg-pink-600 hover:bg-pink-700
                text-white font-bold
                py-4 px-8
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:scale-105
                text-center
                text-lg
                w-full sm:w-auto
                flex-1 sm:flex-initial
              "
            >
              Femenino
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen en desktop */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="
          relative
          w-[450px]
          h-[450px]
          lg:w-[500px]
          lg:h-[500px]
        ">
          <Image
            src="/assets/logo_torneo.webp"
            alt="Logo Torneo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Home;