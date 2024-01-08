import { FashionSvg, WcSvg, BusinessSvg } from '@assets/svg/index'
import { primaryColor } from '@utils/helper/config'

export const ProductCategory = [
  {
    id: 1,
    name: "Thời trang",
    cover: <FashionSvg svgColor={primaryColor} />,
    tag: 'fashion'
  },
  {
    id: 2,
    name: "Vệ sinh",
    cover: <WcSvg svgColor={primaryColor} />,
    tag: 'wc'
  },
  {
    id: 3,
    name: "Văn phòng",
    cover: <BusinessSvg svgColor={primaryColor} />,
    tag: 'office'
  },
]