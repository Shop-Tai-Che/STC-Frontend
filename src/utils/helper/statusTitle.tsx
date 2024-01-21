import { STATUS_ORDER } from "@utils/type";

export const statusTitle = (statusType) => {
  switch (statusType) {
    case STATUS_ORDER.PROCESSING:
      return "Chờ xác nhận";
    case STATUS_ORDER.DELIVERING:
      return "Đang giao hàng";
    case STATUS_ORDER.SUCCESS:
      return "Đã nhận hàng";
    case STATUS_ORDER.CANCELED:
      return "Đã hủy đơn";
  }
};
