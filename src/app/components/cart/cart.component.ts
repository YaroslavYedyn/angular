import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    const localCart = localStorage.getItem('localCart');
    this.products = JSON.parse(localCart);
  }

  removeAll(): void {
    localStorage.removeItem('localCart');
    this.products = [];
    this.cartService.setNewState();
  }

  singleDelete(itemId: number): void {
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === itemId) {
          this.products.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.products));
        }
      }
      this.cartService.setNewState();
    }
  }
}
