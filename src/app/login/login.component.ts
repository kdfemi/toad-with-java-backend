import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalid = false;
  errorMessage = 'incorrect something something';

  constructor(private router: Router, private basicAuthServcie: BasicAuthenticationService,
              private hardcodedServcie: HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  doSomething() {
    if ( this.hardcodedServcie.authenticate(this.username, this.password)) {
      this.router.navigate(['/', 'welcome', this.username]);
      this.invalid = false;
  } else {
    this.invalid = true;
  }
  }

  handleBasicAuthLogin() {
    this.basicAuthServcie.executeAthenticationService(this.username, this.password).subscribe(
      (success) => {
        console.log(success);
        this.invalid = false;
        this.router.navigate(['/', 'welcome', this.username]);
      },
      (err) => {
        console.log(err);
        this.invalid = true;
      });
  }

  handleJWTBasicAuthLogin() {
    this.basicAuthServcie.executeJWTAthenticationService(this.username, this.password).subscribe(
      (success) => {
        console.log(success);
        this.invalid = false;
        this.router.navigate(['/', 'welcome', this.username]);
      },
      (err) => {
        console.log(err);
        this.invalid = true;
      });
  }
}
