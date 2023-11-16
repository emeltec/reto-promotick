import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ValesComponent } from './vales/vales.component';
import { ProductosComponent } from './productos/productos.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    ValesComponent,
    ProductosComponent,
    VuelosComponent,
  ],
  exports: [
    HomeComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
