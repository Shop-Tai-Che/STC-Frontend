import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Product } from "@utils/type";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@assets/css/OverrideSwipe.css";
import { Box } from "zmp-ui";

interface Props {
  product: Product;
}
const ProductDetailImageSwipe = ({ product }: Props) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Navigation]}
      navigation={true}
      className="mySwiper"
    >
      {product?.image?.map((ProductImage, ChildIndex) => {
        return (
          <SwiperSlide key={ChildIndex}>
            <Box
              className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton"
              style={{
                backgroundImage: `url(${ProductImage})`,
                minHeight: "60vh",
                width: "100%",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductDetailImageSwipe;
