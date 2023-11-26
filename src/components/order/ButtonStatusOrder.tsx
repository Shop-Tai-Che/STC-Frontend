import React, { FC, useEffect } from "react";
import { Icon } from "zmp-ui";
import Button from "zmp-ui/button";
import { openChatScreen } from "@utils/helper/openchat";
import { primaryColor, tertiaryColor } from "@utils/helper/config";
import { Product, StatusOrder } from "@utils/type";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { useNavigate } from "react-router-dom";
import getColorOpacity from "@utils/helper/getColorOpacity";
import { divide } from "cypress/types/lodash";

const ButtonStatusOrderProcessing: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-2/5 rounded-full"
        style={{ backgroundColor: colorOpacity("#FF0900", 0.2), color: "red" }}
        onClick={() => openChatScreen()}
      >
        <Icon icon="zi-delete" /> {"  "}
        Hủy đơn
      </Button>
      <Button
        className="w-2/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        <Icon icon="zi-chat" /> {"  "}
        Hỗ trợ ngay
      </Button>
    </>
  );
};

const ButtonStatusOrderCanceled: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        Mua lại sản phẩm{" "}
      </Button>
    </>
  );
};
const ButtonStatusOrderShipping: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        <Icon icon="zi-chat" /> {"  "}
        Hỗ trợ ngay
      </Button>
    </>
  );
};

const ButtonStatusOrderReceived: FC = () => {
  const colorOpacity = (color, opacity) => {
    return getColorOpacity(color, opacity);
  };
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{
          backgroundColor: colorOpacity(primaryColor, 0.3),
          color: primaryColor,
        }}
      >
        <Icon icon="zi-recall" />
        {" "}
        Đánh giá sản phẩm
      </Button>
    </>
  );
};

const ButtonStatusOrder: FC<{ currentStatusOrder: StatusOrder | null }> = ({
  currentStatusOrder,
}) => {
  const navigate = useNavigate();
  const saveNativeStorgeProduct = () => {};
  const ButtonStatusOrderItem: FC = () => {
    if (!currentStatusOrder) {
      return <></>;
    }
    if (currentStatusOrder.typeStatus == STATUS_ORDER.PROCESSING)
      return <ButtonStatusOrderProcessing />;

    if (currentStatusOrder.typeStatus == STATUS_ORDER.SHIPPING)
      return <ButtonStatusOrderShipping />;

    if (currentStatusOrder.typeStatus == STATUS_ORDER.RECEIVED)
      return <ButtonStatusOrderReceived />;

    if (currentStatusOrder.typeStatus == STATUS_ORDER.CANCELED)
      return <ButtonStatusOrderCanceled />;

    return <></>;
  };
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white flex justify-around items-center">
      <ButtonStatusOrderItem />
    </div>
  );
};

export default ButtonStatusOrder;
