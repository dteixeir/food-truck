import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent, HeroDetailComponent } from './hero-module';
import { FoodTruckCollection, FoodTruckDetail } from './foodTruckModule';

import { DashboardComponent } from './dashboard/dashboard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'hero', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'foodtruck', component: FoodTruckCollection },
  { path: 'foodtruck/:id', component: FoodTruckDetail }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
