import React from "react";
import { Page } from "zmp-ui";
import { BannerHome, DividerSpace } from "@components/common";
import SearchProduct from "@components/services/tmn_search";
import {
  ProductListSwipe,
  ProductListGrid,
} from "@components/services/tmn_product";

const HomePage: React.FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <BannerHome />
        <SearchProduct />
        <ProductListSwipe />
        <DividerSpace />
        <ProductListGrid />
      </div>
    </Page>
  );
};

export default HomePage;
