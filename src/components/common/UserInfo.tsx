import React from "react";
import { Page, List, Icon, Avatar, Box, Text } from "zmp-ui";

// Define the props type
interface UserInfoProps {
  flexDirectionProp: "row" | "column" | "row-reverse" | "column-reverse";
  alignItemsProp:
    | "initial"
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | undefined;
  classNameProp?: string;
  avatarSource: string;
  avatarSize: number;
  userNameSize:
    | "small"
    | "xLarge"
    | "large"
    | "normal"
    | "xSmall"
    | "xxSmall"
    | "xxxSmall"
    | "xxxxSmall"
    | undefined;
  userName: string | object | undefined;
  userInfoStyle: object;
  userInfoContentStyle: object;
  userInfoType: "buyer-profile" | "seller-profile";
  subTitleSize?:
    | "small"
    | "xLarge"
    | "large"
    | "normal"
    | "xSmall"
    | "xxSmall"
    | "xxxSmall"
    | "xxxxSmall"
    | undefined;
  subTitleStyle?: object;
  subTitle?: string | object | undefined | null;
  onClickUserInfo?: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({
  flexDirectionProp,
  alignItemsProp,
  classNameProp,
  avatarSource,
  avatarSize,
  userName,
  userNameSize,
  userInfoStyle,
  userInfoContentStyle,
  userInfoType,
  subTitleSize,
  subTitleStyle,
  subTitle,
  onClickUserInfo,
}) => {
  return (
    <>
      <Box
        flex
        flexDirection={flexDirectionProp}
        alignItems={alignItemsProp}
        className={classNameProp}
        style={userInfoStyle}
        onClick={onClickUserInfo}
      >
        <div>
          <Avatar src={avatarSource} size={avatarSize} />
        </div>
        <div style={userInfoContentStyle}>
          <Text size={userNameSize} bold={true} style={{ marginBottom: 4 }}>
            {userName}
          </Text>
          {userInfoType == "buyer-profile" ? null : (
            <Text size={subTitleSize} style={subTitleStyle}>
              {subTitle}
            </Text>
          )}
        </div>
      </Box>
    </>
  );
};

export default UserInfo;
