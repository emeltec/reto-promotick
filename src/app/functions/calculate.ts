import { IProductCart } from "../interfaces/product";

export const calculateTotal = (list: IProductCart[] = []) => {
  let total = 0.00;
  if(list.length > 0) {
    list.forEach(prod => {
      total += (prod.price * prod.quantity);
    })
    return parseFloat(total.toFixed(2));
  }
  return 0.00;
}

export const calculateTotalMillas = (list: IProductCart[] = []) => {
  let total = 0;
  if(list.length > 0) {
    list.forEach(prod => {
      total += (prod.points * prod.quantity)
    })
    return parseFloat(total.toFixed(0));
  }
  return 0;
}