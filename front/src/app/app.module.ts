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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalStatComponent,
    SearchPlayerComponent,
    MatchHistoryComponent,
    ActualSeasonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    routes,
    CommonModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    HomeComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [StatsService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
