import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes';
import { HeroService } from '../services';

@Component({
  selector: 'app-hero-master',
  templateUrl: './hero-master.component.html',
  styleUrls: [ './hero-master.component.scss' ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

