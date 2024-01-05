import React from "react";
import { Text } from "zmp-ui";
import { PriceDisplay } from "@components/display";
import { primaryColor } from "@utils/helper/config";
import { ButtonSecondary } from "@components/common";
import { PRICE_FONT_SIZE_BY_LOCATION } from "@utils/type/Price";

const TotalPaymentAndOrder: React.FC<{
  totalPayment: number;
  onClick: () => void;
}> = ({ totalPayment, onClick }) => {
  return (
    <div className="p-2 grid grid-cols-2 grid-gap-4">
      <div>
        <Text size="normal" className="mb-2">
          Tổng thanh toán
        </Text>
        <Text
          size="xLarge"
          className="text-primary"
          style={{ color: primaryColor, fontWeight: "bolder" }}
        >
          <PriceDisplay priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS} children={totalPayment} />
        </Text>
      </div>

      <ButtonSecondary title="Đặt hàng" isPrimary onClick={onClick} />
    </div>
  );
};

export default TotalPaymentAndOrder;
