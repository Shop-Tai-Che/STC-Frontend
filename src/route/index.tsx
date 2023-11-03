import React from "react";
import { HomePage } from "../pages";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import Store from "../redux/store";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import DetailProductPage from "src/pages/DetailProductPage";

const MainRoute = () => {
  return (
    <ZMPRouter>
      <Provider store={Store}>
        <Box className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/product-detail"
              element={<DetailProductPage />}
            ></Route>
          </Routes>
          <BottomNavigationComponent />
        </Box>
      </Provider>
    </ZMPRouter>
  );
};

export default MainRoute;
