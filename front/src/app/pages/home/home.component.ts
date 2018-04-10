import {Component, NgModule, OnInit } from '@angular/core';

import {MatButtonModule, MatSelectModule} from '@angular/material';
import {ToastrService} from "ngx-toastr";

@NgModule({
  imports : [MatButtonModule, MatSelectModule],
  exports : [MatButtonModule, MatSelectModule],
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  constructor(private toastrService: ToastrService) { }

  ngOnInit() { }


  getFormData(payload) {
    if(payload.username != "") {
      setTimeout(() => this.readyToCharge = true);
      this.putPayloadForm = {payload : payload, charged : true};
    }else {
      this.toastrService.info("Le champ username est vide", "Info champ :")
    }
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
