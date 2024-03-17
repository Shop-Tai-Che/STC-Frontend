import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Page, useSnackbar } from "zmp-ui";
import ProductShortageItem from "@components/product/ProductShortageItem";
import {
  OrderInforReceive,
  OrderPaymentFillInfo,
  TotalPaymentAndOrder,
} from "@components/order";
import { DividerSpace } from "@components/divider";
import { CreateOrder } from "@services/OrderServices";
import { FetchState } from "@utils/type/FetchState";
import { UserFetch } from "@utils/type/User";
import { Product } from "@utils/type/Product";
import { ShipPayment, TYPESPAYMENT } from "@utils/type/Payment";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { PRODUCT_ORDER, getNativeStorage } from "@utils/helper";
import { isValidPhone } from "@utils/helper/validatePhone";

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

const OrderDetail: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const location = useLocation();
  const produc = location.state.product;
  const navigate = useNavigate();
  const [productItem, setProductItem] = useState<Product | null>(produc);
  const [inputOrderInfoReceive, setInputOrderInfoReceive] =
    useState<typeInputOrderInfoReceive>(INITINPUTORDERINFORECEIVE);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [paymentInfor, setPaymentInfor] = useState<ShipPayment>({
    typePayment: TYPESPAYMENT.CASH,
    shipPrices: 20000,
  });
  const [resCreateOrder, fetchStatusOrder, postOrder] = CreateOrder();
  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();

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
    if (resCreateOrder?.id)
      navigate(`/confirm-order-success/${resCreateOrder.id}`);
  };

  const snackBarIfInvalidOrder = (message) =>
    openSnackbar({
      text: `${message}`,
      type: "warning",
      duration: 3000,
    });

  const handleCreateOrder = (prodItem) => {
    const orderNeedPost = {
      user_id: currentUser.id,
      product_id: prodItem.id,
      shop_id: prodItem.shop_id,
      amount: 1,
      payment_method: TYPESPAYMENT.CASH,
      address: inputOrderInfoReceive.address as string,
      note: inputOrderInfoReceive.note as string,
      status: STATUS_ORDER.PROCESSING,
      name: currentUser.name,
      phone: inputOrderInfoReceive.numberphone,
    };
    postOrder(orderNeedPost);
  };

  const isValidOrder = () => {
    if (
      inputOrderInfoReceive.address &&
      inputOrderInfoReceive.numberphone &&
      productItem &&
      isValidPhone(inputOrderInfoReceive.numberphone)
    ) {
      handleCreateOrder(productItem);
    } else if (
      !inputOrderInfoReceive.address &&
      inputOrderInfoReceive.numberphone
    ) {
      snackBarIfInvalidOrder("Vui lòng nhập địa chỉ nhận hàng");
    } else if (
      !inputOrderInfoReceive.numberphone &&
      inputOrderInfoReceive.address
    ) {
      snackBarIfInvalidOrder("Vui lòng nhập SĐT người nhận");
    } else if (
      !inputOrderInfoReceive.address &&
      !inputOrderInfoReceive.numberphone
    ) {
      snackBarIfInvalidOrder("Vui lòng nhập thông tin nhận hàng");
    } else if (
      inputOrderInfoReceive.address &&
      inputOrderInfoReceive.numberphone &&
      !isValidPhone(inputOrderInfoReceive.numberphone)
    ) {
      snackBarIfInvalidOrder("Số điện thoại không hợp lệ");
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
          <TotalPaymentAndOrder
            onClick={isValidOrder}
            totalPayment={totalPayment}
          />
        </Page>
      )}
    </>
  );
};

export default OrderDetail;
