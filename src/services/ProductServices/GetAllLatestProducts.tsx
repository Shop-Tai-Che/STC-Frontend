import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { ProductList } from "@utils/type";

export const GetAllLatestProduct = () => {
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
  const [products, setProducts] = useState<ProductList>();
  const getRes = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL_PRODUCT}?page=0&pageSize=10`
      );
      const resData = res.data as ProductList;
      setProducts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };
  return [products, fetchState, getRes] as const;
};