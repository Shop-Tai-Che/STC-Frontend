import React, { FC, useState } from "react";
import ProductDetailImageSwipe from "./ProductDetailImageSwipe";
import { Icon, Text } from "zmp-ui";
import { FinalPriceDisplay } from "@components/display";
import { Product } from "@utils/type";
import { primaryColor } from "@utils/helper/config";
import UpdateLove from "@services/ProductServices/UpdateLove";
import { PRICE_FONT_SIZE_BY_LOCATION } from "@utils/type/Price";

const ProductDetailHead: FC<{
  numberReview: number;
  product: Product;
  userId: number;
}> = ({ numberReview, product, userId }) => {
  const isUserIdExist = (product?.Love as { user_id: number }[] | undefined)?.some(item => item.user_id === userId) ?? false;

  const [hasLoveProduct, setHasLoveProduct] = useState(isUserIdExist);
  const [fetchStatus, updateStatusLove] = UpdateLove();


  return (
    <div>
      <ProductDetailImageSwipe product={product} />
      <Text size="xLarge" className="pl-4 pr-4 pt-2">
        {product.title}
      </Text>
      <div className="pl-4 pr-2 grid-cols-4 gap-8 items-end" style={{ display: "grid" }}>
        <div className="col-span-3 flex items-end justify-start gap-6">
          <Text
            size="large"
            className=" mt-2 text-primary"
            style={{ color: primaryColor, fontWeight: '600' }}
          >
            <FinalPriceDisplay priceSize={PRICE_FONT_SIZE_BY_LOCATION.DETAIL_PRODUCT} product={product} />
          </Text>
          <Text size="small">{numberReview} đánh giá </Text>
          <Text size="small">{product?.has_sold} đã bán</Text>
        </div>
        <button
          className="pr-4 bg-transparent flex justify-end"
          onClick={() => {
            updateStatusLove(userId, product.id);
            setHasLoveProduct(!hasLoveProduct);
          }}
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
