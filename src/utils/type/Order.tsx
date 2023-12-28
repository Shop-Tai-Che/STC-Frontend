import { TYPESPAYMENT } from "./Payment";
import { ProductMedia } from "./Product";
import { STATUS_ORDER } from "./StatusOrder";

export interface Order {
  id: number;
  user_id: number;
  product_id: number;
  shop_id: number | null;
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


export interface OrderStatusFetch extends Order{
  status:STATUS_ORDER,
  Product:{
    title:string,
    price: number,
    ProductMedia : ProductMedia[]
  }
}
