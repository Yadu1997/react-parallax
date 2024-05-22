import React from 'react'
import "./style.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { SwiperSlide,Swiper } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import swiperImg1 from "../assets/sp1.jpg"
import swiperImg2 from "../assets/sp2.jpg"
import swiperImg3 from "../assets/sp3.jpg"
import swiperImg4 from "../assets/sp4.jpg"
import swiperImg5 from "../assets/sp5.jpg"
import swiperImg6 from "../assets/sp6.jpg"
import swiperImg7 from "../assets/sp7.jpg"
import swiperImg8 from "../assets/sp8.jpg"
import swiperImg9 from "../assets/sp9.jpg"



function ImageSlider() {
  return (
    <>
      <div>
        <h2 className='text-center mt-5'>Slider Gallery</h2>
      </div>
        <div className="container my-5">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiperImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg9} />
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}

export default ImageSlider
