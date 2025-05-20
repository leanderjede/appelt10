"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnerSlider = () => {
  const partners = [
    "https://i.ibb.co/5X60TXCp/s1.png",
    "https://i.ibb.co/d0BQp3rY/download.png",
    "https://i.ibb.co/QjHFRd6L/download-1.png",
    "https://i.ibb.co/HfMqKpSw/download-2.png",
    "https://i.ibb.co/D6xpKLW/download-3.png",
    "https://i.ibb.co/MkfrHG1f/download-4.png",
    "https://i.ibb.co/F2WqJqn/download-5.png",
    "https://i.ibb.co/svJ0Gqs6/download-6.png",
    "https://i.ibb.co/6cDXcq2j/download-7.png",
    "https://i.ibb.co/HTKMnf6n/download-8.png",
    "https://i.ibb.co/tpD984dD/logo-dark.png",
  ];

  return (
    <section className="bg-[#f8f5f0] py-8 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-4 ">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          Unsere Partner
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000} // Adjust speed for smooth continuous scrolling
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="bg-white rounded-lg shadow-md p-4"
        >
          {partners.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center  ">
              <img src={img} alt={`Partner ${index}`} className="h-20 w-auto mix-blend-multiply" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSlider;
