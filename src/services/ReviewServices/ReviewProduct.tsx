import axios from "axios";
import { useState } from "react";
import { FetchState } from "@utils/type/FetchState";
import { Review } from "@utils/type";

export const GetReviewsByProductId = (productId: string) => {
  const [fetchStateListReview, setFetchStateListReview] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const [reviews, setReview] = useState<Review[]>([]);
  const getResGetListReview = async () => {
    try {
      setFetchStateListReview(FetchState.LOADING);
      console.log("sadas")
      const res = await axios.get(
        `${import.meta.env.VITE_API_REVIEW}?productId=${productId}`
       
      );
      const resData = res.data.reviews as Review[];
      setReview(resData);
      setFetchStateListReview(FetchState.SUCCESS);
    } catch (error) {
      console.log(error," error")
      setFetchStateListReview(FetchState.ERROR);
    }
  };
  return [reviews, fetchStateListReview, getResGetListReview] as const;
};

export const PostReview = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchState>(
    FetchState.DEFAULT,
  );
  const postReview = async (review: Review) => {
    try {
      setFetchStatus(FetchState.LOADING); 
      console.log()
      const res = await axios.post(
        `${import.meta.env.VITE_API_REVIEW}`.replace(" ",""),
        review 
      );
      console.log(res.data)
      setFetchStatus(FetchState.SUCCESS);
    } catch (error) {
      setFetchStatus(FetchState.ERROR);
    }
  };
  return [fetchStatus, postReview] as const;
};
