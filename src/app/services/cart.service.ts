import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartState = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('localCart')));

  constructor() {
  }

  getState(): BehaviorSubject<string> {
    return this.cartState;
  }

  setNewState(): void {
      this.cartState.next(JSON.parse(localStorage.getItem('localCart')));
  }
}
