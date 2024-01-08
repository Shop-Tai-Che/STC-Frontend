import React from "react";
import { Page } from "zmp-ui";
import { DividerSpace } from "@components/divider";
import { ProductListGrid } from "@components/product";
import { UserFetch } from "@utils/type/User";
import CategoryListSwipeContent from "@components/product/CategoryListSwipe";
import { useParams } from "react-router-dom";


const HomeFromCate: React.FC<{ currentUser: UserFetch }> = ({ currentUser }) => {
  const { idCate } = useParams()
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        {/* <SearchProduct /> */}
        <ProductListGrid tag={idCate} />
      </div>
    </Page>
  );
};

export default HomeFromCate;
