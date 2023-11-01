import React from "react";
import { Page, Box } from "zmp-ui";
import BannerHome from "../components/common/BannerHome";
import SearchProduct from "../components/services/tmn_search";
import {
  ProductListSwipe,
  ProductListGrid,
} from "../components/services/tmn_product";
import Divider from "../components/common/DividerSpace";

const HomePage: React.FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <BannerHome />
        <SearchProduct />
        <ProductListSwipe />
        <Divider />
        <ProductListGrid />
      </div>
    </Page>
  );
};

export default HomePage;
