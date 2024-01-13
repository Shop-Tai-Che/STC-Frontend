import React from "react";
import { CheckSvg } from "@assets/svg";
import OrderSuccess from "@pages/OrderSuccess";
import { Page } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";

const OrderSuccessPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { idOrder } = useParams();
  return (
    <Page
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <OrderSuccess
        iconProp={<CheckSvg iconWidth={72} iconHeight={72} />}
        mainTitle="Đặt hàng thành công"
        hasPrimaryButton={true}
        hasSecondaryButton={true}
        primaryButtonTitle="Xem đơn hàng"
        secondaryButtonTitle="Mua hàng tiếp"
        onClickPrimaryButton={() => navigate(`/status-order/${idOrder}`)}
        onClickSecondaryButton={() => navigate(`/`)}
      />
    </Page>
  );
};
export default OrderSuccessPage;
