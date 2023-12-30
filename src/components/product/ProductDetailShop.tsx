import React from "react";
import { Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { Product } from "@utils/type";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}
const ProductDetailShop = ({ product }: Props) => {
  const navigate = useNavigate();

  const maxLength = 20;
  return (
    <div className="flex items-center justify-between space-x-4 px-4">
      <div className="flex items-center space-x-4 ">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={
            (product.Shop?.ShopInfo[0]?.avatar &&
              product.Shop?.ShopInfo[0].avatar) ||
            "https://media1.nguoiduatin.vn/media/dong-xuan-thuan/2023/07/20/ai.jpg"
          }
          alt="avatar"
        />
        <div>
          <Text size="large">
            {" "}
            {product.Shop?.ShopInfo?.[0]?.name &&
            product.Shop?.ShopInfo?.[0]?.name?.length > maxLength
              ? `${product.Shop.ShopInfo[0].name.substring(0, maxLength)}...`
              : product.Shop?.ShopInfo?.[0]?.name}
          </Text>
          <Text className="text-sm text-gray-500">{product.amount} sản phẩm</Text>
          <Text className="text-sm text-gray-500">
            {" "}
            {product.Shop?.ShopInfo?.[0]?.address &&
            product.Shop?.ShopInfo?.[0]?.address?.length > maxLength
              ? `${product.Shop.ShopInfo[0].address.substring(0, maxLength)}...`
              : product.Shop?.ShopInfo?.[0]?.address}
          </Text>
        </div>
      </div>
      <button
        className="bg-transparent font-semibold hover:bg-gray-200 py-2 px-4 border rounded w-fit"
        style={{ color: primaryColor, borderColor: primaryColor }}
        onClick={() => {
          navigate(`/shop-detail/${product.shop_id}`);
        }}
      >
        Xem shop
      </button>
    </div>
  );
};

export default ProductDetailShop;
