import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import Store from "../redux/store";
import { Provider } from "react-redux";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";


const MyApp = () => { 
  return (
    <Provider store={Store}>
      <RecoilRoot>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
              </AnimationRoutes>
              <BottomNavigationComponent />
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </RecoilRoot>
    </Provider>
  );
};
export default MyApp;
