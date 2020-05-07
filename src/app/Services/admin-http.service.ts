import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../Forms/UserRegistrationField';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private http: HttpClient,
    private router: Router) { }

    public findAllAdmin(): Observable < Admin[] > {
      return this.http.get<Admin[]>('http://localhost:8080/api/admin/list');
    }

    public registrAdmin(admin: Admin) {
      let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
      let options = {
        headers: httpHeaders
      };
      return this.http.post<Admin>('http://localhost:8080/api/admin/save', admin,options);
    }

    public deleteAdmin(id){
      return this.http.delete(`http://localhost:8080/api/delete/admin/${id}`);
    }
}
