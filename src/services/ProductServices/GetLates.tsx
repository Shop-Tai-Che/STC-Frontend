import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { ProductList } from "@utils/type";

const GetProductLatest = () => {
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
  const [products, setProducts] = useState<ProductList>();
  const getRes = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get(
        `${import.meta.env.VITE_API_PRODUCT}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
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

export default GetProductLatest;
