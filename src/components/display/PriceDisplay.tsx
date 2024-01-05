import React, { FC } from "react";
import { getConfig } from "@utils/helper/config";
import { PRICE_FONT_SIZE_BY_LOCATION } from "@utils/type/Price";

interface PriceDisplayProps {
  children: number,
  priceSize?: number
}

export const PriceDisplay: FC<PriceDisplayProps> = ({ children, priceSize }) => {
  const symbol = getConfig((config) => config.template.currencySymbol);
  if (getConfig((config) => config.template.prefixCurrencySymbol)) {
    return (
      <div style={{
        fontSize: priceSize ? priceSize : 15,
        display: 'inline'
      }}>
        {symbol}
        {children && children.toLocaleString()}
      </div>
    );
  } else {
    return (
      <div style={{
        fontSize: priceSize ? priceSize : 15,
        display: 'inline'
      }}>
        {symbol}
        {children && children.toLocaleString()}
      </div>
    );
  }
};
