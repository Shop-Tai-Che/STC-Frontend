import React, { Suspense } from "react"; 
import mockProduct from "../../../../../mockProduct.json";
import ProductItem from "./ProductItem";
import { ProductItemSkeleton, SectionText } from "@components/common";

const ProductListGridContent: React.FC = () => {
  const recommendProducts = mockProduct;
  return (
    <SectionText title="Mới ra mắt" padding="title-only">
      <div className="grid grid-cols-2 gap-2 px-4">
        {recommendProducts.map((product: any, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </SectionText>
  );
};

const ProductListGridFallback: React.FC = () => {
  const products = [...new Array(4)];
  return (
    <SectionText title="Mới ra mắt" padding="title-only">
      <div className="grid grid-cols-2 gap-4 px-4">
        {products.map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </SectionText>
  );
};

const ProductListGrid: React.FC = () => {
  return (
    <Suspense fallback={<ProductListGridFallback />}>
      <ProductListGridContent />
    </Suspense>
  );
};

export default ProductListGrid;
