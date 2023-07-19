import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import './carousel.css';

export function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={8}
      pagination={{
        clickable: true,
        enabled: false,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      }}
      navigation={{
        enabled: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <SwiperSlide key={item}>
          <img
            src="https://st4.depositphotos.com/36834736/38806/i/600/depositphotos_388062338-stock-photo-dramatic-stormy-dark-cloudy-sky.jpg" alt=""
            className='rounded-xl'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}