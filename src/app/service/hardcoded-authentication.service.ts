import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'femi' && password === 'pass') {
      window.sessionStorage.setItem('authUser', username);
      return true;
  } else {
    return false;
  }
  }

  isUserLoggedIn() {
    const user =  window.sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logout() {
    window.sessionStorage.removeItem('authUser');
  }
}
