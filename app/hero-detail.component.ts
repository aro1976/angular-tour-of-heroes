/**
 * Created by aoliveir on 20/10/16.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
               .then(hero => this.hero = hero);
        });
    }
    constructor(
       private heroService: HeroService,
       private route: ActivatedRoute,
       private location: Location
    ) {}

    getHero(id: number): Promise<Hero> {
        return this.heroService.getHeroes()
           .then(heroes => heroes.find(hero => hero.id === id));
    }

    save(): void {
        this.heroService.update(this.hero)
           .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
