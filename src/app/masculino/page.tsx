'use client';

const MasculinoPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <h1 className="
          text-center 
          bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500]
          text-transparent bg-clip-text
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold 
          mb-8 sm:mb-12
          tracking-tight
        ">
          Copa UNSTA 2024
        </h1>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Mensaje Principal */}
          <div className="md:col-span-2 lg:col-span-3">
            <p className="
              text-gray-300 
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              leading-relaxed 
              font-light
              text-center
              max-w-4xl
              mx-auto
            ">
              ¡Bienvenidos al torneo más emocionante de la facultad! Aquí cada partido es una oportunidad
              para demostrar no solo la excelencia deportiva, sino también los valores que nos definen
              como comunidad universitaria.
            </p>
          </div>

          {/* Sección de Accesos Rápidos */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Próximos Partidos</h3>
            <p className="text-gray-300 mb-4">Consulta los próximos encuentros y resultados recientes.</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff9966] to-[#ff5500] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Resumen del Torneo</h3>
            <p className="text-gray-300 mb-4">Visualiza el progreso general de la competencia.</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff9966] to-[#ff5500] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Reglamento</h3>
            <p className="text-gray-300 mb-4">Revisa las reglas y normativas del torneo.</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff9966] to-[#ff5500] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasculinoPage;