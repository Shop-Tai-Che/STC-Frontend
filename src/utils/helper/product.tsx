import { createOrder } from "zmp-sdk";
import { Option, Product } from "../type/Product";
import { getConfig } from "./config";
import { SelectedOptions } from "../type/Cart";

export function calcFinalPrice(product: Product, options?: SelectedOptions) {
  let finalPrice = product.price;
  // if (product.sale) {
  //   if (product.sale.type === "fixed") {
  //     finalPrice = product.price - product.sale.amount;
  //   } else {
  //     finalPrice = product.price * (1 - product.sale.amount);
  //   }
  // }

  if (options) {
    const selectedOptions: Option[] = [];
    // for (const variantKey in options) {
    //   const variant = product.variants.find((v) => v.key === variantKey);
    //   if (variant) {
    //     const currentOption = options[variantKey];
    //     if (typeof currentOption === "string") {
    //       const selected = variant.options.find((o) => o.key === currentOption);
    //       if (selected) {
    //         selectedOptions.push(selected);
    //       }
    //     } else {
    //       const selecteds = variant.options.filter((o) =>
    //         currentOption.includes(o.key)
    //       );
    //       selectedOptions.push(...selecteds);
    //     }
    //   }
    // }
    finalPrice = selectedOptions.reduce((price, option) => {
      // if (option.priceChange) {
      //   if (option.priceChange.type == "fixed") {
      //     return price + option.priceChange.amount;
      //   } else {
      //     return price + product.price * option.priceChange.amount;
      //   }
      // }
      return price;
    }, finalPrice);
  }
  return finalPrice;
}
