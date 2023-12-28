import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Order, OrderStatusFetch } from "@utils/type/Order";

export const GetOrderByOrderId = () => {
  const [fetchStateOrder, setFetchStateOrder] = useState<FetchState>(
    FetchState.DEFAULT
  );
  const [order, setOrder] = useState<OrderStatusFetch>();
  const getResGetOrder = async (orderId: string) => {
    try {
      setFetchStateOrder(FetchState.LOADING);

      const res = await axios.get(
        `${import.meta.env.VITE_API_ORDER}/${orderId}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const resData = res.data.data as OrderStatusFetch;
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
    FetchState.DEFAULT
  );
  const [resCreateOrder, setResCreateOrder] = useState<Order | null>(null);

  const postOrder = async (order: any) => {
    try {
      setFetchStatusOrder(FetchState.LOADING);
      const abc = order; 
      const url = `${import.meta.env.VITE_API_ORDER}`.replace(" ", "");
      console.log(url,order);
      const res = await axios.post(url, order);
      console.log(res.data);
      setFetchStatusOrder(FetchState.SUCCESS);
      setResCreateOrder(res.data.order);
    } catch (error) {
      console.log(error);
      setFetchStatusOrder(FetchState.ERROR);
    }
  };
  return [resCreateOrder, fetchStatusOrder, postOrder] as const;
};

export const updateStatusOrder = () => {
  const [fetchStatusOrder, setFetchStatusOrder] = useState<FetchState>(
    FetchState.DEFAULT
  );

  const updateStatus = async ({
    orderId,
    newStatus,
  }: {
    orderId: number;
    newStatus: string;
  }) => {
    try {
      setFetchStatusOrder(FetchState.LOADING);

      const url = `${import.meta.env.VITE_API_ORDER}/${orderId}`.replace(
        " ",
        ""
      );
      console.log(url, {
        newStatus,
      });
      const res = await axios.patch(url, {
        newStatus,
      });
      console.log(res.data);
      setFetchStatusOrder(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchStatusOrder(FetchState.ERROR);
    }
  };
  return [updateStatus, fetchStatusOrder] as const;
};


export const GetOrderByShopId = () => {
  const [fetchStateOrder, setFetchStateOrder] = useState<FetchState>(
    FetchState.DEFAULT
  );
  const [order, setOrder] = useState<OrderStatusFetch>();
  const getResGetOrder = async (shopId: string) => {
    try {
      setFetchStateOrder(FetchState.LOADING);

      const res = await axios.get(
        `${import.meta.env.VITE_API_ORDER}/shop?page=0&pageSize=10&shopId=${shopId}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const resData = res.data.data as OrderStatusFetch;
      setOrder(resData);
      setFetchStateOrder(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setFetchStateOrder(FetchState.ERROR);
    }
  };
  return [order, fetchStateOrder, getResGetOrder] as const;
};
