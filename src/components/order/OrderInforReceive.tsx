import {
  SectionText,
  InputNoOutline,
  ButtonSecondary,
  DividerSpaceLine,
} from "@components/common";
import React from "react";
import { Button, Icon, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { OrderStatusFetch } from "@utils/type/Order";

const OrderInforReceive: React.FC<{
  editView?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orderItem?: OrderStatusFetch | null;
  title?: string;
}> = ({ editView, onChange, orderItem, title }) => {

  const AdressField = editView ? (
    <div style={{ marginLeft: 12 }}>
      <InputNoOutline
        id="address"
        placeholder="Nhập địa chỉ nhận hàng của bạn"
        onChange={onChange}
      />
      {/* <ButtonSecondary title="Tự động điền" isSecondary /> */}
    </div>
  ) : (
    <h1 style={{ marginLeft: 12 }}>{orderItem?.address}</h1>
  );

  const ReceiverField = editView ? (
    <>
      <div style={{ marginLeft: 12 }}>
        <label htmlFor="numberphone">Người nhận</label>
        <InputNoOutline
          placeholder="Điền SĐT để người bán liên lạc với bạn"
          id="numberphone"
          onChange={onChange}
        />
      </div>{" "}
      {/* <Icon icon="zi-chevron-right" className="ml-5 self-center" /> */}
    </>
  ) : (
    <div style={{ marginLeft: 12 }}>
      <Text className="font-bold" style={{ color: primaryColor }} bold>
        {orderItem && orderItem.name ? orderItem?.name : " "} -{" "}
        {orderItem && orderItem.phone ? orderItem?.phone : " "}
      </Text>
      <Text className="text-gray-500">Người nhận</Text>
    </div>
  );

  const NoteField = editView ? (
    <div style={{ marginLeft: 12 }}>
      <InputNoOutline
        id="note"
        placeholder="Ghi chú cho người bán..."
        onChange={onChange}
      />
    </div>
  ) : (
    <h3 style={{ marginLeft: 12 }}>{orderItem?.note}</h3>
  );

  return (
    <SectionText title={title ? title : "1. Thông tin nhận hàng"} padding="title-only">
      <div className="px-4">
        <div className="flex justify-start items-center">
          <Icon icon="zi-location" />
          {AdressField}
        </div>
        <DividerSpaceLine />
        <div className="flex justify-start items-start ">
          <Icon icon="zi-user" />
          {ReceiverField}
        </div>
        <DividerSpaceLine />
        <div className="flex justify-start items-start" style={{ alignItems: 'center' }}>
          <Icon icon="zi-note" />
          {NoteField}
        </div>
      </div>
    </SectionText>
  );
};

export default OrderInforReceive;
