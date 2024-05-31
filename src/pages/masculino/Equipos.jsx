import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import SCH_logo from '../../assets/images/SCH_logo.png';
import PAB_logo from '../../assets/images/PAB_logo.png';
import DX1_logo from '../../assets/images/DX1_logo.png';
import QUE_logo from '../../assets/images/QUE_logo.png';
import SZO_logo from '../../assets/images/SZO_logo.png';
import ANT_logo from '../../assets/images/ANT_logo.png';
import EXP_logo from '../../assets/images/EXP_logo.png';
import TAR_logo from '../../assets/images/TAR_logo.png';
import GHO_logo from '../../assets/images/GHO_logo.png';
import BAS_logo from '../../assets/images/BAS_logo.png';
import ARQ_logo from '../../assets/images/ARQ_logo.png';
import HDV_logo from '../../assets/images/HDV_logo.png';
import RAM_logo from '../../assets/images/RAM_logo.png';
import EVS_logo from '../../assets/images/EVS_logo.png';
import ADO_logo from '../../assets/images/ADO_logo.png';
import PMA_logo from '../../assets/images/PMA_logo.png';
import { useNavigate } from 'react-router-dom';

const equipos = [
  { id: 1, nombre: 'Schalke 23', logo: SCH_logo, abreviatura: 'SCH' },
  { id: 2, nombre: 'Pabellón A', logo: PAB_logo, abreviatura: 'PAB' },
  { id: 3, nombre: 'Dominio X+1', logo: DX1_logo, abreviatura: 'DX1' },
  { id: 4, nombre: 'El Queme', logo: QUE_logo, abreviatura: 'QUE' },
  { id: 5, nombre: 'San Zócalo', logo: SZO_logo, abreviatura: 'SZO' },
  { id: 6, nombre: 'Anti Canva F. C.', logo: ANT_logo, abreviatura: 'ANT' },
  { id: 7, nombre: 'Expensive Bottles', logo: EXP_logo, abreviatura: 'EXP' },
  { id: 8, nombre: 'Tartagal F. C.', logo: TAR_logo, abreviatura: 'TAR' },
  { id: 9, nombre: 'Ghostbusters', logo: GHO_logo, abreviatura: 'GHO' },
  { id: 10, nombre: 'Bastardos de Richard', logo: BAS_logo, abreviatura: 'BAS' },
  { id: 11, nombre: 'Arquero Fantasma', logo: ARQ_logo, abreviatura: 'ARQ' },
  { id: 12, nombre: 'Herederos de Vega', logo: HDV_logo, abreviatura: 'HDV' },
  { id: 13, nombre: 'Rama y sus Ramitas', logo: RAM_logo, abreviatura: 'RAM' },
  { id: 14, nombre: 'Evolutions F. C.', logo: EVS_logo, abreviatura: 'EVS' },
  { id: 15, nombre: 'Adobe F. C.', logo: ADO_logo, abreviatura: 'ADO' },
  { id: 16, nombre: 'Poca Magia F. C.', logo: PMA_logo, abreviatura: 'PMA' },
];

function Equipos() {
  const navigate = useNavigate();

  const handleImageClick = (abreviatura) => {
    navigate(`/masculino/equipos/${abreviatura}`);
  };

  return (
    <div className="container">
      <h1 className="heading text-5xl font-bold text-white">Equipos</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {equipos.map((equipo) => (
          <SwiperSlide key={equipo.id}>
            <img
              src={equipo.logo}
              alt={equipo.nombre}
              onClick={() => handleImageClick(equipo.abreviatura)}
            />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Equipos;
