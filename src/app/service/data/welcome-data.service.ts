import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWordbean>('http://localhost:8081/helloworldbean');
  }

  executeHelloWorldBeanServicePathParam(name) {
    // const basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // const headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   });

    return this.http.get<HelloWordbean>(`http://localhost:8081/helloworld/pathvariable/${name}`, // { headers}
    );
  }

  // createBasicAuthHttpHeader() {
  //   const username = 'user';
  //   const password = 'password';
  //   const basicAuthHeaderString = `Basic ${window.btoa(username + ':' + password)}`;
  //   return basicAuthHeaderString;
  // }
}

export class HelloWordbean {
  constructor(public message: string) {}
}
/* Access to XMLHttpRequest at 'http://localhost:8081/helloworld/pathvariable/femi' from origin 'http://localhost:4200'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
