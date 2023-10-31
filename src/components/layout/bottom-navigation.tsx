import React, { useState } from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";

const BottomNavigationComponent = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
  return (
 
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="chat"
          label="Cửa hàng"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
        />
        <BottomNavigation.Item
          label="Cá nhân"
          key="contact"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        /> 
      </BottomNavigation> 
  );
};

export default BottomNavigationComponent;
