import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FoodTruck } from './foodTruck';
import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseRestService, ServiceParams } from '../baseClasses';

@Injectable()
export class FoodTruckService extends BaseRestService {

  private singularEntityName = 'foodtruck';
  private pluralEntityName = 'foodtrucks';

  constructor(
    public http: HttpClient,
    public messageService: MessageService
  ) {
    super(
      http,
      messageService,
      {
        serviceName: 'FoodTruckService',
        url: 'foodtruck',
        entitySingle: 'FoodTruck',
        entityCollection: 'FoodTrucks'
      }
    );
   }

  /* GET FoodTrucks whose name contains search term */
  search(term: string): Observable<FoodTruck[]> {
    if (!term.trim()) {
      // if not search term, return empty foodTruck array.
      return of([]);
    }
    return this.http.get<FoodTruck[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found ${this.pluralEntityName} matching "${term}"`)),
      catchError(this.handleError<FoodTruck[]>(`search${this.singularEntityName}`, []))
    );
  }
}
