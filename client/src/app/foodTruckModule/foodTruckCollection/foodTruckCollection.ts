import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FoodTruck } from '../foodTruck';
import { FoodTruckService } from '../foodTruckService';
import { BaseCollection } from '../../baseClasses';

@Component({
  selector: 'app-food-truck-collection',
  templateUrl: './foodTruckCollection.html',
  styleUrls: [ './foodTruckCollection.scss' ]
})

export class FoodTruckCollection extends BaseCollection<FoodTruckService, FoodTruck> implements OnInit {
  constructor(
    public service: FoodTruckService,
    public router: Router
  ) {
    super(
      router,
      service,
      new Array<FoodTruck>(),
      'FoodTruck',
      'FoodTrucks'
    );
  }

  ngOnInit() {
    this.getAll();
  }

  public addItem() {
    const truck: FoodTruck = new FoodTruck('test', 'test', '');
    this.service.add(truck).subscribe();
  }
}

