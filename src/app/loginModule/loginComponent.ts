import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})

export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  login(): void {
    console.log('test');
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
  }
}
