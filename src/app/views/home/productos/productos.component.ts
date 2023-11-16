import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BREAKPOINTS } from 'src/app/config/breakpoints';
import { DATA_PRODUCTOS } from 'src/app/data/productos.data';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  products:IProduct[] = [];
  preview: number = 1;

  constructor(
    private router: Router
  ) { }

  // @HostListener('document:DOMContentLoaded', ['$event'])
  // onDomContentLoaded(event: Event) {
  //   this.resizeWidth();
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resizeWidth();
  }

  ngOnInit() {
    this.products = DATA_PRODUCTOS;
  }

  ngAfterViewInit() {
    this.resizeWidth();
  }

  viewCatalog() {
    this.router.navigate(['/productos'])
  }

  resizeWidth() {
    let value = window.innerWidth;
    if(value <= BREAKPOINTS.SM){
      this.preview = 1;
      return;
    }
    if(value <= BREAKPOINTS.MD){
      this.preview = 2;
      return;
    }
    if(value <= BREAKPOINTS.LG){
      this.preview = 3;
      return;
    }
    if(value <= BREAKPOINTS.XL){
      this.preview = 4;
      return;
    }
    // if(value <= BREAKPOINTS.XXL){
    //   this.preview = 5;
    //   return;
    // }
    this.preview = 4;
  }

}
