import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CurrencyFormatPipe } from 'src/app/pipes/currency-format.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
