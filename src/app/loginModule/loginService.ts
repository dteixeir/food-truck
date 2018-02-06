import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceParams, BaseService } from '../baseClasses';

import { Login } from './login';

@Injectable()
export class LoginService {
  private email: string = '';
  private password: string = '';

  private url: 'api/login';
  private entitySingle: 'Login';
  private entityCollection: 'Logins';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {

  }

  public login(login: Login): Observable<boolean> {
    return this.http.post<boolean>(this.url, login);
    // .pipe(
    //   tap(login => this.log(`fetched ${this.params.entitySingle}`)),
    //   catchError(this.handleError('login', []))
    //   );
  }
}
