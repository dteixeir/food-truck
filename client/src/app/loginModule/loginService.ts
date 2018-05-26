import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceParams, BaseService } from '../baseClasses';
import { Login } from './login';

@Injectable()
export class LoginService extends BaseService {
  private username: string = '';
  private password: string = '';

  private entitySingle: string = 'Login';
  private entityCollection: string = 'Logins';

  constructor(
    public http: HttpClient,
    public messageService: MessageService
  ) {
    super(
      messageService,
      {
        serviceName: 'LoginService',
        url: 'auth',
        entitySingle: 'login',
        entityCollection: 'logins'
      }
    );
  }

  // TODO: Error?
  public login(login: Login): Observable<any> {
    return this.http.post(`${this.url}/authenticate`, login);
      // .catch((error, caught) => {
      //   return Observable.throw(error);
      // });
  }
}
