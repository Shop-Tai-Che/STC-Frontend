import React from "react";
import { Text } from "zmp-ui";

const ProductShortageItem: React.FC = () => {
  return (
    <div className="flex items-center p-2 h-28 gap-5">
      <img
        src="https://momoshop.com.vn/wp-content/uploads/2020/06/tui-xach-1.jpg"
        alt="Product Image"
        className="w-28 object-contain rounded-lg"
      />
      <div className=" h-full flex flex-col justify-between">
        <Text size="normal" className="m-0 p-0">
          Túi xách tote từ quần jeans nhà làm vô cùng chất lượng
        </Text>
        <div className="flex justify-between">
          <Text size="normal">đ300.000</Text>
          <Text size="normal">x1</Text>
        </div>
      </div>
    </div>
  );
};

export default ProductShortageItem;
