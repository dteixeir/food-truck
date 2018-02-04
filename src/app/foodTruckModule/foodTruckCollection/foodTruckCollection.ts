import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FoodTruck } from '../foodTruck';
import { FoodTruckService } from '../foodTruckService';

@Component({
  selector: 'app-food-truck-collection',
  templateUrl: './foodTruckCollection.html',
  styleUrls: [ './foodTruckCollection.scss' ]
})

export class FoodTruckCollection implements OnInit {
  items: FoodTruck[];

  constructor(
    private foodTruckService: FoodTruckService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.foodTruckService.getAll()
      .subscribe(foodTrucks => {
        this.items = foodTrucks;
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.foodTruckService.add({ name } as FoodTruck).subscribe(foodTruck => {
      this.items.push(foodTruck);
    });
  }

  delete(foodTruck: FoodTruck): void {
    this.items = this.items.filter(h => h !== foodTruck);
    this.foodTruckService.delete(foodTruck).subscribe();
  }

  changeRoute(item: FoodTruck): void {
    this.router.navigateByUrl(`/foodtruck/${item.id}`);
  }
}

