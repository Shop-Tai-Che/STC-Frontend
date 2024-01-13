import {
  SectionText,
  InputNoOutline,
  ButtonSecondary,
  DividerSpaceLine,
} from "@components/common";
import React from "react";
import { Button, Icon, Input, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";
import { OrderStatusFetch } from "@utils/type/Order";
import "./Order.css";
import { isValidPhone } from "@utils/helper/validatePhone";

const OrderInforReceive: React.FC<{
  editView?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orderItem?: OrderStatusFetch | null;
  title?: string;
}> = ({ editView, onChange, orderItem, title }) => {
  const AdressField = editView ? (
    <div
      style={{
        marginLeft: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <InputNoOutline
        id="address"
        placeholder="Địa chỉ nhận hàng"
        onChange={onChange}
      />
      <ButtonSecondary title="Tự động điền" isSecondary />
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
    <SectionText
      title={title ? title : "1. Thông tin nhận hàng"}
      padding="title-only"
      titleStyle={{ color: primaryColor }}
    >
      <div style={{ paddingLeft: 12, paddingRight: 12 }}>
        <div>
          {" "}
          {editView ? (
            <Input
              id="address"
              type="text"
              label="Địa chỉ nhận hàng"
              placeholder="Nhập địa chỉ..."
              clearable={{
                mode: "always",
              }}
              onChange={onChange}
            />
          ) : (
            <div className="order-infor-receive__input">
              <Icon icon="zi-location" />
              <h1 className="order-infor-receive__input__filled-info">
                {orderItem?.address}
              </h1>
            </div>
          )}
        </div>
        <div style={{ marginTop: 16 }}>
          {editView ? (
            <Input
              id="numberphone"
              type="text"
              label="SĐT người nhận"
              placeholder="Nhập SĐT..."
              clearable={{
                mode: "always",
              }}
              onChange={onChange}
            />
          ) : (
            <div className="order-infor-receive__input">
              <Icon icon="zi-user" />
              <div className="order-infor-receive__input__filled-info">
                <Text
                  className="font-bold"
                  style={{ color: primaryColor }}
                  bold
                >
                  {orderItem && orderItem.name ? orderItem?.name : " "} -{" "}
                  {orderItem && orderItem.phone ? orderItem?.phone : " "}
                </Text>
                <Text className="text-gray-500">Người nhận</Text>
              </div>
            </div>
          )}
          <div>
            {" "}
            {editView ? (
              <div style={{ marginTop: 16 }}>
                <Input
                  id="note"
                  type="text"
                  label="Lưu ý cho người bán (không bắt buộc)"
                  placeholder="Nhập lưu ý..."
                  clearable={{
                    mode: "always",
                  }}
                  onChange={onChange}
                />{" "}
              </div>
            ) : (
              <div>
                {orderItem?.note ? (
                  <div
                    className="order-infor-receive__input"
                    style={{ marginTop: 16 }}
                  >
                    <Icon icon="zi-note" />
                    <h3 className="order-infor-receive__input__filled-info">
                      {orderItem?.note}
                    </h3>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="px-4">
        <div className="order-infor-receive__input">
          <Icon icon="zi-location" />
          {AdressField}
        </div>
        <DividerSpaceLine />
        <div className="order-infor-receive__input">
          <Icon icon="zi-user" />
          {ReceiverField}
        </div>
        <DividerSpaceLine />
        <div className="order-infor-receive__input">
          <Icon icon="zi-note" />
          {NoteField}
        </div>
      </div> */}
    </SectionText>
  );
};

export default OrderInforReceive;
