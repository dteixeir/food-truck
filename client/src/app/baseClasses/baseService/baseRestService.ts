import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../messages-module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceParams } from './serviceParams';
import { BaseEntity } from '../baseEntity';
import { IBaseService, BaseService } from './baseService';
import { JwtHelper } from '../jwtHelper';

export interface IBaseRestService extends IBaseService {
  http: HttpClient;
}

@Injectable()
export class BaseRestService extends BaseService implements IBaseRestService {
  private jwtHelper: JwtHelper;
  
  constructor(
    public http: HttpClient,
    public messageService: MessageService,
    public params: ServiceParams
  ) {
    super(
      messageService,
      params
    );
    
    this.jwtHelper = new JwtHelper(this.http);
  }

  public add<T extends BaseEntity>(item: T): Observable<T> {
    return this.http.post<T>(this.url, item).pipe(
      tap((_: T) => this.log(`added ${this.params.entitySingle} w/ id=${_.id}`))
    );
  }

  public getAll<T extends BaseEntity>(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
        tap(items => {
          this.log(`fetched ${this.params.entityCollection}`)
        })
      );
  }

  public getById<T extends BaseEntity>(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`).pipe(
      tap(_ => this.log(`fetched ${this.params.entitySingle} id=${id}`))
    );
  }

  public update<T extends BaseEntity>(item: T): Observable<T> {
    return this.http.put<T>(this.url, item).pipe(
      tap((_: T) => this.log(`updated ${this.params.entitySingle} id=${_}`))
    );
  }

  public delete<T extends BaseEntity>(item: T | number): Observable<T> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<T>(url).pipe(
      tap((_: T) => this.log(`deleted ${this.params.entitySingle} id=${id}`))
    );
  }

  public hasClaim(claimName: string): Observable<boolean> {
    return this.jwtHelper.hasClaim(claimName);
  }
}

