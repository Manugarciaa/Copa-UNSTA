import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import DX1_logo from '../../assets/images/DX1_logo.png';
import EXP_logo from '../../assets/images/EXP_logo.png';
import HDV_logo from '../../assets/images/HDV_logo.png';
import SZO_logo from '../../assets/images/SZO_logo.png';
import QUE_logo from '../../assets/images/QUE_logo.png';
import PER_logo from '../../assets/images/PER_logo.png';
import BAS_logo from '../../assets/images/BAS_logo.png';
import SCH_logo from '../../assets/images/SCH_logo.png';
import ARQ_logo from '../../assets/images/ARQ_logo.png';
import RAM_logo from '../../assets/images/RAM_logo.png';
import PAB_logo from '../../assets/images/PAB_logo.png';
import TAR_logo from '../../assets/images/TAR_logo.png';
import ANT_logo from '../../assets/images/ANT_logo.png';
import EVS_logo from '../../assets/images/EVS_logo.png';
import ADO_logo from '../../assets/images/ADO_logo.png';
import PMA_logo from '../../assets/images/PMA_logo.png';

import { useNavigate } from 'react-router-dom';

function Equipos() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
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
        {/* Dominio X+1 */}
        <SwiperSlide>
          <img src={DX1_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/DX1')}/>
        </SwiperSlide>

        {/* Expensive Bottles */}
        <SwiperSlide>
          <img src={EXP_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/EXP')}/>
        </SwiperSlide>

        {/* Herederos de Vega */}
        <SwiperSlide>
          <img src={HDV_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/HDV')}/>
        </SwiperSlide>

        {/* San Zócalo */}
        <SwiperSlide>
          <img src={SZO_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/SZO')}/>
        </SwiperSlide>

        {/* El Queme */}
        <SwiperSlide>
          <img src={QUE_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/QUE')}/>
        </SwiperSlide>

        {/* Perritos UNSTA F. C. */}
        <SwiperSlide>
          <img src={PER_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/PER')}/>
        </SwiperSlide>

        {/* Bastardos de Richard */}
        <SwiperSlide>
          <img src={BAS_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/BAS')}/>
        </SwiperSlide>

        {/* Schalke 23 */}
        <SwiperSlide>
          <img src={SCH_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/SCH')}/>
        </SwiperSlide>

        {/* Arquero Fantasma */}
        <SwiperSlide>
          <img src={ARQ_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/ARQ')}/>
        </SwiperSlide>

        {/* Rama y sus Ramitas */}
        <SwiperSlide>
          <img src={RAM_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/RAM')}/>
        </SwiperSlide>

        {/* Pabellón A */}
        <SwiperSlide>
          <img src={PAB_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/PAB')}/>
        </SwiperSlide>

        {/* Tartagal F. C. */}
        <SwiperSlide>
          <img src={TAR_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/TAR')}/>
        </SwiperSlide>

        {/* Anti Canva F. C. */}
        <SwiperSlide>
          <img src={ANT_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/ANT')}/>
        </SwiperSlide>

        {/* Evolutions F. C. */}
        <SwiperSlide>
          <img src={EVS_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/EVS')}/>
        </SwiperSlide>

        {/* Adobe F. C. */}
        <SwiperSlide>
          <img src={ADO_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/ADO')}/>
        </SwiperSlide>

        {/* Poca Magia F. C. */}
        <SwiperSlide>
          <img src={PMA_logo} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/PMA')}/>
        </SwiperSlide>

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