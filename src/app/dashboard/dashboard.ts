import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../hero-module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: [ './dashboard.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll<Hero>()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
