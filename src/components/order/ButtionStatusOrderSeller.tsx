import React, { FC, useEffect } from "react";
import { Icon } from "zmp-ui";
import Button from "zmp-ui/button";
import { primaryColor } from "@utils/helper/config";
import { FetchState } from "@utils/type/FetchState";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { useNavigate } from "react-router-dom";
import getColorOpacity from "@utils/helper/getColorOpacity";
import { updateStatusOrder } from "@services/OrderServices/OrderProduct";

const ButtonStatusOrderProcessing: FC<{
  orderId: number;
  setChangeStatusCallback: () => void;
}> = ({ orderId, setChangeStatusCallback }) => {
 
  const [updateStatus, fetchStatusOrder] = updateStatusOrder();

  useEffect(() => {
    if (fetchStatusOrder == FetchState.SUCCESS) {
      setChangeStatusCallback();
      console.log("success");
    }
  }, [fetchStatusOrder]);
  return (
    <>
      <Button
        className="w-2/5 rounded-full"
        style={{ backgroundColor: primaryColor, color: "white", width:"90%" }}
        onClick={() =>
          updateStatus({ orderId, newStatus: STATUS_ORDER.DELIVERING })
        }
      >
        Xác nhận giao hàng
      </Button>
    </>
  );
}; 
const ButtonStatusOrderShipping:FC<{
  orderId: number;
  setChangeStatusCallback: () => void;
}>   = ({ orderId, setChangeStatusCallback }) => {
 
  const [updateStatus, fetchStatusOrder] = updateStatusOrder();
  useEffect(() => {
    if (fetchStatusOrder == FetchState.SUCCESS) {
      setChangeStatusCallback();
      console.log("success");
    }
  }, [fetchStatusOrder]);
  return (
    <>
      <Button
        className="w-2/5 rounded-full"
        style={{ backgroundColor: primaryColor, color: "white", width:"90%" }}
        onClick={() =>
          updateStatus({ orderId, newStatus: STATUS_ORDER.SUCCESS })
        }
      >
        Xác nhận đã giao hàng & thanh toán
      </Button>
    </>
  );
};

const ButtonStatusOrderReceived: FC = () => {
 
  return (
    <>
      <Button
        className="w-4/5 rounded-full"
        style={{ backgroundColor: primaryColor, color: "white"}}
      >
        Đơn hàng đã hoàn thành
      </Button>
    </>
  );
};

const ButtonStatusOrderSeller: FC<{
  currentStatusOrder: string | null;
  orderId: number;
  setChangeStatusCallback: () => void;
}> = ({ currentStatusOrder, orderId, setChangeStatusCallback }) => {
 
  const ButtonStatusOrderItem: FC = () => {
    if (!currentStatusOrder) {
      return <></>;
    }
    if (currentStatusOrder == STATUS_ORDER.PROCESSING)
      return (
        <ButtonStatusOrderProcessing
          orderId={orderId}
          setChangeStatusCallback={setChangeStatusCallback}
        />
      );

    if (currentStatusOrder == STATUS_ORDER.DELIVERING)
      return <ButtonStatusOrderShipping   orderId={orderId}
      setChangeStatusCallback={setChangeStatusCallback} />;

    if (currentStatusOrder == STATUS_ORDER.SUCCESS)
      return <ButtonStatusOrderReceived />;

    return <></>;
  };
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white flex justify-around items-center">
      <ButtonStatusOrderItem />
    </div>
  );
};

export default ButtonStatusOrderSeller;
