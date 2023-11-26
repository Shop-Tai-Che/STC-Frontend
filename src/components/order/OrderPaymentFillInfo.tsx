import { SectionText, DividerSpaceLine } from "@components/common";
import { PaymentSvg, ShipSvg } from "@assets/svg";
import { PriceDisplay } from "@components/display";
import { Text } from "zmp-ui";
import React from "react";
import { primaryColor } from "@utils/helper/config";

const OrderPaymentFillInfo: React.FC<{ editView?: boolean }> = ({
  editView,
}) => {
  const TypePayment = editView ? (
    <select className="py-3 block w-full   outline-none ">
      <option selected>Thanh toán bằng tiền mặt</option>
    </select>
  ) : (
    <h1>Thanh toán bằng tiền mặt (mặc định)</h1>
  );
  const Space = <div className="my-4"></div>;

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
              className="   text-primary"
              style={{ color: primaryColor, fontWeight: "bolder" }}
            >
              <PriceDisplay children={20000} />
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
