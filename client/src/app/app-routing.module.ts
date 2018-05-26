import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodTruckCollection, FoodTruckDetail } from './foodTruckModule';

import { LoginComponent } from './loginModule';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'foodtruck', component: FoodTruckCollection },
  { path: 'foodtruck/:id', component: FoodTruckDetail }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
