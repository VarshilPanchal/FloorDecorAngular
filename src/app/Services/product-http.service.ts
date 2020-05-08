import { Injectable } from '@angular/core';
import { Product } from '../Forms/UserRegistrationField';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient,
    private router: Router) { }

  public findAllUser(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/product/list');
  }
}
