import React, { useEffect } from "react";
import { GetOrderByUser } from "@services/OrderServices/OrderProduct";
import { DividerSpace } from "@components/common";
import ProductItem from "./productItem";
import { useNavigate } from "react-router-dom";

const ViewStatusOrder: React.FC<{ userId: number }> = ({ userId }) => {
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByUser();

  useEffect(() => {
    getResGetOrder(userId);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {order &&
        order.map((orderItem, index) => {
          const onAction = () => {
            navigate(`/status-order/${orderItem.id}`);
          };
          return (
            <>
              <ProductItem
                image={orderItem?.Product.ProductMedia[0].url}
                name={orderItem.Product.title}
                price={orderItem.Product.price}
                status={orderItem.status}
                onActon={onAction}
              />
            </>
          );
        })}
    </>
  );
};

export default ViewStatusOrder;
