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
      className="border-2 rounded-md h-52"
      onClick={() => {
        const pageRedirect = `/product-detail/${product.id}`;
        navigate(pageRedirect);
      }}
    >
      <Box
        className="relative aspect-video rounded-t-md bg-cover bg-center bg-skeleton"
        style={{ backgroundImage: `url(${product &&  product.ProductMedia[0] && product.ProductMedia[0].url ? product.ProductMedia[0].url : ""} )` }}
      ></Box>
      <div className="p-2">
        <p
          style={{
            display: "inline-block",
            height: "2rem",
            lineHeight: "1em",
            overflow: "hidden",
            margin: "2px",
            padding: "4px",
          }}
        >
          {product.title}
        </p>
        <div className="flex items-end justify-between">
          <Text
            size="small"
            className=" mt-2 text-primary"
            style={{ color: primaryColor, fontWeight: "bolder" }}
          >
            <FinalPriceDisplay product={product} />
          </Text>
          <Text size="xxSmall" className="text-gray-400">
            {product.has_sold} đã bán
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
