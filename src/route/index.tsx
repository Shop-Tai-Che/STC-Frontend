import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ZMPRouter } from "zmp-ui";
import { FetchState } from "../utils/type/FetchState";
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
import ComfirmOrder from "@pages/ValidityOrder/comfirmOrder";
import useAuth from "../hooks/useAuth";
import useGetAppInfo from "../hooks/useGetAppInfo";
import { CreateUser } from "@services/UserServices";
import OrderSuccess from "@pages/OrderSuccess";
import HomeFromCate from "@pages/HomeFromCate";
import NoPermission from "@pages/NoPermission";
import { CheckSvg } from "@assets/svg";

const MainRoute = () => {
  const [isNoPermission, setIsNoPermission] = useState<boolean>(false);
  const { login } = useAuth({ setIsNoPermission });
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
  console.log(
    fetchStatusUser == FetchState.DEFAULT,
    fetchStatusUser,
    isNoPermission,
    resCreateUser
  );
  return (
    <>
      <ZMPRouter>
        <Box className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            {isNoPermission ? (
              <Route
                path="/"
                element={<NoPermission isAskingPermisson={false} />}
              />
            ) : resCreateUser == null ? (
              <></>
            ) : (
              <>
                <>
                  <Route
                    path="/"
                    element={<HomePage currentUser={resCreateUser} />}
                  />
                  <Route
                    path="/home-from-cate/:idTag"
                    element={<HomeFromCate />}
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
                    path="/validity-order/:userState"
                    element={<ValidityOrder currentUser={resCreateUser} />}
                  />
                  <Route
                    path="/confirm-order/:idOrder"
                    element={<ComfirmOrder />}
                  />
                  <Route
                    path="/confirm-order-success/:idOrder"
                    element={
                      <OrderSuccess
                        iconProp={<CheckSvg />}
                        mainTitle="Đặt hàng thành công"
                        hasPrimaryButton={true}
                        hasSecondaryButton={true}
                        primaryButtonTitle="Xem đơn hàng"
                        secondaryButtonTitle="Mua hàng tiếp"
                        onClickPrimaryButton={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                      />
                    }
                  />
                  <Route
                    path="/shop-detail/:idShop"
                    element={<ShopDetail currentUser={resCreateUser} />}
                  />
                </>
              </>
            )}
          </Routes>
          {fetchStatusUser == FetchState.SUCCESS && resCreateUser && (
            <BottomNavigationComponent />
          )}
        </Box>
      </ZMPRouter>
    </>
  );
};

export default MainRoute;
