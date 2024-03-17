import React, { useEffect, useState } from "react";
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
import SellerOrderEntry from "@components/seller/SellerOrderEntry";
import UserInfo from "@components/common/UserInfo";
import { STC_LOGO } from "@utils/type/Avatar";
import { openChatScreen, CHAT_TYPE, primaryColor } from "@utils/helper";
import { openShareScreen } from "@utils/helper/openShareSheet";

const FORM_UP_PRODUCT =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbZOmiULkqBA77rvzsXlRUxs3yiP3M4iVDYjBs-eC3D2fkSQ/viewform";

const ShopDetail: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const [products, fetchState, getRes] = GetProductByShopId();
  const { idShop } = useParams();
  const [isValidSellerState, setIsValidSellerState] = useState(false);
  const [shopInfo, setShopInfo] = useState({
    shopName: "",
    shopAvatar: "",
  });
  let tempShopInfo = [{ name: "", avatar: "" }];
  const [sellerProduct, setSellerProduct] = useState([{ Shop: tempShopInfo }]);

  useEffect(() => {
    if (fetchState === FetchState.DEFAULT && idShop) {
      getRes(idShop);
    }
  }, []);

  useEffect(() => {
    if (isValidSeller()) setIsValidSellerState(true);
  }, []);

  useEffect(() => {
    if (isValidSellerState) {
      setShopInfo({
        shopName: currentUser.ShopInfo[0]?.name,
        shopAvatar: currentUser.ShopInfo[0]?.avatar,
      });
    } else {
      setShopInfo({
        shopName: products
          ? products[0].Shop?.ShopInfo[0].name
          : "Shop Tái Chế",
        shopAvatar: products ? products[0].Shop?.ShopInfo[0].avatar : STC_LOGO,
      });
    }
  }, [products]);

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

  const countProcessingOrders = (products: any[]): number => {
    let sumOfOrder = products.reduce((accumulator, item) => {
      // Filter the order array for items with status "process" and count them
      const processOrders = item.Order.filter(
        (order) => order.status === "PROCESSING"
      ).length;
      // Add the count to the accumulator
      return accumulator + processOrders;
    }, 0);
    return sumOfOrder;
  };

  const countAllOrder = (products: any[]): number => {
    let sumOfAllOrder = products.reduce((accumulator, item) => {
      // Filter the order array for items with status "process" and count them
      const order = item.Order.length;
      // Add the count to the accumulator
      return accumulator + order;
    }, 0);
    return sumOfAllOrder;
  };

  // const getShopInfo = () => {
  //   if (isValidSellerState) {
  //     setShopInfo({
  //       shopName: currentUser.ShopInfo[0]?.name,
  //       shopAvatar: currentUser.ShopInfo[0]?.avatar,
  //     });
  //   } else {
  //     setShopInfo({
  //       shopName: shopInfo.shopName,
  //       shopAvatar: shopInfo.shopAvatar,
  //     });
  //   }
  // };

  const handleShareShop = () => {
    const shareShopInfo = {
      name: shopInfo.shopName,
      avatar: shopInfo.shopAvatar,
      shopUrl: `https://zalo.me/s/4341737245452906396/shop-detail/${idShop}`,
      // shopUrl: `https://zalo.me/app/link/zapps/4341737245452906396/shop-detail/${currentUser.id}?env=TESTING_LOCAL&clientIp=https://fuzzy-cat-58.mini.123c.vn`,
    };
    openShareScreen(shareShopInfo);
  };

  const onSellerAddProduct = () => openChatScreen(CHAT_TYPE.POST_PRODUCT);
  const isValidSeller = () => {
    // Check if is Seller
    if (currentUser.is_seller) {
      // Check if User is actually the Seller of the Shop Detail page
      let userIdFromShopInfo = parseInt(idShop);
      if (currentUser.id == userIdFromShopInfo) {
        return true;
      } else return false;
    } else return false;
  };

  const doesSellerHaveAnyProduct = () => products && products.length > 0;

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      {fetchState == FetchState.SUCCESS && (
        <div className="flex-1 overflow-auto pb-20">
          <div
            style={{
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <UserInfo
              flexDirectionProp="row"
              alignItemsProp="center"
              userInfoStyle={{
                backgroundColor: "white",
                padding: "0px 12px 0px 12px", // Top & Bottom: 16px, Left & Right: 12px
              }}
              avatarSource={
                // (products &&
                //   products[0].Shop?.ShopInfo[0]?.avatar &&
                //   products[0].Shop?.ShopInfo[0].avatar) ||
                // AppLogo
                shopInfo.shopAvatar
              }
              avatarSize={48}
              userInfoContentStyle={{
                marginLeft: 8,
              }}
              userName={
                // products &&
                // products[0].Shop?.ShopInfo?.[0]?.name &&
                // products[0].Shop?.ShopInfo?.[0]?.name
                shopInfo.shopName
              }
              userNameSize="large"
              userInfoType="seller-profile"
              subTitle={
                <Text>
                  {!products || products.length == 0 ? 0 : products.length} sản
                  phẩm, {products ? calculateSumReview(products) : 0} đánh giá
                </Text>
              }
              subTitleStyle={{
                color: "#767A7F",
              }}
            />
          </div>

          <DividerSpace />
          {isValidSellerState ? (
            doesSellerHaveAnyProduct() ? (
              <>
                <Box
                  flex
                  flexDirection="column"
                  style={{
                    backgroundColor: "white",
                    marginTop: 12,
                    marginBottom: 12,
                    padding: "0px 12px 0px 12px", // Top & Bottom: 16px, Left & Right: 12px
                  }}
                >
                  <Text size="xLarge" bold>
                    Đơn hàng của shop
                  </Text>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    style={{ width: "100%", marginTop: 12 }} // Make the parent Box take full width of the screen
                  >
                    <SellerOrderEntry
                      statusContent="Chờ xác nhận"
                      statusCount={
                        products ? countProcessingOrders(products) : 0
                      }
                      routePath="validity-order"
                      routeParam="seller"
                      shopName={shopInfo.shopName}
                      shopOrderOverallStatus={
                        countAllOrder(products) > 0
                          ? "has_order"
                          : "empty_order"
                      }
                      handleShareShop={handleShareShop}
                    />
                    {/* <SellerOrderEntry
                statusContent="Đánh giá"
                statusCount={products ? calculateSumReview(products) : 0}
              /> */}
                  </Box>
                </Box>
                <DividerSpace />
              </>
            ) : null
          ) : null}

          <SectionText
            title="Danh sách sản phẩm"
            padding="title-only"
            icon={
              isValidSellerState ? (
                <a
                  onClick={onSellerAddProduct}
                  // target="_blank"
                  // href={FORM_UP_PRODUCT}
                >
                  <Icon icon="zi-add-story" style={{ color: primaryColor }} />
                </a>
              ) : (
                <></>
              )
            }
          >
            {!doesSellerHaveAnyProduct() ? (
              <EmptyProduct
                currentUser={currentUser}
                idShop={idShop as string}
                onSellerAddProduct={onSellerAddProduct}
              />
            ) : (
              <>
                {products.map((productItem, index) => {
                  return (
                    <ProductShopItem
                      product={productItem as Product}
                      key={index}
                      viewType={isValidSellerState ? "seller" : "buyer"}
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
