import React, { useState, useEffect } from "react";
import { Product } from "@utils/type";
import { FetchState } from "@utils/type/FetchState";
import { OrderStatusFetch } from "@utils/type/Order";
import { ShipPayment } from "@utils/type/Payment";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  StatusHeader,
  ButtonStatusOrder,
} from "@components/order";
import { DividerSpace } from "@components/common";
import { Page } from "zmp-ui";
import { GetOrderByOrderId } from "@services/OrderServices/OrderProduct";
import { useParams } from "react-router-dom";
import { UserFetch } from "@utils/type/User";

const StatusOrderPage: React.FC<{ currentUser: UserFetch }> = ({
  currentUser,
}) => {
  const { idOrder } = useParams();
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByOrderId();
  const [orderItem, setOrderItem] = useState<OrderStatusFetch | null>(null);
  // const [productItem, setProductItem] = useState<Product | null>(null);
  // const [addressUserOrder, setAddressUserOrder] = useState<string | null>(null);
  // const [numberPhoneUserOrder, setNumberPhoneUserOrder] = useState<
  //   string | null
  // >(null);
  // const [noteUserOrder, setNoteUserOrder] = useState<string | null>(null);
  // const [paymentInfor, setPaymentInfor] = useState<Payment>({
  //   typePayment: TYPESPAYMENT.CASH,
  //   totalPrices: 3121,
  // });

  const [needChangeStatus, setNeedChangeStatus] = useState(false);
  const setChangeStatusCallback = () => {
    setNeedChangeStatus(!needChangeStatus);
  };
  useEffect(() => {
    getResGetOrder(idOrder as string);
  }, [needChangeStatus]);

  useEffect(() => {
    if (fetchStateOrder == FetchState.SUCCESS) {
      setOrderItem(order as OrderStatusFetch);
    }
  }, [fetchStateOrder]);

  return (
    <>
      {orderItem && (
        <Page className="bg-white">
          <StatusHeader currentStatusOrder={orderItem.status} />
          <DividerSpace />
          <ProductShortageItem
            product={
              {
                id: orderItem.id,
                title: orderItem.Product.title,
                price: orderItem.Product.price ,
                shop_id: orderItem.shop_id,
                created_at: "2023-11-23T15:31:37.560Z",
                updated_at: null,
                ProductMedia: orderItem.Product.ProductMedia,
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
          <ButtonStatusOrder
            currentStatusOrder={orderItem.status}
            orderId={orderItem.id}
            setChangeStatusCallback={setChangeStatusCallback}
          />
        </Page>
      )}
    </>
  );
};

export default StatusOrderPage;
