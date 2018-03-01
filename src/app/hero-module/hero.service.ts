import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseRestService, ServiceParams } from '../baseClasses';

@Injectable()
export class HeroService extends BaseRestService {

  constructor(
    public http: HttpClient,
    public messageService: MessageService
  ) {
    super(
      http,
      messageService,
      {
        serviceName: 'HeroService',
        url: '/heroes',
        entitySingle: 'Hero',
        entityCollection: 'Heroes'
      }
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
