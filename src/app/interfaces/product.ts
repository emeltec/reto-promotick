export interface IProduct {
  id: number;
  brand: string;
  title: string;
  points: number;
  price: number;
  discount?: number;
}

export interface IProductCart extends IProduct {
  quantity?: number
}