import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductItem from "../ProductItem/ProductItem";

const RelatedProductsSlider = ({ relatedProducts }) => {
  return (
    <Swiper
      loop={true}
      navigation={true}
      breakpoints={{
        640: { slidesPerView: 3 },
      }}
      spaceBetween={2}
      modules={[Navigation]}
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "25px",
      }}
    >
      {relatedProducts.map((product, i) => (
        <SwiperSlide key={i}>
          <ProductItem item={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RelatedProductsSlider;
