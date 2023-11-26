import React, { FC, useMemo, useState } from "react";
import { MenuItem } from "@utils/type";
import { BottomNavigation, Icon } from "zmp-ui";
import { useVirtualKeyboardVisible } from "@utils/hooks";
import { useLocation, useNavigate } from "react-router";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
    activeIcon: <Icon icon="zi-home" />,
  },
  "/profile": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
    activeIcon: <Icon icon="zi-user-solid" />,
  },
};

export type TabKeys = keyof typeof tabs;
export const NO_BOTTOM_NAVIGATION_PAGES = [
  "/product-detail/",
  "/search",
  "/order",
  "/status-order",
];

const BottomNavigationComponent: FC = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();
  const notBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.some((page) =>
      location.pathname.startsWith(page)
    );
  }, [location]);

  if (notBottomNav || keyboardVisible) {
    return <></>;
  }
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
    >
      {Object.keys(tabs).map((path: TabKeys) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
