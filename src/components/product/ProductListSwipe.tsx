import React, { useEffect } from "react";
import SectionText from "../common/SectionText";
import ProductItem from "./ProductItem"; 
import { FC, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideSkeleton } from "../common/SkeletonsList";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GetAllLatestProduct } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";

const ProductListSwipeContent: FC = () => {
  const [products, fetchState, getRes] = GetAllLatestProduct();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT) getRes();
  }, []);

  return (
    <SectionText title="Gợi ý cho bạn" padding="title-only">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-4"
      >
        {(fetchState === FetchState.ERROR ||
          fetchState === FetchState.LOADING) && <ProductListSwipeFallBack />}

        {fetchState === FetchState.SUCCESS && (
          <div className="grid grid-cols-2 gap-2 px-4">
            {products?.data.map((product: any, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        )}
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
