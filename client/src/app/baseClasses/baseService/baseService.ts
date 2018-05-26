import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

