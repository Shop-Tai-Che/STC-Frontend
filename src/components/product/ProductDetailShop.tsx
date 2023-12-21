import React from "react";
import { Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { Product } from "@utils/type";

interface Props {
  product: Product;
}
const ProductDetailShop = ({ product }: Props) => {
  return (
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
  );
};

export default ProductDetailShop;
