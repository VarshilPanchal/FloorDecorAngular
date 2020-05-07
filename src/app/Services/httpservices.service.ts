import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Forms/UserRegistrationField';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  // users: User[];

  

constructor(private http: HttpClient,
  private router: Router) { }


  public findAllUser(): Observable < User[] > {
  return this.http.get<User[]>('http://localhost:8080/api/user/list');
}


  public registrationOfUser(user: User) {
  let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
  let options = {
    headers: httpHeaders
  };
  return this.http.post<User>('http://localhost:8080/api/save/user', user, options)
}

  public deleteUser(id){
  return this.http.delete(`http://localhost:8080/api/delete/user/${id}`)
}

}