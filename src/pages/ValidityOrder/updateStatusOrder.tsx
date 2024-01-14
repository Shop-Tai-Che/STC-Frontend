import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetOrderByShopId } from "@services/OrderServices";
import ProductItem from "./productItem";

const UpdateStatusOrder: React.FC<{ shopId: number }> = ({ shopId }) => {
  const [order, fetchStateOrder, getResGetOrder] = GetOrderByShopId();
  const navigate = useNavigate();

  useEffect(() => {
    getResGetOrder(shopId);
  }, []);

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
                key={index}
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
