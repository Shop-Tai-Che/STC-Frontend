export enum TYPESPAYMENT {
  CASH = "CASH",
  BANKING = "BANKING",
}

export interface Payment {
  typePayment: TYPESPAYMENT.CASH | TYPESPAYMENT.BANKING;
  totalPrices: number;
}

