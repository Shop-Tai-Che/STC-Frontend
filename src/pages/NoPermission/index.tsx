import React, { useState, useEffect } from "react";
import { PermissionSvg } from "@assets/svg";
import OrderSuccess from "@pages/OrderSuccess";
import { primaryColor } from "@utils/helper";
import { Page } from "zmp-ui";
import LoadingState from "@components/common/loading";

interface NoPermissionProp {
  onClickPrimaryButton?: () => void;
  isAskingPermisson: boolean;
}

const NoPermission: React.FC<NoPermissionProp> = ({
  onClickPrimaryButton,
  isAskingPermisson,
}) => {
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
      {isAskingPermisson ? (
        <LoadingState />
      ) : (
        <OrderSuccess
          mainTitle="Shop Tái Chế cần một chút Phép Màu"
          subTitle="Để trải nghiệm toàn bộ tính năng của sốp, vui lòng cho phép truy cập thông tin cá nhân"
          iconProp={
            <PermissionSvg
              iconWidth={72}
              iconHeight={72}
              svgColor={primaryColor}
            />
          }
          hasPrimaryButton={true}
          hasSecondaryButton={false}
          primaryButtonTitle="Cấp quyền cho Shop Tái Chế"
          onClickPrimaryButton={() => onClickPrimaryButton}
        />
      )}
    </Page>
  );
};
export default NoPermission;
