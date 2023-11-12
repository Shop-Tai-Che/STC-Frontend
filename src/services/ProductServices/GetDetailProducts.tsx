import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Product } from "@utils/type";

export const GetDetailProduct = (idProduct: string) => {
  const [fetchStateDetailProduct, setFetchStateDetailProduct] =
    useState<FetchState>(FetchState.DEFAULT);
  const [productItem, setProductItem] = useState<Product>();
  const getResDetailProduct = async () => {
    try {
      setFetchStateDetailProduct(FetchState.LOADING);
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL_PRODUCT}/${idProduct}`
      );

      const resData = res.data.data as Product;
      setProductItem(resData);
      setFetchStateDetailProduct(FetchState.SUCCESS);
    } catch (error) {
      setFetchStateDetailProduct(FetchState.ERROR);
    }
  };
  return [productItem, fetchStateDetailProduct, getResDetailProduct] as const;
};
