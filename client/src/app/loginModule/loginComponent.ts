import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Login } from './login';
import { LoginService } from './loginService';

@Component({
  selector: 'app-login',
  templateUrl: './loginComponent.html',
  styleUrls: [ './loginComponent.scss' ]
})

export class LoginComponent implements OnInit {
  @Input() login: Login = new Login();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  attemptLogin(): void {
    console.log('test');
    this.loginService.login(this.login).subscribe((result) => {
        console.log(result);
        // this.goBack();
      });
  }
}
