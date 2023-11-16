import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyFormatPipe } from './currency-format.pipe';



@NgModule({
  declarations: [CurrencyFormatPipe],
  exports: [CurrencyFormatPipe],
  providers: [CurrencyPipe]
})
export class PipesModule { }
