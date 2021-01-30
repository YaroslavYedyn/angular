import {Component, OnInit} from '@angular/core';
// @ts-ignore
import iconCart from './img/shopping_cart-white-18dp.svg';
// @ts-ignore
import iconWishlist from './img/favorite_border-white-18dp.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currency = 'USD';
  iconCart = iconCart;
  iconWishlist = iconWishlist;

  constructor() {
  }

  ngOnInit(): void {
  }

}
