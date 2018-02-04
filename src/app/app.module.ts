import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatInputModule, MatCheckboxModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './appComponent/app.component';
import { DashboardComponent } from './dashboard/dashboard';

import { HeroDetailComponent, HeroesComponent, HeroSearchComponent, HeroService } from './hero-module/';

import { FoodTruckDetail, FoodTruckCollection, FoodTruckService } from './foodTruckModule/';
import { MessagesComponent, MessageService } from './messages-module/';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,

    FoodTruckDetail,
    FoodTruckCollection,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    FoodTruckService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
