import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BaseDetail } from '../../baseClasses';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})

export class HeroDetailComponent extends BaseDetail<HeroService, Hero> implements OnInit {
  @Input() hero: Hero;

  constructor(
    public route: ActivatedRoute,
    public heroService: HeroService,
    public location: Location
  ) {
    super(
      route,
      location,
      heroService,
      'Hero',
      'Heroes'
    );
  }

  ngOnInit() {
    this.getById();
  }
}
