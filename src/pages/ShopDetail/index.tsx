import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Text, Page, Box, Icon } from "zmp-ui";
import { DividerSpace } from "@components/common";
import { SectionText } from "@components/section";
import { GetProductByShopId } from "@services/ProductServices";
import { FetchState } from "@utils/type/FetchState";
import { UserFetch } from "@utils/type/User";
import EmptyProduct from "./emptyProduct";
import ProductShopItem from "./productShopItem";
import { Product } from "@utils/type";

const FORM_UP_PRODUCT =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbZOmiULkqBA77rvzsXlRUxs3yiP3M4iVDYjBs-eC3D2fkSQ/viewform";

const ShopDetail: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const [products, fetchState, getRes] = GetProductByShopId();
  const { idShop } = useParams();

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT && idShop) {
      getRes(idShop);
    }
  }, []);

  const calculateSumReview = (products: any[]): number => {
    if (!products || !Array.isArray(products)) {
      return 0;
    }

    const sumOfReviews = products.reduce((total, product) => {
      if (product._count && typeof product._count.Review === "number") {
        total += product._count.Review;
      }

      return total;
    }, 0);

    return sumOfReviews;
  };

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      {fetchState == FetchState.SUCCESS && (
        <div className="flex-1 overflow-auto pb-20">
          <Box p={4} className="bg-white">
            <div className="flex gap-5">
              <Avatar
                size={60}
                src={
                  (products &&
                    products[0].Shop?.ShopInfo[0]?.avatar &&
                    products[0].Shop?.ShopInfo[0].avatar) ||
                  "https://media1.nguoiduatin.vn/media/dong-xuan-thuan/2023/07/20/ai.jpg"
                }
              />
              <div>
                <Text className="text-sm" size="large" bold>
                  {products &&
                    products[0].Shop?.ShopInfo?.[0]?.name &&
                    products[0].Shop?.ShopInfo?.[0]?.name}
                </Text>
                <Text className="text-sm text-gray-500" size="small">
                  {!products || products.length == 0 ? 0 : products.length} sản
                  phẩm, {products ? calculateSumReview(products) : 0} đánh giá
                </Text>
              </div>
            </div>
          </Box>

          <DividerSpace />

          <SectionText
            title="Đơn hàng của shop "
            padding="title-only"
            icon={
              currentUser.is_seller &&
              currentUser.id == (idShop ? parseInt(idShop) : undefined) ? (
                <a href={FORM_UP_PRODUCT} target="_blank">
                  <Icon icon="zi-add-story" />
                </a>
              ) : (
                <></>
              )
            }
          >
            {!products || products.length == 0 ? (
              <EmptyProduct
                currentUser={currentUser}
                idShop={idShop as string}
              />
            ) : (
              <>
                {products.map((productItem, index) => {
                  return (
                    <ProductShopItem
                      product={productItem as Product}
                      key={index}
                    />
                  );
                })}
              </>
            )}
          </SectionText>
        </div>
      )}
    </Page>
  );
};

export default ShopDetail;
