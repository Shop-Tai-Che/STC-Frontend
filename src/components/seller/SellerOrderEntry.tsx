import React from "react";
import { Box, Button, Icon, Text } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "@components/common";
import { primaryColor, secondaryColor, tertiaryColor } from "@utils/helper";
import getColorOpacity from "@utils/helper/getColorOpacity";
import { openShareScreen } from "@utils/helper/openShareSheet";

interface SellerOrderEntryProps {
  statusCount: number;
  statusContent: string;
  routePath?: string;
  routeParam?: string;
  shopOrderOverallStatus?: "has_order" | "empty_order";
  shopName?: string;
  shopAvatar?: string;
  handleShareShop?: () => void;
}

const SellerOrderEntry: React.FC<SellerOrderEntryProps> = ({
  statusCount,
  statusContent,
  routePath,
  routeParam,
  shopOrderOverallStatus,
  shopName,
  handleShareShop,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {shopOrderOverallStatus == "has_order" ? (
        <Box
          flexDirection="column"
          alignItems="center"
          style={{
            flex: 1,
            padding: "16px 8px 16px 8px",
            marginRight: 6,
            backgroundColor: "#EAEBED",
            borderRadius: 4,
          }}
          onClick={() => navigate(`/${routePath}/${routeParam}`)}
        >
          <Text size="large" bold>
            {statusCount}
          </Text>
          <Text size="small">{statusContent}</Text>
        </Box>
      ) : (
        <Box>
          <div style={{ display: "inline-block" }}>
            <Text style={{ display: "inline" }} bold>
              {shopName}{" "}
            </Text>
            <Text style={{ display: "inline" }}>
              chưa có đơn hàng nào. Hãy mau chia sẻ để mọi người đều biết đến!
            </Text>
          </div>

          <Button
            className="w-3/5"
            style={{
              backgroundColor: secondaryColor,
              color: primaryColor,
              marginTop: 10,
            }}
            size="medium"
            onClick={handleShareShop}
          >
            <Icon icon="zi-share" /> Chia sẻ shop
          </Button>
        </Box>
      )}
    </>
  );
};

export default SellerOrderEntry;
