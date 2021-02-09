import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './components/item/item.component';
import {DetailsComponent} from './components/details/details.component';
import {AuthGuard} from '@auth0/auth0-angular';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'item/:id', component: DetailsComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [HomeComponent, ItemComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
}
