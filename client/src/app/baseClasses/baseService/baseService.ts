import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../messages-module';
import { HttpHeaders } from '@angular/common/http';
import { ServiceParams } from './serviceParams';
import { BaseEntity } from '../baseEntity';
import { environment } from '../../../environments/environment';


export interface IBaseService  {
  messageService: MessageService;
  params: ServiceParams;
}

@Injectable()
export class BaseService implements IBaseService {
  constructor(
    public messageService: MessageService,
    public params: ServiceParams
  ) {
  }

  protected url: string = `${environment.api}/${this.params.url}`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  protected getHttpOptions() {
    // httpHeaders is immutable and appending to the end of the object keeps appending to the object upon
    // auth. returning the appended object fails due to a return difference type.
    const token = JSON.parse(localStorage.getItem('jwt'));

    if (token) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token.token.toString()}`
        })
      };
    }

    return this.httpOptions;
  }

  protected log(message: string) {
    this.messageService.add(`${this.params.serviceName}: ${message}`);
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
      throw Observable.throw(error);
    };
  }
}

