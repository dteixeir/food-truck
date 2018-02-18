import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Login } from './login';
import { LoginService } from './loginService';
import { Subject } from 'rxjs/Subject';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-login',
  templateUrl: './loginComponent.html',
  styleUrls: [ './loginComponent.scss' ]
})

export class LoginComponent implements OnInit {
  @Input() login: Login = new Login();

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  attemptLogin() {
    this.loginService.login(this.login)
      .toPromise()
      .then(token => {
        localStorage.setItem('jwt', JSON.stringify(token));
        this.router.navigateByUrl('/foodtruck');
      })
      .catch(({ error }) => console.log(error));
  }
}
