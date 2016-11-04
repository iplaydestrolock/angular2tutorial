import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './mainPage/dashboard.component';
import { HeroDetailComponent } from './mainPage/hero-detail.component';
import { HeroesComponent }     from './mainPage/heroes.component';
import { HeroService }         from './mainPage/hero.service';

import { AppRoutingModule}     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
