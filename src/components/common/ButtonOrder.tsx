import React, { FC, useEffect } from "react";
import { Icon } from "zmp-ui";
import Button from "zmp-ui/button";
import { openChatScreen } from "@utils/helper/openchat";
import { primaryColor, tertiaryColor } from "@utils/helper/config";
import {
  setNativeStorage,
  PRODUCT_ORDER,
  getNativeStorage,
} from "@utils/helper/nativeStorage";
import { Product } from "@utils/type";
import { useNavigate } from "react-router-dom";

const ButtonOrder: FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const saveNativeStorgeProduct = () => {
    setNativeStorage(PRODUCT_ORDER, product);
    navigate(`/order`);
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white flex justify-center items-center">
      <Button
        className="w-4/12 "
        style={{ backgroundColor: tertiaryColor, borderRadius: "0px" }}
        onClick={() => openChatScreen()}
      >
        <Icon icon="zi-chat" />
      </Button>
      <Button
        className="w-8/12 rounded-none"
        style={{ backgroundColor: primaryColor, borderRadius: "0px" }}
        onClick={saveNativeStorgeProduct}
      >
        Mua ngay
      </Button>
    </div>
  );
};

export default ButtonOrder;
