import React, { FC, useMemo } from "react";
import { SelectedOptions } from "../../utils/type/Cart";
import { Product } from "../../utils/type/Product";
import { calcFinalPrice } from "../../utils/helper/product";
import { PriceDisplay } from "./DisplayPrice";

export const FinalPriceDisplay: FC<{
  children: Product;
  options?: SelectedOptions;
}> = ({ children, options }) => {
  const finalPrice = useMemo(
    () => calcFinalPrice(children, options),
    [children, options],
  );
  return <PriceDisplay>{finalPrice}</PriceDisplay>;
};
