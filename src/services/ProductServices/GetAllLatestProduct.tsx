import axios from "axios";
import { useState } from "react";
import { FetchState, Product } from "@utils/type";

export const GetAllLatestProduct = () =>{
  const [ fetchState, setFetchState ] = useState(FetchState.DEFAULT)
  const [ products, setProducts ] = useState<Array<Product>>([])

  const getRes =async ()=>{
    try{
      setFetchState(FetchState.LOADING)
      
      const res = await axios.get("http://localhost:5000/api/v1/product?page=0&pageSize=10")
      const resData = res.data as Array<Product>;
      setProducts(resData);
      setFetchState(FetchState.SUCCESS)
    }catch(error){
      setFetchState(FetchState.ERROR)
    }
  };

  return [ products, fetchState, getRes] as const;
}