import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: '';
  message = '';
  constructor(private route: ActivatedRoute, private serviceData: WelcomeDataService) {
    const name = 'name';
    this.name = route.snapshot.params[name];
   }

  ngOnInit() {
  }
  getWelcome() {
    this.serviceData.executeHelloWorldBeanService().subscribe(
      (data) => this.message = data.message,
      (err) => this.message = err.error.message
    );
  }

  getWelcomeWithParam() {
    this.serviceData.executeHelloWorldBeanServicePathParam(this.name).subscribe(
      (data) => this.message = data.message,
      (err) => this.message = err.error.message
    );
}
}
