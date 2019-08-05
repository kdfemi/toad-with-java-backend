import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAthenticationService(username, password) {

    const basicAuthHeaderString = `Basic ${window.btoa(username + ':' + password)}`;
    const headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      });

    return this.http.get<AuthBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map(
        (data) => {
          window.sessionStorage.setItem(AUTHENTICATED_USER, username);
          window.sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }
  executeJWTAthenticationService(username, password) {



    return this.http.post<any>(`${API_URL}/authenticate`, {username, password}).pipe(
      map(
        (data) => {
          window.sessionStorage.setItem(AUTHENTICATED_USER, username);
          window.sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }
  getAuthenticatedUser() {
    return  window.sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser) {
      return  window.sessionStorage.getItem(TOKEN);
    }
  }
  isUserLoggedIn() {
    const user =  window.sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    window.sessionStorage.removeItem(AUTHENTICATED_USER);
    window.sessionStorage.removeItem(TOKEN);
  }
}

export class AuthBean {
  constructor(public messgae: string) {}
}
