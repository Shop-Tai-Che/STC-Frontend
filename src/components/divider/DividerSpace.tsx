import React from "react";
import { Box } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

const DividerSpace: React.FC<
  { size?: number; className?: string } & BoxProps
> = ({ size = 5, ...props }) => {
  return (
    <Box
      style={{
        minHeight: size,
        marginTop: "8px",
        marginBottom: "8px",
        backgroundColor: "#f4f5f6",
      }}
      {...props}
    />
  );
};

export default DividerSpace;
