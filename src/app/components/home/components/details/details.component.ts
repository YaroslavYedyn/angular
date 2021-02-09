import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../../models/product';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productDetails: Product;
  item: any = [];
  cartNumber = 0;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.activatedRoute.params.subscribe(value => {
      this.productDetails = this.router.getCurrentNavigation().extras.state as Product;
    });
  }


  ngOnInit(): void {
  }

  addCart(item): void {
    const cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      const storeDataGet: any = [];
      storeDataGet.push(item);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    } else {
      const id = item.id;
      var index = -1;
      this.item = JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.item.length; i++) {
        if (+id === +this.item[i].id) {
          this.item[i].id = item.id;
          index = i;
          break;
        }
      }
      if (index === -1) {
        this.item.push(item);
        localStorage.setItem('localCart', JSON.stringify(this.item));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.item));
      }
    }
    this.cartNumberFunc();
    this.cartService.setNewState();
  }

  cartNumberFunc(): void {
    const cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
  }
}
