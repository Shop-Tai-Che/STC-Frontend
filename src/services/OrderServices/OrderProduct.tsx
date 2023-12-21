import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Order } from "@utils/type";

export const GetOrderByOrderId = () => {
  const [fetchStateOrder, setFetchStateOrder] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const [order, setOrder] = useState<Order>();
  const getResGetOrder = async (orderId: string) => {
    try {
      setFetchStateOrder(FetchState.LOADING);
      const res = await axios.get(
        `${import.meta.env.VITE_API_ORDER}/${orderId}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      const resData = res.data as Order;
      setOrder(resData);
      setFetchStateOrder(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchStateOrder(FetchState.ERROR);
    }
  };
  return [order, fetchStateOrder, getResGetOrder] as const;
};

export const CreateOrder = () => {
  const [fetchStatusOrder, setFetchStatusOrder] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const [resCreateOrder, setResCreateOrder] = useState<Order | null>(null);
  const postOrder = async (order: Order) => {
    try {
      setFetchStatusOrder(FetchState.LOADING);
      const res = await axios.post(`${import.meta.env.VITE_API_ORDER}`, order);
      setFetchStatusOrder(FetchState.SUCCESS);
      setResCreateOrder(res.data.order);
    } catch (error) {
      console.log(error);
      setFetchStatusOrder(FetchState.ERROR);
    }
  };
  return [resCreateOrder, fetchStatusOrder, postOrder] as const;
};
