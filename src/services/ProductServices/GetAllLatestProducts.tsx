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
        'http://54.251.11.200:5000/api/v1/product?page=0&pageSize=10',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
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
