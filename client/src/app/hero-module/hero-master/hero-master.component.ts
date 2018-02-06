import { Component, OnInit } from '@angular/core';
import { BaseCollection } from '../../baseClasses';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroSearchComponent } from '../index';

@Component({
  selector: 'app-hero-master',
  templateUrl: './hero-master.component.html',
  styleUrls: [ './hero-master.component.scss' ]
})

export class HeroesComponent extends BaseCollection<HeroService, Hero> implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    public heroService: HeroService,
    public router: Router
  ) {
    super(
      router,
      heroService,
      new Array<Hero>(),
      'Hero',
      'Heroes'
    );
  }

  ngOnInit() {
    this.getAll();
  }
}

