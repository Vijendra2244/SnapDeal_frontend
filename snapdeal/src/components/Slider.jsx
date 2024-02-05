import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderOne from "../images/SliderOne.png";
import SliderTwo from "../images/SliderTwo.png";
import SliderThree from "../images/SliderThree.png";
import SliderFour from "../images/SliderFour.png";
import SliderFive from "../images/SliderFive.png";
import styles from "../styles/Slider.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Carousel from "./Carousel";

function Slider() {
  return (
    <div className={styles.main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className={styles.img} src={SliderOne} alt="one" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className={styles.img}  src={SliderTwo} alt="two" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className={styles.img} src={SliderThree} alt="three" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className={styles.img} src={SliderFour} alt="four" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className={styles.img} src={SliderFive} alt="five" />
        </SwiperSlide>
      </Swiper>
      <Carousel/>
    </div>
  );
}

export default Slider;
