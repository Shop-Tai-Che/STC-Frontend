import {
  SectionText,
  InputNoOutline,
  ButtonSecondary,
  DividerSpaceLine,
} from "@components/common";
import React from "react";
import { Button, Icon, Text } from "zmp-ui";
import { primaryColor } from "@utils/helper/config";

const OrderInforReceive: React.FC<{
  editView?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ editView, onChange }) => {
  const AdressField = editView ? (
    <>
      <InputNoOutline
        id="address"
        placeholder="Nhập địa chỉ..."
        onChange={onChange}
      />
      <ButtonSecondary title="Tự động điền" isSecondary />
    </>
  ) : (
    <h1>1234 Đường Nguyễn Thị Minh Khai, P. Nhà Bè, Q.1, TP. Hồ Chí Minh</h1>
  );

  const ReceiverField = editView ? (
    <>
      <div>
        <label htmlFor="numberphone">Người nhận</label>
        <InputNoOutline
          placeholder="Cho phép truy cập SĐT để tự động điền"
          id="numberphone"
          onChange={onChange}
        />
      </div>{" "}
      <Icon icon="zi-chevron-right" className="ml-5 self-center" />
    </>
  ) : (
    <div>
      <p className="font-medium" style={{ color: primaryColor }}>
        Ken Pham - 0342137491
      </p>
      <Text>Người nhận</Text>
    </div>
  );

  const NoteField = editView ? (
    <>
      <InputNoOutline
        id="note"
        placeholder="Ghi chú cho người bán..."
        onChange={onChange}
      />
    </>
  ) : (
    <h3>Đóng gói hàng cẩn thận dùm!</h3>
  );

  return (
    <SectionText title="1. Thông tin nhận hàng" padding="title-only">
      <div className="px-4">
        <div className="flex gap-5 justify-start items-center">
          <Icon icon="zi-location" />
          {AdressField}
        </div>
        <DividerSpaceLine />
        <div className="flex gap-5 justify-start items-start">
          <Icon icon="zi-user" />
          {ReceiverField}
        </div>
        <DividerSpaceLine />
        <div className="flex gap-5 justify-start items-start">
          <Icon icon="zi-note" />
          {NoteField}
        </div>
      </div>
    </SectionText>
  );
};

export default OrderInforReceive;
