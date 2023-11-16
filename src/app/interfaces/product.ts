export interface IProduct {
  id: number;
  brand: string;
  title: string;
  points: number;
  price: number;
  discount?: number;
}