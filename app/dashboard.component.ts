/**
 * Created by aoliveir on 21/10/16.
 */

import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { Router } from "@angular/router";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";


@Component({
   moduleId: module.id,
   selector: 'my-dashboard',
   templateUrl: 'dashboard.component.html',
   styleUrls: [ 'dashboard.component.css' ],
   providers: [ HeroService ]
})

export class DashboardComponent implements OnInit {
   heroes: Hero[] = [];

   constructor(
      private router: Router,
      private heroService: HeroService,
      private location: Location
   ) {}

   ngOnInit(): void {
      this.heroService.getHeroes()
         .then(heroes => this.heroes = heroes.slice(1, 5));
   }

   gotoDetail(hero: Hero): void {
      let link = ['/detail', hero.id];
      this.router.navigate(link);
   }
}
