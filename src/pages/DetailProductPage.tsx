import { Box, Button, Page, useSnackbar } from "zmp-ui";
import React, { Suspense, useEffect } from "react";
import { DividerSpace, SectionText, ButtonOrder } from "@components/common";
import {
  ProductComment,
  ProductDetailDescription,
  ProductDetailShop,
  ProductDetailHead,
} from "@components/product";
import { useParams } from "react-router-dom";
import { GetDetailProduct } from "@services/ProductServices/GetDetailProducts";
import { FetchState } from "@utils/type/FetchState";
import { Product } from "@utils/type";

const ProductDetailContent: React.FC = () => {
  const { idProduct } = useParams();
  const { openSnackbar } = useSnackbar();
  const [productItem, fetchStateDetailProduct, getResDetailProduct] =
    GetDetailProduct(idProduct as string);

  useEffect(() => {
    if (fetchStateDetailProduct === FetchState.DEFAULT)
      try {
        getResDetailProduct();
      } catch (error) {
        console.log(error);
      }
  }, []);

  return (
    <div>
      {fetchStateDetailProduct === FetchState.LOADING && (
        <Page className="flex justify-center items-center">
          <Button
            variant="secondary"
            type="highlight"
            onClick={() => {
              openSnackbar({
                text: "Loading...",
                type: "loading",
              });
            }}
          >
            Loading
          </Button>
        </Page>
      )}
      {fetchStateDetailProduct === FetchState.SUCCESS && (
        <>
          <ProductDetailHead product={productItem as Product} />
          <DividerSpace />
          <ProductDetailShop product={productItem as Product} />
          <DividerSpace />
          <SectionText title="Mô tả sản phẩm" padding="title-only">
            <ProductDetailDescription description={productItem?.description} />
          </SectionText>
          <DividerSpace />
          <SectionText title="Đánh giá sản phẩm" padding="title-only">
            <ProductComment />
          </SectionText>
          <ButtonOrder />
        </>
      )}
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
