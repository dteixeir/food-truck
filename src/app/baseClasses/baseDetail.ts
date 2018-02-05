import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from './baseService/index';
import { BaseEntity } from './baseEntity';

export interface IBaseDetail<S extends BaseService, I extends BaseEntity>  {
  route: ActivatedRoute;
  location: Location;
  service: S;
  singularEntity: string;
  pluralEntity: string;
}

@Injectable()
export class BaseDetail<S extends BaseService, I extends BaseEntity> implements IBaseDetail<S, I> {
  public item: I;

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public service: S,
    public singularEntity: string,
    public pluralEntity: string
  ) {
  }

  getById(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.getById<I>(id).subscribe(foodTruck => {
      this.item = foodTruck;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.update(this.item).subscribe(() => {
      this.goBack();
    });
  }
}

