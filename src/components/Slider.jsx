// Import Swiper React components
// import Swiper core and required modules
import styles from "./Slider.module.css";

import jer from "../assets/jer.jpg";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import elec from "../assets/elec.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

function Slider() {
  return (
    <>
      <h1 className={styles.title}>✨Trending products✨</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={styles.swiperr}>
          <img src={elec} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperr}>
          <img src={jer} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperr}>
          <img src={men} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperr}>
          <img src={women} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperr}>
          <img src={jer} alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperr}>
          <img src={jer} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
}

export default Slider;
