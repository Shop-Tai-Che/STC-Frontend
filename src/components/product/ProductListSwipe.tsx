import React, { useEffect } from "react";
import SectionText from "../section/SectionText";
import ProductItem from "./ProductItem";
import { FC, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSlideSkeleton } from "../skeleton/SkeletonsList";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GetProductsPopular } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";
import { HOME_TITLE } from "@utils/type/Title";
import { primaryColor } from "@utils/helper/config";
import { ProductCategory } from "@utils/type/Category";

const ProductListSwipeContent: React.FC<{
  idTag?: number;
  productPageTitle?: string;
}> = ({ idTag, productPageTitle }) => {
  const [products, fetchState, getRes] = GetProductsPopular();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT) getRes();
  }, []);

  const AllProductSwiper = () => {
    return (
      <Swiper spaceBetween={10} slidesPerView={2.2} className="px-4 ">
        <div className="table h-full">
          {products?.data.map((product: any, index) => (
            <SwiperSlide className="table-column h-full" key={index}>
              {" "}
              <ProductItem key={index} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    );
  };

  const ProductSwiperByTag = () => {
    return (
      <Swiper spaceBetween={10} slidesPerView={2.2} className="px-4 ">
        <div className="table h-full">
          {products?.data
            .filter((prod: any) => prod.tag.id == idTag)
            .map((product: any, index) => (
              <SwiperSlide className="table-column h-full" key={index}>
                {" "}
                <ProductItem key={index} product={product} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    );
  };

  return (
    <SectionText
      title={
        idTag
          ? `Được yêu thích nhất ở ${
              ProductCategory.filter((cate) => cate.id == idTag)[0]["name"]
            }`
          : HOME_TITLE.LOVE
      }
      padding="title-only"
      titleStyle={{ color: `${primaryColor}` }}
    >
      {/* <Swiper spaceBetween={10} slidesPerView={2.2} className="px-4 "> */}
      {(fetchState === FetchState.ERROR ||
        fetchState === FetchState.LOADING) && <ProductListSwipeFallBack />}

      {
        fetchState === FetchState.SUCCESS ? (
          idTag ? (
            <ProductSwiperByTag />
          ) : (
            <AllProductSwiper />
          )
        ) : (
          <ProductListSwipeFallBack />
        )
        // <div className="table h-full">
        //   {products?.data.map((product: any, index) => (
        //     <SwiperSlide className="table-column h-full" key={index}>
        //       {" "}
        //       <ProductItem key={index} product={product} />
        //     </SwiperSlide>
        //   ))}
        // </div>
      }
    </SectionText>
  );
};

const ProductListSwipeFallBack: FC = () => {
  const recommendProducts = [...new Array(3)];
  return (
    <SectionText padding="title-only">
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

const ProductListSwipe: React.FC<{ idTag?: number | undefined }> = ({
  idTag,
}) => {
  return (
    <Suspense fallback={<ProductListSwipeFallBack />}>
      <ProductListSwipeContent
        idTag={idTag}
        productPageTitle={`Được yêu thích nhất ở ...`}
      />
    </Suspense>
  );
};

export default ProductListSwipe;
