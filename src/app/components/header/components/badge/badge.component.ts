import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  hidden = false;
  cardsNumbers: string;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    // this.cardsNumbers = JSON.parse(localStorage.getItem('localCart'));
    this.cartService.getState().subscribe(value => this.cardsNumbers = value);
  }

}
