import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatInputModule, MatCheckboxModule, MatGridListModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './appComponent/app.component';

import { FoodTruckDetail, FoodTruckCollection, FoodTruckService } from './foodTruckModule/';
import { MessagesComponent, MessageService } from './messages-module/';
import { LoginComponent, LoginService } from './loginModule';

import { environment } from '../environments/environment';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './baseClasses/';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,

    FoodTruckDetail,
    FoodTruckCollection,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FoodTruckService,
    MessageService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
