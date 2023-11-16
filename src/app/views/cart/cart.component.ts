import { Component, OnInit } from '@angular/core';
import { DATA_PRODUCTOS } from 'src/app/data/productos.data';
import { calculateTotal, calculateTotalMillas } from 'src/app/functions/calculate';
import { counterProducts } from 'src/app/functions/counter';
import { IProduct, IProductCart } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:IProduct[] = [];

  totalPrice: number = 0.00;

  totalMillas: number = 0;

  totalProducts: number = 0;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(products => {
      this.products = products;
      this.totalPrice = calculateTotal(products);
      this.totalProducts = counterProducts(products);
      this.totalMillas = calculateTotalMillas(products);
    });
  }

  addOne(product: IProductCart) {
    this.service.addProduct(product);
  }

  deleteOne(id: number) {
    this.service.deleteOne(id);
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id);
  }

  deleteAllProduct() {
    this.service.deleteAllProducts();
  }

}
