import React from "react";
import { Button, Text } from "zmp-ui";
import { PriceDisplay } from "@components/display";
import { primaryColor } from "@utils/helper/config";
import { ButtonSecondary } from "@components/common";
import { useNavigate } from "react-router-dom";

const TotalPaymentAndOrder: React.FC = () => {
  const navigate = useNavigate();
  const moveToStatusOrder = () => {
    navigate("/status-order");
  };

  return (
    <div className="p-2 flex gap-5 justify-between items-center ">
      <div className="">
        <Text size="normal" className="mb-2">
          Tổng thanh toán
        </Text>
        <Text
          size="xLarge"
          className="   text-primary"
          style={{ color: primaryColor, fontWeight: "bolder" }}
        >
          <PriceDisplay children={93200} />
        </Text>
      </div>
      <ButtonSecondary title="Đặt hàng" isPrimary onClick={moveToStatusOrder} />
    </div>
  );
};

export default TotalPaymentAndOrder;
