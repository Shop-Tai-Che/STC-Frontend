import React from "react";
import { List, Text, Page, Icon, useNavigate, Input, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { searchFilterChange, statusFilterChange } from "../redux/FilterSlice";
import UserCard from "../components/user-card";
import BannerImage from "../assets/images/banner.png";

const HomePage: React.FunctionComponent = () => {
  const count = useAppSelector((state) => state);
  console.log(count);
  const assdas: string = "asdasdasdas";
  const dispatch = useAppDispatch();

  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  
  return (
    <Page className="page">
    </Page>
  );
};

export default HomePage;
