import { Injectable } from '@angular/core';
import { Product } from '../Forms/model/Product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
const  SERVICE_URL = "http://localhost:8080/api/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {


  constructor(private http: HttpClient,
    private router: Router) { }

  public findAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${SERVICE_URL}`);
  }

  public findAllActiveProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${SERVICE_URL}active`);
  }

  public findAllInactiveProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${SERVICE_URL}inactive`);
  }

  public findProductById(id: number) {
    return this.http.get<Product>(`${SERVICE_URL}` + `${id}`);
  }

  registrationOfProduct(product: Product) {

    return this.http.post<Product>(`${SERVICE_URL}`, product);
  }

  updateProduct(id, product) {
    return this.http.put<Product>(`${SERVICE_URL}${id}`, product);
  }

  getName(id) {
    return this.http.get(`${SERVICE_URL}productname/${id}`);
  }

  changeStatus(id, number) {
    return this.http.put(`${SERVICE_URL}${id}/${number}`,Product)
  }

}
