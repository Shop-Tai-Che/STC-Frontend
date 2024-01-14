import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Product } from "@utils/type";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@assets/css/OverrideSwipe.css";
import { Box } from "zmp-ui";

const ProductDetailImageSwipe = ({ product }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {product.ProductMedia?.map((MediaItem, ChildIndex) => {
        return (
          <SwiperSlide key={ChildIndex}>
            <Box
              style={{
                height: "100%",
                width: "100%",
                display: "block", // Or 'flex' if that suits your layout better
                // position: 'relative',
                overflow: "hidden",
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                justifyItems: "center",
              }}
            >
              <img
                src={MediaItem.url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductDetailImageSwipe;
