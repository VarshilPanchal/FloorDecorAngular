import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Forms/model/User.model';

const AUTH_API = 'http://localhost:8080/api/auth/';

const USER_API = 'http://localhost:8080/api/user/';

const API_URL = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  public username;

  constructor(private http: HttpClient,
    private router: Router) { }


  public findAllUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/user/list');
  }

  public deleteUser(id) {
    return this.http.delete(`http://localhost:8080/api/user/delete/${id}`)
  }

  public updateUser(id: any, user: User) {

    return this.http.put<User>(`http://localhost:8080/api/user/update/${id}`, user);
  }

  public userDetailById(id: any) {
    // const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('auth-token')}` });
    return this.http.get<User>(`http://localhost:8080/api/user/single/${id}`);
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
    },httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    },httpOptions);
  }
 
  public getActiveUser(): Observable<User[]>{
    return this.http.get<User[]>(USER_API + 'active');
  }

  getInactiveUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_API + 'inactive');
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  changeStatus(id,status){
    return this.http.get(`http://localhost:8080/api/user/updatestatus/${id}/${status}`)
  }
}