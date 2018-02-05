import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FoodTruck } from './foodTruck';
import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseService, ServiceParams } from '../baseClasses';

@Injectable()
export class FoodTruckService extends BaseService {

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
        url: 'api/foodtrucks',
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
    return this.http.get<FoodTruck[]>(`api/${this.pluralEntityName}/?name=${term}`).pipe(
      tap(_ => this.log(`found ${this.pluralEntityName} matching "${term}"`)),
      catchError(this.handleError<FoodTruck[]>(`search${this.singularEntityName}`, []))
    );
  }
}
