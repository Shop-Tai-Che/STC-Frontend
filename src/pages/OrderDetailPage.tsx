import React, { useState, useEffect } from "react";
import { Order, Product, ShipPayment } from "@utils/type";
import { FetchState } from "@utils/type/FetchState";
import { TYPESPAYMENT } from "@utils/type/Payment";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  TotalPaymentAndOrder,
} from "@components/order";
import { DividerSpace } from "@components/common";
import { Page } from "zmp-ui";
import { PRODUCT_ORDER, getNativeStorage } from "@utils/helper/nativeStorage";
import { CreateOrder } from "@services/OrderServices/OrderProduct";
import { useNavigate } from "react-router-dom";
import { UserFetch } from "@utils/type/User";

interface typeInputOrderInfoReceive {
  numberphone: string | null;
  note: string | null;
  address: string | null;
}

const INITINPUTORDERINFORECEIVE: typeInputOrderInfoReceive = {
  numberphone: null,
  note: null,
  address: null,
};

const OrderDetailPage: React.FC<{ currentUser: UserFetch }> = ({
  currentUser,
}) => {
  const navigate = useNavigate();
  const [productItem, setProductItem] = useState<Product | null>(null);
  const [inputOrderInfoReceive, setInputOrderInfoReceive] =
    useState<typeInputOrderInfoReceive>(INITINPUTORDERINFORECEIVE);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [paymentInfor, setPaymentInfor] = useState<ShipPayment>({
    typePayment: TYPESPAYMENT.CASH,
    shipPrices: 20000,
  });
  const [resCreateOrder, fetchStatusOrder, postOrder] = CreateOrder();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNativeStorage(PRODUCT_ORDER);
        setProductItem(data);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    productItem && setTotalPayment(productItem.price + paymentInfor.shipPrices);
  }, [productItem, paymentInfor.shipPrices]);

  const handleChangeInputOrderInfoReceive = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;

    setInputOrderInfoReceive((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (fetchStatusOrder == FetchState.SUCCESS) handleOrderProduct();
  }, [fetchStatusOrder]);

  const handleOrderProduct = () => {
    console.log(resCreateOrder?.id);
    if (resCreateOrder?.id) navigate(`/status-order/${resCreateOrder.id}`);
  };

  const handleCreateOrder = () => {
    if (productItem) {
      const orderNeedPost = {
        user_id: currentUser.id,
        product_id: productItem.id,
        shop_id: productItem.shop_id,
        amount: 1,
        payment_method: TYPESPAYMENT.CASH,
        address: inputOrderInfoReceive.address as string,
        note: inputOrderInfoReceive.note as string,
        status: STATUS_ORDER.PROCESSING,
        name: currentUser.name,
        phone: "8324235242",
      };
      postOrder( orderNeedPost );
    }
  };

  return (
    <>
      {productItem && (
        <Page className="bg-white flex flex-col justify-between">
          <ProductShortageItem product={productItem as Product} />
          <DividerSpace />
          <OrderInforReceive
            editView
            onChange={handleChangeInputOrderInfoReceive}
          />
          <DividerSpace />
          <OrderPaymentFillInfo editView paymentInfor={paymentInfor} />
          <DividerSpace />
          <TotalPaymentAndOrder
            onClick={handleCreateOrder}
            totalPayment={totalPayment}
          />
        </Page>
      )}
    </>
  );
};

export default OrderDetailPage;
