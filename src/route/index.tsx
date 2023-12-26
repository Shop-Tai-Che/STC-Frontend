import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Box, ZMPRouter } from "zmp-ui";
import Store from "../redux/store";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import {
  HomePage,
  OrderDetailPage,
  DetailProductPage,
  StatusOrderPage,
} from "../pages";
import TabMe from "@pages/TabMe/TabMe";
import SellerProfile from "@pages/Seller/SellerProfile/SellerProfile";

const MainRoute = () => {
  return (
    <ZMPRouter>
      <Provider store={Store}>
        <Box className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/product-detail/:idProduct"
              element={<DetailProductPage />}
            />
            <Route path="/order" element={<OrderDetailPage />} />
            <Route
              path="/status-order/:idOrder"
              element={<StatusOrderPage />}
            />
            <Route path="/tab-me" element={<TabMe />} />
            <Route path="/seller-profile" element={<SellerProfile />} />
          </Routes>
          <BottomNavigationComponent />
        </Box>
      </Provider>
    </ZMPRouter>
  );
};

export default MainRoute;
