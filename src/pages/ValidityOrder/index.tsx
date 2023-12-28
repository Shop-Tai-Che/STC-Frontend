import { DividerSpace } from "@components/common";
import ProductItem from "./productItem";
import React from "react";
import { UserFetch } from "@utils/type/User";
import ViewStatusOrder from "./viewStatusOrder";
import UpdateStatusOrder from "./updateStatusOrder";

const ValidityOrder: React.FC<{ currentUser: UserFetch }> = ({
  currentUser,
}) => {
  return (
    <div className="bg-white">
      {currentUser.is_seller ? (
        <> 
        <UpdateStatusOrder shopId={currentUser.id} />

        </>
      ) : (
        <>
          <ViewStatusOrder userId={currentUser.id} />
        </>
      )}
    </div>
  );
};

export default ValidityOrder;
