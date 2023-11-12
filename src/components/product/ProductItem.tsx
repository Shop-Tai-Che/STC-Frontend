import React from "react";
import { Text, Box } from "zmp-ui";
import { PriceDisplay, FinalPriceDisplay } from "@components/display";
import { primaryColor } from "@utils/helper/config";
import { Product } from "@utils/type";
import { useNavigate } from "react-router-dom";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border-2 rounded-md"
      onClick={() => {
        const pageRedirect = `/product-detail/${product.id}`;
        navigate(pageRedirect);
      }}
    >
      <Box
        className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton"
        style={{ backgroundImage: `url(${product.ProductMedia[0].url})` }}
      >
        {/* {product.sale && (
          <Text
            size="xxSmall"
            className="absolute right-2 top-2 uppercase bg-green text-white h-8 px-[6px] rounded-full"
          >
            Giảm
            {product.sale.type === "percent" ? (
              `${product.sale.amount * 100}%`
            ) : (
              <PriceDisplay>{product.sale.amount}</PriceDisplay>
            )}
          </Text>
        )} */}
      </Box>
      <div className="p-2">
        <p className="my-2 two-line-display max-line-2">{product.title}</p>
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
