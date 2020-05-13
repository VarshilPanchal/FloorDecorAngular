import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Forms/model/User.model';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  // users: User[];
  
  public username;

  constructor(private http: HttpClient,
    private router: Router) { }


  public findAllUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/user/list',httpOptions);
  }


  // public registrationOfUser(user: User) {
  //   let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
  //   let options = {
  //     headers: httpHeaders
  //   };
  //   return this.http.post<User>('http://localhost:8080/api/save/user', user, options)
  // }

  public deleteUser(id) {
    return this.http.delete(`http://localhost:8080/api/user/delete/${id}`)
  }

  // public authenticate(username, password) {
  //   return this.http.post<User>(`http://localhost:8080/api/authenticate/user`, { username, password });
  // }

  public updateUser(id: any, user: User) {

    return this.http.put<User>(`http://localhost:8080/api/user/update/${id}`, user);
  }

  public userDetailById(id: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.http.get<User>(`http://localhost:8080/api/` + 'user/single/' + `${id}`, { headers });
  }

  getUserId() {
    let username = localStorage.getItem('Username');
    return this.http.get(`http://localhost:8080/api/user/${username}`);
  }


  isUserLoggedIn() {
    let user = localStorage.getItem('Username');
    return !(user === null);
  }

  
  logout() {
    localStorage.removeItem('Username');
    console.log("username successfully removed");
     this.router.navigate(['/logout']);
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

}