import { Component, OnInit } from '@angular/core';
import { counterProducts } from 'src/app/functions/counter';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  constructor(private service: CartService) { }

  totalProducts: number = 0;

  ngOnInit() {
    this.service.getProducts().subscribe(products => {
      this.totalProducts = counterProducts(products);
    })
  }

}
