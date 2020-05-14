// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenStorageServiceService } from '../token/token-storage-service.service';

// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private token: TokenStorageServiceService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     let authReq = req;
//     const token = this.token.getToken();
//     if (token != null) {
//       authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
//     }
//     return next.handle(authReq);
//   }
// }

// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
// ];
