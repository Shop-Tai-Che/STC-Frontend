import { PackageSvg } from "@assets/svg";
import { DividerSpace, DividerSpaceLine } from "@components/common";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Page, Text, List, Box, Avatar, Icon,  } from "zmp-ui"; 
import getDataToStorage from "@store/getStorage";
import { getCurrentUser } from "@store/action";
import { UserFetch } from "@utils/type/User";

const Profile: React.FC<{currentUser: UserFetch}> = ({currentUser}) => {
  const profileTreeList = [
    {
      title: "Lịch sử đơn hàng",
      icon: <PackageSvg />,
      link: "/validity-order",
    },
    {
      title: "Đăng kí bán hàng",
      icon: <PackageSvg />,
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdvVTuVI65xencwFUtT-OquDJSq0UjSTe6vS0gQn8AJIoFCVQ/viewform",
      description: "Điền thông tin qua Google Form",
    },
  ];
  

  const fetchData = async () => {
    try {
      const userData = await getDataToStorage(getCurrentUser());
      console.log(userData); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  

  
  return (
    <div className="max-w-2xl mx-auto bg-white">
 
        <DividerSpace />
        <div className="flex flex-col gap-1 text-center justify-center items-center">
          <Avatar
            size={80}
            src={currentUser.avatar}
          />
          <Text className="text-sm" size="large" bold>
            {currentUser.name}
          </Text>
        </div>
        <DividerSpace />
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="divide-y w-full">
            {profileTreeList &&
              profileTreeList.map((profileTreeItem, index) => {
                return (
                  <div
                    className="user-body flex mb-4 sm:mb-0 sm:mr-4 justify-between p-3"
                    key={index}
                  >
                    <div className="flex gap-5">
                      {profileTreeItem.icon}
                      <div className="flex flex-col items-start">
                        {profileTreeItem.href ? (
                          <a
                          target="_blank"
                            href={profileTreeItem.href}
                            className="title font-medium no-underline"
                          >
                            {profileTreeItem.title}
                          </a>
                        ) : (
                          <Link
                            to={profileTreeItem.link? profileTreeItem.link:""}
                            className="title font-medium no-underline"
                          >
                            {profileTreeItem.title}
                          </Link>
                        )}
                        {profileTreeItem.description && (
                          <p className="text-sm text-gray-500">
                            {profileTreeItem.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="skills flex flex-col">
                      <Icon icon="zi-chevron-right" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

    </div>
  );
};

export default Profile;
