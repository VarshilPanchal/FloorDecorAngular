import { Injectable } from '@angular/core';
import { Product } from '../Forms/model/Product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  ServicesUrl = "http://localhost:8080/api/product/";

  constructor(private http: HttpClient,
    private router: Router) { }

  public findAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/product/list');
  }

  public findProductById(id: number) {
    return this.http.get<Product>(`${this.ServicesUrl}` + `${id}`);
  }

  registrationOfProduct(product: Product) {

    return this.http.post<Product>(`http://localhost:8080/api/product/save`, product);
  }

  updateProduct(id, product) {
    return this.http.put<Product>(`http://localhost:8080/api/product/update/${id}`, product);
  }

  getName(id) {
    return this.http.get(`http://localhost:8080/api/product/productname/${id}`);
  }
}
