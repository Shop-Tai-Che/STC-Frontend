import React from "react";
import { List, Text, Page, Icon, useNavigate, Input, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { searchFilterChange, statusFilterChange } from "../redux/FilterSlice";
import { Suspense } from "react";
import BannerImage from "../assets/images/banner.png";
import SearchProduct from "../components/common/SearchProduct";
import { Divider } from "../components/common/DriverDividion"; 
import { RootState } from "../redux/store"; 


const HomePage: React.FunctionComponent = () => {
  const incrementAmountValue ="11111111111"
  useAppDispatch(searchFilterChange(incrementAmountValue));
  const count = useAppSelector((state:RootState) => state.filters);
  console.log(count)
  const categories =[
    {
      id:1,
      name:"dasdas"
    },
    {
      id:2,
      name:"dasdas"
    },
    {
      id:2,
      name:"dasdas"
    },
    
  ]
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Box className="flex-1 overflow-auto">
        <Box className="bg-amber-700 m-0  ">
          <img className="w-screen h-auto " src={BannerImage} />
        </Box>

        <SearchProduct />
        <Suspense>
        <Box className="bg-white grid grid-cols-2 gap-4 p-4">
            
          </Box>
        </Suspense>
        <Divider/>
        <Box mt={6}>
          <Text.Title size="small">Được yêu thích</Text.Title>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;
