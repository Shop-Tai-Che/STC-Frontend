import { Product } from "../../../../utils/type";
import { Text, Box, useNavigate } from "zmp-ui";
import React from "react";
import { PriceDisplay } from "../../../display/DisplayPrice";
import { FinalPriceDisplay } from "../../../display/DisplayFinalPrice";
import { primaryColor } from "../../../../utils/helper/config";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-2 rounded-md"
      onClick={() => {
        navigate("/product-detail");
      }}
    >
      <Box
        className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton "
        style={{ backgroundImage: `url(${product.image[0]})` }}
      >
        {product.sale && (
          <Text
            size="xxSmall"
            className="absolute right-2 top-2 uppercase bg-green text-white h-8 px-[6px] rounded-full"
          >
            Giảm{" "}
            {product.sale.type === "percent" ? (
              `${product.sale.amount * 100}%`
            ) : (
              <PriceDisplay>{product.sale.amount}</PriceDisplay>
            )}
          </Text>
        )}
      </Box>
      <div className="p-2">
        <Text size="small" className="my-2">
          {product.name}
        </Text>
        <Text size="xxSmall" className="my-2 line-through text-gray-400">
          <PriceDisplay>{product.price}</PriceDisplay>
        </Text>
        <div className="flex items-end justify-between">
          <Text
            size="small"
            className=" mt-2 text-primary"
            style={{ color: primaryColor, fontWeight: "bolder" }}
          >
            <FinalPriceDisplay product={product} />
          </Text>
          <Text size="xxSmall" className="text-gray-400">
            23 đã bán
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
