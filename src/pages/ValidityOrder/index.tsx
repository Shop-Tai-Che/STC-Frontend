import { DividerSpace } from "@components/common";
import ProductItem from "./productItem";
import React from "react";
import { UserFetch } from "@utils/type/User";

const ValidityOrder: React.FC<{ currentUser: UserFetch }> = ({
  currentUser,
}) => {
  return (
    <div className="bg-white">
      {currentUser.is_seller ? (
        <> </>
      ) : (
        <>
          <DividerSpace />
          <ProductItem />

          <ProductItem />
          <ProductItem />
        </>
      )}
    </div>
  );
};

export default ValidityOrder;
