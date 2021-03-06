import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService }          from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],

  providers: [
     HeroService
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

