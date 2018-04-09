import {Component, NgModule, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports : [MatButtonModule],
  exports : [MatButtonModule],
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readyToCharge = false;
  putPayloadForm = {};
  payloadMatchHistory = {};
  payloadActualSeason = {
    curr_p2 : {},
    curr_p9 : {},
    curr_p10 : {},
    charged : false
  };

  constructor() { }

  ngOnInit() { }


  getFormData(payload) {
    setTimeout(() => this.readyToCharge = true);
    this.putPayloadForm = {payload : payload, charged : true};
  }

  getIfCanCharge(can) {
    this.readyToCharge = can;
  }

  getMatchHistory(payload) {
    this.payloadMatchHistory = {payload : payload, charged : true};
  }

  getActualSeasonStats(payload) {
    this.payloadActualSeason = {
      curr_p2: payload.curr_p2,
      curr_p9: payload.curr_p9,
      curr_p10: payload.curr_p10,
      charged : true  };
  }

}
