import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from '../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService, ServiceParams } from '../baseClasses';

@Injectable()
export class HeroService extends BaseService {

  constructor(
    public http: HttpClient,
    public messageService: MessageService
  ) {
    super(
      http,
      messageService,
      {
        serviceName: 'HeroService',
        url: 'api/heroes',
        entitySingle: 'Hero',
        entityCollection: 'Heroes'
      }
    );
  }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.params.url).pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  // getHero(id: number): Observable<Hero> {
  //   return this.http.get<Hero>(`${this.params.url}/${id}`).pipe(
  //       tap(_ => this.log(`fetched hero id=${id}`)),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }

  // /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.params.url, hero, this.httpOptions).pipe(
  //       tap((_: Hero) => this.log(`added hero w/ id=${_.id}`)),
  //       catchError(this.handleError<Hero>('addHero'))
  //     );
  // }

  // /** PUT: update the hero on the server */
  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.params.url, hero, this.httpOptions).pipe(
  //     tap((_: number) => this.log(`updated hero id=${_}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.params.url}/${id}`;

  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap((_: Hero) => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

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
