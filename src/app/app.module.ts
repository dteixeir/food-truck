import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './appComponent/app.component';
import { DashboardComponent } from './dashboard/dashboard';

import { HeroesComponent } from './hero-master/hero-master.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService, MessageService } from './services';

import { MessagesComponent } from './messages/messages';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
