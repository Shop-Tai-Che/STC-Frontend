import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ZMPRouter } from "zmp-ui";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import {
  HomePage,
  OrderDetail,
  DetailProduct,
  StatusOrder,
  Profile,
  ValidityOrder,
  ShopDetail,
} from "../pages";
import TabMe from "@pages/TabMe/TabMe";
import SellerProfile from "@pages/Seller/SellerProfile/SellerProfile";
import ComfirmOrder from "@pages/ValidityOrder/comfirmOrder";
import useAuth from "../hooks/useAuth";
import useGetAppInfo from "../hooks/useGetAppInfo";
import { CreateUser } from "@services/UserServices";

const MainRoute = () => {
  const { login } = useAuth();
  const { getAppInfo } = useGetAppInfo();
  const [resCreateUser, fetchStatusUser, postUser] = CreateUser();

  const actionGetOrCreateUser = async (user) => {
    await postUser({
      name: user.name,
      avatar: user.avatar,
      zalo_id: user.id,
    });
  };
  useEffect(() => {
    login(actionGetOrCreateUser);
  }, []);

  getAppInfo();

  return (
<<<<<<< HEAD
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
=======
    <>
      {resCreateUser ? (
        <ZMPRouter>
          <Box className="flex-1 flex flex-col overflow-hidden">
            <Routes>
              <Route
                path="/"
                element={<HomePage currentUser={resCreateUser} />}
              />
              <Route
                path="/product-detail/:idProduct"
                element={<DetailProduct currentUser={resCreateUser} />}
              />
              <Route
                path="/order"
                element={<OrderDetail currentUser={resCreateUser} />}
              />
              <Route
                path="/status-order/:idOrder"
                element={<StatusOrder currentUser={resCreateUser} />}
              />
              <Route
                path="/profile"
                element={<Profile currentUser={resCreateUser} />}
              />
              <Route
                path="/validity-order"
                element={<ValidityOrder currentUser={resCreateUser} />}
              />
              <Route
                path="/confirm-order/:idOrder"
                element={<ComfirmOrder />}
              />
              <Route
                path="/shop-detail/:idShop"
                element={<ShopDetail currentUser={resCreateUser} />}
              />
            </Routes>
            <BottomNavigationComponent />
          </Box>
        </ZMPRouter>
      ) : (
        <> </>
      )}
    </>
>>>>>>> 7bb885d2926b98e801a1c0cbea5d35451cf7dcc0
  );
};

export default MainRoute;
