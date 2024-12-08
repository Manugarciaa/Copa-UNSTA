'use client';

const MasculinoPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="
        text-center 
        bg-gradient-to-r from-[#ff9966] via-[#ff7733] to-[#ff5500]
        text-transparent bg-clip-text
        text-5xl md:text-6xl lg:text-7xl
        font-bold 
        mb-12
      ">
        Copa UNSTA 2024
      </h1>

      <div className="space-y-12 text-center">
        {/* Mensaje Principal */}
        <p className="
          text-gray-300 
          text-2xl md:text-3xl 
          leading-relaxed 
          font-light
        ">
          ¡Bienvenidos al torneo más emocionante de la facultad! Aquí cada partido es una oportunidad
          para demostrar no solo la excelencia deportiva, sino también los valores que nos definen
          como comunidad universitaria.
        </p>
      </div>
    </div>
  );
};

export default MasculinoPage;