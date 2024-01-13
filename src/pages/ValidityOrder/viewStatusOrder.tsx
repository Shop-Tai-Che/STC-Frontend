import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetOrderByUserId } from "@services/OrderServices";
import ProductItem from "./productItem";
import OrderSuccess from "@pages/OrderSuccess";
import { EmptyOrderSvg } from "@assets/svg";
import { Text } from "zmp-ui";
import EmptyOrderHistory from "@pages/StatusOrder/EmptyOrderHistory";
import { FetchState } from "@utils/type";

const ViewStatusOrder: React.FC<{ userId: number }> = ({ userId }) => {
  const navigate = useNavigate();
  const [isNoOrder, setIsNoOrder] = useState<boolean>(true);
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByUserId();

  useEffect(() => {
    getResGetOrder(userId);
  }, []);
  console.log(
    "User Order History",
    order,
    "and fetchStateOrder",
    fetchStateOrder
  );

  useEffect(() => {
    // Check the fetchStateOrder to determine if the API request has completed.
    if (order && order.length > 0) {
      setIsNoOrder(false);
    } else {
      setIsNoOrder(true);
    }
  }, [fetchStateOrder, order]);

  return (
    <>
      {isNoOrder ? (
        <>
          <EmptyOrderHistory />
        </>
      ) : (
        order?.map((orderItem, index) => {
          const onAction = () => {
            navigate(`/status-order/${orderItem.id}`);
          };
          return (
            <>
              <ProductItem
                key={index}
                image={orderItem?.Product.ProductMedia[0].url}
                name={orderItem.Product.title}
                price={orderItem.Product.price}
                status={orderItem.status}
                onActon={onAction}
              />
            </>
          );
        })
      )}
    </>
  );
};

export default ViewStatusOrder;
