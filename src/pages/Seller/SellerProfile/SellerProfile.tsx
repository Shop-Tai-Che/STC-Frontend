import React from "react";
import { Page, List, Icon, Avatar, Box, Text } from "zmp-ui";
import { useParams } from "react-router-dom";
import AppLogo from '../../../assets/Branding/App-Logo-v.1.png'
import './SellerProfile.css'
import UserInfo from "@components/common/UserInfo";
import SellerOrderEntry from '@components/common/SellerOrderEntry'

const SellerProfile: React.FC = () => {
  let productCount = 2;
  let totalReviewCount = 10;
  let orderCount = 3;
  let notReplyReview = 3;

  return (
    <Page>
      <UserInfo
        flexDirectionProp='row'
        alignItemsProp='center'
        userName='Seller name here'
        avatarSize={48}
        avatarSource={AppLogo}
        userInfoStyle={{
          backgroundColor: 'white',
          padding: '16px 12px 16px 12px', // Top & Bottom: 16px, Left & Right: 12px
        }}
        userInfoType='seller-profile'
        userInfoContentStyle={{
          marginLeft: 8
        }}
        subTitle={`${productCount} sản phẩm ${totalReviewCount} đánh giá`}
        subTitleStyle={{
          color: '#767A7F'
        }}
      />
      <Box
        flex
        flexDirection='column'
        style={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: '16px 12px 16px 12px', // Top & Bottom: 16px, Left & Right: 12px
        }}
      >
        <Text size='xLarge' bold>
          Đơn hàng của bạn
        </Text>
        <Box
          flexDirection='row'
          alignItems='center'
          style={{ width: '100%', marginTop: 12 }} // Make the parent Box take full width of the screen
        >
          <SellerOrderEntry
            statusContent='Chờ xác nhận'
            statusCount={orderCount}
          />
          <SellerOrderEntry
            statusContent='Đánh giá'
            statusCount={notReplyReview}
          />
        </Box>

      </Box>
      <Box
        flex
        flexDirection='column'
        style={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: '16px 12px 16px 12px', // Top & Bottom: 16px, Left & Right: 12px
        }}
      >
        <Box
          flexDirection='row'
          alignItems='center'
          style={{ width: '100%' }}
        >
          <Text size='xLarge' bold style={{ flex: 1 }}>
            Danh sách sản phẩm
          </Text>
          <Icon icon='zi-plus-circle' />
        </Box>
        <Box
          flexDirection='row'
          alignItems='center'
          style={{ width: '100%' }}
        >
          {/* TO DO: UI Product Seller đăng bán */}
        </Box>
      </Box>
    </Page >
  )
}

export default SellerProfile;