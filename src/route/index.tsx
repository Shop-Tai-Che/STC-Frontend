import React from "react";
import {HomePage} from "../pages";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Box, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import Store from "../redux/store";

const MainRoute = () => { 
  return (
    <Provider store={Store}> 
      <Box className="flex-1 flex flex-col overflow-hidden">
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes> 
              <Route path="/" element={<HomePage></HomePage>}></Route> 
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </Box> 
  </Provider>
  );
};

export default MainRoute;
