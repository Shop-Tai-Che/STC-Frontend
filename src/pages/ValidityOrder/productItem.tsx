import { primaryColor } from "@utils/helper/config";
import React from "react";
import { Button } from "zmp-ui";

const ProductItem = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer   duration-300 ">
      <div className=" items-start gap-5 grid grid-cols-4 p-4">
        <div className=" mb-2.5 col-start-1 col-span-1">
          <img
            className=" w-24 h-24 rounded-xl"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
        <div className="flex flex-col items-start col-start-2 col-span-full ">
          <div className="font-medium no-underline mb-5">
            Túi xách tote từ quần jeans nhà làm vô cùng chất lượng
          </div>
          <div className="flex justify-between w-full">
            <span className="subtitle text-slate-500">1 Sản phẩm</span>
            <span className="subtitle text-slate-500">Thanh toán: 332.213</span>
          </div>
        </div>
        <div className="col-start-1 col-span-full flex justify-end">
          <Button
            size="small"
            className="w-fit"
            style={{ backgroundColor: primaryColor }}
          >
            Xác nhận đơn hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
