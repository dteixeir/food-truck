import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FoodTruck } from '../foodTruck';
import { FoodTruckService } from '../foodTruckService';

@Component({
  selector: 'app-food-truck-detail',
  templateUrl: './foodTruckDetail.html',
  styleUrls: [ './foodTruckDetail.scss' ]
})

export class FoodTruckDetail implements OnInit {
  @Input() item: FoodTruck;

  constructor(
    private route: ActivatedRoute,
    private foodTruckService: FoodTruckService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getById();
  }

  getById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodTruckService.getById(id).subscribe(foodTruck => {
      this.item = foodTruck;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.foodTruckService.update(this.item).subscribe(() => {
      this.goBack();
    });
  }
}
