import React, { FC } from "react";
import { Box } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

const DividerSpace: FC<{ size?: number; className?: string } & BoxProps> = ({
  size = 8,
  ...props
}) => {
  return (
    <Box
      style={{
        minHeight: size,
        marginTop:"20px",
        marginBottom:"20px",
        backgroundColor: "#f4f5f6",
      }}
      {...props}
    />
  );
};

export default DividerSpace;
