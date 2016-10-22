import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService }          from './hero.service';
import { DashboardComponent } from "./dashboard.component";
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
     HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

