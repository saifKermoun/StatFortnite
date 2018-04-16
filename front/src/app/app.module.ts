import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from "ng2-charts";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { StatsService  } from './shared/service/StatService/stats.service';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorService} from "./shared/service/toastr/toastr.service";
import {routes} from "./routes/routes";
import { HomeComponent } from './pages/home/home.component';
import { GlobalStatComponent } from './components/global-stat/global-stat.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { MatchHistoryComponent } from './components/match-history/match-history.component';
import { ActualSeasonComponent } from './components/actual-season/actual-season.component';
import {ServerService} from "./shared/service/Server/server.service";
import { StatsWeekComponent } from './components/stats-week/stats-week.component';
import { TotalStatsUserComponent } from './components/total-stats-user/total-stats-user.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ComparaisonComponent } from './pages/comparaison/comparaison.component';
import { ComparaisonFormComponent } from './components/comparaison-form/comparaison-form.component';
import { ComparaisonStatsComponent } from './components/comparaison-stats/comparaison-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalStatComponent,
    SearchPlayerComponent,
    MatchHistoryComponent,
    ActualSeasonComponent,
    StatsWeekComponent,
    TotalStatsUserComponent,
    MenuComponent,
    ComparaisonComponent,
    ComparaisonFormComponent,
    ComparaisonStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    routes,
    CommonModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    HomeComponent,
    MenuComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [StatsService, ErrorService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
