import React from "react";
import { Input, Box } from "zmp-ui";

const SearchProduct: React.FunctionComponent = () => {
  return (
    <Box p={4} className="bg-white">
      <Input.Search
        label="Label"
        helperText="Helper text"
        placeholder="Tên sản phẩm..."
        clearable
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </Box>
  );
};

export default SearchProduct;
