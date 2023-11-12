import React, { FC, useState } from "react";
import ProductDetailImageSwipe from "./ProductDetailImageSwipe";
import { Icon, Text } from "zmp-ui";
import { FinalPriceDisplay } from "@components/display";
import { Product } from "@utils/type";
import { primaryColor } from "@utils/helper/config";

const ProductDetailHead: FC<{ product: Product }> = ({product}) => {
  const [hasLoveProduct, setHasLoveProduct] = useState(false);

  return (
    <div className="p-2">
      <ProductDetailImageSwipe product={product} />
      <Text size="xLarge" className="my-2">
        {product.title}
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
            <Icon icon="zi-heart-solid" className="text-rose-600" />
          ) : (
            <Icon icon="zi-heart" className="text-rose-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailHead;
