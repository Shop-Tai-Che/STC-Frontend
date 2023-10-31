import React from "react";
import { Page, Box } from "zmp-ui";
import BannerHome from "../components/common/BannerHome";
import SearchProduct from "../components/services/tmn_search";

const HomePage: React.FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Box className="flex-1 overflow-auto">
        <BannerHome />
        <SearchProduct />
      </Box>
    </Page>
  );
};

export default HomePage;
