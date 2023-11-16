import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './header-user/header-user.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderUserComponent
  ],
  exports: [
    HeaderUserComponent
  ]
})
export class ComponentsModule { }
