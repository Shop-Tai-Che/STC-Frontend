import React, { FC, ReactNode } from "react";
import { Text } from "zmp-ui";
import { PriceDisplay } from "@components/display";
import getColorOpacity from "@utils/helper/getColorOpacity";
import { primaryColor } from "@utils/helper/config";
import { StatusOrder, STATUS_ORDER } from "@utils/type/StatusOrder";
import { PRICE_FONT_SIZE_BY_LOCATION } from "@utils/type/Price";

const ItemStatusShipping: FC<{ orderTotalPrice: number }> = ({
  orderTotalPrice,
}) => {
  const colorOpacity = getColorOpacity(primaryColor, "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: primaryColor }}
      >
        Đang giao hàng{" "}
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay
          priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS}
          children={orderTotalPrice}
        />
      </Text>
    </>
  );
};

const ItemStatusProcessing: FC<{ orderTotalPrice: number }> = ({
  orderTotalPrice,
}) => {
  const colorOpacity = getColorOpacity(primaryColor, "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: primaryColor }}
      >
        Đang xử lí
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay
          priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS}
          children={orderTotalPrice}
        />
      </Text>
    </>
  );
};

const ItemStatusCanceled: FC<{ orderTotalPrice: number }> = ({
  orderTotalPrice,
}) => {
  const colorOpacity = getColorOpacity("#FF0900", "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: colorOpacity, color: "#FF0900" }}
      >
        Đã hủy đơn
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay
          priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS}
          children={orderTotalPrice}
        />
      </Text>
    </>
  );
};

const ItemStatusReceived: FC<{ orderTotalPrice: number }> = ({
  orderTotalPrice,
}) => {
  const colorOpacity = getColorOpacity("#FF0900", "0.3");

  return (
    <>
      <p
        className="px-4 py-2 bg-red-500 font-medium rounded-md"
        style={{ backgroundColor: primaryColor, color: "white" }}
      >
        Đã nhận hàng
      </p>
      <Text
        size="xLarge"
        className="   text-primary"
        style={{ fontWeight: "bolder" }}
      >
        {" "}
        <PriceDisplay
          priceSize={PRICE_FONT_SIZE_BY_LOCATION.ORDER_STATUS}
          children={orderTotalPrice}
        />
      </Text>
    </>
  );
};

const StatusHeader: FC<{
  currentStatusOrder: string | null;
  orderTotalPrice: number;
}> = ({ currentStatusOrder, orderTotalPrice }) => {
  const StatusItem: FC = () => {
    if (!currentStatusOrder) {
      return <></>;
    }
    if (currentStatusOrder === STATUS_ORDER.PROCESSING)
      return <ItemStatusProcessing orderTotalPrice={orderTotalPrice} />;

    if (currentStatusOrder === STATUS_ORDER.DELIVERING)
      return <ItemStatusShipping orderTotalPrice={orderTotalPrice} />;

    if (currentStatusOrder === STATUS_ORDER.SUCCESS)
      return <ItemStatusReceived orderTotalPrice={orderTotalPrice} />;

    if (currentStatusOrder === STATUS_ORDER.CANCELED)
      return <ItemStatusCanceled orderTotalPrice={orderTotalPrice} />;

    return <></>;
  };
  return (
    <div className="flex p-2 items-center justify-between">
      <StatusItem />
    </div>
  );
};
export default StatusHeader;
