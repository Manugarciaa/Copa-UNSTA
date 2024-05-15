import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import equipo_A1 from '../assets/images/equipo_A1.png';
import equipo_A2 from '../assets/images/equipo_A2.png';
import equipo_A3 from '../assets/images/equipo_A3.png';
import equipo_A4 from '../assets/images/equipo_A4.png';
import equipo_A5 from '../assets/images/equipo_A5.png';
import equipo_A6 from '../assets/images/equipo_A6.png';
import equipo_A7 from '../assets/images/equipo_A7.png';
import equipo_A8 from '../assets/images/equipo_A8.png';
import equipo_B1 from '../assets/images/equipo_B1.png';
import equipo_B2 from '../assets/images/equipo_B2.png';
import equipo_B3 from '../assets/images/equipo_B3.png';
import equipo_B4 from '../assets/images/equipo_B4.png';
import equipo_B5 from '../assets/images/equipo_B5.png';
import equipo_B6 from '../assets/images/equipo_B6.png';
import equipo_B7 from '../assets/images/equipo_B7.png';
import equipo_B8 from '../assets/images/equipo_B8.png';

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
        {/* Equipo A1 */}
        <SwiperSlide>
          <img src={equipo_A1} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A1')}/>
        </SwiperSlide>

        {/* Equipo A2 */}
        <SwiperSlide>
          <img src={equipo_A2} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A2')}/>
        </SwiperSlide>

        {/* Equipo A3 */}
        <SwiperSlide>
          <img src={equipo_A3} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A3')}/>
        </SwiperSlide>

        {/* Equipo A4 */}
        <SwiperSlide>
          <img src={equipo_A4} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A4')}/>
        </SwiperSlide>

        {/* Equipo A5 */}
        <SwiperSlide>
          <img src={equipo_A5} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A5')}/>
        </SwiperSlide>

        {/* Equipo A6 */}
        <SwiperSlide>
          <img src={equipo_A6} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A6')}/>
        </SwiperSlide>

        {/* Equipo A7 */}
        <SwiperSlide>
          <img src={equipo_A7} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A7')}/>
        </SwiperSlide>

        {/* Equipo A8 */}
        <SwiperSlide>
          <img src={equipo_A8} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_A8')}/>
        </SwiperSlide>

        {/* Equipo B1 */}
        <SwiperSlide>
          <img src={equipo_B1} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B1')}/>
        </SwiperSlide>

        {/* Equipo B2 */}
        <SwiperSlide>
          <img src={equipo_B2} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B2')}/>
        </SwiperSlide>

        {/* Equipo B3 */}
        <SwiperSlide>
          <img src={equipo_B3} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B3')}/>
        </SwiperSlide>

        {/* Equipo B4 */}
        <SwiperSlide>
          <img src={equipo_B4} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B4')}/>
        </SwiperSlide>

        {/* Equipo B5 */}
        <SwiperSlide>
          <img src={equipo_B5} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B5')}/>
        </SwiperSlide>

        {/* Equipo B6 */}
        <SwiperSlide>
          <img src={equipo_B6} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B6')}/>
        </SwiperSlide>

        {/* Equipo B7 */}
        <SwiperSlide>
          <img src={equipo_B7} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B7')}/>
        </SwiperSlide>

        {/* Equipo B8 */}
        <SwiperSlide>
          <img src={equipo_B8} alt="slide_image" onClick={() => handleImageClick('/masculino/equipos/equipo_B8')}/>
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