import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {CheckoutComponent} from './components/checkout/checkout.component';

import {AuthGuard} from '@auth0/auth0-angular';
import {AuthComponent} from './components/auth/auth/auth.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  // {
  //   path: 'auth', loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule),
  //   canActivate: [AuthGuard],
  // }
  {
    path: 'auth', component: AuthComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
