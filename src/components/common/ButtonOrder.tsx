import React from "react";
import Button from "zmp-ui/button";
import { openChatScreen } from "../../utils/helper/openchat";
import { primaryColor } from "../../utils/helper/config";

const ButtonOrder: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white flex justify-center items-center">
      <Button
        className="w-11/12"
        style={{ backgroundColor: primaryColor }}
        onClick={() => openChatScreen()}
      >
        Đặt hàng ngay
      </Button>
    </div>
  );
};

export default ButtonOrder;
