import { Page } from "zmp-ui";
import React, { Suspense } from "react";
import { DividerSpace, SectionText, ButtonOrder } from "@components/common";
import mockProduct from "../../mockProduct.json";
import {
  ProductComment,
  ProductDetailDescription,
  ProductDetailShop,
  ProductDetailHead,
} from "@components/services/tmn_product";

const ProductDetailContent: React.FC = () => {
  const product = mockProduct[0];

  return (
    <div>
      <ProductDetailHead product={product} />
      <DividerSpace />
      <ProductDetailShop product={product} />
      <DividerSpace />
      <SectionText title="Mô tả sản phẩm" padding="title-only">
        <ProductDetailDescription description={product.description} />
      </SectionText>
      <DividerSpace />
      <SectionText title="Đánh giá sản phẩm" padding="title-only">
        <ProductComment />
      </SectionText>
      <ButtonOrder />
    </div>
  );
};

const DetailProductPage: React.FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <Suspense fallback={<ProductDetailContent />}>
          <ProductDetailContent />
        </Suspense>
      </div>
    </Page>
  );
};

export default DetailProductPage;
