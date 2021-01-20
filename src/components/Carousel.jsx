import React from "react";
// import Swiper core and required components
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

const data = [{src: '/images/banner01.png', alt: 'banner01'}, {
  src: '/images/banner02.jpg',
  alt: 'banner02'
}, {src: '/images/banner03.jpg', alt: 'banner03'}, {
  src: './images/banner04.jpg',
  alt: 'banner04'
}, {src: '/images/banner05.jpg', alt: 'banner05'}, {
  src: '/images/banner06.jpg',
  alt: 'banner06'
}, {src: '/images/banner07.jpg', alt: 'banner07'},]
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const Carousel = () => {
  const styles ={'width': '1920px', 'height': '860px'}
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {/*{data && data.map((x, index) => {*/}
      {/*  return (*/}
      {/*    <SwiperSlide key={index}>*/}
      {/*      <img src={x.src} style={{'width': '1920px', 'height': '860px'}} alt={x.alt}/>*/}
      {/*    </SwiperSlide>*/}
      {/*  )*/}
      {/*})}*/}

      <SwiperSlide><img src='/images/banner01.png' style={styles} alt={data[0].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner02.jpg' style={styles} alt={data[1].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner03.jpg' style={styles} alt={data[2].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner04.jpg' style={styles} alt={data[3].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner05.jpg' style={styles} alt={data[4].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner06.jpg' style={styles} alt={data[5].alt}/></SwiperSlide>
      <SwiperSlide><img src='/images/banner07.jpg' style={styles} alt={data[6].alt}/></SwiperSlide>
    </Swiper>
  );
};

export default Carousel