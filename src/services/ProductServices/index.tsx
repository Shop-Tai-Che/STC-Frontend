import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Product } from "../../utils/type/Product";
import { PrioritiesFilterChange } from "../../redux/FilterSlice";

 const GetProdcutLovest = () => {
  const ProductMockAPI: Product[] =[
    {
      id:1,
      name:"Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8e5kkcxwwoc3",
      price: 30000,
      categoryId: ["giày dép", "quần áo"],
      description: "[Mã FATREND2810 giảm đến 30k tối đa 99k] Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize - KR63",
      
    },
    {
      id:2,
      name:"Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8e5kkcxwwoc3",
      price: 30000,
      categoryId: ["giày dép", "quần áo"],
      description: "[Mã FATREND2810 giảm đến 30k tối đa 99k] Áo Thun Phối Bóng Đá Karants Local Brand Hot Trend Form Oversize - KR63",
      
    }
  ]
  useAppDispatch(PrioritiesFilterChange(ProductMockAPI))
  
};
