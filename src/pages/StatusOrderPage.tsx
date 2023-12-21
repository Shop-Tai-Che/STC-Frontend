import React, { useState, useEffect } from "react";
import { Order, Product, StatusOrder } from "@utils/type";
import { FetchState } from "@utils/type/FetchState";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { TYPESPAYMENT, Payment, ShipPayment } from "@utils/type/Payment";
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
import { GetOrderByOrderId } from "@services/OrderServices/OrderProduct";
import { useParams } from "react-router-dom";

const StatusOrderPage: React.FC = () => {
  const { idOrder } = useParams();
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByOrderId();
  const [orderItem, setOrderItem] = useState<Order | null>(null);
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

  useEffect(() => {
    getResGetOrder(idOrder as string);
  }, []);

  useEffect(() => {
    if (fetchStateOrder == FetchState.SUCCESS) {
      setOrderItem(order as Order);
    }
  }, [fetchStateOrder]);
  return (
    <>
      {orderItem && (
        <Page className="bg-white">
          <StatusHeader currentStatusOrder={currentStatusOrder} />
          <DividerSpace />
          <ProductShortageItem
            product={
              {
                id: 1,
                title: "Túi tái chế từ jeans",
                price: 49000,
                shop_id: 1,
                discount: 1,
                created_at: "2023-11-23T15:31:37.560Z",
                updated_at: null,
                ProductMedia: [
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/shop-tai-che.appspot.com/o/1700753532.690602.jpg?alt=media",
                    sequence: 0,
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/shop-tai-che.appspot.com/o/1700753544.159028.jpg?alt=media",
                    sequence: 1,
                  },
                ],
              } as Product
            }
          />
          <DividerSpace />
          <OrderInforReceive />
          <DividerSpace />
          <OrderPaymentFillInfo
            paymentInfor={
              {
                typePayment: orderItem.payment_method,
                shipPrices: 20000,
              } as ShipPayment
            }
          />
          <ButtonStatusOrder currentStatusOrder={currentStatusOrder} />
        </Page>
      )}
    </>
  );
};

export default StatusOrderPage;
