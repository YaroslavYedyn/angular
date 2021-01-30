import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {CheckoutComponent} from './components/checkout/checkout.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
