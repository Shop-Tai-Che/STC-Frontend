import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { ProductList } from "@utils/type";

export const GetAllPopularProducts = () => {
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);
  const [products, setProducts] = useState<ProductList>();

  const getRes = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const response = await fetch(
        `${import.meta.env.VITE_API_SUGGESTION}?page=0&pageSize=10`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resData = await response.json();
      setProducts(resData);
      console.log(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [products, fetchState, getRes] as const;
};
