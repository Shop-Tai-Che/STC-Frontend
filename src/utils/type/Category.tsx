import {
  FashionSvg,
  WcSvg,
  BusinessSvg,
  DecorationSvg,
  AccessorySvg,
} from "@assets/svg/index";
import { primaryColor } from "@utils/helper/config";

const iconWH = {
  iconWidth: 24,
  iconHeight: 24,
};

export const ProductCategory = [
  {
    id: 3,
    name: "Thời trang",
    cover: (
      <FashionSvg
        svgColor={primaryColor}
        iconWidth={iconWH.iconWidth}
        iconHeight={iconWH.iconHeight}
      />
    ),
    tag: "fashion",
  },
  // {
  //   id: 4,
  //   name: "Vệ sinh",
  //   cover: (
  //     <WcSvg
  //       svgColor={primaryColor}
  //       iconWidth={iconWH.iconWidth}
  //       iconHeight={iconWH.iconHeight}
  //     />
  //   ),
  //   tag: "wc",
  // },
  // {
  //   id: 2,
  //   name: "Văn phòng",
  //   cover: (
  //     <BusinessSvg
  //       svgColor={primaryColor}
  //       iconWidth={iconWH.iconWidth}
  //       iconHeight={iconWH.iconHeight}
  //     />
  //   ),
  //   tag: "office",
  // },
  {
    id: 1,
    name: "Phụ kiện",
    cover: (
      <AccessorySvg
        svgColor={primaryColor}
        iconWidth={iconWH.iconWidth}
        iconHeight={iconWH.iconHeight}
      />
    ),
    tag: "office",
  },
  // {
  //   id: 5,
  //   name: "Trang trí",
  //   cover: (
  //     <DecorationSvg
  //       svgColor={primaryColor}
  //       iconWidth={iconWH.iconWidth}
  //       iconHeight={iconWH.iconHeight}
  //     />
  //   ),
  //   tag: "office",
  // },
];
