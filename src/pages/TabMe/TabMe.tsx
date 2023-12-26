import React from "react";
import { Page, List, Icon, Avatar, Box, Text } from "zmp-ui";
import { useParams } from "react-router-dom";
import { BusinessSvg, CatalogSvg } from "@assets/svg";
import './TabMe.css'
import AppLogo from '../../assets/Branding/App-Logo-v.1.png'
import UserInfo from "@components/common/UserInfo";

const TabMe: React.FC = () => {
  const { Item } = List;
  return (
    <Page
      hideScrollbar={true}>
      <UserInfo
        flexDirectionProp='column'
        alignItemsProp='center'
        userName='User name here'
        avatarSize={64}
        avatarSource={AppLogo}
        userInfoStyle={{
          backgroundColor: 'white',
          paddingTop: 16,
          paddingBottom: 16
        }}
        userInfoContentStyle={{
          marginTop: 8
        }}
      />
      <List
        noSpacing
        divider={true}
        style={{ backgroundColor: 'white', marginTop: 4 }}
      >
        <Item
          title="Lịch sử đơn hàng"
          prefix={<CatalogSvg />}
          suffix={<Icon icon="zi-chevron-right" />}
          className="tab-me__action__order-history"
        />
        <Item
          title="Đăng kí bán hàng"
          prefix={<BusinessSvg />}
          suffix={<Icon icon="zi-chevron-right" />}
          subTitle="Điền thông tin qua Google Form"
          className="tab-me__action__register-seller"

        />
      </List>
    </Page>
  );
};

export default TabMe;
