import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FoodTruck } from './foodTruck';
import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FoodTruckService {

  private url = 'api/foodtrucks';  // URL to web api
  private singularEntityName = 'foodtruck';
  private pluralEntityName = 'foodtrucks';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAll(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(this.url).pipe(
        tap(foodTrucks => this.log(`fetched ${this.pluralEntityName}`)),
        catchError(this.handleError(`get${this.pluralEntityName}`, []))
      );
  }

  getById(id: number): Observable<FoodTruck> {
    return this.http.get<FoodTruck>(`${this.url}/${id}`).pipe(
        tap(_ => this.log(`fetched ${this.singularEntityName} id=${id}`)),
        catchError(this.handleError<FoodTruck>(`get${this.singularEntityName} id=${id}`))
      );
  }

  /** POST: add a new FoodTruck to the server */
  add(foodTruck: FoodTruck): Observable<FoodTruck> {
    return this.http.post<FoodTruck>(this.url, foodTruck, this.httpOptions).pipe(
        tap((_: FoodTruck) => this.log(`added ${this.singularEntityName} w/ id=${_.id}`)),
        catchError(this.handleError<FoodTruck>(`add${this.singularEntityName}`))
      );
  }

  /** PUT: update the FoodTruck on the server */
  update (foodTruck: FoodTruck): Observable<any> {
    return this.http.put(this.url, foodTruck, this.httpOptions).pipe(
      tap((_: number) => this.log(`updated ${this.singularEntityName} id=${_}`)),
      catchError(this.handleError<any>(`update${this.singularEntityName}`))
    );
  }

  /** DELETE: delete the FoodTruck from the server */
  delete(foodTruck: FoodTruck | number): Observable<FoodTruck> {
    const id = typeof foodTruck === 'number' ? foodTruck : foodTruck.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<FoodTruck>(url, this.httpOptions).pipe(
      tap((_: FoodTruck) => this.log(`deleted ${this.singularEntityName} id=${id}`)),
      catchError(this.handleError<FoodTruck>(`delete${this.singularEntityName}`))
    );
  }

  /* GET FoodTrucks whose name contains search term */
  search(term: string): Observable<FoodTruck[]> {
    if (!term.trim()) {
      // if not search term, return empty foodTruck array.
      return of([]);
    }
    return this.http.get<FoodTruck[]>(`api/${this.pluralEntityName}/?name=${term}`).pipe(
      tap(_ => this.log(`found ${this.pluralEntityName} matching "${term}"`)),
      catchError(this.handleError<FoodTruck[]>(`search${this.singularEntityName}`, []))
    );
  }

  private log(message: string) {
    this.messageService.add(`${this.singularEntityName}Service: ` + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
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
