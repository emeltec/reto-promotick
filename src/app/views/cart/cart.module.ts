import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CartRoutingModule } from './cart-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    CartRoutingModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
