import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './appComponent/app.component';
import { DashboardComponent } from './dashboard/dashboard';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './hero-master/hero-master.component';
import { MessagesComponent } from './messages/messages';

import { HeroService, MessageService } from './services';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  imports: [
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
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
