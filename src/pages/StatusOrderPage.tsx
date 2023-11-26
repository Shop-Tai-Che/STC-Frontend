import React, { useState, useEffect } from "react";
import { Product, StatusOrder } from "@utils/type";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { TYPESPAYMENT, Payment } from "@utils/type/Payment";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  TotalPaymentAndOrder,
  StatusHeader,
  ButtonStatusOrder,
} from "@components/order";
import { DividerSpace } from "@components/common";
import { Page } from "zmp-ui";

const StatusOrderPage: React.FC = () => {
  const [productItem, setProductItem] = useState<Product | null>(null);
  const [addressUserOrder, setAddressUserOrder] = useState<string | null>(null);
  const [numberPhoneUserOrder, setNumberPhoneUserOrder] = useState<
    string | null
  >(null);
  const [noteUserOrder, setNoteUserOrder] = useState<string | null>(null);
  const [paymentInfor, setPaymentInfor] = useState<Payment>({
    typePayment: TYPESPAYMENT.CASH,
    totalPrices: 3121,
  });

  const [currentStatusOrder, setCurrentStatusOrder] =
    useState<StatusOrder | null>({ typeStatus: STATUS_ORDER.CANCELED });

  return (
    <Page className="bg-white  ">
      
      <StatusHeader currentStatusOrder={currentStatusOrder} />
      <DividerSpace />

      <ProductShortageItem />
      <DividerSpace />
      <OrderInforReceive />
      <DividerSpace />
      <OrderPaymentFillInfo />
      <ButtonStatusOrder currentStatusOrder={currentStatusOrder} />
    </Page>
  );
};

export default StatusOrderPage;
