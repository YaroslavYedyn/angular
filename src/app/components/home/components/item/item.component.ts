import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  details(): void {
    this.router.navigate(['item', this.product.id], {
      relativeTo: this.activatedRoute,
      state: this.product,
    });
  }
}
