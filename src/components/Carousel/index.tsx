import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { Card } from '../Card';
import { MovieDetails } from '../../models/movies';

import './carousel.css';

interface CarouselProps {
  movies: MovieDetails[];
}

export function Carousel({ movies }: CarouselProps) {
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
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      }}
      navigation={{
        enabled: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {movies.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            id={item.id}
            title={item.title}
            year={item.release_date}
            image={item.poster_path}
            rating={item.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}