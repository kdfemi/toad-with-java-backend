import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(private  basicAuthService: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const username = 'user';
    // const password = 'password';
    // const basicAuthHeaderString = `Basic ${window.btoa(username + ':' + password)}`;
    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const username = this.basicAuthService.getAuthenticatedUser();
    if (basicAuthHeaderString && username) {
      req = req.clone({
      setHeaders: {
      Authorization: basicAuthHeaderString
      }
    });
  }
    return next.handle(req);
}
}
