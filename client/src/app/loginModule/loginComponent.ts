import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Login } from './login';
import { LoginService } from './loginService';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './loginComponent.html',
  styleUrls: [ './loginComponent.scss' ]
})

export class LoginComponent implements OnInit {
  @Input() login: Login = {
    username: 'danotex',
    password: 'test'
  }

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
    .subscribe(result => {
        // TODO: validate token!
        localStorage.setItem('token', result.token);
        this.router.navigateByUrl('/foodtruck');
    });
  }
}
