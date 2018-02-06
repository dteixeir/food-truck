import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent, HeroDetailComponent } from './hero-module';
import { FoodTruckCollection, FoodTruckDetail } from './foodTruckModule';

import { DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './loginModule';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

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
