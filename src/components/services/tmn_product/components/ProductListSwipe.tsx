import { FC, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideSkeleton } from "../../../../components/common/SkeletonsList";
import React from "react";
import SectionText from "../../../common/SectionText";
import "swiper/swiper.min.css";
import ProductItem from "./../components/ProductItem";
import mockProduct from "../../../../../mockProduct.json";

const ProductListSwipeContent: FC = () => {
  const recommendProducts = mockProduct;
  return (
    <SectionText title="Gợi ý cho bạn" padding="title-only">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-4"
      >
        {recommendProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionText>
  );
};
const ProductListSwipeFallBack: FC = () => {
  const recommendProducts = [...new Array(3)];
  return (
    <SectionText title="Gợi ý cho bạn" padding="title-only">
      <Swiper slidesPerView={2.5} spaceBetween={16} className="px-4">
        {recommendProducts.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductSlideSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionText>
  );
};
const ProductListSwipe: FC = () => {
  return (
    <Suspense fallback={<ProductListSwipeFallBack />}>
      <ProductListSwipeContent />
    </Suspense>
  );
};

export default ProductListSwipe;
