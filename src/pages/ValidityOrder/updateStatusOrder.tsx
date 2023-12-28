import React, { useEffect } from "react";
import { GetOrderByShopId } from "@services/OrderServices/OrderProduct";
import { DividerSpace } from "@components/common";
import ProductItem from "./productItem";
import { useNavigate } from "react-router-dom";

const UpdateStatusOrder: React.FC<{ shopId: number }> = ({ shopId }) => {
  const  [order, fetchStateOrder, getResGetOrder] = GetOrderByShopId();

  useEffect(() => {
    getResGetOrder(shopId);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {order &&
        order.map((orderItem, index) => {
          const onAction = () => {
            navigate(`/confirm-order/${orderItem.id}`);
          };
          return (
            <>
              <ProductItem
                image={orderItem?.Product.ProductMedia[0].url}
                name={orderItem.Product.title}
                price={orderItem.Product.price}
                status={orderItem.status}
                onActon={onAction}
                isSeller
              />
            </>
          );
        })}
    </>
  );
};

export default UpdateStatusOrder;
