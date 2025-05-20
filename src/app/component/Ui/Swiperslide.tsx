'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ServiceSlide = () => {
  return (
    <div className="w-full h-auto lg:h-screen   ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg overflow-hidden lg:h-screen"
      >
        <SwiperSlide>
          <img src="/bg-ap-3.jpeg" alt="Slide 1" className="w-full max-sm:h-[500px] max-h-screen  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bg-ap-2.jpeg" alt="Slide 2" className="w-full max-sm:h-[500px] h-screen  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/3.png" alt="Slide 3" className="w-full  max-sm:h-[500px] h-screen  object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSlide;
