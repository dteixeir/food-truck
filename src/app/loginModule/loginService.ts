import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceParams, BaseService } from '../baseClasses';

@Injectable()
export class LoginService extends BaseService {
  private email: string = '';
  private password: string = '';

  constructor(
    http: HttpClient,
    messageService: MessageService
  ) {
      super(
        http,
        messageService,
        {
          serviceName: 'LoginService',
          url: 'api/login',
          entitySingle: 'Login',
          entityCollection: 'Logins'
        }
      );
   }

  login(): Observable<any> {
    return this.http.post<any>(this.params.url, {
      email: this.email,
      password: this.password
    }).pipe(
      tap(login => this.log(`fetched ${this.params.entitySingle}`)),
      catchError(this.handleError('login', []))
      );
  }
}
