import React from "react";
import { EmptyOrderSvg } from "@assets/svg";
import OrderSuccess from "@pages/OrderSuccess";
import { Page } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const EmptyOrderHistory: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Page
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Center vertically by setting the height to 100vh
      }}
    >
      <OrderSuccess
        mainTitle="Bạn chưa có đơn hàng nào"
        hasPrimaryButton
        primaryButtonTitle="Mua ngay"
        primaryButtonDestination="home"
        iconProp={<EmptyOrderSvg />}
        hasSecondaryButton={false}
        onClickPrimaryButton={() => navigate("/")}
      />
    </Page>
  );
};
export default EmptyOrderHistory;
