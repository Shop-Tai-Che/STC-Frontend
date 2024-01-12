import React, { Suspense, useEffect } from "react";
import ProductItem from "./ProductItem";
import { ProductItemSkeleton, SectionText } from "@components/common";
import { GetProductLatest } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";
import { HOME_TITLE } from "@utils/type/Title";
import { primaryColor } from "@utils/helper/config";

const ProductListGridContent: React.FC<{ tag?: number }> = ({ tag }) => {
  const [products, fetchState, getRes] = GetProductLatest();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT) getRes();
  }, []);

  const AllProductPage = () => {
    return (
      <div className=" grid-cols-2 gap-2 px-4" style={{ display: "grid" }}>
        {products?.data.map((product: any, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    )
  }

  const ProductPageByTag = () => {
    return (
      <div className=" grid-cols-2 gap-2 px-4" style={{ display: "grid" }}>
        {products?.data.filter((prod: any) => prod.tag.id == tag).map((product: any, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    )
  }

  return (
    <SectionText title={HOME_TITLE.NEW} padding="title-only" titleStyle={{ color: `${primaryColor}` }}>
      {
        (fetchState === FetchState.ERROR ||
          fetchState === FetchState.LOADING) && <ProductListGridFallback />
      }
      {
        (fetchState === FetchState.SUCCESS
          ? tag
            ? <ProductPageByTag />
            : <AllProductPage />
          : <ProductListGridFallback />)
      }
    </SectionText>
  );
};

const ProductListGridFallback: React.FC = () => {
  const products = [...new Array(4)];
  return (
    <SectionText padding="title-only">
      <div className="grid grid-cols-2 gap-4 px-4">
        {products.map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </SectionText>
  );
};

const ProductListGrid: React.FC<{ tag?: number | undefined }> = ({ tag }) => {
  return (
    <Suspense fallback={<ProductListGridFallback />}>
      <ProductListGridContent tag={tag} />
    </Suspense>
  );
};

export default ProductListGrid;