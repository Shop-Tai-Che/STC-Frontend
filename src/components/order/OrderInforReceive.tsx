import {
  SectionText,
  InputNoOutline,
  ButtonSecondary,
} from "@components/common";
import React from "react";
import { Button, Icon } from "zmp-ui";

const OrderInforReceive: React.FC<{ editView?: boolean }> = ({ editView }) => {
  const AdressField = editView ? (
    <>
      <InputNoOutline placeholder="Nhập địa chỉ..." />
      <ButtonSecondary title="Tự động điền" isSecondary />
    </>
  ) : (
    <h1>1234 Đường Nguyễn Thị Minh Khai, P. Nhà Bè, Q.1, TP. Hồ Chí Minh</h1>
  );

  const ReceiverField = editView ? (
    <InputNoOutline
      placeholder="Cho phép truy cập SĐT để tự động điền"
      id="number_phone_user"
    />
  ) : (
    <h3>Ken Pham - 0342137491</h3>
  );

  const NoteField = editView ? (
    <InputNoOutline placeholder="Ghi chú cho người bán..." />
  ) : (
    <h3>Đóng gói hàng cẩn thận dùm!</h3>
  );

  const Space = <div className="my-4"></div>;
  return (
    <SectionText title="1. Thông tin nhận hàng" padding="title-only">
      <div className="p-2">
        <div className="flex gap-5 justify-start items-center">
          <Icon icon="zi-location" />
          {AdressField}
        </div>
        {Space}
        <div className="flex gap-5 justify-start items-start">
          <Icon icon="zi-user" />
          <div>
            <label htmlFor="number_phone_user">Người nhận</label>
            {ReceiverField}
          </div>
          <Icon icon="zi-chevron-right" className="ml-5 self-center" />
        </div>
        {Space}
        <div className="flex gap-5 justify-start items-start">
          <Icon icon="zi-note" />
          {NoteField}
        </div>
      </div>
    </SectionText>
  );
};

export default OrderInforReceive;
