import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Forms/model/User.model';
import { TokenStorageServiceService } from './token/token-storage-service.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const USER_API = 'http://localhost:8080/api/users';

const API_URL = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  roles: String[];
  adminLoggedIn = false;

  public username;

  constructor(private http: HttpClient,
    private router: Router, private tokenService: TokenStorageServiceService) { }


  public findAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${USER_API}`);
  }

  public findAllUsernames(): Observable<String[]> {
    return this.http.get<String[]>(`${USER_API}/username`);
  }

  public deleteUser(id) {
    return this.http.delete(`${USER_API}/${id}`)
  }

  public updateUser(id: any, user: User) {

    return this.http.put<User>(`${USER_API}/${id}`, user);
  }

  public updatePassword(id: any, user: User) {

    return this.http.put<User>(`${USER_API}/editpassword/${id}`, user);
  }

  public userDetailById(id: any) {
    // const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('auth-token')}` });
    return this.http.get<User>(`${USER_API}/${id}`);
  }

  // public userProfileDetailById() {
  // let id = sessionStorage.getItem('id');
  // return id
  // }

  getUserId() {
    let username = localStorage.getItem('Username');
    return this.http.get(`${USER_API}/user/${username}`);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('Username');
    return !(user === null);
  }

  isAdminLoggedIn() {
    let admin = this.tokenService.getUser();
    this.roles = admin.roles;
    if (this.adminLoggedIn = this.roles.includes('ROLE_ADMIN')) {
      return true;
    } else {
      return
    }
  }

  logout() {
    localStorage.removeItem('Username');
    window.sessionStorage.clear();
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

  public getActiveUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_API + '/active');
  }

  getInactiveUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_API + '/inactive');
  }
  
  public changeStatus(id, number) {
    return this.http.put(`${USER_API}/${id}/${number}`,User);
  }
}