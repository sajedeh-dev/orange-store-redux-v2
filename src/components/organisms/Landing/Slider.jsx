import jer from "../../../assets/jer.jpg";
import men from "../../../assets/men.jpg";
import women from "../../../assets/women.jpg";
import elec from "../../../assets/elec.jpg";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <section className="mt-20 px-4 md:px-8">
      <h1 className="text-xl md:text-4xl text-orange-500 font-bold text-center mb-12">
        ✨ Trending products ✨
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 }, // sm
          1024: { slidesPerView: 3, spaceBetween: 30 }, // lg
          1280: { slidesPerView: 4, spaceBetween: 40 }, // xl
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {[elec, jer, men, women, jer, jer].map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
