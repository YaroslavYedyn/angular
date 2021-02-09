import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}

