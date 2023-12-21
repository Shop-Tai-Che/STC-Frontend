import { SectionText, DividerSpaceLine } from "@components/common";
import { PaymentSvg, ShipSvg } from "@assets/svg";
import { PriceDisplay } from "@components/display";
import { Text } from "zmp-ui";
import React from "react";
import { primaryColor } from "@utils/helper/config";
import { ShipPayment } from "@utils/type";
import { TYPESPAYMENT } from "@utils/type/Payment";

const OrderPaymentFillInfo: React.FC<{
  editView?: boolean;
  paymentInfor: ShipPayment;
}> = ({ editView, paymentInfor }) => {
  const convertPayment = () => {
    return paymentInfor.typePayment == TYPESPAYMENT.BANKING
      ? "Thanh toán bằng tiền mặt"
      : "Thanh toán bằng tiền mặt";
  };
  const TypePayment = editView ? (
    <select className="py-3 block w-full   outline-none ">
      <option selected>Thanh toán bằng tiền mặt</option>
    </select>
  ) : (
    <h1>{convertPayment()}</h1>
  );

  return (
    <SectionText title="2. Thông tin thanh toán" padding="title-only">
      <div className="px-4">
        <div className="flex gap-5 justify-start items-center">
          <PaymentSvg />
          {TypePayment}
        </div>
        <DividerSpaceLine />
        <div className="flex gap-5 justify-start items-center">
          <ShipSvg />
          <div>
            <Text
              size="small"
              className="text-primary"
              style={{ color: primaryColor, fontWeight: "bolder" }}
            >
              <PriceDisplay children={paymentInfor.shipPrices} />
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
