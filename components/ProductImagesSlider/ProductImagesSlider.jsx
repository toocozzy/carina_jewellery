import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";

const ProductImagesSlider = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="product-slider"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i}>
            <img className="product-slider__img" src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={7}
        slidesPerView={images?.length > 4 ? 4 : images?.length}
        modules={[Navigation, Thumbs]}
        className="product-slider-thumbs"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="product-slider-thumbs__img-wrapper">
              <img className="product-slider-thumbs__img" src={item} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImagesSlider;
