import { TYPESPAYMENT } from "./Payment";
import { STATUS_ORDER } from "./StatusOrder";

export interface Order {
  id?: number;
  user_id: number;
  product_id: number;
  shop_id: number;
  amount: number;
  payment_method: TYPESPAYMENT.CASH | TYPESPAYMENT.BANKING;
  address: string;
  note?: string;
  status:
    | STATUS_ORDER.PROCESSING
    | STATUS_ORDER.DELIVERING
    | STATUS_ORDER.WAIT_FOR_PAYMENT
    | STATUS_ORDER.CANCELED
    | STATUS_ORDER.SUCCESS;
}
