import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderUserComponent,
    HeaderSearchComponent
  ],
  exports: [
    HeaderUserComponent,
    HeaderSearchComponent
  ]
})
export class ComponentsModule { }
