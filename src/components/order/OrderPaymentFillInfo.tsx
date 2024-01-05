import { SectionText, DividerSpaceLine } from "@components/common";
import { PaymentSvg, ShipSvg } from "@assets/svg";
import { PriceDisplay } from "@components/display";
import { Text } from "zmp-ui";
import React from "react";
import { primaryColor } from "@utils/helper/config";
import { ShipPayment } from "@utils/type/Payment";
import { TYPESPAYMENT } from "@utils/type/Payment";
import { PRICE_FONT_SIZE_BY_LOCATION } from "@utils/type/Price";

const OrderPaymentFillInfo: React.FC<{
  editView?: boolean;
  paymentInfor: ShipPayment;
  needDisplayTitle?: boolean;
}> = ({ editView, paymentInfor, needDisplayTitle = true }) => {
  const convertPayment = () => {
    return paymentInfor?.typePayment == TYPESPAYMENT.BANKING
      ? "Thanh toán bằng tiền mặt"
      : "Thanh toán bằng tiền mặt";
  };
  const TypePayment = editView ? (
    <Text style={{ marginLeft: 12 }}>Thanh toán bằng tiền mặt (mặc định)</Text>
  ) : (
    <h1 style={{ marginLeft: 12 }}>{convertPayment()}</h1>
  );

  return (
    <SectionText
      title={!needDisplayTitle ? "" : "2. Thông tin thanh toán"}
      padding={!needDisplayTitle ? "none" : "title-only"}
    >
      <div className="px-4">
        <div className="flex justify-start items-center">
          <PaymentSvg />
          {TypePayment}
        </div>
        <DividerSpaceLine />
        <div className="flex justify-start items-center">
          <ShipSvg />
          <div style={{ marginLeft: 12 }}>
            <Text
              size="small"
              className="text-primary"
              style={{ color: primaryColor, fontWeight: "bolder" }}
            >
              <PriceDisplay priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS} children={paymentInfor.shipPrices} />
            </Text>
            <Text size="small" className="text-slate-600">
              Phí ship
            </Text>
          </div>
        </div>
      </div>
    </SectionText>
  );
};

export default OrderPaymentFillInfo;
