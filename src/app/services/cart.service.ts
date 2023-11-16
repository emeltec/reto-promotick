import { Injectable } from '@angular/core';
import { IProductCart } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsCart$ = new BehaviorSubject<IProductCart[]>([]);

  constructor() {
    let prodsStorage = localStorage.getItem('prods');
    if(prodsStorage) {
      this.productsCart$.next(JSON.parse(prodsStorage));
    }
  }

  getProducts() {
    return this.productsCart$.asObservable();
  }

  private setProducts(products: IProductCart[]) {
    this.productsCart$.next([...products]);
    localStorage.setItem('prods', JSON.stringify(products));
  }

  addProduct(product: IProductCart) {
    let prodsCart = this.productsCart$.getValue();
    let prod = prodsCart.find(prod => prod.id === product.id);
    if(prod) {
      prod.quantity += 1;
      this.setProducts([...prodsCart]);
    } else {
      this.setProducts([...prodsCart, product])
    }
  }

  deleteOne(id:number) {
    let prods = this.productsCart$.getValue();
    let prod = prods.find(prod => prod.id === id);
    prod!.quantity -= 1;

    if(prod!.quantity === 0) {
      prod!.quantity = 1;
    }
    this.setProducts([...prods]);
  }

  deleteProduct(id: number) {
    let prods = this.productsCart$.getValue().filter(prod => prod.id !== id);
    this.setProducts([...prods]);
  }

  deleteAllProducts() {
    this.setProducts([]);
  }

}
