import React from "react";
import { Box, Text } from "zmp-ui";

interface SellerOrderEntryProps {
  statusCount: number;
  statusContent: string;
}

const SellerOrderEntry: React.FC<SellerOrderEntryProps> = ({
  statusCount,
  statusContent
}) => {
  return (
    <Box
      flexDirection='column'
      alignItems='center'
      style={{
        flex: 1,
        padding: '16px 8px 16px 8px',
        marginRight: 6,
        backgroundColor: '#EAEBED',
        borderRadius: 4
      }}
    >
      <Text size='large' bold>{statusCount}</Text>
      <Text size='small'>{statusContent}</Text>
    </Box>
  )
}

export default SellerOrderEntry