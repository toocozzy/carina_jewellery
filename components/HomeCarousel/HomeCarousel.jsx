import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import styles from "../../styles/HomeCarousel.module.css";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";


import dummy from "../../dummy.json"
const HomeCarousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        className={styles.slider}
      >
        {dummy.map((item, i) => <SwiperSlide key={i}><div className={styles.dupsko} style={{backgroundImage : `url(${item.path})`}}></div></SwiperSlide>)}
      </Swiper>
    </>
  );
};

export default HomeCarousel;
