import { Product } from "@utils/type";
import React from "react";
import { Text } from "zmp-ui";
import { PriceDisplay } from "@components/display";

const ProductShortageItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex items-center p-2 gap-5 ">
      <img
        src={product.ProductMedia[0].url}
        alt="Product Image"
        className="w-28 object-contain rounded-lg"
      />
      <div className="flex flex-col w-full pr-6">
        <Text
          size="large"
          className="m-0 p-0"
          bold
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </Text>
        <div className="flex justify-between w-full mt-2">
          <Text size="normal">
            <PriceDisplay children={product.price} />{" "}
          </Text>
          <Text size="normal">Số lượng: 1</Text>
        </div>
      </div>
    </div>
  );
};

export default ProductShortageItem;
