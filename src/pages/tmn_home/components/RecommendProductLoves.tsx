import { FC, Suspense } from "react";
import SectionTexts from "../../../components/common/SectionTexts";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideSkeleton } from "../../../components/common/SkeletonsList";
import React from "react";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import {Box, Text} from "zmp-ui"

const RecommendProductContent: FC = () => {
  const recommendProducts = useAppSelector((state: RootState) => state.filters);

  return (
    <SectionTexts title="Gợi ý cho bạn" padding="title-only">
      <Swiper slidesPerView={2.5} spaceBetween={16} className="px-4">
        {recommendProducts.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductPicker product={product}>
              {({ open }) => (
                <div onClick={open} className="space-y-3">
                  <Box
                    className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {product.sale && (
                      <Text
                        size="xxxxSmall"
                        className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
                      >
                        Giảm{" "}
                        {/* {product.sale.type === "percent" ? (
                          `${product.sale.percent * 100}%`
                        ) : (
                          
                           <DisplayPrice>{product.sale.amount}</DisplayPrice>
                        )} */}
                      </Text>
                    )}
                  </Box>
                  <Box className="space-y-1">
                    <Text size="small">{product.name}</Text>
                    <Text size="xxSmall" className="line-through text-gray">
                      {/* <DisplayPrice>{product.price}</DisplayPrice> */}
                      
                    </Text>
                    <Text size="large" className="font-medium text-primary">
                      {/* <FinalPrice>{product}</FinalPrice> */}
                      Final Price
                    </Text>
                  </Box>
                </div>
              )}
            </ProductPicker>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionTexts>
  );
};
const RecommendProductLovesFallBack: FC = () => {
  const recommendProducts = [...new Array(3)];
  return (
    <SectionTexts title="Gợi ý cho bạn" padding="title-only">
      <Swiper slidesPerView={2.5} spaceBetween={16} className="px-4">
        {recommendProducts.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductSlideSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionTexts>
  );
};
const RecommendProductLoves: FC = () => {
  return (
    <Suspense fallback={<RecommendProductLovesFallBack />}>
      <RecommendProductContent />
    </Suspense>
  );
};

export default RecommendProductLoves;
