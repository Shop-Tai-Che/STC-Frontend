import { ButtonSecondary } from "@components/common";
import React, { ReactNode } from "react";
import {  Page, Text } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";

interface OrderSuccesProp {
  orderId?: string;
  iconProp: ReactNode;
  mainTitle: string;
  subTitle?: string;
  hasSecondaryButton: boolean;
  hasPrimaryButton: boolean;
  primaryButtonTitle: string;
  secondaryButtonTitle?: string;
  onClickPrimaryButton: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonDestination?: "home" | "permission";
}

const OrderSuccess: React.FC<OrderSuccesProp> = ({
  orderId,
  iconProp,
  mainTitle,
  subTitle,
  hasPrimaryButton,
  hasSecondaryButton,
  primaryButtonTitle,
  secondaryButtonTitle,
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonDestination,
}) => {
  const navigate = useNavigate();
  const { idOrder } = useParams();
  return (
    <Page
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
      }}
    >
      {iconProp}
      <Text.Title size="large" className="mt-2">
        {mainTitle}
      </Text.Title>
      <Text size="normal" className="mt-2">
        {subTitle}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: 12,
          marginTop: 16,
        }}
      >
        {hasSecondaryButton && (
          <div style={{ flex: 1, marginRight: 4 }}>
            <ButtonSecondary
              title={secondaryButtonTitle ? secondaryButtonTitle : ""}
              isSecondary={true}
              onClick={() => navigate("/")}
            />
          </div>
        )}
        {hasPrimaryButton && (
          <div style={{ flex: 1, marginLeft: 4 }}>
            <ButtonSecondary
              title={primaryButtonTitle}
              isPrimary={true}
              onClick={() => {
                if (idOrder) navigate(`/status-order/${idOrder}`);
                else
                  switch (primaryButtonDestination) {
                    case "home":
                      navigate("/");
                      break;
                    case "permission":
                      onClickPrimaryButton();
                      break;
                  }
              }}
            />
          </div>
        )}
      </div>
    </Page>
  );
};

export default OrderSuccess;
