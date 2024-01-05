import {
  ButtonSecondary
} from "@components/common";
import React from "react";
import { Button, Icon, Page, Text } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";
import { OrderStatusFetch } from "@utils/type/Order";
import { CheckSvg } from "@assets/svg";

const OrderSuccess: React.FC<{ orderId?: string; }> = ({ orderId }) => {
  const navigate = useNavigate();
  const { idOrder } = useParams();
  return (
    <Page style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CheckSvg iconWidth={64} iconHeight={64} />
      <Text.Title size='xLarge' className='mt-4'>Đặt hàng thành công</Text.Title>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: 12, marginTop: 16 }}>
        <div style={{ flex: 1, marginRight: 4 }}><ButtonSecondary title='Mua tiếp' isSecondary={true} onClick={() => navigate('/')} /></div>
        <div style={{ flex: 1, marginLeft: 4 }}><ButtonSecondary title='Xem đơn hàng' isPrimary={true} onClick={() => navigate(`/status-order/${idOrder}`)} /></div>
      </div>
    </Page>
  )
}

export default OrderSuccess;