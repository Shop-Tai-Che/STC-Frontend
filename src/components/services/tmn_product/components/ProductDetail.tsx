import React, { useState } from "react";
import { Suspense } from "react";
import { Box, Text, Button, Icon } from "zmp-ui";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mockProduct from "../../../../../mockProduct.json";
import { FinalPriceDisplay } from "../../../display/DisplayFinalPrice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { primaryColor } from "../../../../utils/helper/config";
import Divider from "../../../common/DividerSpace";
import SectionText from "../../../common/SectionText";
import { Product } from "../../../../utils/type";
import { openChat } from "zmp-sdk/apis";
import ProductComment from "./ProductComment";

interface Props {
  product: Product;
}
const ProductDetailImageSwipe = ({ product }: Props) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Navigation]}
      navigation={true}
      className="mySwiper"
    >
      {product?.image?.map((ProductImage, ChildIndex) => {
        return (
          <SwiperSlide key={ChildIndex}>
            <Box
              className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton "
              style={{ backgroundImage: `url(${ProductImage})` }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const ProductDetailContent: React.FC = () => {
  const [hasLoveProduct, setHasLoveProduct] = useState(false);
  const [readMoreDescription, setReadMoreDescription] = useState(false);
  const description: string = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry s standard dummy text
  ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not
  only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`;

  const openChatScreen = async () => {
    try {
      await openChat({
        type: "user",
        id: "7700700658333329661",
        message: "Xin Chào",
      });
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };
  const product = mockProduct[0];
  return (
    <div>
      <div className="p-2">
        <ProductDetailImageSwipe product={mockProduct[0]} />
        <Text size="large" className="my-2">
          {mockProduct[0].name}
        </Text>

        <div className="grid grid-cols-4 gap-8 items-end">
          <div className="col-span-3 flex items-end justify-start gap-6">
            <Text
              size="large"
              className=" mt-2 text-primary"
              style={{ color: primaryColor, fontWeight: "bolder" }}
            >
              <FinalPriceDisplay product={product} />
            </Text>
            <Text size="small">2 đánh giá </Text>
            <Text size="small">23 đã bán</Text>
          </div>
          <button
            className="bg-transparent flex justify-end"
            onClick={() => setHasLoveProduct(!hasLoveProduct)}
          >
            {hasLoveProduct ? (
              <Icon icon="zi-heart" className="text-rose-600" />
            ) : (
              <Icon icon="zi-heart-solid" className="text-rose-600" />
            )}
          </button>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between space-x-4 px-4">
        <div className="flex items-center space-x-4 ">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="https://media1.nguoiduatin.vn/media/dong-xuan-thuan/2023/07/20/ai.jpg"
            alt="avatar"
          />
          <div>
            <Text size="large">Jese Leos</Text>
            <Text className="text-sm text-gray-500">12 sản phẩm</Text>
            <Text className="text-sm text-gray-500">Hà Nội</Text>
          </div>
        </div>
        <button
          className="bg-transparent font-semibold hover:bg-gray-200 py-2 px-4 border rounded"
          style={{ color: primaryColor, borderColor: primaryColor }}
        >
          Xem shop
        </button>
      </div>
      <Divider />
      <SectionText title="Mô tả sản phẩm" padding="title-only">
        <div className="px-4">
          <Text className="text-sm text-gray-500 " size="small">
            {readMoreDescription
              ? description
              : `${description.substring(0, 100)} ...`}
          </Text>
        </div>
        <div
          style={{ color: primaryColor }}
          className="text-center border-t pt-4 cursor-pointer font-medium"
          onClick={() => setReadMoreDescription(!readMoreDescription)}
        >
          {readMoreDescription ? (
            <>
              Thu gọn <Icon icon="zi-chevron-up" />
            </>
          ) : (
            <>
              Xem thêm
              <Icon icon="zi-chevron-down" />
            </>
          )}
        </div>
      </SectionText>
      <Divider />
      <div className="fixed bottom-0 left-0 z-50 w-full h-16  bg-white flex justify-center items-center">
        <Button
          className="w-9/12"
          style={{ backgroundColor: primaryColor }}
          onClick={() => openChatScreen()}
        >
          <a
            href="https://zaloapp.com/qr/p/1pwdaagbu56uq?src=qr/"
            target="_blank"
          >
            Đặt hàng ngay
          </a>
        </Button>
      </div>
      <SectionText title="Đánh giá sản phẩm" padding="title-only">
        <ProductComment />
      </SectionText>
    </div>
  );
};
const ProdcutDetail: React.FC = () => {
  return (
    <Suspense fallback={<ProductDetailContent />}>
      <ProductDetailContent />
    </Suspense>
  );
};

export default ProdcutDetail;
