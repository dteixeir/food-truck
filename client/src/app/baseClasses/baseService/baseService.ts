import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceParams } from './serviceParams';
import { BaseEntity } from '../baseEntity';

export interface IBaseService  {
  http: HttpClient;
  messageService: MessageService;
  params: ServiceParams;
}

@Injectable()
export class BaseService implements IBaseService {
  constructor(
    public http: HttpClient,
    public messageService: MessageService,
    public params: ServiceParams
  ) { }

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public add<T extends BaseEntity>(item: T): Observable<T> {
    return this.http.post<T>(this.params.url, item, this.httpOptions).pipe(
      tap((_: T) => this.log(`added ${this.params.entitySingle} w/ id=${_.id}`)),
      catchError(this.handleError<T>('addHero'))
    );
  }

  public getAll<T extends BaseEntity>(): Observable<T[]> {
    return this.http.get<T[]>(this.params.url).pipe(
        tap(items => this.log(`fetched ${this.params.entityCollection}`)),
        catchError(this.handleError(`get${this.params.entityCollection}`, []))
      );
  }

  public getById<T extends BaseEntity>(id: number): Observable<T> {
    return this.http.get<T>(`${this.params.url}/${id}`).pipe(
      tap(_ => this.log(`fetched ${this.params.entitySingle} id=${id}`)),
      catchError(this.handleError<T>(`get${this.params.entitySingle} id=${id}`))
    );
  }

  public update<T extends BaseEntity>(item: T): Observable<T> {
    return this.http.put(this.params.url, item, this.httpOptions).pipe(
      tap((_: number) => this.log(`updated ${this.params.entitySingle} id=${_}`)),
      catchError(this.handleError<any>(`update${this.params.entitySingle}`))
    );
  }

  public delete<T extends BaseEntity>(item: T | number): Observable<T> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.params.url}/${id}`;

    return this.http.delete<T>(url, this.httpOptions).pipe(
      tap((_: T) => this.log(`deleted ${this.params.entitySingle} id=${id}`)),
      catchError(this.handleError<T>(`delete${this.params.entitySingle}`))
    );
  }

  protected log(message: string) {
    this.messageService.add('HeroService: ' + message);
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

