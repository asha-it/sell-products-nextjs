export interface IProduct {
  no: string;
  name: string;
  price: number;
  detail: string;
  quantity?: number;
}
export interface IOrder {
  no: string;
  cusName: string;
  product: IProduct[];
}
