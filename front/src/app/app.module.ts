import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from "ng2-charts";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { StatsService  } from './service/stats.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
