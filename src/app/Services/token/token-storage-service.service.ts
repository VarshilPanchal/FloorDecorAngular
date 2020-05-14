import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
// const ROLE_ADMIN = 'ROLE_ADMIN';
// const ROLE_ADMIN: 'ROLE_ADMIN' ;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    // window.sessionStorage.setItem(USER_KEY, user);

  }

  public saveRole(user) {
    window.sessionStorage.setItem('role', user);
  }

  public isAdminLoggedin() {
    console.log(true)
    return true;

  }

  public getUser() {
    console.log(USER_KEY);
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

}