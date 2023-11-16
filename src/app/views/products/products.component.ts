import { Component, OnInit } from '@angular/core';
import { DATA_PRODUCTOS } from 'src/app/data/productos.data';
import { IProduct, IProductCart } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:IProduct[] = [];

  constructor(private service: CartService) { }

  ngOnInit() {
    this.products = DATA_PRODUCTOS
  }

  addProduct(product: IProduct) {
    let prodCart: IProductCart = {...product, quantity: 1}
    this.service.addProduct(prodCart);
  }

}
