import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from "ng2-charts";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { StatsService  } from './service/stats.service';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorService} from "./service/toastr/toastr.service";
import {routes} from "./routes/routes";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [StatsService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
