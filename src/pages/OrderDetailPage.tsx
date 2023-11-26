import React, { useState, useEffect } from "react";
import { Product, StatusOrder, STATUS_ORDER } from "@utils/type";
import { TYPESPAYMENT, Payment } from "@utils/type/Payment";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  TotalPaymentAndOrder,
} from "@components/order";
import { DividerSpace } from "@components/common";
import { Page } from "zmp-ui";

const OrderDetailPage: React.FC = () => {
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


  return (
    <Page className="bg-white flex flex-col justify-between">
      <ProductShortageItem />
      <DividerSpace />
      <OrderInforReceive editView />
      <DividerSpace />
      <OrderPaymentFillInfo editView />
      <DividerSpace />
      <TotalPaymentAndOrder />
    </Page>
  );
};

export default OrderDetailPage;
