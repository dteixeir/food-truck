import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FoodTruck } from '../foodTruck';
import { FoodTruckService } from '../foodTruckService';
import { BaseDetail } from '../../baseClasses';

@Component({
  selector: 'app-food-truck-detail',
  templateUrl: './foodTruckDetail.html',
  styleUrls: [ './foodTruckDetail.scss' ]
})

export class FoodTruckDetail extends BaseDetail<FoodTruckService, FoodTruck> implements OnInit {
  @Input() item: FoodTruck;

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public foodTruckService: FoodTruckService
  ) {
    super(
      route,
      location,
      foodTruckService,
      'FoodTruck',
      'FoodTrucks'
    );

    this.canEditClaim("Admin");
  }

  ngOnInit() {
    this.getById();
  }
}
