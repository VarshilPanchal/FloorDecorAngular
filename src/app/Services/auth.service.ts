// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';


// const AUTH_API = 'http://localhost:8080/api/auth/';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient,
//     private router: Router) { }

//   login(credentials): Observable<any> {
//     return this.http.post(AUTH_API + 'signin', {
//       username: credentials.username,
//       password: credentials.password
//     });
//   }

//   register(user): Observable<any> {
//     return this.http.post(AUTH_API + 'signup', {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     });
//   }
// }
