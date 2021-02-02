import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor() {
  }

  ngOnInit(): void {
    let localCart = localStorage.getItem('localCart');
    this.products = JSON.parse(localCart);
  }

  removeAll(): void {
    localStorage.removeItem('localCart');
    this.products = [];
  }

  singleDelete(itemId: number): void {
    console.log(itemId);
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === itemId) {
          this.products.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.products));
        }
      }
    }
  }
}
