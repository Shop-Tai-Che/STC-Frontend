import React from "react";
import { Route, Routes } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, Box } from "zmp-ui";
import Store from "../redux/store";
import { Provider } from "react-redux";
import BottomNavigationComponent from "../components/layout/bottom-navigation";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";


const MyApp = () => { 
  return (
    <Provider store={Store}> 
        <Box className="flex-1 flex flex-col overflow-hidden">
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes> 
                <Route path="/" element={<HomePage></HomePage>}></Route> 
              </AnimationRoutes>
              <BottomNavigationComponent />
            </ZMPRouter>
          </SnackbarProvider>
        </Box> 
    </Provider>
  );
};
export default MyApp;
