import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule),
    // canActivate: [UserLoggedGuard]
  },
  {
    path: 'carrito',
    loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule),
    // canActivate: [UserLoggedGuard]
  },

  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
