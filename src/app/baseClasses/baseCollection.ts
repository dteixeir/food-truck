import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseRestService } from './baseService/index';
import { BaseEntity } from './baseEntity';

export interface IBaseCollection<S extends BaseRestService, I extends BaseEntity>  {
  router: Router;
  service: S;
  items: I[];
  singularEntity: string;
  pluralEntity: string;
}

@Injectable()
export class BaseCollection<S extends BaseRestService, I extends BaseEntity> implements IBaseCollection<S, I> {
  constructor(
    public router: Router,
    public service: S,
    public items: I[],
    public singularEntity: string,
    public pluralEntity: string
  ) {
  }

  public getAll() {
    this.service.getAll<I>().subscribe(x => {
      this.items = x as I[];
    });
  }

  public add(item: I): void {
    if (!item) { return; }

    this.service.add<I>(item).subscribe(x => {
      this.items.push(x);
      this.service.add(x).subscribe();
    });
  }

  public delete(item: I): void {
    this.items = this.items.filter(h => h !== item);
    this.service.delete(item).subscribe();
  }

  public changeRoute(item: I): void {
    this.router.navigateByUrl(`/${this.singularEntity.toLowerCase()}/${item.id}`);
  }
}

