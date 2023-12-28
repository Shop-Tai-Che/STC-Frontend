import React, { useEffect } from "react";
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
  Profile,
  ValidityOrder,
} from "../pages";
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
    <>
      {resCreateUser ? (
        <ZMPRouter>
          <Provider store={Store}>
            <Box className="flex-1 flex flex-col overflow-hidden">
              <Routes>
                <Route
                  path="/"
                  element={<HomePage currentUser={resCreateUser} />}
                />
                <Route
                  path="/product-detail/:idProduct"
                  element={<DetailProductPage currentUser={resCreateUser} />}
                />
                <Route
                  path="/order"
                  element={<OrderDetailPage currentUser={resCreateUser} />}
                />
                <Route
                  path="/status-order/:idOrder"
                  element={<StatusOrderPage currentUser={resCreateUser} />}
                />
                <Route path="/profile" element={<Profile  currentUser={resCreateUser}/>} />
                <Route
                  path="/validity-order"
                  element={<ValidityOrder currentUser={resCreateUser} />}
                />
              </Routes>
              <BottomNavigationComponent />
            </Box>
          </Provider>
        </ZMPRouter>
      ) : (
        <> </>
      )}
    </>
  );
};

export default MainRoute;
